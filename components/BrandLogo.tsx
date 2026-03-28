import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  /** Passed to next/image for correct srcset (header should reserve space for nav/CTA). */
  sizes?: string;
};

export function BrandLogo({ className = "", priority, sizes }: BrandLogoProps) {
  return (
    <Image
      src="/sba-logo.png"
      alt="South Beach Acquisitions logo"
      width={900}
      height={240}
      sizes={sizes}
      className={`w-auto object-contain object-left ${className}`.trim()}
      priority={priority}
    />
  );
}
