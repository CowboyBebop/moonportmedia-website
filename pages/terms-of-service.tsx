import Link from "next/link";
import PolicyLayout from "@components/PolicyLayout";

export default function Terms() {
  return (
    <PolicyLayout
      title="Terms of Service"
      path="/terms-of-service"
      intro="Terms for using this website, engaging Moonport Media LLC for services, and ordering Personalized Memory Books."
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
          agreement. Payments are requested under the agreed payment schedule.
        </p>
        <p>
          Where online payment is offered, it is processed by a licensed
          payment service provider over a secure connection. We do not receive
          or store full payment-card details.
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
          We keep confidential all non-public information, materials, and
          personal data that clients and customers share with us. We use it
          only to provide the requested service or product, share it only with
          staff and service providers who need it for that purpose and are
          bound to protect it, and do not disclose it to third parties unless
          required by law. This includes photographs, recordings, and stories
          provided for Memory Books. Personal data is handled as described in
          our <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>
        <p>
          Additional confidentiality obligations can be agreed in the project
          agreement. Please do not send sensitive material in an initial
          enquiry unless we have agreed how it will be handled.
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
          Personalized Memory Books are printed keepsake books created from
          photographs and recollections supplied by the customer. The price,
          format, number of copies, and shipping cost are shown before payment.
          A contract is formed when payment is completed and we confirm the
          order by email.
        </p>
        <p>
          You must own, or have permission to use, the photographs, recordings,
          and stories you provide. We arrange them faithfully and do not invent
          family events or details. You will receive a digital proof to review;
          the book is printed only after you approve it. Printing and shipping
          are described in our{" "}
          <Link href="/delivery-policy">Delivery Policy</Link>, and
          cancellations and refunds in our{" "}
          <Link href="/refund-policy">Refund / Cancellation Policy</Link>.
        </p>
      </section>
      <section>
        <h2>9. Registration on the website</h2>
        <p>
          You can browse this website without registering. If an account or
          order registration is required to place an order or upload materials,
          you must provide accurate information, keep your login details
          confidential, and tell us promptly about any unauthorised use of your
          account. You must be at least 18 years old, or have the consent of a
          parent or guardian, to register or place an order. We may suspend an
          account that is used unlawfully or in breach of these terms. You may
          ask us to close your account at any time by email.
        </p>
      </section>
      <section>
        <h2>10. Rights provided by law</h2>
        <p>
          These terms are governed by the legislation of Georgia, including the
          Law of Georgia on Electronic Commerce and the Law of Georgia on
          Consumer Rights Protection. Consumers keep all rights granted to them
          by mandatory law, including rights relating to information before
          purchase, defective goods, and refunds; nothing in these terms limits
          those rights.
        </p>
        <p>
          We will try to resolve any complaint amicably by email first. Disputes
          that cannot be resolved this way are settled by the competent courts
          of Georgia, unless mandatory law gives a consumer the right to bring a
          claim elsewhere.
        </p>
      </section>
      <section>
        <h2>11. Website use and updates</h2>
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
