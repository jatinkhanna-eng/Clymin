const BASE_URL = import.meta.env.VITE_STRAPI_BASE_URL;

export const fetchBlogs = async () => {
  const res = await fetch(`${BASE_URL}/api/blogs?populate=*`);

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const json = await res.json();
  return json.data;
};



export const renderTemplate = (blocks: any[]) => {
  if (!blocks) return null;

  return blocks.map((block, i) => {
    if (block.type === "heading") {
      return (
        <h2
          key={i}
          style={{
            fontSize: "28px",
            fontWeight: 700,
            margin: "48px 0 16px",
            color: "#111827",
          }}
        >
          {block.children?.map(renderText)}
        </h2>
      );
    }

    if (block.type === "paragraph") {
      return (
        <p
          key={i}
          style={{
            margin: "16px 0",
            fontSize: "18px",
            lineHeight: 1.9,
            color: "#374151",
          }}
        >
          {block.children?.map(renderText)}
        </p>
      );
    }

    return null;
  });
};

export const renderText = (node: any, i: number) => {
  let style: any = {};

  if (node.bold) style.fontWeight = 700;
  if (node.italic) style.fontStyle = "italic";
  if (node.underline) style.textDecoration = "underline";
  if (node.code) {
    style.fontFamily = "monospace";
    style.background = "#f3f4f6";
    style.padding = "2px 6px";
    style.borderRadius = "4px";
    style.fontSize = "15px";
  }

  return (
    <span key={i} style={style}>
      {node.text}
    </span>
  );
};






export const styles: any = {
  page: {
    maxWidth: "100%",
    margin: "0 auto",
    paddingTop: "clamp(24px, 5vw, 40px)",
    paddingBottom: "clamp(24px, 5vw, 80px)",
    paddingLeft: "clamp(20px, 6vw, 64px)",
    paddingRight: "clamp(20px, 6vw, 64px)",
    backgroundColor: "#ffffff",
  },


  loader: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#6b7280",
    fontSize: "clamp(14px, 3vw, 16px)",
  },

  title: {
    fontSize: "clamp(28px, 6vw, 44px)",
    fontWeight: 800,
    lineHeight: 1.25,
    color: "#111827",
    marginBottom: "clamp(20px, 4vw, 32px)",
    marginInline: "auto",
  },

  mediaWrapper: {
    marginBottom: "clamp(24px, 5vw, 32px)",
    width: "100%",
  },

  media: {
    width: "100%",
    maxHeight: "70vh",
    objectFit: "cover",
    borderRadius: "clamp(10px, 2vw, 16px)",
    boxShadow: "0 18px 40px rgba(0,0,0,0.15)",
  },

  description: {
    fontSize: "clamp(16px, 4vw, 20px)",
    lineHeight: 1.7,
    color: "#4b5563",
    marginBottom: "clamp(32px, 6vw, 48px)",
    marginInline: "auto",
  },

  content: {
    fontSize: "clamp(16px, 3.5vw, 18px)",
    lineHeight: 1.9,
    color: "#374151",
    marginBottom: "clamp(48px, 8vw, 64px)",
    marginInline: "auto",
  },

  seo: {
    marginInline: "auto",
    padding: "clamp(16px, 4vw, 24px)",
    borderRadius: "clamp(10px, 2vw, 12px)",
    border: "1px solid #e5e7eb",
    backgroundColor: "#f9fafb",
  },

  seoLabel: {
    fontSize: "clamp(10px, 2.5vw, 12px)",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#6b7280",
  },

  seoTitle: {
    marginTop: "clamp(8px, 2vw, 12px)",
    fontSize: "clamp(16px, 4vw, 18px)",
    fontWeight: 500,
    color: "#2563eb",
  },

  seoDesc: {
    marginTop: "6px",
    fontSize: "clamp(13px, 3vw, 14px)",
    color: "#4b5563",
  },
};



interface TocItem {
  id: string;
  label: string;
}

