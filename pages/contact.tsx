import { useState } from "react";
import SiteLayout, { Arrow, PageIntro } from "@components/SiteLayout";
import { company, emailHref } from "@content/company";

export default function Contact() {
  const [message, setMessage] = useState("");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(company.email);
      setMessage("Email address copied.");
    } catch {
      setMessage("Please select and copy the email address above.");
    }
  }
  return (
    <SiteLayout
      title="Contact"
      path="/contact"
      description="Contact Moonport Media LLC at business@moonportmedia.com for project enquiries, consulting, account questions, or information about Memory Books."
    >
      <PageIntro
        eyebrow="Contact"
        title={
          <>
            A good place
            <br />
            <em>to begin.</em>
          </>
        }
      >
        <p>
          Tell us about your business, your project, or the question you’re
          working through.
        </p>
      </PageIntro>
      <section className="container contact-grid">
        <div className="email-panel">
          <p className="eyebrow">Company email</p>
          <a className="email-display" href={emailHref()}>
            {company.email}
            <Arrow diagonal />
          </a>
          <p>
            For service enquiries, existing projects, billing, cancellations,
            and privacy requests.
          </p>
          <div className="email-actions">
            <a
              className="button button-dark"
              href={emailHref("Project enquiry")}
            >
              Write an email
              <Arrow diagonal />
            </a>
            <button className="text-link copy-email" onClick={copyEmail}>
              Copy email address
            </button>
          </div>
          <p className="copy-status" role="status">
            {message}
          </p>
          <div className="contact-company">
            <strong>{company.name}</strong>
            <span>Limited liability company registered in Georgia.</span>
          </div>
        </div>
        <div className="enquiry-guide">
          <h2>A little context helps.</h2>
          <p>For a new project, please include:</p>
          <ul>
            <li>Your name and business</li>
            <li>The service or support you’re looking for</li>
            <li>Your objectives and expected deliverables</li>
            <li>Your preferred timeline and any relevant budget</li>
          </ul>
          <p>
            We’ll use your message to discuss the next steps and, where
            appropriate, prepare a project scope.
          </p>
          <div className="contact-product-note">
            <span className="eyebrow">Memory Books · Coming soon</span>
            <p>
              General questions are welcome. We are not accepting orders,
              payments, or customer photo uploads for Memory Books yet. Please
              don’t email personal photo collections or sensitive material at
              this stage.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
