"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Skill", href: "/skill" },
  { label: "Background", href: "/background" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between px-10 py-6">
      <div className="text-xl font-semibold tracking-wider">
        <span className="px-3 py-1 border border-[#946b2d] rounded-full text-xs font-medium text-[#946b2d]">
          {"Mikael Prapaskalis G".toUpperCase()}
        </span>
      </div>

      <nav className="hidden md:flex gap-8 text-sm font-medium">
        {NAV_ITEMS.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`transition-colors ${
                isActive ? "text-[#946b2d] font-semibold" : "hover:text-[#946b2d]"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
