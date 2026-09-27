import { ReactNode } from "react";
import Link from "next/link";
import SiteLayout, { PageIntro } from "./SiteLayout";
import { company, emailHref } from "@content/company";

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
            <Link
              href="/privacy-policy"
              aria-current={path === "/privacy-policy" ? "page" : undefined}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              aria-current={path === "/terms-of-service" ? "page" : undefined}
            >
              Terms of Service
            </Link>
            <Link
              href="/refund-policy"
              aria-current={path === "/refund-policy" ? "page" : undefined}
            >
              Refund / Cancellation Policy
            </Link>
          </nav>
          <p>
            <strong>{company.name}</strong>
            <br />
            Registered in Georgia.
          </p>
          <a href={emailHref()}>{company.email}</a>
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
