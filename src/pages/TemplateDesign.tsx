import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { GlobalStyles, TOC_ITEMS } from "@/helpers/helpers";
import { useState, useEffect, CSSProperties, ReactNode } from "react";
import { CgProfile } from "react-icons/cg";
import { LuLinkedin } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
// import { SECTIONS, } from "@/helpers/helpers";


const BLUE = "#1a35c7";
// ─── Types ────────
interface ParaProps { children: ReactNode; style?: CSSProperties; }
interface HeadingProps { level: 2 | 3; children: ReactNode; id?: string; }
interface ImgProps { caption?: string; color?: string; }
// interface CardProps { title: string; desc: string; }

// ─── TOC (shared list) ───────
const TocList = ({
  activeId,
  onSelect,
  closeAfter,
}: {
  activeId: string;
  onSelect: (id: string) => void;
  closeAfter?: () => void;
}) => (
  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
    {TOC_ITEMS.map(({ id, label }) => {
      const isActive = activeId === id;
      return (
        <li
          key={id}
          className="toc-item"
          onClick={() => { onSelect(id); closeAfter?.(); }}
          style={{
            cursor: "pointer",
            borderLeft: `3px solid ${isActive ? "#ff6d2f" : "transparent"}`,
            background: isActive ? "#eef1fc" : "transparent",
            padding: "6px 10px",
            marginBottom: "1px",
            borderRadius: "0 4px 4px 0",
            transition: "all 0.18s",
          }}
        >
          <span style={{
            fontSize: "13.5px",
            color: isActive ? "#ff6d2f" : "#374151",
            fontWeight: isActive ? 600 : 400,
            lineHeight: "1.45",
            display: "block",
            fontFamily: "'DM Sans', sans-serif",
            transition: "color 0.18s",
          }}>
            {label}
          </span>
        </li>
      );
    })}
  </ul>
);

// ─── Desktop TOC sidebar ──────────────────────────────────────────────────────
const TocSidebar = ({ activeId, onSelect }: { activeId: string; onSelect: (id: string) => void }) => (
  <aside className="toc-sidebar" style={{ position: "sticky", top: "81px" }}>
    <nav className="toc-nav">
      <p style={{ fontSize: "13px", fontWeight: 700, color: "#111827", marginBottom: "10px", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.01em" }}>
        Contents
      </p>
      <TocList activeId={activeId} onSelect={onSelect} />
    </nav>
  </aside>
);

// ─── Author sidebar ───────────────────────────────────────────────────────────
const AuthorSidebar = () => (
  <aside className="author-sidebar" style={{ position: "sticky", top: "81px" }}>
    {/* Avatar */}
    <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "linear-gradient(135deg, #374151, #1f2937)", marginBottom: "14px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #e5e7eb" }}>
      <CgProfile size={48} style={{ color: "#9ca3af" }} />
    </div>
    <p style={{ fontSize: "15px", fontWeight: 700, color: "#111827", marginBottom: "8px", fontFamily: "'DM Sans', sans-serif" }}>Akshay Sharma</p>
    <p style={{ fontSize: "13px", color: "#4b5563", lineHeight: "1.65", marginBottom: "16px", fontFamily: "'DM Sans', sans-serif" }}>
      Abc's SEO reporting has been featured on the likes of TechCrunch.
    </p>
    <div style={{ display: "flex", gap: "10px" }}>
      <a href="#" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", border: "1px solid #e5e7eb", borderRadius: "6px", color: "#374151", textDecoration: "none" }}>
        <RiTwitterXFill />
      </a>
      <a href="#" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", border: "1px solid #e5e7eb", borderRadius: "6px", color: "#374151", textDecoration: "none" }}>
        <LuLinkedin />
      </a>
    </div>
  </aside>
);

// ─── Mobile drawer ────────────────────────────────────────────────────────────
const MobileDrawer = ({ open, onClose, activeId, onSelect }: { open: boolean; onClose: () => void; activeId: string; onSelect: (id: string) => void }) => (
  <>
    <div className={`toc-overlay${open ? " open" : ""}`} onClick={onClose} />
    <div className={`toc-drawer${open ? " open" : ""}`}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
        <p style={{ fontSize: "13px", fontWeight: 700, color: "#111827", fontFamily: "'DM Sans', sans-serif" }}>Contents</p>
        <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "#6b7280", padding: "4px" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
      <TocList activeId={activeId} onSelect={onSelect} closeAfter={onClose} />
    </div>
  </>
);

// ─── Primitives ───────────────────────────────────────────────────────────────
const Para = ({ children, style = {} }: ParaProps) => (
  <p style={{ fontSize: "16px", lineHeight: "1.8", color: "black", margin: "0 0 20px", fontFamily: "'DM Sans', sans-serif", ...style }}>{children}</p>
);


// const Note = ({ children }: { children: ReactNode }) => (
//   <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderLeft: "4px solid #f59e0b", borderRadius: "6px", padding: "14px 18px", margin: "24px 0", fontSize: "14px", color: "#92400e", lineHeight: "1.65", fontFamily: "'DM Sans', sans-serif" }}>
//     <strong>Sidenote.</strong> {children}
//   </div>
// );

