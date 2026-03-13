import Image from "next/image";
import Link from "next/link";
import type { Portrait } from "@/lib/types";

export default function PortraitCard({ portrait }: { portrait: Portrait }) {
  return (
    <Link href={`/the-portraits#${portrait.slug}`} className="group block">
      {/* Image area */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#DDDDDD]">
        {portrait.image ? (
          <Image
            src={portrait.image}
            alt={portrait.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 240px"
          />
        ) : null}
        {/* Number overlay */}
        <span className="absolute bottom-4 left-4 font-[var(--font-heading)] text-[64px] font-bold leading-none text-white/40">
          {String(portrait.id).padStart(2, "0")}
        </span>
      </div>

      {/* Card content */}
      <div className="pt-5">
        <p className="text-[13px] font-medium text-black">
          {portrait.name} · {portrait.location}, {portrait.state}
        </p>
        <p className="mt-2 font-[var(--font-heading)] text-base font-bold leading-snug text-black">
          &ldquo;{portrait.quote}&rdquo;
        </p>
        <p className="mt-2 text-[11px] font-medium uppercase tracking-wider text-subtle">
          {portrait.policyLabel}
        </p>
      </div>
    </Link>
  );
}
