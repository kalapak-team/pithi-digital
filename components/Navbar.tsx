"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "@/components/Logo";
import Magnet from "@/components/react-bits/Magnet";
import { navItems, type NavItem, type NavLink } from "@/lib/nav";

function ChevronIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M13.5 6.75C13.5 6.75 10.186 11.25 9 11.25C7.814 11.25 4.5 6.75 4.5 6.75"
        stroke="currentColor"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function isCurrent(pathname: string, item: NavItem) {
  if (item.href === "/") return pathname === "/";
  if (item.href) return pathname === item.href || pathname.startsWith(`${item.href}/`);
  if (item.match) {
    return pathname === item.match || pathname.startsWith(`${item.match}/`);
  }
  return false;
}

function DropdownPanel({
  links,
  open,
}: {
  links: NavLink[];
  open: boolean;
}) {
  return (
    <div
      className={`absolute left-1/2 top-full z-50 min-w-[14rem] -translate-x-1/2 pt-5 transition-all duration-200 ${
        open
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-1 opacity-0"
      }`}
    >
      <div className="rounded-2xl border border-brand/25 bg-deep px-5 py-5">
        <div className="flex flex-col items-start gap-3">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.875rem] font-extralight leading-[1.5] text-white transition-colors duration-300 hover:text-brand"
            >
              <span className={item.en ? "font-khmer" : undefined}>
                {item.label}
              </span>
              {item.en ? (
                <span className="mt-0.5 block text-[0.7rem] text-brand-soft/70">
                  {item.en}
                </span>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  return <NavbarBar key={pathname} pathname={pathname} />;
}

function NavbarBar({ pathname }: { pathname: string }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<number | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const open = (label: string) => {
    clearCloseTimer();
    setOpenMenu(label);
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 120);
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };

    const onClick = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  const linkClass = (current: boolean) =>
    `border-b border-transparent text-[0.875rem] font-extralight leading-[1.5] whitespace-nowrap text-white transition-[border-color] duration-300 hover:border-white ${
      current ? "border-white" : ""
    }`;

  return (
    <header className="pointer-events-none absolute inset-x-0 top-6 z-50">
      <nav
        ref={navRef}
        className={`pointer-events-auto mx-auto w-[calc(100%-2rem)] max-w-[100rem] bg-black/50 pl-6 pr-2 backdrop-blur-[1.5rem] lg:w-[calc(100%-5rem)] ${
          mobileOpen ? "rounded-[1.75rem] py-2" : "rounded-full py-2"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="shrink-0 py-1 text-white"
            aria-label="Pithi home"
          >
            <Logo />
          </Link>

          <div className="hidden flex-1 items-center justify-center gap-4 xl:gap-5 2xl:gap-6 lg:flex">
            {navItems.map((item) => {
              if (item.dropdown) {
                const current = isCurrent(pathname, item);
                const isOpen = openMenu === item.label;
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => open(item.label)}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      type="button"
                      className={`flex items-center gap-1 ${linkClass(current || isOpen)}`}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      onClick={() =>
                        setOpenMenu((currentMenu) =>
                          currentMenu === item.label ? null : item.label,
                        )
                      }
                    >
                      <span>{item.label}</span>
                      <ChevronIcon />
                    </button>
                    <DropdownPanel links={item.dropdown} open={isOpen} />
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={linkClass(isCurrent(pathname, item))}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <Magnet
              padding={28}
              magnetStrength={3}
              wrapperClassName="hidden lg:inline-block"
            >
              <Link
                href="/plan"
                className="inline-flex rounded-full bg-brand px-5 py-3 text-[0.95rem] font-normal whitespace-nowrap text-ink transition-colors duration-300 hover:bg-white xl:px-6"
              >
                Plan Your Event
              </Link>
            </Magnet>

            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full text-white lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((openState) => !openState)}
            >
              {mobileOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M4 7H20M4 12H20M4 17H20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`grid transition-[grid-template-rows] duration-300 lg:hidden ${
            mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-4 px-1 pb-4 pt-6">
              {navItems.map((item) => {
                if (item.dropdown) {
                  const isOpen = openMenu === item.label;
                  return (
                    <div key={item.label}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between text-base text-white"
                        onClick={() =>
                          setOpenMenu((currentMenu) =>
                            currentMenu === item.label ? null : item.label,
                          )
                        }
                      >
                        {item.label}
                        <ChevronIcon />
                      </button>
                      {isOpen ? (
                        <div className="mt-3 flex flex-col gap-3 rounded-2xl border border-brand/25 bg-deep p-5">
                          {item.dropdown.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="text-sm text-white hover:text-brand"
                            >
                              <span className={link.en ? "font-khmer" : undefined}>
                                {link.label}
                              </span>
                              {link.en ? (
                                <span className="ml-2 text-brand-soft/70">{link.en}</span>
                              ) : null}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href!}
                    className={`text-base text-white ${
                      isCurrent(pathname, item) ? "opacity-100" : "opacity-80"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href="/plan"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-base text-ink"
              >
                Plan Your Event
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
