"use client";

import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-card/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <Image
              src="/logo.png"
              alt="Zlatna Cvekla"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="text-foreground/70 text-sm">{t.home.hero.subtitle}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold mb-4">{t.nav.home}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/restaurant"
                  className="text-foreground/70 hover:text-gold transition-colors text-sm"
                >
                  {t.nav.restaurant}
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-foreground/70 hover:text-gold transition-colors text-sm"
                >
                  {t.nav.menu}
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-foreground/70 hover:text-gold transition-colors text-sm"
                >
                  {t.nav.events}
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-foreground/70 hover:text-gold transition-colors text-sm"
                >
                  {t.nav.gallery}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gold mb-4">{t.nav.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-foreground/70">
                  {t.contact.info.address.text}
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Phone className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-foreground/70">
                  {t.contact.info.phone.text}
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-foreground/70">
                  {t.contact.info.email.text}
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-gold mb-4">{t.contact.info.hours.title}</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm">
                <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <div className="text-foreground/70">
                  <p>{t.contact.info.hours.weekdays}</p>
                  <p>{t.contact.info.hours.weekend}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-foreground/60">
            © {new Date().getFullYear()} Zlatna Cvekla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
