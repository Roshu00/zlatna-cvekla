"use client";

import { useLanguage } from "@/contexts/language-context";
import { useState } from "react";

const GalleryPage = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "restaurant" | "food" | "events"
  >("all");

  const restaurantImages = ["/hero-image.webp", "/rest-1.webp", "/rest-2.webp"];

  const foodImages = [
    "/food-1.webp",
    "/food-2.webp",
    "/food-3.webp",
    "/food-4.webp",
    "/food-5.webp",
    "/food-6.webp",
  ];

  const eventImages = [
    "/event-1.webp",
    "/event-2.webp",
    "/personal-image.webp",
    "/corporate.webp",
  ];

  const getFilteredImages = () => {
    switch (selectedCategory) {
      case "restaurant":
        return restaurantImages;
      case "food":
        return foodImages;
      case "events":
        return eventImages;
      default:
        return [...restaurantImages, ...foodImages, ...eventImages];
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="h-[60vh] relative mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513]/20 to-[#D2691E]/20" />
        <div className="absolute inset-0 bg-[url('/hero-image.webp')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl mb-4 text-gold">{t.gallery.hero.title}</h1>
            <p className="text-2xl text-foreground/80">
              {t.gallery.hero.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === "all"
                  ? "bg-gold text-background"
                  : "bg-card/50 text-foreground hover:bg-card"
              }`}
            >
              {t.nav.gallery}
            </button>
            <button
              onClick={() => setSelectedCategory("restaurant")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === "restaurant"
                  ? "bg-gold text-background"
                  : "bg-card/50 text-foreground hover:bg-card"
              }`}
            >
              {t.gallery.sections.restaurant}
            </button>
            <button
              onClick={() => setSelectedCategory("food")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === "food"
                  ? "bg-gold text-background"
                  : "bg-card/50 text-foreground hover:bg-card"
              }`}
            >
              {t.gallery.sections.food}
            </button>
            <button
              onClick={() => setSelectedCategory("events")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === "events"
                  ? "bg-gold text-background"
                  : "bg-card/50 text-foreground hover:bg-card"
              }`}
            >
              {t.gallery.sections.events}
            </button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredImages().map((image, index) => (
              <div
                key={index}
                className="group relative h-80 rounded-lg overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/30 group-hover:from-gold/20 group-hover:to-gold/50 transition-all duration-300 z-10" />
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
