// Project data for project.html. Order = prev/next order.
window.PROJECTS = [
  {
    slug: "wasta",
    name: "Wasta",
    tagline: "Freelance and connection platform for the Jordanian market.",
    tag: "Founder · Android · iOS · Web",
    period: "2023 – Present",
    role: "Founder, product owner and sole mobile engineer",
    image: "images/wasta.jpg",
    links: [
      { label: "gowasta.com", href: "https://www.gowasta.com" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.MohmadAboanza.jops" }
    ],
    stack: ["Kotlin Multiplatform", "Compose Multiplatform", "MVI", "Firebase Auth", "Realtime Database", "Cloud Functions", "Angular (web)", "AI recommendations"],
    overview: [
      "Wasta (واسطة) connects job seekers, freelancers and companies in Jordan. People discover jobs matched to their interests, follow companies, join a community feed and apply in a few taps. Companies post openings and reach thousands of candidates organically.",
      "I built it as a single Kotlin codebase that ships to Android and iOS, with a companion Angular web app and a Firebase backend. It grew to 16,000+ users with zero paid marketing."
    ],
    features: [
      "Job discovery with match percentage per user, saved jobs and applications tracking",
      "Company profiles, followers and job posting for employers",
      "Community feed and in-app notifications",
      "Arabic / English with full RTL, dark mode",
      "Web app for companies and candidates, synced with mobile"
    ],
    highlights: [
      "Shared UI and business logic across Android and iOS with Compose Multiplatform and KMP, one codebase to maintain",
      "MVI architecture with reducers, middlewares and effects, split into feature modules for scalability",
      "AI-driven recommendations and user-behaviour analytics to rank jobs per user",
      "Firebase Authentication, Realtime Database and Cloud Functions as a serverless backend",
      "Grew to 16,000+ organic users with zero paid marketing"
    ]
  },
  {
    slug: "barq",
    name: "Barq",
    tagline: "AI-powered advertising platform for small businesses.",
    tag: "Founder · B2B SaaS",
    period: "2026 – Present",
    role: "Founder & CEO, full-stack builder",
    image: "images/barq.jpg",
    links: [{ label: "Visit Barq", href: "https://barq-bot-jo.web.app" }],
    stack: ["AI / LLM APIs", "Firebase Hosting", "Firestore", "Web dashboard", "Arabic / English"],
    overview: [
      "Barq (برق) takes a small business from an idea to a finished ad campaign in three steps. The owner describes what they sell, Barq generates the creative and copy with AI, and a dashboard tracks orders and customers that come in from Instagram and other channels.",
      "It is launched, revenue-generating and growing month over month, with paying customers in retail, perfumes and insurance."
    ],
    features: [
      "Three-step flow: describe the product, generate the ad, publish",
      "Client dashboard with orders, customers, status filters and search",
      "Instagram chat bot that collects orders and customer details automatically",
      "Per-client landing pages built and hosted by Barq",
      "Arabic-first UI with English support"
    ],
    highlights: [
      "LLM-powered generation of ad copy and creative tailored to the client's product and audience",
      "Automated order capture from Instagram conversations into the dashboard",
      "Serverless stack on Firebase for near-zero running cost at 85% gross margin",
      "Pitch deck and investor applications prepared for pre-seed rounds"
    ]
  },
  {
    slug: "menujo",
    name: "MenuJo",
    tagline: "Menus and price lists for any business in Jordan, built from a phone.",
    tag: "Founder · Web",
    period: "2026 – Present",
    role: "Founder and builder",
    image: "images/menujo.jpg",
    links: [{ label: "menujo.co", href: "https://menujo.co" }],
    stack: ["Web", "QR codes", "PDF export", "Arabic / English", "RTL"],
    overview: [
      "MenuJo lets restaurants, cafés, salons, spas, car services and shops create a designed menu or price list in about ten minutes, without a designer. The owner types items and prices from a phone and gets a printable PDF plus a QR-code page customers can open at the table.",
      "Prices change often. MenuJo updates the QR page within seconds of an edit, so printed QR codes never go stale."
    ],
    features: [
      "Templates designed for food, beauty, car services and retail",
      "Arabic and English menus with proper RTL layout",
      "Printable PDF export and a hosted QR-code page per business",
      "Instant price updates reflected on the QR page",
      "One-time price per menu, no subscription"
    ],
    highlights: [
      "Mobile-first editor so owners can build and update from a phone",
      "Live-updating public pages tied to a stable QR code",
      "Print-quality PDF generation from the same data as the web page"
    ]
  },
  {
    slug: "trip500",
    name: "Trip500",
    tagline: "AI travel planner that builds a trip around your budget.",
    tag: "Founder · Android · iOS · Web",
    period: "2025 – Present",
    role: "Founder and builder",
    image: "images/trip500.jpg",
    links: [{ label: "trip-500.web.app", href: "https://trip-500.web.app" }],
    stack: ["Compose Multiplatform", "Kotlin Multiplatform", "REST APIs", "AI itinerary generation", "Web"],
    overview: [
      "Trip500 starts from the number most planners leave for last: the budget. You pick where you are leaving from, where you want to go, the month and your total budget, and the app generates an itinerary and splits the budget across flights, stay, food and activities using real-time pricing.",
      "The mobile app shares its Compose UI between Android and iOS, and a companion web app handles planning and booking redirects."
    ],
    features: [
      "Budget-first planning: from, to, month, total budget",
      "AI-generated day-by-day itinerary",
      "Smart budget allocation across flights, hotel, food and activities",
      "Booking redirects to partner sites",
      "Web and mobile in sync"
    ],
    highlights: [
      "Compose Multiplatform shared UI across Android and iOS",
      "LLM-based itinerary generation constrained by live pricing data",
      "Companion web app for desktop planning"
    ]
  },
  {
    slug: "modon",
    name: "Modon SuperApp",
    tagline: "The residents' and owners' app for Modon communities in Abu Dhabi.",
    tag: "SilverFern · Client: Modon Holding",
    period: "Sep 2026 – Present",
    role: "Android Developer at SilverFern (Dubai), working on the Modon Holding account",
    image: null,
    links: [],
    stack: ["Kotlin", "Jetpack Compose", "MVVM", "Hilt", "Retrofit", "kotlinx.serialization", "Auth0", "Paparazzi", "mockk"],
    overview: [
      "The Modon SuperApp is how residents and owners manage life in Modon communities: property portfolio, payments, handover, and day-to-day community services. I work on it at SilverFern in Dubai, with Modon Holding in Abu Dhabi as the client.",
      "I own several feature areas end to end, from Figma to production, and coordinate API contracts with the backend and iOS teams."
    ],
    features: [
      "Community home, amenities booking, events, polls, notices and notifications",
      "Service requests, e-permits, NOCs, short stay, storage, access cards, violations and large-item requests",
      "Guest registration: email verification, Auth0 sign-in, multi-step document form, decision flow for new / pending / already-registered guests",
      "Handover and move-in / move-out flows",
      "Arabic / English with RTL"
    ],
    highlights: [
      "Delivered guest registration end to end against the Farvision and OCI API Gateway back-ends",
      "Owned handover and move-in/out flows, including temporary backend workarounds agreed with the team and tracked for removal",
      "Drove pixel-level Figma parity across 20+ screens, raising measured design match from ~30% to ~70%",
      "Maintain a Paparazzi snapshot-test suite of 1,400+ tests plus mockk unit tests",
      "Review teammates' pull requests and coordinate API contracts with backend and iOS"
    ]
  },
  {
    slug: "ammni",
    name: "Ammni",
    tagline: "Insurance marketplace for the Saudi market.",
    tag: "Technzone · Android",
    period: "2024 – 2026",
    role: "Android Software Engineer, feature owner for the motor insurance flow",
    image: "images/ammni.jpg",
    gallery: ["images/gallery/ammni-1.jpg", "images/gallery/ammni-2.jpg", "images/gallery/ammni-3.jpg", "images/gallery/ammni-4.jpg"],
    links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.technzone.ammni" }],
    stack: ["Kotlin", "Jetpack Compose", "Material 3", "MVI", "Dagger / Anvil", "Retrofit", "Moshi", "HyperPay"],
    overview: [
      "Ammni compares and sells motor, travel and medical malpractice insurance in Saudi Arabia. Users enter their details, receive live offers from multiple insurers, compare them side by side and pay in the app.",
      "I built the end-to-end motor insurance purchase flow and contributed to the architecture of a 30+ module codebase."
    ],
    features: [
      "Four-step motor insurance wizard: vehicle details, live offers, comparison, checkout",
      "Live offer aggregation from multiple insurers with sorting, filtering and deductible selection",
      "Additional coverages and side-by-side comparison",
      "HyperPay payments: mada, Visa / Mastercard, MisPay, with OTP-verified checkout",
      "OTP login, biometric authentication, IBAN verification, vehicle ownership transfer",
      "Arabic / English with RTL and runtime language switching"
    ],
    highlights: [
      "Multi-module codebase of 30+ Gradle modules with api/impl separation",
      "MVI with reducers, middlewares and effects, Dagger/Anvil dependency injection",
      "Parallel per-company quote fetching with shimmer loading states",
      "AES-encrypted API payloads and token refresh",
      "Reusable Compose component library: searchable dropdowns, OTP views, countdown timers, payment grids"
    ]
  },
  {
    slug: "parkaway",
    name: "Parkaway",
    tagline: "Find, book and pay for parking, with a 3D view of the lot.",
    tag: "Technzone · Android",
    period: "2022 – 2024",
    role: "Android Software Engineer, maintained and shipped the app across multiple releases",
    image: "images/parkaway.jpg",
    gallery: ["images/gallery/parkaway-1.jpg", "images/gallery/parkaway-2.jpg", "images/gallery/parkaway-3.jpg", "images/gallery/parkaway-4.jpg"],
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.technzone.parkaway" },
      { label: "Employee app", href: "https://play.google.com/store/apps/details?id=com.technzone.parkaway_employess" }
    ],
    stack: ["Kotlin", "MVVM", "Hilt", "Coroutines / Flow", "Retrofit", "Room", "Paging 3", "WorkManager", "Unity (IL2CPP)", "Firebase", "HyperPay"],
    overview: [
      "Parkaway lets drivers find a parking spot, book it, pay and get a QR pass, with an embedded Unity 3D engine that shows the lot and lets the user pick the exact spot. It also sells subscriptions, an in-app wallet and car-wash bookings.",
      "I developed and maintained the customer app and the companion Parkaway Employee app across multiple Play Store releases, and built the system that updates the 3D content without shipping a new app version."
    ],
    features: [
      "Parking search on Google Maps and 3D lot visualisation in Unity",
      "Booking with QR-code passes, in-app wallet and subscription bundles",
      "Car-wash booking",
      "Push notifications, dark mode, Arabic / English RTL"
    ],
    highlights: [
      "Embedded Unity 3D (IL2CPP) module inside the native Android app",
      "Over-the-air Unity asset updates: versioned releases from the GitHub Releases API, streamed download with Flow progress, validation and rollback to the previous version on failure. 3D content ships without a new app release and install size dropped",
      "Hybrid WebView-to-native bridge for the map flow via the Activity Result API",
      "HyperPay (OPPWA) SDK with 3D Secure and saved cards",
      "Firebase Cloud Messaging and Crashlytics"
    ]
  },
  {
    slug: "mashroo3i",
    name: "Mashroo3i",
    tagline: "Marketplace for Jordanian home businesses.",
    tag: "Personal · Android · Google Play",
    period: "2021",
    role: "Designer and developer",
    image: null,
    links: [],
    stack: ["Kotlin", "Android SDK", "Google Maps", "SMS OTP", "Arabic RTL"],
    overview: [
      "Mashroo3i (مشروعي) lets families open a home store and sell home-made food, sweets and handicrafts as a source of household income. Buyers discover nearby stores, browse by category and order with delivery to a pinned location.",
      "Published on Google Play with a fully Arabic RTL interface."
    ],
    features: [
      "Seller side: store creation, description, governorate, map location, working hours, multi-image listings with pricing",
      "Buyer side: featured stores, categories, nearest stores by location, product search",
      "Cart and checkout with a map-based delivery picker, order notes and history",
      "Direct seller contact",
      "Phone registration with SMS OTP"
    ],
    highlights: [
      "Location-aware discovery with Google Maps",
      "SMS OTP registration and session management",
      "Bottom-navigation architecture across home, store, cart and orders"
    ]
  }
];
