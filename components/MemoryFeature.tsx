import Link from "next/link";
import { Arrow } from "./SiteLayout";

export function BookConcept() {
  return (
    <div className="book-art">
      <div className="book-orbit" aria-hidden="true" />
      <div className="book-object" aria-hidden="true">
        <div className="book-spine" />
        <div className="book-cover">
          <span className="book-kicker">A life, in pages.</span>
          <span className="book-title">
            The stories
            <br />
            we keep.
          </span>
          <span className="book-rule" />
          <span className="book-small">Photos. Memories. Moments.</span>
        </div>
        <div className="book-pages" />
      </div>
      <span className="concept-caption">Illustrative book concept</span>
    </div>
  );
}

export default function MemoryFeature() {
  return (
    <section className="memory-feature">
      <div className="container memory-grid">
        <div className="memory-copy">
          <p className="eyebrow">
            <span className="status-dot" />
            Coming soon · Our own products
          </p>
          <h2>
            Your memories.
            <br />
            <em>
              Made into something
              <br />
              you can hold.
            </em>
          </h2>
          <p>
            We’re developing Personalized Memory Books: a service that turns
            your photos, memories, stories, and other submitted material into
            professionally designed physical books, with international printing
            and shipping planned.
          </p>
          <p className="availability-note">
            In development. Not available to order or purchase.
          </p>
          <Link className="text-link" href="/memory-books">
            Explore Memory Books
            <Arrow />
          </Link>
        </div>
        <BookConcept />
      </div>
    </section>
  );
}
