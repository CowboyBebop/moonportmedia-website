import Link from "next/link";
import SiteLayout, {
  Arrow,
  ContactCTA,
  PageIntro,
} from "@components/SiteLayout";
import { services } from "@content/services";

export default function Services() {
  return (
    <SiteLayout
      title="Services"
      path="/services"
      description="B2B product development, creative and marketing strategy, YouTube consulting, branding, software automation, and business advisory from Moonport Media LLC."
    >
      <PageIntro
        eyebrow="Services for businesses"
        title={
          <>
            Clear direction.
            <br />
            <em>Practical delivery.</em>
          </>
        }
      >
        <p>
          Digital, creative, and consulting support shaped around your business.
          Every engagement starts with an agreed scope, deliverables, timeline,
          and fees.
        </p>
      </PageIntro>
      <nav
        className="container service-jump-links"
        aria-label="Service categories"
      >
        {services.map((service, index) => (
          <a key={service.id} href={`#${service.id}`}>
            0{index + 1}
            <span>
              {
                [
                  "Products",
                  "Marketing",
                  "Media & YouTube",
                  "Branding",
                  "Software & automation",
                  "Advisory",
                ][index]
              }
            </span>
          </a>
        ))}
      </nav>
      <div className="container service-details">
        {services.map((service, index) => (
          <section id={service.id} className="service-detail" key={service.id}>
            <div className="detail-title">
              <span className="eyebrow">0{index + 1} / Our services</span>
              <h2>{service.title}</h2>
            </div>
            <div>
              <p>{service.detail}</p>
              <h3>Depending on your project, this can include:</h3>
              <ul className="deliverables">
                {service.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="text-link" href="/contact">
                Discuss this service
                <Arrow diagonal />
              </Link>
            </div>
          </section>
        ))}
      </div>
      <section className="container engagement-note">
        <p className="eyebrow">Project enquiries & pricing</p>
        <h2>Scoped to the work.</h2>
        <p>
          Services are quoted individually. Contact us with your brief to
          discuss what is needed. Fees, billing currency, payment schedule,
          delivery, and any ongoing support are agreed in writing before an
          engagement starts. There is no service checkout on this website.
        </p>
        <p>
          Our advisory services concern business and product decisions. They do
          not replace legal, tax, or regulated financial advice.
        </p>
        <Link href="/terms-of-service" className="text-link">
          Terms of Service
          <Arrow />
        </Link>
      </section>
      <ContactCTA />
    </SiteLayout>
  );
}
