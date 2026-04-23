import Link from "next/link";

import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { PolicyShell } from "@/components/policies/PolicyShell";

export default function ContactSupportPage() {
  return (
    <div className="flex flex-1 flex-col bg-white text-foreground">
      <Header />
      <main className="flex-1">
        <PolicyShell
          active="support"
          title="Contact Support"
          subtitle="We typically respond within 24–48 hours."
        >
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
              Support Channels
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground sm:text-base">
              <li>Email: support@greeno.app</li>
              <li>In-app help: Settings → Help</li>
              <li>Order issues: include your order number</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
              Quick Links
            </h2>
            <p className="text-sm leading-6 text-muted-foreground sm:text-base">
              Looking for a policy instead?
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/terms"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-medium text-foreground shadow-sm transition hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-medium text-foreground shadow-sm transition hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                Privacy Policy
              </Link>
            </div>
          </section>
        </PolicyShell>
      </main>
      <Footer />
    </div>
  );
}
