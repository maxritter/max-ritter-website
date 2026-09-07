export interface ProductLink {
  url: string;
  label: string;
}

export type ProductStatus = "live" | "beta" | "open";

export interface Product {
  /** Stable slug: anchor id on /projects and basename of the logo in /public/projects. */
  slug: string;
  name: string;
  tagline: string;
  status: ProductStatus;
  statusLabel: string;
  /** One-liner used on the home page index. */
  summary: string;
  /** Full paragraph on the /projects page. */
  description: string;
  /** Short mono facts row. */
  facts: string[];
  /** "In the box" side list on the /projects page. */
  inBox: string[];
  website: ProductLink;
  repo?: ProductLink;
  /** schema.org SoftwareApplication fields. */
  applicationCategory: string;
  operatingSystem: string;
}

export const products: Product[] = [
  {
    slug: "pilot-shell",
    name: "Pilot Shell",
    tagline: "How real engineers run Claude Code and Codex",
    status: "live",
    statusLabel: "Live product",
    summary:
      "A context and harness engineering system around Claude Code and Codex: persistent knowledge, enforced quality gates and runtime proof, installed with one command. 2k+ GitHub stars.",
    description:
      "Claude Code and Codex write code fast. Pilot Shell is the harness around them that makes the output production-grade: quality gates on every layer, memory that survives sessions and travels through the repo, code intelligence in the toolchain, and runtime proof before anything counts as done.",
    facts: ["2k+ GitHub stars", "macOS / Linux / WSL2", "Claude Code & Codex"],
    inBox: [
      "Quality hooks and review gates on every layer",
      "Memory that persists and is shared through the repo",
      "Semble semantic search and CodeGraph",
      "Runtime proof: tests, builds, browser, device",
      "Console for plan and diff review",
    ],
    website: { url: "https://pilot-shell.com/", label: "pilot-shell.com" },
    repo: { url: "https://github.com/maxritter/pilot-shell", label: "GitHub" },
    applicationCategory: "DeveloperApplication",
    operatingSystem: "macOS, Linux, Windows (WSL2)",
  },
  {
    slug: "bahnsparer",
    name: "Bahnsparer",
    tagline: "Fares, reliability and live journeys for German rail",
    status: "live",
    statusLabel: "Live product",
    summary:
      "Compares German rail fares, travel time and historical reliability, watches prices for a day or a range, follows the booked trip live and prepares a possible passenger-rights claim. iOS, Android and desktop.",
    description:
      "Bahnsparer compares fares, travel time and historical reliability across operators, then watches a fixed day or a range of up to 14 days for a better price. After booking, it follows the trip live, records the arrival and prepares the facts for a possible passenger-rights claim. Every request runs on your device, and there is no account.",
    facts: ["iOS, Android & desktop", "Free, no account", "Data stays on device"],
    inBox: [
      "Price, travel time and reliability in one comparison",
      "Alerts for a fixed day, a range or a recurring trip",
      "Live trip: times, platforms, transfer risk, alternatives",
      "Recorded arrival and passenger-rights claim prep",
      "No account, no fare-search backend",
    ],
    website: { url: "https://bahnsparer.de/", label: "bahnsparer.de" },
    applicationCategory: "TravelApplication",
    operatingSystem: "iOS, Android, macOS, Windows, Linux",
  },
  {
    slug: "diy-thermocam",
    name: "DIY-Thermocam",
    tagline: "Open-source thermal imaging for everyone",
    status: "open",
    statusLabel: "Open source",
    summary:
      "An open-source thermal imaging camera built around the FLIR Lepton sensor. 1.2k stars, 181 forks.",
    description:
      "A do-it-yourself thermal imager around the FLIR Lepton sensor: firmware, PCB, enclosure and desktop suite, all public and buildable at home with standard tools. It began as my bachelor thesis and is now used by makers, schools and companies.",
    facts: ["1.2k+ GitHub stars", "181 forks", "C/C++ · FLIR Lepton"],
    inBox: [
      "Open firmware for FLIR Lepton 2.5 / 3.1R / 3.5",
      "Custom PCB and self-assembly enclosure",
      "Desktop suite: analysis, live view, converter",
      "USB serial streaming and mass storage",
    ],
    website: { url: "https://www.diy-thermocam.net/", label: "diy-thermocam.net" },
    repo: { url: "https://github.com/maxritter/diy-thermocam", label: "GitHub" },
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
  },
];

const SITE_URL = "https://www.maxritter.net";

/** schema.org SoftwareApplication node for a product. */
export const productSchema = (product: Product): Record<string, unknown> => ({
  "@type": "SoftwareApplication",
  name: product.name,
  alternateName: product.tagline,
  description: product.summary,
  url: product.website.url,
  image: `${SITE_URL}/projects/${product.slug}.png`,
  applicationCategory: product.applicationCategory,
  operatingSystem: product.operatingSystem,
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  author: { "@type": "Person", name: "Max Ritter", url: `${SITE_URL}/` },
  ...(product.repo ? { codeRepository: product.repo.url } : {}),
});
