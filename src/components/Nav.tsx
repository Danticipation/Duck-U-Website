"use client";

import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "#how", label: "How it works" },
  { href: "#points", label: "Points & titles" },
  { href: "#merch", label: "Merch" },
  { href: "#forum", label: "Forum" },
  { href: "#faq", label: "FAQ" },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-20 border-b border-yellow-400/10 bg-gradient-to-b from-stone-950/95 via-stone-950/90 to-stone-950/60 backdrop-blur pt-[env(safe-area-inset-top)]"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="flex min-h-[44px] min-w-[44px] items-center gap-3 rounded-lg active:opacity-80"
          aria-label="Duck U home"
        >
          <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-yellow-400/60 bg-black">
            <Image
              src="/images/duck-u-logo.jpg"
              alt=""
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
          <span className="hidden text-sm font-semibold text-zinc-300 sm:inline">
            Don&apos;t be wack, do quack
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="min-h-[44px] min-w-[44px] rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 hover:text-yellow-300 focus:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
            >
              {label}
            </a>
          ))}
          <a
            href="https://ducku.app"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 min-h-[44px] rounded-full bg-yellow-400 px-4 py-2.5 text-xs font-black uppercase tracking-wide text-black hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
          >
            Download app
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-zinc-300 hover:bg-white/5 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <span className="text-xl" aria-hidden>✕</span>
          ) : (
            <span className="text-xl" aria-hidden>☰</span>
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`border-t border-yellow-400/10 bg-stone-950/98 backdrop-blur md:hidden ${menuOpen ? "block" : "hidden"}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mx-auto max-w-6xl px-4 py-4" aria-label="Main mobile">
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-[48px] items-center rounded-lg px-4 py-3 text-base font-medium text-zinc-300 hover:bg-white/5 hover:text-yellow-300 active:bg-white/10"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="mt-2 border-t border-zinc-800 pt-2">
              <a
                href="https://ducku.app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[48px] items-center justify-center rounded-2xl bg-yellow-400 px-4 py-3 text-base font-black uppercase tracking-wide text-black hover:bg-yellow-300"
              >
                Download app
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
