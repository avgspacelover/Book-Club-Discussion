import { useState } from "react";
// import coverImg from "./images.jpg";
const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Playfair+Display:ital,wght@0,700;1,400&display=swap";

const CLUB_NAME = "SDMC Book Club";
const DATE = "Sunday, 14th June";
const VENUE = "Venue Placeholder";
const BOOK_TITLE = "Acts Of God";
const AUTHOR = "Kanan Gill";
const COVER_IMAGE = "/images.jpg";

const QUESTIONS = [
  {
    q: "Playing God",
    context:
      " If you could simulate a universe and intervene in it, would you? Where would you draw the ethical line?",
  },
  {
    q: "Living in a simulation",
    context:
      " If you found out your reality was a simulation run by someone else, would it change how you live? Does 'real' experience require a'real' world?",
  },
  {
    q: "Truthfulness as chaos",
    context:
      " The lapel pin that only tells the truth causes disorder wherever it goes. Is the novel suggesting that honesty is socially destabilising, or that the world is built on convenient fictions?",
  },
  {
    q: "Private vs. public belief",
    context:
      "The science-hating movement is partly built on community, not just ideology. How much of what people believe is about belonging rather than truth?",
  },
  {
    q: "Incompetence vs. expertise",
    context:
      "Can you think of a time when an outsider or an amateur disrupted a system that experts couldn't? Is there value in not knowing the rules?",
  },
  {
    q: "The creator's responsibility",
    context:
      "If you bring something into existence — a child, a company, a community — what obligations does that create? Can you ever fully exit that responsibility?",
  },
  {
    q: "Meaning without purpose",
    context:
      " If you learned your life was part of someone else's experiment, and their goal had nothing to do with your happiness, could you still find your own meaning?",
  },
  {
    q: "Gill's standup voice on the page ",
    context:
      "Several readers note they could 'hear' Gill's voice while reading. Is this an asset to the novel or a limitation? What does it mean for fiction to carry a performer's presence?",
  },
  {
    q: "Comedy and hard questions",
    context:
      "  Do you find it easier to engage with difficult ideas (death, meaninglessness, God) when they're wrapped in humour? Or does comedy trivialise them?",
  },
  {
    q: "What does 'Acts of God' mean?",
    context:
      "The title traditionally refers to unforeseeable events beyond human control. By the end of the novel, how has Gill reframed or complicated that definition?",
  },
];

const globalCSS = `
  @import url('${FONT_URL}');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #f5f1eb;
    font-family: 'Montserrat', sans-serif;
    color: #1c1814;
    -webkit-font-smoothing: antialiased;
  }

  /* ── Cover page ── */
  .cover-root {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem 1.5rem;
    background: #f5f1eb;
  }

  .cover-inner {
    text-align: center;
    max-width: 420px;
    width: 100%;
  }

  .cover-club-name {
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: #3a2e24;
    margin-bottom: 6px;
  }
 
  .cover-byline {
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.1em;
    color: #5a4e42;
    line-height: 1.9;
  }

  .cover-rule {
    width: 1px;
    height: 48px;
    background: linear-gradient(to bottom, transparent, #c4b9ae, transparent);
    margin: 1.5rem auto;
    border: none;
    display: block;
  }

  .cover-img-wrap {
    position: relative;
    display: inline-block;
    margin-bottom: 2rem;
  }

  .cover-img {
    display: block;
    width: 180px;
    height: 270px;
    object-fit: cover;
    box-shadow:
      0 2px 4px rgba(0,0,0,0.08),
      0 8px 24px rgba(0,0,0,0.14),
      0 20px 48px rgba(0,0,0,0.10);
  }

  .cover-img-accent {
    position: absolute;
    inset: -6px -6px -6px -6px;
    border: 1px solid #c4b9ae;
    pointer-events: none;
    z-index: -1;
  }

  .cover-title {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0.01em;
    color: #1c1814;
    margin-bottom: 4px;
    line-height: 1.3;
  }

  .cover-title-rule {
    width: 32px;
    height: 2px;
    background: #8c7f72;
    margin: 14px auto 0;
    border: none;
    display: block;
  }

  .cover-author {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 13px;
    font-weight: 400;
    color: #8c7f72;
    letter-spacing: 0.03em;
    margin-top: 6px;
    margin-bottom: 0;
  }
 
  .start-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: 2.5rem;
    padding: 14px 32px;
    background: #1c1814;
    color: #f5f1eb;
    border: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.25s, transform 0.15s;
  }

  .start-btn:hover {
    background: #3a2e24;
    transform: translateY(-1px);
  }

  .start-btn:active {
    transform: translateY(0);
  }

  .start-btn-arrow {
    font-size: 14px;
    letter-spacing: 0;
    transition: transform 0.2s;
  }

  .start-btn:hover .start-btn-arrow {
    transform: translateX(4px);
  }

  /* ── Discussion page ── */
  .disc-root {
    min-height: 100vh;
    background: #f5f1eb;
    padding: 0;
  }
 
  .disc-topbar {
    border-bottom: 1px solid #e0d9d0;
    padding: 0.9rem 1.5rem;
    background: #f5f1eb;
    position: sticky;
    top: 0;
    z-index: 10;
  }
  /* 1. row1 — centered with relative positioning for back btn */
  .disc-topbar-row1 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.6rem;
    position: relative;
  }
  
  /* 2. row2 — centered */
  .disc-topbar-row2 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.9rem;
  }
  
  /* 3. text block — center aligned */
  .disc-topbar-text {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    align-items: center;
    text-align: center;
  }
  
  .disc-topbar-cover {
    width: 38px;
    height: 56px;
    object-fit: cover;
    flex-shrink: 0;
    box-shadow: 1px 2px 8px rgba(0,0,0,0.15);
  }
 
  .back-btn {
    background: none;
    border: none;
    color: #8c7f72;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
    padding: 0;
    line-height: 1;
    position: absolute;
    left: 0;
    transition: color 0.2s, transform 0.15s;
  }
 
  .back-btn:hover {
     color: #1c1814; 
     transform: translateX(-2px); 
  }
 
  .disc-topbar-club {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #b0a498;
  }
 
  .disc-topbar-title {
    font-family: 'Playfair Display', serif;
    font-size: 17px;
    font-weight: 700;
    color: #1c1814;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.2;
  }
 
  .disc-topbar-author {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 12px;
    color: #8c7f72;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
 
  .disc-topbar-guide {
    font-family: 'Montserrat', sans-serif;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #b0a498;
    margin-top: 2px;
  }


  .disc-body {
    max-width: 640px;
    margin: 0 auto;
    padding: 2.5rem 2rem 5rem;
  }
 /*
 
 */
  .disc-q-count {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #b0a498;
    margin-bottom: 1.5rem;
  }
 
  /* Accordion */
  .accordion-item {
    border-bottom: 1px solid #e0d9d0;
  }
 
  .accordion-item:first-child {
    border-top: 1px solid #e0d9d0;
  }
 
  .accordion-btn {
    width: 100%;
    background: none;
    border: none;
    text-align: left;
    padding: 1.1rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    transition: background 0.15s;
  }
 
  .accordion-btn:hover .accordion-q-text {
    color: #3a2e24;
  }
 
  .accordion-num {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: #c4b9ae;
    min-width: 28px;
    flex-shrink: 0;
    font-family: 'Montserrat', sans-serif;
    padding-top: 1px;
  }
 
  .accordion-q-text {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: #1c1814;
    flex: 1;
    line-height: 1.5;
    transition: color 0.15s;
    text-align: left;
  }
 
  .accordion-chevron {
    font-size: 16px;
    color: #c4b9ae;
    flex-shrink: 0;
    transition: transform 0.25s cubic-bezier(0.4,0,0.2,1), color 0.15s;
    line-height: 1;
  }
 
  .accordion-chevron.open {
    transform: rotate(180deg);
    color: #8c7f72;
  }
 
  .accordion-body {
    padding: 0 0 1.4rem calc(28px + 1rem);
    font-size: 13px;
    line-height: 1.85;
    color: #5a5048;
    font-weight: 400;
    letter-spacing: 0.01em;
  }
`;

