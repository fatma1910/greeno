import { FiShoppingCart, FiMapPin } from "react-icons/fi";
import { GoHistory } from "react-icons/go";
import { IoIosStarOutline, IoIosNotificationsOutline } from "react-icons/io";
import { LuFolders } from "react-icons/lu";

const features = [
  {
    title: "Smart Cart & Checkout",
    desc: "Add items, review your cart, and complete orders with a few taps.",
  },
  {
    title: "Order History & Status",
    desc: "Track all your past and current orders in one place.",
  },
  {
    title: "Address & Map Location",
    desc: "Save delivery locations with integrated map support.",
  },
  {
    title: "Ratings & Reviews",
    desc: "Rate your experience to help others choose confidently.",
  },
  {
    title: "Notifications & Updates",
    desc: "Stay informed with real-time updates and reminders.",
  },
  {
    title: "Vendor Application Flow",
    desc: "Fast onboarding process for new vendors.",
  },
];

// ✅ icons mapped in same order as features
const icons = [
  FiShoppingCart,
  GoHistory,
  FiMapPin,
  IoIosStarOutline,
  IoIosNotificationsOutline,
  LuFolders,
];

function Icon({ index }: { index: number }) {
  const SelectedIcon = icons[index % icons.length];

  return (
    <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
      <SelectedIcon className="size-5" />
    </span>
  );
}

export function Features() {
  return (
    <section id="features" className="bg-[#F7F9F7] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything You Need Inside the App
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Powerful features designed for a seamless experience.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <Icon index={idx} />

              <h3 className="mt-4 text-[20px] font-semibold">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}