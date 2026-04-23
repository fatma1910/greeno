import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { PolicyShell } from "@/components/policies/PolicyShell";

export default function PrivacyPage() {
  return (
    <div className="flex flex-1 flex-col bg-white text-foreground">
      <Header />
      <main className="flex-1">
        <PolicyShell
          active="privacy"
          title="Privacy Policy"
          subtitle="Learn what we collect, how we use it, and the choices you have."
        >
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
              Information We Collect
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground sm:text-base">
              <li>Account details like name, email, and phone number.</li>
              <li>Order information and delivery preferences.</li>
              <li>Device and usage data to improve performance.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
              How We Use Your Information
            </h2>
            <p className="text-sm leading-6 text-muted-foreground sm:text-base">
              We use your information to process orders, provide customer
              support, personalize your experience, and keep the platform safe.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
              Your Choices
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground sm:text-base">
              <li>Update your profile details from your account settings.</li>
              <li>Opt out of marketing communications at any time.</li>
              <li>Request access or deletion of your data.</li>
            </ul>
          </section>
        </PolicyShell>
      </main>
      <Footer />
    </div>
  );
}

