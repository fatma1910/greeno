import Image from "next/image";

type Props = {
  className?: string;
};

function StoreBadge({
  alt,
  href,
  src,
}: {
  alt: string;
  href: string;
  src: string;
}) {
  return (
    <a
      href={href}
      className="group inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-black/10 transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      aria-label={alt}
    >
      <Image
        src={src}
        alt={alt}
        width={162}
        height={48}
        className="h-10 w-auto"
        priority={false}
      />
    </a>
  );
}

export function AppStoreBadges({ className }: Props) {
  return (
    <div className={["flex flex-wrap gap-4", className].filter(Boolean).join(" ")}>
      <StoreBadge
        alt="Download on the App Store"
        href="#"
        src="/assets/badges/app-store.svg"
      />
      <StoreBadge
        alt="Get it on Google Play"
        href="#"
        src="/assets/badges/google-play.svg"
      />
    </div>
  );
}
