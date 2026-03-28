import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  /** Passed to next/image for correct srcset (header should reserve space for nav/CTA). */
  sizes?: string;
  /** Horizontal focus inside the image box (header uses `right` so the lighthouse isn’t cropped off). */
  objectPosition?: "left" | "center" | "right";
};

const objectPositionClass = {
  left: "object-left",
  center: "object-center",
  right: "object-right",
} as const;

export function BrandLogo({
  className = "",
  priority,
  sizes,
  objectPosition = "left",
}: BrandLogoProps) {
  return (
    <Image
      src="/sba-logo.png"
      alt="South Beach Acquisitions logo"
      width={2138}
      height={571}
      sizes={sizes}
      className={`w-auto object-contain ${objectPositionClass[objectPosition]} ${className}`.trim()}
      priority={priority}
    />
  );
}
