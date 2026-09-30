import SiteLayout, { PageIntro } from "@components/SiteLayout";
import { company, emailHref } from "@content/company";

export default function Support() {
  return (
    <SiteLayout
      title="Customer Support"
      path="/support"
      description={`Customer support for ${company.name}.`}
    >
      <PageIntro eyebrow="Customer support" title="Customer Support">
        <p>
          For help with an order, service, or refund, email us at{" "}
          <a href={emailHref("Support request")}>{company.email}</a>.
        </p>
      </PageIntro>
    </SiteLayout>
  );
}
