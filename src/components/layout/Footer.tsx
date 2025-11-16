import Link from "next/link";

import { me } from "@/constant/me";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#222f5b] px-10 py-4 text-xs md:text-sm text-[#d3d3d3] flex flex-col md:flex-row items-center justify-between gap-2">
      <span>
        © {year} {me.fullName}. All rights reserved.
      </span>
      <div className="flex gap-4">
        <a
          href={`mailto:${me.email}`}
          className="hover:text-[#f5d08b] transition-colors"
        >
          {me.email}
        </a>
        <Link
          href={me.linkedinUrl}
          target="_blank"
          className="hover:text-[#f5d08b] transition-colors"
        >
          LinkedIn
        </Link>
      </div>
    </footer>
  );
}
