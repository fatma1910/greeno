import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { PolicyShell } from "@/components/policies/PolicyShell";

export default function TermsPage() {
  return (
    <div className="flex flex-1 flex-col bg-white text-foreground">
      <Header />
      <main className="flex-1">
        <PolicyShell
          active="terms"
          title="Terms of Service"
          subtitle="Please read these terms carefully before using Greeno."
        >
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
              Sales & Pricing Policy
            </h2>
            <p className="text-sm leading-6 text-muted-foreground sm:text-base">
              Prices and availability are shown at checkout. Promotions may be
              limited by time, vendor, or location.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground sm:text-base">
              <li>Final totals may include taxes and delivery fees.</li>
              <li>Vendors may update pricing at any time.</li>
              <li>Refunds follow the vendor&apos;s return window.</li>
              <li>We may cancel orders for fraud prevention or errors.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
              Account & Use
            </h2>
            <p className="text-sm leading-6 text-muted-foreground sm:text-base">
              You agree to provide accurate information and use Greeno in a
              lawful manner. You are responsible for activity under your
              account.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
              Limitation of Liability
            </h2>
            <p className="text-sm leading-6 text-muted-foreground sm:text-base">
              Greeno is provided &quot;as is&quot; and we are not liable for
              indirect or consequential damages to the fullest extent permitted
              by law.
            </p>
          </section>
        </PolicyShell>
      </main>
      <Footer />
    </div>
  );
}

