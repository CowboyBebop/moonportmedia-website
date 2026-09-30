import Link from "next/link";
import PolicyLayout from "@components/PolicyLayout";
import { company, emailHref, phoneHref } from "@content/company";

export default function Legal() {
  return (
    <PolicyLayout
      title="Legal Information"
      path="/legal"
      intro="Company details, contact information, working hours, and the terms that apply to our services and products."
    >
      <section>
        <h2>1. Company information</h2>
        <ul>
          <li>Name: {company.brand}</li>
          <li>Legal name: {company.legalName}</li>
          <li>Legal form: {company.legalForm}</li>
          <li>Identification code: {company.identificationCode}</li>
          <li>
            Registered: {company.registrationDate},{" "}
            {company.registeringAuthority}
          </li>
        </ul>
      </section>
      <section>
        <h2>2. Contact information</h2>
        <ul>
          <li>
            Email: <a href={emailHref()}>{company.email}</a>
          </li>
          {company.phone && (
            <li>
              Telephone: <a href={phoneHref()}>{company.phone}</a>
            </li>
          )}
          <li>Website: {company.url}</li>
        </ul>
      </section>
      <section>
        <h2>3. Working hours</h2>
        <p>
          Customers can contact us {company.hours}. {company.responseTime}
        </p>
        <p>
          Services are provided remotely. Orders and requests can be placed by
          email at any time and are processed during working hours. Print
          production and shipping of physical products continue on our
          partners’ schedules as described in the{" "}
          <Link href="/delivery-policy">Delivery Policy</Link>.
        </p>
      </section>
      <section>
        <h2>4. Terms and policies</h2>
        <ul>
          <li>
            <Link href="/terms-of-service">Terms of Service</Link> — conditions
            of use, statutory rights, registration, and confidentiality.
          </li>
          <li>
            <Link href="/delivery-policy">Delivery Policy</Link> — how services
            and products are delivered and within what time.
          </li>
          <li>
            <Link href="/refund-policy">Refund / Cancellation Policy</Link> —
            how refunds are made, in what time, and under what conditions.
          </li>
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link> — how personal
            information is collected, used, and protected.
          </li>
        </ul>
        <p>
          These terms are provided in accordance with the Law of Georgia on
          Electronic Commerce and other applicable legislation of Georgia.
        </p>
      </section>
    </PolicyLayout>
  );
}
