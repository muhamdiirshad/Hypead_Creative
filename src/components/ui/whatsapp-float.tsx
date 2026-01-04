"use client"

import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/919876543210?text=Hello%20Hypead%20Creative"
      target="_blank"
      aria-label="Chat on WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-[60]
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-green-500
        text-white
        shadow-lg
        transition-all
        hover:scale-110
        hover:bg-green-600
      "
    >
      <FaWhatsapp size={28} />
    </Link>
  )
}
