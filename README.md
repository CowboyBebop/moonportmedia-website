# Moonport Media LLC

Company website for Moonport Media LLC, a Georgian digital product, creative, and consulting business. Built with the existing Next.js Pages Router and exported as static files for Vercel.

## Develop and verify

Requires Node.js 22 or 24 and Yarn 1.22.22 (available through Corepack).

```sh
corepack yarn install --frozen-lockfile
corepack yarn dev
corepack yarn typecheck
corepack yarn build
corepack yarn start --listen 4173
```

`yarn build` exports the site to `out/`. `yarn start` serves that static output. The site does not need runtime secrets, a database, or API routes.

## Content

- `/` — current B2B services, engagement process, and forthcoming consumer product
- `/about/` — company and business activities
- `/services/` — six service categories and example deliverables
- `/contact/` — email enquiries, with working mail links and copy control
- `/memory-books/` — Personalized Memory Books, explicitly coming soon
- `/privacy-policy/`, `/terms-of-service/`, `/refund-policy/`, `/delivery-policy/` — company policies
- `/legal/` — company identification (ID code), contact, working hours and policy index for the Georgian e-commerce review; linked only from the footer and policy sidebar

Company identity and the existing public contact email are centralised in `content/company.ts`. The owner instructed that the registered address must not be published. No street address is included in public content or structured data.

Memory Books does not have a checkout, preorder, payment button, or upload facility. The book illustration is labelled as a concept. Pricing, product terms, shipping destinations, and customer data handling must be finalised before enabling sales or submissions.

The site uses local fonts, no analytics integration, and no third-party scheduling embed. Contact links open the visitor's email application. Hosting infrastructure may still process technical logs, as described in the privacy policy.

## Visuals and accessibility

The homepage uses a lazy-loaded Three.js sculpture with pointer interaction, a pause control, reduced-motion support, capped pixel density, and a CSS fallback if WebGL is unavailable. Rendering stops when the scene is offscreen, the tab is hidden, or the animation is paused. Essential company content does not depend on the animation.

## Deployment

Use the existing Moonport Vercel project and its existing domains. `vercel.json` preserves the Next.js framework preset and redirects `/coming-soon` to `/memory-books/`. Vercel detects the static export from `next.config.js`; do not override its Output Directory with `out`, because its Next.js adapter first needs the manifests in `.next`. It does not link to or create a different project.

Before publishing, confirm the company email is monitored and the written engagement/refund practices reflect the company's actual commitments. Website content alone does not establish payment-provider approval; requested business documents are supplied privately.

Legacy components from the previous site remain in the repository for reference but are not imported by the active pages. The old testimonials and scheduling widget are not rendered or exported.
