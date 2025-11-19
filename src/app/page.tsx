import Image from "next/image";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

import { me } from "@/constant/me";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0e1a40] text-white flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-12 px-6 md:px-10 pb-16 pt-10 md:pt-0">
        <section className="max-w-xl text-center md:text-left">
          <div className="inline-flex items-center rounded-full border border-[#946b2d] px-4 md:px-5 py-2 mb-6 bg-[#222f5b]/40">
            <span className="text-[0.65rem] md:text-xs font-semibold tracking-[0.25em] text-[#946b2d]">
              {me.role.toUpperCase()}
            </span>
            <span className="text-[0.65rem] md:text-xs font-semibold tracking-[0.25em] ml-1">
              PORTFOLIO
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="block">{me.firstName.toUpperCase()}</span>
            <span className="block text-[#946b2d]">
              {me.lastName.toUpperCase()}
            </span>
            <span className="block">{me.shortLast.toUpperCase()}</span>
          </h1>

          <p className="mt-5 md:mt-6 text-base sm:text-lg md:text-xl text-[#d3d3d3]">
            Helping you see the{" "}
            <span className="text-[#946b2d]">essentials</span> in the{" "}
            <span className="text-[#946b2d]">data</span>
          </p>

          <div className="mt-8 md:mt-10">
            <a
              href="/about"
              className="inline-flex items-center rounded-full border border-[#946b2d] px-6 py-2 text-sm font-semibold hover:bg-[#946b2d] hover:text-[#0e1a40] transition-colors"
            >
              About Me
            </a>
          </div>
        </section>

        <section className="relative mb-6 md:mb-0 w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 flex items-center justify-center">
          <div className="absolute inset-4 rounded-full bg-[#946b2d]" />
          <div className="absolute inset-1 rounded-full border-[8px] sm:border-[10px] border-[#222f5b]" />
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 overflow-hidden rounded-full bg-[#000000]">
            <Image
              src="/images/mikael.jpg"
              alt={me.fullName}
              fill
              className="object-cover"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
