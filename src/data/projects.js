export const projects = [
  {
    id: "trading-platform",
    name: "Trading Platform",
    year: "2026",
    category: "Full-Stack",
    tagline: "A crypto tracking & wallet dashboard with live charting.",
    description:
      "A dark-mode trading dashboard where users track coins, read price history across multiple timeframes, and manage a wallet — add money, withdraw, transfer — with a running transaction log. Built as a complete flow from auth through to balance management, not just a pricing widget.",
    stack: ["React", "Chart.js", "JavaScript", "REST API","Spring Boot", "MySQL"],
    features: [
      "Live-style price charting across 1D / 1W / 1M / 1Y ranges",
      "Coin table with volume, market cap and 24h movement",
      "Wallet with add money, withdrawal and transfer flows",
      "Transaction history feed"
    ],
    images: [
      { src: "/images/projects/trading-login.png", label: "Sign in" },
      { src: "/images/projects/trading-dashboard.png", label: "Market dashboard" },
      { src: "/images/projects/trading-wallet.png", label: "Wallet" }
    ],
    accent: "violet"
  },
  {
    id: "swastik-ai",
    name: "Swastik AI",
    year: "2026",
    category: "Agentic AI",
    tagline: "An AI health assistant that reminds you to take your medicine.",
    description:
      "A personal health assistant built around a conversational agent. It understands plain requests like \"remind me to take 500mg Paracetamol at 12:30 AM\" and turns them into structured, recurring reminders — no forms, no dropdowns. It also answers medicine questions on demand and tracks day-by-day adherence.",
    stack: ["React", "Spring AI", "gemini-2.5-flash", "Spring Boot", "MySQL"],
    features: [
      "Natural-language reminders — chat a dose, get a scheduled alert",
      "Medicine lookup with plain-language usage & side-effect info",
      "Daily adherence tracking with a weekly view",
      "Camera upload to identify medicine from a photo"
    ],
    images: [
      { src: "/images/projects/swastik-home.png", label: "Today's reminders" },
      { src: "/images/projects/swastik-chat.png", label: "Assistant chat" },
      { src: "/images/projects/swastik-lookup.png", label: "Medicine lookup" }
    ],
    accent: "amber"
  },
  {
    id: "project-management",
    name: "Project Management",
    year: "2025",
    category: "Full-Stack",
    tagline: "A lightweight Jira-style tool for tracking small dev projects.",
    description:
      "A project & task tracker built for small teams — create a project, tag its stack, break it into tasks with status, assignee and release date, and comment on progress. Includes a tiered pricing flow (free / monthly / annual) for the SaaS version.",
    stack: ["React", "Spring Boot", "MySQL", "REST API"],
    features: [
      "Project list with category and stack-tag filtering",
      "Task detail view — status, assignee, labels, comments",
      "New-project creation flow with tag picker",
      "Three-tier pricing page (free, monthly, annual)"
    ],
    images: [
      { src: "/images/projects/pm-list.png", label: "Project list" },
      { src: "/images/projects/pm-task.png", label: "Task detail" },
      { src: "/images/projects/pm-newproject.png", label: "New project" }
    ],
    accent: "violet"
  },
  {
    id: "harry-counsellor",
    name: "Harry",
    year: "2026",
    category: "Agentic AI",
    tagline: "A German university counsellor, on call in a chat window.",
    description:
      "An LLM-backed counsellor that answers real questions about studying in Germany — which universities teach in English, what TU Munich asks for on admission, what a profile needs to match a program. Built to feel like messaging a knowledgeable senior, not searching a database.",
    stack: ["React", "Spring AI", "gemini-2.5-flash", "Spring Boot", "MySQL"],
    features: [
      "Conversational Q&A grounded in real admissions criteria",
      "Suggested-question chips for common first questions",
      "Program-matching based on a student's profile",
      "Live status indicator on the assistant"
    ],
    images: [],
    accent: "amber"
  }
]
