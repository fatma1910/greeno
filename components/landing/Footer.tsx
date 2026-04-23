import Image from "next/image";
import Link from "next/link";

import { AppStoreBadges } from "./AppStoreBadges";

const quickLinks = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Vendors", href: "/#vendors" },
  { label: "Reviews", href: "/#reviews" },
];

const supportLinks = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Contact Support", href: "/contact-support" },
];

function SocialIcon({
  title,
  path,
}: {
  title: string;
  path: string;
}) {
  return (
    <a
      href="#"
      className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      aria-label={title}
    >
      <svg
        viewBox="0 0 24 24"
        className="size-5"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d={path} />
      </svg>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="bg-footer text-white relative py-[60px] px-[60px] overflow-hidden">
      <div className="absolute bottom-0 right-0">
        <Image
          src="/assets/footer.svg"
          alt="Greeno"
          width={215}
          height={320}
          className="h-full w-full opacity-20"
        />
      </div>
      <div className="">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/footer-logo.svg"
                alt="Greeno"
                width={154}
                height={154}
                className=""
              />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
              Discover nurseries near you, compare options, and order plants in
              minutes.
            </p>
            <div className="mt-6 flex gap-3">
              <SocialIcon
                title="Facebook"
                path="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v3H9v3h2v6h3v-6h3l1-3h-4V9c0-.6.4-1 1-1Z"
              />
              <SocialIcon
                title="X"
                path="M18.9 2H22l-6.8 7.8L23 22h-6.4l-5-6.6L5.8 22H2.7l7.4-8.5L1 2h6.6l4.6 6.1L18.9 2Zm-1.1 18h1.8L6.6 3.9H4.7L17.8 20Z"
              />
              <SocialIcon
                title="Instagram"
                path="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5ZM18 6.4a1.1 1.1 0 1 1-1.1-1.1A1.1 1.1 0 0 1 18 6.4Z"
              />
              <SocialIcon
                title="LinkedIn"
                path="M6.5 6.8A2.3 2.3 0 1 1 6.5 2.2a2.3 2.3 0 0 1 0 4.6ZM4 22V8.4h5V22H4Zm7.5 0V8.4h4.8v1.9h.1c.7-1.3 2.3-2.6 4.8-2.6 5.1 0 6 3.3 6 7.6V22h-5v-5.7c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V22h-5.4Z"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-sm font-semibold">Quick Links</div>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link className="hover:text-white" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-sm font-semibold">Support</div>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {supportLinks.map((l) => (
                <li key={l.label}>
                  <Link className="hover:text-white" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-sm font-semibold">Download App</div>
            <AppStoreBadges className="mt-4 " />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Greeno. All rights reserved.</div>
          <div className="text-white/50">Green your space, effortlessly.</div>
        </div>
      </div>
    </footer>
  );
}
