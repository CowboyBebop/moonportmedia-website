import Head from "next/head";
import { company } from "@content/company";

interface Props {
  title?: string;
  description?: string;
  path?: string;
  noindex?: boolean;
}
export default function SEO({
  title,
  description = "Moonport Media LLC is a Georgian company providing digital product development, creative and marketing strategy, media consulting, branding, software, automation, and business advisory services.",
  path = "/",
  noindex = false,
}: Props) {
  const pageTitle = title
    ? `${title} | ${company.name}`
    : `${company.name} — Digital products, creative & consulting`;
  const url = `${company.url}${path === "/" ? "/" : `${path.replace(/\/$/, "")}/`}`;
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#f6f5f3" />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={url} />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      {noindex && <meta name="robots" content="noindex" />}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: company.name,
            legalName: company.name,
            url: company.url,
            email: company.email,
            description:
              "A Georgian digital product, creative, and consulting company.",
          }),
        }}
      />
    </Head>
  );
}
