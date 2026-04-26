import Image from "next/image";

const checks = [
  {
    title: "Business information",
    desc: "Provide your business details and registration.",
  },
  {
    title: "Upload verification documents",
    desc: "Submit required documents for verification.",
  },
  {
    title: "Application review (2–5 business days)",
    desc: "Our team reviews and approves your application.",
  },
];

export function VendorCTA() {
  return (
    <section id="vendors" className="padding-x padding-y">
      <div className=" w-full ">
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-12">
          <div className="flex-1 w-full">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Become a Vendor on Greeno
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
              Apply, verify your business, then access your dashboard to upload
              and manage your products.
            </p>

            <ul className="mt-8 space-y-5">
              {checks.map((c) => (
                <li key={c.title} className="flex gap-3">
                  <span className="mt-0.5 inline-flex size-7 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg
                      viewBox="0 0 24 24"
                      className="size-4"
                      aria-hidden="true"
                      fill="none"
                    >
                      <path
                        d="M20 6 9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <div className="text-sm font-semibold">{c.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {c.desc}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-4 items-center gap-4">
              <a
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-white shadow-sm transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                Login to Dashboard
              </a>
              <div className="text-xs text-muted-foreground">
                New vendor? Apply, then access your dashboard after approval.
              </div>
            </div>
          </div>

          <div className="relative flex-1 w-full overflow-hidden rounded-3xl min-h-[320px] sm:min-h-[420px] lg:min-h-[520px]">
            <Image
              src="/assets/vendor.png"
              alt="Vendor"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
