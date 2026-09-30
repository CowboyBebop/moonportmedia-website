import { ReactNode } from "react";
import Link from "next/link";
import SiteLayout, { PageIntro } from "./SiteLayout";
import { company, emailHref, phoneHref } from "@content/company";

const policies = [
  { href: "/legal", text: "Legal Information" },
  { href: "/terms-of-service", text: "Terms of Service" },
  { href: "/delivery-policy", text: "Delivery Policy" },
  { href: "/refund-policy", text: "Refund / Cancellation Policy" },
  { href: "/privacy-policy", text: "Privacy Policy" },
];

export default function PolicyLayout({
  title,
  path,
  intro,
  children,
}: {
  title: string;
  path: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <SiteLayout
      title={title}
      path={path}
      description={`${title} for Moonport Media LLC. ${intro}`}
    >
      <PageIntro eyebrow="Company information" title={title}>
        <p>{intro}</p>
        <p className="policy-date">Last updated: {company.policyDate}</p>
      </PageIntro>
      <div className="container policy-grid">
        <aside className="policy-sidebar">
          <p className="eyebrow">Policies</p>
          <nav aria-label="Policy pages">
            {policies.map((policy) => (
              <Link
                key={policy.href}
                href={policy.href}
                aria-current={path === policy.href ? "page" : undefined}
              >
                {policy.text}
              </Link>
            ))}
          </nav>
          <p>
            <strong>{company.name}</strong>
            <br />
            Registered in Georgia.
            <br />
            ID code {company.identificationCode}
          </p>
          <a href={emailHref()}>{company.email}</a>
          {company.phone && <a href={phoneHref()}>{company.phone}</a>}
        </aside>
        <article className="prose policy-content">
          {children}
          <section>
            <h2>Contact</h2>
            <p>
              For questions about this policy, contact {company.name}, a limited
              liability company registered in Georgia, at{" "}
              <a href={emailHref()}>{company.email}</a>.
            </p>
          </section>
        </article>
      </div>
    </SiteLayout>
  );
}
