import { GoClock } from "react-icons/go";
import { FiMapPin } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";




const items = [
  {
    title: "Order in Minutes",
    desc: "Fast and intuitive checkout process.",
    icon: <GoClock size={32} />,
  },
  {
    title: "Track Every Step",
    desc: "Real-time order tracking and updates.",
    icon: <FiMapPin size={32} />,
  },
  {
    title: "Smart Address Management",
    desc: "Save and manage multiple addresses.",
    icon: <IoSettingsOutline size={32}/>,
  },
];



export function Highlights() {
  return (
    <section className="padding-x padding-y">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="text-center">
              <div className="mx-auto inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                {it.icon}
              </div>
              <div className="mt-4 text-[20px] font-semibold">{it.title}</div>
              <p className="mt-2 text-[16px] text-[#6B7280]">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

