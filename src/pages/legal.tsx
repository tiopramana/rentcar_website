import type { CSSProperties } from "react";
import { useSyncExternalStore } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/legal.css?raw";
import { SiteImportMobileNav } from "../components/site-import-mobile.nav";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Terms, privacy & cookies · Horizone" },
      {
        name: "description",
        content:
          "Read Horizone’s terms of service, privacy policy, and cookie information.",
      },
      { property: "og:title", content: "Terms, privacy & cookies · Horizone" },
      {
        property: "og:description",
        content:
          "Read Horizone’s terms of service, privacy policy, and cookie information.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  staticData: {
    importedDocument: {
      html: { dir: "ltr", lang: "en-US" },
      body: { "data-site-import-responsive-incomplete": "class-range-budget" },
    },
  },
  component: Index,
});

function Index() {
  const importedViewportWidth = useSyncExternalStore(
    subscribeMobile,
    () => window.innerWidth,
    () => 1440,
  );
  const isMobile = importedViewportWidth <= 767;
  return (
    <>
      <style>{`${capturedCSS}
@media (max-width: 767px) {
  .framer-1tvp1w7 { display: none !important; }
}`}</style>
      <SiteImportMobileNav />
      <div id="main">
        <div
          className="framer-PWl0o framer-pdvr4y items-center flex-col flex-nowrap content-center justify-start [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [min-height:100vh]"
          style={{ width: "auto" }}
          data-layout-template="true"
        >
          <div
            className="framer-1a6bpj8 items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0] [left:0] [order:-1000] [right:0] [top:0] [z-index:10]"
            data-site-import-desktop-header=""
          >
            <div className="framer-1cywj9w-container flex-none">
              <div
                className={
                  isMobile
                    ? "ssr-variant hidden-9jl0dm hidden-pdvr4y"
                    : "ssr-variant"
                }
              >
                <div style={{ display: "contents" }}>
                  <header
                    style={{ width: "100%", opacity: "1" }}
                    className={
                      isMobile
                        ? "framer-rQnLE framer-MCyNe framer-3tJNm framer-eHiTe framer-ccphy framer-iJjgk framer-GvPaN framer-AAOB7 framer-BdrqZ framer-KgJtC framer-EhiDw framer-ANzsm framer-71sfr framer-7tu3jo framer-v-1jhoykp"
                        : "framer-rQnLE framer-MCyNe framer-3tJNm framer-eHiTe framer-ccphy framer-iJjgk framer-GvPaN framer-AAOB7 framer-BdrqZ framer-KgJtC framer-EhiDw framer-ANzsm framer-71sfr framer-7tu3jo"
                    }
                  >
                    <ImportedDivBar />
                  </header>
                </div>
              </div>
            </div>
          </div>
          <ImportedDivHeader />
          <div
            className="framer-U6AvU framer-iJjgk framer-u6uwY framer-bAeq6 framer-32iNJ framer-qO70Z framer-MCyNe framer-9R9dH framer-81w65 framer-5m0tyu items-center flex-col flex-nowrap content-center justify-start [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [min-height:100vh]"
            style={{ width: "auto", display: "contents" }}
          >
            <div className="framer-1nyjjb9 flex-none" />
            <ImportedDivIntro />
            <ImportedDivDocuments />
          </div>
          <div id="overlay" />
          <div className="framer-z6kdd7 grow" />
          <div className="framer-176qjoj-container flex-none [order:1002]">
            <div
              className={
                isMobile
                  ? "ssr-variant hidden-9jl0dm hidden-pdvr4y"
                  : "ssr-variant"
              }
            >
              <footer
                style={{ width: "100%", opacity: "1" }}
                className={
                  isMobile
                    ? "framer-TopBk framer-MCyNe framer-3tJNm framer-iJjgk framer-AAOB7 framer-oX6dW framer-z1mrk framer-v-eytatl"
                    : "framer-TopBk framer-MCyNe framer-3tJNm framer-iJjgk framer-AAOB7 framer-oX6dW framer-z1mrk"
                }
              >
                <ImportedDivCard />
              </footer>
            </div>
          </div>
          <ImportedDivPricingData />
        </div>
        <div id="template-overlay" />
      </div>
      <div
        className="justify-end [bottom:0] [z-index:calc(var(--infinity,2147480000))]"
        id="__framer-badge-container"
      >
        <a
          className="framer-6jWyo framer-n0ccwk framer-bmpgw8 gap-[10px] [overflow:visible] will-change-transform [opacity:1] transform-none"
          style={{ pointerEvents: "auto" }}
          href="https://www.framer.com"
          rel="noopener"
          title="Create a free website with Framer, the website builder loved by startups, designers and agencies."
        >
          <div
            className="framer-13yxzio flex-none [inset:1px] [overflow:hidden] [will-change:var(--framer-will-change-override,transform)] [border-radius:10px] [box-shadow:rgba(0,_0,_0,_0.17)_0px_0.602187px_1.56569px_-1.5px,_rgba(0,_0,_0,_0.14)_0px_2.28853px_5.95019px_-3px,_rgba(0,_0,_0,_0.02)_0px_10px_26px_-4.5px] [opacity:1]"
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
          />
          <div className="framer-19yaanm items-center flex-none flex-row flex-nowrap gap-[10px] content-center justify-start [left:50%] [overflow:visible] [top:50%] [transform:translate(-50%,_-50%)] [opacity:1]">
            <div className="framer-1kflzx5 flex-none [overflow:visible] [opacity:1]">
              <div
                className="framer-hcsc7 framer-e50co aspect-[0.6/1] flex-none top-[-2px] [left:50%] [transform:translateX(-50%)] [opacity:1]"
                style={{ "--1bd4d3i": "rgb(0, 0, 0)" } as CSSProperties}
              />
            </div>
            <p
              className="[transform:scale(0.001)]"
              style={{ position: "absolute" }}
            >
              Create a free website with Framer, the website builder loved by
              startups, designers and agencies.
            </p>
            <div
              className="framer-g7oZR framer-1um7t9d aspect-[9.7/1] flex-none [opacity:1]"
              style={{ "--1bd4d3i": "rgb(0, 0, 0)" } as CSSProperties}
            />
          </div>
          <div className="framer-j4ugry flex-none [inset:0px] [overflow:visible] [mask:linear-gradient(rgba(0,_0,_0,_0)_65%,_rgb(0,_0,_0)_100%)] [border-radius:11px] [box-shadow:rgb(0,_0,_0)_0px_0px_0px_1px_inset] [opacity:0.06]" />
          <div className="framer-jnuwbw flex-none [inset:0px] [overflow:visible] [border-radius:11px] [box-shadow:rgb(0,_0,_0)_0px_0px_0px_1px_inset] [opacity:0.04]" />
        </a>
      </div>
      <div
        className="[overflow:hidden] [bottom:0px] [left:0px] [z-index:0] [contain:strict]"
        style={{ position: "absolute", width: "0px", height: "0px" }}
        id="svg-templates"
        aria-hidden="true"
      />
    </>
  );
}

