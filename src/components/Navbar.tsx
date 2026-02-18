"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const showWhiteBg = isScrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        showWhiteBg
          ? "bg-white shadow-md"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 -ml-2">
          <img
            src="/images/logo.png"
            alt="Kamala Farms"
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li
              key={link.href}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.href)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className={cn(
                  "relative flex items-center gap-1 font-heading text-lg uppercase tracking-wider transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-dark after:transition-all after:duration-300 hover:after:w-full",
                  isScrolled
                    ? "text-dark"
                    : "text-dark",
                  (pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))) && "after:w-full"
                )}
              >
                {link.label}
              </Link>

              {/* Dropdown */}
              {link.children && openDropdown === link.href && (
                <ul className="absolute left-1/2 -translate-x-1/2 top-full w-72 bg-dark pt-6 pb-4 shadow-xl">
                  {link.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className={cn(
                          "relative block px-8 py-3 text-base transition-colors after:absolute after:bottom-2 after:left-8 after:h-[1px] after:bg-white/60 after:transition-all after:duration-300",
                          pathname === child.href
                            ? "text-white font-semibold after:w-[calc(100%-4rem)]"
                            : "text-white/80 hover:text-white after:w-0 hover:after:w-[calc(100%-4rem)]"
                        )}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Right side icons area - placeholder for search/grid icons */}
        <div className="hidden lg:flex items-center gap-4">
          {/* TODO: Add search icon and grid icon like the original site */}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "lg:hidden",
            isScrolled ? "text-dark" : "text-dark"
          )}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 lg:hidden",
          isMobileMenuOpen ? "max-h-screen bg-white" : "max-h-0"
        )}
      >
        <ul className="border-t border-gray-100 px-4 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-3 font-heading text-sm uppercase tracking-wider text-dark hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
              {link.children && (
                <ul className="ml-4 border-l border-gray-200 pl-4">
                  {link.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block py-2 text-sm text-gray-900 hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

