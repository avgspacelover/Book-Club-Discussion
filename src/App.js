import { useState } from "react";
import coverImg from "./images.jpg";
const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Playfair+Display:ital,wght@0,700;1,400&display=swap";

const CLUB_NAME = "SDMC Book Club";
const DATE = "Sunday, 14th June";
const VENUE = "Venue Placeholder";
const BOOK_TITLE = "Acts Of God";
const AUTHOR = "Kanan Gill";
const COVER_IMAGE = coverImg;

const QUESTIONS = [
  {
    q: "Question 1: Opening theme",
    context:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Discuss how the opening sets the tone for the rest of the narrative.",
  },
  {
    q: "Question 2: Character development",
    context:
      "How do the main characters evolve throughout the story? Consider the pivotal moments that shaped their decisions and what this reveals about the author's intent.",
  },
  {
    q: "Question 3: Central conflict",
    context:
      "What is the core tension driving the plot? How does the author build and resolve — or leave unresolved — this conflict by the final chapter?",
  },
  {
    q: "Question 4: Setting and atmosphere",
    context:
      "How does the setting function as more than a backdrop? Consider how place and time influence character behavior and thematic meaning in the book.",
  },
  {
    q: "Question 5: Narrative voice",
    context:
      "Discuss the choice of narrator and point of view. How does the narrative voice shape what we know, what we're denied, and how we feel about the story?",
  },
  {
    q: "Question 6: Symbolism and motifs",
    context:
      "Identify a recurring symbol or motif. What does it represent, and how does its meaning shift across different parts of the book?",
  },
  {
    q: "Question 7: Relationships",
    context:
      "Pick two characters whose relationship most interested you. What does their dynamic reveal about broader themes of power, love, loyalty, or conflict?",
  },
  {
    q: "Question 8: Moral questions",
    context:
      "Does the book present a clear moral stance, or does it deliberately resist one? Were there moments where you found yourself questioning your own values?",
  },
  {
    q: "Question 9: Resonance",
    context:
      "Which scene or passage stayed with you most after finishing the book, and why? What does its lingering effect tell you about the book's deeper concerns?",
  },
  {
    q: "Question 10: Overall verdict",
    context:
      "How would you evaluate this book in terms of its ambition and execution? What did it do well, and where did it fall short for you personally?",
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
    padding: 1.5rem 2.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    background: #f5f1eb;
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .back-btn {
    background: none;
    border: 1px solid #d4cbc0;
    color: #8c7f72;
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    cursor: pointer;
    padding: 7px 14px;
    transition: border-color 0.2s, color 0.2s;
    flex-shrink: 0;
  }

  .back-btn:hover {
    border-color: #8c7f72;
    color: #1c1814;
  }

  .disc-topbar-club {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #b0a498;
  }

  .disc-body {
    max-width: 640px;
    margin: 0 auto;
    padding: 3rem 2rem 5rem;
  }

  .disc-header {
    margin-bottom: 3rem;
  }

  .disc-book-label {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #8c7f72;
    margin-bottom: 12px;
  }

  .disc-book-title {
    font-family: 'Playfair Display', serif;
    font-size: 32px;
    font-weight: 700;
    color: #1c1814;
    line-height: 1.25;
    margin-bottom: 8px;
  }

  .disc-book-author {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 15px;
    font-weight: 400;
    color: #8c7f72;
  }

  .disc-header-line {
    width: 100%;
    height: 1px;
    background: #e0d9d0;
    margin-top: 2rem;
    border: none;
    display: block;
  }

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
          <button className="back-btn" onClick={onBack}>
            ← Back
          </button>
          <span className="disc-topbar-club">{CLUB_NAME}</span>
        </div>
        <div className="disc-body">
          <div className="disc-header">
            <p className="disc-book-label">Discussion Guide</p>
            <p className="disc-book-title">{BOOK_TITLE}</p>
            <p className="disc-book-author">{AUTHOR}</p>
            <hr className="disc-header-line" />
          </div>
          <p className="disc-q-count">{QUESTIONS.length} Questions</p>
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
