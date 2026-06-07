const docs = {
  overview: {
    title: "Overview",
    category: "Getting Started",
    readTime: "4 min read",
    summary: "DocSphere is a central hub for technical manuals, software documentation, internal company guidelines, and reusable knowledge base articles.",
    sections: [
      {
        heading: "What a documentation site should solve",
        body: "A strong wiki or documentation site gives readers one trusted place to find policies, product instructions, API details, troubleshooting steps, and change history. It reduces repeated questions and keeps teams aligned."
      },
      {
        heading: "Common examples",
        list: ["ReadMe-style developer portals", "GitBook-style product manuals", "Notion-based internal knowledge bases", "Company handbook and policy wikis"]
      },
      {
        heading: "Core features",
        list: ["Sidebar navigation trees", "Global search bar", "Code snippet styling", "Version toggles", "Clear article ownership", "Review and update workflows"]
      }
    ],
    tags: ["wiki", "manuals", "knowledge base", "documentation"],
    links: [
      { label: "MDN HTML Reference", type: "Website", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference" },
      { label: "Docs Tutorial Videos", type: "Video Search", url: "https://www.youtube.com/results?search_query=how+to+create+documentation+website+tutorial" }
    ],
    callout: "Accuracy matters most. A beautiful documentation site still fails if old pages, unclear ownership, or missing version notes make readers doubt the content."
  },
  architecture: {
    title: "Information Architecture",
    category: "Getting Started",
    readTime: "5 min read",
    summary: "Structure documentation by reader intent so students, employees, engineers, and support teams can scan quickly.",
    sections: [
      {
        heading: "Recommended sidebar groups",
        list: ["Getting Started for setup and onboarding", "Knowledge Base for internal guidelines and FAQs", "Developer Docs for API and implementation references", "Governance for permissions, ownership, and review rules"]
      },
      {
        heading: "Page naming rules",
        body: "Use action-focused titles such as Install the CLI, Create an API Token, or Review a Draft. Avoid vague labels because they make search results harder to understand."
      }
    ],
    code: {
      language: "text",
      value: "Documentation\n  Getting Started\n    Overview\n    Quick Start\n  Developer Docs\n    API Reference\n    Authentication\n  Governance\n    Versioning\n    Permissions"
    }
  },
  quickstart: {
    title: "Quick Start Template",
    category: "Getting Started",
    readTime: "3 min read",
    summary: "Use this page pattern for a fast, beginner-friendly documentation article.",
    sections: [
      {
        heading: "Template structure",
        list: ["Goal: what the reader will achieve", "Before you start: requirements and permissions", "Steps: numbered and testable instructions", "Expected result: how success should look", "Next step: the most useful related article"]
      }
    ],
    code: {
      language: "markdown",
      value: "# Create a Project\n\n## Before you start\n- Account access\n- Editor permission\n\n## Steps\n1. Open the workspace.\n2. Select New Project.\n3. Add a title and owner.\n4. Publish the draft.\n\n## Expected result\nThe project appears in the workspace index."
    }
  },
  tutorial: {
    title: "Interactive Tutorial",
    category: "Getting Started",
    readTime: "8 min read",
    summary: "A guided path for first-time readers who need to search, open an article, check versions, and verify references.",
    tags: ["tutorial", "onboarding", "search", "versions"],
    sections: [
      {
        heading: "Learning goal",
        body: "By the end of this tutorial, a reader should know how to search the hub, select the right product version, open references, and decide whether an article is trustworthy."
      },
      {
        heading: "Practice prompts",
        list: ["Find the Authentication article by searching token", "Switch the version selector to v2.8 Legacy", "Open Google Scholar Workflow from the Research References group", "Copy a code snippet and check the article's source notes"]
      }
    ],
    tutorial: [
      { label: "Search", text: "Use the main search field for a task, keyword, DOI, policy phrase, or version number." },
      { label: "Pick a version", text: "Choose the release that matches your product, class module, or research period." },
      { label: "Read the source notes", text: "Check author, review date, source type, and whether a claim needs stronger evidence." },
      { label: "Reuse safely", text: "Copy snippets or templates only after checking permissions, dependencies, and expected output." }
    ],
    links: [
      { label: "Documentation Tutorial Videos", type: "Video Search", url: "https://www.youtube.com/results?search_query=documentation+website+tutorial" },
      { label: "MDN Learning Area", type: "Website", url: "https://developer.mozilla.org/en-US/docs/Learn" }
    ],
    callout: "Tutorial pages should be short enough to complete in one sitting, then link to deeper manuals for repeat work."
  },
  guidelines: {
    title: "Internal Guidelines",
    category: "Knowledge Base",
    readTime: "4 min read",
    summary: "Internal guideline pages keep company rules, processes, and decisions easy to find.",
    sections: [
      {
        heading: "What to document",
        list: ["Team responsibilities", "Communication rules", "Approval processes", "Security expectations", "Brand and writing standards"]
      },
      {
        heading: "Keep it practical",
        body: "Guideline pages should answer what to do, who approves it, when it applies, and where related templates or forms live."
      }
    ],
    callout: "Add an owner and last-reviewed date to every internal policy page."
  },
  workflow: {
    title: "Editorial Workflow",
    category: "Knowledge Base",
    readTime: "6 min read",
    summary: "A clear editorial workflow helps documentation stay accurate after teams, products, and rules change.",
    sections: [
      {
        heading: "Publishing stages",
        list: ["Draft: author prepares content", "Technical review: subject expert checks accuracy", "Editorial review: writer checks clarity", "Published: page becomes searchable", "Archive: old content is removed from normal navigation"]
      },
      {
        heading: "Review cadence",
        body: "Critical API, security, and policy pages should be reviewed more often than general tutorials. A quarterly review cycle works well for many internal knowledge bases."
      }
    ]
  },
  search: {
    title: "Search Strategy",
    category: "Knowledge Base",
    readTime: "4 min read",
    summary: "Search should understand titles, summaries, headings, tags, and common reader keywords.",
    sections: [
      {
        heading: "Search result quality",
        body: "The best result should usually be a task page, not a category page. Results should show the article title, section, and short summary so readers can choose quickly."
      },
      {
        heading: "Useful search signals",
        list: ["Exact title matches", "Synonyms and acronyms", "Frequently searched phrases", "Article popularity", "Version compatibility"]
      }
    ]
  },
  faq: {
    title: "FAQ Library",
    category: "Knowledge Base",
    readTime: "4 min read",
    summary: "A frequently asked questions library captures recurring support, class, research, and onboarding questions.",
    tags: ["faq", "support", "reader questions"],
    sections: [
      {
        heading: "Useful FAQ categories",
        list: ["Account and access questions", "Research source questions", "Software setup questions", "Document formatting questions", "Troubleshooting and known issues"]
      },
      {
        heading: "Answer style",
        body: "Start with the direct answer, then add conditions, examples, and related articles. Avoid burying the answer under background information."
      }
    ],
    callout: "Turn repeated search misses into FAQ entries. Reader behavior is one of the best signals for missing documentation."
  },
  scholar: {
    title: "Google Scholar Workflow",
    category: "Research References",
    readTime: "7 min read",
    summary: "Use a Scholar-style workflow to collect academic sources, compare credibility, and connect research evidence to documentation claims.",
    tags: ["google scholar", "research", "references", "academic sources"],
    sections: [
      {
        heading: "Search approach",
        list: ["Start with exact keywords from the claim or topic", "Add author names, institutions, or publication years when narrowing results", "Use cited-by trails to find newer studies", "Compare abstracts before saving a source"]
      },
      {
        heading: "What to capture",
        body: "For every reference, save title, authors, year, publication venue, DOI or stable link, short relevance note, and whether the source supports, contradicts, or only contextualizes the document."
      }
    ],
    references: [
      {
        title: "Academic source record",
        meta: "Journal paper | DOI / stable URL | Peer reviewed",
        note: "Use for research claims, definitions, survey results, and methods that need formal evidence."
      },
      {
        title: "Cited-by chain",
        meta: "Scholar result trail | Newer related studies",
        note: "Use to check whether an older source has been updated, challenged, or widely reused."
      },
      {
        title: "Library export",
        meta: "BibTeX, RIS, APA, MLA",
        note: "Use exports to reduce citation typing errors and keep bibliography entries consistent."
      }
    ],
    links: [
      { label: "Google Scholar Help", type: "Website", url: "https://scholar.google.com/intl/us/scholar/help.html" },
      { label: "Open Google Scholar", type: "Research Tool", url: "https://scholar.google.com/" },
      { label: "Scholar Tutorial Videos", type: "Video Search", url: "https://www.youtube.com/results?search_query=google+scholar+tutorial+for+students" }
    ],
    callout: "This page is modeled after Google Scholar research habits. It does not connect to Google Scholar directly, but it shows the exact source details a documentation hub should preserve."
  },
  sources: {
    title: "Source Evaluation",
    category: "Research References",
    readTime: "6 min read",
    summary: "Evaluate documents by authority, freshness, evidence quality, and relevance before using them as references.",
    tags: ["source quality", "credibility", "review"],
    sections: [
      {
        heading: "Evaluation criteria",
        list: ["Authority: who created the source and why", "Currency: when it was published or reviewed", "Evidence: what data, method, or example supports it", "Relevance: how directly it answers the document's claim", "Bias: what interests may shape the source"]
      },
      {
        heading: "Reference levels",
        body: "Use primary sources for rules, API behavior, statistics, and policy claims. Secondary sources can help explain context, but should not replace the original document when accuracy is important."
      }
    ],
    references: [
      {
        title: "Primary source",
        meta: "Official docs, laws, standards, datasets, research papers",
        note: "Best for facts that readers may act on directly."
      },
      {
        title: "Secondary source",
        meta: "Reviews, explainers, tutorials, summaries",
        note: "Useful for context, but verify important claims against the original source."
      }
    ],
    links: [
      { label: "Zotero Quick Start", type: "Website", url: "https://www.zotero.org/support/quick_start_guide" },
      { label: "Source Evaluation Videos", type: "Video Search", url: "https://www.youtube.com/results?search_query=evaluate+academic+sources+tutorial" }
    ]
  },
  citations: {
    title: "Citation Standards",
    category: "Research References",
    readTime: "5 min read",
    summary: "Citation standards make research-backed documents traceable, reusable, and easier to review.",
    tags: ["citations", "apa", "mla", "bibtex"],
    sections: [
      {
        heading: "Required fields",
        list: ["Author or organization", "Title", "Publication year or last updated date", "Publisher or venue", "DOI, URL, or archive link", "Access date for changing web sources"]
      },
      {
        heading: "Where citations belong",
        body: "Short notes can sit beside a claim, while full citations should live in a reference section at the end of the article."
      }
    ],
    code: {
      language: "bibtex",
      value: "@article{sample2026docs,\n  title={Evidence-Based Documentation Workflows},\n  author={Santos, A. and Reyes, M.},\n  journal={Journal of Knowledge Systems},\n  year={2026},\n  doi={10.0000/example-docs}\n}"
    },
    links: [
      { label: "Purdue OWL APA", type: "Website", url: "https://owl.purdue.edu/owl/research_and_citation/apa_style/apa_formatting_and_style_guide/index.html" },
      { label: "APA Citation Videos", type: "Video Search", url: "https://www.youtube.com/results?search_query=APA+7+citation+tutorial" }
    ]
  },
  bibliography: {
    title: "Bibliography Template",
    category: "Research References",
    readTime: "4 min read",
    summary: "A reusable bibliography page pattern for research documents, literature reviews, and academic project references.",
    tags: ["bibliography", "template", "references"],
    sections: [
      {
        heading: "Template blocks",
        list: ["Source summary", "Citation format", "Evidence note", "Related article", "Review status"]
      }
    ],
    code: {
      language: "markdown",
      value: "## References\n\n1. Author, A. (2026). Title of paper. Journal Name. DOI or stable URL.\n   - Evidence note: supports the definition used in Overview.\n   - Review status: checked on 2026-06-08.\n\n2. Organization. (2025). Technical standard title. URL.\n   - Evidence note: primary source for implementation rules."
    },
    links: [
      { label: "Zotero Quick Start", type: "Website", url: "https://www.zotero.org/support/quick_start_guide" },
      { label: "Bibliography Tutorial Videos", type: "Video Search", url: "https://www.youtube.com/results?search_query=how+to+make+a+bibliography+tutorial" }
    ]
  },
  api: {
    title: "API Reference",
    category: "Developer Docs",
    readTime: "7 min read",
    summary: "API documentation should define endpoints, request formats, response examples, authentication requirements, and error handling.",
    sections: [
      {
        heading: "Endpoint format",
        body: "Every endpoint page should include method, path, permissions, parameters, example request, example response, and common errors."
      }
    ],
    code: {
      language: "http",
      value: "GET /v3/articles?status=published\nAuthorization: Bearer <token>\n\n200 OK\n{\n  \"data\": [\n    {\n      \"id\": \"doc_1024\",\n      \"title\": \"Versioning\",\n      \"status\": \"published\"\n    }\n  ]\n}"
    },
    links: [
      { label: "MDN HTTP Docs", type: "Website", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP" },
      { label: "API Docs Videos", type: "Video Search", url: "https://www.youtube.com/results?search_query=API+documentation+tutorial" }
    ]
  },
  auth: {
    title: "Authentication",
    category: "Developer Docs",
    readTime: "5 min read",
    summary: "Authentication pages explain how users and apps prove identity before accessing protected resources.",
    sections: [
      {
        heading: "Token guidance",
        list: ["Never expose private tokens in client-side code", "Use short-lived tokens for sensitive operations", "Rotate credentials when team access changes", "Document required scopes for every endpoint"]
      }
    ],
    code: {
      language: "javascript",
      value: "async function listArticles(token) {\n  const response = await fetch('/v3/articles', {\n    headers: {\n      Authorization: `Bearer ${token}`\n    }\n  });\n\n  return response.json();\n}"
    }
  },
  snippets: {
    title: "Snippet Standards",
    category: "Developer Docs",
    readTime: "3 min read",
    summary: "Code snippets should be short, complete enough to test, and styled consistently.",
    sections: [
      {
        heading: "Snippet checklist",
        list: ["Label the language", "Show required imports or headers", "Avoid secrets in examples", "Include expected response shape", "Make copy buttons easy to reach"]
      }
    ],
    code: {
      language: "css",
      value: ".code-card {\n  background: #111827;\n  color: #e5eef8;\n  border-radius: 8px;\n  overflow: hidden;\n}"
    }
  },
  versions: {
    title: "Versioning",
    category: "Governance",
    readTime: "5 min read",
    summary: "Version toggles help readers avoid using instructions from the wrong product or API release.",
    sections: [
      {
        heading: "When versions are useful",
        list: ["Public API references", "SDK documentation", "Product manuals with changed UI", "Deployment guides for long-lived systems"]
      },
      {
        heading: "Version labels",
        body: "Use clear labels like Current, Stable, and Legacy. Readers should immediately understand which documentation applies to their environment."
      }
    ],
    callout: "This demo changes the visible version badges. In a production site, the selector would load content for that specific release."
  },
  permissions: {
    title: "Permissions",
    category: "Governance",
    readTime: "4 min read",
    summary: "Permissions protect draft pages, confidential policy documents, and technical references.",
    sections: [
      {
        heading: "Common roles",
        list: ["Reader: can view published pages", "Contributor: can suggest edits", "Reviewer: can approve updates", "Admin: can manage structure, access, and versions"]
      }
    ],
    code: {
      language: "json",
      value: "{\n  \"role\": \"reviewer\",\n  \"permissions\": [\n    \"docs:read\",\n    \"docs:comment\",\n    \"docs:approve\"\n  ]\n}"
    }
  },
  review: {
    title: "Review Checklist",
    category: "Governance",
    readTime: "4 min read",
    summary: "A review checklist keeps documentation accurate, readable, and trustworthy before publishing.",
    sections: [
      {
        heading: "Before publishing",
        list: ["Verify technical accuracy", "Check links and screenshots", "Confirm version labels", "Add owner and review date", "Test code snippets", "Remove outdated warnings"]
      },
      {
        heading: "After publishing",
        body: "Monitor search terms, support questions, and reader feedback. These signals reveal where documentation needs clearer wording or a new article."
      }
    ]
  }
};

const versionLabels = {
  "v4.0": "v4.0 Research",
  "v3.5": "v3.5 Current",
  "v3.2": "v3.2 Stable",
  "v2.8": "v2.8 Legacy",
  "v1.9": "v1.9 Archive"
};

const versionProfiles = {
  "v4.0": {
    status: "Research preview",
    summaryPrefix: "Research edition:",
    note: "Shows academic reference fields, source-quality checks, and Scholar-style links for evidence-heavy documents.",
    focus: ["Scholar links", "Citation notes", "Evidence labels"]
  },
  "v3.5": {
    status: "Current release",
    summaryPrefix: "Current edition:",
    note: "Uses the newest recommended wiki structure with tutorial links, active review workflow, and current API examples.",
    focus: ["Active docs", "Guided tutorials", "Updated examples"]
  },
  "v3.2": {
    status: "Stable release",
    summaryPrefix: "Stable edition:",
    note: "Keeps the reliable documentation layout while avoiding experimental research panels except where needed.",
    focus: ["Stable navigation", "Reviewed pages", "Safer defaults"]
  },
  "v2.8": {
    status: "Legacy release",
    summaryPrefix: "Legacy edition:",
    note: "Highlights older wiki behavior and reminds readers to confirm whether instructions still match their system.",
    focus: ["Legacy warnings", "Older APIs", "Migration checks"]
  },
  "v1.9": {
    status: "Archive release",
    summaryPrefix: "Archive edition:",
    note: "Treats content as historical reference. Use it for old projects, not new implementation work.",
    focus: ["Archived pages", "Historical notes", "Upgrade prompts"]
  }
};

const docTitle = document.getElementById("docTitle");
const docCategory = document.getElementById("docCategory");
const docVersion = document.getElementById("docVersion");
const docReadTime = document.getElementById("docReadTime");
const docSummary = document.getElementById("docSummary");
const docBody = document.getElementById("docBody");
const docView = document.getElementById("docView");
const searchBox = document.getElementById("searchBox");
const searchResults = document.getElementById("searchResults");
const versionSelect = document.getElementById("versionSelect");
const versionBadge = document.getElementById("versionBadge");
const sidebar = document.getElementById("sidebar");
const menuButton = document.getElementById("menuButton");
const topButton = document.getElementById("topButton");
const readingProgress = document.getElementById("readingProgress");
const themeToggle = document.getElementById("themeToggle");

let activeDoc = "overview";

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function createSection(section) {
  if (section.list) {
    const items = section.list.map((item) => `<li>${item}</li>`).join("");
    return `<section class="doc-section"><h3>${section.heading}</h3><ul>${items}</ul></section>`;
  }

  return `<section class="doc-section"><h3>${section.heading}</h3><p>${section.body}</p></section>`;
}

function createCodeBlock(code) {
  if (!code) {
    return "";
  }

  return `
    <div class="code-card">
      <div class="code-head">
        <span>${code.language}</span>
        <button class="copy-code" type="button">Copy</button>
      </div>
      <pre><code>${escapeHtml(code.value)}</code></pre>
    </div>
  `;
}

function createTagList(tags) {
  if (!tags || !tags.length) {
    return "";
  }

  const items = tags.map((tag) => `<span>${tag}</span>`).join("");
  return `<div class="tag-list" aria-label="Article tags">${items}</div>`;
}

function createTutorial(steps) {
  if (!steps || !steps.length) {
    return "";
  }

  const items = steps
    .map((step, index) => `
      <li>
        <span>${index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
        <div>
          <strong>${step.label}</strong>
          <p>${step.text}</p>
        </div>
      </li>
    `)
    .join("");

  return `<section class="tutorial-panel"><h3>Guided tutorial</h3><ol>${items}</ol></section>`;
}

function createReferences(references) {
  if (!references || !references.length) {
    return "";
  }

  const cards = references
    .map((reference) => `
      <article class="reference-card">
        <span>${reference.meta}</span>
        <strong>${reference.title}</strong>
        <p>${reference.note}</p>
      </article>
    `)
    .join("");

  return `<section class="reference-grid" aria-label="Reference cards">${cards}</section>`;
}

function createExternalLinks(links) {
  if (!links || !links.length) {
    return "";
  }

  const items = links
    .map((link) => `
      <a class="resource-button" href="${link.url}" target="_blank" rel="noopener noreferrer">
        <span>${link.type}</span>
        <strong>${link.label}</strong>
      </a>
    `)
    .join("");

  return `<section class="resource-links" aria-label="External learning resources"><h3>External resources</h3><div>${items}</div></section>`;
}

function createVersionPanel(versionKey) {
  const profile = versionProfiles[versionKey];
  const focusItems = profile.focus.map((item) => `<li>${item}</li>`).join("");

  return `
    <section class="version-panel">
      <div>
        <span>${versionLabels[versionKey]}</span>
        <strong>${profile.status}</strong>
        <p>${profile.note}</p>
      </div>
      <ul>${focusItems}</ul>
    </section>
  `;
}

function renderDoc(id) {
  const doc = docs[id];

  if (!doc) {
    return;
  }

  activeDoc = id;
  const versionKey = versionSelect.value;
  const versionProfile = versionProfiles[versionKey];
  docTitle.textContent = doc.title;
  docCategory.textContent = doc.category;
  docReadTime.textContent = doc.readTime;
  docSummary.textContent = `${versionProfile.summaryPrefix} ${doc.summary}`;
  docVersion.textContent = versionLabels[versionKey];

  const sections = doc.sections.map(createSection).join("");
  const callout = doc.callout ? `<div class="callout">${doc.callout}</div>` : "";

  docBody.innerHTML = `${createVersionPanel(versionKey)}${createTagList(doc.tags)}${sections}${createTutorial(doc.tutorial)}${callout}${createReferences(doc.references)}${createExternalLinks(doc.links)}${createCodeBlock(doc.code)}`;

  document.querySelectorAll(".doc-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.doc === id);
  });

  docView.classList.remove("switching");
  window.requestAnimationFrame(() => {
    docView.classList.add("switching");
  });

  if (window.innerWidth <= 1100) {
    sidebar.classList.remove("open");
  }

  docView.focus({ preventScroll: true });
}

function renderSearchResults(query) {
  const term = query.trim().toLowerCase();

  if (!term) {
    searchResults.classList.remove("show");
    searchResults.innerHTML = "";
    return;
  }

  const matches = Object.entries(docs)
    .filter(([, doc]) => {
      const searchable = [
        doc.title,
        doc.category,
        doc.summary,
        (doc.links || []).map((link) => `${link.label} ${link.type} ${link.url}`).join(" "),
        (doc.tags || []).join(" "),
        (doc.references || []).map((reference) => `${reference.title} ${reference.meta} ${reference.note}`).join(" "),
        (doc.tutorial || []).map((step) => `${step.label} ${step.text}`).join(" "),
        doc.sections.map((section) => `${section.heading} ${section.body || ""} ${(section.list || []).join(" ")}`).join(" ")
      ].join(" ").toLowerCase();

      return searchable.includes(term);
    })
    .slice(0, 6);

  if (!matches.length) {
    searchResults.innerHTML = `<div class="search-result"><strong>No matches found</strong><span>Try API, permissions, versioning, or guidelines.</span></div>`;
    searchResults.classList.add("show");
    return;
  }

  searchResults.innerHTML = matches
    .map(([id, doc]) => `
      <button class="search-result" type="button" data-doc="${id}">
        <strong>${doc.title}</strong>
        <span>${doc.category} - ${doc.summary}</span>
      </button>
    `)
    .join("");

  searchResults.classList.add("show");
}

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  readingProgress.style.width = `${percentage}%`;
  topButton.classList.toggle("show", window.scrollY > 420);
}

