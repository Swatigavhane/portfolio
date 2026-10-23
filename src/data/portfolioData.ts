export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
  skills: string[];
}

export interface CaseStudyItem {
  id: string;
  title: string;
  category: string;
  badges: string[];
  description: string;
  metrics: {
    label: string;
    value: string;
    highlight?: boolean;
  }[];
  tags: string[];
  deepDive: {
    overview: string;
    architecture: string[];
    technicalHighlights: string[];
    codeSnippet: string;
    codeLang: string;
  };
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  skills: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Swati Gavhane",
    initials: "SG",
    role: "Senior Fullstack & Frontend Engineer",
    experience: "6+ Yrs Exp (Ex-PhonePe)",
    location: "Pune, India",
    email: "swatigavhane1996@gmail.com",
    phone: "+91 8320672652",
    availability: "Available for Senior Roles • Pune, India",
    headline: "Architecting high-scale web platforms, real-time systems, and AI integrations.",
    bio: "Senior Full Stack Engineer with 6+ years of experience engineering scalable web systems, WebRTC streaming architectures, and modern AI interfaces. Proven impact reducing latency, lowering infrastructure overhead, and delivering reliable platforms for millions of users.",
  },

  coreTechnologies: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Tailwind CSS",
    "WebRTC",
    "PostgreSQL",
  ],

  heroSubCards: [
    {
      title: "ARCHITECTURE & DESIGN",
      items: [
        "Component Architecture",
        "Design Systems",
        "State Management",
        "Micro-Frontends",
        "API Architecture",
      ],
    },
    {
      title: "PERFORMANCE & QUALITY",
      items: [
        "Core Web Vitals",
        "React Profiling",
        "Automated Testing",
        "Accessibility",
        "Memory Profiling",
      ],
    },
  ],

  metrics: [
    {
      label: "PRODUCTION EXP",
      value: "6+ Years",
      icon: "briefcase",
      description: "Production fullstack engineering across fintech, enterprise CRM & influencer platforms",
      footerTag: "PhonePe • ZURUTech • Vebholic • Coruscate",
    },
    {
      label: "CORE WEB VITALS",
      value: "1.2s LCP",
      icon: "zap",
      description: "Reduced Largest Contentful Paint from 4.2s via tree-shaking & bundle code-splitting",
      hasProgressBar: true,
      progressPercent: 78,
    },
    {
      label: "CUSTOMER SATISFACTION",
      value: "+40% CSAT",
      icon: "smile",
      description: "In high-revenue categories through real-time bot-assisted support & seamless agent handoff",
      footerTag: "High-Revenue Fintech Verticals",
      footerColor: "emerald",
    },
    {
      label: "PLATFORM SCALE",
      value: "Millions",
      icon: "users",
      description: "Users served daily across real-time video/audio support & enterprise customer portals",
      footerTag: "Zero-Downtime Resilience",
      footerColor: "cyan",
    },
  ],

  experiences: [
    {
      id: "phonepe",
      role: "Senior Software Engineer – Frontend",
      company: "PhonePe Pvt. Ltd",
      location: "Pune, India",
      period: "Mar 2023 - Present",
      current: true,
      bullets: [
        "Architected and implemented a high-performance, real-time audio/video customer support feature using LiveKit (WebRTC), enabling direct in-app KYC verification and support calls without 3rd-party vendor licensing costs.",
        "Designed and developed an embeddable Web SDK powering the Agent Dashboard across internal operations, integrating TanStack React Query for cached server-state synchronisation and low latency call handling.",
        "Delivered end-to-end bot-assisted live chat customer support with seamless agent handoff, boosting CSAT scores by +40% in high-revenue consumer categories.",
        "Led web performance optimization initiatives, slashing Largest Contentful Paint (LCP) from 4.2s to 1.2s via tree-shaking, bundle code-splitting, lazy hydration, and asset pipeline tuning.",
        "Actively mentored junior and mid-level engineers, institutionalizing strict TypeScript practices, reusable component design systems, and automated testing suites.",
      ],
      skills: ["React.js", "TypeScript", "LiveKit (WebRTC)", "React Query", "Embeddable SDK", "WebSockets"],
    },
    {
      id: "zurutech",
      role: "Software Developer – Frontend",
      company: "ZURUTech India Pvt. Ltd",
      location: "Ahmedabad, India / Remote",
      period: "Dec 2021 - Mar 2023",
      current: false,
      bullets: [
        "Led end-to-end frontend development for Netra, an enterprise influencer campaign management platform supporting influencer discovery, campaign tracking, and analytics dashboards.",
        "Built a reusable, accessible UI component library adopted across 3+ client-facing projects, cutting UI duplication by 30% and standardizing accessibility patterns.",
        "Collaborated cross-functionally with product designers and backend teams to implement real-time campaign performance charts and robust client workflows.",
      ],
      skills: ["React", "Redux Toolkit", "Design System", "Tailwind CSS"],
    },
    {
      id: "vebholic",
      role: "Software Developer",
      company: "Vebholic Pvt. Ltd",
      location: "Remote",
      period: "Dec 2020 - Dec 2021",
      current: false,
      bullets: [
        "Engineered a comprehensive, Salesforce-inspired internal CRM platform featuring lead tracking, activity timelines, and real-time deal pipeline stages.",
        "Constructed dynamic data grids with sorting, multi-attribute filtering, batch mutations, and pagination for high-volume customer records.",
        "Accelerated feature turnaround by 20% by establishing standard frontend-backend API conventions and modular state management slices.",
      ],
      skills: ["React", "Data Grids", "REST APIs", "State Management"],
    },
    {
      id: "coruscate",
      role: "Full-Stack JavaScript Developer",
      company: "Coruscate Solutions Pvt. Ltd",
      location: "Surat, India",
      period: "Aug 2019 - Dec 2020",
      current: false,
      bullets: [
        "Spearheaded a dynamic JSON-schema driven UI rendering engine, empowering non-technical team members to configure custom client pages and decreasing custom UI development effort by 35%.",
        "Created a complex multi-step form engine featuring conditional validation schemas, field dependency graphs, and draft autosave recovery.",
        "Developed and secured robust Node.js and Express REST APIs interfacing with MongoDB, implementing JWT auth and role-based permissions.",
      ],
      skills: ["Node.js", "Express", "MongoDB", "Schema Engine"],
    },
  ],

  caseStudies: [
    {
      id: "webrtc-platform",
      title: "Real-Time Audio/Video Support Platform & Embeddable Web SDK",
      category: "Real-Time Systems",
      badges: ["PHONEPE FINTECH", "Next.js", "Production Scale"],
      description: "Engineered an end-to-end video/audio KYC and customer support platform powered by LiveKit WebRTC, completely eliminating third-party vendor licensing costs. Built a modular, embeddable Web SDK integrated into PhonePe's agent portal with TanStack Query server-state synchronization.",
      metrics: [
        { label: "LATENCY", value: "< 180 ms", highlight: true },
        { label: "CSAT IMPACT", value: "+40% Boost", highlight: true },
        { label: "3RD-PARTY COST", value: "0 INR (Saved)", highlight: true },
      ],
      tags: ["LiveKit", "WebRTC", "React Query", "WebSockets", "Embeddable SDK"],
      deepDive: {
        overview: "Replaced an expensive legacy proprietary vendor with an in-house WebRTC solution powered by self-hosted LiveKit SFU clusters, serving zero-latency audio/video calls for KYC verification and live customer support.",
        architecture: [
          "Client Tier: Lightweight embeddable iframe and JS SDK module (< 25KB minified) with auto-reconnection and audio level telemetry.",
          "Signaling & Media Tier: LiveKit SFU cluster with geo-distributed turn/stun relays delivering <180ms round-trip latency.",
          "State Synchronization: TanStack Query and WebSocket duplex events syncing agent availability, queue priority, and token rotation.",
        ],
        technicalHighlights: [
          "Zero third-party vendor fees, saving millions of rupees annually in recurring SaaS licenses.",
          "Resilient network fallback: Dynamic bitrate adaptation and Opus codec prioritization on unstable 3G/4G connections.",
          "End-to-end encrypted peer tracks complying with stringent Reserve Bank of India (RBI) fintech KYC audit protocols.",
        ],
        codeLang: "typescript",
        codeSnippet: `// PhonePe Agent Web SDK: LiveKit WebRTC Connection & Room Orchestration
import { Room, RoomEvent, VideoPresets, Track } from 'livekit-client';

export class SupportVoiceClient {
  private room: Room;
  private token: string;

  constructor(private wsUrl: string) {
    this.room = new Room({
      adaptiveStream: true,
      dynacast: true,
      videoCaptureDefaults: {
        resolution: VideoPresets.h720.resolution,
      },
    });

    this.bindEvents();
  }

  async joinSession(token: string) {
    this.token = token;
    await this.room.connect(this.wsUrl, this.token, {
      autoSubscribe: true,
    });
    // Publish microphone and camera tracks with echo cancellation
    await this.room.localParticipant.enableCameraAndMicrophone();
  }

  private bindEvents() {
    this.room.on(RoomEvent.TrackSubscribed, (track, publication, participant) => {
      if (track.kind === Track.Kind.Video || track.kind === Track.Kind.Audio) {
        const element = track.attach();
        document.getElementById('video-portal-root')?.appendChild(element);
      }
    });

    this.room.on(RoomEvent.ConnectionQualityChanged, (quality, participant) => {
      // Real-time latency & packet loss telemetry
      telemetry.recordQuality({ participant: participant.identity, quality });
    });
  }
}`,
      },
    },
    {
      id: "csv-analytics",
      title: "CSV to Interactive Dashboard — AI-Powered Data Visualization",
      category: "GenAI & In-Browser Analytics",
      badges: ["GENAI & DUCKDB-WASM", "Next.js", "Data Architecture"],
      description: "A client-side fullstack application allowing users to upload arbitrary CSV data and instantly produce interactive charts and KPI grids. Leveraged Hugging Face / OpenAI APIs for automated schema inference and chart recommendations, executed on DuckDB-wasm for 100% in-browser SQL queries.",
      metrics: [
        { label: "COMPUTE ENGINE", value: "DuckDB-wasm", highlight: true },
        { label: "DATA PRIVACY", value: "100% On-Device", highlight: true },
        { label: "QUERY SPEED", value: "< 15 ms", highlight: true },
      ],
      tags: ["GenAI APIs", "DuckDB-wasm", "Recharts", "React Table", "Papa Parse"],
      deepDive: {
        overview: "Engineered an zero-server-compute data intelligence tool where users drag-and-drop gigabyte CSVs, and all schema parsing, SQL aggregations, and visual graphing happen inside browser WebAssembly with zero data egress.",
        architecture: [
          "Ingestion: Papa Parse streaming workers stream raw CSV lines directly into DuckDB Apache Arrow tables.",
          "In-Browser SQL: DuckDB WebAssembly engine evaluates analytical SQL aggregation queries in <15ms.",
          "AI Semantic Layer: Gemini / LLM prompts recommend chart facets, dimensions, and KPI calculations from column metadata.",
        ],
        technicalHighlights: [
          "Zero server cloud egress costs: All computation runs on the user's local machine.",
          "Strict data privacy: Sensitive enterprise financial and HR spreadsheets never leave client memory.",
          "Seamless export: One-click export to PNG charts, SVG vectors, and normalized parquet datasets.",
        ],
        codeLang: "typescript",
        codeSnippet: `// In-Browser DuckDB-wasm Analytics Query Execution
import * as duckdb from '@duckdb/duckdb-wasm';

export async function executeClientQuery(db: duckdb.AsyncDuckDB, sql: string) {
  const conn = await db.connect();
  try {
    const startTime = performance.now();
    const arrowResult = await conn.query(sql);
    const durationMs = performance.now() - startTime;
    
    // Transform zero-copy Arrow RecordBatch to JSON for Recharts
    const rows = arrowResult.toArray().map((row) => row.toJSON());
    return {
      rows,
      durationMs: durationMs.toFixed(1),
      rowCount: arrowResult.numRows,
    };
  } finally {
    await conn.close();
  }
}`,
      },
    },
    {
      id: "headless-editor",
      title: "Rich Text Editor & Custom Headless Form Engine",
      category: "Headless UI & Core DOM",
      badges: ["HEADLESS UI ENGINE", "Next.js", "DOM Architecture"],
      description: "A custom rich text editor built from scratch without bloated third-party dependencies. Implemented raw DOM Selection and Range API handling, inline formatting tokens, custom undo/redo history stack, and full WCAG 2.1 AAA keyboard navigation compliance.",
      metrics: [
        { label: "ACCESSIBILITY", value: "WCAG 2.1 AAA", highlight: true },
        { label: "BUNDLE SIZE", value: "< 8 KB Gzipped", highlight: true },
        { label: "TEST SUITE", value: "Playwright + Unit", highlight: true },
      ],
      tags: ["TypeScript", "DOM Selection API", "Undo/Redo Stack", "Playwright E2E", "ARIA Roles"],
      deepDive: {
        overview: "Engineered a headless, zero-dependency rich text and form engine replacing heavy 300KB+ WYSIWYG bundles. Crafted using raw HTML5 contentEditable with a predictable immutable AST mutation model.",
        architecture: [
          "Selection Engine: Standardized DOM Range cursor normalization across WebKit, Blink, and Gecko.",
          "Immutable History: Dual-stack Command Pattern implementing unlimited Undo/Redo with snapshot debouncing.",
          "Headless Form Binding: Dynamic JSON-schema validation supporting deep field dependencies and conditional branching.",
        ],
        technicalHighlights: [
          "Hyper-lean footprint: Less than 8KB gzipped with zero external dependencies.",
          "Full WCAG 2.1 AAA keyboard navigable with screen-reader friendly live ARIA announcements.",
          "Tested across edge cases with 100+ unit tests and Playwright end-to-end integration suites.",
        ],
        codeLang: "typescript",
        codeSnippet: `// Headless Selection & Formatting Command Engine
export class HeadlessEditorEngine {
  private historyStack: Array<string> = [];
  private redoStack: Array<string> = [];

  constructor(private container: HTMLElement) {
    this.recordSnapshot();
  }

  applyFormat(command: 'bold' | 'italic' | 'strike' | 'code') {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    if (range.collapsed) return;

    this.recordSnapshot();
    const tag = command === 'code' ? 'code' : command === 'bold' ? 'strong' : 'em';
    const wrapper = document.createElement(tag);
    wrapper.appendChild(range.extractContents());
    range.insertNode(wrapper);

    // Restore clean selection boundaries
    selection.removeAllRanges();
    const newRange = document.createRange();
    newRange.selectNodeContents(wrapper);
    selection.addRange(newRange);
  }

  undo() {
    if (this.historyStack.length <= 1) return;
    const current = this.historyStack.pop()!;
    this.redoStack.push(current);
    this.container.innerHTML = this.historyStack[this.historyStack.length - 1];
  }
}`,
      },
    },
  ],

  skillsCategories: [
    {
      id: "frontend-architecture",
      title: "Frontend Architecture",
      subtitle: "Modern, high-performance web applications, state synchronization, and component design systems.",
      iconName: "layout",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Redux Toolkit",
        "Zustand",
        "React Query",
        "Tailwind CSS",
        "HTML5 / CSS3",
        "Responsive UI",
        "Skeleton Loaders",
      ],
    },
    {
      id: "backend-realtime",
      title: "Backend & Real-Time APIs",
      subtitle: "Scalable server runtimes, live WebRTC streaming, and event-driven communication pipelines.",
      iconName: "server",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "WebSocket",
        "LiveKit (WebRTC)",
        "GraphQL",
        "MongoDB",
        "PostgreSQL",
        "Microservices",
        "API Design",
      ],
    },
    {
      id: "programming-languages",
      title: "Programming Languages",
      subtitle: "Strong software engineering fundamentals, type systems, and data structures.",
      iconName: "code",
      skills: [
        "TypeScript",
        "JavaScript (ESNext)",
        "Python",
        "C++",
        "SQL",
        "Bash / Shell",
      ],
    },
    {
      id: "architecture-vitals",
      title: "Architecture & Vitals",
      subtitle: "Core Web Vitals optimization, bundle tree-shaking, and high-concurrency client scaling.",
      iconName: "zap",
      skills: [
        "Core Web Vitals (LCP/FID/CLS)",
        "Code Splitting",
        "Lazy Hydration",
        "Browser Profiling & DevTools",
        "Zero-Lag Renders",
        "Headless DOM Architecture",
      ],
    },
    {
      id: "ai-analytics",
      title: "AI & In-Browser Analytics",
      subtitle: "GenAI/LLM integrations, prompt-driven UI generation, and client-side vectorized query engines.",
      iconName: "brain",
      skills: [
        "GenAI / LLM APIs",
        "Hugging Face API",
        "Vercel AI SDK",
        "DuckDB-wasm",
        "Recharts",
        "React Table",
        "Papa Parse",
        "Cursor",
        "Claude Code",
        "GitHub Copilot",
      ],
    },
    {
      id: "testing-devops",
      title: "Testing, Tooling & DevOps",
      subtitle: "Automated testing suites, modern bundlers, and containerized deployment workflows.",
      iconName: "terminal",
      skills: [
        "Playwright (E2E)",
        "Jest / Vitest",
        "Unit & Integration Testing",
        "Vite",
        "Webpack",
        "Babel",
        "Git & GitHub",
        "GitHub Actions",
        "Docker",
        "Postman",
      ],
    },
  ],

  education: {
    degree: "B.E. COMPUTER ENGINEERING",
    badge: "Next.js",
    institute: "Sarvajanik College of Engineering & Technology (SCET)",
    location: "Surat, Gujarat, India",
    graduation: "June 2018",
    coursework: "Core coursework: Data Structures & Algorithms, Object-Oriented Analysis & Design, Database Management Systems, Computer Networks, Software Engineering.",
    standing: "First Class with Distinction",
    standingSubtext: "4-Year Rigorous Engineering Curriculum",
  },
};
