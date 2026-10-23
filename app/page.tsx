import type { NextPage } from "next";
import Link from "next/link";
import Header from "./components/Header";

// ─── Replace these with your real values ────────────────────────────────────
const GITHUB_RELEASES = "https://github.com/Priyank911/Tawny/releases";
const GITHUB_REPO = "https://github.com/Priyank911/Tawny";
const YOUTUBE_VIDEO_ID = "c60GPODuHI4";
const CONTACT_EMAIL = "developer.priyank0911@gmail.com";
// ────────────────────────────────────────────────────────────────────────────

const DownloadIcon = () => (
  <svg
    className="dl-icon"
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const fontStack =
  "var(--font-bricolage), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

const Page: NextPage = () => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        color: "#111111",
        minHeight: "100vh",
        fontFamily: fontStack,
      }}
    >
      <Header githubRepo={GITHUB_REPO} githubReleases={GITHUB_RELEASES} />

      <main>
        {/* ── Hero ── */}
        <section className="hero-grid">
          {/* ── Left ── */}
          <div>
            {/* Tag row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "32px",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  backgroundColor: "#111111",
                  color: "#ffffff",
                  fontSize: "10px",
                  fontWeight: 700,
                  padding: "3px 9px",
                  borderRadius: "4px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Early Preview
              </span>
              <span
                style={{
                  fontSize: "12px",
                  color: "#9ca3af",
                  letterSpacing: "0.01em",
                }}
              >
                Windows · macOS · Linux
              </span>
            </div>

            {/* Hook */}
            <h1
              style={{
                fontSize: "clamp(2.2rem, 3.8vw, 3.25rem)",
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: "-0.045em",
                marginBottom: "22px",
                color: "#0d0d0d",
                fontFamily: fontStack,
              }}
            >
              Your voice,
              <br />
              exactly where
              <br />
              you type.
            </h1>

            <p
              style={{
                fontSize: "15.5px",
                color: "#4b5563",
                lineHeight: 1.72,
                marginBottom: "40px",
                maxWidth: "400px",
                fontWeight: 400,
              }}
            >
              One shortcut. Dictate, rewrite selected text, generate images, or
              ask a question. Tawny works in any app, stays out of the way, and
              keeps your voice data on your machine.
            </p>

            {/* Downloads */}
            <div style={{ marginBottom: "28px" }}>
              <p
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#9ca3af",
                  marginBottom: "12px",
                }}
              >
                Download Early Preview
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {[
                  {
                    label: "Windows",
                    ext: ".exe",
                    href: "https://github.com/Priyank911/Tawny/releases/download/v0.1.2/Tawny-0.1.2-windows-x64.exe",
                  },
                  {
                    label: "macOS",
                    ext: ".dmg",
                    href: "https://github.com/Priyank911/Tawny/releases/download/v0.1.2/Tawny-0.1.2-mac-arm64.dmg",
                  },
                  {
                    label: "Linux",
                    ext: ".AppImage",
                    href: "https://github.com/Priyank911/Tawny/releases/download/v0.1.2/Tawny-0.1.2-linux-x64.AppImage",
                  },
                ].map(({ label, ext, href }) => (
                  <a
                    key={label}
                    href={href}
                    download
                    className="dl-btn"
                  >
                    <DownloadIcon />
                    <span style={{ fontWeight: 600 }}>{label}</span>
                    <span
                      style={{
                        color: "#9ca3af",
                        fontSize: "11px",
                        fontWeight: 400,
                      }}
                    >
                      {ext}
                    </span>
                  </a>
                ))}
              </div>
              <p
                style={{
                  fontSize: "11px",
                  color: "#9ca3af",
                  marginTop: "10px",
                  lineHeight: 1.6,
                }}
              >
                Unsigned build. Verify checksum on the{" "}
                <a
                  href={GITHUB_RELEASES}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#6b7280",
                    textDecoration: "underline",
                    textUnderlineOffset: "2px",
                  }}
                >
                  Releases page
                </a>
                . macOS: Intel users download the{" "}
                <a
                  href="https://github.com/Priyank911/Tawny/releases/download/v0.1.2/Tawny-0.1.2-mac-x64.dmg"
                  download
                  style={{
                    color: "#6b7280",
                    textDecoration: "underline",
                    textUnderlineOffset: "2px",
                  }}
                >
                  x64 build
                </a>
                .
              </p>
            </div>

            {/* Open source note */}
            <p
              style={{
                fontSize: "12px",
                color: "#9ca3af",
                lineHeight: 1.65,
                maxWidth: "360px",
              }}
            >
              Open source. Run it on your own API keys.{" "}
              <Link
                href={GITHUB_REPO}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#6b7280",
                  textDecoration: "underline",
                  textUnderlineOffset: "2px",
                }}
              >
                Self-host from the repo.
              </Link>{" "}
              For cloud features or questions, write to{" "}
              <Link
                href={`mailto:${CONTACT_EMAIL}`}
                style={{
                  color: "#6b7280",
                  textDecoration: "underline",
                  textUnderlineOffset: "2px",
                }}
              >
                {CONTACT_EMAIL}
              </Link>
              .
            </p>

            {/* Made by tag */}
            <div style={{ marginTop: "28px" }}>
              <Link
                href="https://github.com/Priyank911"
                target="_blank"
                rel="noopener noreferrer"
                className="made-by-tag"
              >
                <span
                  style={{
                    opacity: 0.5,
                    fontSize: "10px",
                    lineHeight: 1,
                  }}
                >
                  &#9670;
                </span>
                made by prynk
              </Link>
            </div>
          </div>

          {/* ── Right: YouTube ── */}
          <div className="video-col">
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                border: "1.5px solid #e5e7eb",
                boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
                aspectRatio: "16 / 9",
                position: "relative",
                backgroundColor: "#f3f4f6",
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1`}
                title="Tawny demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            </div>
            <p
              style={{
                fontSize: "11px",
                color: "#9ca3af",
                marginTop: "10px",
                textAlign: "center",
                letterSpacing: "0.03em",
              }}
            >
              See it in action
            </p>
          </div>
        </section>

        {/* ── What it does ── */}
        <section className="feat-section">
          <div className="feat-grid">
            <p
              style={{
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#9ca3af",
                marginBottom: "44px",
              }}
            >
              What it does
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "20px",
              }}
            >
              {[
                {
                  title: "Dictate",
                  body: "Press the shortcut, speak, release. Text lands at your cursor in any app.",
                },
                {
                  title: "Rewrite",
                  body: "Select text, speak an instruction. Tawny replaces the selection with the result.",
                },
                {
                  title: "Generate images",
                  body: "Describe an image. It copies to your clipboard and pastes into the active window.",
                },
                {
                  title: "Ask questions",
                  body: "Speak a question with text selected. The answer pastes at the cursor.",
                },
              ].map(({ title, body }) => (
                <div key={title} className="feat-card">
                  <h3
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      marginBottom: "10px",
                      letterSpacing: "-0.02em",
                      fontFamily: fontStack,
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontSize: "13.5px",
                      color: "#6b7280",
                      lineHeight: 1.7,
                    }}
                  >
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="site-footer-inner">
          <span
            style={{
              fontSize: "13px",
              color: "#9ca3af",
              fontFamily: fontStack,
            }}
          >
            Tawny, private voice layer
          </span>
          <div
            style={{ display: "flex", gap: "20px", alignItems: "center" }}
          >
            <Link
              href={GITHUB_REPO}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "13px",
                color: "#9ca3af",
                textDecoration: "none",
              }}
            >
              GitHub
            </Link>
            <Link
              href={GITHUB_RELEASES}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "13px",
                color: "#9ca3af",
                textDecoration: "none",
              }}
            >
              Releases
            </Link>
            <Link
              href={`mailto:${CONTACT_EMAIL}`}
              style={{
                fontSize: "13px",
                color: "#9ca3af",
                textDecoration: "none",
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
