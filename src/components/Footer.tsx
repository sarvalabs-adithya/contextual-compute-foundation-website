import { SOCIAL_X } from "@/lib/site";

const linkClass =
  "font-mono text-xs uppercase tracking-widest text-ccf-secondary outline-none transition-colors duration-300 ease-out hover:text-ccf-accent focus-visible:text-ccf-accent focus-visible:ring-2 focus-visible:ring-ccf-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ccf-bg md:text-sm";

export function Footer() {
  return (
    <footer className="border-t border-ccf-border px-5 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <p className="text-sm text-ccf-secondary">© 2026 Contextual Compute Foundation</p>
        <ul className="flex flex-wrap items-center gap-6 md:gap-8">
          <li>
            <a
              href="https://moi.technology"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              MOI Protocol
            </a>
          </li>
          <li>
            <a href={SOCIAL_X} target="_blank" rel="noopener noreferrer" className={linkClass}>
              X / Twitter
            </a>
          </li>
          <li>
            <a href="mailto:admin@contextualcompute.org" className={linkClass}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
