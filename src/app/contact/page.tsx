import { Linkedin, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

const EMAIL = "paskalis@gmail.com";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/mikael-prapaskalis-517b69231/";

const WHATSAPP_DISPLAY = "+62 8xx xxxx xxxx";
const WHATSAPP_NUMBER = "628xxxxxxxxxx";  

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0e1a40] text-white flex flex-col">
      <header className="flex items-center justify-between px-10 py-6">
        <div className="text-xl font-semibold tracking-wider">
          <span className="px-3 py-1 border border-[#946b2d] rounded-full text-xs font-medium text-[#946b2d]">
            CONTACT INFO
          </span>
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/home" className="hover:text-[#946b2d] transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#946b2d] transition-colors">
            About Me
          </Link>
          <Link href="/skill" className="hover:text-[#946b2d] transition-colors">
            Skill
          </Link>
          <Link
            href="/experience"
            className="hover:text-[#946b2d] transition-colors"
          >
            Background
          </Link>
          <Link
            href="/projects"
            className="hover:text-[#946b2d] transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-[#946b2d] font-semibold"
          >
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1 px-8 md:px-16 pb-16 flex flex-col md:flex-row items-center md:items-start justify-center gap-16">
        <section className="w-full md:w-1/2 max-w-md">

          <div className="space-y-10 text-sm md:text-base">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <p className="text-[#f5d08b] font-semibold">
                  Phone (WhatsApp)
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:text-[#f5d08b] transition-colors"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </div>
              <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1">
                <p className="text-[#f5d08b] font-semibold">E-mail</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="underline underline-offset-4 hover:text-[#f5d08b] transition-colors"
                >
                  {EMAIL}
                </a>
              </div>
              <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1">
                <p className="text-[#f5d08b] font-semibold">LinkedIn</p>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:text-[#f5d08b] transition-colors break-all"
                >
                  {LINKEDIN_URL}
                </a>
              </div>
              <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                <Linkedin className="w-6 h-6" />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full md:w-1/2 max-w-xl text-right md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="block">Let&apos;s{" "}</span>
            <span className="block">
              <span className="text-[#946b2d]">connect</span> and
            </span>
            <span className="block">
              <span className="text-[#946b2d]">work together</span>!
            </span>
          </h1>
        </section>
      </main>
    </div>
  );
}
