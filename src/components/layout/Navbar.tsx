"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Skill", href: "/skills" },
  { label: "Background", href: "/background" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActivePath = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="border-b border-[#222f5b]/60 bg-[#0e1a40]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 md:px-10 py-4 md:py-6">
        <div className="text-xl font-semibold tracking-wider">
          <span className="px-3 py-1 border border-[#946b2d] rounded-full text-xs font-medium text-[#946b2d]">
            {"Mikael Prapaskalis G".toUpperCase()}
          </span>
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`transition-colors ${
                isActivePath(item.href)
                  ? "text-[#946b2d] font-semibold"
                  : "hover:text-[#946b2d]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#222f5b] hover:border-[#946b2d] transition-colors"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 rounded-full bg-[#f5f5f5] transition-transform ${
                isOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-[#f5f5f5] transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-[#f5f5f5] transition-transform ${
                isOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden border-t border-[#222f5b]/60">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`py-1 transition-colors ${
                  isActivePath(item.href)
                    ? "text-[#f5d08b] font-semibold"
                    : "text-slate-200 hover:text-[#f5d08b]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
