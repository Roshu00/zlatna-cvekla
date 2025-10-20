"use client";

import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, Music, Wine, Users } from "lucide-react";

const EventsPage = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <div className="h-[60vh] relative mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513]/20 to-[#D2691E]/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&h=600&fit=crop')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl mb-4 text-gold">{t.events.hero.title}</h1>
            <p className="text-2xl text-foreground/80">
              {t.events.hero.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gold mb-6">{t.events.intro.title}</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            {t.events.intro.text}
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gold mb-16">
            {t.events.upcoming.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Event 1 */}
            <div className="bg-background/50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-transparent" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&h=400&fit=crop')] bg-cover bg-center" />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-gold/90 text-background p-3 rounded-lg">
                    <Music className="w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-gold mb-2">
                  {t.events.upcoming.event1.title}
                </h3>

                <p className="text-foreground/80">
                  {t.events.upcoming.event1.description}
                </p>
              </div>
            </div>

            {/* Event 2 */}
            <div className="bg-background/50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-transparent" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop')] bg-cover bg-center" />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-gold/90 text-background p-3 rounded-lg">
                    <Users className="w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-gold mb-2">
                  {t.events.upcoming.event2.title}
                </h3>
                <p className="text-foreground/80">
                  {t.events.upcoming.event2.description}
                </p>
              </div>
            </div>

            {/* Event 3 */}
            <div className="bg-background/50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-transparent" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=400&fit=crop')] bg-cover bg-center" />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-gold/90 text-background p-3 rounded-lg">
                    <Wine className="w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-gold mb-2">
                  {t.events.upcoming.event3.title}
                </h3>
                <p className="text-foreground/80">
                  {t.events.upcoming.event3.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Events Section */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-transparent" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop')] bg-cover bg-center" />
            </div>
            <div>
              <h2 className="text-gold mb-6">{t.events.private.title}</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                {t.events.private.text}
              </p>
              <Link href="/contact">
                <Button size="lg">{t.events.private.button}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsPage;
