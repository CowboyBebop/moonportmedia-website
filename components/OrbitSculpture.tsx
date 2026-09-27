import { useEffect, useRef, useState } from "react";

export default function OrbitSculpture() {
  const host = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(preference.matches);
    const preferenceChange = () => setReduced(preference.matches);
    preference.addEventListener("change", preferenceChange);
    async function init() {
      try {
        const THREE = await import("three");
        const { RoomEnvironment } = await import(
          "three/examples/jsm/environments/RoomEnvironment.js"
        );
        if (disposed || !host.current) return;
        const mount = host.current;
        const renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
          powerPreference: "low-power",
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        renderer.setClearColor(0x000000, 0);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.35;
        mount.appendChild(renderer.domElement);
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 30);
        camera.position.set(0, 0, 6.5);
        const pmrem = new THREE.PMREMGenerator(renderer);
        const room = new RoomEnvironment();
        const environment = pmrem.fromScene(room, 0.04);
        scene.environment = environment.texture;
        room.dispose();
        pmrem.dispose();
        const sculpture = new THREE.Group();
        scene.add(sculpture);
        const silver = new THREE.MeshPhysicalMaterial({
          color: 0xc8c6d5,
          metalness: 1,
          roughness: 0.19,
          clearcoat: 1,
          clearcoatRoughness: 0.16,
        });
        const pearl = new THREE.MeshPhysicalMaterial({
          color: 0xe7cbd0,
          metalness: 0.7,
          roughness: 0.24,
          clearcoat: 1,
          iridescence: 0.75,
          iridescenceIOR: 1.35,
        });
        const graphite = new THREE.MeshPhysicalMaterial({
          color: 0x555364,
          metalness: 1,
          roughness: 0.21,
          clearcoat: 1,
        });
        const ringGeometry = new THREE.TorusGeometry(1.35, 0.13, 24, 128);
        const ring = new THREE.Mesh(ringGeometry, silver);
        ring.rotation.set(0.55, 0.35, -0.45);
        sculpture.add(ring);
        const innerGeometry = new THREE.TorusGeometry(1.02, 0.095, 24, 112);
        const innerRing = new THREE.Mesh(innerGeometry, graphite);
        innerRing.rotation.set(1.2, -0.65, 0.5);
        sculpture.add(innerRing);
        const sphereGeometry = new THREE.SphereGeometry(0.61, 48, 32);
        const sphere = new THREE.Mesh(sphereGeometry, pearl);
        sculpture.add(sphere);
        const light = new THREE.DirectionalLight(0xffe5d4, 4);
        light.position.set(-3, 4, 3);
        scene.add(light);
        const fill = new THREE.DirectionalLight(0xc7cdfa, 3);
        fill.position.set(3, -1, 2);
        scene.add(fill);
        let targetX = 0,
          targetY = 0,
          frame = 0,
          inView = true,
          angle = 0,
          last = 0;
        const pointer = (event: PointerEvent) => {
          if (event.pointerType === "touch") return;
          const rect = mount.getBoundingClientRect();
          targetY = ((event.clientX - rect.left) / rect.width - 0.5) * 0.9;
          targetX = ((event.clientY - rect.top) / rect.height - 0.5) * 0.6;
        };
        const reset = () => {
          targetX = 0;
          targetY = 0;
        };
        const draw = () => renderer.render(scene, camera);
        const resize = () => {
          const { width, height } = mount.getBoundingClientRect();
          renderer.setSize(width, height);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          draw();
        };
        const observer = new ResizeObserver(resize);
        observer.observe(mount);
        const visibility = new IntersectionObserver(([entry]) => {
          inView = entry.isIntersecting;
        });
        visibility.observe(mount);
        mount.addEventListener("pointermove", pointer);
        mount.addEventListener("pointerleave", reset);
        const animate = (now: number) => {
          frame = requestAnimationFrame(animate);
          const delta = Math.min((now - last) / 1000, 0.04);
          last = now;
          if (
            !inView ||
            document.hidden ||
            preference.matches ||
            pausedRef.current
          )
            return;
          angle += delta * 0.16;
          sculpture.rotation.x +=
            (targetX + 0.12 - sculpture.rotation.x) * 0.035;
          sculpture.rotation.y += (targetY - sculpture.rotation.y) * 0.035;
          sculpture.rotation.z = Math.sin(angle * 0.7) * 0.12;
          ring.rotation.y = 0.35 + angle * 0.42;
          innerRing.rotation.z = 0.5 - angle * 0.35;
          sphere.rotation.y = angle * 0.4;
          sculpture.position.y = Math.sin(angle * 1.5) * 0.08;
          draw();
        };
        resize();
        frame = requestAnimationFrame(animate);
        setReady(true);
        cleanup = () => {
          cancelAnimationFrame(frame);
          observer.disconnect();
          visibility.disconnect();
          mount.removeEventListener("pointermove", pointer);
          mount.removeEventListener("pointerleave", reset);
          ringGeometry.dispose();
          innerGeometry.dispose();
          sphereGeometry.dispose();
          silver.dispose();
          graphite.dispose();
          pearl.dispose();
          environment.dispose();
          renderer.dispose();
          renderer.domElement.remove();
        };
      } catch {
        /* The CSS sculpture remains visible when WebGL is unavailable. */
      }
    }
    init();
    return () => {
      disposed = true;
      cleanup();
      preference.removeEventListener("change", preferenceChange);
    };
  }, []);

  return (
    <div className="sculpture-block">
      <div className="sculpture-glow" aria-hidden="true" />
      <div
        className={`sculpture-stage${ready ? " is-ready" : ""}`}
        ref={host}
        aria-hidden="true"
      >
        <div className="sculpture-fallback">
          <span />
          <i />
        </div>
      </div>
      <div className="sculpture-caption">
        <span>
          {reduced || !ready
            ? "Strategy · creativity · technology"
            : "A different perspective. Move your cursor."}
        </span>
        {ready && !reduced && (
          <button
            aria-label={
              paused
                ? "Play decorative animation"
                : "Pause decorative animation"
            }
            aria-pressed={paused}
            onClick={() => {
              pausedRef.current = !paused;
              setPaused(!paused);
            }}
          >
            {paused ? "Play" : "Pause"}
            <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
          </button>
        )}
      </div>
    </div>
  );
}
