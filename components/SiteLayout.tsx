import { ReactNode, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SEO from "./SEO";
import { company, emailHref } from "@content/company";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      className="arrow"
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} />
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="wordmark">
      <svg
        className="brand-mark"
        aria-hidden="true"
        viewBox="0 0 40 40"
        fill="none"
      >
        <circle
          cx="20"
          cy="20"
          r="17"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M10 26V14l10 10 10-10v12"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
      <span>
        moonport<span className="wordmark-media">media</span>
      </span>
    </span>
  );
}

const navigation = [
  { href: "/services", text: "Services" },
  { href: "/about", text: "About" },
  { href: "/memory-books", text: "Memory Books" },
  { href: "/contact", text: "Contact" },
];

export default function SiteLayout({
  children,
  title,
  description,
  path = "/",
  noindex,
}: {
  children: ReactNode;
  title?: string;
  description?: string;
  path?: string;
  noindex?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  useEffect(() => {
    setOpen(false);
  }, [router.asPath]);
  return (
    <>
      <SEO
        title={title}
        description={description}
        path={path}
        noindex={noindex}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="home-link" aria-label="Moonport Media home">
            <Wordmark />
          </Link>
          <button
            ref={menuButton}
            className="menu-button"
            aria-controls="main-navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
            <span aria-hidden="true">{open ? "−" : "+"}</span>
          </button>
          <nav
            id="main-navigation"
            aria-label="Main navigation"
            className={open ? "main-nav is-open" : "main-nav"}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setOpen(false);
                menuButton.current?.focus();
              }
            }}
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={
                  router.pathname === item.href ? "page" : undefined
                }
                className={item.href === "/contact" ? "nav-contact" : undefined}
              >
                {item.text}
                {item.href === "/contact" && <Arrow diagonal />}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <Link href="/" aria-label="Moonport Media home">
                <Wordmark />
              </Link>
              <p className="footer-description">
                Digital products, creative work,
                <br />
                and considered business advice.
              </p>
            </div>
            <div className="footer-contact">
              <span className="eyebrow">Start a conversation</span>
              <a href={emailHref()}>
                {company.email}
                <Arrow diagonal />
              </a>
            </div>
          </div>
          <div className="footer-main">
            <div className="company-identity">
              <strong>{company.name}</strong>
              <p>Limited liability company registered in Georgia.</p>
              <p>Digital, creative & business consulting services.</p>
            </div>
            <nav aria-label="Company pages">
              <span className="footer-label">Company</span>
              {navigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.text}
                </Link>
              ))}
            </nav>
            <nav aria-label="Legal policies">
              <span className="footer-label">Information</span>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-service">Terms of Service</Link>
              <Link href="/refund-policy">Refund / Cancellation Policy</Link>
            </nav>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} {company.name}
            </span>
            <span>Thoughtful work. Tangible outcomes.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="page-intro container">
      <p className="eyebrow">
        <span className="small-dot" />
        {eyebrow}
      </p>
      <h1>{title}</h1>
      <div className="intro-description">{children}</div>
    </section>
  );
}

export function ContactCTA() {
  return (
    <section className="contact-cta container">
      <div>
        <p className="eyebrow">Have a project in mind?</p>
        <h2>
          Let’s talk about
          <br />
          <em>what comes next.</em>
        </h2>
      </div>
      <Link className="button button-dark" href="/contact">
        Discuss your project
        <Arrow diagonal />
      </Link>
    </section>
  );
}
