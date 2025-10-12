export type Language = "en" | "sr";

export const translations = {
  en: {
    nav: {
      home: "Home",
      restaurant: "Restaurant",
      events: "Events",
      menu: "Menu",
      gallery: "Gallery",
      contact: "Contact",
    },
    home: {
      hero: {
        title: "Zlatna Cvekla",
        subtitle: "Where Tradition Meets Taste",
      },
      welcome: {
        title: "Welcome to Zlatna Cvekla",
        text: "Experience the authentic flavors of Serbian cuisine in a warm, inviting atmosphere. Our restaurant combines traditional recipes passed down through generations with fresh, locally-sourced ingredients to create unforgettable dining experiences.",
      },
      features: {
        title: "Why Choose Us",
        feature1: {
          title: "Traditional Recipes",
          text: "Authentic dishes prepared with love and centuries-old techniques",
        },
        feature2: {
          title: "Fresh Ingredients",
          text: "We source the finest local and seasonal produce",
        },
        feature3: {
          title: "Cozy Atmosphere",
          text: "A warm, welcoming space perfect for family gatherings",
        },
      },
      cta: {
        title: "Join Us Today",
        text: "Reserve your table and experience the magic of traditional Serbian cuisine",
        button: "Book a Table",
      },
    },
    restaurant: {
      hero: {
        title: "Our Story",
        subtitle: "A Legacy of Flavor",
      },
      story: {
        title: "About Zlatna Cvekla",
        text1:
          'Founded with a passion for preserving Serbian culinary traditions, Zlatna Cvekla has been serving authentic home-cooked meals since its inception. Our name, meaning "Golden Beet," reflects our commitment to celebrating the humble yet noble ingredients that form the foundation of Serbian cuisine.',
        text2:
          "Every dish we serve tells a story—of family gatherings, harvest celebrations, and the simple joy of sharing a meal with loved ones. Our chefs bring years of experience and a deep respect for traditional cooking methods, ensuring that each plate that leaves our kitchen is a testament to our heritage.",
      },
      values: {
        title: "Our Values",
        value1: {
          title: "Authenticity",
          text: "We stay true to traditional recipes and cooking methods",
        },
        value2: {
          title: "Quality",
          text: "Only the finest ingredients make it to your plate",
        },
        value3: {
          title: "Community",
          text: "Creating a space where everyone feels like family",
        },
      },
      team: {
        title: "Meet Our Team",
        text: "Our dedicated team of chefs and staff work tirelessly to ensure your dining experience is exceptional. With decades of combined experience, we bring passion and expertise to every service.",
      },
    },
    menu: {
      hero: {
        title: "Our Menu",
        subtitle: "Taste the Tradition",
      },
      appetizers: {
        title: "Appetizers",
        item1: {
          name: "Kajmak & Bread",
          description:
            "Traditional Serbian dairy spread served with fresh homemade bread",
        },
        item2: {
          name: "Shopska Salad",
          description: "Fresh tomatoes, cucumbers, peppers, and white cheese",
        },
        item3: {
          name: "Ajvar",
          description: "Roasted red pepper and eggplant spread",
        },
        item4: {
          name: "Prebranac",
          description: "Baked beans with caramelized onions",
        },
      },
      mains: {
        title: "Main Courses",
        item1: {
          name: "Sarma",
          description: "Cabbage rolls stuffed with seasoned meat and rice",
        },
        item2: {
          name: "Ćevapi",
          description:
            "Grilled minced meat sausages served with flatbread and onions",
        },
        item3: {
          name: "Karađorđeva Šnicla",
          description: "Breaded veal stuffed with kajmak, served with potatoes",
        },
        item4: {
          name: "Pasulj",
          description: "Traditional bean stew with smoked meat",
        },
        item5: {
          name: "Pljeskavica",
          description: "Serbian burger patty with house spices",
        },
        item6: {
          name: "Roštilj Platter",
          description: "Mixed grill plate with various meats",
        },
      },
      desserts: {
        title: "Desserts",
        item1: {
          name: "Baklava",
          description: "Sweet pastry with nuts and honey",
        },
        item2: {
          name: "Palačinke",
          description: "Serbian crepes with various fillings",
        },
        item3: { name: "Štrudla", description: "Apple or cherry strudel" },
        item4: {
          name: "Tufahija",
          description: "Poached apple with walnuts and cream",
        },
      },
      drinks: {
        title: "Beverages",
        item1: { name: "Rakija", description: "Traditional fruit brandy" },
        item2: {
          name: "Serbian Wine",
          description: "Selection of local wines",
        },
        item3: {
          name: "Turkish Coffee",
          description: "Strong, traditional coffee",
        },
        item4: { name: "Kompot", description: "Fruit compote drink" },
      },
    },
    events: {
      hero: {
        title: "Events & Celebrations",
        subtitle: "Make Your Special Day Memorable",
      },
      intro: {
        title: "Host Your Event With Us",
        text: "Zlatna Cvekla offers the perfect venue for your special occasions. Whether it's a birthday celebration, wedding reception, corporate event, or family gathering, our dedicated team will ensure everything is perfect.",
      },
      upcoming: {
        title: "Upcoming Events",
        event1: {
          title: "Live Folk Music Night",
          date: "Every Friday",
          description: "Enjoy traditional Serbian folk music while dining",
        },
        event2: {
          title: "Sunday Family Feast",
          date: "Every Sunday",
          description: "Special family-style menu with traditional roasts",
        },
        event3: {
          title: "Wine Tasting Evening",
          date: "First Saturday of Month",
          description: "Discover Serbian wines paired with our dishes",
        },
      },
      private: {
        title: "Private Events",
        text: "We can accommodate groups from 20 to 100 guests. Our event coordinator will work with you to create a customized menu and ensure your celebration is unforgettable.",
        button: "Inquire About Private Events",
      },
    },
    gallery: {
      hero: {
        title: "Gallery",
        subtitle: "A Glimpse Into Our World",
      },
      sections: {
        restaurant: "Our Restaurant",
        food: "Our Dishes",
        events: "Events & Celebrations",
      },
    },
    contact: {
      hero: {
        title: "Contact Us",
        subtitle: "We'd Love to Hear From You",
      },
      info: {
        title: "Visit Us",
        address: {
          title: "Address",
          text: "123 Main Street, Belgrade, Serbia",
        },
        hours: {
          title: "Opening Hours",
          weekdays: "Mon-Thu: 11:00 AM - 11:00 PM",
          weekend: "Fri-Sun: 11:00 AM - 12:00 AM",
        },
        phone: {
          title: "Phone",
          text: "+381 11 123 4567",
        },
        email: {
          title: "Email",
          text: "info@zlatnacvekla.rs",
        },
      },
      form: {
        title: "Send Us a Message",
        name: "Name",
        email: "Email",
        phone: "Phone",
        message: "Message",
        submit: "Send Message",
      },
      reservation: {
        title: "Make a Reservation",
        text: "Call us or use our online booking system to reserve your table",
        button: "Book Now",
      },
    },
  },
  sr: {
    nav: {
      home: "Početna",
      restaurant: "Restoran",
      events: "Događaji",
      menu: "Meni",
      gallery: "Galerija",
      contact: "Kontakt",
    },
    home: {
      hero: {
        title: "Zlatna Cvekla",
        subtitle: "Gde Tradicija Susreće Ukus",
      },
      welcome: {
        title: "Dobrodošli u Zlatnu Cveklu",
        text: "Doživite autentične ukuse srpske kuhinje u toploj, prijatnoj atmosferi. Naš restoran kombinuje tradicionalne recepte koji se prenose kroz generacije sa svežim, lokalno nabavljenim sastojcima kako bi stvorili nezaboravna gastronomska iskustva.",
      },
      features: {
        title: "Zašto Odabrati Nas",
        feature1: {
          title: "Tradicionalni Recepti",
          text: "Autentična jela pripremljena sa ljubavlju i vekovnim tehnikama",
        },
        feature2: {
          title: "Sveži Sastojci",
          text: "Nabavljamo najkvalitetnije lokalne i sezonske proizvode",
        },
        feature3: {
          title: "Prijatna Atmosfera",
          text: "Topao, gostoljubiv prostor savršen za porodična okupljanja",
        },
      },
      cta: {
        title: "Pridružite Nam Se Danas",
        text: "Rezervišite svoj sto i doživite čaroliju tradicionalne srpske kuhinje",
        button: "Rezervišite Sto",
      },
    },
    restaurant: {
      hero: {
        title: "Naša Priča",
        subtitle: "Nasleđe Ukusa",
      },
      story: {
        title: "O Zlatnoj Cvekli",
        text1:
          "Osnovana sa strašću za očuvanjem srpskih kulinarskih tradicija, Zlatna Cvekla od svog osnivanja služi autentična domaća jela. Naše ime odražava našu posvećenost slavljenju skromnih ali plemenitih sastojaka koji čine osnovu srpske kuhinje.",
        text2:
          "Svako jelo koje serviramo priča priču—o porodičnim okupljanjima, žetvi i jednostavnoj radosti deljenja obroka sa voljenima. Naši kuvari donose godine iskustva i duboko poštovanje tradicionalnih metoda kuvanja, osiguravajući da svaki tanjir koji napušta našu kuhinju bude svedočanstvo našeg nasleđa.",
      },
      values: {
        title: "Naše Vrednosti",
        value1: {
          title: "Autentičnost",
          text: "Ostajemo verni tradicionalnim receptima i metodama pripreme",
        },
        value2: {
          title: "Kvalitet",
          text: "Samo najfiniji sastojci stižu do vašeg tanjira",
        },
        value3: {
          title: "Zajednica",
          text: "Stvaranje prostora gde se svi osećaju kao porodica",
        },
      },
      team: {
        title: "Upoznajte Naš Tim",
        text: "Naš posvećen tim kuvara i osoblja neumorno radi kako bi vaše iskustvo bilo izuzetno. Sa decenijama kombinovanog iskustva, donosimo strast i stručnost u svaku uslugu.",
      },
    },
    menu: {
      hero: {
        title: "Naš Meni",
        subtitle: "Okus Tradicije",
      },
      appetizers: {
        title: "Predjela",
        item1: {
          name: "Kajmak i Hleb",
          description:
            "Tradicionalni srpski mlečni namaz serviran sa svežim domaćim hlebom",
        },
        item2: {
          name: "Šopska Salata",
          description: "Sveži paradajz, krastavci, paprika i beli sir",
        },
        item3: {
          name: "Ajvar",
          description: "Namaz od pečenih crvenih paprika i patlidžana",
        },
        item4: {
          name: "Prebranac",
          description: "Pečeni pasulj sa karamelizovanim lukom",
        },
      },
      mains: {
        title: "Glavna Jela",
        item1: {
          name: "Sarma",
          description: "Rolnice od kupusa punjene mesom i pirinčem",
        },
        item2: {
          name: "Ćevapi",
          description: "Roštiljske kobasice servirane sa lepinjom i lukom",
        },
        item3: {
          name: "Karađorđeva Šnicla",
          description:
            "Pohovana teletina punjena kajmakom, servirana sa krompirom",
        },
        item4: {
          name: "Pasulj",
          description: "Tradicionalni grah sa dimljenim mesom",
        },
        item5: {
          name: "Pljeskavica",
          description: "Srpska roštiljska pljeskavica sa domaćim začinima",
        },
        item6: {
          name: "Roštilj Plata",
          description: "Mešano meso sa roštilja",
        },
      },
      desserts: {
        title: "Deserti",
        item1: {
          name: "Baklava",
          description: "Slatki kolač sa orasima i medom",
        },
        item2: {
          name: "Palačinke",
          description: "Srpske palačinke sa raznim filovima",
        },
        item3: { name: "Štrudla", description: "Štrudla od jabuke ili višnje" },
        item4: {
          name: "Tufahija",
          description: "Kuvana jabuka sa orasima i pavlakom",
        },
      },
      drinks: {
        title: "Pića",
        item1: { name: "Rakija", description: "Tradicionalna voćna rakija" },
        item2: { name: "Srpsko Vino", description: "Izbor domaćih vina" },
        item3: { name: "Turska Kafa", description: "Jaka, tradicionalna kafa" },
        item4: { name: "Kompot", description: "Voćni kompot" },
      },
    },
    events: {
      hero: {
        title: "Događaji i Proslave",
        subtitle: "Učinite Svoj Poseban Dan Nezaboravnim",
      },
      intro: {
        title: "Organizujte Svoj Događaj Kod Nas",
        text: "Zlatna Cvekla nudi savršen prostor za vaše posebne prilike. Bilo da je u pitanju rođendanska proslava, svadbena gozba, korporativni događaj ili porodično okupljanje, naš posvećen tim će osigurati da sve bude savršeno.",
      },
      upcoming: {
        title: "Predstojeći Događaji",
        event1: {
          title: "Veče Narodne Muzike Uživo",
          date: "Svakog Petka",
          description:
            "Uživajte u tradicionalnoj srpskoj narodnoj muzici uz večeru",
        },
        event2: {
          title: "Nedeljni Porodični Ručak",
          date: "Svake Nedelje",
          description:
            "Specijalni meni u porodičnom stilu sa tradicionalnim pečenjima",
        },
        event3: {
          title: "Veče Degustacije Vina",
          date: "Prve Subote u Mesecu",
          description: "Otkrijte srpska vina u kombinaciji sa našim jelima",
        },
      },
      private: {
        title: "Privatni Događaji",
        text: "Možemo primiti grupe od 20 do 100 gostiju. Naš koordinator događaja će raditi sa vama kako bi kreirao prilagođeni meni i osigurao da vaša proslava bude nezaboravna.",
        button: "Raspitajte Se o Privatnim Događajima",
      },
    },
    gallery: {
      hero: {
        title: "Galerija",
        subtitle: "Pogled u Naš Svet",
      },
      sections: {
        restaurant: "Naš Restoran",
        food: "Naša Jela",
        events: "Događaji i Proslave",
      },
    },
    contact: {
      hero: {
        title: "Kontaktirajte Nas",
        subtitle: "Rado Ćemo Čuti Od Vas",
      },
      info: {
        title: "Posetite Nas",
        address: {
          title: "Adresa",
          text: "Glavna Ulica 123, Beograd, Srbija",
        },
        hours: {
          title: "Radno Vreme",
          weekdays: "Pon-Čet: 11:00 - 23:00",
          weekend: "Pet-Ned: 11:00 - 00:00",
        },
        phone: {
          title: "Telefon",
          text: "+381 11 123 4567",
        },
        email: {
          title: "Email",
          text: "info@zlatnacvekla.rs",
        },
      },
      form: {
        title: "Pošaljite Nam Poruku",
        name: "Ime",
        email: "Email",
        phone: "Telefon",
        message: "Poruka",
        submit: "Pošalji Poruku",
      },
      reservation: {
        title: "Napravite Rezervaciju",
        text: "Pozovite nas ili koristite naš sistem online rezervacija",
        button: "Rezervišite Sada",
      },
    },
  },
};
