import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/farms", label: "Our Farms" },
    { href: "/products", label: "Our Products" },
  ],
  support: [
    { href: "/distribution", label: "Find a Store" },
    { href: "/news", label: "News & Updates" },
    { href: "/contact", label: "Contact Us" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white text-[#D4AF37]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-12 h-12 relative">
                <Image
                  src="/logo/ekhaya-fa.png"
                  alt="Ekhaya Farms Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-serif text-xl font-bold">Ekhaya Farms</span>
            </Link>
            <p className="text-black text-sm leading-relaxed">
              Growing Malawi, Feeding Communities. Trusted agricultural excellence across all 8 districts.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center hover:bg-[#D4AF37]/20 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center hover:bg-[#D4AF37]/20 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center hover:bg-[#D4AF37]/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center hover:bg-[#D4AF37]/20 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-base mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-black hover:text-[#D4AF37] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-base mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-black hover:text-[#D4AF37] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-base mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-black">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Lilongwe, Malawi</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-black">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+265 1 234 567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-black">
                <Mail className="w-4 h-4 shrink-0" />
                <span>info@ekhayafarms.mw</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#D4AF37]/20 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-black">
            © {new Date().getFullYear()} Ekhaya Farms. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-black">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
