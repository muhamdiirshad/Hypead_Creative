"use client"

import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/917907828308?text=Hello%20Hypead%20Creative,%20I’m%20exploring%20premium%20digital%20solutions%20for%20my%20brand%20and%20would%20love%20to%20connect%20with%20your%20team."
      target="_blank"
      rel="noopener noreferrer"
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