// const RelatedCard = ({ title, desc }: CardProps) => (
//   <a href="#" className="related-card" style={{ display: "block", padding: "15px", border: "1px solid #e5e7eb", borderRadius: "8px", textDecoration: "none", marginBottom: "12px", transition: "border-color 0.2s, box-shadow 0.2s" }}>
//     <p style={{ margin: "0 0 4px", fontWeight: 600, fontSize: "14px", color: "#111827", fontFamily: "'DM Sans', sans-serif", lineHeight: "1.4" }}>{title}</p>
//     <p style={{ margin: 0, fontSize: "13px", color: "#6b7280", lineHeight: "1.5", fontFamily: "'DM Sans', sans-serif" }}>{desc}</p>
//   </a>
// );


// const CodeBlock = ({ children }: { children: ReactNode }) => (
//   <div style={{ background: "#1e1e2e", borderRadius: "8px", padding: "16px 20px", margin: "20px 0", overflowX: "auto" }}>
//     <code style={{ fontFamily: "monospace", fontSize: "13px", color: "#a6e3a1", lineHeight: "1.65", whiteSpace: "pre-wrap", display: "block" }}>{children}</code>
//   </div>
// );

// const DoTable = () => (
//   <div className="table-wrap" style={{ margin: "24px 0" }}>
//     <table style={{ width: "100%", minWidth: "480px", borderCollapse: "collapse", fontSize: "14px", fontFamily: "'DM Sans', sans-serif" }}>
//       <thead>
//         <tr>
//           <th style={{ background: "#fef3e2", padding: "11px 14px", textAlign: "left", fontWeight: 700, color: "#92400e", border: "1px solid #fed7aa", width: "50%" }}>❌ Don't</th>
//           <th style={{ background: "#f0fdf4", padding: "11px 14px", textAlign: "left", fontWeight: 700, color: "#166534", border: "1px solid #bbf7d0", width: "50%" }}>✅ Do</th>
//         </tr>
//       </thead>
//       <tbody>
//         {([
//           ["Focus on the results of individual prompts", "Group similar prompts and analyze commonalities in aggregate results"],
//           ["Think of it as a 'set and forget' task", "Have a plan to take action, like building relationships with commonly cited sources"],
//           ["Think of prompt tracking as rank tracking", "Understand that your 'position' in responses is highly volatile"],
//           ["Assume prompt tracking is the only source of AI visibility data", "Monitor traffic from LLMs, server logs, traditional search performance"],
//           ["Think having URLs cited is the ultimate goal", "Understand your business can be recommended without being cited"],
//           ["Try to track every possible keyword angle", "Start by prioritizing queries around high-value topics. Expand later"],
//         ] as [string, string][]).map(([dont, doIt], i) => (
//           <tr key={i} style={{ background: i % 2 === 0 ? "#fafafa" : "#fff" }}>
//             <td style={{ padding: "9px 14px", border: "1px solid #e5e7eb", color: "#374151", lineHeight: "1.55" }}>{dont}</td>
//             <td style={{ padding: "9px 14px", border: "1px solid #e5e7eb", color: "#374151", lineHeight: "1.55" }}>{doIt}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// );

// const ClusterTable = () => (
//   <div className="table-wrap" style={{ margin: "24px 0" }}>
//     <table style={{ width: "100%", minWidth: "520px", borderCollapse: "collapse", fontSize: "13px", fontFamily: "'DM Sans', sans-serif" }}>
//       <thead>
//         <tr style={{ background: "#f9fafb" }}>
//           {["Cluster Angle", "Potential Data Source", "Example Query"].map((h) => (
//             <th key={h} style={{ padding: "10px 13px", textAlign: "left", fontWeight: 700, color: "#374151", border: "1px solid #e5e7eb", fontSize: "12px" }}>{h}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {([
//           ["Competitive Positioning", "Google's 'People Also Ask'", "What's the best CRM for real estate agents?"],
//           ["Trust & Validation", "Forum and social media discussions", "Are Hoka running shoes reliable long-term?"],
//           ["Top-Converting Page", "Website analytics & self-attribution data", "What are people using instead of WeTransfer?"],
//           ["Funnel Stages (BoFu)", "Customer support queries", "Is HubSpot worth it for a small business?"],
//           ["Specific Requirements", "Ahrefs Keywords Explorer", "What's the best web hosting that includes cPanel?"],
//         ] as [string, string, string][]).map(([angle, source, query], i) => (
//           <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
//             <td style={{ padding: "9px 13px", border: "1px solid #e5e7eb", color: "#111827", fontWeight: 500 }}>{angle}</td>
//             <td style={{ padding: "9px 13px", border: "1px solid #e5e7eb", color: "#6b7280" }}>{source}</td>
//             <td style={{ padding: "9px 13px", border: "1px solid #e5e7eb", color: "#374151", fontStyle: "italic" }}>{query}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// );

// const SectionBadge = ({ n }: { n: number }) => (
//   <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "30px", height: "30px", background: ORANGE, color: "white", borderRadius: "50%", fontWeight: 700, fontSize: "14px", fontFamily: "'DM Sans', sans-serif", marginRight: "10px", flexShrink: 0 }}>{n}</div>
// );

const Heading = ({ level, children, id }: HeadingProps) => (
  <h2
    id={id}
    className="article-h2"
    style={{ fontSize: level === 2 ? "24px" : "19px", fontWeight: 700, color: "#111827", margin: "44px 0 14px", lineHeight: "1.3", fontFamily: "'DM Sans', sans-serif", borderBottom: "1px solid #f0f0f0", paddingBottom: "10px", scrollMarginTop: "70px" }}
  >
    {children}
  </h2>
);



