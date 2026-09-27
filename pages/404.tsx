import Link from "next/link";
import SiteLayout, { PageIntro, Arrow } from "@components/SiteLayout";
export default function NotFound() {
  return (
    <SiteLayout title="Page not found" noindex>
      <PageIntro
        eyebrow="404 · Page not found"
        title={
          <>
            Let’s get you
            <br />
            <em>back on course.</em>
          </>
        }
      >
        <p>This page could not be found.</p>
        <Link href="/" className="button button-dark">
          Return home
          <Arrow />
        </Link>
      </PageIntro>
    </SiteLayout>
  );
}
