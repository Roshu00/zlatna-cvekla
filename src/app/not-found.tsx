"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

export default function NotFound() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-gold mb-4">404</h1>
        <h2 className="text-3xl mb-4">
          {language === "sr" ? "Stranica Nije Pronađena" : "Page Not Found"}
        </h2>
        <p className="text-lg text-foreground/70 mb-8">
          {language === "sr"
            ? "Stranica koju tražite ne postoji."
            : "The page you are looking for does not exist."}
        </p>
        <Link href="/">
          <Button size="lg">
            {language === "sr" ? "Nazad na Početnu" : "Back to Home"}
          </Button>
        </Link>
      </div>
    </div>
  );
}
