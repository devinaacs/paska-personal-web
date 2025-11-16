import { Linkedin, Mail, MessageCircle } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

import { me } from "@/constant/me";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0e1a40] text-white flex flex-col">
      <Navbar />

      <main className="flex-1 px-8 md:px-16 pb-16 py-16 flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-16">
        <section className="w-full lg:w-1/2 max-w-lg pt-4">
          <p className="text-sm md:text-base text-[#d3d3d3] mb-8 max-w-xl">
            Whether you&apos;re looking for{" "}
            <span className="text-[#f5d08b] font-semibold">
              data analysis, dashboarding
            </span>{" "}
            or{" "}
            <span className="text-[#f5d08b] font-semibold">
              performance insights
            </span>
            , feel free to reach out. I&apos;m based in{" "}
            <span className="font-semibold text-[#f5d08b]">
              {me.location}
            </span>{" "}
            and open for collaboration and new opportunities.
          </p>

          <div className="space-y-6 md:space-y-8 text-sm md:text-base">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <p className="text-[#f5d08b] font-semibold">
                  Phone (WhatsApp)
                </p>
                <a
                  href={`https://wa.me/${me.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:text-[#f5d08b] transition-colors"
                >
                  {me.whatsappDisplay}
                </a>
              </div>
              <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center bg-[#222f5b]/40">
                <MessageCircle className="w-6 h-6" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1">
                <p className="text-[#f5d08b] font-semibold">E-mail</p>
                <a
                  href={`mailto:${me.email}`}
                  className="underline underline-offset-4 hover:text-[#f5d08b] transition-colors"
                >
                  {me.email}
                </a>
              </div>
              <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center bg-[#222f5b]/40">
                <Mail className="w-6 h-6" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1">
                <p className="text-[#f5d08b] font-semibold">LinkedIn</p>
                <a
                  href={me.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:text-[#f5d08b] transition-colors break-all"
                >
                  {me.linkedinUrl}
                </a>
              </div>
              <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center bg-[#222f5b]/40">
                <Linkedin className="w-6 h-6" />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full lg:w-1/2 max-w-xl pt-4">
          <div className="w-full rounded-3xl border border-[#222f5b] bg-[#020617]/40 px-8 py-10 md:px-10 md:py-12 shadow-[0_18px_60px_rgba(0,0,0,0.5)]">
            <p className="text-xs font-semibold tracking-[0.25em] text-[#f5d08b] mb-4">
              LET&apos;S COLLABORATE
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="block">Let&apos;s{" "}</span>
              <span className="block">
                <span className="text-[#946b2d]">connect</span> and
              </span>
              <span className="block">
                <span className="text-[#946b2d]">work together</span>!
              </span>
            </h1>
            <p className="mt-4 text-sm md:text-base text-[#d3d3d3]">
              Share your business question, campaign goals, or raw data — I&apos;ll
              help turn it into{" "}
              <span className="text-[#f5d08b] font-semibold">
                clear, actionable insights
              </span>{" "}
              you can actually use.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
