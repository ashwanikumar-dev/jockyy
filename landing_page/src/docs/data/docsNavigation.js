export const docsNavigation = [
  {
    category: "GETTING STARTED",
    items: [
      {
        title: "Introduction",
        path: "/docs",
        description: "Overview of JOCKY, core purpose, problem context, and end-to-end investigation flow."
      },
      {
        title: "What is JOCKY?",
        path: "/docs/what-is-jocky",
        description: "Compiler-driven DSL model, controlled forensic operations, and why it is not a general-purpose language."
      }
    ]
  },
  {
    category: "ARCHITECTURE",
    items: [
      {
        title: "System Architecture",
        path: "/docs/architecture",
        description: "Complete end-to-end architecture, six architectural layers, Control Plane vs Data Plane."
      },
      {
        title: "Compiler Pipeline",
        path: "/docs/compiler",
        description: "Lexer, parser, AST, semantic analysis, IR generator, and intermediate representation validation."
      }
    ]
  },
  {
    category: "JOCKY LANGUAGE",
    items: [
      {
        title: "JOCKY Language",
        path: "/docs/language",
        description: "Language syntax, investigation blocks, statements, expressions, types, and filters from Grammar v0.1."
      },
      {
        title: "Standard Library",
        path: "/docs/standard-library",
        description: "Reference for System, Process, Network, and Evidence modules and MVP functions."
      }
    ]
  },
  {
    category: "FORENSICS",
    items: [
      {
        title: "Evidence & Integrity",
        path: "/docs/evidence",
        description: "Raw vs normalized evidence, provenance metadata, SHA-256 integrity, and chain of custody."
      },
      {
        title: "Runtime, Agents & Collectors",
        path: "/docs/runtime",
        description: "Endpoint agent lifecycle, runtime execution engine, and Windows/Linux collector abstraction."
      }
    ]
  },
  {
    category: "PLATFORM",
    items: [
      {
        title: "Investigation Platform",
        path: "/docs/platform",
        description: "Central server, task orchestration, rule-based detection, timeline engine, and dashboard views."
      }
    ]
  },
  {
    category: "SECURITY",
    items: [
      {
        title: "Security Architecture",
        path: "/docs/security",
        description: "Defense-in-depth boundaries, IR validation, execution allowlists, and defensive safety limits."
      }
    ]
  },
  {
    category: "DEVELOPMENT",
    items: [
      {
        title: "Testing & Deployment",
        path: "/docs/development",
        description: "Unit, cross-platform, failure, and end-to-end testing strategies, plus Docker Compose deployment."
      }
    ]
  },
  {
    category: "PROJECT",
    items: [
      {
        title: "MVP & Roadmap",
        path: "/docs/roadmap",
        description: "Strict delineation between 30-day MVP deliverables, Nice-to-Have features, and future research."
      }
    ]
  }
];

// Flat list helper for linear prev/next pagination & global search
export const allDocsPages = docsNavigation.flatMap((group) =>
  group.items.map((item) => ({
    ...item,
    category: group.category
  }))
);

export function getPageByPath(pathname) {
  // Normalize trailing slash if any (e.g. /docs/ -> /docs)
  const normalized = pathname.endsWith("/") && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
  return allDocsPages.find((page) => page.path === normalized) || allDocsPages[0];
}

export function getAdjacentPages(pathname) {
  const normalized = pathname.endsWith("/") && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
  const index = allDocsPages.findIndex((page) => page.path === normalized);
  if (index === -1) {
    return { prev: null, next: allDocsPages[1] || null };
  }
  const prev = index > 0 ? allDocsPages[index - 1] : null;
  const next = index < allDocsPages.length - 1 ? allDocsPages[index + 1] : null;
  return { prev, next };
}
