import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { useSyncExternalStore } from "react";
import capturedCSS from "../styles/pages/index.css?raw";
import { createFileRoute } from "@tanstack/react-router";
import { SiteImportMobileNav } from "../components/site-import-mobile.nav";
import { SearchForm } from "../components/home/SearchForm";
import {
  SearchOptions,
  type DriveMode,
} from "../components/home/SearchOptions";
import { Navbar } from "../components/layout/Navbar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Horizone · Rent a Car for Every Journey" },
      {
        name: "description",
        content:
          "Compare rental cars, find the right city pick-up, and plan your next journey with Horizone.",
      },
      {
        property: "og:title",
        content: "Horizone · Rent a Car for Every Journey",
      },
      {
        property: "og:description",
        content:
          "Compare rental cars, find the right city pick-up, and plan your next journey with Horizone.",
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
            className="framer-Dye52 framer-oX6dW framer-Xf4AC framer-1zOQh framer-iJjgk framer-qO70Z framer-71sfr framer-gv8rH framer-ZWJIr framer-eD38T framer-3tJNm framer-72rtr7 items-center flex-col flex-nowrap content-center justify-start [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [min-height:100vh]"
            style={{ width: "auto", display: "contents" }}
          >
            <ImportedSectionHero />
            <ImportedSectionFleet />
            <ImportedSectionCategories />
            <section className="framer-gndht5 items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0]">
              <div className="framer-lx81yk items-start flex-none flex-col flex-nowrap max-w-[1360px] [place-content:flex-start]">
                <div className="framer-58k1nz items-start flex-none flex-col flex-nowrap gap-[8px] [place-content:flex-start]">
                  <div
                    className="framer-ttu0p5 [@media(max-width:680.98px)]:[word-break:break-word] [@media(min-width:681px)_and_(max-width:1199.98px)]:[word-break:break-word]"
                    style={{ transform: "none" }}
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
                        className="[opacity:1]"
                        style={{ display: "inline-block", transform: "none" }}
                      >
                        Three
                      </span>{" "}
                      <span
                        className="[opacity:1]"
                        style={{ display: "inline-block", transform: "none" }}
                      >
                        steps
                      </span>{" "}
                      <span
                        className="[opacity:1]"
                        style={{ display: "inline-block", transform: "none" }}
                      >
                        to
                      </span>{" "}
                      <span
                        className="[opacity:1]"
                        style={{ display: "inline-block", transform: "none" }}
                      >
                        the
                      </span>{" "}
                      <span
                        className="[opacity:1]"
                        style={{ display: "inline-block", transform: "none" }}
                      >
                        keys
                      </span>
                    </h2>
                  </div>
                  <div
                    className="framer-11djfyz [@media(max-width:680.98px)]:max-w-[520px] [@media(max-width:680.98px)]:[word-break:break-word] [@media(min-width:681px)_and_(max-width:1199.98px)]:max-w-[520px] [@media(min-width:681px)_and_(max-width:1199.98px)]:[word-break:break-word] will-change-transform opacity-[0.973702]"
                    style={{ transform: "none" }}
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-nsw7a4"
                      style={
                        { "--framer-text-alignment": "start" } as CSSProperties
                      }
                      dir="auto"
                    >
                      Booking takes about two minutes. Cancelling takes one
                      click.
                    </p>
                  </div>
                </div>
                <div
                  className="framer-1f0ilxk flex-none justify-center will-change-transform [opacity:1]"
                  style={{ transform: "none" }}
                >
                  <div className="ssr-variant">
                    <div
                      className="framer-1v9esd2-container flex-none [place-self:start] will-change-transform [opacity:1]"
                      style={{ transform: "none" }}
                      data-site-import-desktop-variant=""
                    >
                      <div
                        style={
                          {
                            "--border-bottom-width": "0px",
                            "--border-color":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                            "--border-left-width": "0px",
                            "--border-right-width": "0px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            width: "100%",
                            opacity: "1",
                          } as CSSProperties
                        }
                        className={
                          isMobile
                            ? "framer-nO2Ft framer-AAOB7 framer-3tJNm framer-5fbwb5 framer-v-1gufb00"
                            : "framer-nO2Ft framer-AAOB7 framer-3tJNm framer-5fbwb5"
                        }
                        data-border="true"
                        data-site-import-responsive="521"
                      >
                        <div
                          className="framer-1w7cz83"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                                  "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            01
                          </p>
                        </div>
                        <div className="framer-emwf6z" style={{ opacity: "1" }}>
                          <div
                            className="framer-1y4o5ya"
                            style={
                              {
                                "--extracted-a0htzi":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                                "--extracted-zfisys": '"opsz" 14, "wght" 600',
                                transform: "none",
                                opacity: "1",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text"
                              style={
                                {
                                  "--font-selector":
                                    "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOakF3",
                                  "--framer-font-family":
                                    '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                  "--framer-font-size": "17px",
                                  "--framer-font-variation-axes":
                                    'var(--extracted-zfisys, "opsz" 14, "wght" 600)',
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "1.55em",
                                  "--framer-text-color":
                                    "var(--extracted-a0htzi, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Tell us where and when
                            </h3>
                          </div>
                        </div>
                        <div
                          className="framer-1uo1soi"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                                  "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Pick a city, airport or station, set your dates, and
                            choose whether you want a driver included.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="framer-1v9esd2-container flex-none [place-self:start] will-change-transform [opacity:1]"
                      style={
                        {
                          transform: "none",
                          "--site-import-responsive-display": "block",
                        } as CSSProperties
                      }
                      data-site-import-mobile-variant=""
                    >
                      <div
                        className="framer-nO2Ft framer-AAOB7 framer-3tJNm framer-5fbwb5 framer-v-1gufb00 [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "0px",
                            "--border-color":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                            "--border-left-width": "0px",
                            "--border-right-width": "0px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            width: "100%",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div
                          className="framer-1w7cz83 [opacity:1]"
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
                            className="framer-text framer-styles-preset-1bwd7xw"
                            style={
                              {
                                "--framer-text-alignment": "start",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            01
                          </p>
                        </div>
                        <div className="framer-emwf6z [opacity:1]">
                          <div
                            className="framer-1y4o5ya [opacity:1]"
                            style={
                              {
                                "--extracted-a0htzi":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                                "--extracted-zfisys": '"opsz" 14, "wght" 600',
                                transform: "none",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text"
                              style={
                                {
                                  "--font-selector":
                                    "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOakF3",
                                  "--framer-font-family":
                                    '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                  "--framer-font-size": "17px",
                                  "--framer-font-variation-axes":
                                    'var(--extracted-zfisys, "opsz" 14, "wght" 600)',
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "1.55em",
                                  "--framer-text-color":
                                    "var(--extracted-a0htzi, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Tell us where and when
                            </h3>
                          </div>
                        </div>
                        <div
                          className="framer-1uo1soi [opacity:1]"
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
                                "--framer-text-alignment": "start",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Pick a city, airport or station, set your dates, and
                            choose whether you want a driver included.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ssr-variant">
                    <div
                      className="framer-1tp4z8g-container flex-none [place-self:start] will-change-transform [opacity:1]"
                      style={{ transform: "none" }}
                      data-site-import-desktop-variant=""
                    >
                      <div
                        style={
                          {
                            "--border-bottom-width": "0px",
                            "--border-color":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                            "--border-left-width": "0px",
                            "--border-right-width": "0px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            width: "100%",
                            opacity: "1",
                          } as CSSProperties
                        }
                        className={
                          isMobile
                            ? "framer-nO2Ft framer-AAOB7 framer-3tJNm framer-5fbwb5 framer-v-1gufb00"
                            : "framer-nO2Ft framer-AAOB7 framer-3tJNm framer-5fbwb5"
                        }
                        data-border="true"
                        data-site-import-responsive="530"
                      >
                        <div
                          className="framer-1w7cz83"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                                  "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            02
                          </p>
                        </div>
                        <div className="framer-emwf6z" style={{ opacity: "1" }}>
                          <div
                            className="framer-1y4o5ya"
                            style={
                              {
                                "--extracted-a0htzi":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                                "--extracted-zfisys": '"opsz" 14, "wght" 600',
                                transform: "none",
                                opacity: "1",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text"
                              style={
                                {
                                  "--font-selector":
                                    "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOakF3",
                                  "--framer-font-family":
                                    '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                  "--framer-font-size": "17px",
                                  "--framer-font-variation-axes":
                                    'var(--extracted-zfisys, "opsz" 14, "wght" 600)',
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "1.55em",
                                  "--framer-text-color":
                                    "var(--extracted-a0htzi, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Compare the real price
                            </h3>
                          </div>
                        </div>
                        <div
                          className="framer-1uo1soi"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                                  "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Every quote shows protection, fees and taxes up
                            front. The total at checkout is the total on your
                            card.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="framer-1tp4z8g-container flex-none [place-self:start] will-change-transform [opacity:1]"
                      style={
                        {
                          transform: "none",
                          "--site-import-responsive-display": "block",
                        } as CSSProperties
                      }
                      data-site-import-mobile-variant=""
                    >
                      <div
                        className="framer-nO2Ft framer-AAOB7 framer-3tJNm framer-5fbwb5 framer-v-1gufb00 [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "0px",
                            "--border-color":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                            "--border-left-width": "0px",
                            "--border-right-width": "0px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            width: "100%",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div
                          className="framer-1w7cz83 [opacity:1]"
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
                            className="framer-text framer-styles-preset-1bwd7xw"
                            style={
                              {
                                "--framer-text-alignment": "start",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            02
                          </p>
                        </div>
                        <div className="framer-emwf6z [opacity:1]">
                          <div
                            className="framer-1y4o5ya [opacity:1]"
                            style={
                              {
                                "--extracted-a0htzi":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                                "--extracted-zfisys": '"opsz" 14, "wght" 600',
                                transform: "none",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text"
                              style={
                                {
                                  "--font-selector":
                                    "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOakF3",
                                  "--framer-font-family":
                                    '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                  "--framer-font-size": "17px",
                                  "--framer-font-variation-axes":
                                    'var(--extracted-zfisys, "opsz" 14, "wght" 600)',
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "1.55em",
                                  "--framer-text-color":
                                    "var(--extracted-a0htzi, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Compare the real price
                            </h3>
                          </div>
                        </div>
                        <div
                          className="framer-1uo1soi [opacity:1]"
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
                                "--framer-text-alignment": "start",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Every quote shows protection, fees and taxes up
                            front. The total at checkout is the total on your
                            card.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ssr-variant">
                    <div
                      className="framer-et7j2k-container flex-none [place-self:start] will-change-transform [opacity:1]"
                      style={{ transform: "none" }}
                      data-site-import-desktop-variant=""
                    >
                      <div
                        style={
                          {
                            "--border-bottom-width": "0px",
                            "--border-color":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                            "--border-left-width": "0px",
                            "--border-right-width": "0px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            width: "100%",
                            opacity: "1",
                          } as CSSProperties
                        }
                        className={
                          isMobile
                            ? "framer-nO2Ft framer-AAOB7 framer-3tJNm framer-5fbwb5 framer-v-1gufb00"
                            : "framer-nO2Ft framer-AAOB7 framer-3tJNm framer-5fbwb5"
                        }
                        data-border="true"
                        data-site-import-responsive="539"
                      >
                        <div
                          className="framer-1w7cz83"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                                  "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            03
                          </p>
                        </div>
                        <div className="framer-emwf6z" style={{ opacity: "1" }}>
                          <div
                            className="framer-1y4o5ya"
                            style={
                              {
                                "--extracted-a0htzi":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                                "--extracted-zfisys": '"opsz" 14, "wght" 600',
                                transform: "none",
                                opacity: "1",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text"
                              style={
                                {
                                  "--font-selector":
                                    "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOakF3",
                                  "--framer-font-family":
                                    '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                  "--framer-font-size": "17px",
                                  "--framer-font-variation-axes":
                                    'var(--extracted-zfisys, "opsz" 14, "wght" 600)',
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "1.55em",
                                  "--framer-text-color":
                                    "var(--extracted-a0htzi, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Confirm and drive
                            </h3>
                          </div>
                        </div>
                        <div
                          className="framer-1uo1soi"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                                  "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Collect the keys with your booking reference, or add
                            your flight and we’ll hold the car if you land late.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="framer-et7j2k-container flex-none [place-self:start] will-change-transform [opacity:1]"
                      style={
                        {
                          transform: "none",
                          "--site-import-responsive-display": "block",
                        } as CSSProperties
                      }
                      data-site-import-mobile-variant=""
                    >
                      <div
                        className="framer-nO2Ft framer-AAOB7 framer-3tJNm framer-5fbwb5 framer-v-1gufb00 [opacity:1]"
                        style={
                          {
                            "--border-bottom-width": "0px",
                            "--border-color":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                            "--border-left-width": "0px",
                            "--border-right-width": "0px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            width: "100%",
                          } as CSSProperties
                        }
                        data-border="true"
                      >
                        <div
                          className="framer-1w7cz83 [opacity:1]"
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
                            className="framer-text framer-styles-preset-1bwd7xw"
                            style={
                              {
                                "--framer-text-alignment": "start",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            03
                          </p>
                        </div>
                        <div className="framer-emwf6z [opacity:1]">
                          <div
                            className="framer-1y4o5ya [opacity:1]"
                            style={
                              {
                                "--extracted-a0htzi":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                                "--extracted-zfisys": '"opsz" 14, "wght" 600',
                                transform: "none",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text"
                              style={
                                {
                                  "--font-selector":
                                    "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOakF3",
                                  "--framer-font-family":
                                    '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                  "--framer-font-size": "17px",
                                  "--framer-font-variation-axes":
                                    'var(--extracted-zfisys, "opsz" 14, "wght" 600)',
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "1.55em",
                                  "--framer-text-color":
                                    "var(--extracted-a0htzi, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Confirm and drive
                            </h3>
                          </div>
                        </div>
                        <div
                          className="framer-1uo1soi [opacity:1]"
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
                                "--framer-text-alignment": "start",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Collect the keys with your booking reference, or add
                            your flight and we’ll hold the car if you land late.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <ImportedSectionLocations />
            <ImportedSectionDeals />
            <ImportedSectionLogos />
            <section
              className="framer-l68s8e items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0]"
              id="why"
            >
              <div className="framer-16u68xk items-start max-w-[1360px] [place-content:flex-start]">
                <div className="framer-j90shx items-start [gap:0] [place-content:flex-start]">
                  <div
                    className="framer-1d4l0dd [word-break:break-word]"
                    style={{ transform: "none" }}
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
                        className="[opacity:1]"
                        style={{ display: "inline-block", transform: "none" }}
                      >
                        The
                      </span>{" "}
                      <span
                        className="[opacity:1]"
                        style={{ display: "inline-block", transform: "none" }}
                      >
                        boring
                      </span>{" "}
                      <span
                        className="[opacity:1]"
                        style={{ display: "inline-block", transform: "none" }}
                      >
                        parts,
                      </span>{" "}
                      <span
                        className="[opacity:1]"
                        style={{ display: "inline-block", transform: "none" }}
                      >
                        handled
                      </span>
                    </h2>
                  </div>
                  <div className="framer-qsdfp1 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start]">
                    <div
                      className="framer-hrj9be max-w-[520px] [word-break:break-word]"
                      style={{ transform: "none" }}
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-nsw7a4"
                        dir="auto"
                      >
                        Horizone works with 1,400 vetted local suppliers, so the
                        small print reads the same in every city you land in.
                      </p>
                    </div>
                  </div>
                  <div
                    className="framer-5izdfh items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start]"
                    data-border="true"
                  >
                    <div className="ssr-variant">
                      <div
                        className="framer-196duyg-container flex-none will-change-transform opacity-[0.985733]"
                        style={{ transform: "none" }}
                        data-site-import-desktop-variant=""
                      >
                        <div
                          style={
                            {
                              "--border-bottom-width": "0px",
                              "--border-color":
                                "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                              "--border-left-width": "0px",
                              "--border-right-width": "0px",
                              "--border-style": "solid",
                              "--border-top-width": "1px",
                              width: "100%",
                              opacity: "1",
                            } as CSSProperties
                          }
                          className={
                            isMobile
                              ? "framer-wREIW framer-3tJNm framer-16kyuut framer-v-t78aga"
                              : "framer-wREIW framer-3tJNm framer-16kyuut"
                          }
                          data-border="true"
                          data-site-import-responsive="884"
                        >
                          <div
                            className="framer-1k41xnu"
                            style={
                              {
                                "--extracted-1eung3n":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                                "--extracted-1r4zm10": '"opsz" 14, "wght" 600',
                                transform: "none",
                                opacity: "1",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <h4
                              className="framer-text"
                              style={
                                {
                                  "--font-selector":
                                    "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOakF3",
                                  "--framer-font-family":
                                    '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                  "--framer-font-size": "15px",
                                  "--framer-font-variation-axes":
                                    'var(--extracted-1r4zm10, "opsz" 14, "wght" 600)',
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "1.55em",
                                  "--framer-text-color":
                                    "var(--extracted-1eung3n, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                              aria-level={3}
                            >
                              Free cancellation
                            </h4>
                          </div>
                          <div
                            className="framer-1r2401r"
                            style={{ transform: "none", opacity: "1" }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1e1duze"
                              style={
                                {
                                  "--framer-text-alignment": "start",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Cancel up to 48 hours before pick-up and get every
                              cent back.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="framer-196duyg-container flex-none will-change-transform [opacity:1]"
                        style={
                          {
                            transform: "none",
                            "--site-import-responsive-display": "block",
                          } as CSSProperties
                        }
                        data-site-import-mobile-variant=""
                      >
                        <div
                          className="framer-wREIW framer-3tJNm framer-16kyuut framer-v-t78aga [opacity:1]"
                          style={
                            {
                              "--border-bottom-width": "0px",
                              "--border-color":
                                "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                              "--border-left-width": "0px",
                              "--border-right-width": "0px",
                              "--border-style": "solid",
                              "--border-top-width": "1px",
                              width: "100%",
                            } as CSSProperties
                          }
                          data-border="true"
                        >
                          <div
                            className="framer-1k41xnu [opacity:1]"
                            style={
                              {
                                "--extracted-1eung3n":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                                "--extracted-1r4zm10": '"opsz" 14, "wght" 600',
                                transform: "none",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <h4
                              className="framer-text"
                              style={
                                {
                                  "--font-selector":
                                    "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOakF3",
                                  "--framer-font-family":
                                    '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                  "--framer-font-size": "15px",
                                  "--framer-font-variation-axes":
                                    'var(--extracted-1r4zm10, "opsz" 14, "wght" 600)',
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "1.55em",
                                  "--framer-text-color":
                                    "var(--extracted-1eung3n, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                              aria-level={3}
                            >
                              Free cancellation
                            </h4>
                          </div>
                          <div
                            className="framer-1r2401r [opacity:1]"
                            style={{ transform: "none" }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1e1duze"
                              style={
                                {
                                  "--framer-text-alignment": "start",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Cancel up to 48 hours before pick-up and get every
                              cent back.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ssr-variant">
                      <div
                        className="framer-eumr9e-container flex-none will-change-transform opacity-[0.973298]"
                        style={{ transform: "none" }}
                        data-site-import-desktop-variant=""
                      >
                        <div
                          style={
                            {
                              "--border-bottom-width": "0px",
                              "--border-color":
                                "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                              "--border-left-width": "0px",
                              "--border-right-width": "0px",
                              "--border-style": "solid",
                              "--border-top-width": "1px",
                              width: "100%",
                              opacity: "1",
                            } as CSSProperties
                          }
                          className={
                            isMobile
                              ? "framer-wREIW framer-3tJNm framer-16kyuut framer-v-t78aga"
                              : "framer-wREIW framer-3tJNm framer-16kyuut"
                          }
                          data-border="true"
                          data-site-import-responsive="890"
                        >
                          <div
                            className="framer-1k41xnu"
                            style={
                              {
                                "--extracted-1eung3n":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                                "--extracted-1r4zm10": '"opsz" 14, "wght" 600',
                                transform: "none",
                                opacity: "1",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <h4
                              className="framer-text"
                              style={
                                {
                                  "--font-selector":
                                    "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOakF3",
                                  "--framer-font-family":
                                    '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                  "--framer-font-size": "15px",
                                  "--framer-font-variation-axes":
                                    'var(--extracted-1r4zm10, "opsz" 14, "wght" 600)',
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "1.55em",
                                  "--framer-text-color":
                                    "var(--extracted-1eung3n, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                              aria-level={3}
                            >
                              No hidden fees
                            </h4>
                          </div>
                          <div
                            className="framer-1r2401r"
                            style={{ transform: "none", opacity: "1" }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1e1duze"
                              style={
                                {
                                  "--framer-text-alignment": "start",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Taxes, young-driver charges and airport surcharges
                              are in the first price you see.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="framer-eumr9e-container flex-none will-change-transform [opacity:1]"
                        style={
                          {
                            transform: "none",
                            "--site-import-responsive-display": "block",
                          } as CSSProperties
                        }
                        data-site-import-mobile-variant=""
                      >
                        <div
                          className="framer-wREIW framer-3tJNm framer-16kyuut framer-v-t78aga [opacity:1]"
                          style={
                            {
                              "--border-bottom-width": "0px",
                              "--border-color":
                                "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                              "--border-left-width": "0px",
                              "--border-right-width": "0px",
                              "--border-style": "solid",
                              "--border-top-width": "1px",
                              width: "100%",
                            } as CSSProperties
                          }
                          data-border="true"
                        >
                          <div
                            className="framer-1k41xnu [opacity:1]"
                            style={
                              {
                                "--extracted-1eung3n":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                                "--extracted-1r4zm10": '"opsz" 14, "wght" 600',
                                transform: "none",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <h4
                              className="framer-text"
                              style={
                                {
                                  "--font-selector":
                                    "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOakF3",
                                  "--framer-font-family":
                                    '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                  "--framer-font-size": "15px",
                                  "--framer-font-variation-axes":
                                    'var(--extracted-1r4zm10, "opsz" 14, "wght" 600)',
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "1.55em",
                                  "--framer-text-color":
                                    "var(--extracted-1eung3n, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                              aria-level={3}
                            >
                              No hidden fees
                            </h4>
                          </div>
                          <div
                            className="framer-1r2401r [opacity:1]"
                            style={{ transform: "none" }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1e1duze"
                              style={
                                {
                                  "--framer-text-alignment": "start",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Taxes, young-driver charges and airport surcharges
                              are in the first price you see.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ssr-variant">
                      <div
                        className="framer-12tmxom-container flex-none will-change-transform [opacity:1]"
                        style={{ transform: "none" }}
                        data-site-import-desktop-variant=""
                      >
                        <div
                          style={
                            {
                              "--border-bottom-width": "0px",
                              "--border-color":
                                "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                              "--border-left-width": "0px",
                              "--border-right-width": "0px",
                              "--border-style": "solid",
                              "--border-top-width": "1px",
                              width: "100%",
                              opacity: "1",
                            } as CSSProperties
                          }
                          className={
                            isMobile
                              ? "framer-wREIW framer-3tJNm framer-16kyuut framer-v-t78aga"
                              : "framer-wREIW framer-3tJNm framer-16kyuut"
                          }
                          data-border="true"
                          data-site-import-responsive="896"
                        >
                          <div
                            className="framer-1k41xnu"
                            style={
                              {
                                "--extracted-1eung3n":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                                "--extracted-1r4zm10": '"opsz" 14, "wght" 600',
                                transform: "none",
                                opacity: "1",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <h4
                              className="framer-text"
                              style={
                                {
                                  "--font-selector":
                                    "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOakF3",
                                  "--framer-font-family":
                                    '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                  "--framer-font-size": "15px",
                                  "--framer-font-variation-axes":
                                    'var(--extracted-1r4zm10, "opsz" 14, "wght" 600)',
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "1.55em",
                                  "--framer-text-color":
                                    "var(--extracted-1eung3n, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                              aria-level={3}
                            >
                              24/7 roadside support
                            </h4>
                          </div>
                          <div
                            className="framer-1r2401r"
                            style={{ transform: "none", opacity: "1" }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1e1duze"
                              style={
                                {
                                  "--framer-text-alignment": "start",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              One number, answered in eleven languages, wherever
                              the car stops.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="framer-12tmxom-container flex-none will-change-transform [opacity:1]"
                        style={
                          {
                            transform: "none",
                            "--site-import-responsive-display": "block",
                          } as CSSProperties
                        }
                        data-site-import-mobile-variant=""
                      >
                        <div
                          className="framer-wREIW framer-3tJNm framer-16kyuut framer-v-t78aga [opacity:1]"
                          style={
                            {
                              "--border-bottom-width": "0px",
                              "--border-color":
                                "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                              "--border-left-width": "0px",
                              "--border-right-width": "0px",
                              "--border-style": "solid",
                              "--border-top-width": "1px",
                              width: "100%",
                            } as CSSProperties
                          }
                          data-border="true"
                        >
                          <div
                            className="framer-1k41xnu [opacity:1]"
                            style={
                              {
                                "--extracted-1eung3n":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                                "--extracted-1r4zm10": '"opsz" 14, "wght" 600',
                                transform: "none",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <h4
                              className="framer-text"
                              style={
                                {
                                  "--font-selector":
                                    "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOakF3",
                                  "--framer-font-family":
                                    '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                  "--framer-font-size": "15px",
                                  "--framer-font-variation-axes":
                                    'var(--extracted-1r4zm10, "opsz" 14, "wght" 600)',
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "1.55em",
                                  "--framer-text-color":
                                    "var(--extracted-1eung3n, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                              aria-level={3}
                            >
                              24/7 roadside support
                            </h4>
                          </div>
                          <div
                            className="framer-1r2401r [opacity:1]"
                            style={{ transform: "none" }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1e1duze"
                              style={
                                {
                                  "--framer-text-alignment": "start",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              One number, answered in eleven languages, wherever
                              the car stops.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ssr-variant">
                      <div
                        className="framer-ck8rel-container flex-none will-change-transform [opacity:1]"
                        style={{ transform: "none" }}
                        data-site-import-desktop-variant=""
                      >
                        <div
                          style={
                            {
                              "--border-bottom-width": "0px",
                              "--border-color":
                                "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                              "--border-left-width": "0px",
                              "--border-right-width": "0px",
                              "--border-style": "solid",
                              "--border-top-width": "1px",
                              width: "100%",
                              opacity: "1",
                            } as CSSProperties
                          }
                          className={
                            isMobile
                              ? "framer-wREIW framer-3tJNm framer-16kyuut framer-v-t78aga"
                              : "framer-wREIW framer-3tJNm framer-16kyuut"
                          }
                          data-border="true"
                          data-site-import-responsive="902"
                        >
                          <div
                            className="framer-1k41xnu"
                            style={
                              {
                                "--extracted-1eung3n":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                                "--extracted-1r4zm10": '"opsz" 14, "wght" 600',
                                transform: "none",
                                opacity: "1",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <h4
                              className="framer-text"
                              style={
                                {
                                  "--font-selector":
                                    "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOakF3",
                                  "--framer-font-family":
                                    '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                  "--framer-font-size": "15px",
                                  "--framer-font-variation-axes":
                                    'var(--extracted-1r4zm10, "opsz" 14, "wght" 600)',
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "1.55em",
                                  "--framer-text-color":
                                    "var(--extracted-1eung3n, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                              aria-level={3}
                            >
                              One-way friendly
                            </h4>
                          </div>
                          <div
                            className="framer-1r2401r"
                            style={{ transform: "none", opacity: "1" }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1e1duze"
                              style={
                                {
                                  "--framer-text-alignment": "start",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Drop the car in another city on supported routes.
                              Munich to Berlin costs nothing extra.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="framer-ck8rel-container flex-none will-change-transform [opacity:1]"
                        style={
                          {
                            transform: "none",
                            "--site-import-responsive-display": "block",
                          } as CSSProperties
                        }
                        data-site-import-mobile-variant=""
                      >
                        <div
                          className="framer-wREIW framer-3tJNm framer-16kyuut framer-v-t78aga [opacity:1]"
                          style={
                            {
                              "--border-bottom-width": "0px",
                              "--border-color":
                                "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                              "--border-left-width": "0px",
                              "--border-right-width": "0px",
                              "--border-style": "solid",
                              "--border-top-width": "1px",
                              width: "100%",
                            } as CSSProperties
                          }
                          data-border="true"
                        >
                          <div
                            className="framer-1k41xnu [opacity:1]"
                            style={
                              {
                                "--extracted-1eung3n":
                                  "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                                "--extracted-1r4zm10": '"opsz" 14, "wght" 600',
                                transform: "none",
                              } as CSSProperties
                            }
                            data-framer-component-type="RichTextContainer"
                          >
                            <h4
                              className="framer-text"
                              style={
                                {
                                  "--font-selector":
                                    "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOakF3",
                                  "--framer-font-family":
                                    '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                                  "--framer-font-size": "15px",
                                  "--framer-font-variation-axes":
                                    'var(--extracted-1r4zm10, "opsz" 14, "wght" 600)',
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "1.55em",
                                  "--framer-text-color":
                                    "var(--extracted-1eung3n, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                                } as CSSProperties
                              }
                              dir="auto"
                              aria-level={3}
                            >
                              One-way friendly
                            </h4>
                          </div>
                          <div
                            className="framer-1r2401r [opacity:1]"
                            style={{ transform: "none" }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1e1duze"
                              style={
                                {
                                  "--framer-text-alignment": "start",
                                } as CSSProperties
                              }
                              dir="auto"
                            >
                              Drop the car in another city on supported routes.
                              Munich to Berlin costs nothing extra.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="framer-3zhpid grid-cols-[repeat(2,minmax(50px,1fr))] justify-center [gap:1px] [grid-auto-rows:minmax(0,1fr)] [grid-template-rows:repeat(1,minmax(0,1fr))] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)]"
                  data-border="true"
                >
                  <div className="ssr-variant">
                    <div
                      className="framer-1vs0tad-container flex-none [place-self:start] will-change-transform opacity-[0.985996]"
                      style={{ transform: "none" }}
                      data-site-import-desktop-variant=""
                    >
                      <div
                        style={{
                          backgroundColor:
                            "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                          height: "100%",
                          width: "100%",
                          opacity: "1",
                        }}
                        className={
                          isMobile
                            ? "framer-gFi0U framer-RvcPE framer-iJjgk framer-xppj6a framer-v-j96lvm"
                            : "framer-gFi0U framer-RvcPE framer-iJjgk framer-xppj6a"
                        }
                        data-site-import-responsive="909"
                      >
                        <div
                          className="framer-aqkdkv"
                          style={{ transform: "none", opacity: "1" }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-4hgl77"
                            dir="auto"
                          >
                            26
                          </p>
                        </div>
                        <div
                          className="framer-1tuannn"
                          style={{ transform: "none", opacity: "1" }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1dmlb93"
                            dir="auto"
                          >
                            Models in the fleet
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="framer-1vs0tad-container flex-none [place-self:start] will-change-transform [opacity:1]"
                      style={
                        {
                          transform: "none",
                          "--site-import-responsive-display": "block",
                        } as CSSProperties
                      }
                      data-site-import-mobile-variant=""
                    >
                      <div
                        className="framer-gFi0U framer-RvcPE framer-iJjgk framer-xppj6a framer-v-j96lvm [opacity:1]"
                        style={{
                          backgroundColor:
                            "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                          height: "100%",
                          width: "100%",
                        }}
                      >
                        <div
                          className="framer-aqkdkv [opacity:1]"
                          style={{ transform: "none" }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-4hgl77"
                            dir="auto"
                          >
                            26
                          </p>
                        </div>
                        <div
                          className="framer-1tuannn [opacity:1]"
                          style={{ transform: "none" }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1dmlb93"
                            dir="auto"
                          >
                            Models in the fleet
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ssr-variant">
                    <div
                      className="framer-kuv6pk-container flex-none [place-self:start] will-change-transform opacity-[0.973094]"
                      style={{ transform: "none" }}
                    >
                      <div
                        style={{
                          backgroundColor:
                            "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                          height: "100%",
                          width: "100%",
                          opacity: "1",
                        }}
                        className={
                          isMobile
                            ? "framer-gFi0U framer-RvcPE framer-iJjgk framer-xppj6a framer-v-j96lvm"
                            : "framer-gFi0U framer-RvcPE framer-iJjgk framer-xppj6a"
                        }
                        data-site-import-responsive="915"
                      >
                        <div
                          className="framer-aqkdkv"
                          style={{ transform: "none", opacity: "1" }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-4hgl77"
                            dir="auto"
                          >
                            28
                          </p>
                        </div>
                        <div
                          className="framer-1tuannn"
                          style={{ transform: "none", opacity: "1" }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1dmlb93"
                            dir="auto"
                          >
                            Pick-up points in 14 cities
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ssr-variant">
                    <div
                      className="framer-18x77ee-container flex-none [place-self:start] will-change-transform opacity-[0.954567]"
                      style={{ transform: "none" }}
                    >
                      <div
                        style={{
                          backgroundColor:
                            "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                          height: "100%",
                          width: "100%",
                          opacity: "1",
                        }}
                        className={
                          isMobile
                            ? "framer-gFi0U framer-RvcPE framer-iJjgk framer-xppj6a framer-v-j96lvm"
                            : "framer-gFi0U framer-RvcPE framer-iJjgk framer-xppj6a"
                        }
                        data-site-import-responsive="921"
                      >
                        <div
                          className="framer-aqkdkv"
                          style={{ transform: "none", opacity: "1" }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-4hgl77"
                            dir="auto"
                          >
                            4.9
                          </p>
                        </div>
                        <div
                          className="framer-1tuannn"
                          style={{ transform: "none", opacity: "1" }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1dmlb93"
                            dir="auto"
                          >
                            Average trip rating
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ssr-variant">
                    <div
                      className="framer-1ty0rt6-container flex-none [place-self:start] will-change-transform [opacity:1]"
                      style={{ transform: "none" }}
                    >
                      <div
                        style={{
                          backgroundColor:
                            "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                          height: "100%",
                          width: "100%",
                          opacity: "1",
                        }}
                        className={
                          isMobile
                            ? "framer-gFi0U framer-RvcPE framer-iJjgk framer-xppj6a framer-v-j96lvm"
                            : "framer-gFi0U framer-RvcPE framer-iJjgk framer-xppj6a"
                        }
                        data-site-import-responsive="927"
                      >
                        <div
                          className="framer-aqkdkv"
                          style={{ transform: "none", opacity: "1" }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-4hgl77"
                            dir="auto"
                          >
                            1.2M
                          </p>
                        </div>
                        <div
                          className="framer-1tuannn"
                          style={{ transform: "none", opacity: "1" }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1dmlb93"
                            dir="auto"
                          >
                            Journeys completed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <ImportedSectionBanner />
            <ImportedSectionReviews />
            <ImportedSectionFAQ />
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
                    data-framer-page-link-current="true"
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

function ImportedSectionHero() {
  const [differentReturn, setDifferentReturn] = useState(false);
  const [mode, setMode] = useState<DriveMode>("self");
  return (
    <section className="framer-s01pdh items-center flex-none flex-col flex-nowrap content-center justify-end [gap:0] [min-height:100vh] [overflow:var(--overflow-clip-fallback,clip)]">
      <div className="framer-8j8toz flex-none [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [z-index:0]">
        <div className="ssr-variant">
          <div
            className="framer-1wvr720 flex-none [opacity:1]"
            style={{ transform: "none", willChange: "transform" }}
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
                className="[corner-shape:inherit] object-cover"
                style={
                  {
                    display: "block",
                    width: "100%",
                    height: "100%",
                    borderRadius: "inherit",
                    objectPosition: "50% 58%",
                  } as CSSProperties
                }
                decoding="auto"
                width="2560"
                height="1706"
                sizes="calc(100vw - 18px)"
                src="./src/assets/1ad00884977ba9cf.avif"
                alt=""
                data-site-import-responsive="56"
              />
            </div>
          </div>
        </div>
        <div className="framer-1vvvj82 flex-none" />
      </div>
      <div className="framer-clhmvy items-start flex-none flex-col flex-nowrap max-w-[1360px] [place-content:flex-start] [z-index:1]">
        <div
          className="framer-18sqato items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [-webkit-backdrop-filter:blur(10px)] [backdrop-filter:blur(10px)] [opacity:1]"
          style={{ transform: "none", willChange: "transform" }}
          data-border="true"
        >
          <div className="framer-kmmec2 items-center flex-none flex-row flex-nowrap gap-[4px] content-center justify-start">
            <div className="framer-varxih-container flex-none">
              <svg
                className="[color:var(--token-7440a65c-f51d-497c-8c3a-6c1cfe846d88)] [fill:currentcolor] [overflow:visible]"
                style={
                  {
                    height: "100%",
                    width: "100%",
                    display: "block",
                    position: "relative",
                    stroke: "none",
                    strokeWidth: "1.6",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  } as CSSProperties
                }
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.8-5.2-2.75L6.8 19.6l1-5.8-4.2-4.1 5.8-.85L12 3.6Z" />
              </svg>
            </div>
            <div
              className="framer-6gjxxg"
              style={{ transform: "none" }}
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
                    "--framer-font-size": "12px",
                    "--framer-font-variation-axes": '"opsz" 14, "wght" 600',
                    "--framer-line-height": "1.55em",
                    "--framer-text-color":
                      "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                  } as CSSProperties
                }
                dir="auto"
              >
                4.9
              </p>
            </div>
          </div>
          <div className="ssr-variant">
            <div
              className="framer-1xg1ov6"
              style={{ transform: "none" }}
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="framer-text framer-styles-preset-1a6wac2"
                style={
                  {
                    "--framer-text-color":
                      "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                  } as CSSProperties
                }
                dir="auto"
                data-site-import-responsive="67"
              >
                48,912 verified trips across 14 cities
              </p>
            </div>
          </div>
        </div>
        <div
          className="framer-b00c7f [word-break:break-word]"
          style={{ transform: "none" }}
          data-framer-component-type="RichTextContainer"
        >
          <h1
            className="framer-text framer-styles-preset-1oa3g5b"
            style={
              {
                "--framer-text-alignment": "start",
                "--framer-text-color":
                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
              } as CSSProperties
            }
            dir="auto"
          >
            <span
              className="[opacity:1]"
              style={{ display: "inline-block", transform: "none" }}
            >
              Rent
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
              Car
            </span>{" "}
            <span
              className="[opacity:1]"
              style={{ display: "inline-block", transform: "none" }}
            >
              for
            </span>{" "}
            <span
              className="[opacity:1]"
              style={{ display: "inline-block", transform: "none" }}
            >
              Every
            </span>{" "}
            <span
              className="[opacity:1]"
              style={{ display: "inline-block", transform: "none" }}
            >
              Journey
            </span>
          </h1>
        </div>
        <div
          className="framer-yzj78w items-start flex-none flex-col flex-nowrap [box-shadow:0_18px_40px_-26px_#00000080] [place-content:flex-start] [opacity:1]"
          style={{ transform: "none", willChange: "transform" }}
        >
          <SearchForm />
          <SearchOptions
            differentReturn={differentReturn}
            onDifferentReturnChange={setDifferentReturn}
            mode={mode}
            onModeChange={setMode}
          />
        </div>
      </div>
    </section>
  );
}

function ImportedSectionFleet() {
  return (
    <section
      className="framer-1ieqjou items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0]"
      id="fleet"
    >
      <div className="framer-1dz3307 items-center flex-none flex-col flex-nowrap max-w-[1360px] content-center justify-start">
        <div className="framer-1etdmnb [@media(max-width:680.98px)]:gap-[16px] [@media(min-width:681px)_and_(max-width:1199.98px)]:gap-[16px]">
          <div className="framer-1t0pc9v items-start flex-none flex-col flex-nowrap gap-[8px] [place-content:flex-start]">
            <div
              className="framer-1m2oa77 [@media(max-width:680.98px)]:[word-break:break-word] [@media(min-width:681px)_and_(max-width:1199.98px)]:[word-break:break-word]"
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
                  Top
                </span>{" "}
                <span
                  className="[opacity:1]"
                  style={{ display: "inline-block", transform: "none" }}
                >
                  picks
                </span>{" "}
                <span
                  className="[opacity:1]"
                  style={{ display: "inline-block", transform: "none" }}
                >
                  vehicle
                </span>{" "}
                <span
                  className="[opacity:1]"
                  style={{ display: "inline-block", transform: "none" }}
                >
                  this
                </span>{" "}
                <span
                  className="[opacity:1]"
                  style={{ display: "inline-block", transform: "none" }}
                >
                  month
                </span>
              </h2>
            </div>
            <div
              className="framer-8opc1w [@media(max-width:680.98px)]:max-w-[520px] [@media(max-width:680.98px)]:[word-break:break-word] [@media(min-width:681px)_and_(max-width:1199.98px)]:max-w-[520px] [@media(min-width:681px)_and_(max-width:1199.98px)]:[word-break:break-word] will-change-transform opacity-[0.970126]"
              style={{ transform: "none" }}
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="framer-text framer-styles-preset-nsw7a4"
                style={{ "--framer-text-alignment": "start" } as CSSProperties}
                dir="auto"
              >
                Experience the epitome of amazing journey with our top picks.
              </p>
            </div>
          </div>
          <div className="ssr-variant">
            <div className="framer-1fw96c3 items-center flex-none flex-row flex-nowrap content-center justify-start [@media(max-width:680.98px)]:[overflow:auto]">
              <div className="framer-1ks2sus-container">
                <div
                  className="framer-f7qdO framer-40PBB framer-efv1n7 items-center flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
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
                      borderRadius: "999px",
                    } as CSSProperties
                  }
                  data-border="true"
                  tabIndex={0}
                >
                  <div
                    className="framer-1lkim4k [opacity:1]"
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
                      className="framer-text framer-styles-preset-e793i5"
                      style={
                        {
                          "--framer-text-alignment": "start",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      All
                    </p>
                  </div>
                </div>
              </div>
              <div className="framer-wb5s8u-container">
                <div
                  className="framer-f7qdO framer-40PBB framer-efv1n7 items-center flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
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
                      borderRadius: "999px",
                    } as CSSProperties
                  }
                  data-border="true"
                  tabIndex={0}
                >
                  <div
                    className="framer-1lkim4k [opacity:1]"
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
                      className="framer-text framer-styles-preset-e793i5"
                      style={
                        {
                          "--framer-text-alignment": "start",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      SUV
                    </p>
                  </div>
                </div>
              </div>
              <div className="framer-1cfxc76-container">
                <div
                  className="framer-f7qdO framer-40PBB framer-efv1n7 items-center flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
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
                      borderRadius: "999px",
                    } as CSSProperties
                  }
                  data-border="true"
                  tabIndex={0}
                >
                  <div
                    className="framer-1lkim4k [opacity:1]"
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
                      className="framer-text framer-styles-preset-e793i5"
                      style={
                        {
                          "--framer-text-alignment": "start",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Sedan
                    </p>
                  </div>
                </div>
              </div>
              <div className="framer-7jucr-container">
                <div
                  className="framer-f7qdO framer-40PBB framer-efv1n7 items-center flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
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
                      borderRadius: "999px",
                    } as CSSProperties
                  }
                  data-border="true"
                  tabIndex={0}
                >
                  <div
                    className="framer-1lkim4k [opacity:1]"
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
                      className="framer-text framer-styles-preset-e793i5"
                      style={
                        {
                          "--framer-text-alignment": "start",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Hatchback
                    </p>
                  </div>
                </div>
              </div>
              <div className="framer-1t9aose-container">
                <div
                  className="framer-f7qdO framer-40PBB framer-efv1n7 items-center flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
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
                      borderRadius: "999px",
                    } as CSSProperties
                  }
                  data-border="true"
                  tabIndex={0}
                >
                  <div
                    className="framer-1lkim4k [opacity:1]"
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
                      className="framer-text framer-styles-preset-e793i5"
                      style={
                        {
                          "--framer-text-alignment": "start",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Minivan
                    </p>
                  </div>
                </div>
              </div>
              <div className="framer-z4nvvm-container">
                <div
                  className="framer-f7qdO framer-40PBB framer-efv1n7 items-center flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
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
                      borderRadius: "999px",
                    } as CSSProperties
                  }
                  data-border="true"
                  tabIndex={0}
                >
                  <div
                    className="framer-1lkim4k [opacity:1]"
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
                      className="framer-text framer-styles-preset-e793i5"
                      style={
                        {
                          "--framer-text-alignment": "start",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Electric
                    </p>
                  </div>
                </div>
              </div>
              <div className="framer-d5vjnb-container">
                <div
                  className="framer-f7qdO framer-40PBB framer-efv1n7 items-center flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
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
                      borderRadius: "999px",
                    } as CSSProperties
                  }
                  data-border="true"
                  tabIndex={0}
                >
                  <div
                    className="framer-1lkim4k [opacity:1]"
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
                      className="framer-text framer-styles-preset-e793i5"
                      style={
                        {
                          "--framer-text-alignment": "start",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Sport
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ssr-variant">
          <div className="framer-184i3z9">
            <div
              className="framer-q0hwqb will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div className="framer-1vap0d0-container">
                  <a
                    className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1] py-20"
                    style={{
                      background:
                        "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    href="/cars/polo"
                  >
                    <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-cqqpi2 [word-break:break-word] [opacity:1]"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-19m4p2s"
                          dir="auto"
                        >
                          Hatchback
                        </p>
                      </div>
                      <div
                        className="framer-x78gtr [word-break:break-word] [opacity:1]"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <h3
                          className="framer-text framer-styles-preset-z4rud8"
                          dir="auto"
                        >
                          Volkswagen Polo
                        </h3>
                      </div>
                      <div
                        className="framer-1wwjzzt [word-break:break-word] [opacity:1]"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1a6wac2"
                          dir="auto"
                        >
                          Manual · Petrol
                        </p>
                      </div>
                    </div>
                    <div className="framer-mlyq35 aspect-[1.4391] flex-none [mask:linear-gradient(rgba(0,_0,_0,_0)_0%,_rgb(0,_0,_0)_16%,_rgb(0,_0,_0)_84%,_rgba(0,_0,_0,_0)_100%)] [opacity:1]">
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
                          width="1000"
                          height="700"
                          sizes="max((min(100vw, 1360px) - 112px) / 4, 50px)"
                          srcSet="/site-assets/e4b8757344cf3bfa.avif 512w, /site-assets/8e71d3bfc2bd1c9b.avif 1000w"
                          src="/site-assets/8e71d3bfc2bd1c9b.avif"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                    <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                      <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1yi39wf [opacity:1]"
                          style={{ transform: "none" }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-alignment": "start",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            From
                          </p>
                        </div>
                        <div className="framer-1tgfrz1 items-end flex-none flex-row flex-nowrap gap-[3px] content-end justify-start [opacity:1]">
                          <div
                            className="framer-qvdzni [opacity:1]"
                            style={{ transform: "none" }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-yi7eqs"
                              dir="auto"
                            >
                              $42
                            </p>
                          </div>
                          <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1i83u2f [opacity:1]"
                              style={{ transform: "none" }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-1a6wac2"
                                dir="auto"
                              >
                                / day
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="framer-1dmmmrm items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                        style={{
                          backgroundColor:
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          borderRadius: "999px",
                        }}
                      >
                        <div className="framer-2g24mp-container flex-none [opacity:1]">
                          <svg
                            className="[color:var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)] fill-none [overflow:visible]"
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
                            <path d="M5 12h13M13 6.6 18.6 12 13 17.4" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="framer-q0hwqb will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div className="framer-1vap0d0-container">
                  <a
                    className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                    style={{
                      background:
                        "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    href="/cars/idbuzz"
                  >
                    <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-cqqpi2 [word-break:break-word] [opacity:1]"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-19m4p2s"
                          dir="auto"
                        >
                          Minivan
                        </p>
                      </div>
                      <div
                        className="framer-x78gtr [word-break:break-word] [opacity:1]"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <h3
                          className="framer-text framer-styles-preset-z4rud8"
                          dir="auto"
                        >
                          Volkswagen ID. Buzz LWB
                        </h3>
                      </div>
                      <div
                        className="framer-1wwjzzt [word-break:break-word] [opacity:1]"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1a6wac2"
                          dir="auto"
                        >
                          Automatic · Electric · 470 km
                        </p>
                      </div>
                    </div>
                    <div className="framer-mlyq35 aspect-[1.4391] flex-none [mask:linear-gradient(rgba(0,_0,_0,_0)_0%,_rgb(0,_0,_0)_16%,_rgb(0,_0,_0)_84%,_rgba(0,_0,_0,_0)_100%)] [opacity:1]">
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
                          width="1000"
                          height="700"
                          sizes="max((min(100vw, 1360px) - 112px) / 4, 50px)"
                          srcSet="/site-assets/62d1ab43c8f489f8.avif 512w, /site-assets/2e1e2ee5543948b5.avif 1000w"
                          src="/site-assets/2e1e2ee5543948b5.avif"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                    <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                      <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1yi39wf [opacity:1]"
                          style={{ transform: "none" }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-alignment": "start",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            From
                          </p>
                        </div>
                        <div className="framer-1tgfrz1 items-end flex-none flex-row flex-nowrap gap-[3px] content-end justify-start [opacity:1]">
                          <div
                            className="framer-qvdzni [opacity:1]"
                            style={{ transform: "none" }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-yi7eqs"
                              dir="auto"
                            >
                              $118
                            </p>
                          </div>
                          <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1i83u2f [opacity:1]"
                              style={{ transform: "none" }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-1a6wac2"
                                dir="auto"
                              >
                                / day
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="framer-1dmmmrm items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                        style={{
                          backgroundColor:
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          borderRadius: "999px",
                        }}
                      >
                        <div className="framer-2g24mp-container flex-none [opacity:1]">
                          <svg
                            className="[color:var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)] fill-none [overflow:visible]"
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
                            <path d="M5 12h13M13 6.6 18.6 12 13 17.4" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="framer-q0hwqb will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div className="framer-1vap0d0-container">
                  <a
                    className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                    style={{
                      background:
                        "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    href="/cars/tiguan"
                  >
                    <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-cqqpi2 [word-break:break-word] [opacity:1]"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-19m4p2s"
                          dir="auto"
                        >
                          SUV
                        </p>
                      </div>
                      <div
                        className="framer-x78gtr [word-break:break-word] [opacity:1]"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <h3
                          className="framer-text framer-styles-preset-z4rud8"
                          dir="auto"
                        >
                          Volkswagen Tiguan Allspace
                        </h3>
                      </div>
                      <div
                        className="framer-1wwjzzt [word-break:break-word] [opacity:1]"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1a6wac2"
                          dir="auto"
                        >
                          Automatic · Diesel
                        </p>
                      </div>
                    </div>
                    <div className="framer-mlyq35 aspect-[1.4391] flex-none [mask:linear-gradient(rgba(0,_0,_0,_0)_0%,_rgb(0,_0,_0)_16%,_rgb(0,_0,_0)_84%,_rgba(0,_0,_0,_0)_100%)] [opacity:1]">
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
                          width="1000"
                          height="700"
                          sizes="max((min(100vw, 1360px) - 112px) / 4, 50px)"
                          srcSet="/site-assets/57c8fe409293b55d.avif 512w, /site-assets/e9c4057f6caefa39.avif 1000w"
                          src="/site-assets/e9c4057f6caefa39.avif"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                    <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                      <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1yi39wf [opacity:1]"
                          style={{ transform: "none" }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-alignment": "start",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            From
                          </p>
                        </div>
                        <div className="framer-1tgfrz1 items-end flex-none flex-row flex-nowrap gap-[3px] content-end justify-start [opacity:1]">
                          <div
                            className="framer-qvdzni [opacity:1]"
                            style={{ transform: "none" }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-yi7eqs"
                              dir="auto"
                            >
                              $78
                            </p>
                          </div>
                          <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1i83u2f [opacity:1]"
                              style={{ transform: "none" }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-1a6wac2"
                                dir="auto"
                              >
                                / day
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="framer-1dmmmrm items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                        style={{
                          backgroundColor:
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          borderRadius: "999px",
                        }}
                      >
                        <div className="framer-2g24mp-container flex-none [opacity:1]">
                          <svg
                            className="[color:var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)] fill-none [overflow:visible]"
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
                            <path d="M5 12h13M13 6.6 18.6 12 13 17.4" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="framer-q0hwqb will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div className="framer-1vap0d0-container">
                  <a
                    className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                    style={{
                      background:
                        "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    href="/cars/corolla"
                  >
                    <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-cqqpi2 [word-break:break-word] [opacity:1]"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-19m4p2s"
                          dir="auto"
                        >
                          Sedan
                        </p>
                      </div>
                      <div
                        className="framer-x78gtr [word-break:break-word] [opacity:1]"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <h3
                          className="framer-text framer-styles-preset-z4rud8"
                          dir="auto"
                        >
                          Toyota Corolla Hybrid
                        </h3>
                      </div>
                      <div
                        className="framer-1wwjzzt [word-break:break-word] [opacity:1]"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1a6wac2"
                          dir="auto"
                        >
                          Automatic · Hybrid
                        </p>
                      </div>
                    </div>
                    <div className="framer-mlyq35 aspect-[1.4391] flex-none [mask:linear-gradient(rgba(0,_0,_0,_0)_0%,_rgb(0,_0,_0)_16%,_rgb(0,_0,_0)_84%,_rgba(0,_0,_0,_0)_100%)] [opacity:1]">
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
                          width="1000"
                          height="700"
                          sizes="max((min(100vw, 1360px) - 112px) / 4, 50px)"
                          srcSet="/site-assets/644ec13b7543d34a.avif 512w, /site-assets/861d2ef214caf3e1.avif 1000w"
                          src="/site-assets/861d2ef214caf3e1.avif"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                    <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                      <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1yi39wf [opacity:1]"
                          style={{ transform: "none" }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-alignment": "start",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            From
                          </p>
                        </div>
                        <div className="framer-1tgfrz1 items-end flex-none flex-row flex-nowrap gap-[3px] content-end justify-start [opacity:1]">
                          <div
                            className="framer-qvdzni [opacity:1]"
                            style={{ transform: "none" }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-yi7eqs"
                              dir="auto"
                            >
                              $48
                            </p>
                          </div>
                          <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1i83u2f [opacity:1]"
                              style={{ transform: "none" }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-1a6wac2"
                                dir="auto"
                              >
                                / day
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="framer-1dmmmrm items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                        style={{
                          backgroundColor:
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          borderRadius: "999px",
                        }}
                      >
                        <div className="framer-2g24mp-container flex-none [opacity:1]">
                          <svg
                            className="[color:var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)] fill-none [overflow:visible]"
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
                            <path d="M5 12h13M13 6.6 18.6 12 13 17.4" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="framer-q0hwqb will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div className="framer-1vap0d0-container">
                  <a
                    className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                    style={{
                      background:
                        "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    href="/cars/model3"
                  >
                    <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-cqqpi2 [word-break:break-word] [opacity:1]"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-19m4p2s"
                          dir="auto"
                        >
                          Sedan
                        </p>
                      </div>
                      <div
                        className="framer-x78gtr [word-break:break-word] [opacity:1]"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <h3
                          className="framer-text framer-styles-preset-z4rud8"
                          dir="auto"
                        >
                          Tesla Model 3
                        </h3>
                      </div>
                      <div
                        className="framer-1wwjzzt [word-break:break-word] [opacity:1]"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1a6wac2"
                          dir="auto"
                        >
                          Automatic · Electric · 513 km
                        </p>
                      </div>
                    </div>
                    <div className="framer-mlyq35 aspect-[1.4391] flex-none [mask:linear-gradient(rgba(0,_0,_0,_0)_0%,_rgb(0,_0,_0)_16%,_rgb(0,_0,_0)_84%,_rgba(0,_0,_0,_0)_100%)] [opacity:1]">
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
                          width="1000"
                          height="700"
                          sizes="max((min(100vw, 1360px) - 112px) / 4, 50px)"
                          srcSet="/site-assets/f65736832b2305ac.avif 512w, /site-assets/910e643b44f50fd5.avif 1000w"
                          src="/site-assets/910e643b44f50fd5.avif"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                    <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                      <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1yi39wf [opacity:1]"
                          style={{ transform: "none" }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-alignment": "start",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            From
                          </p>
                        </div>
                        <div className="framer-1tgfrz1 items-end flex-none flex-row flex-nowrap gap-[3px] content-end justify-start [opacity:1]">
                          <div
                            className="framer-qvdzni [opacity:1]"
                            style={{ transform: "none" }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-yi7eqs"
                              dir="auto"
                            >
                              $79
                            </p>
                          </div>
                          <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1i83u2f [opacity:1]"
                              style={{ transform: "none" }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-1a6wac2"
                                dir="auto"
                              >
                                / day
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="framer-1dmmmrm items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                        style={{
                          backgroundColor:
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          borderRadius: "999px",
                        }}
                      >
                        <div className="framer-2g24mp-container flex-none [opacity:1]">
                          <svg
                            className="[color:var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)] fill-none [overflow:visible]"
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
                            <path d="M5 12h13M13 6.6 18.6 12 13 17.4" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="framer-q0hwqb will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div className="framer-1vap0d0-container">
                  <a
                    className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                    style={{
                      background:
                        "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    href="/cars/rav4"
                  >
                    <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-cqqpi2 [word-break:break-word] [opacity:1]"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-19m4p2s"
                          dir="auto"
                        >
                          SUV
                        </p>
                      </div>
                      <div
                        className="framer-x78gtr [word-break:break-word] [opacity:1]"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <h3
                          className="framer-text framer-styles-preset-z4rud8"
                          dir="auto"
                        >
                          Toyota RAV4 Hybrid
                        </h3>
                      </div>
                      <div
                        className="framer-1wwjzzt [word-break:break-word] [opacity:1]"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1a6wac2"
                          dir="auto"
                        >
                          Automatic · Hybrid
                        </p>
                      </div>
                    </div>
                    <div className="framer-mlyq35 aspect-[1.4391] flex-none [mask:linear-gradient(rgba(0,_0,_0,_0)_0%,_rgb(0,_0,_0)_16%,_rgb(0,_0,_0)_84%,_rgba(0,_0,_0,_0)_100%)] [opacity:1]">
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
                          width="1000"
                          height="700"
                          sizes="max((min(100vw, 1360px) - 112px) / 4, 50px)"
                          srcSet="/site-assets/167c1b7458188da9.avif 512w, /site-assets/48ff4e878685a96e.avif 1000w"
                          src="/site-assets/48ff4e878685a96e.avif"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                    <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                      <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1yi39wf [opacity:1]"
                          style={{ transform: "none" }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-alignment": "start",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            From
                          </p>
                        </div>
                        <div className="framer-1tgfrz1 items-end flex-none flex-row flex-nowrap gap-[3px] content-end justify-start [opacity:1]">
                          <div
                            className="framer-qvdzni [opacity:1]"
                            style={{ transform: "none" }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-yi7eqs"
                              dir="auto"
                            >
                              $72
                            </p>
                          </div>
                          <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1i83u2f [opacity:1]"
                              style={{ transform: "none" }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-1a6wac2"
                                dir="auto"
                              >
                                / day
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="framer-1dmmmrm items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                        style={{
                          backgroundColor:
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          borderRadius: "999px",
                        }}
                      >
                        <div className="framer-2g24mp-container flex-none [opacity:1]">
                          <svg
                            className="[color:var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)] fill-none [overflow:visible]"
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
                            <path d="M5 12h13M13 6.6 18.6 12 13 17.4" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="framer-q0hwqb will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div className="framer-1vap0d0-container">
                  <a
                    className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                    style={{
                      background:
                        "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    href="/cars/a6avant"
                  >
                    <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-cqqpi2 [word-break:break-word] [opacity:1]"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-19m4p2s"
                          dir="auto"
                        >
                          Wagon
                        </p>
                      </div>
                      <div
                        className="framer-x78gtr [word-break:break-word] [opacity:1]"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <h3
                          className="framer-text framer-styles-preset-z4rud8"
                          dir="auto"
                        >
                          Audi A6 Avant
                        </h3>
                      </div>
                      <div
                        className="framer-1wwjzzt [word-break:break-word] [opacity:1]"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1a6wac2"
                          dir="auto"
                        >
                          Automatic · Diesel
                        </p>
                      </div>
                    </div>
                    <div className="framer-mlyq35 aspect-[1.4391] flex-none [mask:linear-gradient(rgba(0,_0,_0,_0)_0%,_rgb(0,_0,_0)_16%,_rgb(0,_0,_0)_84%,_rgba(0,_0,_0,_0)_100%)] [opacity:1]">
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
                          width="1000"
                          height="700"
                          sizes="max((min(100vw, 1360px) - 112px) / 4, 50px)"
                          srcSet="/site-assets/0879a0899286197f.avif 512w, /site-assets/0824d4f89ab60941.avif 1000w"
                          src="/site-assets/0824d4f89ab60941.avif"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                    <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                      <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1yi39wf [opacity:1]"
                          style={{ transform: "none" }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-alignment": "start",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            From
                          </p>
                        </div>
                        <div className="framer-1tgfrz1 items-end flex-none flex-row flex-nowrap gap-[3px] content-end justify-start [opacity:1]">
                          <div
                            className="framer-qvdzni [opacity:1]"
                            style={{ transform: "none" }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-yi7eqs"
                              dir="auto"
                            >
                              $104
                            </p>
                          </div>
                          <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1i83u2f [opacity:1]"
                              style={{ transform: "none" }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-1a6wac2"
                                dir="auto"
                              >
                                / day
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="framer-1dmmmrm items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                        style={{
                          backgroundColor:
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          borderRadius: "999px",
                        }}
                      >
                        <div className="framer-2g24mp-container flex-none [opacity:1]">
                          <svg
                            className="[color:var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)] fill-none [overflow:visible]"
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
                            <path d="M5 12h13M13 6.6 18.6 12 13 17.4" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="framer-q0hwqb will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div className="framer-1vap0d0-container">
                  <a
                    className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                    style={{
                      background:
                        "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    href="/cars/gv80"
                  >
                    <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-cqqpi2 [word-break:break-word] [opacity:1]"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-19m4p2s"
                          dir="auto"
                        >
                          SUV
                        </p>
                      </div>
                      <div
                        className="framer-x78gtr [word-break:break-word] [opacity:1]"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <h3
                          className="framer-text framer-styles-preset-z4rud8"
                          dir="auto"
                        >
                          Genesis GV80
                        </h3>
                      </div>
                      <div
                        className="framer-1wwjzzt [word-break:break-word] [opacity:1]"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1a6wac2"
                          dir="auto"
                        >
                          Automatic · Petrol
                        </p>
                      </div>
                    </div>
                    <div className="framer-mlyq35 aspect-[1.4391] flex-none [mask:linear-gradient(rgba(0,_0,_0,_0)_0%,_rgb(0,_0,_0)_16%,_rgb(0,_0,_0)_84%,_rgba(0,_0,_0,_0)_100%)] [opacity:1]">
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
                          width="1000"
                          height="700"
                          sizes="max((min(100vw, 1360px) - 112px) / 4, 50px)"
                          srcSet="/site-assets/c3350eb75c0c0836.avif 512w, /site-assets/4b64fedef92affc3.avif 1000w"
                          src="/site-assets/4b64fedef92affc3.avif"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                    <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                      <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                        <div
                          className="framer-1yi39wf [opacity:1]"
                          style={{ transform: "none" }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-alignment": "start",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            From
                          </p>
                        </div>
                        <div className="framer-1tgfrz1 items-end flex-none flex-row flex-nowrap gap-[3px] content-end justify-start [opacity:1]">
                          <div
                            className="framer-qvdzni [opacity:1]"
                            style={{ transform: "none" }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-yi7eqs"
                              dir="auto"
                            >
                              $145
                            </p>
                          </div>
                          <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1i83u2f [opacity:1]"
                              style={{ transform: "none" }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-1a6wac2"
                                dir="auto"
                              >
                                / day
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="framer-1dmmmrm items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                        style={{
                          backgroundColor:
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          borderRadius: "999px",
                        }}
                      >
                        <div className="framer-2g24mp-container flex-none [opacity:1]">
                          <svg
                            className="[color:var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)] fill-none [overflow:visible]"
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
                            <path d="M5 12h13M13 6.6 18.6 12 13 17.4" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="framer-12vtktd items-center flex-none flex-row flex-nowrap place-content-center [gap:0]">
          <div className="framer-7c51gj-container">
            <a
              className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
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
                className="framer-bisomo [opacity:1]"
                style={{ transform: "none" }}
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="framer-text framer-styles-preset-p3aiuu"
                  style={
                    { "--framer-text-alignment": "center" } as CSSProperties
                  }
                  dir="auto"
                >
                  See More
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionCategories() {
  return (
    <section
      className="framer-qir6dk items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0]"
      id="categories"
    >
      <div className="framer-1jgiskh items-start flex-none flex-col flex-nowrap max-w-[1360px] [place-content:flex-start]">
        <div className="framer-1kaxix3 [@media(max-width:680.98px)]:gap-[16px] [@media(min-width:681px)_and_(max-width:1199.98px)]:gap-[16px]">
          <div className="framer-142jkfa items-start flex-none flex-col flex-nowrap gap-[8px] [place-content:flex-start]">
            <div
              className="framer-1ka0on8 [@media(max-width:680.98px)]:[word-break:break-word] [@media(min-width:681px)_and_(max-width:1199.98px)]:[word-break:break-word]"
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
                  Find
                </span>{" "}
                <span
                  className="[opacity:1]"
                  style={{ display: "inline-block", transform: "none" }}
                >
                  the
                </span>{" "}
                <span
                  className="[opacity:1]"
                  style={{ display: "inline-block", transform: "none" }}
                >
                  right
                </span>{" "}
                <span
                  className="[opacity:1]"
                  style={{ display: "inline-block", transform: "none" }}
                >
                  car
                </span>{" "}
                <span
                  className="[opacity:1]"
                  style={{ display: "inline-block", transform: "none" }}
                >
                  for
                </span>{" "}
                <span
                  className="[opacity:1]"
                  style={{ display: "inline-block", transform: "none" }}
                >
                  the
                </span>{" "}
                <span
                  className="[opacity:1]"
                  style={{ display: "inline-block", transform: "none" }}
                >
                  trip
                </span>
              </h2>
            </div>
            <div
              className="framer-73i910 [@media(max-width:680.98px)]:max-w-[520px] [@media(max-width:680.98px)]:[word-break:break-word] [@media(min-width:681px)_and_(max-width:1199.98px)]:max-w-[520px] [@media(min-width:681px)_and_(max-width:1199.98px)]:[word-break:break-word] will-change-transform [opacity:1]"
              style={{ transform: "none" }}
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="framer-text framer-styles-preset-nsw7a4"
                style={{ "--framer-text-alignment": "start" } as CSSProperties}
                dir="auto"
              >
                From a city runabout to a seven-seater for the whole family.
              </p>
            </div>
          </div>
          <div className="ssr-variant">
            <div
              className="framer-8tw8mj-container"
              data-site-import-desktop-variant=""
            >
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
                href="/cars"
                tabIndex={0}
              >
                <div
                  className="framer-bisomo [opacity:1]"
                  style={{ transform: "none" }}
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-e793i5"
                    style={
                      { "--framer-text-alignment": "center" } as CSSProperties
                    }
                    dir="auto"
                  >
                    Browse all cars
                  </p>
                </div>
                <div
                  className="framer-156tqkg-container flex-none [opacity:1]"
                  {...({ name: "Arrow" } as any)}
                >
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
                    <path d="M5 12h13M13 6.6 18.6 12 13 17.4" />
                  </svg>
                </div>
              </a>
            </div>
            <div
              className="framer-8tw8mj-container"
              style={
                { "--site-import-responsive-display": "block" } as CSSProperties
              }
              data-site-import-mobile-variant=""
            >
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
                    width: "100%",
                    borderRadius: "6px",
                  } as CSSProperties
                }
                data-border="true"
                href="/cars"
                tabIndex={0}
              >
                <div
                  className="framer-bisomo [opacity:1]"
                  style={{ transform: "none" }}
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-e793i5"
                    style={
                      { "--framer-text-alignment": "center" } as CSSProperties
                    }
                    dir="auto"
                  >
                    Browse all cars
                  </p>
                </div>
                <div
                  className="framer-156tqkg-container flex-none [opacity:1]"
                  {...({ name: "Arrow" } as any)}
                >
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
                    <path d="M5 12h13M13 6.6 18.6 12 13 17.4" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="framer-1wmsvk flex-none gap-[12px] justify-center">
          <div
            className="framer-1i46bn3 will-change-transform opacity-[0.988912]"
            style={{ transform: "none" }}
          >
            <div className="ssr-variant">
              <div className="framer-9d12v6-container">
                <a
                  className="framer-EcM0X framer-oX6dW framer-md7y4f framer-11absq3 items-start flex-col flex-nowrap gap-[4px] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                  style={{
                    backgroundColor:
                      "var(--token-9f66f541-cda5-4068-8d7e-64caad2f4746)",
                    height: "100%",
                    width: "100%",
                    borderRadius: "8px",
                  }}
                  href="/cars?vehicle-type=%7CSUV%7C"
                >
                  <div className="framer-1u4bq1h items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                    <div
                      className="framer-11g04gb [word-break:break-word] [opacity:1]"
                      style={
                        {
                          "--extracted-a0htzi":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          "--extracted-zfisys": '"opsz" 14, "wght" 600',
                          transform: "none",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <h3
                        className="framer-text"
                        style={
                          {
                            "--font-selector":
                              "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOakF3",
                            "--framer-font-family":
                              '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                            "--framer-font-size": "15px",
                            "--framer-font-variation-axes":
                              'var(--extracted-zfisys, "opsz" 14, "wght" 600)',
                            "--framer-letter-spacing": "-0.02em",
                            "--framer-line-height": "1.55em",
                            "--framer-text-color":
                              "var(--extracted-a0htzi, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        SUV
                      </h3>
                    </div>
                    <div
                      className="framer-7fk5qf [word-break:break-word] [opacity:1]"
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
                        className="framer-text framer-styles-preset-1a6wac2"
                        style={
                          {
                            "--framer-text-alignment": "start",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        9 models · from $72/day
                      </p>
                    </div>
                  </div>
                  <div className="framer-ppa96f aspect-[1.4286] flex-none [opacity:1]">
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
                        width="1000"
                        height="700"
                        sizes="max((min(100vw, 1360px) - 124px) / 6, 50px)"
                        srcSet="/site-assets/57c8fe409293b55d.avif 512w, /site-assets/e9c4057f6caefa39.avif 1000w"
                        src="/site-assets/e9c4057f6caefa39.avif"
                        alt=""
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className="framer-1i46bn3 will-change-transform opacity-[0.989024]"
            style={{ transform: "none" }}
          >
            <div className="ssr-variant">
              <div className="framer-9d12v6-container">
                <a
                  className="framer-EcM0X framer-oX6dW framer-md7y4f framer-11absq3 items-start flex-col flex-nowrap gap-[4px] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                  style={{
                    backgroundColor:
                      "var(--token-9f66f541-cda5-4068-8d7e-64caad2f4746)",
                    height: "100%",
                    width: "100%",
                    borderRadius: "8px",
                  }}
                  href="/cars?vehicle-type=%7CSedan%7C"
                >
                  <div className="framer-1u4bq1h items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                    <div
                      className="framer-11g04gb [word-break:break-word] [opacity:1]"
                      style={
                        {
                          "--extracted-a0htzi":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          "--extracted-zfisys": '"opsz" 14, "wght" 600',
                          transform: "none",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <h3
                        className="framer-text"
                        style={
                          {
                            "--font-selector":
                              "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOakF3",
                            "--framer-font-family":
                              '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                            "--framer-font-size": "15px",
                            "--framer-font-variation-axes":
                              'var(--extracted-zfisys, "opsz" 14, "wght" 600)',
                            "--framer-letter-spacing": "-0.02em",
                            "--framer-line-height": "1.55em",
                            "--framer-text-color":
                              "var(--extracted-a0htzi, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Sedan
                      </h3>
                    </div>
                    <div
                      className="framer-7fk5qf [word-break:break-word] [opacity:1]"
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
                        className="framer-text framer-styles-preset-1a6wac2"
                        style={
                          {
                            "--framer-text-alignment": "start",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        4 models · from $48/day
                      </p>
                    </div>
                  </div>
                  <div className="framer-ppa96f aspect-[1.4286] flex-none [opacity:1]">
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
                        width="1000"
                        height="700"
                        sizes="max((min(100vw, 1360px) - 124px) / 6, 50px)"
                        srcSet="/site-assets/f65736832b2305ac.avif 512w, /site-assets/910e643b44f50fd5.avif 1000w"
                        src="/site-assets/910e643b44f50fd5.avif"
                        alt=""
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className="framer-1i46bn3 will-change-transform opacity-[0.989024]"
            style={{ transform: "none" }}
          >
            <div className="ssr-variant">
              <div className="framer-9d12v6-container">
                <a
                  className="framer-EcM0X framer-oX6dW framer-md7y4f framer-11absq3 items-start flex-col flex-nowrap gap-[4px] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                  style={{
                    backgroundColor:
                      "var(--token-9f66f541-cda5-4068-8d7e-64caad2f4746)",
                    height: "100%",
                    width: "100%",
                    borderRadius: "8px",
                  }}
                  href="/cars?vehicle-type=%7CHatchback%7C"
                >
                  <div className="framer-1u4bq1h items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                    <div
                      className="framer-11g04gb [word-break:break-word] [opacity:1]"
                      style={
                        {
                          "--extracted-a0htzi":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          "--extracted-zfisys": '"opsz" 14, "wght" 600',
                          transform: "none",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <h3
                        className="framer-text"
                        style={
                          {
                            "--font-selector":
                              "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOakF3",
                            "--framer-font-family":
                              '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                            "--framer-font-size": "15px",
                            "--framer-font-variation-axes":
                              'var(--extracted-zfisys, "opsz" 14, "wght" 600)',
                            "--framer-letter-spacing": "-0.02em",
                            "--framer-line-height": "1.55em",
                            "--framer-text-color":
                              "var(--extracted-a0htzi, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Hatchback
                      </h3>
                    </div>
                    <div
                      className="framer-7fk5qf [word-break:break-word] [opacity:1]"
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
                        className="framer-text framer-styles-preset-1a6wac2"
                        style={
                          {
                            "--framer-text-alignment": "start",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        4 models · from $36/day
                      </p>
                    </div>
                  </div>
                  <div className="framer-ppa96f aspect-[1.4286] flex-none [opacity:1]">
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
                        width="1000"
                        height="700"
                        sizes="max((min(100vw, 1360px) - 124px) / 6, 50px)"
                        srcSet="/site-assets/3a07f4914dd90fe5.avif 512w, /site-assets/4ba4d9e1e84344bf.avif 1000w"
                        src="/site-assets/4ba4d9e1e84344bf.avif"
                        alt=""
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className="framer-1i46bn3 will-change-transform opacity-[0.988912]"
            style={{ transform: "none" }}
          >
            <div className="ssr-variant">
              <div className="framer-9d12v6-container">
                <a
                  className="framer-EcM0X framer-oX6dW framer-md7y4f framer-11absq3 items-start flex-col flex-nowrap gap-[4px] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                  style={{
                    backgroundColor:
                      "var(--token-9f66f541-cda5-4068-8d7e-64caad2f4746)",
                    height: "100%",
                    width: "100%",
                    borderRadius: "8px",
                  }}
                  href="/cars?fuel=%7CElectric%7C"
                >
                  <div className="framer-1u4bq1h items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                    <div
                      className="framer-11g04gb [word-break:break-word] [opacity:1]"
                      style={
                        {
                          "--extracted-a0htzi":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          "--extracted-zfisys": '"opsz" 14, "wght" 600',
                          transform: "none",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <h3
                        className="framer-text"
                        style={
                          {
                            "--font-selector":
                              "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOakF3",
                            "--framer-font-family":
                              '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                            "--framer-font-size": "15px",
                            "--framer-font-variation-axes":
                              'var(--extracted-zfisys, "opsz" 14, "wght" 600)',
                            "--framer-letter-spacing": "-0.02em",
                            "--framer-line-height": "1.55em",
                            "--framer-text-color":
                              "var(--extracted-a0htzi, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Electric
                      </h3>
                    </div>
                    <div
                      className="framer-7fk5qf [word-break:break-word] [opacity:1]"
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
                        className="framer-text framer-styles-preset-1a6wac2"
                        style={
                          {
                            "--framer-text-alignment": "start",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        5 models · from $55/day
                      </p>
                    </div>
                  </div>
                  <div className="framer-ppa96f aspect-[1.4286] flex-none [opacity:1]">
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
                        width="1000"
                        height="700"
                        sizes="max((min(100vw, 1360px) - 124px) / 6, 50px)"
                        srcSet="/site-assets/77b7dec56e446213.avif 512w, /site-assets/92d1f0b5c444b4a7.avif 1000w"
                        src="/site-assets/92d1f0b5c444b4a7.avif"
                        alt=""
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className="framer-1i46bn3 will-change-transform opacity-[0.988912]"
            style={{ transform: "none" }}
          >
            <div className="ssr-variant">
              <div className="framer-9d12v6-container">
                <a
                  className="framer-EcM0X framer-oX6dW framer-md7y4f framer-11absq3 items-start flex-col flex-nowrap gap-[4px] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                  style={{
                    backgroundColor:
                      "var(--token-9f66f541-cda5-4068-8d7e-64caad2f4746)",
                    height: "100%",
                    width: "100%",
                    borderRadius: "8px",
                  }}
                  href="/cars?vehicle-type=%7CMinivan%7C"
                >
                  <div className="framer-1u4bq1h items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                    <div
                      className="framer-11g04gb [word-break:break-word] [opacity:1]"
                      style={
                        {
                          "--extracted-a0htzi":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          "--extracted-zfisys": '"opsz" 14, "wght" 600',
                          transform: "none",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <h3
                        className="framer-text"
                        style={
                          {
                            "--font-selector":
                              "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOakF3",
                            "--framer-font-family":
                              '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                            "--framer-font-size": "15px",
                            "--framer-font-variation-axes":
                              'var(--extracted-zfisys, "opsz" 14, "wght" 600)',
                            "--framer-letter-spacing": "-0.02em",
                            "--framer-line-height": "1.55em",
                            "--framer-text-color":
                              "var(--extracted-a0htzi, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Minivan &amp; 7-seat
                      </h3>
                    </div>
                    <div
                      className="framer-7fk5qf [word-break:break-word] [opacity:1]"
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
                        className="framer-text framer-styles-preset-1a6wac2"
                        style={
                          {
                            "--framer-text-alignment": "start",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        2 models · from $78/day
                      </p>
                    </div>
                  </div>
                  <div className="framer-ppa96f aspect-[1.4286] flex-none [opacity:1]">
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
                        width="1000"
                        height="700"
                        sizes="max((min(100vw, 1360px) - 124px) / 6, 50px)"
                        srcSet="/site-assets/62d1ab43c8f489f8.avif 512w, /site-assets/2e1e2ee5543948b5.avif 1000w"
                        src="/site-assets/2e1e2ee5543948b5.avif"
                        alt=""
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className="framer-1i46bn3 will-change-transform opacity-[0.988912]"
            style={{ transform: "none" }}
          >
            <div className="ssr-variant">
              <div className="framer-9d12v6-container">
                <a
                  className="framer-EcM0X framer-oX6dW framer-md7y4f framer-11absq3 items-start flex-col flex-nowrap gap-[4px] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                  style={{
                    backgroundColor:
                      "var(--token-9f66f541-cda5-4068-8d7e-64caad2f4746)",
                    height: "100%",
                    width: "100%",
                    borderRadius: "8px",
                  }}
                  href="/cars?vehicle-type=%7CSport%7C"
                >
                  <div className="framer-1u4bq1h items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                    <div
                      className="framer-11g04gb [word-break:break-word] [opacity:1]"
                      style={
                        {
                          "--extracted-a0htzi":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          "--extracted-zfisys": '"opsz" 14, "wght" 600',
                          transform: "none",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <h3
                        className="framer-text"
                        style={
                          {
                            "--font-selector":
                              "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOakF3",
                            "--framer-font-family":
                              '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                            "--framer-font-size": "15px",
                            "--framer-font-variation-axes":
                              'var(--extracted-zfisys, "opsz" 14, "wght" 600)',
                            "--framer-letter-spacing": "-0.02em",
                            "--framer-line-height": "1.55em",
                            "--framer-text-color":
                              "var(--extracted-a0htzi, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Sport &amp; convertible
                      </h3>
                    </div>
                    <div
                      className="framer-7fk5qf [word-break:break-word] [opacity:1]"
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
                        className="framer-text framer-styles-preset-1a6wac2"
                        style={
                          {
                            "--framer-text-alignment": "start",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        4 models · from $96/day
                      </p>
                    </div>
                  </div>
                  <div className="framer-ppa96f aspect-[1.4286] flex-none [opacity:1]">
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
                        width="1000"
                        height="700"
                        sizes="max((min(100vw, 1360px) - 124px) / 6, 50px)"
                        srcSet="/site-assets/ddb8af7ff6ccb1c4.avif 512w, /site-assets/cf3c3219bec60f50.avif 1000w"
                        src="/site-assets/cf3c3219bec60f50.avif"
                        alt=""
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionLocations() {
  return (
    <section
      className="framer-1fkpk9f items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0]"
      id="locations"
    >
      <div className="framer-1bzjgg7 items-start flex-none flex-col flex-nowrap max-w-[1360px] [place-content:flex-start]">
        <div className="framer-123z8jk [@media(max-width:680.98px)]:gap-[16px] [@media(min-width:681px)_and_(max-width:1199.98px)]:gap-[16px]">
          <div className="framer-17c10kx items-start flex-none flex-col flex-nowrap gap-[8px] [place-content:flex-start]">
            <div
              className="framer-1dwu7ha [@media(max-width:680.98px)]:[word-break:break-word] [@media(min-width:681px)_and_(max-width:1199.98px)]:[word-break:break-word]"
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
                  Car
                </span>{" "}
                <span
                  className="[opacity:1]"
                  style={{ display: "inline-block", transform: "none" }}
                >
                  Rental
                </span>{" "}
                <span
                  className="[opacity:1]"
                  style={{ display: "inline-block", transform: "none" }}
                >
                  Worldwide
                </span>
              </h2>
            </div>
            <div
              className="framer-h8fu5w [@media(max-width:680.98px)]:max-w-[520px] [@media(max-width:680.98px)]:[word-break:break-word] [@media(min-width:681px)_and_(max-width:1199.98px)]:max-w-[520px] [@media(min-width:681px)_and_(max-width:1199.98px)]:[word-break:break-word] will-change-transform opacity-[0.970345]"
              style={{ transform: "none" }}
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="framer-text framer-styles-preset-nsw7a4"
                style={{ "--framer-text-alignment": "start" } as CSSProperties}
                dir="auto"
              >
                14 cities, one simple booking. Pick up in Munich, drop off in
                Berlin for free.
              </p>
            </div>
          </div>
          <div className="ssr-variant">
            <div
              className="framer-7u2amx-container"
              data-site-import-desktop-variant=""
            >
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
                href="/locations"
                tabIndex={0}
              >
                <div
                  className="framer-bisomo [opacity:1]"
                  style={{ transform: "none" }}
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-e793i5"
                    style={
                      { "--framer-text-alignment": "center" } as CSSProperties
                    }
                    dir="auto"
                  >
                    All locations
                  </p>
                </div>
                <div
                  className="framer-156tqkg-container flex-none [opacity:1]"
                  {...({ name: "Arrow" } as any)}
                >
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
                    <path d="M5 12h13M13 6.6 18.6 12 13 17.4" />
                  </svg>
                </div>
              </a>
            </div>
            <div
              className="framer-7u2amx-container"
              style={
                { "--site-import-responsive-display": "block" } as CSSProperties
              }
              data-site-import-mobile-variant=""
            >
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
                    width: "100%",
                    borderRadius: "6px",
                  } as CSSProperties
                }
                data-border="true"
                href="/locations"
                tabIndex={0}
              >
                <div
                  className="framer-bisomo [opacity:1]"
                  style={{ transform: "none" }}
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-e793i5"
                    style={
                      { "--framer-text-alignment": "center" } as CSSProperties
                    }
                    dir="auto"
                  >
                    All locations
                  </p>
                </div>
                <div
                  className="framer-156tqkg-container flex-none [opacity:1]"
                  {...({ name: "Arrow" } as any)}
                >
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
                    <path d="M5 12h13M13 6.6 18.6 12 13 17.4" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="framer-1nkzs9a items-start flex-none flex-col flex-nowrap gap-[22px] [place-content:flex-start]">
          <div className="framer-qmyjux">
            <div
              className="framer-1pm9a68 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [place-self:start] will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div
                  className="framer-1g9hite-container flex-none"
                  data-site-import-desktop-variant=""
                >
                  <a
                    className="framer-alA1N framer-oX6dW framer-WUKpa framer-1er4u69 framer-ci2pgo items-start flex-col flex-nowrap content-start justify-end [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                    style={{
                      backgroundColor:
                        "var(--token-01b85732-ed82-44ab-a877-1134ad52b5dd)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    href="/cars?city=bali"
                  >
                    <div
                      className="framer-1ga7gfz flex-none [z-index:0] [opacity:1]"
                      style={{ transform: "none" }}
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
                          width="1600"
                          height="1067"
                          sizes="max((min(100vw, 1360px) - 112px) / 4, 50px)"
                          srcSet="/site-assets/9568b6a54e4bc0f5.avif 512w, /site-assets/b8762f2c0458f508.avif 1024w, /site-assets/2e1f2b2d7eb6a296.avif 1600w"
                          src="/site-assets/2e1f2b2d7eb6a296.avif"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="framer-ri7oh1 flex-none [z-index:1] [opacity:1]"
                      style={{
                        background:
                          "linear-gradient(rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.7) 100%)",
                      }}
                    />
                    <div
                      className="framer-1794ops [word-break:break-word] [z-index:2] [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
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
                              "var(--extracted-r6o4lv, var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Indonesia
                      </p>
                    </div>
                    <div className="framer-lkbic items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [z-index:2] [opacity:1]">
                      <div
                        className="framer-1ew1bkf [word-break:break-word] [z-index:2] [opacity:1]"
                        style={
                          {
                            "--extracted-a0htzi":
                              "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                            transform: "none",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <h3
                          className="framer-text framer-styles-preset-z4rud8"
                          style={
                            {
                              "--framer-text-alignment": "start",
                              "--framer-text-color":
                                "var(--extracted-a0htzi, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Bali
                        </h3>
                      </div>
                    </div>
                    <div className="framer-aqp3ut items-center flex-none flex-row flex-nowrap content-center justify-between [z-index:2] [opacity:1]">
                      <div
                        className="framer-1l3ctvu [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
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
                                "var(--extracted-r6o4lv, var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          8 cars · from $42/day
                        </p>
                      </div>
                      <div className="framer-372ojs-container flex-none [opacity:1]">
                        <svg
                          className="[color:var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)] fill-none [overflow:visible]"
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
                          <path d="M5 12h13M13 6.6 18.6 12 13 17.4" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="framer-1g9hite-container flex-none"
                  style={
                    {
                      "--site-import-responsive-display": "block",
                    } as CSSProperties
                  }
                  data-site-import-mobile-variant=""
                >
                  <a
                    className="framer-alA1N framer-oX6dW framer-WUKpa framer-1er4u69 framer-v-1qx5lm5 framer-ci2pgo items-start flex-col flex-nowrap content-start justify-end [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                    style={{
                      backgroundColor:
                        "var(--token-01b85732-ed82-44ab-a877-1134ad52b5dd)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    href="/cars?city=bali"
                  >
                    <div
                      className="framer-1ga7gfz flex-none [z-index:0] [opacity:1]"
                      style={{ transform: "none" }}
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
                          width="1600"
                          height="1067"
                          sizes="max((min(100vw, 1360px) - 42px) / 2, 50px)"
                          srcSet="/site-assets/9568b6a54e4bc0f5.avif 512w, /site-assets/b8762f2c0458f508.avif 1024w, /site-assets/2e1f2b2d7eb6a296.avif 1600w"
                          src="/site-assets/2e1f2b2d7eb6a296.avif"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="framer-ri7oh1 flex-none [z-index:1] [opacity:1]"
                      style={{
                        background:
                          "linear-gradient(rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.7) 100%)",
                      }}
                    />
                    <div
                      className="framer-1794ops [word-break:break-word] [z-index:2] [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
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
                              "var(--extracted-r6o4lv, var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Indonesia
                      </p>
                    </div>
                    <div className="framer-lkbic items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [z-index:2] [opacity:1]">
                      <div
                        className="framer-1ew1bkf [word-break:break-word] [z-index:2] [opacity:1]"
                        style={
                          {
                            "--extracted-a0htzi":
                              "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                            transform: "none",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <h3
                          className="framer-text framer-styles-preset-z4rud8"
                          style={
                            {
                              "--framer-text-alignment": "start",
                              "--framer-text-color":
                                "var(--extracted-a0htzi, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Bali
                        </h3>
                      </div>
                    </div>
                    <div className="framer-aqp3ut items-center flex-none flex-row flex-nowrap content-center justify-between [z-index:2] [opacity:1]">
                      <div
                        className="framer-1l3ctvu [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
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
                                "var(--extracted-r6o4lv, var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          8 cars · from $42/day
                        </p>
                      </div>
                      <div className="framer-372ojs-container flex-none [opacity:1]">
                        <svg
                          className="[color:var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)] fill-none [overflow:visible]"
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
                          <path d="M5 12h13M13 6.6 18.6 12 13 17.4" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="framer-1pm9a68 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [place-self:start] will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div
                  className="framer-1g9hite-container flex-none"
                  data-site-import-desktop-variant=""
                >
                  <a
                    className="framer-alA1N framer-oX6dW framer-WUKpa framer-1er4u69 framer-ci2pgo items-start flex-col flex-nowrap content-start justify-end [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                    style={{
                      backgroundColor:
                        "var(--token-01b85732-ed82-44ab-a877-1134ad52b5dd)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    href="/cars?city=munich"
                  >
                    <div
                      className="framer-1ga7gfz flex-none [z-index:0] [opacity:1]"
                      style={{ transform: "none" }}
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
                          width="1600"
                          height="1067"
                          sizes="max((min(100vw, 1360px) - 112px) / 4, 50px)"
                          srcSet="/site-assets/d6393b2879671cd4.avif 512w, /site-assets/b0c05ee56e09385a.avif 1024w, /site-assets/04d27e22c6bb001d.avif 1600w"
                          src="/site-assets/04d27e22c6bb001d.avif"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="framer-ri7oh1 flex-none [z-index:1] [opacity:1]"
                      style={{
                        background:
                          "linear-gradient(rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.7) 100%)",
                      }}
                    />
                    <div
                      className="framer-1794ops [word-break:break-word] [z-index:2] [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
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
                              "var(--extracted-r6o4lv, var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Germany
                      </p>
                    </div>
                    <div className="framer-lkbic items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [z-index:2] [opacity:1]">
                      <div
                        className="framer-1ew1bkf [word-break:break-word] [z-index:2] [opacity:1]"
                        style={
                          {
                            "--extracted-a0htzi":
                              "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                            transform: "none",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <h3
                          className="framer-text framer-styles-preset-z4rud8"
                          style={
                            {
                              "--framer-text-alignment": "start",
                              "--framer-text-color":
                                "var(--extracted-a0htzi, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Munich
                        </h3>
                      </div>
                    </div>
                    <div className="framer-aqp3ut items-center flex-none flex-row flex-nowrap content-center justify-between [z-index:2] [opacity:1]">
                      <div
                        className="framer-1l3ctvu [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
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
                                "var(--extracted-r6o4lv, var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          20 cars · from $36/day
                        </p>
                      </div>
                      <div className="framer-372ojs-container flex-none [opacity:1]">
                        <svg
                          className="[color:var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)] fill-none [overflow:visible]"
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
                          <path d="M5 12h13M13 6.6 18.6 12 13 17.4" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="framer-1g9hite-container flex-none"
                  style={
                    {
                      "--site-import-responsive-display": "block",
                    } as CSSProperties
                  }
                  data-site-import-mobile-variant=""
                >
                  <a
                    className="framer-alA1N framer-oX6dW framer-WUKpa framer-1er4u69 framer-v-1qx5lm5 framer-ci2pgo items-start flex-col flex-nowrap content-start justify-end [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                    style={{
                      backgroundColor:
                        "var(--token-01b85732-ed82-44ab-a877-1134ad52b5dd)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    href="/cars?city=munich"
                  >
                    <div
                      className="framer-1ga7gfz flex-none [z-index:0] [opacity:1]"
                      style={{ transform: "none" }}
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
                          width="1600"
                          height="1067"
                          sizes="max((min(100vw, 1360px) - 42px) / 2, 50px)"
                          srcSet="/site-assets/d6393b2879671cd4.avif 512w, /site-assets/b0c05ee56e09385a.avif 1024w, /site-assets/04d27e22c6bb001d.avif 1600w"
                          src="/site-assets/04d27e22c6bb001d.avif"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="framer-ri7oh1 flex-none [z-index:1] [opacity:1]"
                      style={{
                        background:
                          "linear-gradient(rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.7) 100%)",
                      }}
                    />
                    <div
                      className="framer-1794ops [word-break:break-word] [z-index:2] [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
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
                              "var(--extracted-r6o4lv, var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Germany
                      </p>
                    </div>
                    <div className="framer-lkbic items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [z-index:2] [opacity:1]">
                      <div
                        className="framer-1ew1bkf [word-break:break-word] [z-index:2] [opacity:1]"
                        style={
                          {
                            "--extracted-a0htzi":
                              "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                            transform: "none",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <h3
                          className="framer-text framer-styles-preset-z4rud8"
                          style={
                            {
                              "--framer-text-alignment": "start",
                              "--framer-text-color":
                                "var(--extracted-a0htzi, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Munich
                        </h3>
                      </div>
                    </div>
                    <div className="framer-aqp3ut items-center flex-none flex-row flex-nowrap content-center justify-between [z-index:2] [opacity:1]">
                      <div
                        className="framer-1l3ctvu [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
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
                                "var(--extracted-r6o4lv, var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          20 cars · from $36/day
                        </p>
                      </div>
                      <div className="framer-372ojs-container flex-none [opacity:1]">
                        <svg
                          className="[color:var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)] fill-none [overflow:visible]"
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
                          <path d="M5 12h13M13 6.6 18.6 12 13 17.4" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="framer-1pm9a68 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [place-self:start] will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div
                  className="framer-1g9hite-container flex-none"
                  data-site-import-desktop-variant=""
                >
                  <a
                    className="framer-alA1N framer-oX6dW framer-WUKpa framer-1er4u69 framer-ci2pgo items-start flex-col flex-nowrap content-start justify-end [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                    style={{
                      backgroundColor:
                        "var(--token-01b85732-ed82-44ab-a877-1134ad52b5dd)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    href="/cars?city=los-angeles"
                  >
                    <div
                      className="framer-1ga7gfz flex-none [z-index:0] [opacity:1]"
                      style={{ transform: "none" }}
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
                          width="1600"
                          height="1200"
                          sizes="max((min(100vw, 1360px) - 112px) / 4, 50px)"
                          srcSet="/site-assets/7a92d0dfd6859b3a.avif 512w, /site-assets/93f166eb99acc369.avif 1024w, /site-assets/ea117720ea9ec2ac.avif 1600w"
                          src="/site-assets/ea117720ea9ec2ac.avif"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="framer-ri7oh1 flex-none [z-index:1] [opacity:1]"
                      style={{
                        background:
                          "linear-gradient(rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.7) 100%)",
                      }}
                    />
                    <div
                      className="framer-1794ops [word-break:break-word] [z-index:2] [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
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
                              "var(--extracted-r6o4lv, var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        United States
                      </p>
                    </div>
                    <div className="framer-lkbic items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [z-index:2] [opacity:1]">
                      <div
                        className="framer-1ew1bkf [word-break:break-word] [z-index:2] [opacity:1]"
                        style={
                          {
                            "--extracted-a0htzi":
                              "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                            transform: "none",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <h3
                          className="framer-text framer-styles-preset-z4rud8"
                          style={
                            {
                              "--framer-text-alignment": "start",
                              "--framer-text-color":
                                "var(--extracted-a0htzi, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Los Angeles
                        </h3>
                      </div>
                    </div>
                    <div className="framer-aqp3ut items-center flex-none flex-row flex-nowrap content-center justify-between [z-index:2] [opacity:1]">
                      <div
                        className="framer-1l3ctvu [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
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
                                "var(--extracted-r6o4lv, var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          21 cars · from $42/day
                        </p>
                      </div>
                      <div className="framer-372ojs-container flex-none [opacity:1]">
                        <svg
                          className="[color:var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)] fill-none [overflow:visible]"
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
                          <path d="M5 12h13M13 6.6 18.6 12 13 17.4" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="framer-1g9hite-container flex-none"
                  style={
                    {
                      "--site-import-responsive-display": "block",
                    } as CSSProperties
                  }
                  data-site-import-mobile-variant=""
                >
                  <a
                    className="framer-alA1N framer-oX6dW framer-WUKpa framer-1er4u69 framer-v-1qx5lm5 framer-ci2pgo items-start flex-col flex-nowrap content-start justify-end [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                    style={{
                      backgroundColor:
                        "var(--token-01b85732-ed82-44ab-a877-1134ad52b5dd)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    href="/cars?city=los-angeles"
                  >
                    <div
                      className="framer-1ga7gfz flex-none [z-index:0] [opacity:1]"
                      style={{ transform: "none" }}
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
                          width="1600"
                          height="1200"
                          sizes="max((min(100vw, 1360px) - 42px) / 2, 50px)"
                          srcSet="/site-assets/7a92d0dfd6859b3a.avif 512w, /site-assets/93f166eb99acc369.avif 1024w, /site-assets/ea117720ea9ec2ac.avif 1600w"
                          src="/site-assets/ea117720ea9ec2ac.avif"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="framer-ri7oh1 flex-none [z-index:1] [opacity:1]"
                      style={{
                        background:
                          "linear-gradient(rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.7) 100%)",
                      }}
                    />
                    <div
                      className="framer-1794ops [word-break:break-word] [z-index:2] [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
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
                              "var(--extracted-r6o4lv, var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        United States
                      </p>
                    </div>
                    <div className="framer-lkbic items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [z-index:2] [opacity:1]">
                      <div
                        className="framer-1ew1bkf [word-break:break-word] [z-index:2] [opacity:1]"
                        style={
                          {
                            "--extracted-a0htzi":
                              "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                            transform: "none",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <h3
                          className="framer-text framer-styles-preset-z4rud8"
                          style={
                            {
                              "--framer-text-alignment": "start",
                              "--framer-text-color":
                                "var(--extracted-a0htzi, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Los Angeles
                        </h3>
                      </div>
                    </div>
                    <div className="framer-aqp3ut items-center flex-none flex-row flex-nowrap content-center justify-between [z-index:2] [opacity:1]">
                      <div
                        className="framer-1l3ctvu [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
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
                                "var(--extracted-r6o4lv, var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          21 cars · from $42/day
                        </p>
                      </div>
                      <div className="framer-372ojs-container flex-none [opacity:1]">
                        <svg
                          className="[color:var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)] fill-none [overflow:visible]"
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
                          <path d="M5 12h13M13 6.6 18.6 12 13 17.4" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="framer-1pm9a68 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [place-self:start] will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="ssr-variant">
                <div
                  className="framer-1g9hite-container flex-none"
                  data-site-import-desktop-variant=""
                >
                  <a
                    className="framer-alA1N framer-oX6dW framer-WUKpa framer-1er4u69 framer-ci2pgo items-start flex-col flex-nowrap content-start justify-end [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                    style={{
                      backgroundColor:
                        "var(--token-01b85732-ed82-44ab-a877-1134ad52b5dd)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    href="/cars?city=tokyo"
                  >
                    <div
                      className="framer-1ga7gfz flex-none [z-index:0] [opacity:1]"
                      style={{ transform: "none" }}
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
                          width="1600"
                          height="1059"
                          sizes="max((min(100vw, 1360px) - 112px) / 4, 50px)"
                          srcSet="/site-assets/f68a9246ce212188.avif 512w, /site-assets/2aa4a7634587824d.avif 1024w, /site-assets/71ee9476f673ae47.avif 1600w"
                          src="/site-assets/71ee9476f673ae47.avif"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="framer-ri7oh1 flex-none [z-index:1] [opacity:1]"
                      style={{
                        background:
                          "linear-gradient(rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.7) 100%)",
                      }}
                    />
                    <div
                      className="framer-1794ops [word-break:break-word] [z-index:2] [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
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
                              "var(--extracted-r6o4lv, var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Japan
                      </p>
                    </div>
                    <div className="framer-lkbic items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [z-index:2] [opacity:1]">
                      <div
                        className="framer-1ew1bkf [word-break:break-word] [z-index:2] [opacity:1]"
                        style={
                          {
                            "--extracted-a0htzi":
                              "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                            transform: "none",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <h3
                          className="framer-text framer-styles-preset-z4rud8"
                          style={
                            {
                              "--framer-text-alignment": "start",
                              "--framer-text-color":
                                "var(--extracted-a0htzi, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Tokyo
                        </h3>
                      </div>
                    </div>
                    <div className="framer-aqp3ut items-center flex-none flex-row flex-nowrap content-center justify-between [z-index:2] [opacity:1]">
                      <div
                        className="framer-1l3ctvu [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
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
                                "var(--extracted-r6o4lv, var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          11 cars · from $36/day
                        </p>
                      </div>
                      <div className="framer-372ojs-container flex-none [opacity:1]">
                        <svg
                          className="[color:var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)] fill-none [overflow:visible]"
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
                          <path d="M5 12h13M13 6.6 18.6 12 13 17.4" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="framer-1g9hite-container flex-none"
                  style={
                    {
                      "--site-import-responsive-display": "block",
                    } as CSSProperties
                  }
                  data-site-import-mobile-variant=""
                >
                  <a
                    className="framer-alA1N framer-oX6dW framer-WUKpa framer-1er4u69 framer-v-1qx5lm5 framer-ci2pgo items-start flex-col flex-nowrap content-start justify-end [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                    style={{
                      backgroundColor:
                        "var(--token-01b85732-ed82-44ab-a877-1134ad52b5dd)",
                      height: "100%",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    href="/cars?city=tokyo"
                  >
                    <div
                      className="framer-1ga7gfz flex-none [z-index:0] [opacity:1]"
                      style={{ transform: "none" }}
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
                          width="1600"
                          height="1059"
                          sizes="max((min(100vw, 1360px) - 42px) / 2, 50px)"
                          srcSet="/site-assets/f68a9246ce212188.avif 512w, /site-assets/2aa4a7634587824d.avif 1024w, /site-assets/71ee9476f673ae47.avif 1600w"
                          src="/site-assets/71ee9476f673ae47.avif"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="framer-ri7oh1 flex-none [z-index:1] [opacity:1]"
                      style={{
                        background:
                          "linear-gradient(rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.7) 100%)",
                      }}
                    />
                    <div
                      className="framer-1794ops [word-break:break-word] [z-index:2] [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
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
                              "var(--extracted-r6o4lv, var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Japan
                      </p>
                    </div>
                    <div className="framer-lkbic items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [z-index:2] [opacity:1]">
                      <div
                        className="framer-1ew1bkf [word-break:break-word] [z-index:2] [opacity:1]"
                        style={
                          {
                            "--extracted-a0htzi":
                              "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                            transform: "none",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <h3
                          className="framer-text framer-styles-preset-z4rud8"
                          style={
                            {
                              "--framer-text-alignment": "start",
                              "--framer-text-color":
                                "var(--extracted-a0htzi, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Tokyo
                        </h3>
                      </div>
                    </div>
                    <div className="framer-aqp3ut items-center flex-none flex-row flex-nowrap content-center justify-between [z-index:2] [opacity:1]">
                      <div
                        className="framer-1l3ctvu [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
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
                                "var(--extracted-r6o4lv, var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          11 cars · from $36/day
                        </p>
                      </div>
                      <div className="framer-372ojs-container flex-none [opacity:1]">
                        <svg
                          className="[color:var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)] fill-none [overflow:visible]"
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
                          <path d="M5 12h13M13 6.6 18.6 12 13 17.4" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-ensufc items-start flex-none flex-row flex-wrap gap-[8px] [place-content:flex-start]">
            <div
              className="framer-1lai5ri items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="framer-xum47e-container">
                <a
                  className="framer-7C6Oh framer-iJjgk framer-qb2uja framer-i6rq8j items-center flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
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
                    } as CSSProperties
                  }
                  data-border="true"
                  href="/cars?city=bali"
                >
                  <div
                    className="framer-1baqr7k [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
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
                            "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Car Rental in Bali
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="framer-1lai5ri items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="framer-xum47e-container">
                <a
                  className="framer-7C6Oh framer-iJjgk framer-qb2uja framer-i6rq8j items-center flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
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
                    } as CSSProperties
                  }
                  data-border="true"
                  href="/cars?city=sydney"
                >
                  <div
                    className="framer-1baqr7k [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
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
                            "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Car Rental in Sydney
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="framer-1lai5ri items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="framer-xum47e-container">
                <a
                  className="framer-7C6Oh framer-iJjgk framer-qb2uja framer-i6rq8j items-center flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
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
                    } as CSSProperties
                  }
                  data-border="true"
                  href="/cars?city=new-york"
                >
                  <div
                    className="framer-1baqr7k [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
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
                            "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Car Rental in New York
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="framer-1lai5ri items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="framer-xum47e-container">
                <a
                  className="framer-7C6Oh framer-iJjgk framer-qb2uja framer-i6rq8j items-center flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
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
                    } as CSSProperties
                  }
                  data-border="true"
                  href="/cars?city=seoul"
                >
                  <div
                    className="framer-1baqr7k [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
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
                            "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Car Rental in Seoul
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="framer-1lai5ri items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="framer-xum47e-container">
                <a
                  className="framer-7C6Oh framer-iJjgk framer-qb2uja framer-i6rq8j items-center flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
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
                    } as CSSProperties
                  }
                  data-border="true"
                  href="/cars?city=jeju"
                >
                  <div
                    className="framer-1baqr7k [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
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
                            "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Car Rental in Jeju Island
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="framer-1lai5ri items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="framer-xum47e-container">
                <a
                  className="framer-7C6Oh framer-iJjgk framer-qb2uja framer-i6rq8j items-center flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
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
                    } as CSSProperties
                  }
                  data-border="true"
                  href="/cars?city=munich"
                >
                  <div
                    className="framer-1baqr7k [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
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
                            "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Car Rental in Munich
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="framer-1lai5ri items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="framer-xum47e-container">
                <a
                  className="framer-7C6Oh framer-iJjgk framer-qb2uja framer-i6rq8j items-center flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
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
                    } as CSSProperties
                  }
                  data-border="true"
                  href="/cars?city=berlin"
                >
                  <div
                    className="framer-1baqr7k [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
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
                            "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Car Rental in Berlin
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="framer-1lai5ri items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="framer-xum47e-container">
                <a
                  className="framer-7C6Oh framer-iJjgk framer-qb2uja framer-i6rq8j items-center flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
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
                    } as CSSProperties
                  }
                  data-border="true"
                  href="/cars?city=los-angeles"
                >
                  <div
                    className="framer-1baqr7k [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
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
                            "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Car Rental in Los Angeles
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="framer-1lai5ri items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="framer-xum47e-container">
                <a
                  className="framer-7C6Oh framer-iJjgk framer-qb2uja framer-i6rq8j items-center flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
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
                    } as CSSProperties
                  }
                  data-border="true"
                  href="/cars?city=glasgow"
                >
                  <div
                    className="framer-1baqr7k [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
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
                            "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Car Rental in Glasgow
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="framer-1lai5ri items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="framer-xum47e-container">
                <a
                  className="framer-7C6Oh framer-iJjgk framer-qb2uja framer-i6rq8j items-center flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
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
                    } as CSSProperties
                  }
                  data-border="true"
                  href="/cars?city=birmingham"
                >
                  <div
                    className="framer-1baqr7k [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
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
                            "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Car Rental in Birmingham
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="framer-1lai5ri items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="framer-xum47e-container">
                <a
                  className="framer-7C6Oh framer-iJjgk framer-qb2uja framer-i6rq8j items-center flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
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
                    } as CSSProperties
                  }
                  data-border="true"
                  href="/cars?city=tokyo"
                >
                  <div
                    className="framer-1baqr7k [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
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
                            "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Car Rental in Tokyo
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="framer-1lai5ri items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="framer-xum47e-container">
                <a
                  className="framer-7C6Oh framer-iJjgk framer-qb2uja framer-i6rq8j items-center flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
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
                    } as CSSProperties
                  }
                  data-border="true"
                  href="/cars?city=lisbon"
                >
                  <div
                    className="framer-1baqr7k [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
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
                            "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Car Rental in Lisbon
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="framer-1lai5ri items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="framer-xum47e-container">
                <a
                  className="framer-7C6Oh framer-iJjgk framer-qb2uja framer-i6rq8j items-center flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
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
                    } as CSSProperties
                  }
                  data-border="true"
                  href="/cars?city=dubai"
                >
                  <div
                    className="framer-1baqr7k [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
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
                            "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Car Rental in Dubai
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="framer-1lai5ri items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
              style={{ transform: "none" }}
            >
              <div className="framer-xum47e-container">
                <a
                  className="framer-7C6Oh framer-iJjgk framer-qb2uja framer-i6rq8j items-center flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
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
                    } as CSSProperties
                  }
                  data-border="true"
                  href="/cars?city=cape-town"
                >
                  <div
                    className="framer-1baqr7k [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
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
                            "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Car Rental in Cape Town
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionDeals() {
  return (
    <section
      className="framer-7u3dhy items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0]"
      id="deals"
    >
      <div className="framer-1y7sh51 items-start flex-none flex-col flex-nowrap max-w-[1360px] [place-content:flex-start]">
        <div className="framer-1nnrioo [@media(max-width:680.98px)]:gap-[16px] [@media(min-width:681px)_and_(max-width:1199.98px)]:gap-[16px]">
          <div className="framer-7q3orm items-start flex-none flex-col flex-nowrap gap-[8px] [place-content:flex-start]">
            <div
              className="framer-16hmk3n [@media(max-width:680.98px)]:[word-break:break-word] [@media(min-width:681px)_and_(max-width:1199.98px)]:[word-break:break-word]"
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
                  Deals
                </span>{" "}
                <span
                  className="[opacity:1]"
                  style={{ display: "inline-block", transform: "none" }}
                >
                  worth
                </span>{" "}
                <span
                  className="[opacity:1]"
                  style={{ display: "inline-block", transform: "none" }}
                >
                  the
                </span>{" "}
                <span
                  className="[opacity:1]"
                  style={{ display: "inline-block", transform: "none" }}
                >
                  detour
                </span>
              </h2>
            </div>
            <div
              className="framer-1jtjyft [@media(max-width:680.98px)]:max-w-[520px] [@media(max-width:680.98px)]:[word-break:break-word] [@media(min-width:681px)_and_(max-width:1199.98px)]:max-w-[520px] [@media(min-width:681px)_and_(max-width:1199.98px)]:[word-break:break-word] will-change-transform opacity-[0.973902]"
              style={{ transform: "none" }}
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="framer-text framer-styles-preset-nsw7a4"
                style={{ "--framer-text-alignment": "start" } as CSSProperties}
                dir="auto"
              >
                Codes that work at checkout. Tap one to copy it.
              </p>
            </div>
          </div>
          <div className="framer-1moeqht items-center flex-none flex-row flex-nowrap">
            <div className="framer-11vw8bv-container">
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
                href="/deals"
                tabIndex={0}
              >
                <div
                  className="framer-bisomo [opacity:1]"
                  style={{ transform: "none" }}
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-e793i5"
                    style={
                      { "--framer-text-alignment": "center" } as CSSProperties
                    }
                    dir="auto"
                  >
                    See All
                  </p>
                </div>
                <div
                  className="framer-156tqkg-container flex-none [opacity:1]"
                  {...({ name: "Arrow" } as any)}
                >
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
                    <path d="M5 12h13M13 6.6 18.6 12 13 17.4" />
                  </svg>
                </div>
              </a>
            </div>
            <div className="framer-1c61bi6 items-center flex-none flex-row flex-nowrap gap-[6px] content-center justify-start">
              <div className="ssr-variant">
                <div className="framer-zngkjh-container flex-none">
                  <div style={{ display: "contents" }}>
                    <div
                      className="framer-TVSuW framer-q4b3p framer-v-1a9ejhh items-center flex-row flex-nowrap place-content-center [gap:0] [opacity:0.35]"
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
                          borderRadius: "999px",
                        } as CSSProperties
                      }
                      aria-disabled="true"
                      data-border="true"
                      tabIndex={0}
                    >
                      <div
                        className="framer-12a97qv-container flex-none [opacity:1]"
                        {...({ name: "Icon" } as any)}
                      >
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
                          <path d="M19 12H6M11 6.6 5.4 12 11 17.4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div className="framer-1ex8d9l-container flex-none">
                  <div style={{ display: "contents" }}>
                    <div
                      className="framer-TVSuW framer-q4b3p items-center flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
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
                          borderRadius: "999px",
                        } as CSSProperties
                      }
                      data-border="true"
                      tabIndex={0}
                    >
                      <div
                        className="framer-12a97qv-container flex-none [opacity:1]"
                        {...({ name: "Icon" } as any)}
                      >
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
                          <path d="M5 12h13M13 6.6 18.6 12 13 17.4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="framer-1e8dm14 items-start flex-none flex-row flex-nowrap gap-[16px] [overflow:auto_hidden] [place-content:flex-start]"
          data-hide-scrollbars="true"
        >
          <div
            className="framer-146m8af items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
            style={{ transform: "none" }}
          >
            <div className="ssr-variant">
              <div className="framer-uvzl5t-container aspect-[1.4545] flex-none min-h-[272px]">
                <div
                  className="framer-0euOd framer-oX6dW framer-QxRxm framer-32iNJ framer-1artkpl framer-v-1d35z5c items-start flex-col flex-nowrap justify-between! content-start justify-end [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                  style={{
                    background:
                      "linear-gradient(145deg, rgb(27, 27, 27) 0%, rgb(42, 26, 15) 42%, rgb(138, 61, 10) 100%) rgba(0, 0, 0, 0)",
                    height: "100%",
                    width: "100%",
                    borderRadius: "8px",
                  }}
                >
                  <div className="framer-1ay7tgz items-start flex-none flex-row flex-nowrap content-start justify-end [gap:0] [z-index:2] [opacity:1]">
                    <div
                      className="framer-1vacmtl items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                      style={
                        {
                          "--border-bottom-width": "1px",
                          "--border-color":
                            "var(--token-483c565b-fb9d-461c-8f3c-18302e2d0b73)",
                          "--border-left-width": "1px",
                          "--border-right-width": "1px",
                          "--border-style": "solid",
                          "--border-top-width": "1px",
                          borderRadius: "999px",
                        } as CSSProperties
                      }
                      data-border="true"
                    >
                      <div
                        className="framer-fchkwm [opacity:1]"
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
                              "--framer-text-alignment": "start",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-7e7f526a-85ea-441f-9429-765a41c2534c))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Valid until 30 Jun 2027
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-1uteay1 items-start flex-none flex-col flex-nowrap [place-content:flex-start] [z-index:2] [opacity:1]">
                    <div className="framer-c0l00g items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-1luq4zf items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                        style={{
                          backgroundColor:
                            "var(--token-1d64286a-cd5c-4838-a5ba-0041771ea97f)",
                          borderRadius: "999px",
                        }}
                      >
                        <div className="framer-17eftoh-container flex-none [opacity:1]">
                          <svg
                            className="[color:var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)] [fill:currentcolor] [overflow:visible]"
                            style={
                              {
                                height: "100%",
                                width: "100%",
                                display: "block",
                                position: "relative",
                                stroke: "none",
                                strokeWidth: "1.6",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                              } as CSSProperties
                            }
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.8-5.2-2.75L6.8 19.6l1-5.8-4.2-4.1 5.8-.85L12 3.6Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div
                      className="framer-15tlx81 [word-break:break-word] [opacity:1]"
                      style={
                        {
                          "--extracted-2gg91v": '"opsz" 14, "wght" 500',
                          "--extracted-r6o4lv":
                            "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                          transform: "none",
                        } as CSSProperties
                      }
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-r79ppm"
                        style={
                          {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Unlock our biggest discount for a seamless booking
                        experience
                      </p>
                    </div>
                    <div
                      className="framer-4ddjui [opacity:1]"
                      style={
                        {
                          "--extracted-2gg91v": '"opsz" 14, "wght" 600',
                          "--extracted-r6o4lv":
                            "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
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
                            "--framer-font-size": "51px",
                            "--framer-font-variation-axes":
                              'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                            "--framer-letter-spacing": "-0.045em",
                            "--framer-line-height": "1em",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        65%
                      </p>
                    </div>
                    <div className="framer-10f4a4e items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-18zev0r [opacity:1]"
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
                              "--framer-text-alignment": "start",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-7e7f526a-85ea-441f-9429-765a41c2534c))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          *with Terms and Condition · up to $150 off
                        </p>
                      </div>
                    </div>
                    <div
                      className="framer-jc9zu items-center flex-none flex-row flex-nowrap gap-[6px] content-center justify-start [opacity:1]"
                      style={{
                        backgroundColor:
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                        cursor: "pointer",
                        borderRadius: "4px",
                      }}
                      tabIndex={0}
                    >
                      <div className="framer-1scqqj1-container flex-none [opacity:1]">
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
                          <rect x="8.5" y="8.5" width="12" height="12" rx="2" />
                          <path d="M15.5 8.5V5a1.5 1.5 0 0 0-1.5-1.5H5A1.5 1.5 0 0 0 3.5 5v9A1.5 1.5 0 0 0 5 15.5h3.5" />
                        </svg>
                      </div>
                      <div
                        className="framer-1lh0t8c [opacity:1]"
                        style={
                          {
                            "--extracted-2gg91v": '"opsz" 14, "wght" 600',
                            "--extracted-r6o4lv":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
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
                              "--framer-font-size": "12px",
                              "--framer-font-variation-axes":
                                'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                              "--framer-letter-spacing": "0.04em",
                              "--framer-line-height": "1.55em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          HORIZON65
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="framer-146m8af items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
            style={{ transform: "none" }}
          >
            <div className="ssr-variant">
              <div className="framer-uvzl5t-container aspect-[1.4545] flex-none min-h-[272px]">
                <div
                  className="framer-0euOd framer-oX6dW framer-QxRxm framer-32iNJ framer-1artkpl items-start flex-col flex-nowrap content-start justify-end [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                  style={{
                    backgroundColor:
                      "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                    height: "100%",
                    width: "100%",
                    borderRadius: "8px",
                  }}
                >
                  <div className="framer-16fc85s flex-none [z-index:0] [opacity:1]">
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
                        sizes="calc((min(100vw, 1360px) - 64px) * 0.324)"
                        srcSet="/site-assets/7e37c8cc7952e49c.avif 512w, /site-assets/29e71eaae825a2b5.avif 1024w, /site-assets/05455dd82d6e19db.avif 1600w"
                        src="/site-assets/05455dd82d6e19db.avif"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="framer-1x882vc flex-none [z-index:1] [opacity:1]"
                    style={{
                      background:
                        "linear-gradient(rgba(0, 0, 0, 0.05) 30%, rgba(0, 0, 0, 0.7) 100%)",
                    }}
                  />
                  <div className="framer-1uteay1 items-start flex-none flex-col flex-nowrap [place-content:flex-start] [z-index:2] [opacity:1]">
                    <div
                      className="framer-lasw0b items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [backdrop-filter:blur(8px)] [opacity:1]"
                      style={
                        {
                          "--border-bottom-width": "1px",
                          "--border-color":
                            "var(--token-483c565b-fb9d-461c-8f3c-18302e2d0b73)",
                          "--border-left-width": "1px",
                          "--border-right-width": "1px",
                          "--border-style": "solid",
                          "--border-top-width": "1px",
                          backgroundColor:
                            "var(--token-095c31d1-50cc-46db-81fb-3576d106af0e)",
                          borderRadius: "999px",
                        } as CSSProperties
                      }
                      data-border="true"
                    >
                      <div
                        className="framer-1y08dav [opacity:1]"
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
                          className="framer-text framer-styles-preset-1coj6ik"
                          style={
                            {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Weekend escape
                        </p>
                      </div>
                    </div>
                    <div
                      className="framer-15tlx81 [word-break:break-word] [opacity:1]"
                      style={
                        {
                          "--extracted-2gg91v": '"opsz" 14, "wght" 500',
                          "--extracted-r6o4lv":
                            "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
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
                              "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOVEF3",
                            "--framer-font-family":
                              '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                            "--framer-font-size": "18px",
                            "--framer-font-variation-axes":
                              'var(--extracted-2gg91v, "opsz" 14, "wght" 500)',
                            "--framer-letter-spacing": "-0.025em",
                            "--framer-line-height": "1.28em",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Save 25% on rentals of three days or longer
                      </p>
                    </div>
                    <div
                      className="framer-jc9zu items-center flex-none flex-row flex-nowrap gap-[6px] content-center justify-start [opacity:1]"
                      style={{
                        backgroundColor:
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                        cursor: "pointer",
                        borderRadius: "4px",
                      }}
                      tabIndex={0}
                    >
                      <div className="framer-1scqqj1-container flex-none [opacity:1]">
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
                          <rect x="8.5" y="8.5" width="12" height="12" rx="2" />
                          <path d="M15.5 8.5V5a1.5 1.5 0 0 0-1.5-1.5H5A1.5 1.5 0 0 0 3.5 5v9A1.5 1.5 0 0 0 5 15.5h3.5" />
                        </svg>
                      </div>
                      <div
                        className="framer-1lh0t8c [opacity:1]"
                        style={
                          {
                            "--extracted-2gg91v": '"opsz" 14, "wght" 600',
                            "--extracted-r6o4lv":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
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
                              "--framer-font-size": "12px",
                              "--framer-font-variation-axes":
                                'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                              "--framer-letter-spacing": "0.04em",
                              "--framer-line-height": "1.55em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          WEEKEND25
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="framer-146m8af items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
            style={{ transform: "none" }}
          >
            <div className="ssr-variant">
              <div className="framer-uvzl5t-container aspect-[1.4545] flex-none min-h-[272px]">
                <div
                  className="framer-0euOd framer-oX6dW framer-QxRxm framer-32iNJ framer-1artkpl items-start flex-col flex-nowrap content-start justify-end [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                  style={{
                    backgroundColor:
                      "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                    height: "100%",
                    width: "100%",
                    borderRadius: "8px",
                  }}
                >
                  <div className="framer-16fc85s flex-none [z-index:0] [opacity:1]">
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
                        sizes="calc((min(100vw, 1360px) - 64px) * 0.324)"
                        srcSet="/site-assets/effc502dfde200e9.avif 512w, /site-assets/66f690f579543c85.avif 1024w, /site-assets/0fee11f52ae56744.avif 1600w"
                        src="/site-assets/0fee11f52ae56744.avif"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="framer-1x882vc flex-none [z-index:1] [opacity:1]"
                    style={{
                      background:
                        "linear-gradient(rgba(0, 0, 0, 0.05) 30%, rgba(0, 0, 0, 0.7) 100%)",
                    }}
                  />
                  <div className="framer-1uteay1 items-start flex-none flex-col flex-nowrap [place-content:flex-start] [z-index:2] [opacity:1]">
                    <div
                      className="framer-lasw0b items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [backdrop-filter:blur(8px)] [opacity:1]"
                      style={
                        {
                          "--border-bottom-width": "1px",
                          "--border-color":
                            "var(--token-483c565b-fb9d-461c-8f3c-18302e2d0b73)",
                          "--border-left-width": "1px",
                          "--border-right-width": "1px",
                          "--border-style": "solid",
                          "--border-top-width": "1px",
                          backgroundColor:
                            "var(--token-095c31d1-50cc-46db-81fb-3576d106af0e)",
                          borderRadius: "999px",
                        } as CSSProperties
                      }
                      data-border="true"
                    >
                      <div
                        className="framer-1y08dav [opacity:1]"
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
                          className="framer-text framer-styles-preset-1coj6ik"
                          style={
                            {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Free airport pick-up
                        </p>
                      </div>
                    </div>
                    <div
                      className="framer-15tlx81 [word-break:break-word] [opacity:1]"
                      style={
                        {
                          "--extracted-2gg91v": '"opsz" 14, "wght" 500',
                          "--extracted-r6o4lv":
                            "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
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
                              "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOVEF3",
                            "--framer-font-family":
                              '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                            "--framer-font-size": "18px",
                            "--framer-font-variation-axes":
                              'var(--extracted-2gg91v, "opsz" 14, "wght" 500)',
                            "--framer-letter-spacing": "-0.025em",
                            "--framer-line-height": "1.28em",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Free terminal pick-up at every airport we serve
                      </p>
                    </div>
                    <div
                      className="framer-jc9zu items-center flex-none flex-row flex-nowrap gap-[6px] content-center justify-start [opacity:1]"
                      style={{
                        backgroundColor:
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                        cursor: "pointer",
                        borderRadius: "4px",
                      }}
                      tabIndex={0}
                    >
                      <div className="framer-1scqqj1-container flex-none [opacity:1]">
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
                          <rect x="8.5" y="8.5" width="12" height="12" rx="2" />
                          <path d="M15.5 8.5V5a1.5 1.5 0 0 0-1.5-1.5H5A1.5 1.5 0 0 0 3.5 5v9A1.5 1.5 0 0 0 5 15.5h3.5" />
                        </svg>
                      </div>
                      <div
                        className="framer-1lh0t8c [opacity:1]"
                        style={
                          {
                            "--extracted-2gg91v": '"opsz" 14, "wght" 600',
                            "--extracted-r6o4lv":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
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
                              "--framer-font-size": "12px",
                              "--framer-font-variation-axes":
                                'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                              "--framer-letter-spacing": "0.04em",
                              "--framer-line-height": "1.55em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          AIRPORT
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="framer-146m8af items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
            style={{ transform: "none" }}
          >
            <div className="ssr-variant">
              <div className="framer-uvzl5t-container aspect-[1.4545] flex-none min-h-[272px]">
                <div
                  className="framer-0euOd framer-oX6dW framer-QxRxm framer-32iNJ framer-1artkpl items-start flex-col flex-nowrap content-start justify-end [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                  style={{
                    backgroundColor:
                      "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                    height: "100%",
                    width: "100%",
                    borderRadius: "8px",
                  }}
                >
                  <div className="framer-16fc85s flex-none [z-index:0] [opacity:1]">
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
                        sizes="calc((min(100vw, 1360px) - 64px) * 0.324)"
                        srcSet="/site-assets/6323ea9dde0e2c54.avif 512w, /site-assets/55a295105fdb6f9a.avif 1024w, /site-assets/08bd0b5d66a366c9.avif 1600w"
                        src="/site-assets/08bd0b5d66a366c9.avif"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="framer-1x882vc flex-none [z-index:1] [opacity:1]"
                    style={{
                      background:
                        "linear-gradient(rgba(0, 0, 0, 0.05) 30%, rgba(0, 0, 0, 0.7) 100%)",
                    }}
                  />
                  <div className="framer-1uteay1 items-start flex-none flex-col flex-nowrap [place-content:flex-start] [z-index:2] [opacity:1]">
                    <div
                      className="framer-lasw0b items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [backdrop-filter:blur(8px)] [opacity:1]"
                      style={
                        {
                          "--border-bottom-width": "1px",
                          "--border-color":
                            "var(--token-483c565b-fb9d-461c-8f3c-18302e2d0b73)",
                          "--border-left-width": "1px",
                          "--border-right-width": "1px",
                          "--border-style": "solid",
                          "--border-top-width": "1px",
                          backgroundColor:
                            "var(--token-095c31d1-50cc-46db-81fb-3576d106af0e)",
                          borderRadius: "999px",
                        } as CSSProperties
                      }
                      data-border="true"
                    >
                      <div
                        className="framer-1y08dav [opacity:1]"
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
                          className="framer-text framer-styles-preset-1coj6ik"
                          style={
                            {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Go electric
                        </p>
                      </div>
                    </div>
                    <div
                      className="framer-15tlx81 [word-break:break-word] [opacity:1]"
                      style={
                        {
                          "--extracted-2gg91v": '"opsz" 14, "wght" 500',
                          "--extracted-r6o4lv":
                            "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
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
                              "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOVEF3",
                            "--framer-font-family":
                              '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                            "--framer-font-size": "18px",
                            "--framer-font-variation-axes":
                              'var(--extracted-2gg91v, "opsz" 14, "wght" 500)',
                            "--framer-letter-spacing": "-0.025em",
                            "--framer-line-height": "1.28em",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        15% off your first electric rental
                      </p>
                    </div>
                    <div
                      className="framer-jc9zu items-center flex-none flex-row flex-nowrap gap-[6px] content-center justify-start [opacity:1]"
                      style={{
                        backgroundColor:
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                        cursor: "pointer",
                        borderRadius: "4px",
                      }}
                      tabIndex={0}
                    >
                      <div className="framer-1scqqj1-container flex-none [opacity:1]">
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
                          <rect x="8.5" y="8.5" width="12" height="12" rx="2" />
                          <path d="M15.5 8.5V5a1.5 1.5 0 0 0-1.5-1.5H5A1.5 1.5 0 0 0 3.5 5v9A1.5 1.5 0 0 0 5 15.5h3.5" />
                        </svg>
                      </div>
                      <div
                        className="framer-1lh0t8c [opacity:1]"
                        style={
                          {
                            "--extracted-2gg91v": '"opsz" 14, "wght" 600',
                            "--extracted-r6o4lv":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
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
                              "--framer-font-size": "12px",
                              "--framer-font-variation-axes":
                                'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                              "--framer-letter-spacing": "0.04em",
                              "--framer-line-height": "1.55em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          EVFIRST
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="framer-146m8af items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:0]"
            style={{ transform: "translateY(24px)" }}
          >
            <div className="ssr-variant">
              <div className="framer-uvzl5t-container aspect-[1.4545] flex-none min-h-[272px]">
                <div
                  className="framer-0euOd framer-oX6dW framer-QxRxm framer-32iNJ framer-1artkpl items-start flex-col flex-nowrap content-start justify-end [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                  style={{
                    backgroundColor:
                      "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                    height: "100%",
                    width: "100%",
                    borderRadius: "8px",
                  }}
                >
                  <div className="framer-16fc85s flex-none [z-index:0] [opacity:1]">
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
                        sizes="calc((min(100vw, 1360px) - 64px) * 0.324)"
                        srcSet="/site-assets/e17c83eb8f4e3473.avif 512w, /site-assets/db80039209a95160.avif 1024w, /site-assets/39c66f94b7ca3d5f.avif 1600w"
                        src="/site-assets/39c66f94b7ca3d5f.avif"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="framer-1x882vc flex-none [z-index:1] [opacity:1]"
                    style={{
                      background:
                        "linear-gradient(rgba(0, 0, 0, 0.05) 30%, rgba(0, 0, 0, 0.7) 100%)",
                    }}
                  />
                  <div className="framer-1uteay1 items-start flex-none flex-col flex-nowrap [place-content:flex-start] [z-index:2] [opacity:1]">
                    <div
                      className="framer-lasw0b items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [backdrop-filter:blur(8px)] [opacity:1]"
                      style={
                        {
                          "--border-bottom-width": "1px",
                          "--border-color":
                            "var(--token-483c565b-fb9d-461c-8f3c-18302e2d0b73)",
                          "--border-left-width": "1px",
                          "--border-right-width": "1px",
                          "--border-style": "solid",
                          "--border-top-width": "1px",
                          backgroundColor:
                            "var(--token-095c31d1-50cc-46db-81fb-3576d106af0e)",
                          borderRadius: "999px",
                        } as CSSProperties
                      }
                      data-border="true"
                    >
                      <div
                        className="framer-1y08dav [opacity:1]"
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
                          className="framer-text framer-styles-preset-1coj6ik"
                          style={
                            {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Refer a friend
                        </p>
                      </div>
                    </div>
                    <div
                      className="framer-15tlx81 [word-break:break-word] [opacity:1]"
                      style={
                        {
                          "--extracted-2gg91v": '"opsz" 14, "wght" 500',
                          "--extracted-r6o4lv":
                            "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
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
                              "SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOVEF3",
                            "--framer-font-family":
                              '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                            "--framer-font-size": "18px",
                            "--framer-font-variation-axes":
                              'var(--extracted-2gg91v, "opsz" 14, "wght" 500)',
                            "--framer-letter-spacing": "-0.025em",
                            "--framer-line-height": "1.28em",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        You both get $30 of driving credit
                      </p>
                    </div>
                    <div
                      className="framer-jc9zu items-center flex-none flex-row flex-nowrap gap-[6px] content-center justify-start [opacity:1]"
                      style={{
                        backgroundColor:
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                        cursor: "pointer",
                        borderRadius: "4px",
                      }}
                      tabIndex={0}
                    >
                      <div className="framer-1scqqj1-container flex-none [opacity:1]">
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
                          <rect x="8.5" y="8.5" width="12" height="12" rx="2" />
                          <path d="M15.5 8.5V5a1.5 1.5 0 0 0-1.5-1.5H5A1.5 1.5 0 0 0 3.5 5v9A1.5 1.5 0 0 0 5 15.5h3.5" />
                        </svg>
                      </div>
                      <div
                        className="framer-1lh0t8c [opacity:1]"
                        style={
                          {
                            "--extracted-2gg91v": '"opsz" 14, "wght" 600',
                            "--extracted-r6o4lv":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
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
                              "--framer-font-size": "12px",
                              "--framer-font-variation-axes":
                                'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                              "--framer-letter-spacing": "0.04em",
                              "--framer-line-height": "1.55em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          FRIEND30
                        </p>
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

function ImportedSectionLogos() {
  return (
    <section
      className="framer-znqae2 items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0]"
      data-border="true"
    >
      <div className="framer-hs8d4 items-center flex-none flex-col flex-nowrap gap-[19px] max-w-[1360px] content-center justify-start">
        <div
          className="framer-191fyiy [word-break:break-word]"
          style={{ transform: "none" }}
          data-framer-component-type="RichTextContainer"
        >
          <p
            className="framer-text framer-styles-preset-19m4p2s"
            style={{ "--framer-text-alignment": "center" } as CSSProperties}
            dir="auto"
          >
            Trusted by travel teams at
          </p>
        </div>
        <div className="framer-rxryzr items-center flex-none flex-row flex-wrap place-content-center">
          <div
            className="framer-az4967 items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start will-change-transform [opacity:1]"
            style={{ transform: "none" }}
          >
            <div className="framer-1hrlqm2 flex-none">
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
                  width="40"
                  height="40"
                  src="/site-assets/9c66bd3d3034d510-89fea062fa9ddf89c7310ffbe2ed00db.png"
                  alt="Velmora logo"
                />
              </div>
            </div>
            <div
              className="framer-1t7mnko"
              style={{ transform: "none" }}
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="framer-text framer-styles-preset-v51twy"
                style={
                  {
                    "--framer-text-alignment": "start",
                    "--framer-text-color":
                      "var(--token-28f8cd76-a7e3-446c-ad25-7a81ba79c7cd)",
                  } as CSSProperties
                }
                dir="auto"
              >
                Velmora
              </p>
            </div>
          </div>
          <div
            className="framer-iy7fvg items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start will-change-transform [opacity:1]"
            style={{ transform: "none" }}
          >
            <div className="framer-1bihsw0 flex-none">
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
                  width="40"
                  height="40"
                  src="/site-assets/67692e2f72c35d55-fe1a7a3b86eae8d17ba78a68b88fc44a.png"
                  alt="Arkline logo"
                />
              </div>
            </div>
            <div
              className="framer-1277lol"
              style={{ transform: "none" }}
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="framer-text framer-styles-preset-v51twy"
                style={
                  {
                    "--framer-text-alignment": "start",
                    "--framer-text-color":
                      "var(--token-28f8cd76-a7e3-446c-ad25-7a81ba79c7cd)",
                  } as CSSProperties
                }
                dir="auto"
              >
                Arkline
              </p>
            </div>
          </div>
          <div
            className="framer-18nruok items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start will-change-transform [opacity:1]"
            style={{ transform: "none" }}
          >
            <div className="framer-3gw1z2 flex-none">
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
                  width="40"
                  height="40"
                  src="/site-assets/25b2369ffd60e9fe-36ca874873781592fb36f4c0197bd683.png"
                  alt="Tidesync logo"
                />
              </div>
            </div>
            <div
              className="framer-s1qncr"
              style={{ transform: "none" }}
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="framer-text framer-styles-preset-v51twy"
                style={
                  {
                    "--framer-text-alignment": "start",
                    "--framer-text-color":
                      "var(--token-28f8cd76-a7e3-446c-ad25-7a81ba79c7cd)",
                  } as CSSProperties
                }
                dir="auto"
              >
                Tidesync
              </p>
            </div>
          </div>
          <div
            className="framer-e0uad6 items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start will-change-transform [opacity:1]"
            style={{ transform: "none" }}
          >
            <div className="framer-1gp9rxu flex-none">
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
                  width="40"
                  height="40"
                  src="/site-assets/a50f382006f5b85f-0e39105ffc9bd19c6b0f95de834d0178.png"
                  alt="Novaquil logo"
                />
              </div>
            </div>
            <div
              className="framer-1aarl7i"
              style={{ transform: "none" }}
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="framer-text framer-styles-preset-v51twy"
                style={
                  {
                    "--framer-text-alignment": "start",
                    "--framer-text-color":
                      "var(--token-28f8cd76-a7e3-446c-ad25-7a81ba79c7cd)",
                  } as CSSProperties
                }
                dir="auto"
              >
                Novaquil
              </p>
            </div>
          </div>
          <div
            className="framer-1sh6ap1 items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start will-change-transform [opacity:1]"
            style={{ transform: "none" }}
          >
            <div className="framer-1u62dnh flex-none">
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
                  width="40"
                  height="40"
                  src="/site-assets/b103e50f314609fd-1ff236121099ca021cbd2a7d29ce68c9.png"
                  alt="Brightpass logo"
                />
              </div>
            </div>
            <div
              className="framer-1d3zgux"
              style={{ transform: "none" }}
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="framer-text framer-styles-preset-v51twy"
                style={
                  {
                    "--framer-text-alignment": "start",
                    "--framer-text-color":
                      "var(--token-28f8cd76-a7e3-446c-ad25-7a81ba79c7cd)",
                  } as CSSProperties
                }
                dir="auto"
              >
                Brightpass
              </p>
            </div>
          </div>
          <div
            className="framer-6fqmsl items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start will-change-transform [opacity:1]"
            style={{ transform: "none" }}
          >
            <div className="framer-1679kta flex-none">
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
                  width="40"
                  height="40"
                  src="/site-assets/b0c4e27e87f4e2e8-d911954e1c32c8cbf1b3456bfa84ceec.png"
                  alt="Solvanta logo"
                />
              </div>
            </div>
            <div
              className="framer-ddti8b"
              style={{ transform: "none" }}
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="framer-text framer-styles-preset-v51twy"
                style={
                  {
                    "--framer-text-alignment": "start",
                    "--framer-text-color":
                      "var(--token-28f8cd76-a7e3-446c-ad25-7a81ba79c7cd)",
                  } as CSSProperties
                }
                dir="auto"
              >
                Solvanta
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionBanner() {
  return (
    <section className="framer-ve37lx items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0]">
      <div className="framer-jqezux items-center flex-none flex-col flex-nowrap max-w-[1360px] content-center justify-start [gap:0]">
        <div
          className="framer-1t6sf90 items-center flex-none flex-col flex-nowrap place-content-center [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]"
          style={{ willChange: "transform", transform: "none" }}
        >
          <div className="ssr-variant">
            <div className="framer-4qsm2d flex-none [z-index:0]">
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
                  className="[corner-shape:inherit] [object-position:50%_54%] object-cover"
                  style={
                    {
                      display: "block",
                      width: "100%",
                      height: "100%",
                      borderRadius: "inherit",
                    } as CSSProperties
                  }
                  decoding="auto"
                  width="2560"
                  height="1706"
                  sizes="calc(min(100vw, 1360px) - 64px)"
                  srcSet="/site-assets/c2837ae4de2be189.avif 512w, /site-assets/5a871c76ead85d7c.avif 1024w, /site-assets/c5cab27aeb0f6025.avif 2048w, /site-assets/dac14a14c3f132b5.avif 2560w"
                  src="/site-assets/dac14a14c3f132b5.avif"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="framer-itp8jh flex-none [z-index:1]" />
          <div className="framer-fubatd flex-none [z-index:1]" />
          <div className="framer-v4ws0l items-center flex-none flex-col flex-nowrap gap-[14px] max-w-[720px] content-center justify-start [z-index:2]">
            <div
              className="framer-1xr3o2p [word-break:break-word]"
              style={{ transform: "none" }}
              data-framer-component-type="RichTextContainer"
            >
              <h2
                className="framer-text framer-styles-preset-z55pe9"
                style={
                  {
                    "--framer-text-alignment": "center",
                    "--framer-text-color":
                      "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                  } as CSSProperties
                }
                dir="auto"
              >
                <span
                  className="[opacity:1]"
                  style={{ display: "inline-block", transform: "none" }}
                >
                  Beyond
                </span>{" "}
                <span
                  className="[opacity:1]"
                  style={{ display: "inline-block", transform: "none" }}
                >
                  the
                </span>{" "}
                <span
                  className="[opacity:1]"
                  style={{ display: "inline-block", transform: "none" }}
                >
                  destination,
                </span>{" "}
                <span
                  className="[opacity:1]"
                  style={{ display: "inline-block", transform: "none" }}
                >
                  creating
                </span>{" "}
                <span
                  className="[opacity:1]"
                  style={{ display: "inline-block", transform: "none" }}
                >
                  memories
                </span>{" "}
                <span
                  className="[opacity:1]"
                  style={{ display: "inline-block", transform: "none" }}
                >
                  of
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
                  lifetime
                </span>
              </h2>
            </div>
            <div
              className="framer-1er7xz5 max-w-[405px] [word-break:break-word] will-change-transform opacity-[0.974299]"
              style={{ transform: "none" }}
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="framer-text framer-styles-preset-nsw7a4"
                style={
                  {
                    "--framer-text-alignment": "center",
                    "--framer-text-color":
                      "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                  } as CSSProperties
                }
                dir="auto"
              >
                The best part of a trip is often the road between the places you
                planned.
              </p>
            </div>
            <div className="framer-174tn90 items-center flex-none flex-row flex-nowrap gap-[10px] place-content-center">
              <div className="framer-n9m2s-container">
                <a
                  className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "1px",
                      "--border-color": "rgba(255, 255, 255, 0)",
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
                  href="/cars"
                  tabIndex={0}
                >
                  <div
                    className="framer-bisomo [opacity:1]"
                    style={{ transform: "none" }}
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-p3aiuu"
                      style={
                        { "--framer-text-alignment": "center" } as CSSProperties
                      }
                      dir="auto"
                    >
                      Explore the fleet
                    </p>
                  </div>
                  <div
                    className="framer-156tqkg-container flex-none [opacity:1]"
                    {...({ name: "Arrow" } as any)}
                  >
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
                      <path d="M5 12h13M13 6.6 18.6 12 13 17.4" />
                    </svg>
                  </div>
                </a>
              </div>
              <div className="framer-1888ydq-container">
                <a
                  className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-1c9kbig items-center flex-row flex-nowrap gap-[8px] place-content-center [opacity:1]"
                  style={
                    {
                      "--border-bottom-width": "1px",
                      "--border-color":
                        "var(--token-483c565b-fb9d-461c-8f3c-18302e2d0b73)",
                      "--border-left-width": "1px",
                      "--border-right-width": "1px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      backgroundColor:
                        "var(--token-095c31d1-50cc-46db-81fb-3576d106af0e)",
                      borderRadius: "6px",
                    } as CSSProperties
                  }
                  data-border="true"
                  href="/locations#routes"
                  tabIndex={0}
                >
                  <div
                    className="framer-bisomo [opacity:1]"
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
                      className="framer-text framer-styles-preset-p3aiuu"
                      style={
                        {
                          "--framer-text-alignment": "center",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
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
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionReviews() {
  return (
    <section
      className="framer-1g5cm8b items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0]"
      id="reviews"
    >
      <div className="framer-1unchoz items-start flex-none flex-col flex-nowrap max-w-[1360px] [place-content:flex-start]">
        <div className="framer-1huzh4a [@media(max-width:680.98px)]:gap-[16px] [@media(min-width:681px)_and_(max-width:1199.98px)]:gap-[16px]">
          <div className="framer-1loffqj items-start flex-none flex-col flex-nowrap gap-[8px] [place-content:flex-start]">
            <div
              className="framer-115xi9p [@media(max-width:680.98px)]:[word-break:break-word] [@media(min-width:681px)_and_(max-width:1199.98px)]:[word-break:break-word]"
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
                  What
                </span>{" "}
                <span
                  className="[opacity:1]"
                  style={{ display: "inline-block", transform: "none" }}
                >
                  drivers
                </span>{" "}
                <span
                  className="[opacity:1]"
                  style={{ display: "inline-block", transform: "none" }}
                >
                  say
                </span>
              </h2>
            </div>
            <div
              className="framer-1v2vday [@media(max-width:680.98px)]:max-w-[520px] [@media(max-width:680.98px)]:[word-break:break-word] [@media(min-width:681px)_and_(max-width:1199.98px)]:max-w-[520px] [@media(min-width:681px)_and_(max-width:1199.98px)]:[word-break:break-word] will-change-transform [opacity:1]"
              style={{ transform: "none" }}
              data-framer-component-type="RichTextContainer"
            >
              <p
                className="framer-text framer-styles-preset-nsw7a4"
                style={{ "--framer-text-alignment": "start" } as CSSProperties}
                dir="auto"
              >
                Collected from 48,912 verified trips in the last twelve months.
              </p>
            </div>
          </div>
          <div className="framer-zdw2jl items-center flex-none flex-row flex-nowrap gap-[10px] content-center justify-start">
            <div
              className="framer-zji0z4"
              style={{ transform: "none" }}
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
                    "--framer-font-size": "24px",
                    "--framer-font-variation-axes": '"opsz" 14, "wght" 600',
                    "--framer-letter-spacing": "-0.03em",
                    "--framer-line-height": "1.55em",
                    "--framer-text-color":
                      "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                  } as CSSProperties
                }
                dir="auto"
              >
                4.9
              </p>
            </div>
            <div className="framer-1b2q096-container flex-none">
              <span
                className="items-center [gap:2px] [min-width:max-content]"
                style={{
                  position: "relative",
                  display: "flex",
                  height: "14px",
                  lineHeight: "0",
                }}
                role="img"
                aria-label="5 out of 5 stars"
              >
                <svg
                  className="[flex:0_0_auto]"
                  style={{ display: "block" }}
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.8-5.2-2.75L6.8 19.6l1-5.8-4.2-4.1 5.8-.85L12 3.6Z"
                    fill="var(--token-7440a65c-f51d-497c-8c3a-6c1cfe846d88)"
                  />
                </svg>
                <svg
                  className="[flex:0_0_auto]"
                  style={{ display: "block" }}
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.8-5.2-2.75L6.8 19.6l1-5.8-4.2-4.1 5.8-.85L12 3.6Z"
                    fill="var(--token-7440a65c-f51d-497c-8c3a-6c1cfe846d88)"
                  />
                </svg>
                <svg
                  className="[flex:0_0_auto]"
                  style={{ display: "block" }}
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.8-5.2-2.75L6.8 19.6l1-5.8-4.2-4.1 5.8-.85L12 3.6Z"
                    fill="var(--token-7440a65c-f51d-497c-8c3a-6c1cfe846d88)"
                  />
                </svg>
                <svg
                  className="[flex:0_0_auto]"
                  style={{ display: "block" }}
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.8-5.2-2.75L6.8 19.6l1-5.8-4.2-4.1 5.8-.85L12 3.6Z"
                    fill="var(--token-7440a65c-f51d-497c-8c3a-6c1cfe846d88)"
                  />
                </svg>
                <svg
                  className="[flex:0_0_auto]"
                  style={{ display: "block" }}
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.8-5.2-2.75L6.8 19.6l1-5.8-4.2-4.1 5.8-.85L12 3.6Z"
                    fill="var(--token-7440a65c-f51d-497c-8c3a-6c1cfe846d88)"
                  />
                </svg>
              </span>
            </div>
            <div className="ssr-variant">
              <div
                className="framer-5cbput"
                style={{ transform: "none" }}
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="framer-text framer-styles-preset-1e1duze"
                  style={
                    {
                      "--framer-text-color":
                        "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
                    } as CSSProperties
                  }
                  dir="auto"
                  data-site-import-responsive="992"
                >
                  average
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="framer-dgwb7m flex-none gap-[16px] justify-center">
          <div
            className="framer-13cszfv will-change-transform opacity-[0.987264]"
            style={{ transform: "none" }}
          >
            <div className="ssr-variant">
              <div className="framer-13ywdh0-container">
                <figure
                  className="framer-qu3yb framer-71sfr framer-ip2yS framer-oX6dW framer-2mm8px items-start flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                  style={{
                    backgroundColor:
                      "var(--token-0a4bf73e-d9bf-4797-a11c-ce5ea8039a5e)",
                    height: "100%",
                    width: "100%",
                    borderRadius: "8px",
                  }}
                >
                  <div className="framer-1czguwe-container flex-none [opacity:1]">
                    <span
                      className="items-center [gap:2px] [min-width:max-content]"
                      style={{
                        position: "relative",
                        display: "flex",
                        height: "14px",
                        lineHeight: "0",
                      }}
                      role="img"
                      aria-label="5 out of 5 stars"
                    >
                      <svg
                        className="[flex:0_0_auto]"
                        style={{ display: "block" }}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.8-5.2-2.75L6.8 19.6l1-5.8-4.2-4.1 5.8-.85L12 3.6Z"
                          fill="var(--token-7440a65c-f51d-497c-8c3a-6c1cfe846d88)"
                        />
                      </svg>
                      <svg
                        className="[flex:0_0_auto]"
                        style={{ display: "block" }}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.8-5.2-2.75L6.8 19.6l1-5.8-4.2-4.1 5.8-.85L12 3.6Z"
                          fill="var(--token-7440a65c-f51d-497c-8c3a-6c1cfe846d88)"
                        />
                      </svg>
                      <svg
                        className="[flex:0_0_auto]"
                        style={{ display: "block" }}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.8-5.2-2.75L6.8 19.6l1-5.8-4.2-4.1 5.8-.85L12 3.6Z"
                          fill="var(--token-7440a65c-f51d-497c-8c3a-6c1cfe846d88)"
                        />
                      </svg>
                      <svg
                        className="[flex:0_0_auto]"
                        style={{ display: "block" }}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.8-5.2-2.75L6.8 19.6l1-5.8-4.2-4.1 5.8-.85L12 3.6Z"
                          fill="var(--token-7440a65c-f51d-497c-8c3a-6c1cfe846d88)"
                        />
                      </svg>
                      <svg
                        className="[flex:0_0_auto]"
                        style={{ display: "block" }}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.8-5.2-2.75L6.8 19.6l1-5.8-4.2-4.1 5.8-.85L12 3.6Z"
                          fill="var(--token-7440a65c-f51d-497c-8c3a-6c1cfe846d88)"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="framer-1angzdq items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                    <div
                      className="framer-16b8a4n [word-break:break-word] [opacity:1]"
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
                        className="framer-text framer-styles-preset-nsw7a4"
                        style={
                          {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Landed in Denpasar at midnight and the car was waiting
                        at the kerb with the seat already pushed back for me.
                        The whole handover took four minutes.
                      </p>
                    </div>
                  </div>
                  <div className="framer-ptxpc2 flex-[1_0_0] [opacity:1]" />
                  <figcaption className="framer-kvpbtd items-center flex-none flex-row flex-nowrap gap-[10px] content-center justify-start [padding:4px_0_0] [opacity:1]">
                    <div
                      className="framer-xkyfr8 flex-none [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                      style={{ borderRadius: "999px" }}
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
                          width="160"
                          height="156"
                          src="/site-assets/c5a8289bc03cf6bd.webp"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="framer-1jruz3h items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-10zj5zp [opacity:1]"
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
                          Maya Andersen
                        </p>
                      </div>
                      <div
                        className="framer-q1lqnb [opacity:1]"
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
                          className="framer-text framer-styles-preset-1a6wac2"
                          style={
                            {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Bali · Jeep Wrangler
                        </p>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div
            className="framer-13cszfv will-change-transform opacity-[0.987141]"
            style={{ transform: "none" }}
          >
            <div className="ssr-variant">
              <div className="framer-13ywdh0-container">
                <figure
                  className="framer-qu3yb framer-71sfr framer-ip2yS framer-oX6dW framer-2mm8px items-start flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                  style={{
                    backgroundColor:
                      "var(--token-0a4bf73e-d9bf-4797-a11c-ce5ea8039a5e)",
                    height: "100%",
                    width: "100%",
                    borderRadius: "8px",
                  }}
                >
                  <div className="framer-1czguwe-container flex-none [opacity:1]">
                    <span
                      className="items-center [gap:2px] [min-width:max-content]"
                      style={{
                        position: "relative",
                        display: "flex",
                        height: "14px",
                        lineHeight: "0",
                      }}
                      role="img"
                      aria-label="5 out of 5 stars"
                    >
                      <svg
                        className="[flex:0_0_auto]"
                        style={{ display: "block" }}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.8-5.2-2.75L6.8 19.6l1-5.8-4.2-4.1 5.8-.85L12 3.6Z"
                          fill="var(--token-7440a65c-f51d-497c-8c3a-6c1cfe846d88)"
                        />
                      </svg>
                      <svg
                        className="[flex:0_0_auto]"
                        style={{ display: "block" }}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.8-5.2-2.75L6.8 19.6l1-5.8-4.2-4.1 5.8-.85L12 3.6Z"
                          fill="var(--token-7440a65c-f51d-497c-8c3a-6c1cfe846d88)"
                        />
                      </svg>
                      <svg
                        className="[flex:0_0_auto]"
                        style={{ display: "block" }}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.8-5.2-2.75L6.8 19.6l1-5.8-4.2-4.1 5.8-.85L12 3.6Z"
                          fill="var(--token-7440a65c-f51d-497c-8c3a-6c1cfe846d88)"
                        />
                      </svg>
                      <svg
                        className="[flex:0_0_auto]"
                        style={{ display: "block" }}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.8-5.2-2.75L6.8 19.6l1-5.8-4.2-4.1 5.8-.85L12 3.6Z"
                          fill="var(--token-7440a65c-f51d-497c-8c3a-6c1cfe846d88)"
                        />
                      </svg>
                      <svg
                        className="[flex:0_0_auto]"
                        style={{ display: "block" }}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.8-5.2-2.75L6.8 19.6l1-5.8-4.2-4.1 5.8-.85L12 3.6Z"
                          fill="var(--token-7440a65c-f51d-497c-8c3a-6c1cfe846d88)"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="framer-1angzdq items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                    <div
                      className="framer-16b8a4n [word-break:break-word] [opacity:1]"
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
                        className="framer-text framer-styles-preset-nsw7a4"
                        style={
                          {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        I booked a one-way from Munich to Berlin expecting a
                        painful surcharge. There wasn’t one. The price on the
                        search page was the price on the invoice.
                      </p>
                    </div>
                  </div>
                  <div className="framer-ptxpc2 flex-[1_0_0] [opacity:1]" />
                  <figcaption className="framer-kvpbtd items-center flex-none flex-row flex-nowrap gap-[10px] content-center justify-start [padding:4px_0_0] [opacity:1]">
                    <div
                      className="framer-xkyfr8 flex-none [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                      style={{ borderRadius: "999px" }}
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
                          width="160"
                          height="160"
                          src="/site-assets/1e663ce9be142538.webp"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="framer-1jruz3h items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-10zj5zp [opacity:1]"
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
                          Tomas Reiner
                        </p>
                      </div>
                      <div
                        className="framer-q1lqnb [opacity:1]"
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
                          className="framer-text framer-styles-preset-1a6wac2"
                          style={
                            {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Munich · Audi A6 Avant
                        </p>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div
            className="framer-13cszfv will-change-transform opacity-[0.987141]"
            style={{ transform: "none" }}
          >
            <div className="ssr-variant">
              <div className="framer-13ywdh0-container">
                <figure
                  className="framer-qu3yb framer-71sfr framer-ip2yS framer-oX6dW framer-2mm8px items-start flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                  style={{
                    backgroundColor:
                      "var(--token-0a4bf73e-d9bf-4797-a11c-ce5ea8039a5e)",
                    height: "100%",
                    width: "100%",
                    borderRadius: "8px",
                  }}
                >
                  <div className="framer-1czguwe-container flex-none [opacity:1]">
                    <span
                      className="items-center [gap:2px] [min-width:max-content]"
                      style={{
                        position: "relative",
                        display: "flex",
                        height: "14px",
                        lineHeight: "0",
                      }}
                      role="img"
                      aria-label="4 out of 5 stars"
                    >
                      <svg
                        className="[flex:0_0_auto]"
                        style={{ display: "block" }}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.8-5.2-2.75L6.8 19.6l1-5.8-4.2-4.1 5.8-.85L12 3.6Z"
                          fill="var(--token-7440a65c-f51d-497c-8c3a-6c1cfe846d88)"
                        />
                      </svg>
                      <svg
                        className="[flex:0_0_auto]"
                        style={{ display: "block" }}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.8-5.2-2.75L6.8 19.6l1-5.8-4.2-4.1 5.8-.85L12 3.6Z"
                          fill="var(--token-7440a65c-f51d-497c-8c3a-6c1cfe846d88)"
                        />
                      </svg>
                      <svg
                        className="[flex:0_0_auto]"
                        style={{ display: "block" }}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.8-5.2-2.75L6.8 19.6l1-5.8-4.2-4.1 5.8-.85L12 3.6Z"
                          fill="var(--token-7440a65c-f51d-497c-8c3a-6c1cfe846d88)"
                        />
                      </svg>
                      <svg
                        className="[flex:0_0_auto]"
                        style={{ display: "block" }}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.8-5.2-2.75L6.8 19.6l1-5.8-4.2-4.1 5.8-.85L12 3.6Z"
                          fill="var(--token-7440a65c-f51d-497c-8c3a-6c1cfe846d88)"
                        />
                      </svg>
                      <svg
                        className="[flex:0_0_auto]"
                        style={{ display: "block" }}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="m12 3.6 2.6 5.3 5.8.85-4.2 4.1 1 5.8-5.2-2.75L6.8 19.6l1-5.8-4.2-4.1 5.8-.85L12 3.6Z"
                          fill="var(--token-b2607889-2439-4e51-a452-fee4ec781729)"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="framer-1angzdq items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                    <div
                      className="framer-16b8a4n [word-break:break-word] [opacity:1]"
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
                        className="framer-text framer-styles-preset-nsw7a4"
                        style={
                          {
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        We needed seven seats and a roof box on two days’
                        notice. Support found both, and the driver option meant
                        nobody had to tackle Seoul traffic.
                      </p>
                    </div>
                  </div>
                  <div className="framer-ptxpc2 flex-[1_0_0] [opacity:1]" />
                  <figcaption className="framer-kvpbtd items-center flex-none flex-row flex-nowrap gap-[10px] content-center justify-start [padding:4px_0_0] [opacity:1]">
                    <div
                      className="framer-xkyfr8 flex-none [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                      style={{ borderRadius: "999px" }}
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
                          width="160"
                          height="158"
                          src="/site-assets/b19fe4db70a67038.webp"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="framer-1jruz3h items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-10zj5zp [opacity:1]"
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
                          Hana Kim
                        </p>
                      </div>
                      <div
                        className="framer-q1lqnb [opacity:1]"
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
                          className="framer-text framer-styles-preset-1a6wac2"
                          style={
                            {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Seoul · VW ID. Buzz
                        </p>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionFAQ() {
  return (
    <section
      className="framer-o0unji items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0]"
      id="faq"
    >
      <div className="framer-12iubb items-start max-w-[1360px] [place-content:flex-start]">
        <div className="framer-171fw1s items-start gap-[8px] [place-content:flex-start]">
          <div
            className="framer-o1obrj [word-break:break-word]"
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
                Questions,
              </span>{" "}
              <span
                className="[opacity:1]"
                style={{ display: "inline-block", transform: "none" }}
              >
                answered
              </span>
            </h2>
          </div>
          <div
            className="framer-yi4tfi max-w-[520px] [word-break:break-word] will-change-transform [opacity:1]"
            style={{ transform: "none" }}
            data-framer-component-type="RichTextContainer"
          >
            <p
              className="framer-text framer-styles-preset-nsw7a4"
              style={{ "--framer-text-alignment": "start" } as CSSProperties}
              dir="auto"
            >
              Still stuck? Our team replies in under five minutes, any hour.
            </p>
          </div>
          <div className="framer-2rrhwi items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start]">
            <div className="framer-151ali6-container">
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
                href="/help"
                tabIndex={0}
              >
                <div
                  className="framer-bisomo [opacity:1]"
                  style={{ transform: "none" }}
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-e793i5"
                    style={
                      { "--framer-text-alignment": "center" } as CSSProperties
                    }
                    dir="auto"
                  >
                    Visit the help centre
                  </p>
                </div>
                <div
                  className="framer-156tqkg-container flex-none [opacity:1]"
                  {...({ name: "Arrow" } as any)}
                >
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
                    <path d="M5 12h13M13 6.6 18.6 12 13 17.4" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div
          className="framer-lkr3j3 items-start [gap:0] [place-content:flex-start]"
          data-border="true"
        >
          <div
            className="framer-1kuxsjk items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
            style={{ transform: "none" }}
          >
            <div className="ssr-variant">
              <div className="framer-4z0ve5-container flex-none">
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
                        className="framer-1okcbnu [opacity:1]"
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
            className="framer-1kuxsjk items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
            style={{ transform: "none" }}
          >
            <div className="ssr-variant">
              <div className="framer-4z0ve5-container flex-none">
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
                        className="framer-1okcbnu [opacity:1]"
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
                              "--framer-text-alignment": "start",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          What do I need to pick up a car?
                        </p>
                      </div>
                    </div>
                    <div
                      className="framer-g34mf items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
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
                          borderRadius: "999px",
                          transform: "rotate(45deg)",
                        } as CSSProperties
                      }
                      data-border="true"
                    >
                      <div className="framer-1fhab3f-container flex-none [opacity:1]">
                        <svg
                          className="[color:var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)] fill-none [overflow:visible]"
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
                  <div className="framer-km75d0 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                    <div
                      className="framer-v3qgff max-w-[592.9px] [word-break:break-word] [opacity:1]"
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
                            "--framer-text-alignment": "start",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        A full driving licence held for at least twelve months,
                        the payment card used for the booking, and a passport or
                        national ID. Some countries also need an International
                        Driving Permit, and we flag it on the city page and your
                        confirmation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="framer-1kuxsjk items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
            style={{ transform: "none" }}
          >
            <div className="ssr-variant">
              <div className="framer-4z0ve5-container flex-none">
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
                        className="framer-1okcbnu [opacity:1]"
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
            className="framer-1kuxsjk items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
            style={{ transform: "none" }}
          >
            <div className="ssr-variant">
              <div className="framer-4z0ve5-container flex-none">
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
                        className="framer-1okcbnu [opacity:1]"
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
            className="framer-1kuxsjk items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
            style={{ transform: "none" }}
          >
            <div className="ssr-variant">
              <div className="framer-4z0ve5-container flex-none">
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
                        className="framer-1okcbnu [opacity:1]"
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
              data-framer-page-link-current="true"
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
                  data-site-import-responsive="1166"
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
                  data-site-import-responsive="1169"
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
                    data-site-import-responsive="1177"
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
                    data-site-import-responsive="1186"
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
                    data-site-import-responsive="1191"
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
                  href="/locations"
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
                  href="/locations#routes"
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
                    data-site-import-responsive="1211"
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
                    data-site-import-responsive="1227"
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
                    data-site-import-responsive="1247"
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
                  data-site-import-responsive="1267"
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
              data-site-import-responsive="1295"
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
