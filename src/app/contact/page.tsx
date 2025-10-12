"use client";

import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const ContactPage = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    alert("Message sent! (This is a demo)");
  };

  return (
    <>
      {/* Hero Section */}
      <div className="h-[60vh] relative mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513]/20 to-[#D2691E]/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&h=600&fit=crop')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl mb-4 text-gold">{t.contact.hero.title}</h1>
            <p className="text-2xl text-foreground/80">
              {t.contact.hero.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-gold mb-8">{t.contact.info.title}</h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="mb-2">{t.contact.info.address.title}</h3>
                    <p className="text-foreground/70">
                      {t.contact.info.address.text}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="mb-2">{t.contact.info.hours.title}</h3>
                    <p className="text-foreground/70">
                      {t.contact.info.hours.weekdays}
                    </p>
                    <p className="text-foreground/70">
                      {t.contact.info.hours.weekend}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="mb-2">{t.contact.info.phone.title}</h3>
                    <p className="text-foreground/70">
                      {t.contact.info.phone.text}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="mb-2">{t.contact.info.email.title}</h3>
                    <p className="text-foreground/70">
                      {t.contact.info.email.text}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 relative h-64 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop')] bg-cover bg-center" />
                <div className="absolute inset-0 flex items-center justify-center bg-background/70">
                  <p className="text-gold font-semibold">Map Placeholder</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-gold mb-8">{t.contact.form.title}</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card/50 border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card/50 border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg bg-card/50 border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card/50 border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  {t.contact.form.submit}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-20 bg-card/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gold mb-6">{t.contact.reservation.title}</h2>
          <p className="text-lg text-foreground/80 mb-8">
            {t.contact.reservation.text}
          </p>
          <Button size="lg" className="text-lg">
            {t.contact.reservation.button}
          </Button>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
