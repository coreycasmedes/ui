import type { ReactNode } from "react";

const cls =
  "group relative block rounded-2xl py-3 -mx-3 px-3 hover:bg-surface/50 transition-colors";

// Renders an external link when href is set, otherwise a plain container.
export const CardLink = ({
  href,
  children,
}: {
  href?: string;
  children: ReactNode;
}) =>
  href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  ) : (
    <div className={cls}>{children}</div>
  );
