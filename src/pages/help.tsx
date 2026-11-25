import type { CSSProperties } from "react";
import { useSyncExternalStore } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/help.css?raw";
import { SiteImportMobileNav } from "../components/site-import-mobile.nav";
import { SiteImportFaqBehavior } from "../components/site-import-faq-behavior";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Help centre · Horizone" },
      {
        name: "description",
        content:
          "Find answers about Horizone bookings, payments, pick-up, insurance, changes, and cancellations.",
      },
      { property: "og:title", content: "Help centre · Horizone" },
      {
        property: "og:description",
        content:
          "Find answers about Horizone bookings, payments, pick-up, insurance, changes, and cancellations.",
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
.site-import-faq-answer {
  color: var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119);
  font-family: "Inter Variable", Inter, sans-serif;
  font-size: 13px;
  line-height: 1.55;
  padding: 0 16px 16px;
  word-break: break-word;
}
.framer-1izvn91[aria-expanded="true"] svg {
  transform: rotate(45deg);
}`}</style>
      <SiteImportMobileNav />
      <SiteImportFaqBehavior />
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
            className="framer-1P3DH framer-iJjgk framer-u6uwY framer-bAeq6 framer-qO70Z framer-71sfr framer-ip2yS framer-AAOB7 framer-1fiu8rj items-center flex-col flex-nowrap content-center justify-start [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [min-height:100vh]"
            style={{ width: "auto", display: "contents" }}
          >
            <div className="framer-116nkw4 flex-none" />
            <ImportedSectionHero />
            <ImportedSectionFAQs />
            <ImportedSectionContact />
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
          className="framer-6jWyo framer-n0ccwk framer-bmpgw8 gap-[10px] [overflow:visible] will-change-transform [opacity:1]"
          style={{ pointerEvents: "auto", transform: "none" }}
          href="https://www.framer.com"
          rel="noopener"
          title="Create a free website with Framer, the website builder loved by startups, designers and agencies."
        >
          <div
            className="framer-13yxzio flex-none [inset:1px] [overflow:hidden] [will-change:var(--framer-will-change-override,transform)] [border-radius:10px] [box-shadow:rgba(0,_0,_0,_0.17)_0px_0.602187px_1.56569px_-1.5px,_rgba(0,_0,_0,_0.14)_0px_2.28853px_5.95019px_-3px,_rgba(0,_0,_0,_0.02)_0px_10px_26px_-4.5px] [opacity:1]"
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
          />
          <div
            className="framer-19yaanm items-center flex-none flex-row flex-nowrap gap-[10px] content-center justify-start [left:50%] [overflow:visible] [top:50%] [opacity:1]"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <div className="framer-1kflzx5 flex-none [overflow:visible] [opacity:1]">
              <div
                className="framer-hcsc7 framer-e50co aspect-[0.6/1] flex-none top-[-2px] [left:50%] [opacity:1]"
                style={
                  {
                    "--1bd4d3i": "rgb(0, 0, 0)",
                    "--otdjsv": "rgb(0, 0, 0)",
                    transform: "translateX(-50%)",
                  } as CSSProperties
                }
              />
            </div>
            <p style={{ position: "absolute", transform: "scale(0.001)" }}>
              Create a free website with Framer, the website builder loved by
              startups, designers and agencies.
            </p>
            <div
              className="framer-g7oZR framer-1um7t9d aspect-[9.7/1] flex-none [opacity:1]"
              style={
                {
                  "--1bd4d3i": "rgb(0, 0, 0)",
                  "--otdjsv": "rgb(0, 0, 0)",
                } as CSSProperties
              }
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
                data-framer-page-link-current="true"
                href="#"
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
                <div
                  className="framer-16wo98v will-change-transform [opacity:1]"
                  style={{ transform: "none" }}
                >
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
                      className="framer-e4k9vn [opacity:1]"
                      style={
                        {
                          "--extracted-a0htzi":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          transform: "none",
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
                <div
                  className="framer-l53zpz will-change-transform [opacity:1]"
                  style={{ transform: "none" }}
                >
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

function ImportedSectionHero() {
  return (
    <section className="framer-1ut0sco items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0]">
      <div className="framer-11d3s31 items-start flex-none flex-col flex-nowrap gap-[28px] max-w-[1360px] [place-content:flex-start]">
        <div className="framer-2jlm07 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start]">
          <div
            className="framer-gw745n items-center flex-none flex-row flex-nowrap gap-[6px] content-center justify-start [opacity:1]"
            style={{ transform: "none", willChange: "transform" }}
          >
            <a
              className="framer-n8eduf framer-1yysbpb items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start]"
              href="/"
            >
              <div className="ssr-variant">
                <div
                  className="framer-nj3gmd"
                  style={{ transform: "none" }}
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
                    data-site-import-responsive="59"
                  >
                    Home
                  </p>
                </div>
              </div>
            </a>
            <div className="framer-ct52pc-container flex-none">
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
                className="framer-1n8t6fy"
                style={{ transform: "none" }}
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
                  data-site-import-responsive="64"
                >
                  Help centre
                </p>
              </div>
            </div>
          </div>
          <div
            className="framer-1s5m4y3 [word-break:break-word]"
            style={{ transform: "none" }}
            data-framer-component-type="RichTextContainer"
          >
            <h1
              className="framer-text framer-styles-preset-1qika4w"
              style={{ "--framer-text-alignment": "start" } as CSSProperties}
              dir="auto"
            >
              <span
                className="[opacity:1]"
                style={{ display: "inline-block", transform: "none" }}
              >
                How
              </span>{" "}
              <span
                className="[opacity:1]"
                style={{ display: "inline-block", transform: "none" }}
              >
                can
              </span>{" "}
              <span
                className="[opacity:1]"
                style={{ display: "inline-block", transform: "none" }}
              >
                we
              </span>{" "}
              <span
                className="[opacity:1]"
                style={{ display: "inline-block", transform: "none" }}
              >
                help?
              </span>
            </h1>
          </div>
          <div
            className="framer-1s0i62 items-start flex-none flex-row flex-nowrap max-w-[676px] [gap:0] [place-content:flex-start] [opacity:1]"
            style={{ transform: "none", willChange: "transform" }}
          >
            <div
              className="framer-19nc19c [word-break:break-word]"
              style={{ transform: "none" }}
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="framer-text framer-styles-preset-16hus5p"
                dir="auto"
              >
                Search the answers, manage a booking, or talk to a person any
                hour, in eleven languages.
              </p>
            </div>
          </div>
          <div className="framer-1xcs779 flex-none" />
          <div
            className="framer-1w47eoq items-center flex-none flex-row flex-nowrap gap-[10px] max-w-[460px] content-center justify-start [opacity:1]"
            style={{ transform: "none", willChange: "transform" }}
            data-border="true"
          >
            <div className="framer-1botkbi-container flex-none">
              <svg
                className="[color:var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)] fill-none [overflow:visible]"
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
            <div className="framer-form-text-input framer-form-input-wrapper framer-e8ovav framer-form-text-input-type">
              <input
                className="framer-form-input framer-form-input-empty"
                type="text"
                name="faq-search"
                placeholder="Try “deposit”, “one-way” or “cancel”"
                defaultValue=""
                aria-label="Faq search"
              />
            </div>
          </div>
          <div
            className="framer-q5g3yn items-start flex-none flex-row flex-wrap gap-[8px] [place-content:flex-start] [opacity:1]"
            style={{ transform: "none", willChange: "transform" }}
          >
            <a
              className="framer-13zfayy framer-1yysbpb items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start]"
              data-border="true"
              href="#faqs"
              tabIndex={0}
            >
              <div className="ssr-variant">
                <div
                  className="framer-1p57vwz"
                  style={{ transform: "none" }}
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-1dmlb93"
                    style={
                      {
                        "--framer-text-color":
                          "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                      } as CSSProperties
                    }
                    dir="auto"
                    data-site-import-responsive="85"
                  >
                    Cancel a booking
                  </p>
                </div>
              </div>
            </a>
            <a
              className="framer-g07men framer-1yysbpb items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start]"
              data-border="true"
              href="#faqs"
              tabIndex={0}
            >
              <div className="ssr-variant">
                <div
                  className="framer-ytra80"
                  style={{ transform: "none" }}
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-1dmlb93"
                    style={
                      {
                        "--framer-text-color":
                          "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                      } as CSSProperties
                    }
                    dir="auto"
                    data-site-import-responsive="88"
                  >
                    Pick-up hours
                  </p>
                </div>
              </div>
            </a>
            <a
              className="framer-18bycq7 framer-1yysbpb items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start]"
              data-border="true"
              href="#contact"
            >
              <div className="ssr-variant">
                <div
                  className="framer-n21lp1"
                  style={{ transform: "none" }}
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-1dmlb93"
                    style={
                      {
                        "--framer-text-color":
                          "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                      } as CSSProperties
                    }
                    dir="auto"
                    data-site-import-responsive="91"
                  >
                    Contact us
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionFAQs() {
  return (
    <section
      className="framer-1mvpob3 items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0]"
      id="faqs"
    >
      <div className="framer-16qon3a items-start flex-none flex-col flex-nowrap gap-[28px] max-w-[1360px] [place-content:flex-start]">
        <div className="framer-1gsdvlr items-start flex-none flex-col flex-nowrap gap-[8px] [place-content:flex-start]">
          <div
            className="framer-1frpiy5 [word-break:break-word]"
            style={{ transform: "none" }}
            data-framer-component-type="RichTextContainer"
          >
            <h2
              className="framer-text framer-styles-preset-1hwdddd"
              style={{ "--framer-text-alignment": "start" } as CSSProperties}
              dir="auto"
            >
              <span
                className="[opacity:1]"
                style={{ display: "inline-block", transform: "none" }}
              >
                Browse
              </span>{" "}
              <span
                className="[opacity:1]"
                style={{ display: "inline-block", transform: "none" }}
              >
                by
              </span>{" "}
              <span
                className="[opacity:1]"
                style={{ display: "inline-block", transform: "none" }}
              >
                topic
              </span>
            </h2>
          </div>
          <div
            className="framer-13y3cl2 [word-break:break-word] will-change-transform [opacity:1]"
            style={{ transform: "none" }}
            data-framer-component-type="RichTextContainer"
          >
            <p
              className="framer-text framer-styles-preset-nsw7a4"
              style={
                {
                  "--framer-text-alignment": "start",
                  "--framer-text-color":
                    "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                } as CSSProperties
              }
              dir="auto"
            >
              Pick a topic, or search above.
            </p>
          </div>
        </div>
        <div className="framer-hwuo07 items-start [place-content:flex-start]">
          <div
            className="framer-133ieqi items-start [place-content:flex-start]"
            data-border="true"
          >
            <div className="ssr-variant">
              <div
                className="framer-pnf1ns-container flex-none will-change-transform [opacity:1]"
                style={{ transform: "none" }}
                data-site-import-desktop-variant=""
              >
                <div
                  className="framer-81XsQ framer-3tJNm framer-ip2yS framer-iJjgk framer-oX6dW framer-1j1h3kk items-center flex-row flex-nowrap content-center justify-between [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "0px",
                      "--border-color":
                        "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                      "--border-left-width": "2px",
                      "--border-right-width": "0px",
                      "--border-style": "solid",
                      "--border-top-width": "0px",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      width: "100%",
                      borderRadius: "0px",
                    } as CSSProperties
                  }
                  data-border="true"
                  tabIndex={0}
                  data-site-import-responsive="105"
                >
                  <div
                    className="framer-1hhcex9 [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                        transform: "none",
                      } as CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-bvjmlc"
                      style={
                        {
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      All topics
                    </p>
                  </div>
                  <div
                    className="framer-1ga89ga [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                        transform: "none",
                      } as CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1a6wac2"
                      style={
                        {
                          "--framer-text-alignment": "start",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      18
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="framer-pnf1ns-container flex-none will-change-transform [opacity:1]"
                style={
                  {
                    transform: "none",
                    "--site-import-responsive-display": "block",
                  } as CSSProperties
                }
                data-site-import-mobile-variant=""
              >
                <div
                  className="framer-81XsQ framer-3tJNm framer-ip2yS framer-iJjgk framer-oX6dW framer-1j1h3kk framer-v-1vgmkvp items-center flex-row flex-nowrap gap-[8px] justify-start! content-center justify-between [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "1px",
                      "--border-color":
                        "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                      "--border-left-width": "1px",
                      "--border-right-width": "1px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      backgroundColor:
                        "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                      width: "100%",
                      borderRadius: "999px",
                    } as CSSProperties
                  }
                  data-border="true"
                  tabIndex={0}
                >
                  <div
                    className="framer-1hhcex9 [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                        "--extracted-2gg91v": '"opsz" 14, "wght" 600',
                        transform: "none",
                      } as CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text"
                      style={
                        {
                          "--font-selector":
                            "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOakF3",
                          "--framer-font-family":
                            '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                          "--framer-font-size": "13px",
                          "--framer-font-variation-axes":
                            'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                          "--framer-line-height": "1.55em",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      All topics
                    </p>
                  </div>
                  <div
                    className="framer-1ga89ga [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-7e7f526a-85ea-441f-9429-765a41c2534c)",
                        transform: "none",
                      } as CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1a6wac2"
                      style={
                        {
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-7e7f526a-85ea-441f-9429-765a41c2534c))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      18
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div
                className="framer-56k75z-container flex-none will-change-transform [opacity:1]"
                style={{ transform: "none" }}
                data-site-import-desktop-variant=""
              >
                <div
                  className="framer-81XsQ framer-3tJNm framer-ip2yS framer-iJjgk framer-oX6dW framer-1j1h3kk items-center flex-row flex-nowrap content-center justify-between [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "0px",
                      "--border-color": "rgba(0, 0, 0, 0)",
                      "--border-left-width": "2px",
                      "--border-right-width": "0px",
                      "--border-style": "solid",
                      "--border-top-width": "0px",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      width: "100%",
                      borderRadius: "0px",
                    } as CSSProperties
                  }
                  data-border="true"
                  tabIndex={0}
                  data-site-import-responsive="111"
                >
                  <div
                    className="framer-1hhcex9 [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                        transform: "none",
                      } as CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1e1duze"
                      style={
                        {
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Booking &amp; payment
                    </p>
                  </div>
                  <div
                    className="framer-1ga89ga [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                        transform: "none",
                      } as CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1a6wac2"
                      style={
                        {
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      4
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="framer-56k75z-container flex-none will-change-transform [opacity:1]"
                style={
                  {
                    transform: "none",
                    "--site-import-responsive-display": "block",
                  } as CSSProperties
                }
                data-site-import-mobile-variant=""
              >
                <div
                  className="framer-81XsQ framer-3tJNm framer-ip2yS framer-iJjgk framer-oX6dW framer-1j1h3kk framer-v-visss7 items-center flex-row flex-nowrap gap-[8px] justify-start! content-center justify-between [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "1px",
                      "--border-color":
                        "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                      "--border-left-width": "1px",
                      "--border-right-width": "1px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      width: "100%",
                      borderRadius: "999px",
                    } as CSSProperties
                  }
                  data-border="true"
                  tabIndex={0}
                >
                  <div
                    className="framer-1hhcex9 [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                        transform: "none",
                      } as CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1dmlb93"
                      style={
                        {
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Booking &amp; payment
                    </p>
                  </div>
                  <div
                    className="framer-1ga89ga [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                        transform: "none",
                      } as CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1a6wac2"
                      style={
                        {
                          "--framer-text-alignment": "start",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      4
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div
                className="framer-m1bsgq-container flex-none will-change-transform [opacity:1]"
                style={{ transform: "none" }}
                data-site-import-desktop-variant=""
              >
                <div
                  className="framer-81XsQ framer-3tJNm framer-ip2yS framer-iJjgk framer-oX6dW framer-1j1h3kk items-center flex-row flex-nowrap content-center justify-between [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "0px",
                      "--border-color": "rgba(0, 0, 0, 0)",
                      "--border-left-width": "2px",
                      "--border-right-width": "0px",
                      "--border-style": "solid",
                      "--border-top-width": "0px",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      width: "100%",
                      borderRadius: "0px",
                    } as CSSProperties
                  }
                  data-border="true"
                  tabIndex={0}
                  data-site-import-responsive="117"
                >
                  <div
                    className="framer-1hhcex9 [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                        transform: "none",
                      } as CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1e1duze"
                      style={
                        {
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Pick-up &amp; return
                    </p>
                  </div>
                  <div
                    className="framer-1ga89ga [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                        transform: "none",
                      } as CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1a6wac2"
                      style={
                        {
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      4
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="framer-m1bsgq-container flex-none will-change-transform [opacity:1]"
                style={
                  {
                    transform: "none",
                    "--site-import-responsive-display": "block",
                  } as CSSProperties
                }
                data-site-import-mobile-variant=""
              >
                <div
                  className="framer-81XsQ framer-3tJNm framer-ip2yS framer-iJjgk framer-oX6dW framer-1j1h3kk framer-v-visss7 items-center flex-row flex-nowrap gap-[8px] justify-start! content-center justify-between [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "1px",
                      "--border-color":
                        "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                      "--border-left-width": "1px",
                      "--border-right-width": "1px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      width: "100%",
                      borderRadius: "999px",
                    } as CSSProperties
                  }
                  data-border="true"
                  tabIndex={0}
                >
                  <div
                    className="framer-1hhcex9 [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                        transform: "none",
                      } as CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1dmlb93"
                      style={
                        {
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Pick-up &amp; return
                    </p>
                  </div>
                  <div
                    className="framer-1ga89ga [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                        transform: "none",
                      } as CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1a6wac2"
                      style={
                        {
                          "--framer-text-alignment": "start",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      4
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div
                className="framer-4ge28t-container flex-none will-change-transform [opacity:1]"
                style={{ transform: "none" }}
                data-site-import-desktop-variant=""
              >
                <div
                  className="framer-81XsQ framer-3tJNm framer-ip2yS framer-iJjgk framer-oX6dW framer-1j1h3kk items-center flex-row flex-nowrap content-center justify-between [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "0px",
                      "--border-color": "rgba(0, 0, 0, 0)",
                      "--border-left-width": "2px",
                      "--border-right-width": "0px",
                      "--border-style": "solid",
                      "--border-top-width": "0px",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      width: "100%",
                      borderRadius: "0px",
                    } as CSSProperties
                  }
                  data-border="true"
                  tabIndex={0}
                  data-site-import-responsive="123"
                >
                  <div
                    className="framer-1hhcex9 [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                        transform: "none",
                      } as CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1e1duze"
                      style={
                        {
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Insurance &amp; protection
                    </p>
                  </div>
                  <div
                    className="framer-1ga89ga [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                        transform: "none",
                      } as CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1a6wac2"
                      style={
                        {
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      3
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="framer-4ge28t-container flex-none will-change-transform [opacity:1]"
                style={
                  {
                    transform: "none",
                    "--site-import-responsive-display": "block",
                  } as CSSProperties
                }
                data-site-import-mobile-variant=""
              >
                <div
                  className="framer-81XsQ framer-3tJNm framer-ip2yS framer-iJjgk framer-oX6dW framer-1j1h3kk framer-v-visss7 items-center flex-row flex-nowrap gap-[8px] justify-start! content-center justify-between [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "1px",
                      "--border-color":
                        "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                      "--border-left-width": "1px",
                      "--border-right-width": "1px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      width: "100%",
                      borderRadius: "999px",
                    } as CSSProperties
                  }
                  data-border="true"
                  tabIndex={0}
                >
                  <div
                    className="framer-1hhcex9 [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                        transform: "none",
                      } as CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1dmlb93"
                      style={
                        {
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Insurance &amp; protection
                    </p>
                  </div>
                  <div
                    className="framer-1ga89ga [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                        transform: "none",
                      } as CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1a6wac2"
                      style={
                        {
                          "--framer-text-alignment": "start",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      3
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div
                className="framer-1kcj9p5-container flex-none will-change-transform [opacity:1]"
                style={{ transform: "none" }}
                data-site-import-desktop-variant=""
              >
                <div
                  className="framer-81XsQ framer-3tJNm framer-ip2yS framer-iJjgk framer-oX6dW framer-1j1h3kk items-center flex-row flex-nowrap content-center justify-between [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "0px",
                      "--border-color": "rgba(0, 0, 0, 0)",
                      "--border-left-width": "2px",
                      "--border-right-width": "0px",
                      "--border-style": "solid",
                      "--border-top-width": "0px",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      width: "100%",
                      borderRadius: "0px",
                    } as CSSProperties
                  }
                  data-border="true"
                  tabIndex={0}
                  data-site-import-responsive="129"
                >
                  <div
                    className="framer-1hhcex9 [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                        transform: "none",
                      } as CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1e1duze"
                      style={
                        {
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Changes &amp; cancellations
                    </p>
                  </div>
                  <div
                    className="framer-1ga89ga [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                        transform: "none",
                      } as CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1a6wac2"
                      style={
                        {
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      3
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="framer-1kcj9p5-container flex-none will-change-transform [opacity:1]"
                style={
                  {
                    transform: "none",
                    "--site-import-responsive-display": "block",
                  } as CSSProperties
                }
                data-site-import-mobile-variant=""
              >
                <div
                  className="framer-81XsQ framer-3tJNm framer-ip2yS framer-iJjgk framer-oX6dW framer-1j1h3kk framer-v-visss7 items-center flex-row flex-nowrap gap-[8px] justify-start! content-center justify-between [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "1px",
                      "--border-color":
                        "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                      "--border-left-width": "1px",
                      "--border-right-width": "1px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      width: "100%",
                      borderRadius: "999px",
                    } as CSSProperties
                  }
                  data-border="true"
                  tabIndex={0}
                >
                  <div
                    className="framer-1hhcex9 [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                        transform: "none",
                      } as CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1dmlb93"
                      style={
                        {
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Changes &amp; cancellations
                    </p>
                  </div>
                  <div
                    className="framer-1ga89ga [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                        transform: "none",
                      } as CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1a6wac2"
                      style={
                        {
                          "--framer-text-alignment": "start",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      3
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div
                className="framer-1jfvl97-container flex-none will-change-transform [opacity:1]"
                style={{ transform: "none" }}
                data-site-import-desktop-variant=""
              >
                <div
                  className="framer-81XsQ framer-3tJNm framer-ip2yS framer-iJjgk framer-oX6dW framer-1j1h3kk items-center flex-row flex-nowrap content-center justify-between [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "0px",
                      "--border-color": "rgba(0, 0, 0, 0)",
                      "--border-left-width": "2px",
                      "--border-right-width": "0px",
                      "--border-style": "solid",
                      "--border-top-width": "0px",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      width: "100%",
                      borderRadius: "0px",
                    } as CSSProperties
                  }
                  data-border="true"
                  tabIndex={0}
                  data-site-import-responsive="135"
                >
                  <div
                    className="framer-1hhcex9 [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                        transform: "none",
                      } as CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1e1duze"
                      style={
                        {
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Drivers &amp; licences
                    </p>
                  </div>
                  <div
                    className="framer-1ga89ga [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                        transform: "none",
                      } as CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1a6wac2"
                      style={
                        {
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      4
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="framer-1jfvl97-container flex-none will-change-transform [opacity:1]"
                style={
                  {
                    transform: "none",
                    "--site-import-responsive-display": "block",
                  } as CSSProperties
                }
                data-site-import-mobile-variant=""
              >
                <div
                  className="framer-81XsQ framer-3tJNm framer-ip2yS framer-iJjgk framer-oX6dW framer-1j1h3kk framer-v-visss7 items-center flex-row flex-nowrap gap-[8px] justify-start! content-center justify-between [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "1px",
                      "--border-color":
                        "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                      "--border-left-width": "1px",
                      "--border-right-width": "1px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      width: "100%",
                      borderRadius: "999px",
                    } as CSSProperties
                  }
                  data-border="true"
                  tabIndex={0}
                >
                  <div
                    className="framer-1hhcex9 [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                        transform: "none",
                      } as CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1dmlb93"
                      style={
                        {
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Drivers &amp; licences
                    </p>
                  </div>
                  <div
                    className="framer-1ga89ga [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                        transform: "none",
                      } as CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1a6wac2"
                      style={
                        {
                          "--framer-text-alignment": "start",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      4
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="framer-6aovb3 items-start [gap:0] [place-content:flex-start]"
            data-border="true"
          >
            <div
              className="framer-1q3jnc9 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div className="framer-1dm0fug-container flex-none">
                  <div
                    className="framer-zwvpI framer-FiAfW framer-oX6dW framer-3tJNm framer-1n1ko4n items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]"
                    style={
                      {
                        "--border-bottom-width": "1px",
                        "--border-color":
                          "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "0px",
                        width: "100%",
                      } as CSSProperties
                    }
                    data-border="true"
                  >
                    <div
                      className="framer-1izvn91 items-center flex-none flex-row flex-nowrap gap-[18px] content-center justify-start [opacity:1]"
                      tabIndex={0}
                    >
                      <div className="framer-maqplf items-start flex-[1_0_0] flex-col flex-nowrap gap-[2px] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1okcbnu [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-18ulsum"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Is the price I see the price I pay?
                          </p>
                        </div>
                        <div
                          className="framer-1yf9khw [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Booking &amp; payment
                          </p>
                        </div>
                      </div>
                      <div
                        className="framer-g34mf items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "1px",
                            "--border-color":
                              "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            borderRadius: "999px",
                            transform: "none",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-1fhab3f-container flex-none [opacity:1]">
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
                            <path d="M12 6v12M6 12h12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="framer-1q3jnc9 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div className="framer-1dm0fug-container flex-none">
                  <div
                    className="framer-zwvpI framer-FiAfW framer-oX6dW framer-3tJNm framer-1n1ko4n items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]"
                    style={
                      {
                        "--border-bottom-width": "1px",
                        "--border-color":
                          "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "0px",
                        width: "100%",
                      } as CSSProperties
                    }
                    data-border="true"
                  >
                    <div
                      className="framer-1izvn91 items-center flex-none flex-row flex-nowrap gap-[18px] content-center justify-start [opacity:1]"
                      tabIndex={0}
                    >
                      <div className="framer-maqplf items-start flex-[1_0_0] flex-col flex-nowrap gap-[2px] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1okcbnu [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-18ulsum"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            When is my card charged?
                          </p>
                        </div>
                        <div
                          className="framer-1yf9khw [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Booking &amp; payment
                          </p>
                        </div>
                      </div>
                      <div
                        className="framer-g34mf items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "1px",
                            "--border-color":
                              "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            borderRadius: "999px",
                            transform: "none",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-1fhab3f-container flex-none [opacity:1]">
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
                            <path d="M12 6v12M6 12h12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="framer-1q3jnc9 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform opacity-[0.988686]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div className="framer-1dm0fug-container flex-none">
                  <div
                    className="framer-zwvpI framer-FiAfW framer-oX6dW framer-3tJNm framer-1n1ko4n items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]"
                    style={
                      {
                        "--border-bottom-width": "1px",
                        "--border-color":
                          "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "0px",
                        width: "100%",
                      } as CSSProperties
                    }
                    data-border="true"
                  >
                    <div
                      className="framer-1izvn91 items-center flex-none flex-row flex-nowrap gap-[18px] content-center justify-start [opacity:1]"
                      tabIndex={0}
                    >
                      <div className="framer-maqplf items-start flex-[1_0_0] flex-col flex-nowrap gap-[2px] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1okcbnu [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-18ulsum"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            What is the security deposit?
                          </p>
                        </div>
                        <div
                          className="framer-1yf9khw [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Booking &amp; payment
                          </p>
                        </div>
                      </div>
                      <div
                        className="framer-g34mf items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "1px",
                            "--border-color":
                              "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            borderRadius: "999px",
                            transform: "none",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-1fhab3f-container flex-none [opacity:1]">
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
                            <path d="M12 6v12M6 12h12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="framer-1q3jnc9 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform opacity-[0.988686]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div className="framer-1dm0fug-container flex-none">
                  <div
                    className="framer-zwvpI framer-FiAfW framer-oX6dW framer-3tJNm framer-1n1ko4n items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]"
                    style={
                      {
                        "--border-bottom-width": "1px",
                        "--border-color":
                          "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "0px",
                        width: "100%",
                      } as CSSProperties
                    }
                    data-border="true"
                  >
                    <div
                      className="framer-1izvn91 items-center flex-none flex-row flex-nowrap gap-[18px] content-center justify-start [opacity:1]"
                      tabIndex={0}
                    >
                      <div className="framer-maqplf items-start flex-[1_0_0] flex-col flex-nowrap gap-[2px] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1okcbnu [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-18ulsum"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Can I use a debit card?
                          </p>
                        </div>
                        <div
                          className="framer-1yf9khw [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Booking &amp; payment
                          </p>
                        </div>
                      </div>
                      <div
                        className="framer-g34mf items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "1px",
                            "--border-color":
                              "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            borderRadius: "999px",
                            transform: "none",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-1fhab3f-container flex-none [opacity:1]">
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
                            <path d="M12 6v12M6 12h12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="framer-1q3jnc9 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform opacity-[0.988686]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div className="framer-1dm0fug-container flex-none">
                  <div
                    className="framer-zwvpI framer-FiAfW framer-oX6dW framer-3tJNm framer-1n1ko4n items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]"
                    style={
                      {
                        "--border-bottom-width": "1px",
                        "--border-color":
                          "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "0px",
                        width: "100%",
                      } as CSSProperties
                    }
                    data-border="true"
                  >
                    <div
                      className="framer-1izvn91 items-center flex-none flex-row flex-nowrap gap-[18px] content-center justify-start [opacity:1]"
                      tabIndex={0}
                    >
                      <div className="framer-maqplf items-start flex-[1_0_0] flex-col flex-nowrap gap-[2px] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1okcbnu [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-18ulsum"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            What do I need to pick up a car?
                          </p>
                        </div>
                        <div
                          className="framer-1yf9khw [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Pick-up &amp; return
                          </p>
                        </div>
                      </div>
                      <div
                        className="framer-g34mf items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "1px",
                            "--border-color":
                              "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            borderRadius: "999px",
                            transform: "none",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-1fhab3f-container flex-none [opacity:1]">
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
                            <path d="M12 6v12M6 12h12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="framer-1q3jnc9 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform opacity-[0.988686]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div className="framer-1dm0fug-container flex-none">
                  <div
                    className="framer-zwvpI framer-FiAfW framer-oX6dW framer-3tJNm framer-1n1ko4n items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]"
                    style={
                      {
                        "--border-bottom-width": "1px",
                        "--border-color":
                          "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "0px",
                        width: "100%",
                      } as CSSProperties
                    }
                    data-border="true"
                  >
                    <div
                      className="framer-1izvn91 items-center flex-none flex-row flex-nowrap gap-[18px] content-center justify-start [opacity:1]"
                      tabIndex={0}
                    >
                      <div className="framer-maqplf items-start flex-[1_0_0] flex-col flex-nowrap gap-[2px] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1okcbnu [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-18ulsum"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Can I pick up outside opening hours?
                          </p>
                        </div>
                        <div
                          className="framer-1yf9khw [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Pick-up &amp; return
                          </p>
                        </div>
                      </div>
                      <div
                        className="framer-g34mf items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "1px",
                            "--border-color":
                              "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            borderRadius: "999px",
                            transform: "none",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-1fhab3f-container flex-none [opacity:1]">
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
                            <path d="M12 6v12M6 12h12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="framer-1q3jnc9 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform opacity-[0.988799]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div className="framer-1dm0fug-container flex-none">
                  <div
                    className="framer-zwvpI framer-FiAfW framer-oX6dW framer-3tJNm framer-1n1ko4n items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]"
                    style={
                      {
                        "--border-bottom-width": "1px",
                        "--border-color":
                          "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "0px",
                        width: "100%",
                      } as CSSProperties
                    }
                    data-border="true"
                  >
                    <div
                      className="framer-1izvn91 items-center flex-none flex-row flex-nowrap gap-[18px] content-center justify-start [opacity:1]"
                      tabIndex={0}
                    >
                      <div className="framer-maqplf items-start flex-[1_0_0] flex-col flex-nowrap gap-[2px] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1okcbnu [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-18ulsum"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Can I return the car to a different location?
                          </p>
                        </div>
                        <div
                          className="framer-1yf9khw [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Pick-up &amp; return
                          </p>
                        </div>
                      </div>
                      <div
                        className="framer-g34mf items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "1px",
                            "--border-color":
                              "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            borderRadius: "999px",
                            transform: "none",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-1fhab3f-container flex-none [opacity:1]">
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
                            <path d="M12 6v12M6 12h12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="framer-1q3jnc9 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div className="framer-1dm0fug-container flex-none">
                  <div
                    className="framer-zwvpI framer-FiAfW framer-oX6dW framer-3tJNm framer-1n1ko4n items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]"
                    style={
                      {
                        "--border-bottom-width": "1px",
                        "--border-color":
                          "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "0px",
                        width: "100%",
                      } as CSSProperties
                    }
                    data-border="true"
                  >
                    <div
                      className="framer-1izvn91 items-center flex-none flex-row flex-nowrap gap-[18px] content-center justify-start [opacity:1]"
                      tabIndex={0}
                    >
                      <div className="framer-maqplf items-start flex-[1_0_0] flex-col flex-nowrap gap-[2px] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1okcbnu [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-18ulsum"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            What is the fuel policy?
                          </p>
                        </div>
                        <div
                          className="framer-1yf9khw [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Pick-up &amp; return
                          </p>
                        </div>
                      </div>
                      <div
                        className="framer-g34mf items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "1px",
                            "--border-color":
                              "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            borderRadius: "999px",
                            transform: "none",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-1fhab3f-container flex-none [opacity:1]">
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
                            <path d="M12 6v12M6 12h12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="framer-1q3jnc9 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div className="framer-1dm0fug-container flex-none">
                  <div
                    className="framer-zwvpI framer-FiAfW framer-oX6dW framer-3tJNm framer-1n1ko4n items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]"
                    style={
                      {
                        "--border-bottom-width": "1px",
                        "--border-color":
                          "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "0px",
                        width: "100%",
                      } as CSSProperties
                    }
                    data-border="true"
                  >
                    <div
                      className="framer-1izvn91 items-center flex-none flex-row flex-nowrap gap-[18px] content-center justify-start [opacity:1]"
                      tabIndex={0}
                    >
                      <div className="framer-maqplf items-start flex-[1_0_0] flex-col flex-nowrap gap-[2px] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1okcbnu [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-18ulsum"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Is insurance included in the price?
                          </p>
                        </div>
                        <div
                          className="framer-1yf9khw [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Insurance &amp; protection
                          </p>
                        </div>
                      </div>
                      <div
                        className="framer-g34mf items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "1px",
                            "--border-color":
                              "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            borderRadius: "999px",
                            transform: "none",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-1fhab3f-container flex-none [opacity:1]">
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
                            <path d="M12 6v12M6 12h12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="framer-1q3jnc9 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div className="framer-1dm0fug-container flex-none">
                  <div
                    className="framer-zwvpI framer-FiAfW framer-oX6dW framer-3tJNm framer-1n1ko4n items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]"
                    style={
                      {
                        "--border-bottom-width": "1px",
                        "--border-color":
                          "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "0px",
                        width: "100%",
                      } as CSSProperties
                    }
                    data-border="true"
                  >
                    <div
                      className="framer-1izvn91 items-center flex-none flex-row flex-nowrap gap-[18px] content-center justify-start [opacity:1]"
                      tabIndex={0}
                    >
                      <div className="framer-maqplf items-start flex-[1_0_0] flex-col flex-nowrap gap-[2px] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1okcbnu [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-18ulsum"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            What is an excess?
                          </p>
                        </div>
                        <div
                          className="framer-1yf9khw [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Insurance &amp; protection
                          </p>
                        </div>
                      </div>
                      <div
                        className="framer-g34mf items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "1px",
                            "--border-color":
                              "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            borderRadius: "999px",
                            transform: "none",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-1fhab3f-container flex-none [opacity:1]">
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
                            <path d="M12 6v12M6 12h12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="framer-1q3jnc9 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform opacity-[0.989136]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div className="framer-1dm0fug-container flex-none">
                  <div
                    className="framer-zwvpI framer-FiAfW framer-oX6dW framer-3tJNm framer-1n1ko4n items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]"
                    style={
                      {
                        "--border-bottom-width": "1px",
                        "--border-color":
                          "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "0px",
                        width: "100%",
                      } as CSSProperties
                    }
                    data-border="true"
                  >
                    <div
                      className="framer-1izvn91 items-center flex-none flex-row flex-nowrap gap-[18px] content-center justify-start [opacity:1]"
                      tabIndex={0}
                    >
                      <div className="framer-maqplf items-start flex-[1_0_0] flex-col flex-nowrap gap-[2px] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1okcbnu [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-18ulsum"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Does my credit card insurance cover me?
                          </p>
                        </div>
                        <div
                          className="framer-1yf9khw [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Insurance &amp; protection
                          </p>
                        </div>
                      </div>
                      <div
                        className="framer-g34mf items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "1px",
                            "--border-color":
                              "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            borderRadius: "999px",
                            transform: "none",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-1fhab3f-container flex-none [opacity:1]">
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
                            <path d="M12 6v12M6 12h12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="framer-1q3jnc9 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform opacity-[0.989136]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div className="framer-1dm0fug-container flex-none">
                  <div
                    className="framer-zwvpI framer-FiAfW framer-oX6dW framer-3tJNm framer-1n1ko4n items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]"
                    style={
                      {
                        "--border-bottom-width": "1px",
                        "--border-color":
                          "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "0px",
                        width: "100%",
                      } as CSSProperties
                    }
                    data-border="true"
                  >
                    <div
                      className="framer-1izvn91 items-center flex-none flex-row flex-nowrap gap-[18px] content-center justify-start [opacity:1]"
                      tabIndex={0}
                    >
                      <div className="framer-maqplf items-start flex-[1_0_0] flex-col flex-nowrap gap-[2px] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1okcbnu [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-18ulsum"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            How late can I cancel?
                          </p>
                        </div>
                        <div
                          className="framer-1yf9khw [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Changes &amp; cancellations
                          </p>
                        </div>
                      </div>
                      <div
                        className="framer-g34mf items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "1px",
                            "--border-color":
                              "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            borderRadius: "999px",
                            transform: "none",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-1fhab3f-container flex-none [opacity:1]">
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
                            <path d="M12 6v12M6 12h12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="framer-1q3jnc9 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform opacity-[0.989136]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div className="framer-1dm0fug-container flex-none">
                  <div
                    className="framer-zwvpI framer-FiAfW framer-oX6dW framer-3tJNm framer-1n1ko4n items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]"
                    style={
                      {
                        "--border-bottom-width": "1px",
                        "--border-color":
                          "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "0px",
                        width: "100%",
                      } as CSSProperties
                    }
                    data-border="true"
                  >
                    <div
                      className="framer-1izvn91 items-center flex-none flex-row flex-nowrap gap-[18px] content-center justify-start [opacity:1]"
                      tabIndex={0}
                    >
                      <div className="framer-maqplf items-start flex-[1_0_0] flex-col flex-nowrap gap-[2px] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1okcbnu [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-18ulsum"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            How do I change my dates or car?
                          </p>
                        </div>
                        <div
                          className="framer-1yf9khw [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Changes &amp; cancellations
                          </p>
                        </div>
                      </div>
                      <div
                        className="framer-g34mf items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "1px",
                            "--border-color":
                              "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            borderRadius: "999px",
                            transform: "none",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-1fhab3f-container flex-none [opacity:1]">
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
                            <path d="M12 6v12M6 12h12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="framer-1q3jnc9 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform opacity-[0.989136]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div className="framer-1dm0fug-container flex-none">
                  <div
                    className="framer-zwvpI framer-FiAfW framer-oX6dW framer-3tJNm framer-1n1ko4n items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]"
                    style={
                      {
                        "--border-bottom-width": "1px",
                        "--border-color":
                          "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "0px",
                        width: "100%",
                      } as CSSProperties
                    }
                    data-border="true"
                  >
                    <div
                      className="framer-1izvn91 items-center flex-none flex-row flex-nowrap gap-[18px] content-center justify-start [opacity:1]"
                      tabIndex={0}
                    >
                      <div className="framer-maqplf items-start flex-[1_0_0] flex-col flex-nowrap gap-[2px] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1okcbnu [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-18ulsum"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            What if my flight is delayed?
                          </p>
                        </div>
                        <div
                          className="framer-1yf9khw [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Changes &amp; cancellations
                          </p>
                        </div>
                      </div>
                      <div
                        className="framer-g34mf items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "1px",
                            "--border-color":
                              "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            borderRadius: "999px",
                            transform: "none",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-1fhab3f-container flex-none [opacity:1]">
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
                            <path d="M12 6v12M6 12h12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="framer-1q3jnc9 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div className="framer-1dm0fug-container flex-none">
                  <div
                    className="framer-zwvpI framer-FiAfW framer-oX6dW framer-3tJNm framer-1n1ko4n items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]"
                    style={
                      {
                        "--border-bottom-width": "1px",
                        "--border-color":
                          "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "0px",
                        width: "100%",
                      } as CSSProperties
                    }
                    data-border="true"
                  >
                    <div
                      className="framer-1izvn91 items-center flex-none flex-row flex-nowrap gap-[18px] content-center justify-start [opacity:1]"
                      tabIndex={0}
                    >
                      <div className="framer-maqplf items-start flex-[1_0_0] flex-col flex-nowrap gap-[2px] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1okcbnu [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-18ulsum"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            How old do I need to be?
                          </p>
                        </div>
                        <div
                          className="framer-1yf9khw [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Drivers &amp; licences
                          </p>
                        </div>
                      </div>
                      <div
                        className="framer-g34mf items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "1px",
                            "--border-color":
                              "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            borderRadius: "999px",
                            transform: "none",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-1fhab3f-container flex-none [opacity:1]">
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
                            <path d="M12 6v12M6 12h12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="framer-1q3jnc9 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div className="framer-1dm0fug-container flex-none">
                  <div
                    className="framer-zwvpI framer-FiAfW framer-oX6dW framer-3tJNm framer-1n1ko4n items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]"
                    style={
                      {
                        "--border-bottom-width": "1px",
                        "--border-color":
                          "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "0px",
                        width: "100%",
                      } as CSSProperties
                    }
                    data-border="true"
                  >
                    <div
                      className="framer-1izvn91 items-center flex-none flex-row flex-nowrap gap-[18px] content-center justify-start [opacity:1]"
                      tabIndex={0}
                    >
                      <div className="framer-maqplf items-start flex-[1_0_0] flex-col flex-nowrap gap-[2px] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1okcbnu [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-18ulsum"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Can I add a second driver?
                          </p>
                        </div>
                        <div
                          className="framer-1yf9khw [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Drivers &amp; licences
                          </p>
                        </div>
                      </div>
                      <div
                        className="framer-g34mf items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "1px",
                            "--border-color":
                              "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            borderRadius: "999px",
                            transform: "none",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-1fhab3f-container flex-none [opacity:1]">
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
                            <path d="M12 6v12M6 12h12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="framer-1q3jnc9 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div className="framer-1dm0fug-container flex-none">
                  <div
                    className="framer-zwvpI framer-FiAfW framer-oX6dW framer-3tJNm framer-1n1ko4n items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]"
                    style={
                      {
                        "--border-bottom-width": "1px",
                        "--border-color":
                          "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "0px",
                        width: "100%",
                      } as CSSProperties
                    }
                    data-border="true"
                  >
                    <div
                      className="framer-1izvn91 items-center flex-none flex-row flex-nowrap gap-[18px] content-center justify-start [opacity:1]"
                      tabIndex={0}
                    >
                      <div className="framer-maqplf items-start flex-[1_0_0] flex-col flex-nowrap gap-[2px] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1okcbnu [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-18ulsum"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            What does “With Driver” include?
                          </p>
                        </div>
                        <div
                          className="framer-1yf9khw [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Drivers &amp; licences
                          </p>
                        </div>
                      </div>
                      <div
                        className="framer-g34mf items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "1px",
                            "--border-color":
                              "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            borderRadius: "999px",
                            transform: "none",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-1fhab3f-container flex-none [opacity:1]">
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
                            <path d="M12 6v12M6 12h12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="framer-1q3jnc9 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div className="framer-1dm0fug-container flex-none">
                  <div
                    className="framer-zwvpI framer-FiAfW framer-oX6dW framer-3tJNm framer-1n1ko4n items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [opacity:1]"
                    style={
                      {
                        "--border-bottom-width": "1px",
                        "--border-color":
                          "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                        "--border-left-width": "0px",
                        "--border-right-width": "0px",
                        "--border-style": "solid",
                        "--border-top-width": "0px",
                        width: "100%",
                      } as CSSProperties
                    }
                    data-border="true"
                  >
                    <div
                      className="framer-1izvn91 items-center flex-none flex-row flex-nowrap gap-[18px] content-center justify-start [opacity:1]"
                      tabIndex={0}
                    >
                      <div className="framer-maqplf items-start flex-[1_0_0] flex-col flex-nowrap gap-[2px] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1okcbnu [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-18ulsum"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Do I need an International Driving Permit?
                          </p>
                        </div>
                        <div
                          className="framer-1yf9khw [word-break:break-word] [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3)",
                              transform: "none",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-282f80b6-ca77-4856-96f5-6ffdda9513a3))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Drivers &amp; licences
                          </p>
                        </div>
                      </div>
                      <div
                        className="framer-g34mf items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "1px",
                            "--border-color":
                              "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            borderRadius: "999px",
                            transform: "none",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-1fhab3f-container flex-none [opacity:1]">
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
                            <path d="M12 6v12M6 12h12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionContact() {
  return (
    <section
      className="framer-1wgi76j items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0]"
      id="contact"
    >
      <div className="framer-r2nq8s items-start flex-none flex-col flex-nowrap gap-[28px] max-w-[1360px] [place-content:flex-start]">
        <div className="framer-61c0dq items-start [place-content:flex-start]">
          <div className="framer-3kcnaf items-start gap-[8px] [place-content:flex-start]">
            <div
              className="framer-1hkk8wd [word-break:break-word]"
              style={{ transform: "none" }}
              data-framer-component-type="RichTextContainer"
            >
              <h2
                className="framer-text framer-styles-preset-1hwdddd"
                style={{ "--framer-text-alignment": "start" } as CSSProperties}
                dir="auto"
              >
                <span
                  className="[opacity:1]"
                  style={{ display: "inline-block", transform: "none" }}
                >
                  Still
                </span>{" "}
                <span
                  className="[opacity:1]"
                  style={{ display: "inline-block", transform: "none" }}
                >
                  need
                </span>{" "}
                <span
                  className="[opacity:1]"
                  style={{ display: "inline-block", transform: "none" }}
                >
                  a
                </span>{" "}
                <span
                  className="[opacity:1]"
                  style={{ display: "inline-block", transform: "none" }}
                >
                  hand?
                </span>
              </h2>
            </div>
            <div
              className="framer-nu688s [word-break:break-word] will-change-transform opacity-[0.970564]"
              style={{ transform: "none" }}
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="framer-text framer-styles-preset-nsw7a4"
                style={
                  {
                    "--framer-text-alignment": "start",
                    "--framer-text-color":
                      "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                  } as CSSProperties
                }
                dir="auto"
              >
                We answer every message, usually within five minutes.
              </p>
            </div>
            <div className="framer-7hxia4 items-start flex-none flex-col flex-nowrap gap-[16px] [place-content:flex-start]">
              <div
                className="framer-s24r7i items-start flex-none flex-row flex-nowrap gap-[12px] [place-content:flex-start] will-change-transform [opacity:1]"
                style={{ transform: "none" }}
              >
                <div className="framer-1wj1z7j items-center flex-none flex-row flex-nowrap place-content-center [gap:0]">
                  <div className="framer-1dna6t6-container flex-none">
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
                      <path d="M5 4.5h3.5l1.8 4.3-2.3 1.4a11 11 0 0 0 5.8 5.8l1.4-2.3 4.3 1.8V19a1.5 1.5 0 0 1-1.6 1.5C10.3 20 4 13.7 3.5 6.1A1.5 1.5 0 0 1 5 4.5Z" />
                    </svg>
                  </div>
                </div>
                <div className="framer-6nue7t items-start flex-[1_0_0] flex-col flex-nowrap gap-[2px] [place-content:flex-start]">
                  <div className="ssr-variant">
                    <div
                      className="framer-ye8e1o [word-break:break-word]"
                      style={{ transform: "none" }}
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-bvjmlc"
                        style={
                          {
                            "--framer-text-color":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          } as CSSProperties
                        }
                        dir="auto"
                        data-site-import-responsive="395"
                      >
                        Roadside &amp; urgent
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant">
                    <div
                      className="framer-1d1amyn [word-break:break-word]"
                      style={{ transform: "none" }}
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
                        data-site-import-responsive="397"
                      >
                        +44 20 3000 0100 · 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="framer-h9ckzv items-start flex-none flex-row flex-nowrap gap-[12px] [place-content:flex-start] will-change-transform [opacity:1]"
                style={{ transform: "none" }}
              >
                <div className="framer-xpmvs4 items-center flex-none flex-row flex-nowrap place-content-center [gap:0]">
                  <div className="framer-14v7t8f-container flex-none">
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
                      <path d="M4.5 18.5V6A1.5 1.5 0 0 1 6 4.5h12A1.5 1.5 0 0 1 19.5 6v8.5A1.5 1.5 0 0 1 18 16H8l-3.5 2.5Z" />
                    </svg>
                  </div>
                </div>
                <div className="framer-47eqxt items-start flex-[1_0_0] flex-col flex-nowrap gap-[2px] [place-content:flex-start]">
                  <div className="ssr-variant">
                    <div
                      className="framer-v7s1zy [word-break:break-word]"
                      style={{ transform: "none" }}
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-bvjmlc"
                        style={
                          {
                            "--framer-text-color":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          } as CSSProperties
                        }
                        dir="auto"
                        data-site-import-responsive="405"
                      >
                        Bookings &amp; changes
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant">
                    <div
                      className="framer-135dqb7 [word-break:break-word]"
                      style={{ transform: "none" }}
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
                        data-site-import-responsive="407"
                      >
                        Use the form. Median reply: 4 minutes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="framer-1pecbdr items-start flex-none flex-row flex-nowrap gap-[12px] [place-content:flex-start] will-change-transform [opacity:1]"
                style={{ transform: "none" }}
              >
                <div className="framer-1p6p5h7 items-center flex-none flex-row flex-nowrap place-content-center [gap:0]">
                  <div className="framer-1eh34h4-container flex-none">
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
                      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  </div>
                </div>
                <div className="framer-9gwyld items-start flex-[1_0_0] flex-col flex-nowrap gap-[2px] [place-content:flex-start]">
                  <div className="ssr-variant">
                    <div
                      className="framer-m7vc5m [word-break:break-word]"
                      style={{ transform: "none" }}
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-bvjmlc"
                        style={
                          {
                            "--framer-text-color":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          } as CSSProperties
                        }
                        dir="auto"
                        data-site-import-responsive="416"
                      >
                        Email
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant">
                    <div
                      className="framer-16313an [word-break:break-word]"
                      style={{ transform: "none" }}
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
                        data-site-import-responsive="418"
                      >
                        support@horizone.example
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="framer-tga4ua items-start flex-none flex-row flex-nowrap gap-[12px] [place-content:flex-start] will-change-transform [opacity:1]"
                style={{ transform: "none" }}
              >
                <div className="framer-pt8nyf items-center flex-none flex-row flex-nowrap place-content-center [gap:0]">
                  <div className="framer-zt7t8k-container flex-none">
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
                      <circle cx="12" cy="12" r="8.6" />
                      <path d="M3.4 12h17.2M12 3.4c2.3 2.4 3.4 5.4 3.4 8.6S14.3 18.2 12 20.6C9.7 18.2 8.6 15.2 8.6 12S9.7 5.8 12 3.4Z" />
                    </svg>
                  </div>
                </div>
                <div className="framer-lssfa1 items-start flex-[1_0_0] flex-col flex-nowrap gap-[2px] [place-content:flex-start]">
                  <div className="ssr-variant">
                    <div
                      className="framer-tpq2qo [word-break:break-word]"
                      style={{ transform: "none" }}
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-bvjmlc"
                        style={
                          {
                            "--framer-text-color":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          } as CSSProperties
                        }
                        dir="auto"
                        data-site-import-responsive="427"
                      >
                        Languages
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant">
                    <div
                      className="framer-lc4e9r [word-break:break-word]"
                      style={{ transform: "none" }}
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
                        data-site-import-responsive="429"
                      >
                        English, German, Portuguese, Spanish, French, Korean,
                        Japanese, Indonesian, Arabic, Afrikaans, Italian
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form
            className="framer-qq03i7 items-start gap-[24px] [place-content:flex-start] will-change-transform [opacity:1]"
            style={{ transform: "none" }}
            data-border="true"
            method="post"
          >
            <div className="framer-j0j70z flex-none gap-[16px] justify-center">
              <div className="framer-c5crec items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [place-self:start]">
                <div className="ssr-variant">
                  <div
                    className="framer-1oj77wp"
                    style={{ transform: "none" }}
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1bwd7xw"
                      style={
                        {
                          "--framer-text-color":
                            "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
                        } as CSSProperties
                      }
                      dir="auto"
                      data-site-import-responsive="434"
                    >
                      Your name
                    </p>
                  </div>
                </div>
                <div className="framer-form-text-input framer-form-input-wrapper framer-o4cn8u framer-form-text-input-type">
                  <input
                    className="framer-form-input framer-form-input-empty"
                    type="text"
                    required
                    name="Name"
                    defaultValue=""
                    aria-label="Name"
                  />
                </div>
              </div>
              <div className="framer-10z5e01 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [place-self:start]">
                <div className="ssr-variant">
                  <div
                    className="framer-1ub1s0y"
                    style={{ transform: "none" }}
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1bwd7xw"
                      style={
                        {
                          "--framer-text-color":
                            "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
                        } as CSSProperties
                      }
                      dir="auto"
                      data-site-import-responsive="439"
                    >
                      Email
                    </p>
                  </div>
                </div>
                <div className="framer-form-text-input framer-form-input-wrapper framer-194l46m">
                  <input
                    className="framer-form-input framer-form-input-empty"
                    type="email"
                    required
                    name="Email"
                    defaultValue=""
                    aria-label="Email"
                  />
                </div>
              </div>
              <div className="framer-12ust8t items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [place-self:start]">
                <div className="ssr-variant">
                  <div
                    className="framer-d3lqkn"
                    style={{ transform: "none" }}
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1bwd7xw"
                      style={
                        {
                          "--framer-text-color":
                            "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
                        } as CSSProperties
                      }
                      dir="auto"
                      data-site-import-responsive="444"
                    >
                      Topic
                    </p>
                  </div>
                </div>
                <div className="framer-form-input-wrapper framer-form-select-wrapper framer-slo093 flex-none">
                  <div>
                    <span
                      role="combobox"
                      aria-autocomplete="list"
                      aria-expanded="false"
                      aria-owns="bb-customSelect-WEb3y-panel"
                      aria-activedescendant="bb-customSelect-WEb3y-selectedOption"
                      tabIndex={0}
                    >
                      <span>Choose a topic…</span>
                    </span>
                    <select
                      className="framer-form-input"
                      name="Topic"
                      required
                      aria-label="Topic"
                      tabIndex={-1}
                      defaultValue=""
                    >
                      <option value="">Choose a topic…</option>
                      <option value={"Booking & payment"}>
                        Booking &amp; payment
                      </option>
                      <option value={"Pick-up & return"}>
                        Pick-up &amp; return
                      </option>
                      <option value={"Insurance & protection"}>
                        Insurance &amp; protection
                      </option>
                      <option value={"Changes & cancellations"}>
                        Changes &amp; cancellations
                      </option>
                      <option value={"Drivers & licences"}>
                        Drivers &amp; licences
                      </option>
                      <option value="Something else">Something else</option>
                    </select>
                    <div id="bb-customSelect-WEb3y-panel" role="listbox">
                      <div
                        role="option"
                        id="bb-customSelect-WEb3y-selectedOption"
                      >
                        Choose a topic…
                      </div>
                      <div role="option">Booking &amp; payment</div>
                      <div role="option">Pick-up &amp; return</div>
                      <div role="option">Insurance &amp; protection</div>
                      <div role="option">Changes &amp; cancellations</div>
                      <div role="option">Drivers &amp; licences</div>
                      <div role="option">Something else</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="framer-cnst8k items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [place-self:start]">
                <div className="ssr-variant">
                  <div
                    className="framer-fbypry"
                    style={{ transform: "none" }}
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1bwd7xw"
                      style={
                        {
                          "--framer-text-color":
                            "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
                        } as CSSProperties
                      }
                      dir="auto"
                      data-site-import-responsive="450"
                    >
                      Booking reference (optional)
                    </p>
                  </div>
                </div>
                <div className="framer-form-text-input framer-form-input-wrapper framer-vdd296 framer-form-text-input-type">
                  <input
                    className="framer-form-input framer-form-input-empty"
                    type="text"
                    name="Booking reference"
                    placeholder="HZ-…"
                    defaultValue=""
                    aria-label="Booking reference"
                  />
                </div>
              </div>
              <div className="framer-19n9ok5 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [place-self:start]">
                <div className="ssr-variant">
                  <div
                    className="framer-1p7myaw"
                    style={{ transform: "none" }}
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1bwd7xw"
                      style={
                        {
                          "--framer-text-color":
                            "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
                        } as CSSProperties
                      }
                      dir="auto"
                      data-site-import-responsive="455"
                    >
                      Message
                    </p>
                  </div>
                </div>
                <div className="framer-form-text-input framer-form-input-wrapper framer-m7mv1w framer-form-textarea-input-type flex-none">
                  <textarea
                    className="framer-form-input [max-height:inherit] [min-height:inherit] [resize:var(--framer-textarea-resize)]"
                    required
                    name="Message"
                    placeholder="Tell us what happened and what you’d like us to do."
                    maxLength={1000}
                    aria-label="Message"
                  />
                </div>
              </div>
            </div>
            <input
              type="hidden"
              name="Form"
              defaultValue="Help centre message"
            />
            <div className="ssr-variant">
              <div className="framer-mlr8vv-container flex-none">
                <button
                  className="framer-Nx5Oc framer-FiAfW framer-13a32u7 items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                  style={{
                    backgroundColor:
                      "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                    height: "100%",
                    width: "100%",
                    borderRadius: "6px",
                  }}
                  type="submit"
                  data-reset="button"
                >
                  <div
                    className="framer-h0ub8i [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                        transform: "none",
                      } as CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-18ulsum"
                      style={
                        {
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Send message
                    </p>
                  </div>
                </button>
              </div>
            </div>
            <input type="hidden" name="Site" defaultValue="Horizone" />
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
        </div>
      </div>
    </section>
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
                data-site-import-responsive="485"
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
                data-site-import-responsive="488"
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
                  data-site-import-responsive="496"
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
                  data-site-import-responsive="505"
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
                  data-site-import-responsive="510"
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
                  data-site-import-responsive="530"
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
                  data-site-import-responsive="546"
                >
                  Support
                </p>
              </div>
            </div>
            <div className="framer-1f0jrx3-container" style={{ opacity: "1" }}>
              <a
                className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
                style={{ opacity: "1" }}
                data-framer-page-link-current="true"
                href="#"
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
                href="#contact"
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
                href="#contact"
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
                href="/legal#terms"
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
                  data-site-import-responsive="566"
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
                  data-site-import-responsive="571"
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
                data-site-import-responsive="586"
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
            data-site-import-responsive="614"
          >
            © 2026 Horizone Car Rental
          </p>
        </div>
        <nav className="framer-wwbz35" style={{ opacity: "1" }}>
          <div className="framer-jg223-container" style={{ opacity: "1" }}>
            <a
              className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
              style={{ opacity: "1" }}
              href="/legal#privacy"
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
              href="/legal#terms"
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
              href="/legal#cookies"
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
              href="/legal#cookies"
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
