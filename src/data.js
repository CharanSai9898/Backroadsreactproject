import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.instagram.com", icon: "fa-brands fa-instagram" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: `Enjoy affordable travel packages without compromising on quality. We offer great value, exclusive deals, and unforgettable experiences for every budget.`,
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: `Discover breathtaking hiking trails through mountains, forests, and scenic landscapes, guided by experienced professionals for a safe and exciting adventure.`,
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: `Travel with confidence and relax in carefully selected accommodations, comfortable transportation, and thoughtfully planned itineraries.`,
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    date: `august 26th, 2020 `,
    tourtitle: "Tibet Adventure ",
    tourinfo: ` Experience the breathtaking beauty of Tibet with scenic mountain landscapes, ancient monasteries, and rich cultural heritage on an unforgettable journey.`,
    tourmap: "fas fa-map",
    tourCountry: "china",
    tourdays: "6 days",
    tourAmount: `from $2100`,
  },
  {
    id: 2,
    img: tour2,
    date: `october 1th, 2020 `,
    tourtitle: " best of java ",
    tourinfo: `Explore the heart of Indonesia through lush rice terraces, volcanic landscapes, vibrant local culture, and unforgettable island adventures.`,
    tourmap: "fas fa-map",
    tourCountry: "indonesia",
    tourdays: "11 days",
    tourAmount: `from $1400`,
  },
  {
    id: 3,
    img: tour3,
    date: `september 15th, 2020 `,
    tourtitle: " explore hong kong",
    tourinfo: ` Discover the perfect blend of modern skyscrapers, cultural landmarks, world-class shopping, and stunning skyline views in Hong Kong.`,
    tourmap: "fas fa-map",
    tourCountry: "hong kong",
    tourdays: "8 days",
    tourAmount: `from $5000`,
  },
  {
    id: 4,
    img: tour4,
    date: `december 5th, 2019 `,
    tourtitle: "kenya highlights ",
    tourinfo: `Embark on an exciting African safari, witness incredible wildlife, explore breathtaking national parks, and experience Kenya's rich natural beauty.`,
    tourmap: "fas fa-map",
    tourCountry: "kenya",
    tourdays: "20 days",
    tourAmount: `from $3300`,
  },
  {
    id: 5,
    img: tour5,
    date: `march 18th, 2021`,
    tourtitle: "african safari",
    tourinfo: `Experience the thrill of an authentic African safari, encounter majestic wildlife, and explore breathtaking savannas with expert-guided adventures.`,
    tourmap: "fas fa-map",
    tourCountry: "South Africa",
    tourdays: "10 days",
    tourAmount: `from $2800`,
  },
  {
    id: 6,
    img: tour6,
    date: `january 12th, 2022`,
    tourtitle: "taj mahal escape",
    tourinfo: `Discover the timeless beauty of the Taj Mahal, explore India's rich history, vibrant culture, and iconic landmarks on an unforgettable journey.`,
    tourmap: "fas fa-map",
    tourCountry: "India",
    tourdays: "7 days",
    tourAmount: `from $1800`,
  },
];