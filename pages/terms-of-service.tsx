import Link from "next/link";
import PolicyLayout from "@components/PolicyLayout";

export default function Terms() {
  return (
    <PolicyLayout
      title="Terms of Service"
      path="/terms-of-service"
      intro="Terms for using this website and engaging Moonport Media LLC for services."
    >
      <section>
        <h2>1. Our business and this website</h2>
        <p>
          This website is operated by Moonport Media LLC, a limited liability
          company registered in Georgia. We provide digital product development
          and strategy, creative and marketing strategy, media and YouTube
          consulting, branding and creative development, software and
          automation, and business and product advisory services.
        </p>
        <p>
          The website describes our services and provides a way to contact us.
          Browsing the site or sending an enquiry does not place an order or
          create a paid engagement.
        </p>
      </section>
      <section>
        <h2>2. Agreeing a service engagement</h2>
        <p>
          Services are provided on a business-to-business basis under an agreed
          written proposal, statement of work, or service agreement. Before work
          begins, that agreement sets out the scope, deliverables,
          responsibilities, fees, billing currency, payment schedule, and
          expected timeline.
        </p>
        <p>
          Project-specific terms take precedence over these general terms for
          that engagement, subject to applicable law. Changes to scope, fees, or
          timelines must be agreed in writing.
        </p>
      </section>
      <section>
        <h2>3. Fees, payment, and delivery</h2>
        <p>
          Fees are quoted individually. Any applicable taxes, third-party costs,
          deposits, or recurring charges must be identified in the written
          agreement. Payments are requested under the agreed payment schedule;
          no payments are collected through this website.
        </p>
        <p>
          Services and deliverables are provided remotely using the
          communication and delivery methods agreed for the project. Timelines
          depend on the agreed scope and the timely provision of required
          materials, access, and feedback.
        </p>
      </section>
      <section>
        <h2>4. Client responsibilities</h2>
        <p>
          Clients must provide accurate project information and have the
          necessary rights and permissions for materials and access they supply.
          You must not submit unlawful material or instruct us to infringe
          another person’s rights.
        </p>
        <p>
          You remain responsible for your business decisions and for reviewing
          deliverables against the agreed brief. Our advisory services are
          business and product support; they are not legal, tax, or regulated
          financial advice.
        </p>
      </section>
      <section>
        <h2>5. Intellectual property and confidentiality</h2>
        <p>
          Ownership, licences, usage rights, and any transfer of rights in
          commissioned work are set out in the written project agreement.
          Existing tools, methods, and third-party materials remain subject to
          their applicable ownership and licence terms.
        </p>
        <p>
          Any confidentiality obligations, access requirements, and handling of
          client materials should be addressed in the project agreement. Please
          do not send sensitive material in an initial enquiry unless we have
          agreed how it will be handled.
        </p>
      </section>
      <section>
        <h2>6. Cancellations and service concerns</h2>
        <p>
          Requests to cancel, reschedule, or resolve a problem with a service
          should be sent by email. See our{" "}
          <Link href="/refund-policy">Refund / Cancellation Policy</Link> and
          the terms of your written agreement.
        </p>
      </section>
      <section>
        <h2>7. Outcomes and responsibilities</h2>
        <p>
          We agree specific work and deliverables rather than guaranteed
          commercial outcomes. Revenue, audience growth, platform approvals, and
          other results affected by third parties or external factors are not
          guaranteed.
        </p>
        <p>
          Any project-specific warranties, responsibility limits, and dispute
          arrangements must be stated in the written agreement. Nothing in these
          terms excludes rights or liabilities that cannot lawfully be excluded.
        </p>
      </section>
      <section>
        <h2>8. Personalized Memory Books</h2>
        <p>
          Personalized Memory Books is a consumer product service in
          development. It is clearly marked “Coming Soon” and is not available
          for orders, pre-orders, or purchase. We are not accepting payments or
          customer material for it.
        </p>
        <p>
          Descriptions of its planned features, printing, and international
          shipping are statements of intention, not an offer for sale. Pricing,
          destinations, delivery details, and product-specific purchase,
          privacy, and cancellation terms will be provided before launch.
        </p>
      </section>
      <section>
        <h2>9. Website use and updates</h2>
        <p>
          You may use this website for lawful business enquiries and
          information. You must not attempt to disrupt it, gain unauthorised
          access, or misuse its content or contact details.
        </p>
        <p>
          We may update these website terms. The version in effect when a
          project is agreed will not change that project’s written terms without
          agreement.
        </p>
      </section>
    </PolicyLayout>
  );
}
