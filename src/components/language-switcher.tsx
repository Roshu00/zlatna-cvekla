"use client";

import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <Button
        variant={language === "sr" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("sr")}
        className="font-semibold"
      >
        SR
      </Button>
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="font-semibold"
      >
        EN
      </Button>
    </div>
  );
}
