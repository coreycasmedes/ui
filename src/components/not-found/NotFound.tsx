import { Link } from "react-router-dom";

export const NotFound = () => (
  <section className="min-h-[70svh] max-w-2xl mx-auto px-6 md:px-12 pt-40 pb-20">
    <h1 className="text-3xl md:text-4xl mb-4">Page not found</h1>
    <p className="text-secondary text-pretty mb-10">
      There's nothing at this address. It may have moved, or the link may be
      mistyped.
    </p>
    <Link
      to="/"
      className="inline-block rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-background hover:bg-primary transition-colors"
    >
      Back to home
    </Link>
  </section>
);
