"use client";

import Image from "next/image";
import { RevealSection, RevealChild } from "./RevealSection";

const properties = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    price: "$89,000,000",
    location: "Sagaponack, NY",
    size: "large",
    className: "md:-mt-24",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    price: "$65,000,000",
    location: "Palm Beach, FL",
    size: "small",
    className: "",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    price: "$45,000,000",
    location: "Greenwich, CT",
    size: "small",
    className: "md:mt-24",
  },
];

function PropertyCard({
  src,
  price,
  location,
  size,
  className = "",
  delay = 0,
}: {
  src: string;
  price: string;
  location: string;
  size: "large" | "small";
  className?: string;
  delay?: number;
}) {
  return (
    <RevealChild delay={delay} className={`group overflow-hidden ${className}`}>
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
        <Image
          src={src}
          alt={location}
          fill
          className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105"
          sizes={size === "large" ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
          <p className="font-sans text-2xl md:text-3xl font-semibold">{price}</p>
          <p className="font-sans text-sm mt-1 tracking-widest uppercase opacity-90">
            {location}
          </p>
        </div>
      </div>
    </RevealChild>
  );
}

export function FeaturedProperties() {
  return (
    <RevealSection id="properties" className="py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <RevealChild delay={0.1} className="mb-16 md:mb-20">
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Featured Properties
          </h2>
          <p className="font-sans text-foreground/70 mt-4 text-lg tracking-wide max-w-xl">
            Exceptional homes in the world&apos;s most sought-after markets.
          </p>
        </RevealChild>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-24">
          <div>
            <PropertyCard
              src={properties[0].src}
              price={properties[0].price}
              location={properties[0].location}
              size="large"
              delay={0.15}
            />
          </div>
          <div className="flex flex-col gap-24 md:gap-24">
            <PropertyCard
              src={properties[1].src}
              price={properties[1].price}
              location={properties[1].location}
              size="small"
              delay={0.2}
            />
            <PropertyCard
              src={properties[2].src}
              price={properties[2].price}
              location={properties[2].location}
              size="small"
              delay={0.25}
            />
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
