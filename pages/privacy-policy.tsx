import PolicyLayout from "@components/PolicyLayout";

export default function Privacy() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      path="/privacy-policy"
      intro="How we handle information when you visit this website or contact us."
    >
      <section>
        <h2>1. Who we are</h2>
        <p>
          Moonport Media LLC is responsible for personal information it collects
          through this website and related business enquiries. We are a limited
          liability company registered in Georgia.
        </p>
      </section>
      <section>
        <h2>2. Information we receive</h2>
        <p>
          When you email us, we receive your email address and the information
          you choose to include, such as your name, company, project details,
          and attachments. If you become a client, we may also need contact,
          contract, and billing information to provide the agreed services.
        </p>
        <p>
          Our website hosting provider, Vercel, may process technical
          information such as IP address, browser and device information,
          requested pages, timestamps, and security logs when you visit the
          site.
        </p>
      </section>
      <section>
        <h2>3. How we use information</h2>
        <ul>
          <li>To respond to enquiries and discuss potential projects.</li>
          <li>To agree, provide, and administer requested services.</li>
          <li>To manage invoices, payments, and business records.</li>
          <li>To protect the website and our communications from misuse.</li>
          <li>To meet applicable legal obligations and handle disputes.</li>
        </ul>
        <p>
          Where a legal basis is required, we rely on taking steps at your
          request before a contract, performing a contract, complying with legal
          obligations, or our legitimate interests in operating and securing the
          business. Where processing requires your consent, we will request it
          separately.
        </p>
      </section>
      <section>
        <h2>4. Cookies and website features</h2>
        <p>
          This website does not use advertising trackers or analytics cookies.
          Fonts and visual assets are served with the website. The contact links
          open your own email application. Where ordering, account, or upload
          features are provided, only cookies strictly necessary for them are
          used.
        </p>
        <p>
          Hosting infrastructure may process technical data or use security
          measures necessary to deliver and protect the website.
        </p>
      </section>
      <section>
        <h2>5. Sharing and international processing</h2>
        <p>
          We do not sell personal information. Information may be processed by
          service providers needed to run the website, manage business
          communications, deliver an agreed project, or administer the business.
          We may also disclose information where required by law or necessary to
          establish, exercise, or defend legal claims.
        </p>
        <p>
          Moonport Media LLC is registered in Georgia, and our service providers
          may process information in other countries. Where applicable law
          requires safeguards for international transfers, we use the safeguards
          required for that processing.
        </p>
      </section>
      <section>
        <h2>6. Retention and security</h2>
        <p>
          We retain information for as long as reasonably needed for the
          purposes described above, including project administration,
          recordkeeping, and applicable legal obligations. The period depends on
          the type of information and our relationship with you.
        </p>
        <p>
          We use reasonable safeguards appropriate to the information we handle.
          Please avoid sending passwords, payment-card details, or unnecessary
          sensitive information by email.
        </p>
      </section>
      <section>
        <h2>7. Your choices and rights</h2>
        <p>
          Depending on the law that applies to you, you may be entitled to
          request access, correction, deletion, restriction of processing, or
          portability of your information, or to object to certain processing.
          Where processing is based on consent, you may withdraw it without
          affecting processing already carried out.
        </p>
        <p>
          Contact us to make a request. We may need to verify your identity
          before acting. You may also have the right to complain to the relevant
          data protection authority.
        </p>
      </section>
      <section>
        <h2>8. Memory Books customer information</h2>
        <p>
          To make a Memory Book we process the customer’s name, email, delivery
          address, order details, and the photographs, voice recordings, and
          stories they provide. We use this information only to create, print,
          and deliver the book and to support the order. It is kept
          confidential, is never published or used for advertising without
          separate permission, and is shared only with the service providers
          needed to fulfil the order, such as AI transcription and layout
          tools, our print and shipping partner, and the payment provider.
          Payment-card details are entered with the payment provider and are
          not stored by us.
        </p>
        <p>
          Customer materials are deleted within 90 days of delivery unless the
          customer asks us to keep them for reprints. You can ask us to delete
          them sooner at any time.
        </p>
      </section>
      <section>
        <h2>9. Changes to this policy</h2>
        <p>
          We may update this policy as our website or services change. The
          latest version and its update date will be published on this page.
        </p>
      </section>
    </PolicyLayout>
  );
}
