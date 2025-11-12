"use client";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      prefetch={false}
      className="flex items-center gap-3 select-none"
    >
      <Image
        src="https://res.cloudinary.com/dujnfohmk/image/upload/v1762945049/ChatGPT_Image_Nov_12_2025_04_26_33_PM_xrvcju.png"
        alt="Hypead Creative Logo"
        width={42}
        height={42}
        priority
        className="object-contain"
      />
      <div className="flex flex-col leading-tight">
        <span className="text-[1.3rem] font-bold tracking-wide text-accent">
          HYPEAD
        </span>
        <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
          Creative
        </span>
      </div>
    </Link>
  );
};

export default Logo;
