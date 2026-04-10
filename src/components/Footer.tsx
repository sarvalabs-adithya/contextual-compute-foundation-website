import { SOCIAL_X } from "@/lib/site";

const colTitleClass =
  "mb-5 font-mono text-[0.55rem] font-medium uppercase tracking-[0.1em] text-ccf-muted";

const bodyLinkClass =
  "block font-sans text-[0.8rem] font-light leading-snug text-ccf-secondary outline-none transition-colors duration-300 ease-out hover:text-ccf-accent focus-visible:text-ccf-accent focus-visible:ring-2 focus-visible:ring-ccf-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ccf-bg";

const bottomLinkClass =
  "font-mono text-[0.55rem] font-medium uppercase tracking-wide text-ccf-muted outline-none transition-colors duration-300 ease-out hover:text-ccf-accent focus-visible:text-ccf-accent focus-visible:ring-2 focus-visible:ring-ccf-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ccf-bg";

export function Footer() {
  return (
    <footer className="border-t border-ccf-border bg-ccf-bg">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-10 md:py-14">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-x-10 lg:gap-x-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 md:col-start-1">
            <p className="font-sans text-[0.85rem] font-medium leading-snug text-ccf-fg">
              Contextual Compute Foundation
            </p>
            <p className="mt-3 max-w-[260px] font-sans text-[0.78rem] font-light leading-relaxed text-ccf-secondary">
              Producing and stewarding the core theory behind participant-centric distributed systems.
            </p>
          </div>

          {/* Research */}
          <nav aria-label="Research" className="col-span-1">
            <p className={colTitleClass}>Research</p>
            <ul className="space-y-2.5">
              <li>
                <a href="#papers" className={bodyLinkClass}>
                  Published Papers
                </a>
              </li>
              <li>
                <a href="#thesis" className={bodyLinkClass}>
                  The Thesis
                </a>
              </li>
              <li>
                <a href="#why" className={bodyLinkClass}>
                  Why Different
                </a>
              </li>
            </ul>
          </nav>

          {/* Adopters */}
          <nav aria-label="Adopters" className="col-span-1">
            <p className={colTitleClass}>Adopters</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://moi.technology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={bodyLinkClass}
                >
                  MOI Protocol
                </a>
              </li>
            </ul>
          </nav>

          {/* Connect */}
          <nav aria-label="Connect" className="col-span-2 md:col-span-1">
            <p className={colTitleClass}>Connect</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={SOCIAL_X}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={bodyLinkClass}
                >
                  X / Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/show/3aYeUGPjnZveQYR3UzdpPT"
                  target="_blank"
                  rel="noopener"
                  className={bodyLinkClass}
                >
                  Humanised ↗
                </a>
              </li>
              <li>
                <a href="mailto:admin@contextualcompute.org" className={bodyLinkClass}>
                  Email
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-ccf-border-light">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-10">
          <p className="font-mono text-[0.58rem] font-normal leading-relaxed text-ccf-muted">
            © 2026 Contextual Compute Foundation. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#" className={bottomLinkClass}>
              Privacy
            </a>
            <a href="#" className={bottomLinkClass}>
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
