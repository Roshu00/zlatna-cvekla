"use client";

import { useLanguage } from "@/contexts/language-context";
import { Award, Users, Leaf } from "lucide-react";

const RestaurantPage = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <div className="h-[60vh] relative mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513]/20 to-[#D2691E]/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=600&fit=crop')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl mb-4 text-gold">
              {t.restaurant.hero.title}
            </h1>
            <p className="text-2xl text-foreground/80">
              {t.restaurant.hero.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gold mb-8 text-center">
            {t.restaurant.story.title}
          </h2>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>{t.restaurant.story.text1}</p>
            <p>{t.restaurant.story.text2}</p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=600&fit=crop')] bg-cover bg-center" />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&h=600&fit=crop')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gold mb-16">
            {t.restaurant.values.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                <Award className="w-10 h-10 text-gold" />
              </div>
              <h3 className="mb-4">{t.restaurant.values.value1.title}</h3>
              <p className="text-foreground/70 text-lg">
                {t.restaurant.values.value1.text}
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                <Leaf className="w-10 h-10 text-gold" />
              </div>
              <h3 className="mb-4">{t.restaurant.values.value2.title}</h3>
              <p className="text-foreground/70 text-lg">
                {t.restaurant.values.value2.text}
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                <Users className="w-10 h-10 text-gold" />
              </div>
              <h3 className="mb-4">{t.restaurant.values.value3.title}</h3>
              <p className="text-foreground/70 text-lg">
                {t.restaurant.values.value3.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-card/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gold mb-6">{t.restaurant.team.title}</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            {t.restaurant.team.text}
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=500&fit=crop')] bg-cover bg-center" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&h=500&fit=crop')] bg-cover bg-center" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&h=500&fit=crop')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RestaurantPage;
