import Link from "next/link";
import PolicyLayout from "@components/PolicyLayout";
import { company, emailHref } from "@content/company";

export default function Delivery() {
  return (
    <PolicyLayout
      title="Delivery Policy"
      path="/delivery-policy"
      intro="How our digital services and physical products are delivered, and the time frames that apply."
    >
      <section>
        <h2>1. Digital, creative, and consulting services</h2>
        <p>
          Services are delivered remotely. Deliverables such as documents,
          designs, video, software, and reports are sent by email, shared cloud
          storage, or another channel agreed in writing. Consulting sessions
          take place by video call or email.
        </p>
        <p>
          The delivery schedule, milestones, and format of each deliverable are
          set out in the written proposal or service agreement before work
          begins. A service is treated as delivered when the agreed deliverable
          has been sent to the client’s nominated contact, or the agreed session
          has taken place.
        </p>
        <p>
          Timelines depend on the client providing the required materials,
          access, and feedback on time. If we expect a delay, we will tell you
          by email with a revised date.
        </p>
      </section>
      <section>
        <h2>2. Personalized Memory Books</h2>
        <p>
          Memory Books are printed-to-order books created from the photographs
          and recollections a customer provides. Delivery takes place in three
          stages:
        </p>
        <ul>
          <li>
            <strong>Preparation.</strong> After payment and receipt of your
            materials, we prepare a digital proof of the book, normally within 5
            working days. You review it and may request corrections before
            approving it.
          </li>
          <li>
            <strong>Printing.</strong> After you approve the proof, the book is
            sent to our print partner. Production normally takes 3–5 business
            days; hardcover books may take slightly longer.
          </li>
          <li>
            <strong>Shipping.</strong> The printed book is shipped directly by
            our print partner to the address given at checkout using a tracked
            carrier. Transit time depends on the destination and the shipping
            method selected; the estimate is shown before payment.
          </li>
        </ul>
        <p>
          Shipping costs are calculated for the destination and method and
          shown separately at checkout before you pay. Multiple copies sent to
          the same address are shipped together; copies sent to different
          addresses are shipped as separate orders.
        </p>
        <p>
          We email you when your order is sent to print and when it ships,
          including the tracking number. Please make sure the delivery address
          and recipient name are correct. Customs duties or import taxes, where
          applicable, are the recipient’s responsibility unless stated
          otherwise at checkout.
        </p>
      </section>
      <section>
        <h2>3. Delays, lost, or damaged deliveries</h2>
        <p>
          If an order has not arrived within 10 business days after the
          estimated delivery date, or arrives damaged, contact us at{" "}
          <a href={emailHref("Delivery issue")}>{company.email}</a> with your
          order number and, for damaged items, photographs. We will trace the
          shipment with the carrier and arrange a replacement or refund as set
          out in the{" "}
          <Link href="/refund-policy">Refund / Cancellation Policy</Link>.
        </p>
        <p>
          If a parcel is returned because of an incorrect or incomplete address
          provided by the customer, re-shipping costs may be charged.
        </p>
      </section>
    </PolicyLayout>
  );
}
