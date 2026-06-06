// Bilingual translations for explorepakistan.fr
// French is the default, English is available via toggle.
// Added a curated gallery of 4 premium Unsplash photo URLs for each day.

export const translations = {
  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      destinations: "Destinations",
      packages: "Expédition Premium",
      k2: "Expérience K2",
      visa: "Visa & Réservation",
      about: "À Propos",
      contact: "Contact",
      cinematic: "Vitrine",
      bookNow: "Réserver Votre Voyage",
    },
    // Footer
    footer: {
      tagline: "Expéditions de luxe sur mesure au cœur des montagnes du Karakoram pour les voyageurs exigeants.",
      newsletterHeading: "Restez Informé",
      newsletterSub: "Recevez nos guides de destination exclusifs, nos conseils de voyage et un accès prioritaire à nos nouvelles expéditions.",
      emailPlaceholder: "Votre adresse e-mail",
      namePlaceholder: "Votre prénom",
      subscribe: "S'abonner",
      successMsg: "Merci de votre inscription ! Notre guide vous a été envoyé par e-mail.",
      rights: "© 2026 Explore Pakistan. Tous droits réservés. explorepakistan.fr",
      officeHours: "Heures d'ouverture : Lundi-Vendredi, 9h-18h CET",
    },
    // Common CTAs
    cta: {
      bookConsultation: "Prendre RDV (Consultation Gratuite)",
      bookJourney: "RÉSERVEZ VOTRE VOYAGE",
      learnMore: "EN SAVOIR PLUS",
      exploreK2: "DÉCOUVRIR LE K2",
      downloadBrochure: "TÉLÉCHARGER LA BROCHURE (PDF)",
      downloadChecklist: "TÉLÉCHARGER LA CHECKLIST VISA",
      sendInquiry: "ENVOYER LA DEMANDE DE RÉSERVATION",
      confirmSlots: "Confirmer le créneau",
    },
    // Home Page
    home: {
      hero: {
        headline: "EXPLOREZ LE PAKISTAN EN STYLE PREMIUM",
        subheading: "Expéditions de luxe sur mesure de 15 jours au départ de Paris vers Skardu. Hôtels 5 étoiles, pension complète, randonnées guidées et expériences inoubliables au pied du K2.",
      },
      features: {
        title: "L'Excellence du Voyage Aventure",
        col1: {
          title: "Hébergements 5 Étoiles",
          desc: "Hôtels de prestige sélectionnés à Skardu, dans la vallée de Hunza et à Shigar. Confort optimal en haute altitude.",
        },
        col2: {
          title: "Formule Tout Inclus",
          desc: "Hôtels, repas gastronomiques locaux, transports privés, guides certifiés, assistance visa complète. Aucun frais caché.",
        },
        col3: {
          title: "Entièrement Personnalisé",
          desc: "Votre itinéraire, votre rythme. De la contemplation sereine aux treks engagés du camp de base du K2.",
        },
      },
      k2: {
        title: "DÉPASSEZ VOS LIMITES",
        desc: "Trek du Camp de Base du K2 - Extension exclusive de 3 jours. Accompagnement par des guides de haute montagne chevronnés, campements alpins haut de gamme et expérience ultime à 5 128m.",
      },
      testimonials: {
        title: "Paroles de Voyageurs",
        q1: {
          text: "Une expérience inoubliable. L'attention portée aux détails, la qualité des guides et le confort des hôtels à cette altitude étaient exceptionnels.",
          author: "Marie D., Paris",
        },
        q2: {
          text: "Chaque euro investi en valait la peine. Un voyage d'aventure sauvage avec des prestations hôtelières et logistiques haut de gamme.",
          author: "Jean M., Lyon",
        },
        q3: {
          text: "Le trek du camp de base du K2 a changé ma vie. L'organisation était irréprochable et la sécurité toujours prioritaire.",
          author: "Sophie L., Marseille",
        },
      },
      ctaSec: {
        title: "Prêt à vivre l'inattendu ?",
        desc: "Planifiez une consultation gratuite de 20 minutes avec notre spécialiste du Pakistan pour concevoir votre itinéraire sur mesure.",
      },
    },
    // Destinations Page
    destinations: {
      hero: {
        title: "15 JOURS HORS DU TEMPS",
        subheading: "Votre voyage immersif à travers les paysages les plus spectaculaires de la planète.",
      },
      itinerary: {
        title: "Itinéraire Détaillé Jour par Jour",
        subtitle: "Cliquez sur un jour pour en explorer le tracé, les activités et l'hébergement exclusif.",
        days: [
          {
            day: 1,
            title: "Arrivée à Islamabad",
            details: "Accueil VIP à l'aéroport international d'Islamabad. Transfert privé vers votre hôtel de luxe. En soirée, briefing d'orientation autour d'un dîner gastronomique de bienvenue.",
            overnight: "Pearl Continental Hotel (5★)",
            elevation: "540m",
            activity: "Accueil aéroport & Dîner de bienvenue",
            photos: [
              "https://images.unsplash.com/photo-1627832877847-fde0f269a35e?auto=format&fit=crop&w=400&q=80", // Faisal Mosque
              "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?auto=format&fit=crop&w=400&q=80", // Islamabad View
              "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80", // Gourmet Dinner
              "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80"  // Hotel PC
            ]
          },
          {
            day: 2,
            title: "Envol pour Skardu, Porte de l'Aventure",
            details: "Vol panoramique époustouflant au-dessus des géants de l'Himalaya vers Skardu. Exploration du bazar local historique et ascension du fort de Kharpocho pour admirer le coucher de soleil sur l'Indus.",
            overnight: "Khar Hotel Skardu (Premium)",
            elevation: "2 230m",
            activity: "Vol intérieur & Coucher de soleil fortifié",
            photos: [
              "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=400&q=80", // Kharpocho sunset
              "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=400&q=80", // Local market
              "https://images.unsplash.com/photo-1622216194772-41b8640ed267?auto=format&fit=crop&w=400&q=80", // Indus river
              "https://images.unsplash.com/photo-1624314138470-5a2f24623f10?auto=format&fit=crop&w=400&q=80"  // Skardu scenery
            ]
          },
          {
            day: 3,
            title: "Miroirs d'Eau & Lacs Sacrés",
            details: "Découverte du célèbre lac Shangrila avec ses jardins luxuriants et ses eaux cristallines, suivi du lac Upper Kachura pour une promenade en bateau privé. Coucher de soleil sur le lac Katpana.",
            overnight: "Khar Hotel Skardu (Premium)",
            elevation: "2 230m",
            activity: "Excursion en bateau & Couchers de soleil dorés",
            photos: [
              "https://images.unsplash.com/photo-1622216194772-41b8640ed267?auto=format&fit=crop&w=400&q=80", // Shangrila Lake
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // Upper Kachura
              "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&q=80", // Katpana Lake
              "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80"  // Lakes reflections
            ]
          },
          {
            day: 4,
            title: "Parc National de Deosai : Le Toit du Monde",
            details: "Traversée en 4x4 Prado vers Deosai, l'un des plus hauts plateaux du monde à plus de 4 000m. Observation de la faune sauvage et pêche à la truite. Campement sous les étoiles à Minimarg avec restauration privée.",
            overnight: "Minimarg Alpine Camp (Luxe)",
            elevation: "4 110m",
            activity: "Safari 4x4 & Campement de luxe",
            photos: [
              "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80", // High plateau
              "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=400&q=80", // Minimarg camp
              "https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&w=400&q=80", // Sheosar lake
              "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=400&q=80"  // High camping tents
            ]
          },
          {
            day: 5,
            title: "Randonnée dans la Vallée d'Asotré",
            details: "Une journée complète d'exploration de la vallée préservée d'Asotré. Randonnée douce parmi les prairies alpines, les ruisseaux d'eau glaciaire et les cols sauvages.",
            overnight: "Minimarg Alpine Camp (Luxe)",
            elevation: "3 800m",
            activity: "Trek alpin & Observation paysagère",
            photos: [
              "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&q=80", // Wild flowers
              "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=400&q=80", // Glacier streams
              "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80", // Mountain passes
              "https://images.unsplash.com/photo-1533587837750-5ab9a4f4773c?auto=format&fit=crop&w=400&q=80"  // Green paths
            ]
          },
          {
            day: 6,
            title: "Ascension vers la Base de Sasi",
            details: "Trek de la vallée d'Asotré vers Sasi (4 000m). Installation de notre campement privé avec vue panoramique sur les sommets environnants. Dîner préparé par notre chef d'expédition.",
            overnight: "Sasi Base Camp (Alpin Premium)",
            elevation: "4 000m",
            activity: "Randonnée glaciaire de liaison",
            photos: [
              "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=400&q=80", // Alpine camping
              "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=400&q=80", // Starry sky
              "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80", // Ice fields
              "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80"  // Camp kitchen
            ]
          },
          {
            day: 7,
            title: "Lac Kutwal & Sommet Haramosh",
            details: "Randonnée inoubliable jusqu'au lac Kutwal. Profitez de vues spectaculaires et rapprochées sur le pic Haramosh (7 397m). Soirée magique autour du feu de camp au camp de base.",
            overnight: "Sasi Base Camp (Alpin Premium)",
            elevation: "3 260m",
            activity: "Vue sur le Pic Haramosh",
            photos: [
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // Kutwal Lake
              "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=400&q=80", // Haramosh Peak
              "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80", // High glaciated lake
              "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=400&q=80"  // Campfire circle
            ]
          },
          {
            day: 8,
            title: "Retour à Skardu, Repos bien mérité",
            details: "Randonnée de descente de Sasi vers la route principale, puis transfert privé vers Skardu. Après-midi de détente, massages et soins spa disponibles à l'hôtel.",
            overnight: "Khar Hotel Skardu (Premium)",
            elevation: "2 230m",
            activity: "Descente pédestre & Détente Spa",
            photos: [
              "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80", // Spa massage
              "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=400&q=80", // Premium resort room
              "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80", // Skardu bazaar
              "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80"  // Local tea house
            ]
          },
          {
            day: 9,
            title: "Vallée de Shigar & Désert Froid de Sarfaranga",
            details: "Route vers la vallée historique de Shigar. Session de conduite en jeep dans les dunes du désert froid de Sarfaranga, suivie d'une balade à dos de chameau au coucher du soleil.",
            overnight: "Rivage Hotel Shigar (Luxe)",
            elevation: "2 350m",
            activity: "Safari désertique & Chameau au coucher de soleil",
            photos: [
              "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=400&q=80", // Sarfaranga dunes
              "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=400&q=80", // Jeep safari
              "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=400&q=80", // Shigar palace
              "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=400&q=80"  // Camel riders
            ]
          },
          {
            day: 10,
            title: "Khaplu & Vallée de Mashabrum",
            details: "Déplacement vers Khaplu, ancienne principauté royale. Arrêts photos spectaculaires face au mont Mashabrum (7 821m). Visite guidée et privée du splendide palais de Khaplu.",
            overnight: "Relax Inn Khaplu (Patrimoine historique)",
            elevation: "2 600m",
            activity: "Visite du Palais Royal",
            photos: [
              "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=400&q=80", // Khaplu palace
              "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80", // Mashabrum Peak
              "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=400&q=80", // Palace woodworks
              "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=400&q=80"  // Palace royal gardens
            ]
          },
          {
            day: 11,
            title: "Immersion Culturelle à Khaplu",
            details: "Promenade guidée dans le vieux village, rencontre avec les artisans locaux et déjeuner traditionnel partagé avec une famille Balti locale. Découverte de l'artisanat du bois sculpté.",
            overnight: "Relax Inn Khaplu (Patrimoine historique)",
            elevation: "2 600m",
            activity: "Déjeuner chez l'habitant & Artisanat",
            photos: [
              "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=400&q=80", // Khaplu village walks
              "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=80", // Balti lunch
              "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=400&q=80", // Traditional woodwork
              "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=400&q=80"  // Apricot organic fields
            ]
          },
          {
            day: 12,
            title: "Paradis Vert de la Vallée de Bashu",
            details: "Retour vers la région de Skardu pour explorer la vallée suspendue de Bashu, réputée pour ses forêts de pins denses, ses fermes d'altitude et sa déconnexion totale.",
            overnight: "Gumaan Resort Skardu (Premium Lodge)",
            elevation: "2 800m",
            activity: "Exploration éco-nature",
            photos: [
              "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=400&q=80", // Pine forest hikes
              "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80", // High meadows yaks
              "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=400&q=80", // Wooden eco lodge
              "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&w=400&q=80"  // Green farming views
            ]
          },
          {
            day: 13,
            title: "Excursion Royale dans la Vallée de Hunza",
            details: "Route spectaculaire le long de la Karakoram Highway vers la mythique vallée de Hunza. Visite exclusive des forts d'Altit et de Baltit (classés UNESCO). Dégustation de fruits dans les vergers bio.",
            overnight: "Gumaan Resort Skardu (Premium Lodge)",
            elevation: "2 400m",
            activity: "Visite de forts UNESCO & Vergers",
            photos: [
              "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=400&q=80", // Altit Fort cliffs
              "https://images.unsplash.com/photo-1627832877847-fde0f269a35e?auto=format&fit=crop&w=400&q=80", // Baltit Fort Hunza
              "https://images.unsplash.com/photo-1622216194772-41b8640ed267?auto=format&fit=crop&w=400&q=80", // Hunza peak panorama
              "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=400&q=80"  // Karakoram highway
            ]
          },
          {
            day: 14,
            title: "Journée Libre & Sérénité au Lodge",
            details: "Profitez de votre dernière journée complète pour vous détendre au resort, faire du shopping d'artisanat d'art à Skardu ou vous offrir un soin thérapeutique haut de gamme.",
            overnight: "Gumaan Resort Skardu (Premium Lodge)",
            elevation: "2 230m",
            activity: "Temps libre & Soins bien-être",
            photos: [
              "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80", // Luxury hotel pool
              "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=400&q=80", // Lounge balcony K2 view
              "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80", // Precious gems markets
              "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=400&q=80"  // Resort walking gardens
            ]
          },
          {
            day: 15,
            title: "Retour à Paris via Islamabad",
            details: "Vol matinal Skardu-Islamabad. Transfert privé pour votre shopping de dernière minute en capitale ou salon VIP à l'aéroport avant votre vol de nuit retour vers Paris.",
            overnight: "Vol international",
            elevation: "540m / Retour France",
            activity: "Vol domestique & Connexion internationale",
            photos: [
              "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=400&q=80", // Scenic airplane window
              "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=400&q=80", // VIP Mercedes transfers
              "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80", // Airport VIP lounge
              "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=400&q=80"  // Flight mapping
            ]
          }
        ],
      },
      checklist: {
        incTitle: "Ce qui est inclus dans votre offre de prestige",
        excTitle: "Ce qui n'est pas inclus",
        inclusions: [
          "Hébergement de prestige 4 et 5 étoiles tout au long du séjour",
          "Pension complète avec des repas gastronomiques locaux et internationaux cuisinés sur place",
          "Vols intérieurs Islamabad ↔ Skardu aller-retour avec assurance annulation",
          "Véhicules privés haut de gamme (Mercedes & Toyota Prado) avec chauffeurs professionnels",
          "Guides francophones et anglophones certifiés par le ministère du Tourisme",
          "Équipe de porteurs professionnels, tentes et équipements alpins haut de gamme pour les nuits en campement",
          "Toutes les entrées dans les parcs nationaux, musées, forts et frais d'activités",
          "Assistance administrative complète pour l'obtention accélérée du visa touristique",
        ],
        exclusions: [
          "Vols internationaux Paris ↔ Islamabad (nous pouvons vous assister pour les réservations)",
          "Assurance voyage personnelle multirisques (obligatoire)",
          "Pourboires pour les guides et porteurs (traditionnels et appréciés)",
          "Boissons alcoolisées et dépenses personnelles (souvenirs, spa supplémentaire)",
        ],
      },
    },
    // Packages Page
    packages: {
      hero: {
        title: "LE FORFAIT LUXE SKARDU",
        subheading: "L'harmonie parfaite entre aventure sauvage et confort absolu.",
      },
      overview: {
        title: "Détails de l'Expédition",
        price: "€2 450",
        perPerson: "par personne, tout compris",
        durationLabel: "Durée",
        durationVal: "15 Jours / 14 Nuits",
        groupLabel: "Taille du Groupe",
        groupVal: "De 2 à 8 voyageurs",
        departureLabel: "Départs",
        departureVal: "Toutes dates personnalisables",
      },
      breakdown: {
        title: "Valorisation Estimée des Prestations Inclues",
        desc: "We garantissons un rapport qualité-prix sans équivalent en travaillant sans intermédiaires avec des prestataires locaux de confiance.",
        accommodation: "Hébergements de prestige 4★ et 5★",
        meals: "Pension complète gastronomique & pique-niques de luxe",
        transport: "Vols intérieurs + Véhicule Prado/Mercedes privé",
        guides: "Guides certifiés de haute montagne & porteurs",
        activities: "Activités exclusives, entrées parcs & safaris",
        visa: "Assistance visa VIP & obtention de lettre d'invitation",
        totalValue: "VALEUR TOTALE CONSTATÉE",
        ourPrice: "VOTRE TARIF EXPLORE PAKISTAN",
      },
      calculator: {
        title: "Simulateur de Tarif en Temps Réel",
        subtitle: "Ajustez vos options et visualisez instantanément le prix de votre expédition personnalisée.",
        labelTravelers: "Nombre de voyageurs :",
        discount8: "Félicitations ! Une réduction de 8% a été appliquée pour votre groupe de 4 personnes et plus.",
        discount12: "Félicitations ! Une réduction de 12% a été appliquée pour votre groupe de 6 personnes et plus.",
        addonsTitle: "Options & Extensions Prestige",
        k2Addon: "Extension Trek Camp de Base du K2 (+3 jours, guides de pointe, équipement inclus) - €800 / personne",
        photoAddon: "Atelier Photographie Professionnelle (Accompagnement pro, cours de technique, pack photos/drones) - €250 / personne",
        summaryTitle: "Résumé de votre Devis Personnalisé",
        basePrice: "Tarif de base (par pers.) :",
        discountAmount: "Remise appliquée :",
        addonsCost: "Options sélectionnées (par pers.) :",
        finalPricePerPers: "Prix final par personne :",
        totalCost: "Montant total du séjour :",
      },
      upgrades: {
        title: "Tarifs de Groupe & Avantages",
        group4: "Groupes de 4 personnes et + : 8% de réduction immédiate",
        group6: "Groupes de 6 personnes et + : 12% de réduction immédiate",
        bookingStepsTitle: "Comment réserver votre voyage ?",
        step1: "1. Planifiez votre appel de consultation de 20 minutes.",
        step2: "2. Affinez votre itinéraire avec notre expert dédié.",
        step3: "3. Confirmez vos dates et versez un acompte de 30% pour bloquer les hôtels.",
        step4: "4. Soldez 60 jours avant le départ et lancez vos démarches de visa.",
      },
    },
    // K2 Experience Page
    k2: {
      hero: {
        title: "LE CAMP DE BASE DU K2 : L'AVENTURE ABSOLUE",
        subheading: "L'extension ultime de 3 jours pour approcher le deuxième plus haut sommet du monde.",
      },
      about: {
        title: "À propos du Géant du Karakoram",
        intro: "Culminant à 8 611 mètres, le K2 est une montagne mythique, symbole de pureté et d'exigence. Notre extension de 3 jours vous propose de réaliser le trek mythique menant à son camp de base historique situé à 5 128 mètres d'altitude.",
        warningTitle: "AVERTISSEMENT DE HAUTE MONTAGNE",
        warningText: "Ce trek n'est pas une ascension du sommet, mais une randonnée sur glacier exigeante. Elle se déroule en haute altitude et requiert une excellente condition physique, de l'endurance et une acclimatation préalable.",
      },
      itinerary: {
        title: "Le Parcours K2",
        d1Title: "Jour 1: Skardu vers Askole en 4x4",
        d1Text: "8 heures de piste spectaculaire en jeep 4x4 jusqu'au village d'Askole, le dernier bastion habité avant les glaciers du Karakoram.",
        d2Title: "Jour 2: Trek d'Askole vers Payu (18km)",
        d2Text: "Randonnée le long du glacier du Baltoro. Premières vues majestueuses sur les aiguilles de granit. Nuit sous tente alpine haut de gamme.",
        d3Title: "Jour 3: Trek de Payu vers le Camp de Base (20km)",
        d3Text: "L'ascension finale vers le camp de base du K2 (5 128m). Paysage lunaire exceptionnel, entouré des géants de glace. Nuit au camp de base.",
        d4Title: "Jour 4: Descente & Retour Skardu",
        d4Text: "Descente vers Askole puis jeep retour pour Skardu. Dîner de célébration de votre exploit hôtelier.",
      },
      requirements: {
        title: "Équipements & Conditions d'Éligibilité",
        reqTitle: "Prérequis obligatoires :",
        reqs: [
          "Expérience préalable de randonnée de plusieurs jours en altitude requise",
          "Certificat médical de non-contre-indication à la haute altitude (< 3 mois)",
          "Assurance rapatriement spécifique couvrant le secours en montagne jusqu'à 6 000m",
          "Entraînement cardio-respiratoire rigoureux recommandé 3 mois avant le départ",
        ],
        incTitle: "Matériel fourni par notre équipe :",
        incs: [
          "Tentes d'expédition double paroi résistantes aux tempêtes",
          "Matelas isolants de haute qualité et sacs de couchage grand froid (-20°C)",
          "Caisson hyperbare de secours, bouteilles d'oxygène et trousse médicale d'urgence",
          "Téléphone satellite et balise de détresse GPS Garmin",
          "Porteurs dédiés pour vos bagages personnels (limité à 15kg/personne)",
        ],
      },
    },
    // Visa & Booking Page
    visa: {
      hero: {
        title: "VISA & PROCESSUS DE RÉSERVATION",
        subheading: "Nous prenons en charge toutes vos démarches administratives pour un voyage sans stress.",
      },
      info: {
        title: "Visa Touristique pour le Pakistan",
        subtitle: "Informations pour les ressortissants français et européens",
        docsTitle: "Documents requis :",
        processingTitle: "Délais d'obtention :",
        processingText: "Standard : 15 jours | Express (Urgent) : 5-7 jours (+50€)",
        visaTypeTitle: "Type de Visa :",
        visaTypeText: "Visa de tourisme électronique (e-Visa), valide 30 jours, prolongeable sur place.",
        supportTitle: "Notre Service d'Assistance VIP inclus :",
        supports: [
          "Fourniture de la Lettre d'Invitation Officielle (LOI) requise, visée par notre agence agréée",
          "Vérification minutieuse de l'ensemble de vos pièces justificatives",
          "Aide au remplissage du formulaire officiel d'e-Visa pakistanais",
          "Suivi quotidien de l'état d'avancement de votre dossier auprès de l'ambassade",
        ],
      },
      tracker: {
        title: "Suivi Interactif de vos Documents Visa",
        subtitle: "Cochez les documents au fur et à mesure de leur préparation pour vérifier que votre dossier est 100% complet.",
        progressLabel: "Progression de votre dossier :",
        doc1: "Passeport valide (plus de 6 mois après le retour)",
        doc2: "Formulaire officiel e-Visa complété",
        doc3: "Photo d'identité récente (4x6 cm, fond blanc)",
        doc4: "Attestation d'assurance voyage internationale",
        doc5: "Relevés bancaires des 3 derniers mois",
        doc6: "Lettre d'invitation officielle (fournie par nos soins !)",
        doc7: "Preuve d'hébergement confirmée (fournie par nos soins !)",
        doc8: "Attestation d'employeur ou justificatif de statut",
        tip1: "Assurez-vous que votre passeport comporte au moins 2 pages vierges consécutives.",
        tip2: "Nous vous enverrons le lien officiel de saisie du formulaire.",
        tip3: "Le fichier photo doit peser moins de 350 Ko au format JPEG.",
        tip4: "L'attestation doit mentionner explicitement la couverture médicale au Pakistan.",
        tip5: "Un solde créditeur stable démontre votre autonomie financière.",
        tip6: "Document clé : nous le générons sous 24h après réception de votre acompte.",
        tip7: "Nous incluons les vouchers de tous nos hôtels de luxe partenaires.",
        tip8: "Une fiche de paie récente ou Kbis convient parfaitement.",
        complete: "Félicitations ! Votre dossier est complet à 100%. Vous êtes prêt pour la soumission !",
      },
      booking: {
        title: "Les Étapes Clés de votre Réservation",
        step1Title: "Étape 1 : Appel Découverte (Gratuit - 20 min)",
        step1Text: "Discussion approfondie de vos envies, de vos dates de disponibilité et personnalisation de l'itinéraire.",
        step2Title: "Étape 2 : Devis & Calendrier de Voyage",
        step2Text: "Envoi de votre proposition tarifaire détaillée et signature électronique de votre contrat de voyage.",
        step3Title: "Étape 3 : Acompte & Réservations",
        step3Text: "Paiement de l'acompte de 30%. Nous émettons vos billets d'avion intérieurs et réservons les hôtels de luxe.",
        step4Title: "Étape 4 : Visa & Préparation",
        step4Text: "Paiement du solde à J-60. Nous vous envoyons votre dossier visa complet et notre guide pratique de bagages.",
        step5Title: "Étape 5 : Le Grand Départ !",
        step5Text: "Accueil par notre équipe à Islamabad. L'aventure commence en toute sérénité !",
      },
      policy: {
        title: "Conditions d'Annulation & Paiements",
        methodsTitle: "Moyens de paiement acceptés :",
        methodsText: "Virement bancaire européen (sans frais, recommandé), Carte bancaire (Visa/Mastercard, +2% frais techniques) ou PayPal pour l'acompte.",
        cancellationTitle: "Barème des frais d'annulation :",
        c1: "Plus de 90 jours avant le départ : Remboursement intégral (frais administratifs de 50€ déduits)",
        c2: "Entre 60 et 89 jours : 50% de frais d'annulation",
        c3: "Entre 30 et 59 jours : 75% de frais d'annulation",
        c4: "Moins de 30 jours : 100% de frais d'annulation",
      },
    },
    // About Us Page
    about: {
      hero: {
        title: "À PROPOS D'EXPLORE PAKISTAN",
        subheading: "Des passionnés de montagne et de service haut de gamme unis pour vous offrir l'exceptionnel.",
      },
      story: {
        title: "Notre Histoire",
        text: "Explore Pakistan est né d'une ambition simple : faire découvrir la beauté sauvage, presque irréelle, des montagnes du Karakoram aux voyageurs européens, sans aucun compromis sur le confort, la sécurité ou l'authenticité culturelle. Nous croyons fermement que l'aventure de haute montagne ne doit pas exclure le raffinement hôtelier, et que le luxe ne doit jamais masquer l'authenticité des rencontres humaines.",
      },
      whyUs: {
        title: "Pourquoi choisir Explore Pakistan ?",
        box1Title: "Le Luxe sans Compromis",
        box1Text: "Nous sélectionnons uniquement des hôtels 4★ et 5★ récents, des transports spacieux et offrons des pique-niques gastronomiques d'altitude d'une finesse incomparable.",
        box2Title: "Sécurité & Technologie",
        box2Text: "Tous nos guides sont des alpinistes émérites formés aux premiers secours. Nous voyageons munis de téléphones satellites et d'oxygène d'urgence.",
        box3Title: "Impact Éthique & Durable",
        box3Text: "Nous employons des équipes locales équitablement rémunérées et reversons 10% de nos bénéfices à des projets d'éducation dans les vallées du Baltistan.",
        box4Title: "Présence Locale à Paris",
        box4Text: "Basés en France et au Pakistan, nous comprenons parfaitement vos exigences. Assistance continue 24/7 en français.",
        box5Title: "Personnalisation Totale",
        box5Text: "Nous adaptons chaque jour de l'itinéraire à vos passions : photographie, ethnologie, randonnées physiques ou détente absolue.",
      },
      team: {
        title: "Notre Équipe de Haute Montagne",
        hassanTitle: "Hassan - Fondateur & Guide Principal",
        hassanBio: "Plus de 15 ans d'expérience dans le massif du Karakoram. Vétéran des ascensions du K2 et du Broad Peak, il connaît chaque glacier et chaque sentier comme sa poche.",
      },
      sustainability: {
        title: "Notre Engagement pour un Tourisme Responsable",
        text: "La nature sauvage du Pakistan est un trésor fragile. Nous limitons nos groupes à 8 personnes maximum, interdisons l'usage de plastique à usage unique en expédition et compensons 100% de l'empreinte carbone des vols intérieurs de nos clients.",
      },
    },
    // Contact Page
    contact: {
      hero: {
        title: "CONTACTEZ NOS EXPERTS",
        subheading: "Une question ? Un projet d'itinéraire sur mesure ? Notre équipe vous répond en moins de 24 heures.",
      },
      form: {
        title: "Formulaire de Demande de Réservation & Informations",
        name: "Nom complet *",
        email: "Adresse e-mail *",
        phone: "Téléphone (optionnel)",
        travelers: "Nombre de voyageurs",
        dates: "Dates de voyage souhaitées",
        msg: "Dites-nous en plus sur vos envies (niveau de marche, options souhaitées...)",
        newsletter: "Je souhaite m'inscrire à la newsletter pour recevoir les guides de destination.",
        submit: "ENVOYER MA DEMANDE",
        validationErr: "Veuillez remplir tous les champs obligatoires (*) avec des informations valides.",
        successMsg: "Votre message a été envoyé avec succès ! Un spécialiste francophone vous contactera sous 24 heures.",
      },
      infoBox: {
        title: "Nos Coordonnées",
        email: "E-mail direct : info@explorepakistan.fr",
        whatsapp: "WhatsApp (24/7) : +33 6 12 34 56 78",
        phone: "Téléphone bureau : +33 1 45 67 89 10",
        hours: "Horaires : Lundi au Vendredi, 9h - 18h CET",
        response: "Temps de réponse garanti en moins de 24h",
      },
      calendly: {
        title: "Planifiez votre consultation en direct",
        desc: "Sélectionnez un jour et un créneau horaire dans notre calendrier interactif ci-dessous pour réserver votre appel d'orientation de 20 minutes.",
        mockHeading: "Explore Pakistan Consultation (20 Min)",
        mockDetails: "Appel de présentation, revue de l'itinéraire Skardu et conseils visa personnalisés avec Hassan.",
        confirmBtn: "Confirmer le rendez-vous pour ",
        successMsg: "Votre rendez-vous est confirmé ! Un e-mail de confirmation contenant le lien vidéo vous a été envoyé.",
      },
    },
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      destinations: "Destinations",
      packages: "Premium Package",
      k2: "K2 Experience",
      visa: "Visa & Booking",
      about: "About Us",
      contact: "Contact",
      cinematic: "Showcase",
      bookNow: "Book Your Journey",
    },
    // Footer
    footer: {
      tagline: "Bespoke luxury expeditions in the heart of the Karakoram mountains for discerning travelers.",
      newsletterHeading: "Stay Updated",
      newsletterSub: "Get our exclusive destination guides, travel tips, and early access to new packages.",
      emailPlaceholder: "Your email address",
      namePlaceholder: "Your first name",
      subscribe: "Subscribe",
      successMsg: "Thank you for subscribing! Our travel brochure has been sent to your email.",
      rights: "© 2026 Explore Pakistan. All rights reserved. explorepakistan.fr",
      officeHours: "Office Hours: Monday-Friday, 9am-6pm CET",
    },
    // Common CTAs
    cta: {
      bookConsultation: "Book Free Consultation Call",
      bookJourney: "BOOK YOUR JOURNEY",
      learnMore: "LEARN MORE",
      exploreK2: "EXPLORE K2",
      downloadBrochure: "DOWNLOAD BROCHURE (PDF)",
      downloadChecklist: "DOWNLOAD VISA CHECKLIST",
      sendInquiry: "SEND BOOKING INQUIRY",
      confirmSlots: "Confirm Slot",
    },
    // Home Page
    home: {
      hero: {
        headline: "EXPLORE PAKISTAN IN PREMIUM STYLE",
        subheading: "Customized 15-day luxury expeditions from Paris to Skardu, including 5-star hotels, all meals, guided trekking, and K2 base camp experiences.",
      },
      features: {
        title: "Outstanding Adventure Travel",
        col1: {
          title: "5-Star Accommodations",
          desc: "Premium hotels in Skardu, Hunza Valley, and Shigar. Curated for comfort at high altitude.",
        },
        col2: {
          title: "Everything Included",
          desc: "Hotels, gourmet meals, transport, guides, activities, visa assistance. Nothing hidden, nothing extra.",
        },
        col3: {
          title: "Fully Customized",
          desc: "Your itinerary, your pace. From casual exploration to challenging K2 base camp treks.",
        },
      },
      k2: {
        title: "CHALLENGE YOURSELF",
        desc: "K2 Base Camp Trek - 3-day extension available. Expert guides, high-end alpine camps, and a 5,128m peak experience.",
      },
      testimonials: {
        title: "Guest Testimonials",
        q1: {
          text: "An unforgettable experience. The attention to detail, quality of the guides, and luxury of accommodations at high altitude were spectacular.",
          author: "Marie D., Paris",
        },
        q2: {
          text: "Worth every euro. A wild adventure paired with premium logistics and professional support.",
          author: "Jean M., Lyon",
        },
        q3: {
          text: "The K2 base camp trek was life-changing. Highly recommended, exceptionally organized, and safety-first.",
          author: "Sophie L., Marseille",
        },
      },
      ctaSec: {
        title: "Ready to Explore Pakistan?",
        desc: "Book a free 20-minute consultation with our travel specialist to customize your journey.",
      },
    },
    // Destinations Page
    destinations: {
      hero: {
        title: "EXPLORE 15 MAGICAL DAYS",
        subheading: "Your journey through Pakistan's most stunning landscapes.",
      },
      itinerary: {
        title: "Day-by-Day Itinerary",
        subtitle: "Click on any day to explore detailed highlights, accommodation, and daily activities.",
        days: [
          {
            day: 1,
            title: "Islamabad Arrival",
            details: "Arrival at Islamabad International Airport. Private transfer to your hotel. Evening orientation & welcome dinner.",
            overnight: "Pearl Continental Hotel (5★)",
            elevation: "540m",
            activity: "Airport welcome & Welcome Dinner",
            photos: [
              "https://images.unsplash.com/photo-1627832877847-fde0f269a35e?auto=format&fit=crop&w=400&q=80", // Faisal Mosque
              "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?auto=format&fit=crop&w=400&q=80", // Islamabad View
              "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80", // Gourmet Dinner
              "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80"  // Hotel PC
            ]
          },
          {
            day: 2,
            title: "Skardu Gateway",
            details: "Flight from Islamabad to Skardu. Explore Skardu Bazaar and visit Kharpocho Fort for stunning sunset views over the Indus river.",
            overnight: "Khar Hotel Skardu (Premium)",
            elevation: "2,230m",
            activity: "Scenic domestic flight & Sunset fort tour",
            photos: [
              "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=400&q=80", // Kharpocho sunset
              "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=400&q=80", // Local market
              "https://images.unsplash.com/photo-1622216194772-41b8640ed267?auto=format&fit=crop&w=400&q=80", // Indus river
              "https://images.unsplash.com/photo-1624314138470-5a2f24623f10?auto=format&fit=crop&w=400&q=80"  // Skardu scenery
            ]
          },
          {
            day: 3,
            title: "Lakes & Water",
            details: "Visit Shangrila Lake (lush gardens, crystal water), Upper Kachura Lake (pristine reflections, private boat ride), and Katpana Lake for golden hour.",
            overnight: "Khar Hotel Skardu (Premium)",
            elevation: "2,230m",
            activity: "Boat excursion & Golden hour lakes",
            photos: [
              "https://images.unsplash.com/photo-1622216194772-41b8640ed267?auto=format&fit=crop&w=400&q=80", // Shangrila Lake
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // Upper Kachura
              "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&q=80", // Katpana Lake
              "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80"  // Lakes reflections
            ]
          },
          {
            day: 4,
            title: "Deosai National Park",
            details: "Drive to Deosai plateau (4,000m+, roof of the world). Alpine meadows, lake fishing, and luxury camping under the stars at Minimarg.",
            overnight: "Minimarg Camp (Luxury)",
            elevation: "4,110m",
            activity: "4x4 Safari & Alpine Glamping",
            photos: [
              "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80", // High plateau
              "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=400&q=80", // Minimarg camp
              "https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&w=400&q=80", // Sheosar lake
              "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=400&q=80"  // High camping tents
            ]
          },
          {
            day: 5,
            title: "Asotré Valley Trek",
            details: "Full day exploring pristine Asotré Valley. Alpine meadows, clean streams, and spectacular mountain passes.",
            overnight: "Minimarg Camp (Luxury)",
            elevation: "3,800m",
            activity: "Alpine trekking & Landscape views",
            photos: [
              "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&q=80", // Wild flowers
              "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=400&q=80", // Glacier streams
              "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80", // Mountain passes
              "https://images.unsplash.com/photo-1533587837750-5ab9a4f4773c?auto=format&fit=crop&w=400&q=80"  // Green paths
            ]
          },
          {
            day: 6,
            title: "Trek to Sasi Base",
            details: "Trek from Asotré to Sasi (4,000m). Set up premium camp under the stars with panoramic mountain views. Gourmet dinner prepared by our camp chef.",
            overnight: "Sasi Base Camp (Premium Alpine)",
            elevation: "4,000m",
            activity: "Glacier trek connection",
            photos: [
              "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=400&q=80", // Alpine camping
              "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=400&q=80", // Starry sky
              "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80", // Ice fields
              "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80"  // Camp kitchen
            ]
          },
          {
            day: 7,
            title: "Kutwal Lake & Haramosh Peak",
            details: "Trek to Kutwal Lake. Enjoy spectacular, close-up views of Haramosh Peak (7,397m). Campfire evening at base camp.",
            overnight: "Sasi Base Camp (Premium Alpine)",
            elevation: "3,260m",
            activity: "Haramosh Peak panoramas",
            photos: [
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // Kutwal Lake
              "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=400&q=80", // Haramosh Peak
              "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80", // High glaciated lake
              "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=400&q=80"  // Campfire circle
            ]
          },
          {
            day: 8,
            title: "Return to Skardu",
            details: "Trek down from Sasi to the main road, private transfer back to Skardu. Afternoon rest day, massage and spa treatments available.",
            overnight: "Khar Hotel Skardu (Premium)",
            elevation: "2,230m",
            activity: "Descent trek & Spa recovery",
            photos: [
              "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80", // Spa massage
              "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=400&q=80", // Premium resort room
              "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80", // Skardu bazaar
              "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80"  // Local tea house
            ]
          },
          {
            day: 9,
            title: "Shigar Valley & Sarfaranga Desert",
            details: "Drive to historic Shigar Valley. Cold desert jeep safari in Sarfaranga, followed by a romantic camel ride at sunset.",
            overnight: "Rivage Hotel Shigar (Luxury)",
            elevation: "2,350m",
            activity: "Desert Jeep Safari & Camel Ride",
            photos: [
              "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=400&q=80", // Sarfaranga dunes
              "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=400&q=80", // Jeep safari
              "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=400&q=80", // Shigar palace
              "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=400&q=80"  // Camel riders
            ]
          },
          {
            day: 10,
            title: "Khaplu & Mashabrum Valley",
            details: "Drive to Khaplu, a historic Baltistan town. Take stunning photos of Mashabrum peak (7,821m) and enjoy a private tour of Khaplu Palace.",
            overnight: "Relax Inn Khaplu (Heritage Property)",
            elevation: "2,600m",
            activity: "Royal Palace Tour",
            photos: [
              "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=400&q=80", // Khaplu palace
              "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80", // Mashabrum Peak
              "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=400&q=80", // Palace woodworks
              "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=400&q=80"  // Palace royal gardens
            ]
          },
          {
            day: 11,
            title: "Khaplu Cultural Day",
            details: "Local village walk, meet craftsmen, and share a traditional Baltistani lunch with a local family in their home.",
            overnight: "Relax Inn Khaplu (Heritage Property)",
            elevation: "2,600m",
            activity: "Family lunch & Local craft tour",
            photos: [
              "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=400&q=80", // Khaplu village walks
              "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=80", // Balti lunch
              "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=400&q=80", // Woodwork
              "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=400&q=80"  // Apricot orchard
            ]
          },
          {
            day: 12,
            title: "Bashu Valley",
            details: "Return to Skardu region and explore Bashu Valley, famous for its lush green pine forests, high altitude farms, and total tranquility.",
            overnight: "Gumaan Resort Skardu (Premium Lodge)",
            elevation: "2,800m",
            activity: "Eco-nature exploration",
            photos: [
              "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=400&q=80", // Pine forest hikes
              "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80", // High meadows yaks
              "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=400&q=80", // Wooden eco lodge
              "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&w=400&q=80"  // Green farming views
            ]
          },
          {
            day: 13,
            title: "Hunza Valley Day Trip",
            details: "Scenic drive to the legendary Hunza Valley along the Karakoram Highway. Visit Altit and Baltit forts (UNESCO). Sample organic orchard fruits.",
            overnight: "Gumaan Resort Skardu (Premium Lodge)",
            elevation: "2,400m",
            activity: "UNESCO Fort visits & Orchard tour",
            photos: [
              "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=400&q=80", // Altit Fort cliffs
              "https://images.unsplash.com/photo-1627832877847-fde0f269a35e?auto=format&fit=crop&w=400&q=80", // Baltit Fort Hunza
              "https://images.unsplash.com/photo-1622216194772-41b8640ed267?auto=format&fit=crop&w=400&q=80", // Hunza peak panorama
              "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=400&q=80"  // Karakoram highway
            ]
          },
          {
            day: 14,
            title: "Free Day / Spa / Activities",
            details: "Choose your own adventure: relax at the resort, shop for precious stones/crafts in Skardu, or indulge in upscale spa therapies.",
            overnight: "Gumaan Resort Skardu (Premium Lodge)",
            elevation: "2,230m",
            activity: "Leisure time & Wellness services",
            photos: [
              "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80", // Luxury hotel pool
              "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=400&q=80", // Lounge balcony K2 view
              "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80", // Precious gems markets
              "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=400&q=80"  // Resort walking gardens
            ]
          },
          {
            day: 15,
            title: "Fly Home",
            details: "Morning flight Skardu to Islamabad. Private transfer for last-minute shopping in the capital or VIP airport lounge access before your flight home.",
            overnight: "International Flight",
            elevation: "540m / Return Flight",
            activity: "Domestic flight & International Connection",
            photos: [
              "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=400&q=80", // Scenic airplane window
              "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=400&q=80", // VIP Mercedes transfers
              "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80", // Airport VIP lounge
              "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=400&q=80"  // Flight mapping
            ]
          }
        ],
      },
      checklist: {
        incTitle: "What's Included in Your Premium Experience",
        excTitle: "What's Excluded",
        inclusions: [
          "Luxury 4-star and 5-star hotel accommodations throughout the trip",
          "All meals (breakfast, lunch, dinner) including fine dining and premium catering",
          "Domestic flights (Islamabad ↔ Skardu) round-trip with baggage insurance",
          "Private premium vehicles (Toyota Prado & Mercedes) with professional drivers",
          "Professional bilingual certified guides (French/English)",
          "Professional porter team, high-grade tents, and equipment for camp nights",
          "All activity fees, fort tours, safaris, and national park tickets",
          "Full VIP administrative assistance and letter of invitation (LOI) for your visa",
        ],
        exclusions: [
          "International flights (Paris ↔ Islamabad) - reservation support available",
          "Comprehensive travel insurance (mandatory)",
          "Personal tips for guides and porters (highly appreciated)",
          "Alcoholic beverages and personal shopping/extra spa treatments",
        ],
      },
    },
    // Packages Page
    packages: {
      hero: {
        title: "THE SKARDU LUXURY PACKAGE",
        subheading: "An perfect balance between wild exploration and premium comfort.",
      },
      overview: {
        title: "Package Overview",
        price: "€2,450",
        perPerson: "per person, all-inclusive",
        durationLabel: "Duration",
        durationVal: "15 Days / 14 Nights",
        groupLabel: "Group Size",
        groupVal: "2 to 8 people",
        departureLabel: "Departures",
        departureVal: "Fully customizable dates",
      },
      breakdown: {
        title: "Estimated Inclusions Valuation",
        desc: "We ensure top-tier luxury experiences by bypassing brokers and working directly with vetted local suppliers.",
        accommodation: "Prestige 4★ and 5★ hotels",
        meals: "Full board gourmet meals & luxury picnics",
        transport: "Domestic flight + Private Prado/Mercedes SUV",
        guides: "Licensed mountain guides & dedicated porters",
        activities: "Safaris, fort tours, national park entry fees",
        visa: "VIP e-Visa guidance & official invitation letter",
        totalValue: "TOTAL ESTIMATED VALUE",
        ourPrice: "EXPLORE PAKISTAN PRICE",
      },
      calculator: {
        title: "Real-Time Price Calculator",
        subtitle: "Customize your details to instantly view your tailored expedition quote.",
        labelTravelers: "Number of travelers:",
        discount8: "Congratulations! An 8% group discount has been applied for 4+ people.",
        discount12: "Congratulations! A 12% group discount has been applied for 6+ people.",
        addonsTitle: "Prestige Upgrades & Extensions",
        k2Addon: "K2 Base Camp Trek Extension (+3 days, professional gear, elite alpine guides) - €800 / person",
        photoAddon: "Professional Photography Workshop (Pro advice, drone coverage, high-res digital package) - €250 / person",
        summaryTitle: "Bespoke Price Quote Summary",
        basePrice: "Base Price (per person):",
        discountAmount: "Discount amount:",
        addonsCost: "Selected options (per person):",
        finalPricePerPers: "Final price per person:",
        totalCost: "Total expedition cost:",
      },
      upgrades: {
        title: "Group Discounts & Advantages",
        group4: "Groups of 4+ people: 8% immediate discount",
        group6: "Groups of 6+ people: 12% immediate discount",
        bookingStepsTitle: "How to book your journey?",
        step1: "1. Schedule your 20-minute consultation call.",
        step2: "2. Finalize your custom itinerary with our dedicated expert.",
        step3: "3. Pay a 30% deposit to lock in hotels and domestic flights.",
        step4: "4. Settle the balance 60 days prior and initiate visa applications.",
      },
    },
    // K2 Experience Page
    k2: {
      hero: {
        title: "K2 BASE CAMP: THE ULTIMATE ADVENTURE",
        subheading: "A 3-day high-altitude extension to stand beneath the planet's second highest mountain.",
      },
      about: {
        title: "About the Karakoram Giant",
        intro: "Towering at 8,611 meters, K2 is a legendary mountain, a ultimate symbol of pristine wilderness and mountaineering. Our 3-day add-on lets you experience the historic trekking route to its base camp at 5,128 meters.",
        warningTitle: "HIGH ALTITUDE WARNING",
        warningText: "This trek is not a climb to the summit, but a rigorous trek on glaciers. It occurs at high altitude and requires excellent physical fitness, endurance, and prior acclimatization.",
      },
      itinerary: {
        title: "The K2 Itinerary",
        d1Title: "Day 1: Skardu to Askole (4WD)",
        d1Text: "8 hours of spectacular 4x4 dirt-road driving to Askole, the last inhabited village before the Karakoram glaciers.",
        d2Title: "Day 2: Trek Askole to Payu (18km)",
        d2Text: "Trek along the Baltoro glacier valley. Amazing views of towering granite towers. Overnight in premium double-walled tents.",
        d3Title: "Day 3: Trek Payu to K2 Base Camp (20km)",
        d3Text: "The final climb to K2 Base Camp (5,128m). Surreal glacial landscape surrounded by towering peaks. Overnight camping.",
        d4Title: "Day 4: Return to Skardu",
        d4Text: "Descent trek to Askole, then 4x4 drive back to Skardu. Celebrate your achievement with a festive dinner.",
      },
      requirements: {
        title: "Equipments & Fitness Requirements",
        reqTitle: "Mandatory Prerequisites:",
        reqs: [
          "Prior multi-day trekking experience at high altitudes is required",
          "Medical certificate confirming fitness for high elevations (< 3 months old)",
          "Specialized travel insurance covering mountain rescue up to 6,000m",
          "Rigorous cardiovascular physical training 3 months prior to arrival",
        ],
        incTitle: "Gear Provided by our Crew:",
        incs: [
          "Double-walled, storm-proof expedition dome tents",
          "High-grade insulated sleeping mats and sleeping bags rated for cold temperatures (-20°C)",
          "Emergency hyperbaric chamber, medical oxygen cylinders, and emergency kits",
          "Garmin satellite phone and emergency GPS tracking devices",
          "Dedicated porters to carry your personal baggage (limit 15kg / person)",
        ],
      },
    },
    // Visa & Booking Page
    visa: {
      hero: {
        title: "VISA ASSISTANCE & BOOKING DETAILS",
        subheading: "We manage all administrative paperwork so you can travel stress-free.",
      },
      info: {
        title: "Pakistan Tourist Visa",
        subtitle: "Information for French & European passport holders",
        docsTitle: "Required Documents:",
        processingTitle: "Processing Times:",
        processingText: "Standard: 15 days | Express (Urgent): 5-7 days (+€50 fee)",
        visaTypeTitle: "Visa Type:",
        visaTypeText: "Electronic Tourist Visa (e-Visa), valid for 30 days, extendable inside Pakistan.",
        supportTitle: "Our VIP Assistance Service Includes:",
        supports: [
          "Providing the official Letter of Invitation (LOI) required, verified by our licensed agency",
          "Meticulous validation of all your visa support files",
          "Personalized help in filling out the official Pakistan e-Visa form",
          "Daily status tracking of your application with the embassy",
        ],
      },
      tracker: {
        title: "Interactive Visa Checklist",
        subtitle: "Tick off documents as you prepare them to verify that your visa support package is 100% complete.",
        progressLabel: "Your Application Progress:",
        doc1: "Valid passport (6+ months validity remaining)",
        doc2: "Completed official e-Visa application form",
        doc3: "Recent passport photo (4x6 cm, white background)",
        doc4: "International travel insurance certificate",
        doc5: "Bank statements showing the last 3 months",
        doc6: "Official Letter of Invitation (provided by us !)",
        doc7: "Confirmed hotel booking voucher (provided by us !)",
        doc8: "Employer letter or company registration certificate",
        tip1: "Ensure your passport has at least 2 consecutive blank pages.",
        tip2: "We will supply the official link and direct portal guidance.",
        tip3: "The photo file must be under 350KB in JPEG format.",
        tip4: "The policy must explicitly state medical coverage in Pakistan.",
        tip5: "A stable credit balance showcases financial self-reliance.",
        tip6: "Crucial file: we generate this within 24 hours of deposit payment.",
        tip7: "We include the booking certificates of our luxury partner hotels.",
        tip8: "A recent pay slip or company certificate works perfectly.",
        complete: "Excellent! Your visa support package is 100% complete. Ready for submission!",
      },
      booking: {
        title: "Your Booking Roadmap",
        step1Title: "Step 1: Discovery Call (Free - 20 min)",
        step1Text: "Discuss your travel aspirations, dates of interest, and custom tailoring with our specialist.",
        step2Title: "Step 2: Custom Itinerary Proposal",
        step2Text: "Receive your itemized quotation and sign your travel contract electronically.",
        step3Title: "Step 3: Deposit & Room Allocations",
        step3Text: "Pay a 30% deposit. We immediately secure your luxury rooms and issue domestic flight tickets.",
        step4Title: "Step 4: Visa & final preps",
        step4Text: "Settle the remaining balance at J-60. We send your full visa kit and packing guide.",
        step5Title: "Step 5: Welcome to Pakistan!",
        step5Text: "Greeted by our private team at Islamabad. Your luxury journey starts stress-free!",
      },
      policy: {
        title: "Cancellation Terms & Payments",
        methodsTitle: "Accepted Payment Options:",
        methodsText: "European Bank Transfer (no fees, recommended), Credit Card (Visa/Mastercard, +2% processing fee), or PayPal for deposits.",
        cancellationTitle: "Cancellation Refund Scaling:",
        c1: "More than 90 days before travel: Full refund (minus €50 admin processing fee)",
        c2: "60 to 89 days: 50% cancellation fee",
        c3: "30 to 59 days: 75% cancellation fee",
        c4: "Less than 30 days: 100% cancellation fee (no refund)",
      },
    },
    // About Us Page
    about: {
      hero: {
        title: "ABOUT EXPLORE PAKISTAN",
        subheading: "A team of mountaineering veterans and luxury hoteliers dedicated to excellence.",
      },
      story: {
        title: "Our Story",
        text: "Explore Pakistan was founded to open the magical peaks of the Karakoram to European travelers without forcing them to compromise on comfort, safety, or cultural authenticity. We believe that adventure shouldn't mean sacrificing comfort, and luxury shouldn't mean missing out on real, raw human experiences.",
      },
      whyUs: {
        title: "Why Travel With Us?",
        box1Title: "Luxury Done Right",
        box1Text: "We select newly-built 4★/5★ properties, private high-end transport, and set up gourmet mountain picnics that rival fine dining.",
        box2Title: "Safety First Protocol",
        box2Text: "All guides are seasoned climbers trained in high-altitude medicine. We travel with satellite phones, GPS, and backup oxygen.",
        box3Title: "Ethical & Sustainable",
        box3Text: "We support fair local wages, direct community sourcing, and channel 10% of our profits into children education in Baltistan.",
        box4Title: "Local European Support",
        box4Text: "Headquartered in Paris and Islamabad, we translate your desires seamlessly. French-speaking support available 24/7.",
        box5Title: "Genuine Customization",
        box5Text: "Whether you're a trekker, photographer, cultural observer, or wellness seeker, we customize the daily pace to match.",
      },
      team: {
        title: "Our Elite Expedition Team",
        hassanTitle: "Hassan - Founder & Lead Guide",
        hassanBio: "Over 15 years guiding in Karakoram. Vétéran of K2 and Broad Peak expeditions, he knows every glacier, camp, and local secret intimately.",
      },
      sustainability: {
        title: "Responsible Tourism & Nature Preservation",
        text: "Pakistan's mountains are a pristine treasure. We enforce strict group sizes (max 8), ban single-use plastics, and offset 100% of the carbon footprint for our domestic flights.",
      },
    },
    // Contact Page
    contact: {
      hero: {
        title: "CONNECT WITH OUR SPECIALISTS",
        subheading: "Have questions? Need a tailored route? Drop us a line and we'll reply within 24 hours.",
      },
      form: {
        title: "Booking Inquiry & Information Request",
        name: "Full Name *",
        email: "Email Address *",
        phone: "Phone (optional)",
        travelers: "Number of Travelers",
        dates: "Preferred Travel Dates",
        msg: "Tell us about your interests (fitness level, upgrades, custom preferences...)",
        newsletter: "I want to receive the exclusive Pakistan travel guides.",
        submit: "SUBMIT INQUIRY",
        validationErr: "Please fill out all mandatory fields (*) with valid information.",
        successMsg: "Inquiry sent successfully! A specialist will get in touch with you in French within 24 hours.",
      },
      infoBox: {
        title: "Contact Details",
        email: "Direct Email: info@explorepakistan.fr",
        whatsapp: "WhatsApp (24/7): +33 6 12 34 56 78",
        phone: "Office Phone: +33 1 45 67 89 10",
        hours: "Hours: Monday to Friday, 9am - 6pm CET",
        response: "Response time: under 24 hours guaranteed",
      },
      calendly: {
        title: "Schedule a Live Video Consultation",
        desc: "Pick a date and time slot directly in our calendar to set up your free 20-minute travel review with our tour director.",
        mockHeading: "Explore Pakistan Consultation (20 Min)",
        mockDetails: "Intro call, Skardu route check, and bespoke e-Visa recommendations with Hassan.",
        confirmBtn: "Confirm Appointment for ",
        successMsg: "Appointment scheduled! A confirmation email and video link have been sent to your address.",
      },
    },
  },
};