function setActiveNav() {
  const sections = ["home", "docs", "features", "footer"];
  const current = sections.find((id) => {
    const section = document.getElementById(id);
    if (!section) {
      return false;
    }
    const rect = section.getBoundingClientRect();
    return rect.top <= 130 && rect.bottom >= 130;
  });

  document.querySelectorAll(".topnav a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current || "home"}`);
  });
}

document.querySelectorAll(".doc-link").forEach((link) => {
  link.addEventListener("click", () => {
    renderDoc(link.dataset.doc);
    document.getElementById("docs").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll(".group-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    button.closest(".nav-group").classList.toggle("open");
  });
});

searchBox.addEventListener("input", (event) => {
  renderSearchResults(event.target.value);
});

searchResults.addEventListener("click", (event) => {
  const result = event.target.closest("[data-doc]");
  if (!result) {
    return;
  }

  renderDoc(result.dataset.doc);
  searchBox.value = "";
  searchResults.classList.remove("show");
  document.getElementById("docs").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.getElementById("clearSearch").addEventListener("click", () => {
  searchBox.value = "";
  renderSearchResults("");
  searchBox.focus();
});

versionSelect.addEventListener("change", () => {
  const version = versionLabels[versionSelect.value];
  versionBadge.textContent = version;
  docVersion.textContent = version;
  renderDoc(activeDoc);
});

docBody.addEventListener("click", (event) => {
  const button = event.target.closest(".copy-code");
  if (!button) {
    return;
  }

  const code = button.closest(".code-card").querySelector("code").textContent;

  navigator.clipboard.writeText(code)
    .then(() => {
      button.textContent = "Copied";
    })
    .catch(() => {
      button.textContent = "Select";
    });

  window.setTimeout(() => {
    button.textContent = "Copy";
  }, 1400);
});

menuButton.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "Light" : "Dark";
});

topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  updateProgress();
  setActiveNav();
});

window.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchBox.focus();
  }
});

renderDoc(activeDoc);
updateProgress();
setActiveNav();
