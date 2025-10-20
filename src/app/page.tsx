"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UtensilsCrossed, Leaf, Heart } from "lucide-react";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513]/20 to-[#D2691E]/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-background/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full text-center">
            <div className="w-64 h-64 md:w-96 md:h-96 relative mb-8">
              <Image
                src="/logo.png"
                alt="Zlatna Cvekla Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gold mb-6">{t.home.welcome.title}</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t.home.welcome.text}
              </p>
              <Link href="/restaurant">
                <Button className="mt-8" size="lg">
                  {t.home.welcome.button}
                </Button>
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-transparent" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gold mb-16">
            {t.home.features.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                <UtensilsCrossed className="w-8 h-8 text-gold" />
              </div>
              <h3 className="mb-3">{t.home.features.feature1.title}</h3>
              <p className="text-foreground/70">
                {t.home.features.feature1.text}
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                <Leaf className="w-8 h-8 text-gold" />
              </div>
              <h3 className="mb-3">{t.home.features.feature2.title}</h3>
              <p className="text-foreground/70">
                {t.home.features.feature2.text}
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                <Heart className="w-8 h-8 text-gold" />
              </div>
              <h3 className="mb-3">{t.home.features.feature3.title}</h3>
              <p className="text-foreground/70">
                {t.home.features.feature3.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gold mb-6">{t.home.cta.title}</h2>
          <p className="text-xl text-foreground/80 mb-8">{t.home.cta.text}</p>
          <Link href="/contact">
            <Button size="lg" className="text-lg">
              {t.home.cta.button}
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
