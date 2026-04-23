import Link from "next/link";
import type { ReactNode } from "react";

type PolicyKey = "terms" | "privacy" | "support";

const navItems: Array<{ key: PolicyKey; label: string; href: string }> = [
  { key: "terms", label: "Terms of Service", href: "/terms" },
  { key: "privacy", label: "Privacy Policy", href: "/privacy" },
  { key: "support", label: "Contact Support", href: "/contact-support" },
];

function ChevronRightIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className="size-4 text-muted-foreground"
    >
      <path
        fillRule="evenodd"
        d="M7.21 14.77a.75.75 0 0 1 .02-1.06L10.94 10 7.23 6.29a.75.75 0 1 1 1.06-1.06l4.24 4.24a.75.75 0 0 1 0 1.06l-4.24 4.24a.75.75 0 0 1-1.06.02Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function PolicyShell({
  active,
  title,
  subtitle,
  children,
}: {
  active: PolicyKey;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="padding-x padding-y">
      <div className=" w-full ">
        <div className="flex flex-col gap-8 lg:flex-row">
          <aside className=" w-1/3  flex-1/3">
            <nav className="w-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
              <ul>
                {navItems.map((item, index) => {
                  const isActive = item.key === active;
                  return (
                    <li
                      key={item.key}
                      className={index === 0 ? "" : "border-t border-black/10"}
                    >
                      <Link
                        href={item.href}
                        className={[
                          "flex items-center justify-between gap-4 px-6 py-3 text-sm font-medium transition",
                          isActive
                            ? "bg-black/5 text-foreground"
                            : "text-foreground hover:bg-black/5",
                        ].join(" ")}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <span>{item.label}</span>
                        <ChevronRightIcon />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          <article className="flex-2/3">
            <header>
              <h1 className="text-2xl font-semibold text-primary sm:text-3xl">
                {title}
              </h1>
              {subtitle ? (
                <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
                  {subtitle}
                </p>
              ) : null}
            </header>
            <div className="mt-8 space-y-8">{children}</div>
          </article>
        </div>
      </div>
    </section>
  );
}
