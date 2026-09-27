import Link from "next/link";
import SiteLayout, { Arrow, ContactCTA } from "@components/SiteLayout";
import OrbitSculpture from "@components/OrbitSculpture";
import MemoryFeature from "@components/MemoryFeature";
import { services } from "@content/services";

export default function Home() {
  return (
    <SiteLayout>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="small-dot" />
              Digital · Creative · Consulting
            </p>
            <h1>
              Considered ideas.
              <br />
              <em>Beautifully built.</em>
            </h1>
            <p className="hero-description">
              Moonport Media LLC is a Georgian digital product, creative, and
              consulting company. We help businesses develop products, shape
              their brands, and improve the way they work.
            </p>
            <div className="hero-actions">
              <Link href="/services" className="button button-dark">
                Explore our services
                <Arrow diagonal />
              </Link>
              <Link href="/contact" className="text-link">
                Let’s talk
                <Arrow />
              </Link>
            </div>
          </div>
          <OrbitSculpture />
        </div>
        <div className="container hero-footnote">
          <span>B2B services, delivered digitally.</span>
          <span>
            Independent consumer products in development.
            <Arrow />
          </span>
        </div>
      </section>
      <section className="services-section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">What we do</p>
            <h2>
              From the first question
              <br />
              <em>to the finished work.</em>
            </h2>
          </div>
          <p>
            Strategy, creative development, and practical implementation. Choose
            the support your business needs.
          </p>
        </div>
        <div className="service-list">
          {services.map((service, index) => (
            <Link
              className="service-row"
              href={`/services#${service.id}`}
              key={service.id}
            >
              <span className="service-number">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.short}</p>
              <span className="service-arrow">
                <Arrow diagonal />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="approach-section container">
        <div>
          <p className="eyebrow">A clear way of working</p>
          <h2>
            Good work starts
            <br />
            <em>with a shared plan.</em>
          </h2>
          <Link href="/about" className="text-link">
            About Moonport
            <Arrow />
          </Link>
        </div>
        <ol className="process-list">
          <li>
            <span>01</span>
            <div>
              <h3>Tell us what you’re working on.</h3>
              <p>
                Share your business, your objectives, and where you need help.
              </p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Agree the scope.</h3>
              <p>
                We confirm the deliverables, timeline, fees, and payment terms
                in writing before work begins.
              </p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Put the plan into practice.</h3>
              <p>
                Work is delivered remotely, with reviews and handover suited to
                the project.
              </p>
            </div>
          </li>
        </ol>
      </section>
      <MemoryFeature />
      <ContactCTA />
    </SiteLayout>
  );
}
