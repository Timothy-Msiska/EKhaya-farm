"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "/", label: "Home", active: true },
  { href: "#", label: "About Us", active: false },
  { href: "#", label: "Our Farms", active: false },
  { href: "#", label: "Our Products", active: false },
  { href: "#", label: "Distribution & Stores", active: false },
  { href: "#", label: "Sustainability", active: false },
  { href: "#", label: "News & Updates", active: false },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl">
      <nav
        className={cn(
          "flex items-center justify-between px-4 py-3 rounded-2xl border transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-gray-200"
            : "bg-white/100 backdrop-blur-sm border-gray-100"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo/ekhaya-fa.png"
            alt="Ekhaya Farms Logo"
            width={60}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4">
          {navLinks.map((link, index) => (
            <span
              key={index}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                link.active
                  ? "text-black border-b-2 border-[#D4AF37]"
                  : "text-black/50 cursor-not-allowed" // fully inactive
              )}
            >
              {link.label}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-xl text-black"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button className="hidden lg:block rounded-xl bg-[#D4AF37] text-black hover:bg-[#b5942f]">
            Contact Us
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="rounded-xl text-black">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white text-black">
              <div className="flex flex-col gap-4 mt-8">
                <Link href="/" className="flex items-center gap-3 mb-4">
                  <Image
                    src="/logo/ekhaya-fa.png"
                    alt="Ekhaya Farms Logo"
                    width={40}
                    height={35}
                    className="object-contain"
                  />
                </Link>
                {navLinks.map((link, index) => (
                  <span
                    key={index}
                    className={cn(
                      "px-4 py-3 text-base font-medium rounded-xl transition-colors",
                      link.active
                        ? "text-black border-b-2 border-[#D4AF37]"
                        : "text-black/50 cursor-not-allowed"
                    )}
                  >
                    {link.label}
                  </span>
                ))}
                <Button className="w-full mt-4 rounded-xl bg-[#D4AF37] text-black hover:bg-[#b5942f]">
                  Contact Us
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
