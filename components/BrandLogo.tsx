import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className = "", priority }: BrandLogoProps) {
  return (
    <Image
      src="/sba-logo.png"
      alt="South Beach Acquisitions logo"
      width={684}
      height={182}
      className={`w-auto object-contain object-left ${className}`.trim()}
      priority={priority}
    />
  );
}
