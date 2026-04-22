import { FaStar } from "react-icons/fa";


const reviews = [
  {
    quote:
      "The checkout process is incredibly smooth. I love how easy it is to track my orders. Greeno has made my plant shopping experience much better!",
    name: "Sarah Johnson",
    role: "Regular Customer",
  },
  {
    quote:
      "Great UI and superfast experience. The app never lags and I can understand what I need in seconds. Highly recommended!",
    name: "Michael Chen",
    role: "Plant Enthusiast",
  },
  {
    quote:
      "As a vendor, this dashboard is a game-changer. Managing inventory and tracking orders has never been easier. The vendor workflow is brilliant.",
    name: "Emily Rodriguez",
    role: "Vendor",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-[#FFD700]">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar key={i} color="" />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className=" padding-x padding-y">
      <div className="mx-auto flex flex-col items-center justify-center w-full ">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            What Plant Lovers Say
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            See what our customers have to say
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl border border-black/5 bg-[#F7F9F7] p-6 shadow-sm"
            >
              <Stars />
              <p className="mt-4 text-sm leading-6 text-[#111111]">
                “{r.quote}”
              </p>
              <div className="mt-6 text-sm font-semibold">{r.name}</div>
              <div className="mt-1 text-xs text-muted-foreground">{r.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