export const TOC_ITEMS: TocItem[] = [
  { id: "sec-01",          label: "Introduction" },
  { id: "sec-monitoring", label: "Understanding Mobile App Scraping in India" },
  { id: "sec-framework",  label: "The Cost Reality: DIY vs. Outsourced Mobile App Scraping" },
  { id: "sec-1",          label: "Evaluation Criteria: How We Assess Providers" },
  { id: "sec-3",          label: "1. Clymin" },
  { id: "sec-4",          label: "2. Actowiz Solutions" },
  { id: "sec-5",          label: "3. Xbyte Technologies" },
  { id: "sec-6",          label: "4. PromptCloud" },
  { id: "sec-7",          label: "5. OutsourceBigData" },
  { id: "sec-8",          label: "6. Ultroneous" },
  { id: "sec-9",          label: "7. HirInfotech" },
  { id: "sec-10",          label: "Service Comparison Matrix" },
  { id: "sec-11",          label: "Matching Services to Business Needs" },
  { id: "sec-12",          label: "Key Questions Answered" },
  { id: "sec-13",          label: "Conclusion" },
  
];



interface SectionData {
  n: number;
  id: string;
  title: string;
  content: string;
  hasCode?: boolean;
  code?: string;
  hasImage?: boolean;
}


export const SECTIONS: SectionData[] = [
  {
    n: 1, id: "sec-1",
    title: "Questions you're already showing up for in Google Search Console",
    content: "Open up Google Search Console directly, or via Ahrefs Webmaster Tools, and specifically look for questions your website is already ranking for. One simple way to do that is to use the following regex expression:",
    hasCode: true,
    code: `\\b(why|what|when|are|will|does|should|where|who|how|can|do|is)\\b`,
    hasImage: true,
  },
  {
    n: 2, id: "sec-2",
    title: "Find common questions via the 'Discussions and forums' SERP feature",
    content: "In 2022, Google launched a new search result feature, 'Discussions and forums', to highlight conversations across online communities. Thanks to this, you can find inspiration for naturally written questions people might also be asking in AI-first platforms.",
    hasImage: true,
  },
  {
    n: 3, id: "sec-3",
    title: "Generate conversational queries around popular keywords",
    content: "Ideally, you'll already have data on which pages on your site help convert the most visitors to some desired action. You can use LLMs to convert traditional terms into a more conversational, natural language format.",
    hasImage: true,
  },
  {
    n: 4, id: "sec-4",
    title: "Use Perplexity's related questions for inspiration",
    content: "One nice feature when asking Perplexity questions related to your industry is that, at the end of each chat, you'll be recommended related follow-up queries. These are generated by an AI model that uses the original query and its results.",
    hasImage: true,
  },
  {
    n: 5, id: "sec-5",
    title: "Get inspiration from 'People Also Ask' in Google search results",
    content: "For some of the niches I track, I like to start my research using questions from Google's 'People Also Ask' SERP feature. If you click any headline to expand it, Google will then offer even more suggested queries.",
    hasImage: true,
  },
  {
    n: 6, id: "sec-6",
    title: "Monitor topics you're already showing up for in AI search",
    content: "Ahrefs Brand Radar provides insights into over 240 million prompts across popular AI platforms, including Google AI Mode, ChatGPT, and Perplexity. You can click into each topic to identify queries you may wish to modify and continue tracking.",
    hasImage: true,
  },
  {
    n: 7, id: "sec-7",
    title: "Analyze your website pages currently getting traffic from AI search",
    content: "The specifics will depend on the analytics solution you're using, but the idea is the same: Find pages that are getting traffic, and build prompts around them. Besides traditional web analytics, you can also dive into server logs.",
    hasImage: true,
  },
  {
    n: 8, id: "sec-8",
    title: "Monitor queries you're not currently showing up for (but competitors are)",
    content: "Another great use of Ahrefs Brand Radar is that you don't have to start your visibility analysis from scratch. You can go back through months of AI visibility data to find queries where competitors show up, and your brand doesn't.",
    hasImage: true,
  },
  {
    n: 9, id: "sec-9",
    title: "Use the 'Questions' tab in Keywords Explorer",
    content: "Our Keywords Explorer database allows you to research 28.7 billion terms to find those most relevant to the industry you're in. Start with a seed phrase, click Matching terms, then Questions, and you'll quickly see relevant suggestions with their accompanying search volume.",
    hasImage: true,
  },
  {
    n: 10, id: "sec-10",
    title: "Monitor whether LLM responses around your business match up to reality",
    content: "When it comes to SEO, your primary focus has likely been on Google search results above all else. AI responses, on the other hand, may also be assisted by data from Bing, Brave Search, custom web indexes, and their original training data.",
    hasImage: true,
  },
  {
    n: 11, id: "sec-11",
    title: "Create personas with help from internal data sources",
    content: "One thing that makes response tracking challenging is the information an assistant might have about its user. We can try to model these by adding additional context to our prompts using a simple structure: [My Situation] [Constraints] [Priorities] [Pain points] [Question].",
    hasImage: false,
  },
];





