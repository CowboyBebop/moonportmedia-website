import SiteLayout, { Arrow, PageIntro } from "@components/SiteLayout";
import { BookConcept } from "@components/MemoryFeature";
import { emailHref } from "@content/company";

export default function MemoryBooks() {
  return (
    <SiteLayout
      title="Personalized Memory Books — Coming Soon"
      path="/memory-books"
      description="Coming soon from Moonport Media LLC: professionally designed physical memory books made from your photos, memories, and stories. Not available to order or purchase."
    >
      <section className="memory-page-hero">
        <div className="container memory-page-grid">
          <div>
            <PageIntro
              eyebrow="Coming soon · In development"
              title={
                <>
                  Personalized
                  <br />
                  <em>Memory Books.</em>
                </>
              }
            >
              <p>
                Your photos, memories, and stories, brought together in a
                professionally designed physical book.
              </p>
            </PageIntro>
            <div className="launch-notice">
              <span className="status-dot" />
              <p>
                <strong>Not available to purchase.</strong>
                <br />
                We are not accepting orders, pre-orders, payments, or photo
                submissions.
              </p>
            </div>
          </div>
          <BookConcept />
        </div>
      </section>
      <section className="container memory-explanation">
        <div>
          <p className="eyebrow">A product by Moonport Media LLC</p>
          <h2>
            Give your memories
            <br />
            <em>a place on the shelf.</em>
          </h2>
        </div>
        <div className="prose">
          <p>
            We’re developing a service that turns customers’ photos, memories,
            stories, and other submitted material into thoughtfully arranged,
            professionally designed books.
          </p>
          <p>
            The planned result is a physical memory book that can be printed and
            shipped internationally. Available destinations, production options,
            delivery estimates, pricing, and product-specific terms will be
            confirmed before orders open.
          </p>
          <p>
            Development is ongoing, and we have not announced a launch date.
          </p>
        </div>
      </section>
      <section className="container planned-process">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The planned experience</p>
            <h2>
              From personal material
              <br />
              <em>to printed pages.</em>
            </h2>
          </div>
          <p>
            The following describes the intended service. Final details will be
            published at launch.
          </p>
        </div>
        <ol>
          <li>
            <span>01</span>
            <h3>Share your material</h3>
            <p>
              Submit the photos, stories, and memories you want to include once
              the service launches.
            </p>
          </li>
          <li>
            <span>02</span>
            <h3>Bring it together</h3>
            <p>
              Your material is arranged into a professionally designed book,
              with a review process to be confirmed at launch.
            </p>
          </li>
          <li>
            <span>03</span>
            <h3>Keep it in print</h3>
            <p>
              A physical book, with printing and international shipping options
              planned.
            </p>
          </li>
        </ol>
      </section>
      <section className="container product-enquiry">
        <p className="eyebrow">Questions about the product?</p>
        <h2>We’d be glad to hear from you.</h2>
        <p>
          Contact us for general information. Please wait until submissions
          officially open before sharing photos, stories, or sensitive personal
          material.
        </p>
        <a
          className="button button-dark"
          href={emailHref("Memory Books enquiry")}
        >
          Ask about Memory Books
          <Arrow diagonal />
        </a>
      </section>
    </SiteLayout>
  );
}
