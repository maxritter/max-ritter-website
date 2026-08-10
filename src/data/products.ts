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
      "My own engineering framework: spec-driven development, enforced TDD and quality gates for Claude Code and Codex CLI. 1.8k stars.",
    description:
      "Coding agents write fast but skip tests, lose context and drift. Pilot Shell installs on top of Claude Code and Codex CLI and adds the structure they lack: /prd shapes an idea into requirements, /spec plans and verifies a feature end-to-end with TDD, /build loops build-and-judge until every acceptance criterion passes, and /fix resolves bugs at the root cause with a reproducing test. Quality hooks lint, format and type-check every edit; persistent memory carries decisions across sessions; everything stays on your machine.",
    facts: ["1.8k+ GitHub stars", "macOS / Linux / WSL2", "Claude Code & Codex CLI"],
    inBox: [
      "Workflows: /prd, /spec, /build, /fix - TDD enforced",
      "Quality hooks on every edit",
      "Persistent memory + semantic code search",
      "Local console: specs, sessions, diffs, usage",
      "MCP & LSP servers pre-wired",
    ],
    website: { url: "https://pilot-shell.com/", label: "pilot-shell.com" },
    repo: { url: "https://github.com/maxritter/pilot-shell", label: "GitHub" },
    applicationCategory: "DeveloperApplication",
    operatingSystem: "macOS, Linux, Windows (WSL2)",
  },
  {
    slug: "bahnsparer",
    name: "Bahnsparer",
    tagline: "Günstiger ans Ziel - fare alerts for German rail",
    status: "beta",
    statusLabel: "Public beta",
    summary:
      "iOS and Android app that watches Deutsche Bahn fares and tells you when your trip gets cheaper.",
    description:
      "Bahnsparer watches Deutsche Bahn Sparpreis fares so you don't have to. Fix your travel day and it monitors exactly that day in the background, notifying you on every new low - and warning you when the cheap contingent sells out. Stay flexible and a four-week calendar shows the cheapest fare for every day at a glance, with DB and FlixTrain ranked in one list and each train's punctuality record next to its price.",
    facts: ["iOS & Android", "Free, no account", "Data stays on device"],
    inBox: [
      "Background price monitoring with alerts",
      "Four-week price calendar",
      "Split tickets, Deutschlandticket, BahnCard math",
      "DB and FlixTrain in one ranked list",
      "No account, no tracking",
    ],
    website: { url: "https://bahnsparer.de/", label: "bahnsparer.de" },
    applicationCategory: "TravelApplication",
    operatingSystem: "iOS, Android",
  },
  {
    slug: "diy-thermocam",
    name: "DIY-Thermocam",
    tagline: "Open-source thermal imaging for everyone",
    status: "open",
    statusLabel: "Open source",
    summary:
      "An open-source thermal imaging camera built around the FLIR Lepton sensor. 1.2k stars, 179 forks.",
    description:
      "A do-it-yourself thermal imager built around the FLIR Lepton sensor - firmware, PCB, enclosure and a full desktop suite, all public. Designed as a self-assembly kit buildable at home with standard tools; used for finding heat leaks, analysing electronics, and drone-mounted capture. It began as my bachelor thesis and became a platform used by makers, schools and companies.",
    facts: ["1.2k+ GitHub stars", "179 forks", "C/C++ · FLIR Lepton"],
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
