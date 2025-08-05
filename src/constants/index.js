import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const govvServices = [
  "36V Li-ion Battery",
  "35-40km Range",
  "25km/hr Speed",
];

export const govvServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Quality & Accessibility",
    text: "GoVV's rigorous QA and high-grade components ensure every ride is safe and durable. Cost-efficient design and expansive service network make electric mobility truly accessible.",
    date: "2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Innovative Design",
    text: "Modular frame and long-lasting rechargeable battery system deliver unmatched adaptability and ease of use. Sleek ergonomics and integrated smart interface elevate rider experience.",
    date: "2024",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Environmental Protection",
    text: "Zero-emission rides and recyclable materials. Reducing urban pollution and promoting sustainable manufacturing to power cleaner commutes.",
    date: "2024",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Smart Mobility Platform",
    text: "Comprehensive e-mobility ecosystem with fleet-management software, charging hubs, and unified smart-mobility platform for seamless travel.",
    date: "2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Engineered to address India's acute urban transport challenges at scale. Our rugged, zero-emission vehicles and unified smart-mobility platform deliver seamless, cost-effective travel while driving down carbon footprints.";

export const collabContent = [
  {
    id: "0",
    title: "Last Mile Connectivity",
    text: collabText,
  },
  {
    id: "1",
    title: "Zero Emissions",
  },
  {
    id: "2",
    title: "Smart Fleet Management",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Universities",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Tech Parks",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Campuses",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Institutions",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Corporate",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Urban Areas",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Peri-urban",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Smart Cities",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Campus Rider",
    description: "Compact e-cycle for campus mobility",
    price: "Contact",
    features: [
      "36V Li-ion Battery with 35-40km range",
      "25km/hr speed with pedal assist",
      "Steel step-through frame with front suspension",
    ],
  },
  {
    id: "1",
    title: "Fleet Solution",
    description: "Smart fleet management for institutions",
    price: "Contact",
    features: [
      "Comprehensive fleet management software",
      "Charging hub infrastructure",
      "Real-time tracking and analytics",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom solutions for large deployments",
    price: null,
    features: [
      "Custom fleet management solutions",
      "Dedicated support and maintenance",
      "Strategic partnership opportunities",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Quality & Accessibility",
    text: "Rigorous QA and high-grade components ensure every ride is safe and durable. Cost-efficient design makes electric mobility truly accessible.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Innovative Design",
    text: "Modular frame and long-lasting rechargeable battery system deliver unmatched adaptability and ease of use with sleek ergonomics.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Environmental Protection",
    text: "Zero-emission rides and recyclable materials. Reducing urban pollution and promoting sustainable manufacturing for cleaner commutes.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Smart Technology",
    text: "App-enabled ride tracking, integrated smart interface, and fleet management software for seamless campus mobility.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Last Mile Connectivity",
    text: "Addressing India's acute urban transport challenges with comprehensive e-mobility ecosystem for universities and tech parks.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Durability & Safety",
    text: "Steel step-through frame, dual disc brakes, LED lighting with horn, and dust-proof pedal assist sensor for reliable performance.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