const ImgPlaceholder = ({ caption, color = "#f3f4f6" }: ImgProps) => (
  <figure style={{ margin: "28px 0" }}>
    <div style={{ width: "100%", height: "240px", background: `linear-gradient(135deg, ${color}, #e9eaf0)`, borderRadius: "8px", border: "1px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ width: "40px", height: "40px", background: "#d1d5db", borderRadius: "6px", margin: "0 auto 8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21,15 16,10 5,21" />
          </svg>
        </div>
        <p style={{ margin: 0, fontSize: "12px", color: "#9ca3af", fontFamily: "'DM Sans', sans-serif" }}>Screenshot</p>
      </div>
    </div>
    {caption && <figcaption style={{ fontSize: "13px", color: "#9ca3af", marginTop: "8px", fontStyle: "italic", fontFamily: "'DM Sans', sans-serif" }}>{caption}</figcaption>}
  </figure>
);


// ─── Main ─────────────────────────────────────────────────────────────────────
export default function TemplateDesign() {
  const [activeId, setActiveId] = useState<string>(TOC_ITEMS[0].id);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Scroll-spy
  useEffect(() => {
    const els = TOC_ITEMS.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).map((e) => e.target.id);
        if (visible.length) {
          const first = TOC_ITEMS.find((t) => visible.includes(t.id));
          if (first) setActiveId(first.id);
        }
      },
      { rootMargin: "-10% 0px -60% 0px", threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Lock scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = window.innerWidth < 768 ? 58 : 24;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: "smooth" });
    setActiveId(id);
  };

  const activeLabel = TOC_ITEMS.find((t) => t.id === activeId)?.label ?? "Contents";

  return (
    <>
      <GlobalStyles />
      <Header onContactClick={() => { }} />

      {/* ── HERO ── */}
      <div className="hero-wrap" style={{ background: BLUE, padding: "56px 24px 48px", textAlign: "center" }}>

        <h1
          className="hero-title"
          style={{ fontSize: "46px", fontWeight: 800, color: "#fff", lineHeight: "1.15", maxWidth: "780px", margin: "0 auto 20px", fontFamily: "'DM Sans', sans-serif" }}
        >
          Top 7 Mobile App Scraping Services in India: 2025 Comparison
        </h1>
        <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", marginBottom: "14px", fontFamily: "'DM Sans', sans-serif" }}>
          By{" "}
          <a href="#" style={{ color: "#fff", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "3px" }}>
            Akshay Kumar Sharma
          </a>
        </p>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", fontFamily: "'DM Sans', sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
          February 28, 2026
          <span style={{ display: "inline-block", width: "4px", height: "4px", borderRadius: "50%", background: "rgba(255,255,255,0.5)" }} />
          18 min read
        </p>
      </div>

      {/* ── Mobile TOC sticky bar ── */}
      <div className="mobile-toc-bar">
        <button
          onClick={() => setDrawerOpen(true)}
          style={{ display: "flex", alignItems: "center", gap: "7px", background: BLUE, color: "white", border: "none", borderRadius: "5px", padding: "7px 12px", cursor: "pointer", fontSize: "13px", fontWeight: 600, fontFamily: "'DM Sans', sans-serif", flexShrink: 0 }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="15" y2="18" />
          </svg>
          Contents
        </button>
        <span style={{ fontSize: "12px", color: "#6b7280", fontFamily: "'DM Sans', sans-serif", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {activeLabel}
        </span>
      </div>

      {/* Mobile drawer */}
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} activeId={activeId} onSelect={scrollTo} />

      {/* ── PAGE BODY ── */}
      <div style={{ background: "#fff" }}>
        <div className="body-wrap" style={{ maxWidth: "1380px", margin: "0 auto", padding: "48px 32px" }}>
          <div className="page-grid" style={{ display: "grid", gridTemplateColumns: "220px 1fr 220px", gap: "48px", alignItems: "start" }}>

            {/* LEFT — TOC */}
            <TocSidebar activeId={activeId} onSelect={scrollTo} />

            {/* CENTER — Article */}
            <main style={{ minWidth: 0 }}>
              <Heading level={2} id="sec-01">
                Introduction
              </Heading>
              {/* <Para style={{ fontWeight: 700, fontSize: 32 }}>Introduction</Para> */}
              The leading mobile app scraping companies in India for 2025 include <strong>Clymin, Actowiz Solutions, Xbyte Technologies, PromptCloud, OutsourceBigData, Ultroneous, and HirInfotech</strong>—each specialising in different aspects of mobile data extraction. With over 75% of Indian e-commerce transactions occurring through mobile apps, competitive intelligence from app scraping has become essential for businesses.
              <br /><br /> <strong>Transparency Statement</strong>: This guide was researched and published by Clymin's team. We've committed to objective research based on publicly verifiable information about all providers. Where information isn't available, we note these gaps rather than making assumptions.
              <ImgPlaceholder caption="Custom prompt functionality in Brand Radar — monitor responses across locations and platforms." color="#eef1fc" />

              {/* Section: Monitoring */}
              <Heading level={2} id="sec-monitoring">
                Understanding Mobile App Scraping in India
              </Heading>
              <Para><strong style={{ fontSize: 20 }}>Technical Context: Why Mobile App Scraping Is Complex</strong></Para>
              <Para>
                Mobile app scraping differs fundamentally from web scraping. While web scraping parses HTML, CSS, and JavaScript from browser-accessible websites, mobile app scraping must decode app-specific data formats—JSON APIs, Protocol Buffers, and proprietary binary formats transmitted between mobile apps and their backend servers.
              </Para>

              <Para>
                <strong>iOS Scraping Challenges:</strong> Apple's walled garden ecosystem implements certificate pinning (preventing man-in-the-middle API interception), App Store anti-bot mechanisms, jailbreak detection systems, and device fingerprinting that distinguishes real iPhones from emulators. iOS scraping requires physical device farms with genuine Apple devices and residential Indian IP addresses.
              </Para>

              <Para>
                <strong>Android Scraping Challenges:</strong> Google Play Protect mechanisms, sophisticated device fingerprinting identifying emulators vs. real devices, app-specific obfuscation techniques, and API call signature verification. While Android's open ecosystem theoretically eases access, modern Android apps implement security approaching iOS-level complexity.
              </Para>

              <Para>
                <strong>India-Specific Challenges:</strong> Regional app variants serving different content by state, multilingual content across 22+ scheduled languages requiring proper Unicode handling, location-based restrictions common in food delivery and e-commerce apps, and frequent app updates reflecting India's fast-moving digital market.
              </Para>


              <Heading level={2} id="sec-framework">
                The Cost Reality: DIY vs. Outsourced Mobile App Scraping
              </Heading>
              <Para>Building in-house mobile app scraping infrastructure requires substantial investment:</Para>
              <Para style={{ fontSize: 20 }}><strong>The Infrastructure Challenge: What Mobile App Scraping Really Requires</strong></Para>
              <Para>Building in-house mobile app scraping infrastructure demands significant resources across multiple domains:</Para>
              <Para><strong>Device Farm Infrastructure:</strong>Physical iOS and Android devices representing popular models across various manufacturers and price points are essential since emulators get detected. This includes device management systems, charging infrastructure, and continuous device replacement as hardware ages or apps require newer OS versions. Maintaining diverse device types across different price points and regions is critical for accurate scraping.</Para>
              <Para><strong>Proxy and Network Infrastructure:</strong> Residential proxy pools from multiple Indian cities are necessary to avoid geo-blocking, as apps can detect and block datacenter IPs. IP rotation systems prevent rate limiting, while mobile network simulation replicates genuine user traffic patterns. High-volume scraping operations also require substantial bandwidth, and residential mobile IPs from major Indian carriers must be continuously maintained.</Para>
              <Para><strong>Specialised Engineering Resources:</strong> Mobile scraping requires engineers deeply familiar with iOS/Android internals. The ongoing maintenance burden is significant; apps deploy anti-scraping updates frequently (often 2-4 updates weekly per monitored app), requiring constant evasion technique development, data parsing adjustments, and transformation logic updates. This isn't a one-time development effort but continuous engineering work.</Para>
              <Para><strong> Why Outsourcing Delivers 70-85% Cost Savings:</strong></Para>
              <Para>Professional scraping services amortise infrastructure costs across hundreds of clients, delivering dramatic cost reductions compared to in-house development. Businesses typically save 70-85% by outsourcing versus building internal capabilities. Beyond direct cost savings, you gain immediate deployment instead of 6-12 month development timelines (reducing time-to-value by 90%), eliminate ongoing maintenance overhead as providers handle all app updates and anti-scraping changes, decrease upto 70 % upfront capital investment in device farms and proxy infrastructure, and benefit from economies of scale impossible for single-company implementations. The technical risk also transfers to providers who maintain 95%+ reliability as their core competency, while internal teams often struggle with 60-70% uptime during the learning curve.</Para>


              {/* <DoTable /> */}

              <Para>
                Identifying potential action steps is a big part of our focus when analyzing responses. When we launch new features like custom prompt tracking, we want to know whether AI responses reflect that Ahrefs now has this functionality, or instead reference dated sources.
              </Para><ImgPlaceholder color="#f0f4ff" />

              {/* Section: Framework */}
              {/* <Heading level={2} id="sec-framework">
                The framework: track relevant groups of prompts, not individual responses
              </Heading> */}
              <Heading level={2} id="sec-1"> Evaluation Criteria: How We Assess Providers </Heading>
              <Para>This comparison evaluates providers across six criteria based on publicly verifiable information:</Para>
              <Para><strong>1. Platform Coverage:</strong>iOS and Android scraping capabilities as explicitly stated on provider websites, noting platform-specific limitations.</Para>
              <Para><strong>2. Industry Specialisation:</strong>  Pre-built solutions for specific verticals (e-commerce, food delivery, real estate, social media, travel) vs. generic infrastructure requiring custom development.</Para>
              <Para><strong>3. Data Delivery Options:</strong> Data Delivery Options: API access, CSV/Excel exports, real-time webhooks, batch processing, and database integration support. We distinguish real-time delivery (minutes) from batch processing (daily/weekly).</Para>
              <Para><strong>4. Geographic Focus:</strong> Indian market expertise, local infrastructure, rupee billing, understanding of Indian app ecosystems vs. global operations with India as a secondary market.</Para>
              <Para><strong>5. Service Model:</strong>Fully managed services (provider handles implementation) vs. self-service platforms (client manages configuration) vs. project-based custom development.</Para>
              <Para><strong>6. Publicly Stated Capabilities:</strong> Verified metrics, case studies, and capabilities published on websites. Where information isn't available, we explicitly note gaps rather than making assumptions.</Para>


              {/* <ClusterTable /> */}
              {/* <Note>Certain prompts, particularly in ChatGPT, might not trigger a web search and instead rely on training data. Adding variations like "in 2026" can help if you're specifically looking for cited URLs.</Note> */}

              {/* Numbered sections */}
              {/* {SECTIONS.map(({ n, id, title, content, hasCode, code, hasImage }) => (
                <div key={id} id={id} style={{ scrollMarginTop: "70px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", margin: "44px 0 12px" }}>
                    <SectionBadge n={n} />
                    <h2 className="section-h2" style={{ fontSize: "20px", fontWeight: 700, color: "#111827", margin: 0, lineHeight: "1.35", fontFamily: "'DM Sans', sans-serif" }}>
                      {title}
                    </h2>
                  </div>
                  <Para>{content}</Para>
                  {hasCode && code && <CodeBlock>{code}</CodeBlock>}
                  {hasImage && <ImgPlaceholder color={n % 2 === 0 ? "#f0fdf4" : "#fdf4ff"} />}
                </div>
              ))} */}




              <div id="sec-3" >
                <Para style={{ fontSize: 18 }}><strong>1. Clymin</strong></Para>
                <Para><strong>Platform:</strong> iOS and Android with real-time extraction. App store monitoring for rankings and reviews.</Para>
                <Para> <strong>Specialisation:</strong> Five pre-built industry templates reducing deployment from 3-4 weeks to 24-48 hours:</Para>
                <Para> <strong>E-commerce:</strong> Product data, pricing, inventory (Flipkart, Amazon, Myntra, Ajio)</Para>
                <Para> <strong>Food & Grocery:</strong>Menus, pricing, delivery times (Swiggy, Zomato, Blinkit, Zepto, BigBasket)</Para>
                <Para> <strong>Real Estate:</strong>Listings, pricing trends (Housing.com, 99acres, MagicBricks)</Para>
                <Para> <strong>Social Media:</strong> Engagement metrics, sentiment analysis</Para>
                <Para><strong>Travel:</strong> Pricing, surge patterns, demand analysis</Para>
                <Para><strong>Data Delivery:</strong> API integration, CSV/Excel, database integration (PostgreSQL, MySQL, MongoDB), with included data cleansing and transformation.</Para>
                <Para><strong>Verified Metrics:</strong> 98.5% accuracy, 65M+ extractions. Client results: 20% revenue boost (e-commerce), 40% engagement improvement (social media), 35% efficiency gain (real estate).</Para>
                <Para><strong>Best For:</strong>Businesses in e-commerce, food delivery, real estate, social media, or travel needing rapid deployment with industry-specific templates and an Indian market focus.</Para>
              </div>

              <div id="sec-4">
                <Para style={{ fontSize: 18 }}><strong>2. Actowiz Solutions</strong></Para>
                <Para> <strong>Platform:</strong> Android and iOS with device emulation, proxy rotation, and geo-targeting. Coverage: 50+ countries, 200+ cities.</Para>
                <Para> <strong>Specialization:</strong> Enterprise mobile intelligence with extensive global coverage and proven track record serving Fortune 500 clients.</Para>
                <Para>  <strong>Capabilities:</strong> Extracts product listings, pricing/discounts, reviews with AI sentiment analysis, delivery SLAs, promotions, search rankings, engagement metrics. Industries: e-commerce, food delivery, travel, retail, finance, real estate, healthcare.</Para>
                <Para>  <strong>Data Delivery:</strong> JSON, CSV, Excel, REST APIs (real-time to weekly). AI-driven cleaning, sentiment tagging, trend detection. Direct BI integration (Power BI, Tableau, AWS, GCP, Azure).</Para>
                <Para>  <strong>Verified Metrics:</strong> 99.9% accuracy and uptime. Case studies: UAE client (17% delivery efficiency improvement), USA retailer (20% conversion increase), global ride-hailing (30% rider acquisition boost).</Para>
                <Para> <strong>Best For:</strong> Enterprises requiring established vendor credibility for stakeholder approval, global multi-country operations, AI-enhanced analytics with enterprise SLAs.</Para>
              </div>


              <div id="sec-5">
                <Para style={{ fontSize: 18 }}><strong>3. Xbyte Technologies</strong></Para>
                <Para>  <strong>Platform:</strong> iOS and Android using Python-based extraction. Focus on mobile app data unavailable in desktop versions.</Para>
                <Para>  <strong>Specialization:</strong> Cross-platform approach consolidating web and mobile data for unified datasets—valuable for monitoring same entities across channels.</Para>
                <Para>  <strong>Capabilities:</strong> Fully automated, accurate extraction, highly scalable, customized script development. Extensive industry coverage: e-commerce (Amazon, Shopee, Lazada), travel (Agoda, MakeMyTrip), grocery (Instacart, BigBasket), food delivery (Swiggy, Zomato), plus OTT, social media, hotels, medicine delivery, recruitment, and more.</Para>
                <Para>  <strong>Data Delivery:</strong> Flexible delivery formats and schedules based on client requirements.</Para>
                <Para>  <strong>Best For:</strong> Businesses needing both web and mobile data through single vendor for MAP compliance monitoring, cross-platform data matching, Python-based custom solutions.</Para>
              </div>


              <div id="sec-6">
                <Para style={{ fontSize: 18 }}><strong>4. PromptCloud</strong></Para>
                <Para> <strong>Platform:</strong> Google Play Store and Apple App Store scraping (metadata, rankings, reviews) rather than in-app data extraction.</Para>
                <Para>  <strong>Specialization:</strong> App store intelligence for market research. Extracts app category, star ratings, user reviews, download counts, app IDs, developer information, version-specific reviews.</Para>
                <Para>  <strong>Capabilities:</strong>"Years of expertise in web scraping technologies" with powerful infrastructure handling large-scale extraction. Customized web crawlers for specific data points. References Google Play's 2.2M apps and Apple App Store's 2M apps.</Para>
                <Para>  <strong>Data Delivery:</strong> CSV, XML, JSON formats. Data-as-a-service platform with enterprise capabilities, live crawls, scheduled extraction.</Para>
                <Para> <strong>Best For:</strong> ASO agencies optimizing app store presence, app developers monitoring competitive rankings and review sentiment, market researchers studying app category dynamics.</Para>
              </div>


              <div id="sec-7">
                <Para style={{ fontSize: 18 }}><strong>5. OutsourceBigData</strong></Para>
                <Para> <strong>Platform:</strong>Mobile app scraping with AI-driven extraction, real-time updates, anti-blocking mechanisms. "Automation First" approach with ready-to-use BOTS or custom BOTS.</Para>
                <Para> <strong>Specialization:</strong> BPO-style data services with mobile scraping as component. ISO 9001 and ISO 27001 certified for quality and security.</Para>
                <Para>  <strong>Capabilities:</strong> End-to-end service from scraping through cleansing, analysis, to reporting. Periodical monitoring, market intelligence, price comparisons, smart data crawling. 12+ years experience, 2,500+ projects, 750+ clients, 98% satisfaction.</Para>
                <Para> <strong>Transparent Pricing:</strong> Mobile app scraping starting $100 USD. Bulk data scraping starting $250 USD. Scheduled scraping starting $50 USD per schedule.</Para>
                <Para> <strong>Data Delivery:</strong> Excel, XML, JSON, CSV formats. Multiple engagement models: project-based, hourly, pay-as-you-go, subscription.</Para>
                <Para> <strong>Best For:</strong> Budget-conscious organizations testing mobile intelligence, businesses needing multiple data services through consolidated BPO vendor, automation-focused operations.</Para>
              </div>

              <div id="sec-8">
                <Para style={{ fontSize: 18 }}><strong>6. Ultroneous</strong></Para>
                <Para> <strong>Platform:</strong>"Seamless Android and iOS integration" with emphasis on legal compliance.</Para>
                <Para> <strong>Specialization:</strong> Tailored solutions customized to unique requirements rather than standardized templates. Explicit legal compliance assurance adhering to privacy laws and industry regulations.</Para>
                <Para> <strong>Capabilities:</strong> Up-to-date data adapting to dynamic app landscape, cutting-edge technology for accuracy, reliable and secure data handling, free sample data and consultation. Industries: e-commerce (Amazon, Lowes, Tmall, Lazada, Shopee), food/grocery, travel, social media, real estate, OTT media.</Para>
                <Para>  <strong>Data Delivery:</strong> Real-time monitoring, market analysis capabilities. Formats not extensively detailed on public website.</Para>
                <Para> <strong>Best For:</strong> Regulated industries (healthcare, finance) requiring explicit compliance documentation, businesses prioritizing legal compliance and secure data handling, customized industry-specific solutions.</Para>
              </div>

              <div id="sec-9">
                <Para style={{ fontSize: 18 }}><strong>7. HirInfotech</strong></Para>
                <Para><strong>Platform:</strong> Android specialization (no iOS mentioned). 13+ years expertise, 2,745+ clients across USA, Europe, Australia.</Para>
                <Para><strong>Specialization:</strong> Android app scraping with enterprise-grade infrastructure. Focus on real-time competitive intelligence across 150+ countries.</Para>
                <Para> <strong>Capabilities:</strong> Proprietary API interception (99.7% accuracy), cloud-scale processing, machine learning content recognition, SOC-2 certified security, GDPR/CCPA compliance. Performance: 80+ Android apps processed, 1.8M+ data points daily, 99.2% accuracy, 99.9% uptime.</Para>
                <Para> <strong>Data Delivery:</strong>  CSV, JSON, Excel with customized dashboards, automated reporting. AI-powered sentiment analysis and trend detection.</Para>
                <Para>  <strong>Case Study:</strong> Fortune 500 retail client achieved 34% competitive positioning improvement, 28% market share increase, 19% profit margin increase.</Para>
                <Para> <strong>Best For:</strong> Android-only projects, Google Play Store intelligence, enterprise Android monitoring requiring 99.9% uptime, global market intelligence.</Para>
              </div>





              {/* ── Service Comparison Matrix ── */}
              <Heading level={2} id="sec-10">
                Service Comparison Matrix
              </Heading>

              <div style={{ overflowX: "auto", margin: "24px 0 36px" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'DM Sans', sans-serif", fontSize: "14px" }}>
                  <thead>
                    <tr style={{ background: "#4caf7d" }}>
                      {["Provider", "iOS/Android", "Real-Time", "Industry Templates", "Data Formats", "India Focus", "Primary Strength"].map((h) => (
                        <th key={h} style={{ padding: "12px 14px", color: "#fff", fontWeight: 700, textAlign: "center", border: "1px solid #ddd", fontSize: "13px", lineHeight: "1.3" }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { provider: "Clymin", platform: "Both ✓", realTime: "Yes", templates: "5 industries", formats: "API, CSV, Excel, DB", stars: 5, strength: "Industry templates" },
                      { provider: "Actowiz", platform: "Both ✓", realTime: "Not specified", templates: "Custom", formats: "JSON, CSV, Excel, API", stars: 4, strength: "Enterprise credibility" },
                      { provider: "Xbyte", platform: "Both ✓", realTime: "Not specified", templates: "Custom", formats: "Not specified", stars: 4, strength: "Web+mobile hybrid" },
                      { provider: "PromptCloud", platform: "App stores ✓", realTime: "Batch", templates: "App store", formats: "CSV, XML, JSON", stars: 3, strength: "ASO intelligence" },
                      { provider: "OutsourceBigData", platform: "Both ✓", realTime: "Yes", templates: "BOTS", formats: "Excel, XML, JSON, CSV", stars: 3, strength: "Budget-friendly" },
                      { provider: "Ultroneous", platform: "Both ✓", realTime: "Yes", templates: "Custom", formats: "Not specified", stars: 3, strength: "Compliance focus" },
                      { provider: "HirInfotech", platform: "Android ✓", realTime: "Yes", templates: "Custom", formats: "CSV, JSON, Excel", stars: 3, strength: "Android specialist" },
                    ].map((row, i) => (
                      <tr key={row.provider} style={{ background: i % 2 === 0 ? "#fff" : "#f9fafb" }}>
                        <td style={{ padding: "12px 14px", fontWeight: 700, color: "#111827", border: "1px solid #e5e7eb", whiteSpace: "nowrap" }}>{row.provider}</td>
                        <td style={{ padding: "12px 14px", textAlign: "center", border: "1px solid #e5e7eb", color: "#374151" }}>{row.platform}</td>
                        <td style={{ padding: "12px 14px", textAlign: "center", border: "1px solid #e5e7eb", color: "#374151" }}>{row.realTime}</td>
                        <td style={{ padding: "12px 14px", textAlign: "center", border: "1px solid #e5e7eb", color: "#374151" }}>{row.templates}</td>
                        <td style={{ padding: "12px 14px", textAlign: "center", border: "1px solid #e5e7eb", color: "#374151", whiteSpace: "pre-line" }}>{row.formats}</td>
                        <td style={{ padding: "12px 14px", textAlign: "center", border: "1px solid #e5e7eb", fontSize: "16px", letterSpacing: "1px" }}>
                          {"★".repeat(row.stars)}{"☆".repeat(5 - row.stars)}
                        </td>
                        <td style={{ padding: "12px 14px", textAlign: "center", border: "1px solid #e5e7eb", color: "#374151" }}>{row.strength}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Legend */}
              <Para style={{ fontSize: "13px", color: "#4b5563", marginTop: "-16px" }}>
                <strong>India Focus:</strong> ★★★★★ = India HQ/rupee billing &nbsp;|&nbsp; ★★★★ = Strong presence &nbsp;|&nbsp; ★★★ = Global with India coverage
              </Para>


              <Heading level={2} id="sec-11"> Matching Services to Business Needs </Heading>
              <Para> <strong>E-Commerce Price Monitoring in India? → Clymin</strong> (pre-built Flipkart/Amazon/Myntra extractors, 48-hour deployment vs. 3-4 weeks, real-time pricing updates, Indian market focus)</Para>
              <Para> <strong>Food Delivery Competitive Intelligence? → Clymin</strong>  (Swiggy/Zomato/Blinkit templates, menu pricing extraction, delivery time monitoring, review sentiment analysis)</Para>
              <Para> <strong>Real Estate Property Aggregation? → Clymin</strong>  (Housing.com/99acres/MagicBricks extractors, structured property data, database integration, daily updates)</Para>
              <Para>  <strong>Social Media Brand Monitoring? → Clymin</strong> (engagement metrics tracking, 22+ Indian language sentiment analysis, trending topic identification, real-time alerts)</Para>
              <Para> <strong>Travel/Ride-Sharing Intelligence? → Clymin</strong>(surge pricing monitoring, demand analysis, competitor fare tracking, real-time availability data)</Para>
              <Para>  <strong>App Store Optimisation (ASO)? → PromptCloud</strong> (app store metadata specialist, reviews/rankings focus, historical ranking data)</Para>
              <Para> <strong>Android-Only Projects? → HirInfotech</strong>  (99.2% accuracy, 13+ years Android expertise, 1.8M+ daily data points, 99.9% uptime)</Para>
              <Para>  <strong>Cross-Platform Web+Mobile Intelligence? → Xbyte</strong> (consolidates web and mobile data, MAP compliance monitoring, Python-based custom solutions)</Para>
              <Para> <strong>Enterprise with Vendor Credibility Requirements? → Actowiz</strong>  (established market presence, enterprise SLAs, global 50+ country coverage, Fortune 500 client case studies)</Para>
              <Para>  <strong>Budget-Conscious Startups Testing Hypotheses? → OutsourceBigData</strong>  ($100 starting price, transparent pricing, risk-free trial, flexible pay-as-you-go)</Para>
              <Para> <strong>Compliance-Critical Regulated Industries? → Ultroneous</strong> (explicit legal compliance assurance, secure data handling, privacy law adherence)</Para>





              <Heading level={2} id="sec-12"> Key Questions Answered </Heading>
              <Para><strong style={{ fontSize: 20 }}>How much does mobile app scraping cost in India?</strong></Para>
              <ul style={{ color: 'black' }}>
                <li > <strong>Entry-level: </strong> OutsourceBigData lists $100 USD starting price.</li>
                <li><strong>Mid-market:</strong> ₹50,000-1,50,000/month for 50-200 apps.</li>
                <li><strong>Enterprise:</strong>  ₹2,00,000-5,00,000+/month for hundreds of apps with real-time delivery.</li>
                <li><strong>DIY comparison:</strong> In-house costs ₹15-25 lakhs annually—making professional services 5-10x more cost-effective.</li>
              </ul>

              <Para><strong style={{ fontSize: 20 }}>Can you scrape the Apple App Store?</strong></Para>
              <Para>Yes, professional services extract app metadata, rankings, reviews, ratings, and historical data from India's Apple App Store. Requires specialized iOS infrastructure with physical iPhone devices and residential Indian IPs to bypass Apple's certificate pinning and anti-bot mechanisms.</Para>
              <Para>  <strong>Providers with iOS:</strong> Clymin (both platforms), Actowiz (enterprise), Xbyte (Python-based), Ultroneous (compliance focus). PromptCloud specializes in app store metadata vs. in-app extraction.</Para>

              <Para><strong style={{ fontSize: 20 }}>What's the difference from web scraping?</strong></Para>
              <Para>  <strong>Mobile scraping:</strong> targets iOS/Android apps (JSON APIs, Protocol Buffers) with certificate pinning, device fingerprinting, requiring physical device farms and mobile residential IPs—2-3x more complex and costly than web scraping which parses HTML from websites using standard servers.</Para>
              <Para>  <strong>Data advantage:</strong> Mobile APIs often provide cleaner structured data despite higher technical complexity.</Para>


              <Para><strong style={{ fontSize: 20 }}>Is it legal in India?</strong></Para>
              <Para>  <strong>Public data scraping:</strong> (pricing, reviews, listings) for business intelligence generally falls within legal bounds. Terms of service prohibit automation but enforceability varies. IT Act 2000 (Section 43/66) prohibits unauthorized access—scraping public data without bypassing security presents lower risk. Data Protection Act 2023 regulates personal data requiring compliance.</Para>
              <Para>  <strong>Best practices:</strong> Scrape only public data, avoid fake accounts, use for internal intelligence, implement retention policies, consult legal counsel for regulated industries.</Para>


              <Para><strong style={{ fontSize: 20 }}>Can you scrape without detection?</strong></Para>
              <Para>Yes, through physical Android devices (Samsung, OnePlus, Xiaomi), residential mobile IPs from Indian carriers (Airtel, Jio, Vi), human-realistic timing, authentic headers, session management mimicking organic usage.</Para>
              <Para>  <strong>Provider claims:</strong> HirInfotech (99.2% accuracy), Actowiz (99.9%), Clymin (98.5%). Success rates: 95-99% for most apps; banking/fintech with sophisticated security pose higher challenges.</Para>





              <Heading level={2} id="sec-13"> Conclusion </Heading>
              <Para> <strong>Clymin:</strong>Industry templates (e-commerce, food, real estate, social, travel) enable 24-48 hour deployment. Real-time capability, Indian focus (rupee billing, local infrastructure), 98.5% accuracy, 65M+ extractions. Best for: rapid deployment with pre-built solutions.</Para>
              <Para> <strong>Actowiz:</strong> Enterprise infrastructure with proven Fortune 500 client track record (99.9% accuracy/uptime), global coverage (50+ countries), AI analytics. Best for: enterprises requiring established vendor credibility and global scale.</Para>
              <Para> <strong>Xbyte:</strong> Cross-platform (web+mobile) consolidation, Python-based custom development. Best for: MAP compliance monitoring across channels.</Para>
              <Para>  <strong>PromptCloud:</strong> App store intelligence specialist. Best for: ASO agencies and app developers prioritizing app store positioning.</Para>
              <Para> <strong>OutsourceBigData:</strong> Budget-friendly ($100 starting), transparent pricing, BPO-style multi-service. Best for: startups testing mobile intelligence hypotheses.</Para>
              <Para>  <strong>Ultroneous:</strong> Legal compliance focus, secure data handling. Best for: regulated industries requiring compliance documentation.</Para>
              <Para> <strong>HirInfotech:</strong> Android specialist (99.2% accuracy, 13+ years, 2,745 clients), enterprise infrastructure (99.9% uptime). Best for: Android-only projects and global market intelligence. </Para>
              <Para> <strong>Selection Framework:</strong> </Para>
              <ul style={{ color: 'black' }}>
                <li>Industry-specific needs (e-com/food/real estate/social/travel) → Clymin</li>
                <li>Enterprise credibility → Actowiz</li>
                <li>ASO focus → PromptCloud</li>
                <li>Web + mobile hybrid → Xbyte</li>
                <li>Budget constraints → OutsourceBigData</li>
                <li>Compliance critical → Ultroneous</li>
                <li>Android-only → HirInfotech</li>
              </ul>
            </main>


            <AuthorSidebar />

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}