function ImportedDivBar() {
  return (
    <div
      className="framer-xub7c0"
      style={
        {
          backdropFilter: "blur(18px)",
          backgroundColor: "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
          borderRadius: "8px",
          opacity: "1",
        } as CSSProperties
      }
    >
      <div
        className="framer-16wo98v"
        style={{ willChange: "transform", opacity: "1", transform: "none" }}
      >
        <a
          className="framer-9v0yg3 framer-trb62s"
          style={{ opacity: "1" }}
          href="/"
        >
          <div
            className="framer-1xqfc3z"
            style={{ borderRadius: "6px", opacity: "1" }}
          >
            <div
              style={
                {
                  position: "absolute",
                  borderRadius: "inherit",
                  cornerShape: "inherit",
                  inset: "0px",
                } as CSSProperties
              }
            >
              <img
                style={
                  {
                    display: "block",
                    width: "100%",
                    height: "100%",
                    borderRadius: "inherit",
                    cornerShape: "inherit",
                    objectPosition: "center center",
                    objectFit: "cover",
                  } as CSSProperties
                }
                decoding="auto"
                width="60"
                height="60"
                src="/site-assets/d60c993c222da12f-a86c03cf51413bf96a5d592d5b2b0203.png"
                alt=""
              />
            </div>
          </div>
          <div
            className="framer-e4k9vn"
            style={
              {
                "--extracted-a0htzi":
                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                transform: "none",
                opacity: "1",
              } as CSSProperties
            }
            data-framer-component-type="RichTextContainer"
          >
            <h3
              className="framer-text framer-styles-preset-tlxqj"
              style={
                {
                  "--framer-text-alignment": "start",
                  "--framer-text-color":
                    "var(--extracted-a0htzi, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                } as CSSProperties
              }
              dir="auto"
            >
              Horizone
            </h3>
          </div>
        </a>
      </div>
      <nav
        className="framer-1i3tgd2"
        style={
          {
            "--border-bottom-width": "1px",
            "--border-color": "rgba(0, 0, 0, 0.05)",
            "--border-left-width": "1px",
            "--border-right-width": "1px",
            "--border-style": "solid",
            "--border-top-width": "1px",
            backdropFilter: "blur(14px)",
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            willChange: "transform",
            borderRadius: "999px",
            opacity: "1",
            transform: "none",
          } as CSSProperties
        }
        aria-label="Primary"
        data-border="true"
      >
        <div className="framer-ybw96t" style={{ opacity: "1" }}>
          <div
            className="framer-xz7gek"
            style={
              {
                "--extracted-r6o4lv":
                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                transform: "none",
                opacity: "1",
              } as CSSProperties
            }
            data-framer-component-type="RichTextContainer"
          >
            <p
              className="framer-text framer-styles-preset-1e1duze"
              style={
                {
                  "--framer-text-alignment": "start",
                  "--framer-text-color":
                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                } as CSSProperties
              }
              dir="auto"
            >
              <a
                className="framer-text framer-styles-preset-13vcd9x"
                href="/cars"
              >
                Cars
              </a>
            </p>
          </div>
        </div>
        <div className="framer-y9hjjg" style={{ opacity: "1" }}>
          <div
            className="framer-19u7ksj"
            style={
              {
                "--extracted-r6o4lv":
                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                transform: "none",
                opacity: "1",
              } as CSSProperties
            }
            data-framer-component-type="RichTextContainer"
          >
            <p
              className="framer-text framer-styles-preset-1e1duze"
              style={
                {
                  "--framer-text-alignment": "start",
                  "--framer-text-color":
                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                } as CSSProperties
              }
              dir="auto"
            >
              <a
                className="framer-text framer-styles-preset-13vcd9x"
                href="/locations"
              >
                Locations
              </a>
            </p>
          </div>
        </div>
        <div className="framer-l2kyev" style={{ opacity: "1" }}>
          <div
            className="framer-zuohpb"
            style={
              {
                "--extracted-r6o4lv":
                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                transform: "none",
                opacity: "1",
              } as CSSProperties
            }
            data-framer-component-type="RichTextContainer"
          >
            <p
              className="framer-text framer-styles-preset-1e1duze"
              style={
                {
                  "--framer-text-alignment": "start",
                  "--framer-text-color":
                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                } as CSSProperties
              }
              dir="auto"
            >
              <a
                className="framer-text framer-styles-preset-13vcd9x"
                href="/deals"
              >
                Deals
              </a>
            </p>
          </div>
        </div>
        <div className="framer-be67eb" style={{ opacity: "1" }}>
          <div
            className="framer-mczy6o"
            style={
              {
                "--extracted-r6o4lv":
                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                transform: "none",
                opacity: "1",
              } as CSSProperties
            }
            data-framer-component-type="RichTextContainer"
          >
            <p
              className="framer-text framer-styles-preset-1e1duze"
              style={
                {
                  "--framer-text-alignment": "start",
                  "--framer-text-color":
                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                } as CSSProperties
              }
              dir="auto"
            >
              <a
                className="framer-text framer-styles-preset-13vcd9x"
                href="/about"
              >
                About
              </a>
            </p>
          </div>
        </div>
        <div className="framer-11jschf" style={{ opacity: "1" }}>
          <div
            className="framer-12udemg"
            style={
              {
                "--extracted-r6o4lv":
                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                transform: "none",
                opacity: "1",
              } as CSSProperties
            }
            data-framer-component-type="RichTextContainer"
          >
            <p
              className="framer-text framer-styles-preset-1e1duze"
              style={
                {
                  "--framer-text-alignment": "start",
                  "--framer-text-color":
                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                } as CSSProperties
              }
              dir="auto"
            >
              <a
                className="framer-text framer-styles-preset-13vcd9x"
                href="/help"
              >
                Help
              </a>
            </p>
          </div>
        </div>
      </nav>
      <div
        className="framer-l53zpz"
        style={{ willChange: "transform", opacity: "1", transform: "none" }}
      >
        <div
          className="framer-o8ok12"
          style={
            {
              "--border-bottom-width": "1px",
              "--border-color":
                "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backdropFilter: "blur(14px)",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              borderRadius: "999px",
              opacity: "1",
            } as CSSProperties
          }
          data-border="true"
          id=":R1p:-:Rjm6lp:-o8ok12"
          tabIndex={0}
        >
          <div className="framer-1laj2cm-container" style={{ opacity: "1" }}>
            <svg
              style={
                {
                  height: "100%",
                  width: "100%",
                  display: "block",
                  position: "relative",
                  color: "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                  fill: "none",
                  stroke: "currentcolor",
                  strokeWidth: "1.6",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  overflow: "visible",
                } as CSSProperties
              }
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="6.6" />
              <path d="M16 16l4.4 4.4" />
            </svg>
          </div>
        </div>
        <div
          className="framer-r1zzh"
          style={
            {
              "--border-bottom-width": "1px",
              "--border-color":
                "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backdropFilter: "blur(14px)",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              borderRadius: "999px",
              opacity: "1",
            } as CSSProperties
          }
          aria-label="Currency"
          data-border="true"
          id=":R1p:-:R7m6lp:-r1zzh"
          tabIndex={0}
        >
          <div className="framer-1d4ql0i-container" style={{ opacity: "1" }}>
            <svg
              style={
                {
                  height: "100%",
                  width: "100%",
                  display: "block",
                  position: "relative",
                  color: "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                  fill: "none",
                  stroke: "currentcolor",
                  strokeWidth: "1.6",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  overflow: "visible",
                } as CSSProperties
              }
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="8.6" />
              <path d="M3.4 12h17.2M12 3.4c2.3 2.4 3.4 5.4 3.4 8.6S14.3 18.2 12 20.6C9.7 18.2 8.6 15.2 8.6 12S9.7 5.8 12 3.4Z" />
            </svg>
          </div>
          <div
            className="framer-1wlxx3k"
            style={
              {
                "--extracted-r6o4lv":
                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                transform: "none",
                opacity: "1",
              } as CSSProperties
            }
            data-framer-component-type="RichTextContainer"
          >
            <p
              className="framer-text framer-styles-preset-1bwd7xw"
              style={
                {
                  "--framer-text-alignment": "start",
                  "--framer-text-color":
                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                } as CSSProperties
              }
              dir="auto"
            >
              USD
            </p>
          </div>
          <div className="framer-1ba9aot-container" style={{ opacity: "1" }}>
            <svg
              style={
                {
                  height: "100%",
                  width: "100%",
                  display: "block",
                  position: "relative",
                  color: "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                  fill: "none",
                  stroke: "currentcolor",
                  strokeWidth: "1.6",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  overflow: "visible",
                } as CSSProperties
              }
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M6.5 9.5 12 15l5.5-5.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImportedDivHeader() {
  return (
    <div
      className="framer-1a6bpj8 items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0] [left:0] [order:-1000] [right:0] [top:0] [z-index:10]"
      style={{ "--site-import-header-display": "flex" } as CSSProperties}
      data-site-import-mobile-header=""
    >
      <div className="framer-1cywj9w-container flex-none">
        <div className="ssr-variant">
          <div style={{ display: "contents" }}>
            <header
              className="framer-rQnLE framer-MCyNe framer-3tJNm framer-eHiTe framer-ccphy framer-iJjgk framer-GvPaN framer-AAOB7 framer-BdrqZ framer-KgJtC framer-EhiDw framer-ANzsm framer-71sfr framer-7tu3jo framer-v-1jhoykp [opacity:1]"
              style={{ width: "100%" }}
            >
              <div
                className="framer-xub7c0 [backdrop-filter:blur(18px)] [opacity:1]"
                style={{
                  backgroundColor:
                    "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                  borderRadius: "8px",
                }}
              >
                <div className="framer-16wo98v will-change-transform [opacity:1] transform-none">
                  <a
                    className="framer-9v0yg3 framer-trb62s [opacity:1]"
                    href="/"
                  >
                    <div
                      className="framer-1xqfc3z [opacity:1]"
                      style={{ borderRadius: "6px" }}
                    >
                      <div
                        className="[corner-shape:inherit]"
                        style={
                          {
                            position: "absolute",
                            borderRadius: "inherit",
                            inset: "0px",
                          } as CSSProperties
                        }
                      >
                        <img
                          className="[corner-shape:inherit] [object-position:center_center] object-cover"
                          style={
                            {
                              display: "block",
                              width: "100%",
                              height: "100%",
                              borderRadius: "inherit",
                            } as CSSProperties
                          }
                          decoding="auto"
                          width="60"
                          height="60"
                          src="/site-assets/d60c993c222da12f-a86c03cf51413bf96a5d592d5b2b0203.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="framer-e4k9vn transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-a0htzi":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <h3
                        className="framer-text framer-styles-preset-tlxqj"
                        style={
                          {
                            "--framer-text-alignment": "start",
                            "--framer-text-color":
                              "var(--extracted-a0htzi, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Horizone
                      </h3>
                    </div>
                  </a>
                </div>
                <div className="framer-l53zpz will-change-transform [opacity:1] transform-none">
                  <div
                    className="framer-o8ok12 [backdrop-filter:blur(14px)] [opacity:1]"
                    style={
                      {
                        "--border-bottom-width": "1px",
                        "--border-color":
                          "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                        "--border-left-width": "1px",
                        "--border-right-width": "1px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                        backgroundColor: "rgba(255, 255, 255, 0.7)",
                        borderRadius: "999px",
                      } as CSSProperties
                    }
                    data-border="true"
                    id=":R1p:-:Rjm6lp:-o8ok12"
                    tabIndex={0}
                  >
                    <div className="framer-1laj2cm-container [opacity:1]">
                      <svg
                        className="[color:var(--token-df755ad1-ea9e-4505-a051-33b272779231)] fill-none [overflow:visible]"
                        style={
                          {
                            height: "100%",
                            width: "100%",
                            display: "block",
                            position: "relative",
                            stroke: "currentcolor",
                            strokeWidth: "1.6",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                          } as CSSProperties
                        }
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle cx="11" cy="11" r="6.6" />
                        <path d="M16 16l4.4 4.4" />
                      </svg>
                    </div>
                  </div>
                  <div
                    className="framer-eqtme5 [backdrop-filter:blur(14px)] [opacity:1]"
                    style={
                      {
                        "--border-bottom-width": "1px",
                        "--border-color":
                          "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                        "--border-left-width": "1px",
                        "--border-right-width": "1px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                        backgroundColor: "rgba(255, 255, 255, 0.7)",
                        borderRadius: "999px",
                      } as CSSProperties
                    }
                    data-border="true"
                    tabIndex={0}
                  >
                    <div className="framer-4ijlad-container flex-none [opacity:1]">
                      <svg
                        className="[color:var(--token-df755ad1-ea9e-4505-a051-33b272779231)] fill-none [overflow:visible]"
                        style={
                          {
                            height: "100%",
                            width: "100%",
                            display: "block",
                            position: "relative",
                            stroke: "currentcolor",
                            strokeWidth: "1.6",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                          } as CSSProperties
                        }
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M4 7h16M4 12h16M4 17h16" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImportedDivIntro() {
  return (
    <div className="framer-l7qc76 items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0]">
      <div className="framer-xlfsk7 items-start flex-none flex-col flex-nowrap max-w-[1360px] [gap:0] [place-content:flex-start]">
        <div
          className="framer-m7s06d items-center flex-none flex-row flex-nowrap gap-[6px] content-center justify-start [opacity:1] transform-none"
          style={{ willChange: "transform" }}
        >
          <a
            className="framer-1qndz41 framer-1am5rcl items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start]"
            href="/"
          >
            <div
              className="framer-wspus5 transform-none"
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="framer-text framer-styles-preset-1dmlb93"
                style={
                  {
                    "--framer-text-alignment": "start",
                    "--framer-text-color":
                      "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                  } as CSSProperties
                }
                dir="auto"
              >
                Home
              </p>
            </div>
          </a>
          <div className="framer-1qx9ppk-container flex-none">
            <svg
              className="[color:var(--token-7d4bdedd-c01b-4bc4-af80-207fe4639ba5)] fill-none [overflow:visible]"
              style={
                {
                  height: "100%",
                  width: "100%",
                  display: "block",
                  position: "relative",
                  stroke: "currentcolor",
                  strokeWidth: "1.6",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                } as CSSProperties
              }
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M9.5 6.5 15 12l-5.5 5.5" />
            </svg>
          </div>
          <div className="ssr-variant">
            <div
              className="framer-146ka09 transform-none"
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="framer-text framer-styles-preset-1dmlb93"
                style={
                  {
                    "--framer-text-color":
                      "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                  } as CSSProperties
                }
                dir="auto"
                data-site-import-responsive="63"
              >
                Legal
              </p>
            </div>
          </div>
        </div>
        <div
          className="framer-vttaos [word-break:break-word] transform-none"
          data-framer-component-type="RichTextContainer"
        >
          <h1
            className="framer-text framer-styles-preset-1qika4w"
            style={{ "--framer-text-alignment": "start" } as CSSProperties}
            dir="auto"
          >
            <span
              className="[opacity:1] transform-none"
              style={{ display: "inline-block" }}
            >
              Legal
            </span>
          </h1>
        </div>
        <div
          className="framer-1l9922y items-start flex-none flex-row flex-nowrap max-w-[676px] [gap:0] [place-content:flex-start] [opacity:1] transform-none"
          style={{ willChange: "transform" }}
        >
          <div
            className="framer-125vwab [word-break:break-word] transform-none"
            data-framer-component-type="RichTextContainer"
          >
            <p className="framer-text framer-styles-preset-16hus5p" dir="auto">
              Written to be read. Last updated 22 September 2026.
            </p>
          </div>
        </div>
        <div
          className="framer-ly2noo items-start flex-none flex-row flex-nowrap max-w-[760px] [gap:0] [place-content:flex-start] [opacity:1] transform-none"
          style={{ willChange: "transform" }}
        >
          <div className="framer-vr8g3c items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start]">
            <div className="ssr-variant">
              <div
                className="framer-14rc464 [word-break:break-word] transform-none"
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="framer-text framer-styles-preset-r79ppm"
                  style={
                    {
                      "--framer-text-color":
                        "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
                    } as CSSProperties
                  }
                  dir="auto"
                  data-site-import-responsive="73"
                >
                  Horizone is a demonstration brand. These documents show the
                  structure a rental site needs; they are not legal advice or a
                  real contract.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="framer-1d3or54 items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1] transform-none"
          style={{ willChange: "transform" }}
        >
          <div
            className="framer-ii1oat items-start flex-none flex-row flex-nowrap gap-[4px] [place-content:flex-start]"
            data-border="true"
          >
            <a
              className="framer-zmrp framer-1am5rcl items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start]"
              href="#terms"
            >
              <div className="ssr-variant">
                <div className="framer-450dn5-container flex-none">
                  <div
                    className="framer-rRv9Y framer-b6OkM framer-1zOQh framer-t0fgtv items-center flex-row flex-nowrap gap-[3px] content-center justify-start [opacity:1]"
                    style={
                      {
                        "--border-bottom-width": "2px",
                        "--border-color": "rgba(0, 0, 0, 0)",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "0px",
                      } as CSSProperties
                    }
                    data-border="true"
                    tabIndex={0}
                  >
                    <div
                      className="framer-1a760r3 transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-p3aiuu"
                        style={
                          {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Rental terms
                      </p>
                    </div>
                    <div
                      className="framer-1vf5tm9 transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-fvk63j"
                        style={
                          {
                            "--framer-text-alignment": "start",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                          } as CSSProperties
                        }
                        dir="auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              className="framer-1vx9vb6 framer-1am5rcl items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start]"
              href="#privacy"
            >
              <div className="ssr-variant">
                <div className="framer-cday0j-container flex-none">
                  <div
                    className="framer-rRv9Y framer-b6OkM framer-1zOQh framer-t0fgtv items-center flex-row flex-nowrap gap-[3px] content-center justify-start [opacity:1]"
                    style={
                      {
                        "--border-bottom-width": "2px",
                        "--border-color": "rgba(0, 0, 0, 0)",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "0px",
                      } as CSSProperties
                    }
                    data-border="true"
                    tabIndex={0}
                  >
                    <div
                      className="framer-1a760r3 transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-p3aiuu"
                        style={
                          {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Privacy policy
                      </p>
                    </div>
                    <div
                      className="framer-1vf5tm9 transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-fvk63j"
                        style={
                          {
                            "--framer-text-alignment": "start",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                          } as CSSProperties
                        }
                        dir="auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              className="framer-lt81ng framer-1am5rcl items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start]"
              href="#cookies"
            >
              <div className="ssr-variant">
                <div className="framer-15hoclw-container flex-none">
                  <div
                    className="framer-rRv9Y framer-b6OkM framer-1zOQh framer-t0fgtv items-center flex-row flex-nowrap gap-[3px] content-center justify-start [opacity:1]"
                    style={
                      {
                        "--border-bottom-width": "2px",
                        "--border-color": "rgba(0, 0, 0, 0)",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "0px",
                      } as CSSProperties
                    }
                    data-border="true"
                    tabIndex={0}
                  >
                    <div
                      className="framer-1a760r3 transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-p3aiuu"
                        style={
                          {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Cookies
                      </p>
                    </div>
                    <div
                      className="framer-1vf5tm9 transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-fvk63j"
                        style={
                          {
                            "--framer-text-alignment": "start",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                          } as CSSProperties
                        }
                        dir="auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImportedDivDocuments() {
  return (
    <div className="framer-1vd8c48 items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0]">
      <div className="framer-hxh7xj items-start flex-none flex-row flex-nowrap max-w-[1360px] content-start justify-between">
        <div className="framer-1yni07b items-start flex-[1_0_0] flex-col flex-nowrap gap-[56px] [place-content:flex-start]">
          <div
            className="framer-lgfmku items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1] transform-none"
            id="terms"
          >
            <div className="framer-bwsewl items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start]">
              <div
                className="framer-1udbh99 [word-break:break-word] transform-none"
                data-framer-component-type="RichTextContainer"
              >
                <h2
                  className="framer-text framer-styles-preset-1hwdddd"
                  style={
                    { "--framer-text-alignment": "start" } as CSSProperties
                  }
                  dir="auto"
                >
                  <span
                    className="[opacity:1] transform-none"
                    style={{ display: "inline-block" }}
                  >
                    Rental
                  </span>{" "}
                  <span
                    className="[opacity:1] transform-none"
                    style={{ display: "inline-block" }}
                  >
                    terms
                  </span>
                </h2>
              </div>
              <div
                className="framer-111nsmc [word-break:break-word] will-change-transform [opacity:1] transform-none"
                data-framer-component-type="RichTextContainer"
              >
                <h3
                  className="framer-text framer-styles-preset-tlxqj"
                  dir="auto"
                >
                  1. Who you’re renting from
                </h3>
                <p
                  className="framer-text framer-styles-preset-qak47d"
                  dir="auto"
                >
                  Horizone Travel Group arranges your rental with a local
                  supplier we have vetted. Your contract for the car itself is
                  with that supplier; Horizone is responsible for the booking,
                  the price and support throughout.
                </p>
                <h3
                  className="framer-text framer-styles-preset-tlxqj"
                  dir="auto"
                >
                  2. The price
                </h3>
                <p
                  className="framer-text framer-styles-preset-qak47d"
                  dir="auto"
                >
                  The total shown at checkout includes the rental, the
                  protection plan and extras you chose, location and one-way
                  fees, and taxes. The only amount not included is the
                  refundable security deposit, which is shown on every car.
                </p>
                <h3
                  className="framer-text framer-styles-preset-tlxqj"
                  dir="auto"
                >
                  3. Drivers
                </h3>
                <ul className="framer-text" dir="auto">
                  <li className="framer-text framer-styles-preset-qak47d">
                    <p className="framer-text framer-styles-preset-qak47d">
                      The main driver must meet the minimum age shown on the car
                      and hold a full licence for at least 12 months.
                    </p>
                  </li>
                  <li className="framer-text framer-styles-preset-qak47d">
                    <p className="framer-text framer-styles-preset-qak47d">
                      Drivers under 25 pay a young-driver fee where the car
                      allows it.
                    </p>
                  </li>
                  <li className="framer-text framer-styles-preset-qak47d">
                    <p className="framer-text framer-styles-preset-qak47d">
                      Additional drivers must be added to the booking and
                      present their licence at pick-up.
                    </p>
                  </li>
                </ul>
                <h3
                  className="framer-text framer-styles-preset-tlxqj"
                  dir="auto"
                >
                  4. Pick-up and return
                </h3>
                <p
                  className="framer-text framer-styles-preset-qak47d"
                  dir="auto"
                >
                  Bring your licence, the card used to book and a passport or
                  ID. Returns have a 59-minute grace period; after that, each
                  started 24 hours is charged at the daily rate. Cars must be
                  returned with the same fuel or charge level they were
                  collected with, as set out in the fuel policy.
                </p>
                <h3
                  className="framer-text framer-styles-preset-tlxqj"
                  dir="auto"
                >
                  5. Protection and excess
                </h3>
                <p
                  className="framer-text framer-styles-preset-qak47d"
                  dir="auto"
                >
                  Every rental includes a collision damage waiver, theft
                  protection and third-party liability. The excess (the most you
                  pay towards covered damage) depends on the plan: $1,200 on
                  Basic, $300 on Standard and $0 on Full. Damage caused by
                  breaking the law or the rental agreement is not covered.
                </p>
                <h3
                  className="framer-text framer-styles-preset-tlxqj"
                  dir="auto"
                >
                  6. Cancellations and changes
                </h3>
                <p
                  className="framer-text framer-styles-preset-qak47d"
                  dir="auto"
                >
                  Cancel up to 48 hours before pick-up for a full refund. Inside
                  48 hours, one day’s rental is kept. No-shows are charged the
                  first day. Refunds go back to the original payment method
                  within five working days.
                </p>
                <h3
                  className="framer-text framer-styles-preset-tlxqj"
                  dir="auto"
                >
                  7. Promo codes
                </h3>
                <p
                  className="framer-text framer-styles-preset-qak47d"
                  dir="auto"
                >
                  One code per booking, subject to the conditions shown with the
                  code. Codes have no cash value and cannot be added after a
                  booking is confirmed.
                </p>
              </div>
            </div>
          </div>
          <div
            className="framer-1nxl6hj items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1] transform-none"
            id="privacy"
          >
            <div className="framer-1ra6zk8 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start]">
              <div
                className="framer-w1ejul [word-break:break-word] transform-none"
                data-framer-component-type="RichTextContainer"
              >
                <h2
                  className="framer-text framer-styles-preset-1hwdddd"
                  style={
                    { "--framer-text-alignment": "start" } as CSSProperties
                  }
                  dir="auto"
                >
                  <span
                    className="[opacity:1] transform-none"
                    style={{ display: "inline-block" }}
                  >
                    Privacy
                  </span>{" "}
                  <span
                    className="[opacity:1] transform-none"
                    style={{ display: "inline-block" }}
                  >
                    policy
                  </span>
                </h2>
              </div>
              <div
                className="framer-16tg1g [word-break:break-word] will-change-transform [opacity:1] transform-none"
                data-framer-component-type="RichTextContainer"
              >
                <h3
                  className="framer-text framer-styles-preset-tlxqj"
                  dir="auto"
                >
                  What we collect
                </h3>
                <ul className="framer-text" dir="auto">
                  <li className="framer-text framer-styles-preset-qak47d">
                    <p className="framer-text framer-styles-preset-qak47d">
                      <strong className="framer-text">Booking details:</strong>{" "}
                      driver name, email, phone, country, flight number and
                      requests.
                    </p>
                  </li>
                  <li className="framer-text framer-styles-preset-qak47d">
                    <p className="framer-text framer-styles-preset-qak47d">
                      <strong className="framer-text">Payment details:</strong>{" "}
                      none online. You pay at pick-up, so we never ask for card
                      details on this site.
                    </p>
                  </li>
                </ul>
                <h3
                  className="framer-text framer-styles-preset-tlxqj"
                  dir="auto"
                >
                  Why we use it
                </h3>
                <p
                  className="framer-text framer-styles-preset-qak47d"
                  dir="auto"
                >
                  To make and manage your booking, send confirmations and
                  pick-up reminders you ask for, meet legal obligations for
                  rental contracts, and, only with your consent, send route
                  ideas and deals.
                </p>
                <h3
                  className="framer-text framer-styles-preset-tlxqj"
                  dir="auto"
                >
                  Who we share it with
                </h3>
                <p
                  className="framer-text framer-styles-preset-qak47d"
                  dir="auto"
                >
                  The supplier renting you the car receives what they need to
                  hand it over: driver name, contact details and booking. We
                  don’t sell personal data.
                </p>
                <h3
                  className="framer-text framer-styles-preset-tlxqj"
                  dir="auto"
                >
                  Your rights
                </h3>
                <p
                  className="framer-text framer-styles-preset-qak47d"
                  dir="auto"
                >
                  You can see, correct or delete your data. Ask us from the Help
                  centre and we’ll do it within 30 days.
                </p>
              </div>
            </div>
          </div>
          <div
            className="framer-1a6ssxa items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1] transform-none"
            id="cookies"
          >
            <div className="framer-cgaoh2 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start]">
              <div
                className="framer-13nuotd [word-break:break-word] transform-none"
                data-framer-component-type="RichTextContainer"
              >
                <h2
                  className="framer-text framer-styles-preset-1hwdddd"
                  style={
                    { "--framer-text-alignment": "start" } as CSSProperties
                  }
                  dir="auto"
                >
                  <span
                    className="[opacity:1] transform-none"
                    style={{ display: "inline-block" }}
                  >
                    Cookies
                  </span>{" "}
                  <span
                    className="[opacity:1] transform-none"
                    style={{ display: "inline-block" }}
                  >
                    and
                  </span>{" "}
                  <span
                    className="[opacity:1] transform-none"
                    style={{ display: "inline-block" }}
                  >
                    local
                  </span>{" "}
                  <span
                    className="[opacity:1] transform-none"
                    style={{ display: "inline-block" }}
                  >
                    storage
                  </span>
                </h2>
              </div>
              <div
                className="framer-1v5tu19 [word-break:break-word] will-change-transform [opacity:1] transform-none"
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="framer-text framer-styles-preset-qak47d"
                  dir="auto"
                >
                  This site stores a small amount of information in your browser
                  so it works properly. Nothing is sent to advertising networks.
                </p>
                <h3
                  className="framer-text framer-styles-preset-tlxqj"
                  dir="auto"
                >
                  Essential (always on)
                </h3>
                <ul className="framer-text" dir="auto">
                  <li className="framer-text framer-styles-preset-qak47d">
                    <p className="framer-text framer-styles-preset-qak47d">
                      <strong className="framer-text">Session:</strong> keeps
                      you signed in.
                    </p>
                  </li>
                  <li className="framer-text framer-styles-preset-qak47d">
                    <p className="framer-text framer-styles-preset-qak47d">
                      <strong className="framer-text">Search:</strong> remembers
                      your last search and recent locations.
                    </p>
                  </li>
                  <li className="framer-text framer-styles-preset-qak47d">
                    <p className="framer-text framer-styles-preset-qak47d">
                      <strong className="framer-text">
                        Bookings and saved cars:
                      </strong>{" "}
                      kept on this device in the demo.
                    </p>
                  </li>
                  <li className="framer-text framer-styles-preset-qak47d">
                    <p className="framer-text framer-styles-preset-qak47d">
                      <strong className="framer-text">Preferences:</strong>{" "}
                      currency and default search options.
                    </p>
                  </li>
                </ul>
                <h3
                  className="framer-text framer-styles-preset-tlxqj"
                  dir="auto"
                >
                  Analytics (only with your consent)
                </h3>
                <p
                  className="framer-text framer-styles-preset-qak47d"
                  dir="auto"
                >
                  Anonymous page statistics that tell us which pages help. You
                  can change your choice at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="framer-1tvp1w7 items-start flex-none flex-col flex-nowrap gap-[10px] [place-content:flex-start] will-change-transform [opacity:1] transform-none">
          <div
            className="framer-1w4bh04 [word-break:break-word] transform-none"
            data-framer-component-type="RichTextContainer"
          >
            <p
              className="framer-text"
              style={
                {
                  "--framer-font-family":
                    '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                  "--framer-font-size": "12px",
                  "--framer-font-variation-axes": '"opsz" 14, "wght" 600',
                  "--framer-line-height": "1.55em",
                  "--framer-text-color":
                    "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                } as CSSProperties
              }
              dir="auto"
            >
              On this page
            </p>
          </div>
          <div
            className="framer-afprbn items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start]"
            data-border="true"
          >
            <a
              className="framer-gyr4fc framer-1am5rcl items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start]"
              href="#terms"
            >
              <div
                className="framer-1el8g8l [word-break:break-word] transform-none"
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="framer-text framer-styles-preset-hivobk"
                  style={
                    {
                      "--framer-text-color":
                        "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                    } as CSSProperties
                  }
                  dir="auto"
                >
                  Rental terms
                </p>
              </div>
            </a>
            <a
              className="framer-8z6ax5 framer-1am5rcl items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start]"
              href="#privacy"
            >
              <div
                className="framer-11wgf66 [word-break:break-word] transform-none"
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="framer-text framer-styles-preset-hivobk"
                  style={
                    {
                      "--framer-text-color":
                        "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                    } as CSSProperties
                  }
                  dir="auto"
                >
                  Privacy policy
                </p>
              </div>
            </a>
            <a
              className="framer-lg58j1 framer-1am5rcl items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start]"
              href="#cookies"
            >
              <div
                className="framer-1qnz7qw [word-break:break-word] transform-none"
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="framer-text framer-styles-preset-hivobk"
                  style={
                    {
                      "--framer-text-color":
                        "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                    } as CSSProperties
                  }
                  dir="auto"
                >
                  Cookies
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImportedDivCard() {
  return (
    <div
      className="framer-le7h53"
      style={{
        backgroundColor: "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
        borderRadius: "12px",
        opacity: "1",
      }}
    >
      <div className="framer-77rohz" style={{ opacity: "1" }}>
        <div
          className="framer-kn31jo"
          style={{ willChange: "transform", opacity: "1", transform: "none" }}
        >
          <a
            className="framer-184v0vk framer-tt173u"
            style={{ opacity: "1" }}
            href="/"
          >
            <div
              className="framer-1s68tj1"
              style={{ borderRadius: "6px", opacity: "1" }}
            >
              <div
                style={
                  {
                    position: "absolute",
                    borderRadius: "inherit",
                    cornerShape: "inherit",
                    inset: "0px",
                  } as CSSProperties
                }
              >
                <img
                  style={
                    {
                      display: "block",
                      width: "100%",
                      height: "100%",
                      borderRadius: "inherit",
                      cornerShape: "inherit",
                      objectPosition: "center center",
                      objectFit: "cover",
                    } as CSSProperties
                  }
                  decoding="auto"
                  width="60"
                  height="60"
                  src="/site-assets/0b23ff83892756a2-bb6738d1933ada9aeb0086889074415c.png"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <div
              className="framer-vyhy05"
              style={
                {
                  "--extracted-a0htzi":
                    "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                  transform: "none",
                  opacity: "1",
                } as CSSProperties
              }
              data-framer-component-type="RichTextContainer"
            >
              <h3
                className="framer-text framer-styles-preset-tlxqj"
                style={
                  {
                    "--framer-text-color":
                      "var(--extracted-a0htzi, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                  } as CSSProperties
                }
                dir="auto"
                data-site-import-responsive="199"
              >
                Horizone
              </h3>
            </div>
          </a>
          <div className="framer-1sps62b" style={{ opacity: "1" }}>
            <div
              className="framer-1t8d2jb"
              style={
                {
                  "--extracted-r6o4lv":
                    "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                  transform: "none",
                  opacity: "1",
                } as CSSProperties
              }
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="framer-text framer-styles-preset-1e1duze"
                style={
                  {
                    "--framer-text-color":
                      "var(--extracted-r6o4lv, var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f))",
                  } as CSSProperties
                }
                dir="auto"
                data-site-import-responsive="202"
              >
                Car rental in 14 cities, priced without asterisks. The total you
                see is the total you pay.
              </p>
            </div>
          </div>
          <div className="framer-3lgd4l" style={{ opacity: "1" }}>
            <div className="framer-s7ay49" style={{ opacity: "1" }}>
              <div
                className="framer-1yfzh10-container"
                style={{ opacity: "1" }}
              >
                <svg
                  style={
                    {
                      height: "100%",
                      width: "100%",
                      display: "block",
                      position: "relative",
                      color:
                        "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                      fill: "none",
                      stroke: "currentcolor",
                      strokeWidth: "1.6",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      overflow: "visible",
                    } as CSSProperties
                  }
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 3.2 5 6v5.6c0 4.3 2.9 8 7 9.2 4.1-1.2 7-4.9 7-9.2V6l-7-2.8Z" />
                  <path d="m9.2 12 2 2 3.6-3.9" />
                </svg>
              </div>
              <div
                className="framer-nb5z0v"
                style={
                  {
                    "--extracted-r6o4lv":
                      "var(--token-7e7f526a-85ea-441f-9429-765a41c2534c)",
                    transform: "none",
                    opacity: "1",
                  } as CSSProperties
                }
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="framer-text framer-styles-preset-1dmlb93"
                  style={
                    {
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, var(--token-7e7f526a-85ea-441f-9429-765a41c2534c))",
                    } as CSSProperties
                  }
                  dir="auto"
                  data-site-import-responsive="210"
                >
                  Free cancellation up to 48 h
                </p>
              </div>
            </div>
            <div className="framer-5wx0eb" style={{ opacity: "1" }}>
              <div
                className="framer-1k7sg0h-container"
                style={{ opacity: "1" }}
              >
                <svg
                  style={
                    {
                      height: "100%",
                      width: "100%",
                      display: "block",
                      position: "relative",
                      color:
                        "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                      fill: "none",
                      stroke: "currentcolor",
                      strokeWidth: "1.6",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      overflow: "visible",
                    } as CSSProperties
                  }
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M5 14v-2a7 7 0 0 1 14 0v2" />
                  <rect x="3" y="13.5" width="3.6" height="6" rx="1.8" />
                  <rect x="17.4" y="13.5" width="3.6" height="6" rx="1.8" />
                  <path d="M19 19.5v.6a2.4 2.4 0 0 1-2.4 2.4H13" />
                </svg>
              </div>
              <div
                className="framer-3xd1uw"
                style={
                  {
                    "--extracted-r6o4lv":
                      "var(--token-7e7f526a-85ea-441f-9429-765a41c2534c)",
                    transform: "none",
                    opacity: "1",
                  } as CSSProperties
                }
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="framer-text framer-styles-preset-1dmlb93"
                  style={
                    {
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, var(--token-7e7f526a-85ea-441f-9429-765a41c2534c))",
                    } as CSSProperties
                  }
                  dir="auto"
                  data-site-import-responsive="219"
                >
                  24/7 roadside support
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="framer-12xcplr"
          style={{ willChange: "transform", opacity: "1", transform: "none" }}
        >
          <div className="framer-1bzlm27" style={{ opacity: "1" }}>
            <div className="framer-gnavnz" style={{ opacity: "1" }}>
              <div
                className="framer-162z8u3"
                style={
                  {
                    "--extracted-r6o4lv":
                      "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                    transform: "none",
                    opacity: "1",
                  } as CSSProperties
                }
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="framer-text framer-styles-preset-1bwd7xw"
                  style={
                    {
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f))",
                    } as CSSProperties
                  }
                  dir="auto"
                  data-site-import-responsive="224"
                >
                  Rent
                </p>
              </div>
            </div>
            <div className="framer-xvjqrk-container" style={{ opacity: "1" }}>
              <a
                className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
                style={{ opacity: "1" }}
                href="/cars"
              >
                <div
                  className="framer-1onkx82"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                      transform: "none",
                      opacity: "1",
                    } as CSSProperties
                  }
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-1e1duze"
                    style={
                      {
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    Browse cars
                  </p>
                </div>
              </a>
            </div>
            <div className="framer-1hks5fn-container" style={{ opacity: "1" }}>
              <a
                className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
                style={{ opacity: "1" }}
                href="/locations"
              >
                <div
                  className="framer-1onkx82"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                      transform: "none",
                      opacity: "1",
                    } as CSSProperties
                  }
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-1e1duze"
                    style={
                      {
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    Locations
                  </p>
                </div>
              </a>
            </div>
            <div className="framer-z8pfj4-container" style={{ opacity: "1" }}>
              <a
                className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
                style={{ opacity: "1" }}
                href="/deals"
              >
                <div
                  className="framer-1onkx82"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                      transform: "none",
                      opacity: "1",
                    } as CSSProperties
                  }
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-1e1duze"
                    style={
                      {
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    Deals
                  </p>
                </div>
              </a>
            </div>
            <div className="framer-1c58195-container" style={{ opacity: "1" }}>
              <a
                className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
                style={{ opacity: "1" }}
                href="/locations#routes"
              >
                <div
                  className="framer-1onkx82"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                      transform: "none",
                      opacity: "1",
                    } as CSSProperties
                  }
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-1e1duze"
                    style={
                      {
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    One-way routes
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="framer-kmyqsh" style={{ opacity: "1" }}>
            <div className="framer-14t2n5c" style={{ opacity: "1" }}>
              <div
                className="framer-k9wt3x"
                style={
                  {
                    "--extracted-r6o4lv":
                      "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                    transform: "none",
                    opacity: "1",
                  } as CSSProperties
                }
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="framer-text framer-styles-preset-1bwd7xw"
                  style={
                    {
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f))",
                    } as CSSProperties
                  }
                  dir="auto"
                  data-site-import-responsive="244"
                >
                  Company
                </p>
              </div>
            </div>
            <div className="framer-1pkt1sn-container" style={{ opacity: "1" }}>
              <a
                className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
                style={{ opacity: "1" }}
                href="/about"
              >
                <div
                  className="framer-1onkx82"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                      transform: "none",
                      opacity: "1",
                    } as CSSProperties
                  }
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-1e1duze"
                    style={
                      {
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    About us
                  </p>
                </div>
              </a>
            </div>
            <div className="framer-1k2rbk0-container" style={{ opacity: "1" }}>
              <a
                className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
                style={{ opacity: "1" }}
                href="/about#careers"
              >
                <div
                  className="framer-1onkx82"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                      transform: "none",
                      opacity: "1",
                    } as CSSProperties
                  }
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-1e1duze"
                    style={
                      {
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    Careers
                  </p>
                </div>
              </a>
            </div>
            <div className="framer-l7t01t-container" style={{ opacity: "1" }}>
              <a
                className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
                style={{ opacity: "1" }}
                href="/about#values"
              >
                <div
                  className="framer-1onkx82"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                      transform: "none",
                      opacity: "1",
                    } as CSSProperties
                  }
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-1e1duze"
                    style={
                      {
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    How we work
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="framer-1laknkj" style={{ opacity: "1" }}>
            <div className="framer-9j0mqa" style={{ opacity: "1" }}>
              <div
                className="framer-1o9sfnm"
                style={
                  {
                    "--extracted-r6o4lv":
                      "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                    transform: "none",
                    opacity: "1",
                  } as CSSProperties
                }
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="framer-text framer-styles-preset-1bwd7xw"
                  style={
                    {
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f))",
                    } as CSSProperties
                  }
                  dir="auto"
                  data-site-import-responsive="260"
                >
                  Support
                </p>
              </div>
            </div>
            <div className="framer-1f0jrx3-container" style={{ opacity: "1" }}>
              <a
                className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
                style={{ opacity: "1" }}
                href="/help"
              >
                <div
                  className="framer-1onkx82"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                      transform: "none",
                      opacity: "1",
                    } as CSSProperties
                  }
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-1e1duze"
                    style={
                      {
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    Help centre
                  </p>
                </div>
              </a>
            </div>
            <div className="framer-2wam1c-container" style={{ opacity: "1" }}>
              <a
                className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
                style={{ opacity: "1" }}
                href="/help#contact"
              >
                <div
                  className="framer-1onkx82"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                      transform: "none",
                      opacity: "1",
                    } as CSSProperties
                  }
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-1e1duze"
                    style={
                      {
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    Manage a booking
                  </p>
                </div>
              </a>
            </div>
            <div className="framer-osxw3n-container" style={{ opacity: "1" }}>
              <a
                className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
                style={{ opacity: "1" }}
                href="/help#contact"
              >
                <div
                  className="framer-1onkx82"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                      transform: "none",
                      opacity: "1",
                    } as CSSProperties
                  }
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-1e1duze"
                    style={
                      {
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    Contact us
                  </p>
                </div>
              </a>
            </div>
            <div className="framer-1nzi27q-container" style={{ opacity: "1" }}>
              <a
                className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
                style={{ opacity: "1" }}
                href="#terms"
              >
                <div
                  className="framer-1onkx82"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                      transform: "none",
                      opacity: "1",
                    } as CSSProperties
                  }
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-1e1duze"
                    style={
                      {
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    Rental terms
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="framer-m68j7r" style={{ opacity: "1" }}>
            <div className="framer-iwkklt" style={{ opacity: "1" }}>
              <div
                className="framer-1o3x7xw"
                style={
                  {
                    "--extracted-r6o4lv":
                      "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                    transform: "none",
                    opacity: "1",
                  } as CSSProperties
                }
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="framer-text framer-styles-preset-1bwd7xw"
                  style={
                    {
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f))",
                    } as CSSProperties
                  }
                  dir="auto"
                  data-site-import-responsive="280"
                >
                  Get Updates
                </p>
              </div>
            </div>
            <form
              className="framer-misz7s"
              style={
                {
                  "--border-bottom-width": "1px",
                  "--border-color":
                    "var(--token-1bc3d94c-6a34-4a4f-bb24-8d830b446610)",
                  "--border-left-width": "1px",
                  "--border-right-width": "1px",
                  "--border-style": "solid",
                  "--border-top-width": "1px",
                  backgroundColor:
                    "var(--token-5d9b0fc5-b296-4760-8c5b-1739145ad88b)",
                  borderRadius: "6px",
                  opacity: "1",
                } as CSSProperties
              }
              data-border="true"
              method="post"
            >
              <div
                className="framer-form-text-input framer-form-input-wrapper framer-6hu9v"
                style={
                  {
                    "--framer-input-background": "rgba(0, 0, 0, 0)",
                    "--framer-input-font-color":
                      "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                    "--framer-input-icon-mask-image": "none",
                    "--framer-input-placeholder-color":
                      "rgba(255, 255, 255, 0.44)",
                    opacity: "1",
                  } as CSSProperties
                }
              >
                <input
                  className="framer-form-input framer-form-input-empty"
                  type="email"
                  required
                  name="Email"
                  placeholder="Enter your email"
                  defaultValue=""
                  aria-label="Email"
                />
              </div>
              <div
                className="framer-1fbot5m-container"
                style={{ opacity: "1" }}
              >
                <button
                  className="framer-iy0La framer-40PBB framer-1wcq747"
                  style={{
                    backgroundColor:
                      "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                    borderRadius: "4px",
                    opacity: "1",
                  }}
                  type="submit"
                  data-reset="button"
                  data-site-import-responsive="285"
                >
                  <div
                    className="framer-9payf7"
                    style={{ transform: "none", opacity: "1" }}
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-e793i5"
                      dir="auto"
                    >
                      Subscribe
                    </p>
                  </div>
                </button>
              </div>
              <input type="hidden" name="Site" defaultValue="Horizone" />
              <input type="hidden" name="Form" defaultValue="Newsletter" />
              <input
                style={{ position: "absolute", transform: "scale(0)" }}
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="one-time-code"
                aria-hidden="true"
                defaultValue=""
              />
              <input
                style={{ position: "absolute", transform: "scale(0)" }}
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="one-time-code"
                aria-hidden="true"
                defaultValue=""
              />
              <input
                style={{ position: "absolute", transform: "scale(0)" }}
                type="text"
                name="message"
                tabIndex={-1}
                autoComplete="one-time-code"
                aria-hidden="true"
                defaultValue=""
              />
              <input
                style={{ position: "absolute", transform: "scale(0)" }}
                type="text"
                name="subject"
                tabIndex={-1}
                autoComplete="one-time-code"
                aria-hidden="true"
                defaultValue=""
              />
              <input
                style={{ position: "absolute", transform: "scale(0)" }}
                type="text"
                name="title"
                tabIndex={-1}
                autoComplete="one-time-code"
                aria-hidden="true"
                defaultValue=""
              />
              <input
                style={{ position: "absolute", transform: "scale(0)" }}
                type="text"
                name="description"
                tabIndex={-1}
                autoComplete="one-time-code"
                aria-hidden="true"
                defaultValue=""
              />
              <input
                style={{ position: "absolute", transform: "scale(0)" }}
                type="text"
                name="feedback"
                tabIndex={-1}
                autoComplete="one-time-code"
                aria-hidden="true"
                defaultValue=""
              />
              <input
                style={{ position: "absolute", transform: "scale(0)" }}
                type="text"
                name="notes"
                tabIndex={-1}
                autoComplete="one-time-code"
                aria-hidden="true"
                defaultValue=""
              />
              <input
                style={{ position: "absolute", transform: "scale(0)" }}
                type="text"
                name="details"
                tabIndex={-1}
                autoComplete="one-time-code"
                aria-hidden="true"
                defaultValue=""
              />
              <input
                style={{ position: "absolute", transform: "scale(0)" }}
                type="text"
                name="remarks"
                tabIndex={-1}
                autoComplete="one-time-code"
                aria-hidden="true"
                defaultValue=""
              />
              <input
                style={{ position: "absolute", transform: "scale(0)" }}
                type="text"
                name="comments"
                tabIndex={-1}
                autoComplete="one-time-code"
                aria-hidden="true"
                defaultValue=""
              />
            </form>
            <div
              className="framer-17dww7x"
              style={
                {
                  "--extracted-r6o4lv":
                    "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                  transform: "none",
                  opacity: "1",
                } as CSSProperties
              }
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="framer-text framer-styles-preset-1a6wac2"
                style={
                  {
                    "--framer-text-color":
                      "var(--extracted-r6o4lv, var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f))",
                  } as CSSProperties
                }
                dir="auto"
                data-site-import-responsive="300"
              >
                Route ideas and price drops. Two emails a month, no more.
              </p>
            </div>
            <div className="framer-1qiq450" style={{ opacity: "1" }}>
              <div
                className="framer-vdjghs"
                style={{
                  backgroundColor:
                    "var(--token-5d9b0fc5-b296-4760-8c5b-1739145ad88b)",
                  borderRadius: "999px",
                  opacity: "1",
                }}
              >
                <div
                  className="framer-ju13ui-container"
                  style={{ opacity: "1" }}
                >
                  <svg
                    style={
                      {
                        height: "100%",
                        width: "100%",
                        display: "block",
                        position: "relative",
                        color:
                          "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                        fill: "none",
                        stroke: "currentcolor",
                        strokeWidth: "1.6",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        overflow: "visible",
                      } as CSSProperties
                    }
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="5" />
                    <circle cx="12" cy="12" r="3.8" />
                    <circle
                      cx="16.9"
                      cy="7.1"
                      r=".9"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </div>
              </div>
              <div
                className="framer-1e91db4"
                style={{
                  backgroundColor:
                    "var(--token-5d9b0fc5-b296-4760-8c5b-1739145ad88b)",
                  borderRadius: "999px",
                  opacity: "1",
                }}
              >
                <div
                  className="framer-1dpn10r-container"
                  style={{ opacity: "1" }}
                >
                  <svg
                    style={
                      {
                        height: "100%",
                        width: "100%",
                        display: "block",
                        position: "relative",
                        color:
                          "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                        fill: "none",
                        stroke: "currentcolor",
                        strokeWidth: "1.6",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        overflow: "visible",
                      } as CSSProperties
                    }
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M4.5 4.5 19.5 19.5M19.5 4.5 4.5 19.5"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
              <div
                className="framer-t5df3a"
                style={{
                  backgroundColor:
                    "var(--token-5d9b0fc5-b296-4760-8c5b-1739145ad88b)",
                  borderRadius: "999px",
                  opacity: "1",
                }}
              >
                <div
                  className="framer-1e76nhy-container"
                  style={{ opacity: "1" }}
                >
                  <svg
                    style={
                      {
                        height: "100%",
                        width: "100%",
                        display: "block",
                        position: "relative",
                        color:
                          "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                        fill: "none",
                        stroke: "currentcolor",
                        strokeWidth: "1.6",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        overflow: "visible",
                      } as CSSProperties
                    }
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M14.6 21.5v-8h2.7l.5-3.3h-3.2V8.1c0-.95.33-1.6 1.7-1.6h1.7V3.6c-.3-.04-1.32-.13-2.5-.13-2.48 0-4.2 1.5-4.2 4.3v2.4H8.6v3.3h2.7v8h3.3Z"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </div>
              </div>
              <div
                className="framer-143ac9r"
                style={{
                  backgroundColor:
                    "var(--token-5d9b0fc5-b296-4760-8c5b-1739145ad88b)",
                  borderRadius: "999px",
                  opacity: "1",
                }}
              >
                <div
                  className="framer-1c8h20s-container"
                  style={{ opacity: "1" }}
                >
                  <svg
                    style={
                      {
                        height: "100%",
                        width: "100%",
                        display: "block",
                        position: "relative",
                        color:
                          "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                        fill: "none",
                        stroke: "currentcolor",
                        strokeWidth: "1.6",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        overflow: "visible",
                      } as CSSProperties
                    }
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <rect x="2.8" y="5.6" width="18.4" height="12.8" rx="4" />
                    <path d="m10.4 9.6 4.8 2.4-4.8 2.4V9.6Z" />
                  </svg>
                </div>
              </div>
              <div
                className="framer-qy1us2"
                style={{
                  backgroundColor:
                    "var(--token-5d9b0fc5-b296-4760-8c5b-1739145ad88b)",
                  borderRadius: "999px",
                  opacity: "1",
                }}
              >
                <div
                  className="framer-w2wle-container"
                  style={{ opacity: "1" }}
                >
                  <svg
                    style={
                      {
                        height: "100%",
                        width: "100%",
                        display: "block",
                        position: "relative",
                        color:
                          "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                        fill: "none",
                        stroke: "currentcolor",
                        strokeWidth: "1.6",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        overflow: "visible",
                      } as CSSProperties
                    }
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="3" />
                    <path d="M8 10.5v6M8 7.5h.01M11.5 16.5v-6M11.5 13c0-1.6 1-2.6 2.4-2.6s2.1 1 2.1 2.6v3.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="framer-s39xoi"
        style={
          {
            "--border-bottom-width": "0px",
            "--border-color":
              "var(--token-1bc3d94c-6a34-4a4f-bb24-8d830b446610)",
            "--border-left-width": "0px",
            "--border-right-width": "0px",
            "--border-style": "solid",
            "--border-top-width": "1px",
            willChange: "transform",
            opacity: "1",
            transform: "none",
          } as CSSProperties
        }
        data-border="true"
      >
        <div
          className="framer-g2a9zh"
          style={
            {
              "--extracted-r6o4lv":
                "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
              transform: "none",
              opacity: "1",
            } as CSSProperties
          }
          data-framer-component-type="RichTextContainer"
        >
          <p
            className="framer-text framer-styles-preset-1dmlb93"
            style={
              {
                "--framer-text-color":
                  "var(--extracted-r6o4lv, var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f))",
              } as CSSProperties
            }
            dir="auto"
            data-site-import-responsive="328"
          >
            © 2026 Horizone Car Rental
          </p>
        </div>
        <nav className="framer-wwbz35" style={{ opacity: "1" }}>
          <div className="framer-jg223-container" style={{ opacity: "1" }}>
            <a
              className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
              style={{ opacity: "1" }}
              href="#privacy"
            >
              <div
                className="framer-1onkx82"
                style={
                  {
                    "--extracted-r6o4lv":
                      "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                    transform: "none",
                    opacity: "1",
                  } as CSSProperties
                }
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="framer-text framer-styles-preset-1dmlb93"
                  style={
                    {
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f))",
                    } as CSSProperties
                  }
                  dir="auto"
                >
                  Privacy Policy
                </p>
              </div>
            </a>
          </div>
          <div className="framer-18kz641-container" style={{ opacity: "1" }}>
            <a
              className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
              style={{ opacity: "1" }}
              href="#terms"
            >
              <div
                className="framer-1onkx82"
                style={
                  {
                    "--extracted-r6o4lv":
                      "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                    transform: "none",
                    opacity: "1",
                  } as CSSProperties
                }
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="framer-text framer-styles-preset-1dmlb93"
                  style={
                    {
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f))",
                    } as CSSProperties
                  }
                  dir="auto"
                >
                  Terms of Service
                </p>
              </div>
            </a>
          </div>
          <div className="framer-95gw16-container" style={{ opacity: "1" }}>
            <a
              className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
              style={{ opacity: "1" }}
              href="#cookies"
            >
              <div
                className="framer-1onkx82"
                style={
                  {
                    "--extracted-r6o4lv":
                      "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                    transform: "none",
                    opacity: "1",
                  } as CSSProperties
                }
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="framer-text framer-styles-preset-1dmlb93"
                  style={
                    {
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f))",
                    } as CSSProperties
                  }
                  dir="auto"
                >
                  Cookies
                </p>
              </div>
            </a>
          </div>
          <div className="framer-iaw1ly-container" style={{ opacity: "1" }}>
            <a
              className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
              style={{ opacity: "1" }}
              href="#cookies"
            >
              <div
                className="framer-1onkx82"
                style={
                  {
                    "--extracted-r6o4lv":
                      "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                    transform: "none",
                    opacity: "1",
                  } as CSSProperties
                }
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="framer-text framer-styles-preset-1dmlb93"
                  style={
                    {
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f))",
                    } as CSSProperties
                  }
                  dir="auto"
                >
                  Cookie settings
                </p>
              </div>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

function ImportedDivPricingData() {
  return (
    <div className="framer-1xlz05r items-start flex-none flex-col flex-nowrap [gap:0] [left:0] [opacity:0] [order:1003] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [top:0]">
      <div className="framer-cwq8pc items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start]">
        <div className="framer-gtih2l-container flex-none">
          <span style={{ display: "none" }} />
        </div>
        <div className="framer-11zp4ho items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start]">
          <div className="framer-27cle4 items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start]">
            <div className="framer-1ropa8b-container flex-none">
              <span style={{ display: "none" }} />
            </div>
          </div>
          <div className="framer-27cle4 items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start]">
            <div className="framer-1ropa8b-container flex-none">
              <span style={{ display: "none" }} />
            </div>
          </div>
          <div className="framer-27cle4 items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start]">
            <div className="framer-1ropa8b-container flex-none">
              <span style={{ display: "none" }} />
            </div>
          </div>
          <div className="framer-27cle4 items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start]">
            <div className="framer-1ropa8b-container flex-none">
              <span style={{ display: "none" }} />
            </div>
          </div>
        </div>
        <div className="framer-erc7tj items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start]">
          <div className="framer-1jhn804 items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start]">
            <div className="framer-18enzvt-container flex-none">
              <span style={{ display: "none" }} />
            </div>
          </div>
          <div className="framer-1jhn804 items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start]">
            <div className="framer-18enzvt-container flex-none">
              <span style={{ display: "none" }} />
            </div>
          </div>
          <div className="framer-1jhn804 items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start]">
            <div className="framer-18enzvt-container flex-none">
              <span style={{ display: "none" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function subscribeMobile(onChange: () => void) {
  window.addEventListener("resize", onChange);
  return () => window.removeEventListener("resize", onChange);
}