const ORANGE = "#f57c00";
const LIGHTORANGE = "#ff6d2f"


export const GlobalStyles = () => (
  <style>{`
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body { font-family: 'DM Sans', sans-serif; }

    /* Scrollable TOC on very tall pages */
    .toc-nav { overflow-y: auto; max-height: calc(100vh - 100px); }
    .toc-nav::-webkit-scrollbar { width: 3px; }
    .toc-nav::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 4px; }

    /* TOC item hover */
    .toc-item:hover > span { color: ${LIGHTORANGE} !important; }

    /* Tables scroll on small screens */
    .table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }

    /* ── Responsive ── */

    /* Tablet: hide right author sidebar, keep TOC */
    @media (max-width: 1100px) {
      .author-sidebar { display: none !important; }
      .page-grid { grid-template-columns: 220px 1fr !important; }
    }

    /* Mobile: single column, hide TOC sidebar, show sticky bar */
    @media (max-width: 767px) {
      .toc-sidebar { display: none !important; }
      .page-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
      .hero-title { font-size: 28px !important; }
      .hero-wrap { padding: 40px 20px 36px !important; }
      .body-wrap { padding: 28px 16px !important; }
      .article-h2 { font-size: 20px !important; }
      .section-h2 { font-size: 18px !important; }
      .mobile-toc-bar { display: flex !important; }
    }

    @media (min-width: 768px) and (max-width: 1100px) {
      .hero-title { font-size: 38px !important; }
      .body-wrap { padding: 40px 28px !important; }
    }

    /* Mobile TOC sticky bar — hidden by default */
    .mobile-toc-bar {
      display: none;
      position: sticky;
      top: 0;
      z-index: 30;
      background: #fff;
      border-bottom: 1px solid #e5e7eb;
      padding: 10px 16px;
      align-items: center;
      gap: 10px;
    }

    /* Mobile drawer */
    .toc-overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      z-index: 40;
    }
    .toc-overlay.open { display: block; }
    .toc-drawer {
      position: fixed;
      top: 0; left: 0; bottom: 0;
      width: 272px;
      background: #fff;
      z-index: 50;
      padding: 24px 20px;
      overflow-y: auto;
      transform: translateX(-100%);
      transition: transform 0.28s ease;
      box-shadow: 4px 0 24px rgba(0,0,0,0.13);
    }
    .toc-drawer.open { transform: translateX(0); }

    /* Related articles 2-col on tablet */
    @media (min-width: 640px) and (max-width: 1100px) {
      .related-grid { display: grid !important; grid-template-columns: 1fr 1fr; gap: 12px; }
      .related-grid a { margin-bottom: 0 !important; }
    }

    @media (hover: hover) {
      .related-card:hover { border-color: ${ORANGE} !important; box-shadow: 0 2px 10px rgba(245,124,0,0.12) !important; }
    }

    @media print {
      .toc-sidebar, .author-sidebar, .mobile-toc-bar { display: none !important; }
      .page-grid { grid-template-columns: 1fr !important; }
    }
  `}</style>
);