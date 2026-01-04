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
        src="/images/logo.png"
        alt="Hypead Creative Logo"
        width={150}
        height={150}
        priority
        className="object-contain"
      />
    </Link>
  );
};

export default Logo;
