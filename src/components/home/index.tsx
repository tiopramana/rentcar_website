import capturedCSS from "../styles/pages/index.css?raw";
import { SiteImportMobileNav } from "../components/site-import-mobile.nav";
import { useSyncExternalStore } from "react";

export function HeroSection() {
  <div>
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
                    Booking takes about two minutes. Cancelling takes one click.
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
                          Every quote shows protection, fees and taxes up front.
                          The total at checkout is the total on your card.
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
                          Every quote shows protection, fees and taxes up front.
                          The total at checkout is the total on your card.
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
  </div>;
}
