"use client";

import { useLanguage } from "@/contexts/language-context";

const MenuPage = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <div className="h-[60vh] relative mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513]/20 to-[#D2691E]/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=600&fit=crop')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl mb-4 text-gold">{t.menu.hero.title}</h1>
            <p className="text-2xl text-foreground/80">
              {t.menu.hero.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Appetizers */}
          <section className="mb-20">
            <h2 className="text-gold mb-8 text-center border-b border-gold/30 pb-4">
              {t.menu.appetizers.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <MenuItem
                name={t.menu.appetizers.item1.name}
                description={t.menu.appetizers.item1.description}
              />
              <MenuItem
                name={t.menu.appetizers.item2.name}
                description={t.menu.appetizers.item2.description}
              />
              <MenuItem
                name={t.menu.appetizers.item3.name}
                description={t.menu.appetizers.item3.description}
              />
              <MenuItem
                name={t.menu.appetizers.item4.name}
                description={t.menu.appetizers.item4.description}
              />
            </div>
          </section>

          {/* Main Courses */}
          <section className="mb-20">
            <h2 className="text-gold mb-8 text-center border-b border-gold/30 pb-4">
              {t.menu.mains.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <MenuItem
                name={t.menu.mains.item1.name}
                description={t.menu.mains.item1.description}
              />
              <MenuItem
                name={t.menu.mains.item2.name}
                description={t.menu.mains.item2.description}
              />
              <MenuItem
                name={t.menu.mains.item3.name}
                description={t.menu.mains.item3.description}
              />
              <MenuItem
                name={t.menu.mains.item4.name}
                description={t.menu.mains.item4.description}
              />
              <MenuItem
                name={t.menu.mains.item5.name}
                description={t.menu.mains.item5.description}
              />
              <MenuItem
                name={t.menu.mains.item6.name}
                description={t.menu.mains.item6.description}
              />
            </div>
          </section>

          {/* Desserts */}
          <section className="mb-20">
            <h2 className="text-gold mb-8 text-center border-b border-gold/30 pb-4">
              {t.menu.desserts.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <MenuItem
                name={t.menu.desserts.item1.name}
                description={t.menu.desserts.item1.description}
              />
              <MenuItem
                name={t.menu.desserts.item2.name}
                description={t.menu.desserts.item2.description}
              />
              <MenuItem
                name={t.menu.desserts.item3.name}
                description={t.menu.desserts.item3.description}
              />
              <MenuItem
                name={t.menu.desserts.item4.name}
                description={t.menu.desserts.item4.description}
              />
            </div>
          </section>

          {/* Beverages */}
          <section>
            <h2 className="text-gold mb-8 text-center border-b border-gold/30 pb-4">
              {t.menu.drinks.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <MenuItem
                name={t.menu.drinks.item1.name}
                description={t.menu.drinks.item1.description}
              />
              <MenuItem
                name={t.menu.drinks.item2.name}
                description={t.menu.drinks.item2.description}
              />
              <MenuItem
                name={t.menu.drinks.item3.name}
                description={t.menu.drinks.item3.description}
              />
              <MenuItem
                name={t.menu.drinks.item4.name}
                description={t.menu.drinks.item4.description}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

function MenuItem({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="group">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-xl font-funky text-gold group-hover:text-gold/80 transition-colors">
          {name}
        </h3>
      </div>
      <p className="text-foreground/70 leading-relaxed">{description}</p>
    </div>
  );
}

export default MenuPage;
