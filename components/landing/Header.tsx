import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Vendors", href: "/#vendors" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="flex items-center justify-between px-4 py-2 sm:px-14">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/branding/logo-header.svg"
            alt="Greeno"
            width={75}
            height={75}
            className=" w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-primary md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="transition hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-white shadow-sm transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 sm:inline-flex"
          >
            Vendor Login
          </a>

          <details className="relative md:hidden">
            <summary className="inline-flex h-10 items-center justify-center rounded-full border border-black/10 px-4 text-sm font-medium text-foreground shadow-sm transition hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40">
              Menu
            </summary>
            <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-black/10 bg-white p-2 shadow-lg">
              {links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="block rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-black/5 hover:text-foreground"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="#"
                className="mt-1 block rounded-xl bg-primary px-3 py-2 text-center text-sm font-medium text-white hover:bg-primary/90"
              >
                Vendor Login
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
