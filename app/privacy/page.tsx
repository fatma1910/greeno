"use client";

import { useState } from "react";

const sections = [
  {
    id: "terms",
    title: "Terms of Service",
    content: (
      <>
        <h2 className="text-primary font-semibold text-lg mb-4">
          Sales & Pricing Policy
        </h2>

        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet consectetur.
        </p>

        <ul className="list-disc pl-5 text-gray-600 mb-6 space-y-1">
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
        </ul>

        {[...Array(4)].map((_, i) => (
          <div key={i} className="mb-6">
            <h3 className="font-semibold mb-2">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Sed cras ante ultrices
              vestibulum tortor non sapien. Suspendisse dictum dolor congue
              augue curabitur eget a tincidunt.
            </p>
          </div>
        ))}
      </>
    ),
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    content: (
      <>
        <h2 className="font-semibold mb-4">Privacy Policy</h2>
        <p className="text-gray-600 leading-relaxed">
          This section explains how we collect, use, and protect your data.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </>
    ),
  },
  {
    id: "support",
    title: "Contact Support",
    content: (
      <>
        <h2 className="font-semibold mb-4">Contact Support</h2>
        <p className="text-gray-600">
          Need help? Reach out to our support team anytime.
        </p>
      </>
    ),
  },
];

export default function PolicyPage() {
  const [active, setActive] = useState("terms");

  const activeSection = sections.find((s) => s.id === active);

  return (
    <section className="padding-x padding-y max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
        
        {/* ================= Sidebar ================= */}
        <aside className="hidden lg:block">
          <div className="border rounded-xl overflow-hidden">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActive(section.id)}
                className={`
                  w-full text-left px-4 py-3 text-sm
                  flex items-center justify-between
                  border-b last:border-b-0
                  transition
                  ${
                    active === section.id
                      ? "bg-gray-100 font-semibold"
                      : "hover:bg-gray-50"
                  }
                `}
              >
                {section.title}
                <span>›</span>
              </button>
            ))}
          </div>
        </aside>

        {/* ================= Mobile Filter ================= */}
        <div className="lg:hidden">
          <select
            value={active}
            onChange={(e) => setActive(e.target.value)}
            className="w-full border rounded-md p-3"
          >
            {sections.map((section) => (
              <option key={section.id} value={section.id}>
                {section.title}
              </option>
            ))}
          </select>
        </div>

        {/* ================= Content ================= */}
        <main className="bg-white">
          {activeSection?.content}
        </main>
      </div>
    </section>
  );
}