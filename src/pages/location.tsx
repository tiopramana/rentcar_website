import type { CSSProperties } from "react";
import { useEffect } from "react";
import { useSyncExternalStore } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/location.css?raw";
import { SiteImportMobileNav } from "../components/site-import-mobile.nav";
import { Navbar } from "../components/layout/Navbar";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations · Horizone car rental in 14 cities" },
      {
        name: "description",
        content:
          "Explore Horizone car rental pick-up points across 14 cities, from Bali and Tokyo to Munich and Los Angeles.",
      },
      {
        property: "og:title",
        content: "Locations · Horizone car rental in 14 cities",
      },
      {
        property: "og:description",
        content:
          "Explore Horizone car rental pick-up points across 14 cities, from Bali and Tokyo to Munich and Los Angeles.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  staticData: {
    importedDocument: {
      html: { dir: "ltr", lang: "en-US" },
      body: { "data-site-import-responsive-incomplete": "class-range-state" },
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
  useImportedLayout();
  return (
    <>
      <style>{capturedCSS}</style>
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
                  <ImportedHeaderDesktop />
                </div>
              </div>
            </div>
          </div>
          <ImportedDivHeader />
          <div
            className="framer-Sc7ZS framer-qO70Z framer-71sfr framer-32iNJ framer-1f8jz80 items-center flex-col flex-nowrap content-center justify-start [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [min-height:100vh]"
            style={{ width: "auto", display: "contents" }}
          >
            <div
              className={
                isMobile
                  ? "ssr-variant hidden-8d4p7v hidden-1f8jz80"
                  : "ssr-variant"
              }
            >
              <div className="framer-94xqq5-container">
                <ImportedSectionSearch />
              </div>
            </div>
            <ImportedSectionCities />
            <ImportedSectionOneWayRoutes />
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
              <ImportedFooterDesktop />
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

function ImportedHeaderDesktop() {
  return <Navbar />;
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
              className="framer-rQnLE framer-MCyNe framer-3tJNm framer-eHiTe framer-ccphy framer-iJjgk framer-GvPaN framer-AAOB7 framer-BdrqZ framer-KgJtC framer-EhiDw framer-ANzsm framer-71sfr framer-7tu3jo framer-v-x08t8a"
              style={{ width: "100%", opacity: "1" }}
              data-site-import-scroll-header={
                '{"desktop":{"added":["framer-v-i7duu0"],"removed":["framer-v-7tu3jo"],"threshold":648},"mobile":{"added":["framer-v-1jhoykp"],"removed":["framer-v-x08t8a"],"threshold":633}}'
              }
            >
              <div
                className="framer-xub7c0"
                style={
                  {
                    backdropFilter: "blur(0px)",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderRadius: "8px",
                    willChange: "auto",
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                  } as CSSProperties
                }
              >
                <div
                  className="framer-16wo98v"
                  style={
                    {
                      willChange: "transform",
                      opacity: "1",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    } as CSSProperties
                  }
                >
                  <a
                    className="framer-9v0yg3 framer-trb62s"
                    style={
                      {
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                      } as CSSProperties
                    }
                    href="/"
                  >
                    <div
                      className="framer-1xqfc3z"
                      style={
                        {
                          borderRadius: "6px",
                          transform: "none",
                          transformOrigin: "50% 50% 0px",
                        } as CSSProperties
                      }
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
                        />
                      </div>
                    </div>
                    <div
                      className="framer-e4k9vn"
                      style={
                        {
                          "--extracted-a0htzi":
                            "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                          transform: "none",
                          willChange: "auto",
                          transformOrigin: "50% 50% 0px",
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
                            "--framer-text-alignment": "start",
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
                  className="framer-l53zpz"
                  style={
                    {
                      willChange: "transform",
                      opacity: "1",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    } as CSSProperties
                  }
                >
                  <div
                    className="framer-o8ok12"
                    style={
                      {
                        "--border-bottom-width": "1px",
                        "--border-color":
                          "var(--token-483c565b-fb9d-461c-8f3c-18302e2d0b73)",
                        "--border-left-width": "1px",
                        "--border-right-width": "1px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                        backdropFilter: "blur(14px)",
                        backgroundColor:
                          "var(--token-5d9b0fc5-b296-4760-8c5b-1739145ad88b)",
                        borderRadius: "999px",
                        willChange: "auto",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                      } as CSSProperties
                    }
                    data-border="true"
                    id=":R1p:-:Rjm6lp:-o8ok12"
                    tabIndex={0}
                  >
                    <div
                      className="framer-1laj2cm-container"
                      style={
                        {
                          transform: "none",
                          transformOrigin: "50% 50% 0px",
                        } as CSSProperties
                      }
                    >
                      <svg
                        style={
                          {
                            height: "100%",
                            width: "100%",
                            display: "block",
                            position: "relative",
                            color:
                              "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
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
                    className="framer-eqtme5"
                    style={
                      {
                        "--border-bottom-width": "1px",
                        "--border-color":
                          "var(--token-483c565b-fb9d-461c-8f3c-18302e2d0b73)",
                        "--border-left-width": "1px",
                        "--border-right-width": "1px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                        backdropFilter: "blur(14px)",
                        backgroundColor:
                          "var(--token-5d9b0fc5-b296-4760-8c5b-1739145ad88b)",
                        borderRadius: "999px",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                      } as CSSProperties
                    }
                    data-border="true"
                    tabIndex={0}
                  >
                    <div
                      className="framer-4ijlad-container"
                      style={
                        {
                          transform: "none",
                          transformOrigin: "50% 50% 0px",
                        } as CSSProperties
                      }
                    >
                      <svg
                        style={
                          {
                            height: "100%",
                            width: "100%",
                            display: "block",
                            position: "relative",
                            color:
                              "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
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

function ImportedSectionSearch() {
  return (
    <section
      className="framer-xlPD9 framer-iJjgk framer-u6uwY framer-bAeq6 framer-2n7hjf"
      style={{ height: "100%", width: "100%", opacity: "1" }}
      data-site-import-responsive="53"
    >
      <div
        className="framer-1xu0yxk"
        style={{
          backgroundColor: "var(--token-01b85732-ed82-44ab-a877-1134ad52b5dd)",
          borderRadius: "12px",
          opacity: "1",
        }}
      >
        <div
          className="framer-1fcadc8"
          style={{ willChange: "transform", opacity: "1", transform: "none" }}
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
              width="2200"
              height="1373"
              sizes="calc(100vw - 17.28px)"
              srcSet="/site-assets/141ba362706cc671.avif 512w, /site-assets/24c85ea3ada64862.avif 1024w, /site-assets/d20351b5f7549e95.avif 2048w, /site-assets/f8b2061b3a7ec63b.avif 2200w"
              src="/site-assets/f8b2061b3a7ec63b.avif"
              alt=""
            />
          </div>
        </div>
        <div
          className="framer-1mml552"
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.15) 30%, rgba(0, 0, 0, 0.25) 60%, rgba(0, 0, 0, 0.62) 100%)",
            opacity: "1",
          }}
        />
      </div>
      <div
        className="framer-1nr9quv"
        style={
          { "--1c7qvq9": "0px 32px 0px 32px", opacity: "1" } as CSSProperties
        }
      >
        <div
          className="framer-1dohcrm"
          style={{ willChange: "transform", opacity: "1", transform: "none" }}
        >
          <a
            className="framer-jntdgi framer-1jpi062"
            style={{ opacity: "1" }}
            href="/"
          >
            <div
              className="framer-gaemvh"
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
                    "--framer-text-alignment": "start",
                    "--framer-text-color":
                      "var(--extracted-r6o4lv, var(--token-7e7f526a-85ea-441f-9429-765a41c2534c))",
                  } as CSSProperties
                }
                dir="auto"
              >
                Home
              </p>
            </div>
          </a>
          <div className="framer-gfku4l-container" style={{ opacity: "1" }}>
            <svg
              style={
                {
                  height: "100%",
                  width: "100%",
                  display: "block",
                  position: "relative",
                  color: "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
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
              <path d="M9.5 6.5 15 12l-5.5 5.5" />
            </svg>
          </div>
          <div
            className="framer-p96nkx"
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
                  "--framer-text-alignment": "start",
                  "--framer-text-color":
                    "var(--extracted-r6o4lv, var(--token-7e7f526a-85ea-441f-9429-765a41c2534c))",
                } as CSSProperties
              }
              dir="auto"
            >
              Locations
            </p>
          </div>
        </div>
        <div
          className="framer-11f7kie"
          style={
            {
              "--extracted-gdpscs":
                "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
              transform: "none",
              opacity: "1",
            } as CSSProperties
          }
          data-framer-component-type="RichTextContainer"
        >
          <h1
            className="framer-text framer-styles-preset-1qika4w"
            style={
              {
                "--framer-text-alignment": "start",
                "--framer-text-color":
                  "var(--extracted-gdpscs, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
              } as CSSProperties
            }
            dir="auto"
          >
            <span style={{ display: "inline-block", opacity: "1" }}>Car</span>{" "}
            <span style={{ display: "inline-block", opacity: "1" }}>
              rental
            </span>{" "}
            <span style={{ display: "inline-block", opacity: "1" }}>in</span>{" "}
            <span style={{ display: "inline-block", opacity: "1" }}>14</span>{" "}
            <span style={{ display: "inline-block", opacity: "1" }}>
              cities
            </span>
          </h1>
        </div>
        <div
          className="framer-eps5vo"
          style={{ willChange: "transform", opacity: "1", transform: "none" }}
        >
          <div
            className="framer-ee5ezq"
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
              className="framer-text framer-styles-preset-16hus5p"
              style={
                {
                  "--framer-text-alignment": "start",
                  "--framer-text-color":
                    "var(--extracted-r6o4lv, var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f))",
                } as CSSProperties
              }
              dir="auto"
            >
              28 pick-up points at airports, stations and city centres, each
              with the same prices, protection and 24/7 support.
            </p>
          </div>
        </div>
        <div className="framer-1qudd14" style={{ opacity: "1" }} />
        <div
          className="framer-1mdkg22"
          style={{
            backgroundColor:
              "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
            willChange: "transform",
            borderRadius: "6px",
            boxShadow: "rgba(0, 0, 0, 0.5) 0px 18px 40px -26px",
            opacity: "1",
            transform: "none",
          }}
        >
          <div className="framer-brcnld-container" style={{ opacity: "1" }}>
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
              <circle cx="11" cy="11" r="6.6" />
              <path d="M16 16l4.4 4.4" />
            </svg>
          </div>
          <div
            className="framer-form-text-input framer-form-input-wrapper framer-v4msxu framer-form-text-input-type"
            style={
              {
                "--framer-input-background": "rgba(0, 0, 0, 0)",
                "--framer-input-border-radius-bottom-left": "10px",
                "--framer-input-border-radius-bottom-right": "10px",
                "--framer-input-border-radius-top-left": "10px",
                "--framer-input-border-radius-top-right": "10px",
                "--framer-input-font-color":
                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                "--framer-input-icon-mask-image": "none",
                "--framer-input-placeholder-color": "rgb(138, 138, 138)",
                opacity: "1",
              } as CSSProperties
            }
          >
            <input
              className="framer-form-input framer-form-input-empty"
              type="text"
              name="location-search"
              placeholder="Search a city or country"
              defaultValue=""
              aria-label="Location search"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionCities() {
  return (
    <section className="framer-1qc1hx8 items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0]">
      <div className="framer-1t4294t items-start flex-none flex-col flex-nowrap gap-[28px] max-w-[1360px] [place-content:flex-start]">
        <div className="framer-13hav4l [@media(max-width:680.98px)]:gap-[16px] [@media(min-width:681px)_and_(max-width:1199.98px)]:gap-[16px] will-change-transform [opacity:1] transform-none">
          <div
            className="framer-1c5plw5 items-start flex-none flex-row flex-nowrap gap-[4px] [place-content:flex-start]"
            data-border="true"
          >
            <div className="ssr-variant">
              <div className="framer-g97io4-container flex-none">
                <div
                  className="framer-rRv9Y framer-b6OkM framer-1zOQh framer-t0fgtv items-center flex-row flex-nowrap gap-[3px] content-center justify-start [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "2px",
                      "--border-color":
                        "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
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
                          "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                      } as CSSProperties
                    }
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-p3aiuu"
                      style={
                        {
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      All
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
                    >
                      14
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div className="framer-1acfhj3-container flex-none">
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
                      Asia-Pacific
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
                    >
                      5
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div className="framer-6p31zp-container flex-none">
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
                      Europe
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
                    >
                      5
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div className="framer-peuvjs-container flex-none">
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
                      Americas
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
                    >
                      2
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div className="framer-5c43h4-container flex-none">
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
                      Middle East &amp; Africa
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
                    >
                      2
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="framer-e96ymd transform-none"
            data-framer-component-type="RichTextContainer"
          >
            <p
              className="framer-text"
              style={
                {
                  "--framer-font-family":
                    '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                  "--framer-font-variation-axes": '"opsz" 14, "wght" 400',
                  "--framer-line-height": "1.55em",
                  "--framer-text-color":
                    "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                } as CSSProperties
              }
              dir="auto"
            >
              14 cities · 28 pick-up points
            </p>
          </div>
        </div>
        <div className="framer-2zo02s flex-none gap-[16px] justify-center">
          <div className="framer-1ykxn7m items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [place-self:start] will-change-transform [opacity:1] transform-none">
            <div className="ssr-variant">
              <div className="framer-1c0duo9-container flex-none">
                <div
                  className="framer-MZ6TM framer-QxRxm framer-BdrqZ framer-5n135 framer-iJjgk framer-oX6dW framer-3tJNm framer-KgJtC framer-81w65 framer-ANzsm framer-nr68vj items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "1px",
                      "--border-color":
                        "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                      "--border-left-width": "1px",
                      "--border-right-width": "1px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      backgroundColor:
                        "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    } as CSSProperties
                  }
                  data-border="true"
                >
                  <div className="framer-3m6lum aspect-[1.7778] flex-none [opacity:1]">
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
                        width="1600"
                        height="1067"
                        sizes="max((min(100vw, 1360px) - 96px) / 3, 50px)"
                        srcSet="/site-assets/9568b6a54e4bc0f5.avif 512w, /site-assets/b8762f2c0458f508.avif 1024w, /site-assets/2e1f2b2d7eb6a296.avif 1600w"
                        src="/site-assets/2e1f2b2d7eb6a296.avif"
                        alt=""
                      />
                    </div>
                    <div
                      className="framer-qu9z3o items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [box-shadow:rgba(0,_0,_0,_0.07)_0px_1px_4px_0px] [opacity:1]"
                      style={{
                        backgroundColor:
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                        borderRadius: "999px",
                      }}
                    >
                      <div
                        className="framer-h629at transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1coj6ik"
                          style={
                            {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Asia-Pacific
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-iwtx54 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                    <div
                      className="framer-ed7urm transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1najaxl"
                        style={
                          {
                            "--framer-text-alignment": "start",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Indonesia
                      </p>
                    </div>
                    <div
                      className="framer-uzy9nf transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1dyx20v"
                        style={
                          {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Bali
                      </p>
                    </div>
                    <div
                      className="framer-2as0xw transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                        Rice terraces, temple roads and beach towns, best
                        explored at your own pace.
                      </p>
                    </div>
                    <div className="framer-fy4d71 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-14jpg24 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "0px",
                            "--border-color":
                              "var(--token-bb3a454b-72cf-4b37-ad93-b3ae47afa210)",
                            "--border-left-width": "0px",
                            "--border-right-width": "0px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-ttdg3x items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]">
                          <div className="framer-1a6gbgx-container flex-none [opacity:1]">
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
                              <path d="M21 15.5v-1.8l-7.5-4.7V4.2a1.5 1.5 0 0 0-3 0V9L3 13.7v1.8l7.5-2.2v4.9l-2 1.5v1.3l3.5-1 3.5 1v-1.3l-2-1.5v-4.9Z" />
                            </svg>
                          </div>
                          <div
                            className="framer-1uzkp92 transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Ngurah Rai International Airport (DPS)
                            </p>
                          </div>
                          <div
                            className="framer-1tnh2pn transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              24 h
                            </p>
                          </div>
                        </div>
                        <div className="framer-ttdg3x items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]">
                          <div className="framer-1a6gbgx-container flex-none [opacity:1]">
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
                              <rect
                                x="4"
                                y="3.5"
                                width="11"
                                height="17"
                                rx="1.5"
                              />
                              <path d="M15 9.5h3.5A1.5 1.5 0 0 1 20 11v9.5M8 7.5h1M11 7.5h1M8 11h1M11 11h1M8 14.5h1M11 14.5h1M3 20.5h18" />
                            </svg>
                          </div>
                          <div
                            className="framer-1uzkp92 transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Seminyak
                            </p>
                          </div>
                          <div
                            className="framer-1tnh2pn transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              07:00–21:00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-zq5rqu flex-[1_0_0] [opacity:1]" />
                  <div className="framer-1quswo8 items-center flex-none flex-row flex-wrap content-center justify-between [opacity:1]">
                    <div className="framer-gg2nhd items-center flex-none flex-row flex-nowrap gap-[4px] content-center justify-start [opacity:1]">
                      <div
                        className="framer-qe1krx transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                            "--extracted-r6o4lv":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text"
                          style={
                            {
                              "--framer-font-family":
                                '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                              "--framer-font-size": "13px",
                              "--framer-font-variation-axes":
                                'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                              "--framer-line-height": "1.55em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          8
                        </p>
                      </div>
                      <div
                        className="framer-1ab6ukw transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          cars · from
                        </p>
                      </div>
                      <div className="framer-1xkqm2y items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1ulofxt transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text"
                            style={
                              {
                                "--framer-font-family":
                                  '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                "--framer-font-size": "13px",
                                "--framer-font-variation-axes":
                                  'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                                "--framer-line-height": "1.55em",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            $42
                          </p>
                        </div>
                        <div
                          className="framer-lb4xuh transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                            /day
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1lgpyba items-start flex-none flex-row flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-1m69ijx items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                        id=":R1p:-HarBXj85j-tKbsCRU4U-kgITKUz5t-:R3me3alalp:-1m69ijx"
                        tabIndex={0}
                      >
                        <div className="framer-vx1ox8-container flex-none [opacity:1]">
                          <a
                            className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-8ina4u framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                            style={
                              {
                                "--border-bottom-width": "1px",
                                "--border-color":
                                  "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                                "--border-left-width": "1px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "1px",
                                backgroundColor:
                                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                                borderRadius: "6px",
                              } as CSSProperties
                            }
                            data-border="true"
                            role="button"
                            tabIndex={0}
                          >
                            <div
                              className="framer-bisomo transform-none [opacity:1]"
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-e793i5"
                                style={
                                  {
                                    "--framer-text-alignment": "center",
                                  } as CSSProperties
                                }
                                dir="auto"
                              >
                                Details
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="framer-17232se-container flex-none [opacity:1]">
                        <a
                          className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-1e3iabj framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                          style={
                            {
                              "--border-bottom-width": "0px",
                              "--border-color":
                                "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                              "--border-left-width": "0px",
                              "--border-right-width": "0px",
                              "--border-style": "solid",
                              "--border-top-width": "0px",
                              backgroundColor:
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              borderRadius: "6px",
                            } as CSSProperties
                          }
                          data-border="true"
                          href="/cars?city=bali"
                          tabIndex={0}
                        >
                          <div
                            className="framer-bisomo transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-e793i5"
                              style={
                                {
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              See cars
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-1ykxn7m items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [place-self:start] will-change-transform [opacity:1] transform-none">
            <div className="ssr-variant">
              <div className="framer-1c0duo9-container flex-none">
                <div
                  className="framer-MZ6TM framer-QxRxm framer-BdrqZ framer-5n135 framer-iJjgk framer-oX6dW framer-3tJNm framer-KgJtC framer-81w65 framer-ANzsm framer-nr68vj items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "1px",
                      "--border-color":
                        "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                      "--border-left-width": "1px",
                      "--border-right-width": "1px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      backgroundColor:
                        "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    } as CSSProperties
                  }
                  data-border="true"
                >
                  <div className="framer-3m6lum aspect-[1.7778] flex-none [opacity:1]">
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
                        width="1600"
                        height="899"
                        sizes="max((min(100vw, 1360px) - 96px) / 3, 50px)"
                        srcSet="/site-assets/cd0118ebc1024bc0.avif 512w, /site-assets/0eee6ae976d6d868.avif 1024w, /site-assets/96f2b653701cc766.avif 1600w"
                        src="/site-assets/96f2b653701cc766.avif"
                        alt=""
                      />
                    </div>
                    <div
                      className="framer-qu9z3o items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [box-shadow:rgba(0,_0,_0,_0.07)_0px_1px_4px_0px] [opacity:1]"
                      style={{
                        backgroundColor:
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                        borderRadius: "999px",
                      }}
                    >
                      <div
                        className="framer-h629at transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1coj6ik"
                          style={
                            {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Asia-Pacific
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-iwtx54 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                    <div
                      className="framer-ed7urm transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1najaxl"
                        style={
                          {
                            "--framer-text-alignment": "start",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Australia
                      </p>
                    </div>
                    <div
                      className="framer-uzy9nf transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1dyx20v"
                        style={
                          {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Sydney
                      </p>
                    </div>
                    <div
                      className="framer-2as0xw transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                        Harbour city to Blue Mountains in two hours, or the
                        coast road south.
                      </p>
                    </div>
                    <div className="framer-fy4d71 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-14jpg24 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "0px",
                            "--border-color":
                              "var(--token-bb3a454b-72cf-4b37-ad93-b3ae47afa210)",
                            "--border-left-width": "0px",
                            "--border-right-width": "0px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-ttdg3x items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]">
                          <div className="framer-1a6gbgx-container flex-none [opacity:1]">
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
                              <path d="M21 15.5v-1.8l-7.5-4.7V4.2a1.5 1.5 0 0 0-3 0V9L3 13.7v1.8l7.5-2.2v4.9l-2 1.5v1.3l3.5-1 3.5 1v-1.3l-2-1.5v-4.9Z" />
                            </svg>
                          </div>
                          <div
                            className="framer-1uzkp92 transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Sydney Airport (SYD)
                            </p>
                          </div>
                          <div
                            className="framer-1tnh2pn transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              24 h
                            </p>
                          </div>
                        </div>
                        <div className="framer-ttdg3x items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]">
                          <div className="framer-1a6gbgx-container flex-none [opacity:1]">
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
                              <rect
                                x="4"
                                y="3.5"
                                width="11"
                                height="17"
                                rx="1.5"
                              />
                              <path d="M15 9.5h3.5A1.5 1.5 0 0 1 20 11v9.5M8 7.5h1M11 7.5h1M8 11h1M11 11h1M8 14.5h1M11 14.5h1M3 20.5h18" />
                            </svg>
                          </div>
                          <div
                            className="framer-1uzkp92 transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Circular Quay
                            </p>
                          </div>
                          <div
                            className="framer-1tnh2pn transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              07:00–21:00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-zq5rqu flex-[1_0_0] [opacity:1]" />
                  <div className="framer-1quswo8 items-center flex-none flex-row flex-wrap content-center justify-between [opacity:1]">
                    <div className="framer-gg2nhd items-center flex-none flex-row flex-nowrap gap-[4px] content-center justify-start [opacity:1]">
                      <div
                        className="framer-qe1krx transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                            "--extracted-r6o4lv":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text"
                          style={
                            {
                              "--framer-font-family":
                                '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                              "--framer-font-size": "13px",
                              "--framer-font-variation-axes":
                                'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                              "--framer-line-height": "1.55em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          17
                        </p>
                      </div>
                      <div
                        className="framer-1ab6ukw transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          cars · from
                        </p>
                      </div>
                      <div className="framer-1xkqm2y items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1ulofxt transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text"
                            style={
                              {
                                "--framer-font-family":
                                  '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                "--framer-font-size": "13px",
                                "--framer-font-variation-axes":
                                  'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                                "--framer-line-height": "1.55em",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            $42
                          </p>
                        </div>
                        <div
                          className="framer-lb4xuh transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                            /day
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1lgpyba items-start flex-none flex-row flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-1m69ijx items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                        id=":R1p:-HarBXj85j-tKbsCRU4U-caFrVXQsg-:R3me5alalp:-1m69ijx"
                        tabIndex={0}
                      >
                        <div className="framer-vx1ox8-container flex-none [opacity:1]">
                          <a
                            className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-8ina4u framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                            style={
                              {
                                "--border-bottom-width": "1px",
                                "--border-color":
                                  "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                                "--border-left-width": "1px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "1px",
                                backgroundColor:
                                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                                borderRadius: "6px",
                              } as CSSProperties
                            }
                            data-border="true"
                            role="button"
                            tabIndex={0}
                          >
                            <div
                              className="framer-bisomo transform-none [opacity:1]"
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-e793i5"
                                style={
                                  {
                                    "--framer-text-alignment": "center",
                                  } as CSSProperties
                                }
                                dir="auto"
                              >
                                Details
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="framer-17232se-container flex-none [opacity:1]">
                        <a
                          className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-1e3iabj framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                          style={
                            {
                              "--border-bottom-width": "0px",
                              "--border-color":
                                "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                              "--border-left-width": "0px",
                              "--border-right-width": "0px",
                              "--border-style": "solid",
                              "--border-top-width": "0px",
                              backgroundColor:
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              borderRadius: "6px",
                            } as CSSProperties
                          }
                          data-border="true"
                          href="/cars?city=sydney"
                          tabIndex={0}
                        >
                          <div
                            className="framer-bisomo transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-e793i5"
                              style={
                                {
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              See cars
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-1ykxn7m items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [place-self:start] will-change-transform [opacity:1] transform-none">
            <div className="ssr-variant">
              <div className="framer-1c0duo9-container flex-none">
                <div
                  className="framer-MZ6TM framer-QxRxm framer-BdrqZ framer-5n135 framer-iJjgk framer-oX6dW framer-3tJNm framer-KgJtC framer-81w65 framer-ANzsm framer-nr68vj items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "1px",
                      "--border-color":
                        "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                      "--border-left-width": "1px",
                      "--border-right-width": "1px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      backgroundColor:
                        "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    } as CSSProperties
                  }
                  data-border="true"
                >
                  <div className="framer-3m6lum aspect-[1.7778] flex-none [opacity:1]">
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
                        width="1600"
                        height="1067"
                        sizes="max((min(100vw, 1360px) - 96px) / 3, 50px)"
                        srcSet="/site-assets/b9d19ba9f71cac07.avif 512w, /site-assets/0b1e45767379b143.avif 1024w, /site-assets/3d2bd1f30d8ff401.avif 1600w"
                        src="/site-assets/3d2bd1f30d8ff401.avif"
                        alt=""
                      />
                    </div>
                    <div
                      className="framer-qu9z3o items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [box-shadow:rgba(0,_0,_0,_0.07)_0px_1px_4px_0px] [opacity:1]"
                      style={{
                        backgroundColor:
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                        borderRadius: "999px",
                      }}
                    >
                      <div
                        className="framer-h629at transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1coj6ik"
                          style={
                            {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Americas
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-iwtx54 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                    <div
                      className="framer-ed7urm transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1najaxl"
                        style={
                          {
                            "--framer-text-alignment": "start",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        United States
                      </p>
                    </div>
                    <div
                      className="framer-uzy9nf transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1dyx20v"
                        style={
                          {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        New York
                      </p>
                    </div>
                    <div
                      className="framer-2as0xw transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                        Skip the subway for a weekend upstate. The Hudson Valley
                        is ninety minutes away.
                      </p>
                    </div>
                    <div className="framer-fy4d71 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-14jpg24 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "0px",
                            "--border-color":
                              "var(--token-bb3a454b-72cf-4b37-ad93-b3ae47afa210)",
                            "--border-left-width": "0px",
                            "--border-right-width": "0px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-ttdg3x items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]">
                          <div className="framer-1a6gbgx-container flex-none [opacity:1]">
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
                              <path d="M21 15.5v-1.8l-7.5-4.7V4.2a1.5 1.5 0 0 0-3 0V9L3 13.7v1.8l7.5-2.2v4.9l-2 1.5v1.3l3.5-1 3.5 1v-1.3l-2-1.5v-4.9Z" />
                            </svg>
                          </div>
                          <div
                            className="framer-1uzkp92 transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              John F. Kennedy International Airport (JFK)
                            </p>
                          </div>
                          <div
                            className="framer-1tnh2pn transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              24 h
                            </p>
                          </div>
                        </div>
                        <div className="framer-ttdg3x items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]">
                          <div className="framer-1a6gbgx-container flex-none [opacity:1]">
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
                              <rect
                                x="4"
                                y="3.5"
                                width="11"
                                height="17"
                                rx="1.5"
                              />
                              <path d="M15 9.5h3.5A1.5 1.5 0 0 1 20 11v9.5M8 7.5h1M11 7.5h1M8 11h1M11 11h1M8 14.5h1M11 14.5h1M3 20.5h18" />
                            </svg>
                          </div>
                          <div
                            className="framer-1uzkp92 transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Midtown Manhattan
                            </p>
                          </div>
                          <div
                            className="framer-1tnh2pn transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              07:00–21:00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-zq5rqu flex-[1_0_0] [opacity:1]" />
                  <div className="framer-1quswo8 items-center flex-none flex-row flex-wrap content-center justify-between [opacity:1]">
                    <div className="framer-gg2nhd items-center flex-none flex-row flex-nowrap gap-[4px] content-center justify-start [opacity:1]">
                      <div
                        className="framer-qe1krx transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                            "--extracted-r6o4lv":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text"
                          style={
                            {
                              "--framer-font-family":
                                '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                              "--framer-font-size": "13px",
                              "--framer-font-variation-axes":
                                'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                              "--framer-line-height": "1.55em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          12
                        </p>
                      </div>
                      <div
                        className="framer-1ab6ukw transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          cars · from
                        </p>
                      </div>
                      <div className="framer-1xkqm2y items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1ulofxt transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text"
                            style={
                              {
                                "--framer-font-family":
                                  '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                "--framer-font-size": "13px",
                                "--framer-font-variation-axes":
                                  'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                                "--framer-line-height": "1.55em",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            $42
                          </p>
                        </div>
                        <div
                          className="framer-lb4xuh transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                            /day
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1lgpyba items-start flex-none flex-row flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-1m69ijx items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                        id=":R1p:-HarBXj85j-tKbsCRU4U-GwzpvwKGe-:R3me7alalp:-1m69ijx"
                        tabIndex={0}
                      >
                        <div className="framer-vx1ox8-container flex-none [opacity:1]">
                          <a
                            className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-8ina4u framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                            style={
                              {
                                "--border-bottom-width": "1px",
                                "--border-color":
                                  "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                                "--border-left-width": "1px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "1px",
                                backgroundColor:
                                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                                borderRadius: "6px",
                              } as CSSProperties
                            }
                            data-border="true"
                            role="button"
                            tabIndex={0}
                          >
                            <div
                              className="framer-bisomo transform-none [opacity:1]"
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-e793i5"
                                style={
                                  {
                                    "--framer-text-alignment": "center",
                                  } as CSSProperties
                                }
                                dir="auto"
                              >
                                Details
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="framer-17232se-container flex-none [opacity:1]">
                        <a
                          className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-1e3iabj framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                          style={
                            {
                              "--border-bottom-width": "0px",
                              "--border-color":
                                "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                              "--border-left-width": "0px",
                              "--border-right-width": "0px",
                              "--border-style": "solid",
                              "--border-top-width": "0px",
                              backgroundColor:
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              borderRadius: "6px",
                            } as CSSProperties
                          }
                          data-border="true"
                          href="/cars?city=new-york"
                          tabIndex={0}
                        >
                          <div
                            className="framer-bisomo transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-e793i5"
                              style={
                                {
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              See cars
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-1ykxn7m items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [place-self:start] will-change-transform [opacity:1] transform-none">
            <div className="ssr-variant">
              <div className="framer-1c0duo9-container flex-none">
                <div
                  className="framer-MZ6TM framer-QxRxm framer-BdrqZ framer-5n135 framer-iJjgk framer-oX6dW framer-3tJNm framer-KgJtC framer-81w65 framer-ANzsm framer-nr68vj items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "1px",
                      "--border-color":
                        "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                      "--border-left-width": "1px",
                      "--border-right-width": "1px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      backgroundColor:
                        "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    } as CSSProperties
                  }
                  data-border="true"
                >
                  <div className="framer-3m6lum aspect-[1.7778] flex-none [opacity:1]">
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
                        width="1600"
                        height="952"
                        sizes="max((min(100vw, 1360px) - 96px) / 3, 50px)"
                        srcSet="/site-assets/ce858eac7f58a33e.avif 512w, /site-assets/76eaed5ca9ae629b.avif 1024w, /site-assets/b1cfebd40b1a270b.avif 1600w"
                        src="/site-assets/b1cfebd40b1a270b.avif"
                        alt=""
                      />
                    </div>
                    <div
                      className="framer-qu9z3o items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [box-shadow:rgba(0,_0,_0,_0.07)_0px_1px_4px_0px] [opacity:1]"
                      style={{
                        backgroundColor:
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                        borderRadius: "999px",
                      }}
                    >
                      <div
                        className="framer-h629at transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1coj6ik"
                          style={
                            {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Asia-Pacific
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-iwtx54 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                    <div
                      className="framer-ed7urm transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1najaxl"
                        style={
                          {
                            "--framer-text-alignment": "start",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        South Korea
                      </p>
                    </div>
                    <div
                      className="framer-uzy9nf transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1dyx20v"
                        style={
                          {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Seoul
                      </p>
                    </div>
                    <div
                      className="framer-2as0xw transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                        City lights one day, the east-coast beaches of Gangwon
                        the next.
                      </p>
                    </div>
                    <div className="framer-fy4d71 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-14jpg24 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "0px",
                            "--border-color":
                              "var(--token-bb3a454b-72cf-4b37-ad93-b3ae47afa210)",
                            "--border-left-width": "0px",
                            "--border-right-width": "0px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-ttdg3x items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]">
                          <div className="framer-1a6gbgx-container flex-none [opacity:1]">
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
                              <path d="M21 15.5v-1.8l-7.5-4.7V4.2a1.5 1.5 0 0 0-3 0V9L3 13.7v1.8l7.5-2.2v4.9l-2 1.5v1.3l3.5-1 3.5 1v-1.3l-2-1.5v-4.9Z" />
                            </svg>
                          </div>
                          <div
                            className="framer-1uzkp92 transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Incheon International Airport (ICN)
                            </p>
                          </div>
                          <div
                            className="framer-1tnh2pn transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              24 h
                            </p>
                          </div>
                        </div>
                        <div className="framer-ttdg3x items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]">
                          <div className="framer-1a6gbgx-container flex-none [opacity:1]">
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
                              <rect
                                x="5.5"
                                y="3"
                                width="13"
                                height="14"
                                rx="3"
                              />
                              <path d="M5.5 11h13M9 14h.01M15 14h.01M8 21l2-4M16 21l-2-4" />
                            </svg>
                          </div>
                          <div
                            className="framer-1uzkp92 transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Seoul Station
                            </p>
                          </div>
                          <div
                            className="framer-1tnh2pn transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              07:00–21:00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-zq5rqu flex-[1_0_0] [opacity:1]" />
                  <div className="framer-1quswo8 items-center flex-none flex-row flex-wrap content-center justify-between [opacity:1]">
                    <div className="framer-gg2nhd items-center flex-none flex-row flex-nowrap gap-[4px] content-center justify-start [opacity:1]">
                      <div
                        className="framer-qe1krx transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                            "--extracted-r6o4lv":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text"
                          style={
                            {
                              "--framer-font-family":
                                '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                              "--framer-font-size": "13px",
                              "--framer-font-variation-axes":
                                'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                              "--framer-line-height": "1.55em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          11
                        </p>
                      </div>
                      <div
                        className="framer-1ab6ukw transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          cars · from
                        </p>
                      </div>
                      <div className="framer-1xkqm2y items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1ulofxt transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text"
                            style={
                              {
                                "--framer-font-family":
                                  '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                "--framer-font-size": "13px",
                                "--framer-font-variation-axes":
                                  'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                                "--framer-line-height": "1.55em",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            $36
                          </p>
                        </div>
                        <div
                          className="framer-lb4xuh transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                            /day
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1lgpyba items-start flex-none flex-row flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-1m69ijx items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                        id=":R1p:-HarBXj85j-tKbsCRU4U-MK6dYkcDG-:R3me9alalp:-1m69ijx"
                        tabIndex={0}
                      >
                        <div className="framer-vx1ox8-container flex-none [opacity:1]">
                          <a
                            className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-8ina4u framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                            style={
                              {
                                "--border-bottom-width": "1px",
                                "--border-color":
                                  "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                                "--border-left-width": "1px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "1px",
                                backgroundColor:
                                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                                borderRadius: "6px",
                              } as CSSProperties
                            }
                            data-border="true"
                            role="button"
                            tabIndex={0}
                          >
                            <div
                              className="framer-bisomo transform-none [opacity:1]"
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-e793i5"
                                style={
                                  {
                                    "--framer-text-alignment": "center",
                                  } as CSSProperties
                                }
                                dir="auto"
                              >
                                Details
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="framer-17232se-container flex-none [opacity:1]">
                        <a
                          className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-1e3iabj framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                          style={
                            {
                              "--border-bottom-width": "0px",
                              "--border-color":
                                "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                              "--border-left-width": "0px",
                              "--border-right-width": "0px",
                              "--border-style": "solid",
                              "--border-top-width": "0px",
                              backgroundColor:
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              borderRadius: "6px",
                            } as CSSProperties
                          }
                          data-border="true"
                          href="/cars?city=seoul"
                          tabIndex={0}
                        >
                          <div
                            className="framer-bisomo transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-e793i5"
                              style={
                                {
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              See cars
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-1ykxn7m items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [place-self:start] will-change-transform [opacity:1] transform-none">
            <div className="ssr-variant">
              <div className="framer-1c0duo9-container flex-none">
                <div
                  className="framer-MZ6TM framer-QxRxm framer-BdrqZ framer-5n135 framer-iJjgk framer-oX6dW framer-3tJNm framer-KgJtC framer-81w65 framer-ANzsm framer-nr68vj items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "1px",
                      "--border-color":
                        "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                      "--border-left-width": "1px",
                      "--border-right-width": "1px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      backgroundColor:
                        "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    } as CSSProperties
                  }
                  data-border="true"
                >
                  <div className="framer-3m6lum aspect-[1.7778] flex-none [opacity:1]">
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
                        width="1600"
                        height="703"
                        sizes="max((min(100vw, 1360px) - 96px) / 3, 50px)"
                        srcSet="/site-assets/8bfa0616da295ed1.avif 512w, /site-assets/36583781ab2cf481.avif 1024w, /site-assets/12ac2e2ce32913cf.avif 1600w"
                        src="/site-assets/12ac2e2ce32913cf.avif"
                        alt=""
                      />
                    </div>
                    <div
                      className="framer-qu9z3o items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [box-shadow:rgba(0,_0,_0,_0.07)_0px_1px_4px_0px] [opacity:1]"
                      style={{
                        backgroundColor:
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                        borderRadius: "999px",
                      }}
                    >
                      <div
                        className="framer-h629at transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1coj6ik"
                          style={
                            {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Asia-Pacific
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-iwtx54 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                    <div
                      className="framer-ed7urm transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1najaxl"
                        style={
                          {
                            "--framer-text-alignment": "start",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        South Korea
                      </p>
                    </div>
                    <div
                      className="framer-uzy9nf transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1dyx20v"
                        style={
                          {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Jeju Island
                      </p>
                    </div>
                    <div
                      className="framer-2as0xw transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                        Volcanic coastline, tangerine farms and one of the best
                        road loops in Asia.
                      </p>
                    </div>
                    <div className="framer-fy4d71 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-14jpg24 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "0px",
                            "--border-color":
                              "var(--token-bb3a454b-72cf-4b37-ad93-b3ae47afa210)",
                            "--border-left-width": "0px",
                            "--border-right-width": "0px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-ttdg3x items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]">
                          <div className="framer-1a6gbgx-container flex-none [opacity:1]">
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
                              <path d="M21 15.5v-1.8l-7.5-4.7V4.2a1.5 1.5 0 0 0-3 0V9L3 13.7v1.8l7.5-2.2v4.9l-2 1.5v1.3l3.5-1 3.5 1v-1.3l-2-1.5v-4.9Z" />
                            </svg>
                          </div>
                          <div
                            className="framer-1uzkp92 transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Jeju International Airport (CJU)
                            </p>
                          </div>
                          <div
                            className="framer-1tnh2pn transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              24 h
                            </p>
                          </div>
                        </div>
                        <div className="framer-ttdg3x items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]">
                          <div className="framer-1a6gbgx-container flex-none [opacity:1]">
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
                              <rect
                                x="4"
                                y="3.5"
                                width="11"
                                height="17"
                                rx="1.5"
                              />
                              <path d="M15 9.5h3.5A1.5 1.5 0 0 1 20 11v9.5M8 7.5h1M11 7.5h1M8 11h1M11 11h1M8 14.5h1M11 14.5h1M3 20.5h18" />
                            </svg>
                          </div>
                          <div
                            className="framer-1uzkp92 transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Jeju City
                            </p>
                          </div>
                          <div
                            className="framer-1tnh2pn transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              07:00–21:00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-zq5rqu flex-[1_0_0] [opacity:1]" />
                  <div className="framer-1quswo8 items-center flex-none flex-row flex-wrap content-center justify-between [opacity:1]">
                    <div className="framer-gg2nhd items-center flex-none flex-row flex-nowrap gap-[4px] content-center justify-start [opacity:1]">
                      <div
                        className="framer-qe1krx transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                            "--extracted-r6o4lv":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text"
                          style={
                            {
                              "--framer-font-family":
                                '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                              "--framer-font-size": "13px",
                              "--framer-font-variation-axes":
                                'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                              "--framer-line-height": "1.55em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          10
                        </p>
                      </div>
                      <div
                        className="framer-1ab6ukw transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          cars · from
                        </p>
                      </div>
                      <div className="framer-1xkqm2y items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1ulofxt transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text"
                            style={
                              {
                                "--framer-font-family":
                                  '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                "--framer-font-size": "13px",
                                "--framer-font-variation-axes":
                                  'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                                "--framer-line-height": "1.55em",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            $42
                          </p>
                        </div>
                        <div
                          className="framer-lb4xuh transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                            /day
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1lgpyba items-start flex-none flex-row flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-1m69ijx items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                        id=":R1p:-HarBXj85j-tKbsCRU4U-GGzyTCbxg-:R3mebalalp:-1m69ijx"
                        tabIndex={0}
                      >
                        <div className="framer-vx1ox8-container flex-none [opacity:1]">
                          <a
                            className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-8ina4u framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                            style={
                              {
                                "--border-bottom-width": "1px",
                                "--border-color":
                                  "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                                "--border-left-width": "1px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "1px",
                                backgroundColor:
                                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                                borderRadius: "6px",
                              } as CSSProperties
                            }
                            data-border="true"
                            role="button"
                            tabIndex={0}
                          >
                            <div
                              className="framer-bisomo transform-none [opacity:1]"
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-e793i5"
                                style={
                                  {
                                    "--framer-text-alignment": "center",
                                  } as CSSProperties
                                }
                                dir="auto"
                              >
                                Details
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="framer-17232se-container flex-none [opacity:1]">
                        <a
                          className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-1e3iabj framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                          style={
                            {
                              "--border-bottom-width": "0px",
                              "--border-color":
                                "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                              "--border-left-width": "0px",
                              "--border-right-width": "0px",
                              "--border-style": "solid",
                              "--border-top-width": "0px",
                              backgroundColor:
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              borderRadius: "6px",
                            } as CSSProperties
                          }
                          data-border="true"
                          href="/cars?city=jeju"
                          tabIndex={0}
                        >
                          <div
                            className="framer-bisomo transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-e793i5"
                              style={
                                {
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              See cars
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-1ykxn7m items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [place-self:start] will-change-transform [opacity:1] transform-none">
            <div className="ssr-variant">
              <div className="framer-1c0duo9-container flex-none">
                <div
                  className="framer-MZ6TM framer-QxRxm framer-BdrqZ framer-5n135 framer-iJjgk framer-oX6dW framer-3tJNm framer-KgJtC framer-81w65 framer-ANzsm framer-nr68vj items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "1px",
                      "--border-color":
                        "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                      "--border-left-width": "1px",
                      "--border-right-width": "1px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      backgroundColor:
                        "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    } as CSSProperties
                  }
                  data-border="true"
                >
                  <div className="framer-3m6lum aspect-[1.7778] flex-none [opacity:1]">
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
                        width="1600"
                        height="1067"
                        sizes="max((min(100vw, 1360px) - 96px) / 3, 50px)"
                        srcSet="/site-assets/d6393b2879671cd4.avif 512w, /site-assets/b0c05ee56e09385a.avif 1024w, /site-assets/04d27e22c6bb001d.avif 1600w"
                        src="/site-assets/04d27e22c6bb001d.avif"
                        alt=""
                      />
                    </div>
                    <div
                      className="framer-qu9z3o items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [box-shadow:rgba(0,_0,_0,_0.07)_0px_1px_4px_0px] [opacity:1]"
                      style={{
                        backgroundColor:
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                        borderRadius: "999px",
                      }}
                    >
                      <div
                        className="framer-h629at transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1coj6ik"
                          style={
                            {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Europe
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-iwtx54 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                    <div
                      className="framer-ed7urm transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1najaxl"
                        style={
                          {
                            "--framer-text-alignment": "start",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Germany
                      </p>
                    </div>
                    <div
                      className="framer-uzy9nf transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1dyx20v"
                        style={
                          {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Munich
                      </p>
                    </div>
                    <div
                      className="framer-2as0xw transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                        Alpine lakes and the Romantic Road, all within a
                        morning’s drive.
                      </p>
                    </div>
                    <div className="framer-fy4d71 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-14jpg24 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "0px",
                            "--border-color":
                              "var(--token-bb3a454b-72cf-4b37-ad93-b3ae47afa210)",
                            "--border-left-width": "0px",
                            "--border-right-width": "0px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-ttdg3x items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]">
                          <div className="framer-1a6gbgx-container flex-none [opacity:1]">
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
                              <path d="M21 15.5v-1.8l-7.5-4.7V4.2a1.5 1.5 0 0 0-3 0V9L3 13.7v1.8l7.5-2.2v4.9l-2 1.5v1.3l3.5-1 3.5 1v-1.3l-2-1.5v-4.9Z" />
                            </svg>
                          </div>
                          <div
                            className="framer-1uzkp92 transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Munich Airport (MUC)
                            </p>
                          </div>
                          <div
                            className="framer-1tnh2pn transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              24 h
                            </p>
                          </div>
                        </div>
                        <div className="framer-ttdg3x items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]">
                          <div className="framer-1a6gbgx-container flex-none [opacity:1]">
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
                              <rect
                                x="5.5"
                                y="3"
                                width="13"
                                height="14"
                                rx="3"
                              />
                              <path d="M5.5 11h13M9 14h.01M15 14h.01M8 21l2-4M16 21l-2-4" />
                            </svg>
                          </div>
                          <div
                            className="framer-1uzkp92 transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              München Hauptbahnhof
                            </p>
                          </div>
                          <div
                            className="framer-1tnh2pn transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              07:00–21:00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-zq5rqu flex-[1_0_0] [opacity:1]" />
                  <div className="framer-1quswo8 items-center flex-none flex-row flex-wrap content-center justify-between [opacity:1]">
                    <div className="framer-gg2nhd items-center flex-none flex-row flex-nowrap gap-[4px] content-center justify-start [opacity:1]">
                      <div
                        className="framer-qe1krx transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                            "--extracted-r6o4lv":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text"
                          style={
                            {
                              "--framer-font-family":
                                '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                              "--framer-font-size": "13px",
                              "--framer-font-variation-axes":
                                'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                              "--framer-line-height": "1.55em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          20
                        </p>
                      </div>
                      <div
                        className="framer-1ab6ukw transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          cars · from
                        </p>
                      </div>
                      <div className="framer-1xkqm2y items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1ulofxt transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text"
                            style={
                              {
                                "--framer-font-family":
                                  '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                "--framer-font-size": "13px",
                                "--framer-font-variation-axes":
                                  'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                                "--framer-line-height": "1.55em",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            $36
                          </p>
                        </div>
                        <div
                          className="framer-lb4xuh transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                            /day
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1lgpyba items-start flex-none flex-row flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-1m69ijx items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                        id=":R1p:-HarBXj85j-tKbsCRU4U-WMkr9eqoS-:R3medalalp:-1m69ijx"
                        tabIndex={0}
                      >
                        <div className="framer-vx1ox8-container flex-none [opacity:1]">
                          <a
                            className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-8ina4u framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                            style={
                              {
                                "--border-bottom-width": "1px",
                                "--border-color":
                                  "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                                "--border-left-width": "1px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "1px",
                                backgroundColor:
                                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                                borderRadius: "6px",
                              } as CSSProperties
                            }
                            data-border="true"
                            role="button"
                            tabIndex={0}
                          >
                            <div
                              className="framer-bisomo transform-none [opacity:1]"
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-e793i5"
                                style={
                                  {
                                    "--framer-text-alignment": "center",
                                  } as CSSProperties
                                }
                                dir="auto"
                              >
                                Details
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="framer-17232se-container flex-none [opacity:1]">
                        <a
                          className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-1e3iabj framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                          style={
                            {
                              "--border-bottom-width": "0px",
                              "--border-color":
                                "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                              "--border-left-width": "0px",
                              "--border-right-width": "0px",
                              "--border-style": "solid",
                              "--border-top-width": "0px",
                              backgroundColor:
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              borderRadius: "6px",
                            } as CSSProperties
                          }
                          data-border="true"
                          href="/cars?city=munich"
                          tabIndex={0}
                        >
                          <div
                            className="framer-bisomo transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-e793i5"
                              style={
                                {
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              See cars
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-1ykxn7m items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [place-self:start] will-change-transform [opacity:1] transform-none">
            <div className="ssr-variant">
              <div className="framer-1c0duo9-container flex-none">
                <div
                  className="framer-MZ6TM framer-QxRxm framer-BdrqZ framer-5n135 framer-iJjgk framer-oX6dW framer-3tJNm framer-KgJtC framer-81w65 framer-ANzsm framer-nr68vj items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "1px",
                      "--border-color":
                        "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                      "--border-left-width": "1px",
                      "--border-right-width": "1px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      backgroundColor:
                        "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    } as CSSProperties
                  }
                  data-border="true"
                >
                  <div className="framer-3m6lum aspect-[1.7778] flex-none [opacity:1]">
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
                        width="1600"
                        height="1067"
                        sizes="max((min(100vw, 1360px) - 96px) / 3, 50px)"
                        srcSet="/site-assets/20528e62cf3d7284.avif 512w, /site-assets/cfdf2caf0c58c8f4.avif 1024w, /site-assets/099e6dd2c1124deb.avif 1600w"
                        src="/site-assets/099e6dd2c1124deb.avif"
                        alt=""
                      />
                    </div>
                    <div
                      className="framer-qu9z3o items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [box-shadow:rgba(0,_0,_0,_0.07)_0px_1px_4px_0px] [opacity:1]"
                      style={{
                        backgroundColor:
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                        borderRadius: "999px",
                      }}
                    >
                      <div
                        className="framer-h629at transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1coj6ik"
                          style={
                            {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Europe
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-iwtx54 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                    <div
                      className="framer-ed7urm transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1najaxl"
                        style={
                          {
                            "--framer-text-alignment": "start",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Germany
                      </p>
                    </div>
                    <div
                      className="framer-uzy9nf transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1dyx20v"
                        style={
                          {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Berlin
                      </p>
                    </div>
                    <div
                      className="framer-2as0xw transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                        Lakes, castles and the autobahn south to Munich, one-way
                        at no extra charge.
                      </p>
                    </div>
                    <div className="framer-fy4d71 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-14jpg24 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "0px",
                            "--border-color":
                              "var(--token-bb3a454b-72cf-4b37-ad93-b3ae47afa210)",
                            "--border-left-width": "0px",
                            "--border-right-width": "0px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-ttdg3x items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]">
                          <div className="framer-1a6gbgx-container flex-none [opacity:1]">
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
                              <path d="M21 15.5v-1.8l-7.5-4.7V4.2a1.5 1.5 0 0 0-3 0V9L3 13.7v1.8l7.5-2.2v4.9l-2 1.5v1.3l3.5-1 3.5 1v-1.3l-2-1.5v-4.9Z" />
                            </svg>
                          </div>
                          <div
                            className="framer-1uzkp92 transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Berlin Brandenburg Airport (BER)
                            </p>
                          </div>
                          <div
                            className="framer-1tnh2pn transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              24 h
                            </p>
                          </div>
                        </div>
                        <div className="framer-ttdg3x items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]">
                          <div className="framer-1a6gbgx-container flex-none [opacity:1]">
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
                              <rect
                                x="5.5"
                                y="3"
                                width="13"
                                height="14"
                                rx="3"
                              />
                              <path d="M5.5 11h13M9 14h.01M15 14h.01M8 21l2-4M16 21l-2-4" />
                            </svg>
                          </div>
                          <div
                            className="framer-1uzkp92 transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Berlin Hauptbahnhof
                            </p>
                          </div>
                          <div
                            className="framer-1tnh2pn transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              07:00–21:00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-zq5rqu flex-[1_0_0] [opacity:1]" />
                  <div className="framer-1quswo8 items-center flex-none flex-row flex-wrap content-center justify-between [opacity:1]">
                    <div className="framer-gg2nhd items-center flex-none flex-row flex-nowrap gap-[4px] content-center justify-start [opacity:1]">
                      <div
                        className="framer-qe1krx transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                            "--extracted-r6o4lv":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text"
                          style={
                            {
                              "--framer-font-family":
                                '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                              "--framer-font-size": "13px",
                              "--framer-font-variation-axes":
                                'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                              "--framer-line-height": "1.55em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          19
                        </p>
                      </div>
                      <div
                        className="framer-1ab6ukw transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          cars · from
                        </p>
                      </div>
                      <div className="framer-1xkqm2y items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1ulofxt transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text"
                            style={
                              {
                                "--framer-font-family":
                                  '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                "--framer-font-size": "13px",
                                "--framer-font-variation-axes":
                                  'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                                "--framer-line-height": "1.55em",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            $36
                          </p>
                        </div>
                        <div
                          className="framer-lb4xuh transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                            /day
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1lgpyba items-start flex-none flex-row flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-1m69ijx items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                        id=":R1p:-HarBXj85j-tKbsCRU4U-FHtZrwHIt-:R3mefalalp:-1m69ijx"
                        tabIndex={0}
                      >
                        <div className="framer-vx1ox8-container flex-none [opacity:1]">
                          <a
                            className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-8ina4u framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                            style={
                              {
                                "--border-bottom-width": "1px",
                                "--border-color":
                                  "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                                "--border-left-width": "1px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "1px",
                                backgroundColor:
                                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                                borderRadius: "6px",
                              } as CSSProperties
                            }
                            data-border="true"
                            role="button"
                            tabIndex={0}
                          >
                            <div
                              className="framer-bisomo transform-none [opacity:1]"
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-e793i5"
                                style={
                                  {
                                    "--framer-text-alignment": "center",
                                  } as CSSProperties
                                }
                                dir="auto"
                              >
                                Details
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="framer-17232se-container flex-none [opacity:1]">
                        <a
                          className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-1e3iabj framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                          style={
                            {
                              "--border-bottom-width": "0px",
                              "--border-color":
                                "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                              "--border-left-width": "0px",
                              "--border-right-width": "0px",
                              "--border-style": "solid",
                              "--border-top-width": "0px",
                              backgroundColor:
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              borderRadius: "6px",
                            } as CSSProperties
                          }
                          data-border="true"
                          href="/cars?city=berlin"
                          tabIndex={0}
                        >
                          <div
                            className="framer-bisomo transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-e793i5"
                              style={
                                {
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              See cars
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-1ykxn7m items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [place-self:start] will-change-transform [opacity:1] transform-none">
            <div className="ssr-variant">
              <div className="framer-1c0duo9-container flex-none">
                <div
                  className="framer-MZ6TM framer-QxRxm framer-BdrqZ framer-5n135 framer-iJjgk framer-oX6dW framer-3tJNm framer-KgJtC framer-81w65 framer-ANzsm framer-nr68vj items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "1px",
                      "--border-color":
                        "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                      "--border-left-width": "1px",
                      "--border-right-width": "1px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      backgroundColor:
                        "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    } as CSSProperties
                  }
                  data-border="true"
                >
                  <div className="framer-3m6lum aspect-[1.7778] flex-none [opacity:1]">
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
                        width="1600"
                        height="1200"
                        sizes="max((min(100vw, 1360px) - 96px) / 3, 50px)"
                        srcSet="/site-assets/7a92d0dfd6859b3a.avif 512w, /site-assets/93f166eb99acc369.avif 1024w, /site-assets/ea117720ea9ec2ac.avif 1600w"
                        src="/site-assets/ea117720ea9ec2ac.avif"
                        alt=""
                      />
                    </div>
                    <div
                      className="framer-qu9z3o items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [box-shadow:rgba(0,_0,_0,_0.07)_0px_1px_4px_0px] [opacity:1]"
                      style={{
                        backgroundColor:
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                        borderRadius: "999px",
                      }}
                    >
                      <div
                        className="framer-h629at transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1coj6ik"
                          style={
                            {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Americas
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-iwtx54 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                    <div
                      className="framer-ed7urm transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1najaxl"
                        style={
                          {
                            "--framer-text-alignment": "start",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        United States
                      </p>
                    </div>
                    <div
                      className="framer-uzy9nf transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1dyx20v"
                        style={
                          {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Los Angeles
                      </p>
                    </div>
                    <div
                      className="framer-2as0xw transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                        The city that was built for the car. Pacific Coast
                        Highway starts here.
                      </p>
                    </div>
                    <div className="framer-fy4d71 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-14jpg24 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "0px",
                            "--border-color":
                              "var(--token-bb3a454b-72cf-4b37-ad93-b3ae47afa210)",
                            "--border-left-width": "0px",
                            "--border-right-width": "0px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-ttdg3x items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]">
                          <div className="framer-1a6gbgx-container flex-none [opacity:1]">
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
                              <path d="M21 15.5v-1.8l-7.5-4.7V4.2a1.5 1.5 0 0 0-3 0V9L3 13.7v1.8l7.5-2.2v4.9l-2 1.5v1.3l3.5-1 3.5 1v-1.3l-2-1.5v-4.9Z" />
                            </svg>
                          </div>
                          <div
                            className="framer-1uzkp92 transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Los Angeles International Airport (LAX)
                            </p>
                          </div>
                          <div
                            className="framer-1tnh2pn transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              24 h
                            </p>
                          </div>
                        </div>
                        <div className="framer-ttdg3x items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]">
                          <div className="framer-1a6gbgx-container flex-none [opacity:1]">
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
                              <rect
                                x="4"
                                y="3.5"
                                width="11"
                                height="17"
                                rx="1.5"
                              />
                              <path d="M15 9.5h3.5A1.5 1.5 0 0 1 20 11v9.5M8 7.5h1M11 7.5h1M8 11h1M11 11h1M8 14.5h1M11 14.5h1M3 20.5h18" />
                            </svg>
                          </div>
                          <div
                            className="framer-1uzkp92 transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Santa Monica
                            </p>
                          </div>
                          <div
                            className="framer-1tnh2pn transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              07:00–21:00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-zq5rqu flex-[1_0_0] [opacity:1]" />
                  <div className="framer-1quswo8 items-center flex-none flex-row flex-wrap content-center justify-between [opacity:1]">
                    <div className="framer-gg2nhd items-center flex-none flex-row flex-nowrap gap-[4px] content-center justify-start [opacity:1]">
                      <div
                        className="framer-qe1krx transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                            "--extracted-r6o4lv":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text"
                          style={
                            {
                              "--framer-font-family":
                                '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                              "--framer-font-size": "13px",
                              "--framer-font-variation-axes":
                                'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                              "--framer-line-height": "1.55em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          21
                        </p>
                      </div>
                      <div
                        className="framer-1ab6ukw transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          cars · from
                        </p>
                      </div>
                      <div className="framer-1xkqm2y items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1ulofxt transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text"
                            style={
                              {
                                "--framer-font-family":
                                  '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                "--framer-font-size": "13px",
                                "--framer-font-variation-axes":
                                  'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                                "--framer-line-height": "1.55em",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            $42
                          </p>
                        </div>
                        <div
                          className="framer-lb4xuh transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                            /day
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1lgpyba items-start flex-none flex-row flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-1m69ijx items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                        id=":R1p:-HarBXj85j-tKbsCRU4U-S0kMDFczH-:R3mehalalp:-1m69ijx"
                        tabIndex={0}
                      >
                        <div className="framer-vx1ox8-container flex-none [opacity:1]">
                          <a
                            className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-8ina4u framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                            style={
                              {
                                "--border-bottom-width": "1px",
                                "--border-color":
                                  "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                                "--border-left-width": "1px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "1px",
                                backgroundColor:
                                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                                borderRadius: "6px",
                              } as CSSProperties
                            }
                            data-border="true"
                            role="button"
                            tabIndex={0}
                          >
                            <div
                              className="framer-bisomo transform-none [opacity:1]"
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-e793i5"
                                style={
                                  {
                                    "--framer-text-alignment": "center",
                                  } as CSSProperties
                                }
                                dir="auto"
                              >
                                Details
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="framer-17232se-container flex-none [opacity:1]">
                        <a
                          className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-1e3iabj framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                          style={
                            {
                              "--border-bottom-width": "0px",
                              "--border-color":
                                "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                              "--border-left-width": "0px",
                              "--border-right-width": "0px",
                              "--border-style": "solid",
                              "--border-top-width": "0px",
                              backgroundColor:
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              borderRadius: "6px",
                            } as CSSProperties
                          }
                          data-border="true"
                          href="/cars?city=los-angeles"
                          tabIndex={0}
                        >
                          <div
                            className="framer-bisomo transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-e793i5"
                              style={
                                {
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              See cars
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-1ykxn7m items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [place-self:start] will-change-transform [opacity:1] transform-none">
            <div className="ssr-variant">
              <div className="framer-1c0duo9-container flex-none">
                <div
                  className="framer-MZ6TM framer-QxRxm framer-BdrqZ framer-5n135 framer-iJjgk framer-oX6dW framer-3tJNm framer-KgJtC framer-81w65 framer-ANzsm framer-nr68vj items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "1px",
                      "--border-color":
                        "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                      "--border-left-width": "1px",
                      "--border-right-width": "1px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      backgroundColor:
                        "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    } as CSSProperties
                  }
                  data-border="true"
                >
                  <div className="framer-3m6lum aspect-[1.7778] flex-none [opacity:1]">
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
                        width="1600"
                        height="1178"
                        sizes="max((min(100vw, 1360px) - 96px) / 3, 50px)"
                        srcSet="/site-assets/cb1152f0d98bf320.avif 512w, /site-assets/1213498afe688dc2.avif 1024w, /site-assets/649ff8d5942f07b3.avif 1600w"
                        src="/site-assets/649ff8d5942f07b3.avif"
                        alt=""
                      />
                    </div>
                    <div
                      className="framer-qu9z3o items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [box-shadow:rgba(0,_0,_0,_0.07)_0px_1px_4px_0px] [opacity:1]"
                      style={{
                        backgroundColor:
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                        borderRadius: "999px",
                      }}
                    >
                      <div
                        className="framer-h629at transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1coj6ik"
                          style={
                            {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Europe
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-iwtx54 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                    <div
                      className="framer-ed7urm transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1najaxl"
                        style={
                          {
                            "--framer-text-alignment": "start",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        United Kingdom
                      </p>
                    </div>
                    <div
                      className="framer-uzy9nf transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1dyx20v"
                        style={
                          {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Glasgow
                      </p>
                    </div>
                    <div
                      className="framer-2as0xw transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                        Gateway to Loch Lomond, Glencoe and the North Coast 500.
                      </p>
                    </div>
                    <div className="framer-fy4d71 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-14jpg24 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "0px",
                            "--border-color":
                              "var(--token-bb3a454b-72cf-4b37-ad93-b3ae47afa210)",
                            "--border-left-width": "0px",
                            "--border-right-width": "0px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-ttdg3x items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]">
                          <div className="framer-1a6gbgx-container flex-none [opacity:1]">
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
                              <path d="M21 15.5v-1.8l-7.5-4.7V4.2a1.5 1.5 0 0 0-3 0V9L3 13.7v1.8l7.5-2.2v4.9l-2 1.5v1.3l3.5-1 3.5 1v-1.3l-2-1.5v-4.9Z" />
                            </svg>
                          </div>
                          <div
                            className="framer-1uzkp92 transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Glasgow Airport (GLA)
                            </p>
                          </div>
                          <div
                            className="framer-1tnh2pn transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              24 h
                            </p>
                          </div>
                        </div>
                        <div className="framer-ttdg3x items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]">
                          <div className="framer-1a6gbgx-container flex-none [opacity:1]">
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
                              <rect
                                x="5.5"
                                y="3"
                                width="13"
                                height="14"
                                rx="3"
                              />
                              <path d="M5.5 11h13M9 14h.01M15 14h.01M8 21l2-4M16 21l-2-4" />
                            </svg>
                          </div>
                          <div
                            className="framer-1uzkp92 transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Glasgow Central
                            </p>
                          </div>
                          <div
                            className="framer-1tnh2pn transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              07:00–21:00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-zq5rqu flex-[1_0_0] [opacity:1]" />
                  <div className="framer-1quswo8 items-center flex-none flex-row flex-wrap content-center justify-between [opacity:1]">
                    <div className="framer-gg2nhd items-center flex-none flex-row flex-nowrap gap-[4px] content-center justify-start [opacity:1]">
                      <div
                        className="framer-qe1krx transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                            "--extracted-r6o4lv":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text"
                          style={
                            {
                              "--framer-font-family":
                                '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                              "--framer-font-size": "13px",
                              "--framer-font-variation-axes":
                                'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                              "--framer-line-height": "1.55em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          13
                        </p>
                      </div>
                      <div
                        className="framer-1ab6ukw transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          cars · from
                        </p>
                      </div>
                      <div className="framer-1xkqm2y items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1ulofxt transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text"
                            style={
                              {
                                "--framer-font-family":
                                  '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                "--framer-font-size": "13px",
                                "--framer-font-variation-axes":
                                  'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                                "--framer-line-height": "1.55em",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            $36
                          </p>
                        </div>
                        <div
                          className="framer-lb4xuh transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                            /day
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1lgpyba items-start flex-none flex-row flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-1m69ijx items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                        id=":R1p:-HarBXj85j-tKbsCRU4U-uiRCkiiEU-:R3mejalalp:-1m69ijx"
                        tabIndex={0}
                      >
                        <div className="framer-vx1ox8-container flex-none [opacity:1]">
                          <a
                            className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-8ina4u framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                            style={
                              {
                                "--border-bottom-width": "1px",
                                "--border-color":
                                  "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                                "--border-left-width": "1px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "1px",
                                backgroundColor:
                                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                                borderRadius: "6px",
                              } as CSSProperties
                            }
                            data-border="true"
                            role="button"
                            tabIndex={0}
                          >
                            <div
                              className="framer-bisomo transform-none [opacity:1]"
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-e793i5"
                                style={
                                  {
                                    "--framer-text-alignment": "center",
                                  } as CSSProperties
                                }
                                dir="auto"
                              >
                                Details
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="framer-17232se-container flex-none [opacity:1]">
                        <a
                          className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-1e3iabj framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                          style={
                            {
                              "--border-bottom-width": "0px",
                              "--border-color":
                                "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                              "--border-left-width": "0px",
                              "--border-right-width": "0px",
                              "--border-style": "solid",
                              "--border-top-width": "0px",
                              backgroundColor:
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              borderRadius: "6px",
                            } as CSSProperties
                          }
                          data-border="true"
                          href="/cars?city=glasgow"
                          tabIndex={0}
                        >
                          <div
                            className="framer-bisomo transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-e793i5"
                              style={
                                {
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              See cars
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-1ykxn7m items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [place-self:start] will-change-transform [opacity:1] transform-none">
            <div className="ssr-variant">
              <div className="framer-1c0duo9-container flex-none">
                <div
                  className="framer-MZ6TM framer-QxRxm framer-BdrqZ framer-5n135 framer-iJjgk framer-oX6dW framer-3tJNm framer-KgJtC framer-81w65 framer-ANzsm framer-nr68vj items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "1px",
                      "--border-color":
                        "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                      "--border-left-width": "1px",
                      "--border-right-width": "1px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      backgroundColor:
                        "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    } as CSSProperties
                  }
                  data-border="true"
                >
                  <div className="framer-3m6lum aspect-[1.7778] flex-none [opacity:1]">
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
                        width="1600"
                        height="1060"
                        sizes="max((min(100vw, 1360px) - 96px) / 3, 50px)"
                        srcSet="/site-assets/74b1d8bafc059fd7.avif 512w, /site-assets/4140b46a701d45e2.avif 1024w, /site-assets/0c38b0b827d437a0.avif 1600w"
                        src="/site-assets/0c38b0b827d437a0.avif"
                        alt=""
                      />
                    </div>
                    <div
                      className="framer-qu9z3o items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [box-shadow:rgba(0,_0,_0,_0.07)_0px_1px_4px_0px] [opacity:1]"
                      style={{
                        backgroundColor:
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                        borderRadius: "999px",
                      }}
                    >
                      <div
                        className="framer-h629at transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1coj6ik"
                          style={
                            {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Europe
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-iwtx54 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                    <div
                      className="framer-ed7urm transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1najaxl"
                        style={
                          {
                            "--framer-text-alignment": "start",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        United Kingdom
                      </p>
                    </div>
                    <div
                      className="framer-uzy9nf transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1dyx20v"
                        style={
                          {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Birmingham
                      </p>
                    </div>
                    <div
                      className="framer-2as0xw transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                        The middle of England: Cotswolds, Peak District and
                        Wales are all close.
                      </p>
                    </div>
                    <div className="framer-fy4d71 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-14jpg24 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "0px",
                            "--border-color":
                              "var(--token-bb3a454b-72cf-4b37-ad93-b3ae47afa210)",
                            "--border-left-width": "0px",
                            "--border-right-width": "0px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-ttdg3x items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]">
                          <div className="framer-1a6gbgx-container flex-none [opacity:1]">
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
                              <path d="M21 15.5v-1.8l-7.5-4.7V4.2a1.5 1.5 0 0 0-3 0V9L3 13.7v1.8l7.5-2.2v4.9l-2 1.5v1.3l3.5-1 3.5 1v-1.3l-2-1.5v-4.9Z" />
                            </svg>
                          </div>
                          <div
                            className="framer-1uzkp92 transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Birmingham Airport (BHX)
                            </p>
                          </div>
                          <div
                            className="framer-1tnh2pn transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              24 h
                            </p>
                          </div>
                        </div>
                        <div className="framer-ttdg3x items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]">
                          <div className="framer-1a6gbgx-container flex-none [opacity:1]">
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
                              <rect
                                x="5.5"
                                y="3"
                                width="13"
                                height="14"
                                rx="3"
                              />
                              <path d="M5.5 11h13M9 14h.01M15 14h.01M8 21l2-4M16 21l-2-4" />
                            </svg>
                          </div>
                          <div
                            className="framer-1uzkp92 transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Birmingham New Street
                            </p>
                          </div>
                          <div
                            className="framer-1tnh2pn transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              07:00–21:00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-zq5rqu flex-[1_0_0] [opacity:1]" />
                  <div className="framer-1quswo8 items-center flex-none flex-row flex-wrap content-center justify-between [opacity:1]">
                    <div className="framer-gg2nhd items-center flex-none flex-row flex-nowrap gap-[4px] content-center justify-start [opacity:1]">
                      <div
                        className="framer-qe1krx transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                            "--extracted-r6o4lv":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text"
                          style={
                            {
                              "--framer-font-family":
                                '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                              "--framer-font-size": "13px",
                              "--framer-font-variation-axes":
                                'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                              "--framer-line-height": "1.55em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          13
                        </p>
                      </div>
                      <div
                        className="framer-1ab6ukw transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          cars · from
                        </p>
                      </div>
                      <div className="framer-1xkqm2y items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1ulofxt transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text"
                            style={
                              {
                                "--framer-font-family":
                                  '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                "--framer-font-size": "13px",
                                "--framer-font-variation-axes":
                                  'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                                "--framer-line-height": "1.55em",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            $36
                          </p>
                        </div>
                        <div
                          className="framer-lb4xuh transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                            /day
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1lgpyba items-start flex-none flex-row flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-1m69ijx items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                        id=":R1p:-HarBXj85j-tKbsCRU4U-cg3A8_ozX-:R3melalalp:-1m69ijx"
                        tabIndex={0}
                      >
                        <div className="framer-vx1ox8-container flex-none [opacity:1]">
                          <a
                            className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-8ina4u framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                            style={
                              {
                                "--border-bottom-width": "1px",
                                "--border-color":
                                  "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                                "--border-left-width": "1px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "1px",
                                backgroundColor:
                                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                                borderRadius: "6px",
                              } as CSSProperties
                            }
                            data-border="true"
                            role="button"
                            tabIndex={0}
                          >
                            <div
                              className="framer-bisomo transform-none [opacity:1]"
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-e793i5"
                                style={
                                  {
                                    "--framer-text-alignment": "center",
                                  } as CSSProperties
                                }
                                dir="auto"
                              >
                                Details
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="framer-17232se-container flex-none [opacity:1]">
                        <a
                          className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-1e3iabj framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                          style={
                            {
                              "--border-bottom-width": "0px",
                              "--border-color":
                                "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                              "--border-left-width": "0px",
                              "--border-right-width": "0px",
                              "--border-style": "solid",
                              "--border-top-width": "0px",
                              backgroundColor:
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              borderRadius: "6px",
                            } as CSSProperties
                          }
                          data-border="true"
                          href="/cars?city=birmingham"
                          tabIndex={0}
                        >
                          <div
                            className="framer-bisomo transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-e793i5"
                              style={
                                {
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              See cars
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-1ykxn7m items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [place-self:start] will-change-transform [opacity:1] transform-none">
            <div className="ssr-variant">
              <div className="framer-1c0duo9-container flex-none">
                <div
                  className="framer-MZ6TM framer-QxRxm framer-BdrqZ framer-5n135 framer-iJjgk framer-oX6dW framer-3tJNm framer-KgJtC framer-81w65 framer-ANzsm framer-nr68vj items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "1px",
                      "--border-color":
                        "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                      "--border-left-width": "1px",
                      "--border-right-width": "1px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      backgroundColor:
                        "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    } as CSSProperties
                  }
                  data-border="true"
                >
                  <div className="framer-3m6lum aspect-[1.7778] flex-none [opacity:1]">
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
                        width="1600"
                        height="1059"
                        sizes="max((min(100vw, 1360px) - 96px) / 3, 50px)"
                        srcSet="/site-assets/f68a9246ce212188.avif 512w, /site-assets/2aa4a7634587824d.avif 1024w, /site-assets/71ee9476f673ae47.avif 1600w"
                        src="/site-assets/71ee9476f673ae47.avif"
                        alt=""
                      />
                    </div>
                    <div
                      className="framer-qu9z3o items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [box-shadow:rgba(0,_0,_0,_0.07)_0px_1px_4px_0px] [opacity:1]"
                      style={{
                        backgroundColor:
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                        borderRadius: "999px",
                      }}
                    >
                      <div
                        className="framer-h629at transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1coj6ik"
                          style={
                            {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Asia-Pacific
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-iwtx54 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                    <div
                      className="framer-ed7urm transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1najaxl"
                        style={
                          {
                            "--framer-text-alignment": "start",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Japan
                      </p>
                    </div>
                    <div
                      className="framer-uzy9nf transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1dyx20v"
                        style={
                          {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Tokyo
                      </p>
                    </div>
                    <div
                      className="framer-2as0xw transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                        Mount Fuji, Hakone and the Izu Peninsula make the case
                        for leaving the trains behind.
                      </p>
                    </div>
                    <div className="framer-fy4d71 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-14jpg24 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "0px",
                            "--border-color":
                              "var(--token-bb3a454b-72cf-4b37-ad93-b3ae47afa210)",
                            "--border-left-width": "0px",
                            "--border-right-width": "0px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-ttdg3x items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]">
                          <div className="framer-1a6gbgx-container flex-none [opacity:1]">
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
                              <path d="M21 15.5v-1.8l-7.5-4.7V4.2a1.5 1.5 0 0 0-3 0V9L3 13.7v1.8l7.5-2.2v4.9l-2 1.5v1.3l3.5-1 3.5 1v-1.3l-2-1.5v-4.9Z" />
                            </svg>
                          </div>
                          <div
                            className="framer-1uzkp92 transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Haneda Airport (HND)
                            </p>
                          </div>
                          <div
                            className="framer-1tnh2pn transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              24 h
                            </p>
                          </div>
                        </div>
                        <div className="framer-ttdg3x items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]">
                          <div className="framer-1a6gbgx-container flex-none [opacity:1]">
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
                              <rect
                                x="4"
                                y="3.5"
                                width="11"
                                height="17"
                                rx="1.5"
                              />
                              <path d="M15 9.5h3.5A1.5 1.5 0 0 1 20 11v9.5M8 7.5h1M11 7.5h1M8 11h1M11 11h1M8 14.5h1M11 14.5h1M3 20.5h18" />
                            </svg>
                          </div>
                          <div
                            className="framer-1uzkp92 transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Shinjuku
                            </p>
                          </div>
                          <div
                            className="framer-1tnh2pn transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              07:00–21:00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-zq5rqu flex-[1_0_0] [opacity:1]" />
                  <div className="framer-1quswo8 items-center flex-none flex-row flex-wrap content-center justify-between [opacity:1]">
                    <div className="framer-gg2nhd items-center flex-none flex-row flex-nowrap gap-[4px] content-center justify-start [opacity:1]">
                      <div
                        className="framer-qe1krx transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                            "--extracted-r6o4lv":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text"
                          style={
                            {
                              "--framer-font-family":
                                '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                              "--framer-font-size": "13px",
                              "--framer-font-variation-axes":
                                'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                              "--framer-line-height": "1.55em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          11
                        </p>
                      </div>
                      <div
                        className="framer-1ab6ukw transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          cars · from
                        </p>
                      </div>
                      <div className="framer-1xkqm2y items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1ulofxt transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text"
                            style={
                              {
                                "--framer-font-family":
                                  '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                "--framer-font-size": "13px",
                                "--framer-font-variation-axes":
                                  'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                                "--framer-line-height": "1.55em",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            $36
                          </p>
                        </div>
                        <div
                          className="framer-lb4xuh transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                            /day
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1lgpyba items-start flex-none flex-row flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-1m69ijx items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                        id=":R1p:-HarBXj85j-tKbsCRU4U-LCtDqCIiH-:R3menalalp:-1m69ijx"
                        tabIndex={0}
                      >
                        <div className="framer-vx1ox8-container flex-none [opacity:1]">
                          <a
                            className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-8ina4u framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                            style={
                              {
                                "--border-bottom-width": "1px",
                                "--border-color":
                                  "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                                "--border-left-width": "1px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "1px",
                                backgroundColor:
                                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                                borderRadius: "6px",
                              } as CSSProperties
                            }
                            data-border="true"
                            role="button"
                            tabIndex={0}
                          >
                            <div
                              className="framer-bisomo transform-none [opacity:1]"
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-e793i5"
                                style={
                                  {
                                    "--framer-text-alignment": "center",
                                  } as CSSProperties
                                }
                                dir="auto"
                              >
                                Details
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="framer-17232se-container flex-none [opacity:1]">
                        <a
                          className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-1e3iabj framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                          style={
                            {
                              "--border-bottom-width": "0px",
                              "--border-color":
                                "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                              "--border-left-width": "0px",
                              "--border-right-width": "0px",
                              "--border-style": "solid",
                              "--border-top-width": "0px",
                              backgroundColor:
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              borderRadius: "6px",
                            } as CSSProperties
                          }
                          data-border="true"
                          href="/cars?city=tokyo"
                          tabIndex={0}
                        >
                          <div
                            className="framer-bisomo transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-e793i5"
                              style={
                                {
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              See cars
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-1ykxn7m items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [place-self:start] will-change-transform [opacity:1] transform-none">
            <div className="ssr-variant">
              <div className="framer-1c0duo9-container flex-none">
                <div
                  className="framer-MZ6TM framer-QxRxm framer-BdrqZ framer-5n135 framer-iJjgk framer-oX6dW framer-3tJNm framer-KgJtC framer-81w65 framer-ANzsm framer-nr68vj items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "1px",
                      "--border-color":
                        "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                      "--border-left-width": "1px",
                      "--border-right-width": "1px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      backgroundColor:
                        "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    } as CSSProperties
                  }
                  data-border="true"
                >
                  <div className="framer-3m6lum aspect-[1.7778] flex-none [opacity:1]">
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
                        width="1600"
                        height="1067"
                        sizes="max((min(100vw, 1360px) - 96px) / 3, 50px)"
                        srcSet="/site-assets/4a47fc698df2be95.avif 512w, /site-assets/aee526161a4061a4.avif 1024w, /site-assets/ad9ac12b70eed9ca.avif 1600w"
                        src="/site-assets/ad9ac12b70eed9ca.avif"
                        alt=""
                      />
                    </div>
                    <div
                      className="framer-qu9z3o items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [box-shadow:rgba(0,_0,_0,_0.07)_0px_1px_4px_0px] [opacity:1]"
                      style={{
                        backgroundColor:
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                        borderRadius: "999px",
                      }}
                    >
                      <div
                        className="framer-h629at transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1coj6ik"
                          style={
                            {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Europe
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-iwtx54 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                    <div
                      className="framer-ed7urm transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1najaxl"
                        style={
                          {
                            "--framer-text-alignment": "start",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Portugal
                      </p>
                    </div>
                    <div
                      className="framer-uzy9nf transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1dyx20v"
                        style={
                          {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Lisbon
                      </p>
                    </div>
                    <div
                      className="framer-2as0xw transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                        Sintra’s palaces and the Alentejo coast, with sunshine
                        most of the year.
                      </p>
                    </div>
                    <div className="framer-fy4d71 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-14jpg24 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "0px",
                            "--border-color":
                              "var(--token-bb3a454b-72cf-4b37-ad93-b3ae47afa210)",
                            "--border-left-width": "0px",
                            "--border-right-width": "0px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-ttdg3x items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]">
                          <div className="framer-1a6gbgx-container flex-none [opacity:1]">
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
                              <path d="M21 15.5v-1.8l-7.5-4.7V4.2a1.5 1.5 0 0 0-3 0V9L3 13.7v1.8l7.5-2.2v4.9l-2 1.5v1.3l3.5-1 3.5 1v-1.3l-2-1.5v-4.9Z" />
                            </svg>
                          </div>
                          <div
                            className="framer-1uzkp92 transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Humberto Delgado Airport (LIS)
                            </p>
                          </div>
                          <div
                            className="framer-1tnh2pn transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              24 h
                            </p>
                          </div>
                        </div>
                        <div className="framer-ttdg3x items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]">
                          <div className="framer-1a6gbgx-container flex-none [opacity:1]">
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
                              <rect
                                x="4"
                                y="3.5"
                                width="11"
                                height="17"
                                rx="1.5"
                              />
                              <path d="M15 9.5h3.5A1.5 1.5 0 0 1 20 11v9.5M8 7.5h1M11 7.5h1M8 11h1M11 11h1M8 14.5h1M11 14.5h1M3 20.5h18" />
                            </svg>
                          </div>
                          <div
                            className="framer-1uzkp92 transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Cais do Sodré
                            </p>
                          </div>
                          <div
                            className="framer-1tnh2pn transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              07:00–21:00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-zq5rqu flex-[1_0_0] [opacity:1]" />
                  <div className="framer-1quswo8 items-center flex-none flex-row flex-wrap content-center justify-between [opacity:1]">
                    <div className="framer-gg2nhd items-center flex-none flex-row flex-nowrap gap-[4px] content-center justify-start [opacity:1]">
                      <div
                        className="framer-qe1krx transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                            "--extracted-r6o4lv":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text"
                          style={
                            {
                              "--framer-font-family":
                                '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                              "--framer-font-size": "13px",
                              "--framer-font-variation-axes":
                                'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                              "--framer-line-height": "1.55em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          19
                        </p>
                      </div>
                      <div
                        className="framer-1ab6ukw transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          cars · from
                        </p>
                      </div>
                      <div className="framer-1xkqm2y items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1ulofxt transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text"
                            style={
                              {
                                "--framer-font-family":
                                  '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                "--framer-font-size": "13px",
                                "--framer-font-variation-axes":
                                  'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                                "--framer-line-height": "1.55em",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            $36
                          </p>
                        </div>
                        <div
                          className="framer-lb4xuh transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                            /day
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1lgpyba items-start flex-none flex-row flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-1m69ijx items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                        id=":R1p:-HarBXj85j-tKbsCRU4U-ErM96r2Df-:R3mepalalp:-1m69ijx"
                        tabIndex={0}
                      >
                        <div className="framer-vx1ox8-container flex-none [opacity:1]">
                          <a
                            className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-8ina4u framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                            style={
                              {
                                "--border-bottom-width": "1px",
                                "--border-color":
                                  "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                                "--border-left-width": "1px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "1px",
                                backgroundColor:
                                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                                borderRadius: "6px",
                              } as CSSProperties
                            }
                            data-border="true"
                            role="button"
                            tabIndex={0}
                          >
                            <div
                              className="framer-bisomo transform-none [opacity:1]"
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-e793i5"
                                style={
                                  {
                                    "--framer-text-alignment": "center",
                                  } as CSSProperties
                                }
                                dir="auto"
                              >
                                Details
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="framer-17232se-container flex-none [opacity:1]">
                        <a
                          className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-1e3iabj framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                          style={
                            {
                              "--border-bottom-width": "0px",
                              "--border-color":
                                "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                              "--border-left-width": "0px",
                              "--border-right-width": "0px",
                              "--border-style": "solid",
                              "--border-top-width": "0px",
                              backgroundColor:
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              borderRadius: "6px",
                            } as CSSProperties
                          }
                          data-border="true"
                          href="/cars?city=lisbon"
                          tabIndex={0}
                        >
                          <div
                            className="framer-bisomo transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-e793i5"
                              style={
                                {
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              See cars
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-1ykxn7m items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [place-self:start] will-change-transform [opacity:1] transform-none">
            <div className="ssr-variant">
              <div className="framer-1c0duo9-container flex-none">
                <div
                  className="framer-MZ6TM framer-QxRxm framer-BdrqZ framer-5n135 framer-iJjgk framer-oX6dW framer-3tJNm framer-KgJtC framer-81w65 framer-ANzsm framer-nr68vj items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "1px",
                      "--border-color":
                        "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                      "--border-left-width": "1px",
                      "--border-right-width": "1px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      backgroundColor:
                        "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    } as CSSProperties
                  }
                  data-border="true"
                >
                  <div className="framer-3m6lum aspect-[1.7778] flex-none [opacity:1]">
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
                        width="1600"
                        height="1040"
                        sizes="max((min(100vw, 1360px) - 96px) / 3, 50px)"
                        srcSet="/site-assets/153c852e931901d1.avif 512w, /site-assets/50e767b168ba0cd2.avif 1024w, /site-assets/42b523797dfadebf.avif 1600w"
                        src="/site-assets/42b523797dfadebf.avif"
                        alt=""
                      />
                    </div>
                    <div
                      className="framer-qu9z3o items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [box-shadow:rgba(0,_0,_0,_0.07)_0px_1px_4px_0px] [opacity:1]"
                      style={{
                        backgroundColor:
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                        borderRadius: "999px",
                      }}
                    >
                      <div
                        className="framer-h629at transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1coj6ik"
                          style={
                            {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Middle East &amp; Africa
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-iwtx54 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                    <div
                      className="framer-ed7urm transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1najaxl"
                        style={
                          {
                            "--framer-text-alignment": "start",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        United Arab Emirates
                      </p>
                    </div>
                    <div
                      className="framer-uzy9nf transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1dyx20v"
                        style={
                          {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Dubai
                      </p>
                    </div>
                    <div
                      className="framer-2as0xw transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                        Sheikh Zayed Road by night, Hatta’s mountains by day.
                      </p>
                    </div>
                    <div className="framer-fy4d71 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-14jpg24 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "0px",
                            "--border-color":
                              "var(--token-bb3a454b-72cf-4b37-ad93-b3ae47afa210)",
                            "--border-left-width": "0px",
                            "--border-right-width": "0px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-ttdg3x items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]">
                          <div className="framer-1a6gbgx-container flex-none [opacity:1]">
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
                              <path d="M21 15.5v-1.8l-7.5-4.7V4.2a1.5 1.5 0 0 0-3 0V9L3 13.7v1.8l7.5-2.2v4.9l-2 1.5v1.3l3.5-1 3.5 1v-1.3l-2-1.5v-4.9Z" />
                            </svg>
                          </div>
                          <div
                            className="framer-1uzkp92 transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Dubai International Airport (DXB)
                            </p>
                          </div>
                          <div
                            className="framer-1tnh2pn transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              24 h
                            </p>
                          </div>
                        </div>
                        <div className="framer-ttdg3x items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]">
                          <div className="framer-1a6gbgx-container flex-none [opacity:1]">
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
                              <rect
                                x="4"
                                y="3.5"
                                width="11"
                                height="17"
                                rx="1.5"
                              />
                              <path d="M15 9.5h3.5A1.5 1.5 0 0 1 20 11v9.5M8 7.5h1M11 7.5h1M8 11h1M11 11h1M8 14.5h1M11 14.5h1M3 20.5h18" />
                            </svg>
                          </div>
                          <div
                            className="framer-1uzkp92 transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Dubai Marina
                            </p>
                          </div>
                          <div
                            className="framer-1tnh2pn transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              07:00–21:00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-zq5rqu flex-[1_0_0] [opacity:1]" />
                  <div className="framer-1quswo8 items-center flex-none flex-row flex-wrap content-center justify-between [opacity:1]">
                    <div className="framer-gg2nhd items-center flex-none flex-row flex-nowrap gap-[4px] content-center justify-start [opacity:1]">
                      <div
                        className="framer-qe1krx transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                            "--extracted-r6o4lv":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text"
                          style={
                            {
                              "--framer-font-family":
                                '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                              "--framer-font-size": "13px",
                              "--framer-font-variation-axes":
                                'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                              "--framer-line-height": "1.55em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          17
                        </p>
                      </div>
                      <div
                        className="framer-1ab6ukw transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          cars · from
                        </p>
                      </div>
                      <div className="framer-1xkqm2y items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1ulofxt transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text"
                            style={
                              {
                                "--framer-font-family":
                                  '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                "--framer-font-size": "13px",
                                "--framer-font-variation-axes":
                                  'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                                "--framer-line-height": "1.55em",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            $42
                          </p>
                        </div>
                        <div
                          className="framer-lb4xuh transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                            /day
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1lgpyba items-start flex-none flex-row flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-1m69ijx items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                        id=":R1p:-HarBXj85j-tKbsCRU4U-NAsKpuWhB-:R3meralalp:-1m69ijx"
                        tabIndex={0}
                      >
                        <div className="framer-vx1ox8-container flex-none [opacity:1]">
                          <a
                            className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-8ina4u framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                            style={
                              {
                                "--border-bottom-width": "1px",
                                "--border-color":
                                  "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                                "--border-left-width": "1px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "1px",
                                backgroundColor:
                                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                                borderRadius: "6px",
                              } as CSSProperties
                            }
                            data-border="true"
                            role="button"
                            tabIndex={0}
                          >
                            <div
                              className="framer-bisomo transform-none [opacity:1]"
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-e793i5"
                                style={
                                  {
                                    "--framer-text-alignment": "center",
                                  } as CSSProperties
                                }
                                dir="auto"
                              >
                                Details
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="framer-17232se-container flex-none [opacity:1]">
                        <a
                          className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-1e3iabj framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                          style={
                            {
                              "--border-bottom-width": "0px",
                              "--border-color":
                                "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                              "--border-left-width": "0px",
                              "--border-right-width": "0px",
                              "--border-style": "solid",
                              "--border-top-width": "0px",
                              backgroundColor:
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              borderRadius: "6px",
                            } as CSSProperties
                          }
                          data-border="true"
                          href="/cars?city=dubai"
                          tabIndex={0}
                        >
                          <div
                            className="framer-bisomo transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-e793i5"
                              style={
                                {
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              See cars
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-1ykxn7m items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [place-self:start] will-change-transform [opacity:1] transform-none">
            <div className="ssr-variant">
              <div className="framer-1c0duo9-container flex-none">
                <div
                  className="framer-MZ6TM framer-QxRxm framer-BdrqZ framer-5n135 framer-iJjgk framer-oX6dW framer-3tJNm framer-KgJtC framer-81w65 framer-ANzsm framer-nr68vj items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "1px",
                      "--border-color":
                        "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                      "--border-left-width": "1px",
                      "--border-right-width": "1px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      backgroundColor:
                        "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    } as CSSProperties
                  }
                  data-border="true"
                >
                  <div className="framer-3m6lum aspect-[1.7778] flex-none [opacity:1]">
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
                        width="1600"
                        height="997"
                        sizes="max((min(100vw, 1360px) - 96px) / 3, 50px)"
                        srcSet="/site-assets/54f63f2d6d473949.avif 512w, /site-assets/a9c2d6acda40da90.avif 1024w, /site-assets/be38850d9f094d7d.avif 1600w"
                        src="/site-assets/be38850d9f094d7d.avif"
                        alt=""
                      />
                    </div>
                    <div
                      className="framer-qu9z3o items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [box-shadow:rgba(0,_0,_0,_0.07)_0px_1px_4px_0px] [opacity:1]"
                      style={{
                        backgroundColor:
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                        borderRadius: "999px",
                      }}
                    >
                      <div
                        className="framer-h629at transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1coj6ik"
                          style={
                            {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Middle East &amp; Africa
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-iwtx54 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                    <div
                      className="framer-ed7urm transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1najaxl"
                        style={
                          {
                            "--framer-text-alignment": "start",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        South Africa
                      </p>
                    </div>
                    <div
                      className="framer-uzy9nf transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1dyx20v"
                        style={
                          {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Cape Town
                      </p>
                    </div>
                    <div
                      className="framer-2as0xw transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                        Chapman’s Peak, the winelands and the start of the
                        Garden Route.
                      </p>
                    </div>
                    <div className="framer-fy4d71 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-14jpg24 items-start flex-none flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "0px",
                            "--border-color":
                              "var(--token-bb3a454b-72cf-4b37-ad93-b3ae47afa210)",
                            "--border-left-width": "0px",
                            "--border-right-width": "0px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div className="framer-ttdg3x items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]">
                          <div className="framer-1a6gbgx-container flex-none [opacity:1]">
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
                              <path d="M21 15.5v-1.8l-7.5-4.7V4.2a1.5 1.5 0 0 0-3 0V9L3 13.7v1.8l7.5-2.2v4.9l-2 1.5v1.3l3.5-1 3.5 1v-1.3l-2-1.5v-4.9Z" />
                            </svg>
                          </div>
                          <div
                            className="framer-1uzkp92 transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Cape Town International Airport (CPT)
                            </p>
                          </div>
                          <div
                            className="framer-1tnh2pn transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              24 h
                            </p>
                          </div>
                        </div>
                        <div className="framer-ttdg3x items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]">
                          <div className="framer-1a6gbgx-container flex-none [opacity:1]">
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
                              <rect
                                x="4"
                                y="3.5"
                                width="11"
                                height="17"
                                rx="1.5"
                              />
                              <path d="M15 9.5h3.5A1.5 1.5 0 0 1 20 11v9.5M8 7.5h1M11 7.5h1M8 11h1M11 11h1M8 14.5h1M11 14.5h1M3 20.5h18" />
                            </svg>
                          </div>
                          <div
                            className="framer-1uzkp92 transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              V&amp;A Waterfront
                            </p>
                          </div>
                          <div
                            className="framer-1tnh2pn transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              style={
                                {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              07:00–21:00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-zq5rqu flex-[1_0_0] [opacity:1]" />
                  <div className="framer-1quswo8 items-center flex-none flex-row flex-wrap content-center justify-between [opacity:1]">
                    <div className="framer-gg2nhd items-center flex-none flex-row flex-nowrap gap-[4px] content-center justify-start [opacity:1]">
                      <div
                        className="framer-qe1krx transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                            "--extracted-r6o4lv":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text"
                          style={
                            {
                              "--framer-font-family":
                                '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                              "--framer-font-size": "13px",
                              "--framer-font-variation-axes":
                                'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                              "--framer-line-height": "1.55em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          13
                        </p>
                      </div>
                      <div
                        className="framer-1ab6ukw transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          cars · from
                        </p>
                      </div>
                      <div className="framer-1xkqm2y items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1ulofxt transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                              "--extracted-r6o4lv":
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text"
                            style={
                              {
                                "--framer-font-family":
                                  '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                "--framer-font-size": "13px",
                                "--framer-font-variation-axes":
                                  'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                                "--framer-line-height": "1.55em",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            $42
                          </p>
                        </div>
                        <div
                          className="framer-lb4xuh transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                            /day
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1lgpyba items-start flex-none flex-row flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-1m69ijx items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                        id=":R1p:-HarBXj85j-tKbsCRU4U-F4FoLCkZ8-:R3metalalp:-1m69ijx"
                        tabIndex={0}
                      >
                        <div className="framer-vx1ox8-container flex-none [opacity:1]">
                          <a
                            className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-8ina4u framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                            style={
                              {
                                "--border-bottom-width": "1px",
                                "--border-color":
                                  "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                                "--border-left-width": "1px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "1px",
                                backgroundColor:
                                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                                borderRadius: "6px",
                              } as CSSProperties
                            }
                            data-border="true"
                            role="button"
                            tabIndex={0}
                          >
                            <div
                              className="framer-bisomo transform-none [opacity:1]"
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-e793i5"
                                style={
                                  {
                                    "--framer-text-alignment": "center",
                                  } as CSSProperties
                                }
                                dir="auto"
                              >
                                Details
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="framer-17232se-container flex-none [opacity:1]">
                        <a
                          className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-1e3iabj framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                          style={
                            {
                              "--border-bottom-width": "0px",
                              "--border-color":
                                "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                              "--border-left-width": "0px",
                              "--border-right-width": "0px",
                              "--border-style": "solid",
                              "--border-top-width": "0px",
                              backgroundColor:
                                "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                              borderRadius: "6px",
                            } as CSSProperties
                          }
                          data-border="true"
                          href="/cars?city=cape-town"
                          tabIndex={0}
                        >
                          <div
                            className="framer-bisomo transform-none [opacity:1]"
                            style={
                              {
                                "--extracted-r6o4lv":
                                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-e793i5"
                              style={
                                {
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              See cars
                            </p>
                          </div>
                        </a>
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

function ImportedSectionOneWayRoutes() {
  return (
    <section
      className="framer-14gomjp items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0]"
      id="routes"
    >
      <div className="framer-1pwjeo5 items-start flex-none flex-col flex-nowrap gap-[28px] max-w-[1360px] [place-content:flex-start]">
        <div className="framer-unhf1z items-start flex-none flex-col flex-nowrap gap-[8px] [place-content:flex-start]">
          <div
            className="framer-104n27n [word-break:break-word] transform-none"
            data-framer-component-type="RichTextContainer"
          >
            <h2
              className="framer-text framer-styles-preset-1hwdddd"
              style={{ "--framer-text-alignment": "start" } as CSSProperties}
              dir="auto"
            >
              <span
                className="[opacity:1] transform-none"
                style={{ display: "inline-block" }}
              >
                One-way
              </span>{" "}
              <span
                className="[opacity:1] transform-none"
                style={{ display: "inline-block" }}
              >
                routes
              </span>
            </h2>
          </div>
          <div
            className="framer-16fmb27 [word-break:break-word] will-change-transform [opacity:1] transform-none"
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
              Pick up in one city and leave the car in another. Routes are
              limited to drivable pairs within a country.
            </p>
          </div>
        </div>
        <div className="framer-10kdqib items-start flex-none flex-col flex-nowrap gap-[16px] [place-content:flex-start]">
          <div className="framer-z0tpy7 flex-none gap-[16px] justify-center">
            <div className="ssr-variant">
              <div className="framer-1jclgfo-container flex-none [place-self:start] will-change-transform [opacity:1] transform-none">
                <div
                  className="framer-5njmk framer-iJjgk framer-AAOB7 framer-49ig24 items-start flex-col flex-nowrap gap-[10px] [place-content:flex-start] [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "1px",
                      "--border-color":
                        "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                      "--border-left-width": "1px",
                      "--border-right-width": "1px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      backgroundColor:
                        "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                      width: "100%",
                      borderRadius: "8px",
                    } as CSSProperties
                  }
                  data-border="true"
                >
                  <div className="framer-1r9h7yd items-center flex-none flex-row flex-nowrap gap-[10px] content-center justify-start [opacity:1]">
                    <div
                      className="framer-ueyyse transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                          "--extracted-r6o4lv":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text"
                        style={
                          {
                            "--framer-font-family":
                              '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                            "--framer-font-size": "17px",
                            "--framer-font-variation-axes":
                              'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                            "--framer-letter-spacing": "-0.02em",
                            "--framer-line-height": "1.55em",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Munich
                      </p>
                    </div>
                    <div className="framer-18bgjby-container flex-none [opacity:1]">
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
                        <path d="M7 4.5 4 7.5l3 3M4 7.5h13M17 13.5l3 3-3 3M20 16.5H7" />
                      </svg>
                    </div>
                    <div
                      className="framer-1xg6vyb transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                          "--extracted-r6o4lv":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text"
                        style={
                          {
                            "--framer-font-family":
                              '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                            "--framer-font-size": "17px",
                            "--framer-font-variation-axes":
                              'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                            "--framer-letter-spacing": "-0.02em",
                            "--framer-line-height": "1.55em",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Berlin
                      </p>
                    </div>
                  </div>
                  <div className="framer-ulh73e items-center flex-none flex-row flex-wrap gap-[4px] content-center justify-start [opacity:1]">
                    <div
                      className="framer-88wnvl transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                        Germany · about 585 km ·
                      </p>
                    </div>
                    <div
                      className="framer-18cvxmi transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-9b036bbc-d183-4d65-8024-20a308f60642)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1bwd7xw"
                        style={
                          {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-9b036bbc-d183-4d65-8024-20a308f60642))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        No one-way fee
                      </p>
                    </div>
                  </div>
                  <div className="framer-pb8duw items-start flex-none flex-row flex-wrap gap-[6px] [place-content:flex-start] [opacity:1]">
                    <div className="framer-1nufqs0-container flex-none [opacity:1]">
                      <a
                        className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-8ina4u framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "1px",
                            "--border-color":
                              "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor:
                              "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                            borderRadius: "6px",
                          } as CSSProperties
                        }
                        data-border="true"
                        href="/cars?city=munich"
                        tabIndex={0}
                      >
                        <div
                          className="framer-bisomo transform-none [opacity:1]"
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-e793i5"
                            style={
                              {
                                "--framer-text-alignment": "center",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Munich → Berlin
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="framer-1xgpg2o-container flex-none [opacity:1]">
                      <a
                        className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-8ina4u framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "1px",
                            "--border-color":
                              "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor:
                              "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                            borderRadius: "6px",
                          } as CSSProperties
                        }
                        data-border="true"
                        href="/cars?city=berlin"
                        tabIndex={0}
                      >
                        <div
                          className="framer-bisomo transform-none [opacity:1]"
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-e793i5"
                            style={
                              {
                                "--framer-text-alignment": "center",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Berlin → Munich
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div className="framer-1mlimcr-container flex-none [place-self:start] will-change-transform [opacity:1] transform-none">
                <div
                  className="framer-5njmk framer-iJjgk framer-AAOB7 framer-49ig24 items-start flex-col flex-nowrap gap-[10px] [place-content:flex-start] [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "1px",
                      "--border-color":
                        "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                      "--border-left-width": "1px",
                      "--border-right-width": "1px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      backgroundColor:
                        "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                      width: "100%",
                      borderRadius: "8px",
                    } as CSSProperties
                  }
                  data-border="true"
                >
                  <div className="framer-1r9h7yd items-center flex-none flex-row flex-nowrap gap-[10px] content-center justify-start [opacity:1]">
                    <div
                      className="framer-ueyyse transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                          "--extracted-r6o4lv":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text"
                        style={
                          {
                            "--framer-font-family":
                              '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                            "--framer-font-size": "17px",
                            "--framer-font-variation-axes":
                              'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                            "--framer-letter-spacing": "-0.02em",
                            "--framer-line-height": "1.55em",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Glasgow
                      </p>
                    </div>
                    <div className="framer-18bgjby-container flex-none [opacity:1]">
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
                        <path d="M7 4.5 4 7.5l3 3M4 7.5h13M17 13.5l3 3-3 3M20 16.5H7" />
                      </svg>
                    </div>
                    <div
                      className="framer-1xg6vyb transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                          "--extracted-r6o4lv":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text"
                        style={
                          {
                            "--framer-font-family":
                              '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                            "--framer-font-size": "17px",
                            "--framer-font-variation-axes":
                              'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                            "--framer-letter-spacing": "-0.02em",
                            "--framer-line-height": "1.55em",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Birmingham
                      </p>
                    </div>
                  </div>
                  <div className="framer-ulh73e items-center flex-none flex-row flex-wrap gap-[4px] content-center justify-start [opacity:1]">
                    <div
                      className="framer-88wnvl transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                        United Kingdom · about 470 km ·
                      </p>
                    </div>
                    <div
                      className="framer-18cvxmi transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-9b036bbc-d183-4d65-8024-20a308f60642)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1bwd7xw"
                        style={
                          {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-9b036bbc-d183-4d65-8024-20a308f60642))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        No one-way fee
                      </p>
                    </div>
                  </div>
                  <div className="framer-pb8duw items-start flex-none flex-row flex-wrap gap-[6px] [place-content:flex-start] [opacity:1]">
                    <div className="framer-1nufqs0-container flex-none [opacity:1]">
                      <a
                        className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-8ina4u framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "1px",
                            "--border-color":
                              "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor:
                              "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                            borderRadius: "6px",
                          } as CSSProperties
                        }
                        data-border="true"
                        href="/cars?city=glasgow"
                        tabIndex={0}
                      >
                        <div
                          className="framer-bisomo transform-none [opacity:1]"
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-e793i5"
                            style={
                              {
                                "--framer-text-alignment": "center",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Glasgow → Birmingham
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="framer-1xgpg2o-container flex-none [opacity:1]">
                      <a
                        className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-8ina4u framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "1px",
                            "--border-color":
                              "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor:
                              "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                            borderRadius: "6px",
                          } as CSSProperties
                        }
                        data-border="true"
                        href="/cars?city=birmingham"
                        tabIndex={0}
                      >
                        <div
                          className="framer-bisomo transform-none [opacity:1]"
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-e793i5"
                            style={
                              {
                                "--framer-text-alignment": "center",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Birmingham → Glasgow
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ssr-variant">
              <div className="framer-1qxjpmf-container flex-none [place-self:start] will-change-transform [opacity:1] transform-none">
                <div
                  className="framer-5njmk framer-iJjgk framer-AAOB7 framer-49ig24 items-start flex-col flex-nowrap gap-[10px] [place-content:flex-start] [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "1px",
                      "--border-color":
                        "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                      "--border-left-width": "1px",
                      "--border-right-width": "1px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      backgroundColor:
                        "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                      width: "100%",
                      borderRadius: "8px",
                    } as CSSProperties
                  }
                  data-border="true"
                >
                  <div className="framer-1r9h7yd items-center flex-none flex-row flex-nowrap gap-[10px] content-center justify-start [opacity:1]">
                    <div
                      className="framer-ueyyse transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                          "--extracted-r6o4lv":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text"
                        style={
                          {
                            "--framer-font-family":
                              '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                            "--framer-font-size": "17px",
                            "--framer-font-variation-axes":
                              'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                            "--framer-letter-spacing": "-0.02em",
                            "--framer-line-height": "1.55em",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        New York
                      </p>
                    </div>
                    <div className="framer-18bgjby-container flex-none [opacity:1]">
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
                        <path d="M7 4.5 4 7.5l3 3M4 7.5h13M17 13.5l3 3-3 3M20 16.5H7" />
                      </svg>
                    </div>
                    <div
                      className="framer-1xg6vyb transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-2gg91v": '"opsz" 14, "wght" 700',
                          "--extracted-r6o4lv":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text"
                        style={
                          {
                            "--framer-font-family":
                              '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                            "--framer-font-size": "17px",
                            "--framer-font-variation-axes":
                              'var(--extracted-2gg91v, "opsz" 14, "wght" 700)',
                            "--framer-letter-spacing": "-0.02em",
                            "--framer-line-height": "1.55em",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Los Angeles
                      </p>
                    </div>
                  </div>
                  <div className="framer-ulh73e items-center flex-none flex-row flex-wrap gap-[4px] content-center justify-start [opacity:1]">
                    <div
                      className="framer-88wnvl transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                        United States · about 4,490 km ·
                      </p>
                    </div>
                    <div
                      className="framer-1avslzg transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                        $149 one-way fee
                      </p>
                    </div>
                  </div>
                  <div className="framer-pb8duw items-start flex-none flex-row flex-wrap gap-[6px] [place-content:flex-start] [opacity:1]">
                    <div className="framer-1nufqs0-container flex-none [opacity:1]">
                      <a
                        className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-8ina4u framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "1px",
                            "--border-color":
                              "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor:
                              "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                            borderRadius: "6px",
                          } as CSSProperties
                        }
                        data-border="true"
                        href="/cars?city=new-york"
                        tabIndex={0}
                      >
                        <div
                          className="framer-bisomo transform-none [opacity:1]"
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-e793i5"
                            style={
                              {
                                "--framer-text-alignment": "center",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            New York → Los Angeles
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="framer-1xgpg2o-container flex-none [opacity:1]">
                      <a
                        className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-8ina4u framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "1px",
                            "--border-color":
                              "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor:
                              "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                            borderRadius: "6px",
                          } as CSSProperties
                        }
                        data-border="true"
                        href="/cars?city=los-angeles"
                        tabIndex={0}
                      >
                        <div
                          className="framer-bisomo transform-none [opacity:1]"
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-e793i5"
                            style={
                              {
                                "--framer-text-alignment": "center",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Los Angeles → New York
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-1jr5c6x items-start flex-none flex-row flex-nowrap gap-[10px] [place-content:flex-start] will-change-transform [opacity:1] transform-none">
            <div className="framer-nux9qk items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start]">
              <div className="framer-177falr-container flex-none">
                <svg
                  className="[color:var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)] fill-none [overflow:visible]"
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
                  <path d="M12 11v5M12 8h.01" />
                </svg>
              </div>
            </div>
            <div
              className="framer-hkm2a8 [word-break:break-word] transform-none"
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="framer-text framer-styles-preset-r79ppm"
                style={
                  {
                    "--framer-text-alignment": "start",
                    "--framer-text-color":
                      "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
                  } as CSSProperties
                }
                dir="auto"
              >
                Other one-way pairs, and routes between islands such as Seoul ↔
                Jeju, aren’t possible and are blocked at search.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedFooterDesktop() {
  return (
    <footer
      className="framer-TopBk framer-MCyNe framer-3tJNm framer-iJjgk framer-AAOB7 framer-oX6dW framer-z1mrk"
      style={
        {
          width: "100%",
          transform: "none",
          transformOrigin: "50% 50% 0px",
          opacity: "1",
        } as CSSProperties
      }
    >
      <div
        className="framer-le7h53"
        style={
          {
            backgroundColor:
              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
            borderRadius: "12px",
            transform: "none",
            transformOrigin: "50% 50% 0px",
            opacity: "1",
          } as CSSProperties
        }
      >
        <div
          className="framer-77rohz"
          style={
            {
              transform: "none",
              transformOrigin: "50% 50% 0px",
              opacity: "1",
            } as CSSProperties
          }
        >
          <div
            className="framer-kn31jo"
            style={
              {
                willChange: "transform",
                opacity: "1",
                transform: "none",
                transformOrigin: "50% 50% 0px",
              } as CSSProperties
            }
          >
            <a
              className="framer-184v0vk framer-tt173u"
              style={
                {
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                  opacity: "1",
                } as CSSProperties
              }
              href="/"
            >
              <div
                className="framer-1s68tj1"
                style={
                  {
                    borderRadius: "6px",
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                    opacity: "1",
                  } as CSSProperties
                }
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
                    transformOrigin: "50% 50% 0px",
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
                  data-site-import-responsive="1025"
                >
                  Horizone
                </h3>
              </div>
            </a>
            <div
              className="framer-1sps62b"
              style={
                {
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                  opacity: "1",
                } as CSSProperties
              }
            >
              <div
                className="framer-1t8d2jb"
                style={
                  {
                    "--extracted-r6o4lv":
                      "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
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
                  data-site-import-responsive="1028"
                >
                  Car rental in 14 cities, priced without asterisks. The total
                  you see is the total you pay.
                </p>
              </div>
            </div>
            <div
              className="framer-3lgd4l"
              style={
                {
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                  opacity: "1",
                } as CSSProperties
              }
            >
              <div
                className="framer-s7ay49"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                    opacity: "1",
                  } as CSSProperties
                }
              >
                <div
                  className="framer-1yfzh10-container"
                  style={
                    {
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                      opacity: "1",
                    } as CSSProperties
                  }
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
                      transformOrigin: "50% 50% 0px",
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
                    data-site-import-responsive="1036"
                  >
                    Free cancellation up to 48 h
                  </p>
                </div>
              </div>
              <div
                className="framer-5wx0eb"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                    opacity: "1",
                  } as CSSProperties
                }
              >
                <div
                  className="framer-1k7sg0h-container"
                  style={
                    {
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                      opacity: "1",
                    } as CSSProperties
                  }
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
                      transformOrigin: "50% 50% 0px",
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
                    data-site-import-responsive="1045"
                  >
                    24/7 roadside support
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="framer-12xcplr"
            style={
              {
                willChange: "transform",
                opacity: "1",
                transform: "none",
                transformOrigin: "50% 50% 0px",
              } as CSSProperties
            }
          >
            <div
              className="framer-1bzlm27"
              style={
                {
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                  opacity: "1",
                } as CSSProperties
              }
            >
              <div
                className="framer-gnavnz"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                    opacity: "1",
                  } as CSSProperties
                }
              >
                <div
                  className="framer-162z8u3"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
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
                    data-site-import-responsive="1050"
                  >
                    Rent
                  </p>
                </div>
              </div>
              <div
                className="framer-xvjqrk-container"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                    opacity: "1",
                  } as CSSProperties
                }
              >
                <a
                  className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
                  style={
                    {
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                      opacity: "1",
                    } as CSSProperties
                  }
                  href="/cars"
                >
                  <div
                    className="framer-1onkx82"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
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
              <div
                className="framer-1hks5fn-container"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                    opacity: "1",
                  } as CSSProperties
                }
              >
                <a
                  className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
                  style={
                    {
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                      opacity: "1",
                    } as CSSProperties
                  }
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
                        transformOrigin: "50% 50% 0px",
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
              <div
                className="framer-z8pfj4-container"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                    opacity: "1",
                  } as CSSProperties
                }
              >
                <a
                  className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
                  style={
                    {
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                      opacity: "1",
                    } as CSSProperties
                  }
                  href="/deals"
                >
                  <div
                    className="framer-1onkx82"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
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
              <div
                className="framer-1c58195-container"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                    opacity: "1",
                  } as CSSProperties
                }
              >
                <a
                  className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
                  style={
                    {
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                      opacity: "1",
                    } as CSSProperties
                  }
                  href="#routes"
                >
                  <div
                    className="framer-1onkx82"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
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
            <div
              className="framer-kmyqsh"
              style={
                {
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                  opacity: "1",
                } as CSSProperties
              }
            >
              <div
                className="framer-14t2n5c"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                    opacity: "1",
                  } as CSSProperties
                }
              >
                <div
                  className="framer-k9wt3x"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
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
                    data-site-import-responsive="1070"
                  >
                    Company
                  </p>
                </div>
              </div>
              <div
                className="framer-1pkt1sn-container"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                    opacity: "1",
                  } as CSSProperties
                }
              >
                <a
                  className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
                  style={
                    {
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                      opacity: "1",
                    } as CSSProperties
                  }
                  href="/about"
                >
                  <div
                    className="framer-1onkx82"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
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
              <div
                className="framer-1k2rbk0-container"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                    opacity: "1",
                  } as CSSProperties
                }
              >
                <a
                  className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
                  style={
                    {
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                      opacity: "1",
                    } as CSSProperties
                  }
                  href="/about#careers"
                >
                  <div
                    className="framer-1onkx82"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
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
              <div
                className="framer-l7t01t-container"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                    opacity: "1",
                  } as CSSProperties
                }
              >
                <a
                  className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
                  style={
                    {
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                      opacity: "1",
                    } as CSSProperties
                  }
                  href="/about#values"
                >
                  <div
                    className="framer-1onkx82"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
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
            <div
              className="framer-1laknkj"
              style={
                {
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                  opacity: "1",
                } as CSSProperties
              }
            >
              <div
                className="framer-9j0mqa"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                    opacity: "1",
                  } as CSSProperties
                }
              >
                <div
                  className="framer-1o9sfnm"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
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
                    data-site-import-responsive="1086"
                  >
                    Support
                  </p>
                </div>
              </div>
              <div
                className="framer-1f0jrx3-container"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                    opacity: "1",
                  } as CSSProperties
                }
              >
                <a
                  className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
                  style={
                    {
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                      opacity: "1",
                    } as CSSProperties
                  }
                  href="/help"
                >
                  <div
                    className="framer-1onkx82"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
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
              <div
                className="framer-2wam1c-container"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                    opacity: "1",
                  } as CSSProperties
                }
              >
                <a
                  className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
                  style={
                    {
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                      opacity: "1",
                    } as CSSProperties
                  }
                  href="/help#contact"
                >
                  <div
                    className="framer-1onkx82"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
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
              <div
                className="framer-osxw3n-container"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                    opacity: "1",
                  } as CSSProperties
                }
              >
                <a
                  className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
                  style={
                    {
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                      opacity: "1",
                    } as CSSProperties
                  }
                  href="/help#contact"
                >
                  <div
                    className="framer-1onkx82"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
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
              <div
                className="framer-1nzi27q-container"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                    opacity: "1",
                  } as CSSProperties
                }
              >
                <a
                  className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
                  style={
                    {
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                      opacity: "1",
                    } as CSSProperties
                  }
                  href="/legal#terms"
                >
                  <div
                    className="framer-1onkx82"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
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
            <div
              className="framer-m68j7r"
              style={
                {
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                  opacity: "1",
                } as CSSProperties
              }
            >
              <div
                className="framer-iwkklt"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                    opacity: "1",
                  } as CSSProperties
                }
              >
                <div
                  className="framer-1o3x7xw"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
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
                    data-site-import-responsive="1106"
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
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
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
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
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
                  style={
                    {
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                      opacity: "1",
                    } as CSSProperties
                  }
                >
                  <button
                    className="framer-iy0La framer-40PBB framer-1wcq747"
                    style={
                      {
                        backgroundColor:
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                        borderRadius: "4px",
                        opacity: "1",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                      } as CSSProperties
                    }
                    type="submit"
                    data-reset="button"
                  >
                    <div
                      className="framer-9payf7"
                      style={
                        {
                          transform: "none",
                          transformOrigin: "50% 50% 0px",
                          opacity: "1",
                        } as CSSProperties
                      }
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
                    transformOrigin: "50% 50% 0px",
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
                  data-site-import-responsive="1126"
                >
                  Route ideas and price drops. Two emails a month, no more.
                </p>
              </div>
              <div
                className="framer-1qiq450"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                    opacity: "1",
                  } as CSSProperties
                }
              >
                <div
                  className="framer-vdjghs"
                  style={
                    {
                      backgroundColor:
                        "var(--token-5d9b0fc5-b296-4760-8c5b-1739145ad88b)",
                      borderRadius: "999px",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                      opacity: "1",
                    } as CSSProperties
                  }
                >
                  <div
                    className="framer-ju13ui-container"
                    style={
                      {
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                        opacity: "1",
                      } as CSSProperties
                    }
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
                  style={
                    {
                      backgroundColor:
                        "var(--token-5d9b0fc5-b296-4760-8c5b-1739145ad88b)",
                      borderRadius: "999px",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                      opacity: "1",
                    } as CSSProperties
                  }
                >
                  <div
                    className="framer-1dpn10r-container"
                    style={
                      {
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                        opacity: "1",
                      } as CSSProperties
                    }
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
                  style={
                    {
                      backgroundColor:
                        "var(--token-5d9b0fc5-b296-4760-8c5b-1739145ad88b)",
                      borderRadius: "999px",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                      opacity: "1",
                    } as CSSProperties
                  }
                >
                  <div
                    className="framer-1e76nhy-container"
                    style={
                      {
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                        opacity: "1",
                      } as CSSProperties
                    }
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
                  style={
                    {
                      backgroundColor:
                        "var(--token-5d9b0fc5-b296-4760-8c5b-1739145ad88b)",
                      borderRadius: "999px",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                      opacity: "1",
                    } as CSSProperties
                  }
                >
                  <div
                    className="framer-1c8h20s-container"
                    style={
                      {
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                        opacity: "1",
                      } as CSSProperties
                    }
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
                  style={
                    {
                      backgroundColor:
                        "var(--token-5d9b0fc5-b296-4760-8c5b-1739145ad88b)",
                      borderRadius: "999px",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                      opacity: "1",
                    } as CSSProperties
                  }
                >
                  <div
                    className="framer-w2wle-container"
                    style={
                      {
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                        opacity: "1",
                      } as CSSProperties
                    }
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
              transformOrigin: "50% 50% 0px",
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
                transformOrigin: "50% 50% 0px",
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
              data-site-import-responsive="1154"
            >
              © 2026 Horizone Car Rental
            </p>
          </div>
          <nav
            className="framer-wwbz35"
            style={
              {
                transform: "none",
                transformOrigin: "50% 50% 0px",
                opacity: "1",
              } as CSSProperties
            }
          >
            <div
              className="framer-jg223-container"
              style={
                {
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                  opacity: "1",
                } as CSSProperties
              }
            >
              <a
                className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                    opacity: "1",
                  } as CSSProperties
                }
                href="/legal#privacy"
              >
                <div
                  className="framer-1onkx82"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
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
            <div
              className="framer-18kz641-container"
              style={
                {
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                  opacity: "1",
                } as CSSProperties
              }
            >
              <a
                className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                    opacity: "1",
                  } as CSSProperties
                }
                href="/legal#terms"
              >
                <div
                  className="framer-1onkx82"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
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
            <div
              className="framer-95gw16-container"
              style={
                {
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                  opacity: "1",
                } as CSSProperties
              }
            >
              <a
                className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                    opacity: "1",
                  } as CSSProperties
                }
                href="/legal#cookies"
              >
                <div
                  className="framer-1onkx82"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
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
            <div
              className="framer-iaw1ly-container"
              style={
                {
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                  opacity: "1",
                } as CSSProperties
              }
            >
              <a
                className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                    opacity: "1",
                  } as CSSProperties
                }
                href="/legal#cookies"
              >
                <div
                  className="framer-1onkx82"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
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
    </footer>
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

function useImportedLayout() {
  useEffect(() => {
    const scrollingAreas = Array.from(
      document.querySelectorAll<HTMLElement>("[data-site-import-scroll-root]"),
    );
    const scrollTop = () =>
      scrollingAreas.find(
        (node) =>
          node.clientHeight > 0 &&
          node.scrollHeight > node.clientHeight &&
          /^(auto|scroll)$/.test(getComputedStyle(node).overflowY),
      )?.scrollTop ?? window.scrollY;
    const scrollHeaders = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-site-import-scroll-header]",
      ),
    )
      .slice(0, 128)
      .flatMap((node) => {
        try {
          const states = JSON.parse(
            node.dataset["siteImportScrollHeader"] || "{}",
          );
          if (!states || typeof states !== "object") return [];
          for (const key of ["desktop", "mobile"]) {
            const state = states[key];
            if (
              !state ||
              !Array.isArray(state.added) ||
              !Array.isArray(state.removed) ||
              state.added.length + state.removed.length > 32
            )
              delete states[key];
          }
          return [
            {
              node,
              states,
              original: new Set(node.classList),
              originalFill: node.getAttribute("fill"),
              transform: node.style.getPropertyValue("transform"),
              priority: node.style.getPropertyPriority("transform"),
            },
          ];
        } catch {
          return [];
        }
      });
    function syncScrollHeaders(reset = false) {
      for (const {
        node,
        states,
        original,
        originalFill,
        transform,
        priority,
      } of scrollHeaders) {
        if (!reset && node.getAttribute("data-import-menu-open") === "true")
          continue;
        const state = states[innerWidth < 768 ? "mobile" : "desktop"];
        if (
          [states.desktop, states.mobile].some(
            (entry) => entry && Object.hasOwn(entry, "fill"),
          )
        ) {
          if (originalFill === null) node.removeAttribute("fill");
          else node.setAttribute("fill", originalFill);
        }
        if (states.desktop?.transform || states.mobile?.transform) {
          if (transform)
            node.style.setProperty("transform", transform, priority);
          else node.style.removeProperty("transform");
        }
        for (const value of [states.desktop, states.mobile].filter(Boolean) as {
          added: string[];
          removed: string[];
        }[]) {
          for (const token of [
            ...(value.added || []),
            ...(value.removed || []),
          ]) {
            if (typeof token !== "string" || !token || /\s/.test(token))
              continue;
            node.classList.toggle(token, original.has(token));
          }
        }
        if (
          reset ||
          !state ||
          !Number.isFinite(state.threshold) ||
          scrollTop() < state.threshold
        )
          continue;
        let until = state.until;
        if (
          typeof state.untilAnchor === "string" &&
          /^\d$/.test(state.untilAnchor) &&
          Number.isFinite(state.untilProgress) &&
          Math.abs(state.untilProgress) <= 2
        ) {
          const anchor = document.querySelector<HTMLElement>(
            '[data-site-import-header-end="' + state.untilAnchor + '"]',
          );
          if (anchor)
            until =
              anchor.getBoundingClientRect().top +
              scrollTop() +
              innerHeight * state.untilProgress;
        }
        if (Number.isFinite(until) && scrollTop() >= until) continue;
        if (state.fill === null) node.removeAttribute("fill");
        else if (
          typeof state.fill === "string" &&
          state.fill.length <= 256 &&
          !/url\(/i.test(state.fill)
        )
          node.setAttribute("fill", state.fill);
        if (
          typeof state.transform === "string" &&
          state.transform.length <= 128 &&
          CSS.supports("transform", state.transform)
        )
          node.style.setProperty("transform", state.transform, "important");
        for (const token of state.added || [])
          if (typeof token === "string" && token && !/\s/.test(token))
            node.classList.add(token);
        for (const token of state.removed || [])
          if (typeof token === "string" && token && !/\s/.test(token))
            node.classList.remove(token);
      }
    }
    const handleScroll = () => {
      syncScrollHeaders();
    };
    function resizeSummaries() {
      syncScrollHeaders();
    }
    document.addEventListener("load", handleScroll, true);
    resizeSummaries();
    const parallaxFrame = requestAnimationFrame(handleScroll);
    window.addEventListener("resize", resizeSummaries);
    document.addEventListener("scroll", handleScroll, {
      passive: true,
      capture: true,
    });
    return () => {
      cancelAnimationFrame(parallaxFrame);
      syncScrollHeaders(true);
      document.removeEventListener("load", handleScroll, true);
      window.removeEventListener("resize", resizeSummaries);
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, []);
}

function subscribeMobile(onChange: () => void) {
  window.addEventListener("resize", onChange);
  return () => window.removeEventListener("resize", onChange);
}