function InjectCSS() {
  return <style dangerouslySetInnerHTML={{ __html: globalCSS }} />;
}

function CoverPage({ onStart }) {
  return (
    <>
      <InjectCSS />
      <div className="cover-root">
        <div className="cover-inner">
          <p className="cover-club-name">{CLUB_NAME}</p>
          <div className="cover-byline">
            <span>{DATE}</span>
            <br />
            <span>{VENUE}</span>
          </div>
          <hr className="cover-rule" />
          <div className="cover-img-wrap">
            <img src={COVER_IMAGE} alt="Book cover" className="cover-img" />
            <div className="cover-img-accent" />
          </div>
          <p className="cover-title">{BOOK_TITLE}</p>
          <p className="cover-author">By {AUTHOR}</p>
          <hr className="cover-title-rule" />
          <button className="start-btn" onClick={onStart}>
            Start Discussion
            <span className="start-btn-arrow">→</span>
          </button>
        </div>
      </div>
    </>
  );
}

function DiscussionPage({ onBack }) {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      <InjectCSS />
      <div className="disc-root">
      <div className="disc-topbar">
        <div className="disc-topbar-row1">
          <button className="back-btn" onClick={onBack}>←</button>
          <span className="disc-topbar-club">{CLUB_NAME}</span>
        </div>
        <div className="disc-topbar-row2">
          <img src={COVER_IMAGE} alt="Book cover" className="disc-topbar-cover" />
          <div className="disc-topbar-text">
          <span className="disc-topbar-title">{BOOK_TITLE}</span>
          <span className="disc-topbar-author">{AUTHOR}</span>
          <span className="disc-topbar-guide">Discussion Guide</span>
        </div>
      </div>
</div>
        <div className="disc-body">
          <p className="disc-q-count">{QUESTIONS.length} Prompts</p>
          <div>
            {QUESTIONS.map((item, i) => {
              const isOpen = openIndex === i;
              const qLabel = item.q.split(":")[0];
              const qText = item.q.split(":").slice(1).join(":").trim();
              return (
                <div key={i} className="accordion-item">
                  <button className="accordion-btn" onClick={() => toggle(i)}>
                    <span className="accordion-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="accordion-q-text">{qText || qLabel}</span>
                    <span
                      className={`accordion-chevron${isOpen ? " open" : ""}`}
                    >
                      ▾
                    </span>
                  </button>
                  {isOpen && <p className="accordion-body">{item.context}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default function App() {
  const [page, setPage] = useState("cover");
  return page === "cover" ? (
    <CoverPage onStart={() => setPage("discussion")} />
  ) : (
    <DiscussionPage onBack={() => setPage("cover")} />
  );
}
