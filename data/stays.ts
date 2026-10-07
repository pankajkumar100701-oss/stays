export type StayType =
  | "Villa"
  | "Cottage"
  | "Cabin"
  | "Houseboat"
  | "Haveli"
  | "Hostel"
  | "Apartment"
  | "Treehouse";

export type Review = {
  name: string;
  from: string;
  date: string;
  rating: number;
  text: string;
};

export type Stay = {
  slug: string;
  name: string;
  type: StayType;
  city: string;
  area: string;
  state: string;
  pricePerNight: number;
  cleaningFee: number;
  rating: number;
  reviewCount: number;
  maxGuests: number;
  bedrooms: number;
  beds: number;
  baths: number;
  images: string[];
  host: { name: string; since: number; superhost: boolean; languages: string[] };
  tagline: string;
  description: string;
  highlights: { title: string; text: string }[];
  amenities: string[];
  reviews: Review[];
  featured?: boolean;
};

export const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=75&auto=format&fit=crop`;

export const STAY_TYPES: { type: StayType; icon: string }[] = [
  { type: "Villa", icon: "🏡" },
  { type: "Cottage", icon: "🛖" },
  { type: "Cabin", icon: "🌲" },
  { type: "Houseboat", icon: "⛵" },
  { type: "Haveli", icon: "🏰" },
  { type: "Treehouse", icon: "🌳" },
  { type: "Hostel", icon: "🎒" },
  { type: "Apartment", icon: "🏙️" },
];

export const DESTINATIONS = [
  { city: "Goa", blurb: "Beaches & susegad vibes", image: img("1512343879784-a960bf40e7f2", 800) },
  { city: "Manali", blurb: "Pine forests & snow peaks", image: img("1626621341517-bbf3d9990a23", 800) },
  { city: "Jaipur", blurb: "Pink city, royal havelis", image: img("1477587458883-47145ed94245", 800) },
  { city: "Alleppey", blurb: "Backwaters of Kerala", image: img("1602216056096-3b40cc0c9944", 800) },
  { city: "Srinagar", blurb: "Houseboats on Dal Lake", image: img("1595815771614-ade9d652a65d", 800) },
  { city: "Rishikesh", blurb: "Ganga, yoga & rafting", image: img("1609920658906-8223bd289001", 800) },
];

export const HERO_IMAGE = img("1596394516093-501ba68a0ba6", 2000);

export const stays: Stay[] = [
  {
    slug: "casa-azul-assagao",
    name: "Casa Azul",
    type: "Villa",
    city: "Goa",
    area: "Assagao",
    state: "Goa",
    pricePerNight: 14500,
    cleaningFee: 1500,
    rating: 4.92,
    reviewCount: 128,
    maxGuests: 8,
    bedrooms: 4,
    beds: 5,
    baths: 4,
    images: [
      img("1564013799919-ab600027ffc6"),
      img("1540541338287-41700207dee6"),
      img("1505693416388-ac5ce068fe85"),
      img("1484154218962-a197022b5858"),
      img("1610641818989-c2051b5e2cfd"),
    ],
    host: { name: "Rhea D'Souza", since: 2018, superhost: true, languages: ["English", "Hindi", "Konkani"] },
    tagline: "Private pool villa, 10 minutes from Vagator beach",
    description:
      "A sunlit Portuguese-style villa tucked into the quiet lanes of Assagao. Spend mornings by the private pool, evenings at the beach shacks of Vagator, and nights under the stars on our rooftop deck. Perfect for families and groups of friends.",
    highlights: [
      { title: "Private pool", text: "All yours, from sunrise swims to midnight dips." },
      { title: "Self check-in", text: "Smart lock — arrive whenever your flight lands." },
      { title: "Chef on call", text: "Goan fish curry cooked at home, on request." },
    ],
    amenities: ["Private pool", "Wi-Fi", "Air conditioning", "Kitchen", "Free parking", "Chef on request", "Washing machine", "Garden", "Power backup"],
    reviews: [
      { name: "Ananya", from: "Bengaluru", date: "Sep 2026", rating: 5, text: "Absolutely gorgeous villa. Rhea's team arranged a surprise birthday dinner for us by the pool!" },
      { name: "Karan", from: "Delhi", date: "Aug 2026", rating: 5, text: "Clean, spacious and peaceful. The best base for exploring North Goa." },
      { name: "Meera", from: "Pune", date: "Jul 2026", rating: 4, text: "Loved it. Monsoon was magical here, just carry mosquito repellent." },
    ],
    featured: true,
  },
  {
    slug: "palolem-palm-shack",
    name: "Palm Shack by the Sea",
    type: "Cottage",
    city: "Goa",
    area: "Palolem",
    state: "Goa",
    pricePerNight: 4200,
    cleaningFee: 400,
    rating: 4.78,
    reviewCount: 214,
    maxGuests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    images: [
      img("1499793983690-e29da59ef1c2"),
      img("1507525428034-b723cf961d3e"),
      img("1582719478250-c89cae4dc85b"),
      img("1512343879784-a960bf40e7f2"),
    ],
    host: { name: "Savio Fernandes", since: 2016, superhost: true, languages: ["English", "Konkani"] },
    tagline: "Wake up to waves — a beachfront hut for two",
    description:
      "A breezy wooden cottage steps from Palolem's crescent beach. Hammocks, sea views and the sound of waves. Ideal for couples looking to slow down.",
    highlights: [
      { title: "Beachfront", text: "Literally 20 steps from the sand." },
      { title: "Great for couples", text: "Rated 4.9 by couples for romance." },
      { title: "Kayaks included", text: "Paddle out to Butterfly Beach at dawn." },
    ],
    amenities: ["Sea view", "Wi-Fi", "Fan", "Hammock", "Breakfast included", "Kayaks", "Outdoor shower"],
    reviews: [
      { name: "Rohit", from: "Mumbai", date: "Sep 2026", rating: 5, text: "Sunsets from the porch are unreal. Savio is the warmest host." },
      { name: "Sneha", from: "Hyderabad", date: "Mar 2026", rating: 5, text: "Simple, clean and right on the beach. Would come back every year." },
    ],
    featured: true,
  },
  {
    slug: "old-manali-pine-cabin",
    name: "Pine Log Cabin",
    type: "Cabin",
    city: "Manali",
    area: "Old Manali",
    state: "Himachal Pradesh",
    pricePerNight: 5800,
    cleaningFee: 600,
    rating: 4.89,
    reviewCount: 176,
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    baths: 1,
    images: [
      img("1587061949409-02df41d5e562"),
      img("1449158743715-0a90ebb6d2d8"),
      img("1590490360182-c33d57733427"),
      img("1510798831971-661eb04b3739"),
      img("1626621341517-bbf3d9990a23"),
    ],
    host: { name: "Tashi Negi", since: 2017, superhost: true, languages: ["Hindi", "English", "Pahari"] },
    tagline: "Cosy wooden cabin with a fireplace in the pines",
    description:
      "Handbuilt from deodar wood, our cabin sits in an apple orchard above Old Manali. Light the fireplace, sip kahwa on the balcony, and watch snow settle on the peaks.",
    highlights: [
      { title: "Fireplace", text: "Firewood stacked and ready every evening." },
      { title: "Mountain views", text: "Wake up facing the Dhauladhar range." },
      { title: "Home-cooked meals", text: "Siddu and rajma-chawal by Tashi's mother." },
    ],
    amenities: ["Fireplace", "Wi-Fi", "Heater", "Mountain view", "Kitchen", "Free parking", "Room service", "Bonfire"],
    reviews: [
      { name: "Aditya", from: "Chandigarh", date: "Jan 2026", rating: 5, text: "We got snowed in and it was the best thing ever. So cosy." },
      { name: "Priya", from: "Kolkata", date: "Oct 2025", rating: 5, text: "Tashi's family made us feel like part of their home." },
    ],
    featured: true,
  },
  {
    slug: "kasol-riverside-hostel",
    name: "Parvati Riverside Hostel",
    type: "Hostel",
    city: "Manali",
    area: "Kasol",
    state: "Himachal Pradesh",
    pricePerNight: 900,
    cleaningFee: 0,
    rating: 4.61,
    reviewCount: 532,
    maxGuests: 1,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    images: [
      img("1555854877-bab0e564b8d5"),
      img("1520277739336-7bf67edfa768"),
      img("1609920658906-8223bd289001"),
      img("1464822759023-fed622ff2c3b"),
    ],
    host: { name: "Vikram & crew", since: 2019, superhost: false, languages: ["Hindi", "English", "Hebrew"] },
    tagline: "Bunk beds, bonfires and backpackers by the river",
    description:
      "A lively hostel on the banks of the Parvati river. Meet travellers from around the world, join our Kheerganga treks, and jam around the bonfire every night.",
    highlights: [
      { title: "Social vibe", text: "Bonfire, music and community dinners nightly." },
      { title: "Treks organised", text: "Kheerganga, Tosh and Malana with local guides." },
      { title: "Work-friendly", text: "Fast Wi-Fi and a quiet co-working loft." },
    ],
    amenities: ["Wi-Fi", "Lockers", "Common kitchen", "Café", "Bonfire", "Hot water", "Co-working space"],
    reviews: [
      { name: "Arjun", from: "Jaipur", date: "May 2026", rating: 5, text: "Made so many friends. Staff are super chill and helpful." },
      { name: "Lisa", from: "Berlin", date: "Apr 2026", rating: 4, text: "Great vibe, river sounds at night. Bathrooms get busy in mornings." },
    ],
  },
  {
    slug: "haveli-gulabi-jaipur",
    name: "Haveli Gulabi",
    type: "Haveli",
    city: "Jaipur",
    area: "Old City",
    state: "Rajasthan",
    pricePerNight: 8900,
    cleaningFee: 800,
    rating: 4.95,
    reviewCount: 98,
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    baths: 2,
    images: [
      img("1599661046289-e31897846e41"),
      img("1477587458883-47145ed94245"),
      img("1582719478250-c89cae4dc85b"),
      img("1590490360182-c33d57733427"),
    ],
    host: { name: "Thakur Raghavendra Singh", since: 2015, superhost: true, languages: ["Hindi", "English", "Marwari"] },
    tagline: "Stay like royalty in a 200-year-old family haveli",
    description:
      "Frescoed walls, jharokha windows and a rooftop overlooking Hawa Mahal. Our family has lived here for six generations — now we share it with travellers who love heritage.",
    highlights: [
      { title: "Heritage home", text: "A 200-year-old haveli, lovingly restored." },
      { title: "Rooftop dinners", text: "Dal baati churma with Hawa Mahal views." },
      { title: "Walking distance", text: "Bazaars and City Palace a short stroll away." },
    ],
    amenities: ["Air conditioning", "Wi-Fi", "Rooftop terrace", "Breakfast included", "Airport pickup", "Courtyard", "Cultural evenings"],
    reviews: [
      { name: "Nikhil", from: "Bengaluru", date: "Feb 2026", rating: 5, text: "Felt like stepping into history. Breakfast on the rooftop was a dream." },
      { name: "Emma", from: "London", date: "Dec 2025", rating: 5, text: "The family's stories were the highlight of our India trip." },
    ],
    featured: true,
  },
  {
    slug: "alleppey-kettuvallam",
    name: "Kettuvallam Houseboat",
    type: "Houseboat",
    city: "Alleppey",
    area: "Punnamada Lake",
    state: "Kerala",
    pricePerNight: 9800,
    cleaningFee: 0,
    rating: 4.84,
    reviewCount: 143,
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    baths: 2,
    images: [
      img("1602216056096-3b40cc0c9944"),
      img("1593693397690-362cb9666fc2"),
      img("1595576508898-0ad5c879a061"),
      img("1520250497591-112f2f40a3f4"),
    ],
    host: { name: "Joseph Mathew", since: 2014, superhost: true, languages: ["Malayalam", "English", "Hindi"] },
    tagline: "Float through Kerala's backwaters with all meals included",
    description:
      "A traditional kettuvallam crafted from jackwood and coir. Drift past paddy fields and coconut groves while our chef cooks fresh karimeen pollichathu on board.",
    highlights: [
      { title: "All meals included", text: "Kerala sadya, fresh fish and tender coconut." },
      { title: "Overnight cruise", text: "Anchor in a quiet canal under the stars." },
      { title: "Private crew", text: "Captain, chef and helper just for you." },
    ],
    amenities: ["All meals included", "Air conditioning", "Sun deck", "Private crew", "Lake view", "Fishing"],
    reviews: [
      { name: "Siddharth", from: "Chennai", date: "Aug 2026", rating: 5, text: "Food was outstanding and the crew so caring. Pure peace." },
      { name: "Fatima", from: "Lucknow", date: "Jan 2026", rating: 4, text: "Beautiful experience. AC runs only at night, which was fine." },
    ],
    featured: true,
  },
  {
    slug: "dal-lake-shikara-houseboat",
    name: "Gul-e-Dal Houseboat",
    type: "Houseboat",
    city: "Srinagar",
    area: "Dal Lake",
    state: "Jammu & Kashmir",
    pricePerNight: 7200,
    cleaningFee: 500,
    rating: 4.87,
    reviewCount: 87,
    maxGuests: 3,
    bedrooms: 1,
    beds: 2,
    baths: 1,
    images: [
      img("1595815771614-ade9d652a65d"),
      img("1631049307264-da0ec9d70304"),
      img("1506905925346-21bda4d32df4"),
      img("1618773928121-c32242e63f39"),
    ],
    host: { name: "Bilal Wani", since: 2016, superhost: true, languages: ["Kashmiri", "Urdu", "English", "Hindi"] },
    tagline: "Carved walnut houseboat with free shikara rides",
    description:
      "Hand-carved walnut interiors, Kashmiri carpets and a front porch right on Dal Lake. Morning shikara rides to the floating vegetable market are on us.",
    highlights: [
      { title: "Free shikara ride", text: "Sunrise ride to the floating market daily." },
      { title: "Kashmiri kahwa", text: "Saffron kahwa served every evening." },
      { title: "Heated rooms", text: "Bukhari and electric blankets in winter." },
    ],
    amenities: ["Lake view", "Heater", "Wi-Fi", "Breakfast included", "Shikara ride", "Airport pickup"],
    reviews: [
      { name: "Ritika", from: "Ahmedabad", date: "Jun 2026", rating: 5, text: "Bilal bhai's hospitality is unmatched. Woodwork is stunning." },
      { name: "Manav", from: "Indore", date: "May 2026", rating: 5, text: "Waking up on the lake felt unreal. Must-do in Srinagar." },
    ],
  },
  {
    slug: "rishikesh-ganga-treehouse",
    name: "Ganga View Treehouse",
    type: "Treehouse",
    city: "Rishikesh",
    area: "Tapovan",
    state: "Uttarakhand",
    pricePerNight: 6400,
    cleaningFee: 500,
    rating: 4.9,
    reviewCount: 112,
    maxGuests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    images: [
      img("1586375300773-8384e3e4916f"),
      img("1596394516093-501ba68a0ba6"),
      img("1609920658906-8223bd289001"),
      img("1585409677983-0f6c41ca9c3b"),
    ],
    host: { name: "Ishaan Rawat", since: 2020, superhost: true, languages: ["Hindi", "English", "Garhwali"] },
    tagline: "Sleep among the trees, with the Ganga below",
    description:
      "A treehouse perched in the forest above Tapovan with an open-air deck facing the river. Morning yoga on the deck, aarti at the ghats in the evening.",
    highlights: [
      { title: "Yoga deck", text: "Free sunrise yoga session with a local teacher." },
      { title: "River views", text: "The Ganga glitters right below your deck." },
      { title: "Rafting deals", text: "Discounted rafting from Shivpuri." },
    ],
    amenities: ["River view", "Wi-Fi", "Yoga deck", "Breakfast included", "Hot water", "Forest walk"],
    reviews: [
      { name: "Tanvi", from: "Mumbai", date: "Mar 2026", rating: 5, text: "Magical. Fell asleep to the river and birds. Ishaan is lovely." },
      { name: "Rahul", from: "Gurugram", date: "Nov 2025", rating: 5, text: "The most unique stay I've ever booked." },
    ],
    featured: true,
  },
  {
    slug: "coorg-coffee-estate",
    name: "Coffee Estate Bungalow",
    type: "Villa",
    city: "Coorg",
    area: "Madikeri",
    state: "Karnataka",
    pricePerNight: 11200,
    cleaningFee: 1000,
    rating: 4.86,
    reviewCount: 74,
    maxGuests: 6,
    bedrooms: 3,
    beds: 3,
    baths: 3,
    images: [
      img("1566073771259-6a8506099945"),
      img("1520250497591-112f2f40a3f4"),
      img("1595576508898-0ad5c879a061"),
      img("1505693416388-ac5ce068fe85"),
    ],
    host: { name: "Kaveri Ponnappa", since: 2017, superhost: false, languages: ["Kodava", "Kannada", "English"] },
    tagline: "Planter's bungalow in a 40-acre coffee estate",
    description:
      "A colonial-era planter's bungalow surrounded by coffee and pepper. Take a guided plantation walk, swim in the infinity pool and taste coffee roasted on the estate.",
    highlights: [
      { title: "Plantation walk", text: "Bean-to-cup tour with the estate manager." },
      { title: "Infinity pool", text: "Overlooking misty hills and coffee bushes." },
      { title: "Kodava cuisine", text: "Pandi curry and akki roti, cooked fresh." },
    ],
    amenities: ["Pool", "Wi-Fi", "Plantation tour", "Breakfast included", "Free parking", "Bonfire", "Garden"],
    reviews: [
      { name: "Varun", from: "Mysuru", date: "Jul 2026", rating: 5, text: "Monsoon in Coorg at this estate — pure bliss. Coffee is amazing." },
      { name: "Ira", from: "Kochi", date: "Dec 2025", rating: 4, text: "Gorgeous property, roads are bumpy near the estate gate." },
    ],
  },
  {
    slug: "lonavala-glass-house",
    name: "The Glass House",
    type: "Villa",
    city: "Lonavala",
    area: "Tungarli",
    state: "Maharashtra",
    pricePerNight: 18500,
    cleaningFee: 2000,
    rating: 4.81,
    reviewCount: 61,
    maxGuests: 10,
    bedrooms: 5,
    beds: 6,
    baths: 5,
    images: [
      img("1600585154340-be6161a56a0c"),
      img("1613490493576-7fde63acd811"),
      img("1600596542815-ffad4c1539a9"),
      img("1618773928121-c32242e63f39"),
    ],
    host: { name: "Aarav Mehta", since: 2021, superhost: false, languages: ["English", "Hindi", "Marathi"] },
    tagline: "Modern glass villa with pool — 2 hrs from Mumbai",
    description:
      "Floor-to-ceiling glass, a heated pool and valley views. The ultimate weekend escape from Mumbai and Pune, with a home theatre for rainy evenings.",
    highlights: [
      { title: "Heated pool", text: "Swim even on cool monsoon nights." },
      { title: "Home theatre", text: "Projector, surround sound and bean bags." },
      { title: "Caretaker", text: "On-site staff for cooking and cleaning." },
    ],
    amenities: ["Private pool", "Wi-Fi", "Air conditioning", "Home theatre", "Kitchen", "Free parking", "BBQ grill", "Caretaker"],
    reviews: [
      { name: "Shreya", from: "Mumbai", date: "Aug 2026", rating: 5, text: "Perfect for our gang of 9. Pool + monsoon = heaven." },
      { name: "Kabir", from: "Pune", date: "Jun 2026", rating: 4, text: "Stunning design. Book the BBQ, the caretaker does it brilliantly." },
    ],
  },
  {
    slug: "bandra-sea-loft",
    name: "Bandra Sea Loft",
    type: "Apartment",
    city: "Mumbai",
    area: "Bandra West",
    state: "Maharashtra",
    pricePerNight: 6900,
    cleaningFee: 700,
    rating: 4.74,
    reviewCount: 190,
    maxGuests: 3,
    bedrooms: 1,
    beds: 2,
    baths: 1,
    images: [
      img("1522708323590-d24dbb6b0267"),
      img("1502672260266-1c1ef2d93688"),
      img("1560448204-e02f11c3d0e2"),
      img("1484154218962-a197022b5858"),
    ],
    host: { name: "Zoya Khan", since: 2018, superhost: true, languages: ["English", "Hindi", "Urdu"] },
    tagline: "Airy loft near Carter Road with a work desk",
    description:
      "A bright, plant-filled loft a 5-minute walk from Carter Road promenade. Great cafés downstairs, a proper work desk and fast fibre internet.",
    highlights: [
      { title: "Work-ready", text: "300 Mbps fibre and an ergonomic desk." },
      { title: "Prime location", text: "Carter Road and Bandstand within walking distance." },
      { title: "Self check-in", text: "Building security and keypad entry." },
    ],
    amenities: ["Wi-Fi", "Air conditioning", "Kitchen", "Workspace", "Washing machine", "Lift", "Power backup"],
    reviews: [
      { name: "Dev", from: "Bengaluru", date: "Sep 2026", rating: 5, text: "Ideal for a work trip. Zoya's café recommendations were spot on." },
      { name: "Pooja", from: "Surat", date: "Apr 2026", rating: 4, text: "Lovely flat, a bit of traffic noise but expected in Bandra." },
    ],
  },
  {
    slug: "udaipur-lakeside-retreat",
    name: "Pichola Lakeside Retreat",
    type: "Haveli",
    city: "Udaipur",
    area: "Lake Pichola",
    state: "Rajasthan",
    pricePerNight: 12800,
    cleaningFee: 1000,
    rating: 4.93,
    reviewCount: 156,
    maxGuests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    images: [
      img("1571896349842-33c89424de2d"),
      img("1542314831-068cd1dbfeeb"),
      img("1551882547-ff40c63fe5fa"),
      img("1590490360182-c33d57733427"),
    ],
    host: { name: "Devika Ranawat", since: 2016, superhost: true, languages: ["Hindi", "English", "Mewari"] },
    tagline: "Romantic lake-facing suite with a pool at sunset",
    description:
      "A boutique heritage retreat on the edge of Lake Pichola. Candlelit dinners by the pool, boat rides to Jag Mandir and views of the City Palace lit up at night.",
    highlights: [
      { title: "Lake-facing suite", text: "Watch the City Palace glow from your bed." },
      { title: "Sunset boat ride", text: "Complimentary ride on Lake Pichola." },
      { title: "Couples' favourite", text: "Popular for honeymoons and anniversaries." },
    ],
    amenities: ["Pool", "Lake view", "Air conditioning", "Wi-Fi", "Breakfast included", "Spa", "Boat ride"],
    reviews: [
      { name: "Aman & Kriti", from: "Delhi", date: "Feb 2026", rating: 5, text: "Our honeymoon was perfect. Devika arranged flowers and a cake!" },
      { name: "Sara", from: "Paris", date: "Nov 2025", rating: 5, text: "The most beautiful view I've woken up to in India." },
    ],
    featured: true,
  },
  {
    slug: "kasauli-red-roof-cottage",
    name: "Red Roof Cottage",
    type: "Cottage",
    city: "Kasauli",
    area: "Upper Mall",
    state: "Himachal Pradesh",
    pricePerNight: 4800,
    cleaningFee: 500,
    rating: 4.79,
    reviewCount: 69,
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    baths: 1,
    images: [
      img("1518780664697-55e3ad937233"),
      img("1464822759023-fed622ff2c3b"),
      img("1631049307264-da0ec9d70304"),
      img("1506905925346-21bda4d32df4"),
    ],
    host: { name: "Col. Harpreet Sandhu (Retd.)", since: 2019, superhost: false, languages: ["Punjabi", "Hindi", "English"] },
    tagline: "Quiet hillside cottage with valley views",
    description:
      "A charming red-roofed cottage on a grassy slope near Kasauli's Upper Mall. Books, board games, a sunny lawn and the best parathas in the hills.",
    highlights: [
      { title: "Valley views", text: "Sunsets over the Shivalik hills from the lawn." },
      { title: "Pet friendly", text: "Bring your dog — there's room to run." },
      { title: "Hearty breakfast", text: "Aloo parathas with homemade butter." },
    ],
    amenities: ["Mountain view", "Wi-Fi", "Heater", "Pet friendly", "Garden", "Breakfast included", "Free parking"],
    reviews: [
      { name: "Gurleen", from: "Ludhiana", date: "May 2026", rating: 5, text: "Uncle's stories and those parathas! Our dog loved the lawn too." },
      { name: "Neha", from: "Noida", date: "Dec 2025", rating: 4, text: "Peaceful and clean. A short uphill walk from the parking." },
    ],
  },
];

export const getStay = (slug: string) => stays.find((s) => s.slug === slug);

export const CITIES = Array.from(new Set(stays.map((s) => s.city))).sort();
