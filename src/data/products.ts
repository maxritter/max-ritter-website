import { Bot, Train, Thermometer, LucideIcon } from "lucide-react";

export interface ProductLink {
  url: string;
  label: string;
}

export interface Product {
  /** Stable slug — also the basename of the logo assets in /public/projects. */
  slug: string;
  name: string;
  tagline: string;
  category: string;
  /** Short lifecycle label rendered as a pill, e.g. "Live product". */
  status: string;
  /** One-liner used on the home page teaser. */
  summary: string;
  description: string;
  highlights: string[];
  facts: string[];
  icon: LucideIcon;
  /** True when the logo tile has a light background and needs a border to sit on the dark card. */
  logoOnLight: boolean;
  website: ProductLink;
  repo?: ProductLink;
  /** schema.org applicationCategory for the SoftwareApplication entry. */
  applicationCategory: string;
  operatingSystem: string;
}

export const products: Product[] = [
  {
    slug: "pilot-shell",
    name: "Pilot Shell",
    tagline: "How real engineers run Claude Code and Codex",
    category: "Developer Tooling · Agentic Engineering",
    status: "Live product",
    summary: "Spec-driven development, enforced TDD and quality gates for Claude Code and Codex CLI.",
    description:
      "Pilot Shell turns coding agents into disciplined engineers. It installs globally on top of Claude Code and Codex CLI and adds the structure they lack on their own: /prd shapes a vague idea into a product requirements document, /spec plans, implements and verifies a feature end-to-end with test-driven development, /build loops build-and-judge against acceptance criteria until every one of them passes, and /fix resolves bugs at their root cause with a reproducing test. Quality hooks format, lint and type-check every edit, persistent memory carries decisions across sessions, and semantic code search plus a code knowledge graph keep context accurate while cutting token cost. A local Console dashboard tracks specs, sessions, memories, diffs and usage — and everything stays on your machine.",
    highlights: [
      "Workflows (/prd, /spec, /build, /fix with enforced TDD)",
      "Quality Hooks (format, lint, type-check on every edit)",
      "Context Engineering (persistent memory, semantic search, code graph)",
      "Agent Platform (skills, hooks, sub-agents, MCP & LSP servers)",
      "Local Console (specs, sessions, memories, diffs, token usage)",
    ],
    facts: ["1.8k+ GitHub stars", "macOS · Linux · Windows (WSL2)", "Claude Code & Codex CLI"],
    icon: Bot,
    logoOnLight: false,
    website: { url: "https://pilot-shell.com/", label: "pilot-shell.com" },
    repo: { url: "https://github.com/maxritter/pilot-shell", label: "GitHub" },
    applicationCategory: "DeveloperApplication",
    operatingSystem: "macOS, Linux, Windows (WSL2)",
  },
  {
    slug: "bahnsparer",
    name: "Bahnsparer",
    tagline: "Günstiger ans Ziel — price alerts for German rail",
    category: "Consumer Mobile App · Travel",
    status: "Public beta",
    summary: "iOS and Android app that watches Deutsche Bahn fares and alerts you when your trip gets cheaper.",
    description:
      "Bahnsparer watches Deutsche Bahn Sparpreis fares so you don't have to. Fix your travel day and the app monitors exactly that day in the background, notifying you on every new low — and warning you when the cheap contingent sells out. Stay flexible instead and a four-week calendar shows the cheapest fare for every day at a glance. It ranks Deutsche Bahn and FlixTrain in a single list, checks split tickets against the through fare, offsets the Deutschlandticket on regional legs, handles multiple travellers with their own BahnCards and youth, senior, child or dog tariffs, and puts each train's punctuality record right next to its price. Free, no account, and every route, alert and price history stays on the device.",
    highlights: [
      "Background Price Monitoring (alerts on every new low fare)",
      "Four-Week Price Calendar (cheapest day, average, best weekday)",
      "Fare Intelligence (split tickets, Deutschlandticket, BahnCard, tariffs)",
      "Operator Comparison (Deutsche Bahn and FlixTrain in one ranked list)",
      "Privacy by Design (no account, no tracking, data stays on device)",
    ],
    facts: ["iOS & Android", "TestFlight & Google Play beta", "Free, no account"],
    icon: Train,
    logoOnLight: true,
    website: { url: "https://bahnsparer.de/", label: "bahnsparer.de" },
    applicationCategory: "TravelApplication",
    operatingSystem: "iOS, Android",
  },
  {
    slug: "diy-thermocam",
    name: "DIY-Thermocam",
    tagline: "Open-source thermal imaging for everyone",
    category: "Open-Source Hardware · Embedded Systems",
    status: "Open source",
    summary: "A low-cost, self-assembly thermal imaging camera built around the FLIR Lepton sensor.",
    description:
      "DIY-Thermocam is a do-it-yourself thermal imager built around the FLIR Lepton long-wave infrared sensor, and everything about it is public: the C/C++ firmware, the printed circuit board, the enclosure and a full desktop software suite. It is designed as a self-assembly kit that can be built at home with standard tools, giving makers, schools and companies an affordable and fully customisable thermal imaging platform. The device is driven from a 3.2\" TFT touch screen, saves single images, video and time-lapse series to internal storage, and streams live thermal data to a PC over USB serial. People use it to find heat leaks in building insulation, analyse electrical and mechanical components, detect people and animals, or mount it on a drone for continuous capture.",
    highlights: [
      "Firmware (C/C++, PlatformIO, FLIR Lepton 2.5 / 3.1R / 3.5)",
      "Hardware (custom PCB, self-assembly enclosure, 3.2\" TFT touch screen)",
      "Desktop Suite (thermal analysis, live viewer, data viewer, video converter)",
      "Connectivity (USB serial protocol, mass storage, remote settings)",
      "Applications (building insulation, electronics, drones, research)",
    ],
    facts: ["1.2k+ GitHub stars", "179 forks", "Open hardware & software"],
    icon: Thermometer,
    logoOnLight: true,
    website: { url: "https://www.diy-thermocam.net/", label: "diy-thermocam.net" },
    repo: { url: "https://github.com/maxritter/diy-thermocam", label: "GitHub" },
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
  },
];
