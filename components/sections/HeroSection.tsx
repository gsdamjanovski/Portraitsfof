import React from "react";

interface HeroSectionProps {
  /** Optional background image URL — falls back to solid black */
  backgroundImage?: string;
  /** Content rendered absolutely inside the hero */
  children: React.ReactNode;
  /** Height class — defaults to h-[600px] */
  height?: string;
  /** Whether to show gradient overlay */
  overlay?: boolean;
}

export default function HeroSection({
  backgroundImage,
  children,
  height = "h-[600px]",
  overlay = true,
}: HeroSectionProps) {
  return (
    <section className={`relative ${height} w-full overflow-hidden bg-black`}>
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      )}
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-end px-12 lg:px-[120px] pb-16">
        {children}
      </div>
    </section>
  );
}
