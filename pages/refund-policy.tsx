import PolicyLayout from "@components/PolicyLayout";
import { company, emailHref } from "@content/company";

export default function Refunds() {
  return (
    <PolicyLayout
      title="Refund / Cancellation Policy"
      path="/refund-policy"
      intro="How to request a cancellation or a refund for our services and Personalized Memory Books, and when refunds are made."
    >
      <section>
        <h2>1. Scope of this policy</h2>
        <p>
          This policy applies to digital, creative, and consulting services
          provided by Moonport Media LLC, and to Personalized Memory Books
          (see section 8). Services are individually scoped, so
          your written project agreement sets the specific cancellation,
          rescheduling, payment, and refund terms. Those terms apply subject to
          applicable law.
        </p>
      </section>
      <section>
        <h2>2. How to make a request</h2>
        <p>
          Email{" "}
          <a href={emailHref("Cancellation or refund request")}>
            {company.email}
          </a>{" "}
          with your name, business, project or invoice reference, and the action
          you are requesting. If something has gone wrong, please explain the
          issue so we can review it against the agreed scope.
        </p>
        <p>
          Sending a request does not automatically cancel an invoice or confirm
          a refund. We will review the engagement and confirm the outcome in
          writing.
        </p>
      </section>
      <section>
        <h2>3. Cancellation before work starts</h2>
        <p>
          Contact us as soon as possible if you need to cancel before work
          begins. We will review any payment made and any costs already
          committed with your agreement. Any cancellation charge or
          non-refundable commitment must have been disclosed and agreed in
          writing.
        </p>
        <p>
          Where no work has been carried out and no agreed non-cancellable costs
          have been incurred, advance payments for the cancelled work will be
          refunded.
        </p>
      </section>
      <section>
        <h2>4. Cancellation after work starts</h2>
        <p>
          If you cancel after work begins, charges may apply for work already
          completed and any previously agreed non-cancellable third-party costs,
          in accordance with your project agreement. We will reconcile these
          against payments received and confirm any remaining balance or refund
          for unused advance payments.
        </p>
        <p>
          Completed work is assessed against the agreed deliverables. A change
          of direction or a decision not to use delivered work does not, by
          itself, make that work refundable.
        </p>
      </section>
      <section>
        <h2>5. Rescheduling and ongoing services</h2>
        <p>
          Please email us if a consulting session, milestone, or engagement
          needs to be rescheduled. Availability and any agreed notice periods
          apply. For ongoing services, cancellation takes effect according to
          the notice period and billing terms in the written agreement.
        </p>
      </section>
      <section>
        <h2>6. If we cannot provide the agreed service</h2>
        <p>
          If we cannot deliver an agreed service, we will contact you to discuss
          an alternative arrangement or a refund of any payment attributable to
          work that will not be delivered. If you believe a deliverable does not
          meet the agreed scope, contact us so we can review the issue and agree
          an appropriate remedy.
        </p>
      </section>
      <section>
        <h2>7. Approved refunds</h2>
        <p>
          We confirm the amount and processing arrangements in writing. Approved
          refunds are returned through the original payment method where
          possible. The time funds take to appear depends on the relevant
          payment provider or bank. This policy does not limit any mandatory
          rights under applicable law.
        </p>
      </section>
      <section>
        <h2>8. Personalized Memory Books</h2>
        <p>
          Memory Books are made to order from each customer’s own photographs
          and stories, so the following terms apply:
        </p>
        <ul>
          <li>
            <strong>Before you approve the proof:</strong> you may cancel the
            order by email for a full refund.
          </li>
          <li>
            <strong>After you approve the proof:</strong> the book is sent to
            print and, because it is personalized, it cannot be cancelled or
            returned for a change of mind.
          </li>
          <li>
            <strong>Defective, damaged, or incorrectly printed books:</strong>{" "}
            report the problem within 14 days of delivery with your order
            number and photographs. We will reprint and reship the book at no
            cost, or refund it in full if you prefer.
          </li>
          <li>
            <strong>Lost shipments:</strong> if a tracked parcel is confirmed
            lost by the carrier, we will reship the order or refund it in full.
          </li>
          <li>
            <strong>Errors in approved content:</strong> spelling or content
            errors present in a proof you approved are not treated as defects.
          </li>
        </ul>
        <p>
          Shipping charges are refunded together with the order when the book
          is cancelled before printing, or is defective, damaged, or lost.
        </p>
      </section>
      <section>
        <h2>9. Refund method and time frame</h2>
        <p>
          Approved refunds are confirmed by email and issued within 10 working
          days, to the same card or payment method used for the purchase. Your
          bank or card issuer may take additional time, typically 5–10 business
          days, to show the funds on your statement. Refunds are made in the
          currency of the original payment.
        </p>
        <p>
          Consumers retain any rights they have under the legislation of
          Georgia, including the Law of Georgia on Consumer Rights Protection
          and the Law of Georgia on Electronic Commerce, and under any other
          mandatory law that applies to them.
        </p>
      </section>
    </PolicyLayout>
  );
}
