"use client";

import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

const ContactSuccessPage = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <div className="h-[60vh] relative mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513]/20 to-[#D2691E]/20" />
        <div className="absolute inset-0 bg-[url('/hero-image.webp')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl mb-4 text-gold">
              {t.contact.success.title}
            </h1>
            <p className="text-2xl text-foreground/80">
              {t.contact.success.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Success Message Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gold mb-6">
              {t.contact.success.title}
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t.contact.success.message}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <ArrowLeft className="w-5 h-5 mr-2" />
                {t.contact.success.backButton}
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" className="w-full sm:w-auto">
                <Home className="w-5 h-5 mr-2" />
                {t.contact.success.homeButton}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSuccessPage;
