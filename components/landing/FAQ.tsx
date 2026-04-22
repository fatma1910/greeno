"use client";

import { useId, useState } from "react";

const items = [
  {
    q: "How is Greeno different?",
    a: "Greeno helps you discover nearby nurseries, compare options, and place orders in minutes — all inside one simple app.",
  },
  {
    q: "How to track my orders?",
    a: "You can track your order status in real time from the Order History & Status screen.",
  },
  {
    q: "How to change delivery address?",
    a: "Manage multiple saved addresses and pick a delivery location during checkout.",
  },
  {
    q: "How to become a vendor?",
    a: "Apply, verify your business, then access your dashboard to upload and manage products.",
  },
  {
    q: "How long does vendor approval take?",
    a: "Approval times vary, but most applications are reviewed within a few business days.",
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={[
        "size-5 text-black/60 transition-transform duration-300",
        open ? "rotate-180" : "rotate-0",
      ].join(" ")}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FAQ() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="padding-x padding-y bg-[#F7F9F7]">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Everything you need to know about Greeno
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl space-y-3">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const buttonId = `${baseId}-q-${idx}`;
            const panelId = `${baseId}-a-${idx}`;

            return (
              <div
                key={item.q}
                className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm"
              >
                <button
                  id={buttonId}
                  type="button"
                  className="flex w-full items-center justify-between gap-4 text-left font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span>{item.q}</span>
                  <span className="inline-flex size-9 flex-none items-center justify-center rounded-full ">
                    <Chevron open={isOpen} />
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={[
                    "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                  <div className="min-h-0">
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
