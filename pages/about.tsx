import Link from "next/link";
import SiteLayout, {
  Arrow,
  ContactCTA,
  PageIntro,
} from "@components/SiteLayout";
import { company, emailHref } from "@content/company";

export default function About() {
  return (
    <SiteLayout
      title="About"
      path="/about"
      description="Meet Moonport Media LLC, a Georgian company providing B2B digital, creative, and consulting services while developing its own consumer products."
    >
      <PageIntro
        eyebrow="About Moonport"
        title={
          <>
            A company for ideas
            <br />
            <em>and the work behind them.</em>
          </>
        }
      >
        <p>
          Moonport Media LLC brings together digital product development,
          creative work, and business consulting.
        </p>
      </PageIntro>
      <section className="container about-content">
        <div className="prose">
          <h2>What we do today</h2>
          <p>
            We provide business-to-business services in product strategy and
            development, creative and marketing strategy, media and YouTube
            consulting, branding, software and automation, and business
            advisory.
          </p>
          <p>
            Our work helps businesses define what they need, develop the right
            materials or tools, and make informed decisions about their next
            steps. Services are delivered remotely, with the scope and
            commercial terms agreed for each engagement.
          </p>
          <Link className="text-link" href="/services">
            View our services
            <Arrow />
          </Link>
          <h2>What we’re developing</h2>
          <p>
            Alongside client services, we develop our own consumer products.
            Personalized Memory Books is currently in development: a planned
            service for turning customer-submitted photos, memories, and stories
            into professionally designed physical books.
          </p>
          <p>
            Memory Books is coming soon. Orders, pre-orders, and payments are
            not being accepted. Details of availability, pricing, printing, and
            international shipping will be provided before launch.
          </p>
          <Link className="text-link" href="/memory-books">
            Read about Memory Books
            <Arrow />
          </Link>
        </div>
        <aside className="identity-panel">
          <p className="eyebrow">Company details</p>
          <dl>
            <dt>Legal business name</dt>
            <dd>{company.name}</dd>
            <dt>Company type</dt>
            <dd>Limited liability company</dd>
            <dt>Country of registration</dt>
            <dd>Georgia</dd>
            <dt>Business enquiries</dt>
            <dd>
              <a href={emailHref()}>{company.email}</a>
            </dd>
          </dl>
        </aside>
      </section>
      <ContactCTA />
    </SiteLayout>
  );
}
