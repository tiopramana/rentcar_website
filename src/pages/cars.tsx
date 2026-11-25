import { useState, type CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Filter, X } from "lucide-react";
import { Button } from "../components/ui/button";
import capturedCSS from "../styles/pages/cars.css?raw";
import { SiteImportMobileNav } from "../components/site-import-mobile.nav";

export const Route = createFileRoute("/cars")({
  head: () => ({
    meta: [
      { title: "Available cars · Horizone" },
      {
        name: "description",
        content:
          "Browse Horizone’s 26 rental cars by vehicle type, transmission, fuel, seating, and price.",
      },
      { property: "og:title", content: "Available cars · Horizone" },
      {
        property: "og:description",
        content:
          "Browse Horizone’s 26 rental cars by vehicle type, transmission, fuel, seating, and price.",
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
  return (
    <>
      <style>{`${capturedCSS}
.site-import-mobile-filter-toggle { display: none !important; }
@media (max-width: 767px) {
  .site-import-mobile-filter-toggle { display: inline-flex !important; }
  [data-site-import-mobile-filters="closed"] { display: none !important; }
}`}</style>
      <SiteImportMobileNav />
      <div id="main">
        <div
          className="framer-PWl0o framer-pdvr4y items-center flex-col flex-nowrap content-center justify-start [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [min-height:100vh]"
          style={{ width: "auto" }}
          data-layout-template="true"
        >
          <ImportedDivHeader />
          <ImportedDivHeader2 />
          <div
            className="framer-Rc5rN framer-iJjgk framer-1zOQh framer-40PBB framer-JcTpc framer-qO70Z framer-3tJNm framer-14ylo73 items-center flex-col flex-nowrap content-center justify-start [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [min-height:100vh]"
            style={{ width: "auto", display: "contents" }}
          >
            <div className="framer-jbdi6k flex-none" />
            <ImportedSectionSearch />
            <ImportedSectionResults />
          </div>
          <div id="overlay" />
          <div className="framer-z6kdd7 grow" />
          <div className="framer-176qjoj-container flex-none [order:1002]">
            <div className="ssr-variant">
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

function ImportedDivHeader() {
  return (
    <div
      className="framer-1a6bpj8 items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0] [left:0] [order:-1000] [right:0] [top:0] [z-index:10]"
      data-site-import-desktop-header=""
    >
      <div className="framer-1cywj9w-container flex-none">
        <div className="ssr-variant">
          <div style={{ display: "contents" }}>
            <header
              className="framer-rQnLE framer-MCyNe framer-3tJNm framer-eHiTe framer-ccphy framer-iJjgk framer-GvPaN framer-AAOB7 framer-BdrqZ framer-KgJtC framer-EhiDw framer-ANzsm framer-71sfr framer-7tu3jo items-center flex-col flex-nowrap content-center justify-start [gap:0] [opacity:1]"
              style={{ width: "100%" }}
            >
              <div
                className="framer-xub7c0 items-center flex-none flex-row flex-nowrap gap-[16px] max-w-[1296px] content-center justify-start [backdrop-filter:blur(18px)] [opacity:1]"
                style={{
                  backgroundColor:
                    "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                  borderRadius: "8px",
                }}
              >
                <div className="framer-16wo98v items-center content-center justify-start [gap:0] will-change-transform [opacity:1] transform-none">
                  <a
                    className="framer-9v0yg3 framer-trb62s items-center flex-none flex-row flex-nowrap gap-[10px] content-center justify-start [opacity:1]"
                    href="/"
                  >
                    <div
                      className="framer-1xqfc3z items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
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
                      className="framer-e4k9vn justify-start [outline:none] transform-none [opacity:1]"
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
                <nav
                  className="framer-1i3tgd2 items-center flex-none flex-row flex-nowrap content-center justify-start [gap:0] [padding:11px_4px] [backdrop-filter:blur(14px)] will-change-transform [opacity:1] transform-none"
                  style={
                    {
                      "--border-bottom-width": "1px",
                      "--border-color": "rgba(0, 0, 0, 0.05)",
                      "--border-left-width": "1px",
                      "--border-right-width": "1px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      backgroundColor: "rgba(0, 0, 0, 0.05)",
                      borderRadius: "999px",
                    } as CSSProperties
                  }
                  aria-label="Primary"
                  data-border="true"
                >
                  <div className="framer-ybw96t items-center flex-none flex-row flex-nowrap content-center justify-start [gap:0] [opacity:1]">
                    <div
                      className="framer-xz7gek justify-start [outline:none] transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
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
                          Cars
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="framer-y9hjjg items-center flex-none flex-row flex-nowrap content-center justify-start [gap:0] [opacity:1]">
                    <div
                      className="framer-19u7ksj justify-start [outline:none] transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
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
                  <div className="framer-l2kyev items-center flex-none flex-row flex-nowrap content-center justify-start [gap:0] [opacity:1]">
                    <div
                      className="framer-zuohpb justify-start [outline:none] transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
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
                  <div className="framer-be67eb items-center flex-none flex-row flex-nowrap content-center justify-start [gap:0] [opacity:1]">
                    <div
                      className="framer-mczy6o justify-start [outline:none] transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
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
                  <div className="framer-11jschf items-center flex-none flex-row flex-nowrap content-center justify-start [gap:0] [opacity:1]">
                    <div
                      className="framer-12udemg justify-start [outline:none] transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
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
                <div className="framer-l53zpz items-center flex-[1_0_0] flex-row flex-nowrap gap-[8px] content-center justify-end will-change-transform [opacity:1] transform-none">
                  <div
                    className="framer-o8ok12 items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [will-change:var(--framer-will-change-effect-override,transform)] [backdrop-filter:blur(14px)] [opacity:1]"
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
                    className="framer-r1zzh items-center flex-none flex-row flex-nowrap gap-[6px] place-content-center [will-change:var(--framer-will-change-effect-override,transform)] [backdrop-filter:blur(14px)] [opacity:1]"
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
                    aria-label="Currency"
                    data-border="true"
                    id=":R1p:-:R7m6lp:-r1zzh"
                    tabIndex={0}
                  >
                    <div className="framer-1d4ql0i-container [opacity:1]">
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
                    <div
                      className="framer-1wlxx3k justify-start [outline:none] transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
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
                    <div className="framer-1ba9aot-container flex-none [opacity:1]">
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
                        <path d="M6.5 9.5 12 15l5.5-5.5" />
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

function ImportedDivHeader2() {
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
              className="framer-rQnLE framer-MCyNe framer-3tJNm framer-eHiTe framer-ccphy framer-iJjgk framer-GvPaN framer-AAOB7 framer-BdrqZ framer-KgJtC framer-EhiDw framer-ANzsm framer-71sfr framer-7tu3jo framer-v-1jhoykp items-center flex-col flex-nowrap content-center justify-start [gap:0] [opacity:1]"
              style={{ width: "100%" }}
            >
              <div
                className="framer-xub7c0 items-center flex-none flex-row flex-nowrap gap-[16px] max-w-[1296px] content-center justify-start [backdrop-filter:blur(18px)] [opacity:1]"
                style={{
                  backgroundColor:
                    "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                  borderRadius: "8px",
                }}
              >
                <div className="framer-16wo98v items-center content-center justify-start [gap:0] will-change-transform [opacity:1] transform-none">
                  <a
                    className="framer-9v0yg3 framer-trb62s items-center flex-none flex-row flex-nowrap gap-[10px] content-center justify-start [opacity:1]"
                    href="/"
                  >
                    <div
                      className="framer-1xqfc3z items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
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
                      className="framer-e4k9vn justify-start [outline:none] transform-none [opacity:1]"
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
                <div className="framer-l53zpz items-center flex-[1_0_0] flex-row flex-nowrap gap-[8px] content-center justify-end will-change-transform [opacity:1] transform-none">
                  <div
                    className="framer-o8ok12 items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [will-change:var(--framer-will-change-effect-override,transform)] [backdrop-filter:blur(14px)] [opacity:1]"
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
                    className="framer-eqtme5 items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [will-change:var(--framer-will-change-effect-override,transform)] [backdrop-filter:blur(14px)] [opacity:1]"
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

function ImportedSectionSearch() {
  return (
    <section className="framer-2samy items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0]">
      <div className="framer-35iw73 items-start flex-none flex-col flex-nowrap gap-[14px] max-w-[1360px] [place-content:flex-start]">
        <div className="framer-16y7svq-container">
          <nav
            className="framer-NUqMd framer-iJjgk framer-u5f0nz items-center flex-row flex-nowrap gap-[6px] content-center justify-start [padding:0] [opacity:1]"
            style={{
              backgroundColor:
                "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
            }}
          >
            <a className="framer-lp2hj3 framer-1wu2jx4 [opacity:1]" href="/">
              <div
                className="framer-scyp3 justify-start [outline:none] transform-none [opacity:1]"
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
                  Home
                </p>
              </div>
            </a>
            <div className="framer-owidis-container [opacity:1]">
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
            <div
              className="framer-llxoi2 justify-start [outline:none] transform-none [opacity:1]"
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
                Cars
              </p>
            </div>
          </nav>
        </div>
        <div
          className="framer-13bf5w2 items-center flex-none flex-row flex-wrap [@media(max-width:680.98px)]:gap-[10px] [opacity:1] transform-none"
          style={{ willChange: "transform" }}
          data-border="true"
        >
          <div className="framer-4l5ghz items-center flex-none flex-row flex-nowrap gap-[12px] content-center justify-start">
            <div className="framer-1gfolvf items-center flex-none flex-row flex-nowrap place-content-center [gap:0]">
              <div className="framer-1adyi03-container">
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
                  <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
                  <circle cx="12" cy="10" r="2.6" />
                </svg>
              </div>
            </div>
            <div className="framer-zmou3z items-start [gap:0] [place-content:flex-start]">
              <div
                className="framer-ep51qd justify-start [outline:none] [@media(max-width:680.98px)]:[word-break:break-word] transform-none"
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="framer-text"
                  style={
                    {
                      "--framer-font-family":
                        '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                      "--framer-font-size": "15px",
                      "--framer-font-variation-axes": '"opsz" 14, "wght" 600',
                      "--framer-letter-spacing": "-0.01em",
                      "--framer-line-height": "1.55em",
                      "--framer-text-color":
                        "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                    } as CSSProperties
                  }
                  dir="auto"
                >
                  Any location
                </p>
              </div>
              <div className="ssr-variant">
                <div
                  className="framer-15g7gwy justify-start [outline:none] [@media(max-width:680.98px)]:[word-break:break-word] transform-none"
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
                  >
                    Thu, 26 Nov, 10:00 AM → Tue, 1 Dec, 10:00 AM · 5 days ·
                    Self-drive
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="framer-1omx9fj items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start]"
            tabIndex={0}
          >
            <div className="ssr-variant">
              <div
                className="framer-j4cfmh-container"
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
                  role="button"
                  tabIndex={0}
                >
                  <div
                    className="framer-bisomo justify-start [outline:none] transform-none [opacity:1]"
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-e793i5"
                      style={
                        { "--framer-text-alignment": "center" } as CSSProperties
                      }
                      dir="auto"
                    >
                      Modify search
                    </p>
                  </div>
                </a>
              </div>
              <div
                className="framer-j4cfmh-container"
                style={
                  {
                    "--site-import-responsive-display": "block",
                  } as CSSProperties
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
                      borderRadius: "6px",
                    } as CSSProperties
                  }
                  data-border="true"
                  role="button"
                  tabIndex={0}
                >
                  <div
                    className="framer-bisomo justify-start [outline:none] transform-none [opacity:1]"
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-e793i5"
                      style={
                        { "--framer-text-alignment": "center" } as CSSProperties
                      }
                      dir="auto"
                    >
                      Modify search
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

function ImportedSectionResults() {
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <section className="framer-1cx4z15 items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0]">
      <div className="framer-18vp8id items-start flex-none flex-col flex-nowrap max-w-[1360px] [gap:0] [place-content:flex-start]">
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="site-import-mobile-filter-toggle mb-4"
          aria-expanded={filtersOpen}
          aria-controls="mobile-car-filters"
          onClick={() => setFiltersOpen((open) => !open)}
        >
          {filtersOpen ? (
            <X aria-hidden="true" />
          ) : (
            <Filter aria-hidden="true" />
          )}
          {filtersOpen ? "Close filters" : "Filters"}
        </Button>
        <div className="framer-1ts04d1 items-start [place-content:flex-start]">
          <div
            id="mobile-car-filters"
            className="framer-hesejp items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1] transform-none"
            style={{ willChange: "transform" }}
            data-border="true"
            data-site-import-mobile-filters={filtersOpen ? "open" : "closed"}
          >
            <div
              className="framer-1ky3cwg items-center flex-none flex-row flex-nowrap content-center justify-between"
              data-border="true"
            >
              <div
                className="framer-rqgrxr justify-start [outline:none] transform-none"
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="framer-text"
                  style={
                    {
                      "--framer-font-family":
                        '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                      "--framer-font-size": "15px",
                      "--framer-font-variation-axes": '"opsz" 14, "wght" 600',
                      "--framer-letter-spacing": "-0.01em",
                      "--framer-line-height": "1.55em",
                      "--framer-text-color":
                        "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                    } as CSSProperties
                  }
                  dir="auto"
                >
                  Filters
                </p>
              </div>
              <div
                className="framer-d07ty7 items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start]"
                tabIndex={0}
              >
                <div
                  className="framer-52wxzw justify-start [outline:none] transform-none"
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-12mwi2l"
                    style={
                      {
                        "--framer-text-alignment": "start",
                        "--framer-text-color":
                          "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    Reset all
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-5puvjb items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start]">
              <div
                className="framer-bptkan items-start flex-none flex-col flex-nowrap gap-[10px] [place-content:flex-start]"
                data-border="true"
              >
                <div
                  className="framer-1ga7gdi justify-start [outline:none] transform-none"
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text"
                    style={
                      {
                        "--framer-font-family":
                          '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                        "--framer-font-size": "13px",
                        "--framer-font-variation-axes": '"opsz" 14, "wght" 600',
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    Vehicle type
                  </p>
                </div>
                <div className="framer-17w4kls items-start flex-none flex-row flex-wrap gap-[6px] [place-content:flex-start]">
                  <div className="framer-b7jwdg-container">
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
                        className="framer-1lkim4k justify-start [outline:none] transform-none [opacity:1]"
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
                  <div className="framer-jt6de8-container">
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
                        className="framer-1lkim4k justify-start [outline:none] transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                  <div className="framer-1klb9by-container">
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
                        className="framer-1lkim4k justify-start [outline:none] transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                  <div className="framer-19hcuk1-container">
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
                        className="framer-1lkim4k justify-start [outline:none] transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          Wagon
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-1huidwc-container">
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
                        className="framer-1lkim4k justify-start [outline:none] transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                  <div className="framer-czxtmw-container">
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
                        className="framer-1lkim4k justify-start [outline:none] transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          Off-road
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-qcc900-container">
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
                        className="framer-1lkim4k justify-start [outline:none] transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                  <div className="framer-o0wbnb-container">
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
                        className="framer-1lkim4k justify-start [outline:none] transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                  <div className="framer-148osnn-container">
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
                        className="framer-1lkim4k justify-start [outline:none] transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          Convertible
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="framer-z8o6nt items-start flex-none flex-col flex-nowrap gap-[10px] [place-content:flex-start]"
                data-border="true"
              >
                <div
                  className="framer-upqfxu justify-start [outline:none] transform-none"
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text"
                    style={
                      {
                        "--framer-font-family":
                          '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                        "--framer-font-size": "13px",
                        "--framer-font-variation-axes": '"opsz" 14, "wght" 600',
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    Transmission
                  </p>
                </div>
                <div className="framer-1yluxbp items-start flex-none flex-row flex-nowrap gap-[2px] [place-content:flex-start]">
                  <div className="framer-g6qqay-container flex-[1_0_0]">
                    <div
                      className="framer-sfMm3 framer-AAOB7 framer-ilwoio items-center flex-row flex-nowrap gap-[6px] place-content-center [opacity:1]"
                      style={{
                        backgroundColor:
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                        width: "100%",
                        borderRadius: "4px",
                      }}
                      tabIndex={0}
                    >
                      <div
                        className="framer-wi9d5a justify-start [outline:none] transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-1bwd7xw"
                          style={
                            {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Any
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-1lbg8yz-container flex-[1_0_0]">
                    <div
                      className="framer-sfMm3 framer-AAOB7 framer-ilwoio items-center flex-row flex-nowrap gap-[6px] place-content-center [opacity:1]"
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        width: "100%",
                        borderRadius: "4px",
                      }}
                      tabIndex={0}
                    >
                      <div
                        className="framer-wi9d5a justify-start [outline:none] transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          Automatic
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-1rrl6wa-container flex-[1_0_0]">
                    <div
                      className="framer-sfMm3 framer-AAOB7 framer-ilwoio items-center flex-row flex-nowrap gap-[6px] place-content-center [opacity:1]"
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        width: "100%",
                        borderRadius: "4px",
                      }}
                      tabIndex={0}
                    >
                      <div
                        className="framer-wi9d5a justify-start [outline:none] transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          Manual
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="framer-82ewzx items-start flex-none flex-col flex-nowrap gap-[10px] [place-content:flex-start]"
                data-border="true"
              >
                <div
                  className="framer-zwxhdf justify-start [outline:none] transform-none"
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text"
                    style={
                      {
                        "--framer-font-family":
                          '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                        "--framer-font-size": "13px",
                        "--framer-font-variation-axes": '"opsz" 14, "wght" 600',
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    Fuel
                  </p>
                </div>
                <div className="framer-1py5tiw items-start flex-none flex-row flex-wrap gap-[6px] [place-content:flex-start]">
                  <div className="framer-1d3mekk-container">
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
                        className="framer-1lkim4k justify-start [outline:none] transform-none [opacity:1]"
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
                              "--framer-text-alignment": "start",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Any
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-1tevxs3-container">
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
                        className="framer-1lkim4k justify-start [outline:none] transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          Petrol
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-y5707s-container">
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
                        className="framer-1lkim4k justify-start [outline:none] transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          Diesel
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-v0rrcv-container">
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
                        className="framer-1lkim4k justify-start [outline:none] transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          Hybrid
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-119g4p6-container">
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
                        className="framer-1lkim4k justify-start [outline:none] transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                </div>
              </div>
              <div
                className="framer-1u53xdy items-start flex-none flex-col flex-nowrap gap-[10px] [place-content:flex-start]"
                data-border="true"
              >
                <div
                  className="framer-xtvydr justify-start [outline:none] transform-none"
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text"
                    style={
                      {
                        "--framer-font-family":
                          '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                        "--framer-font-size": "13px",
                        "--framer-font-variation-axes": '"opsz" 14, "wght" 600',
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    Seats
                  </p>
                </div>
                <div className="framer-ad3y8h items-start flex-none flex-row flex-wrap gap-[6px] [place-content:flex-start]">
                  <div className="framer-bzyza5-container">
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
                        className="framer-1lkim4k justify-start [outline:none] transform-none [opacity:1]"
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
                              "--framer-text-alignment": "start",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Any
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-vyyyte-container">
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
                        className="framer-1lkim4k justify-start [outline:none] transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          2+
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-xq58un-container">
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
                        className="framer-1lkim4k justify-start [outline:none] transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          4+
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-mmksp2-container">
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
                        className="framer-1lkim4k justify-start [outline:none] transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          5+
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-1hkx1yh-container">
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
                        className="framer-1lkim4k justify-start [outline:none] transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          7+
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="framer-xn48qc items-start flex-none flex-col flex-nowrap gap-[10px] [place-content:flex-start]">
                <div
                  className="framer-1rxqct5 justify-start [outline:none] transform-none"
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text"
                    style={
                      {
                        "--framer-font-family":
                          '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                        "--framer-font-size": "13px",
                        "--framer-font-variation-axes": '"opsz" 14, "wght" 600',
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    Guest rating
                  </p>
                </div>
                <div className="framer-pl1ujm items-start flex-none flex-row flex-wrap gap-[6px] [place-content:flex-start]">
                  <div className="framer-13qojay-container">
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
                        className="framer-1lkim4k justify-start [outline:none] transform-none [opacity:1]"
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
                              "--framer-text-alignment": "start",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Any
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-ezo86h-container">
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
                        className="framer-1lkim4k justify-start [outline:none] transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          4.7+
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-10zgif5-container">
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
                        className="framer-1lkim4k justify-start [outline:none] transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          4.8+
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-1neav96 items-start gap-[12px] [place-content:flex-start]">
            <div
              className="framer-1qqtxlb [@media(max-width:680.98px)]:gap-[14px] [@media(min-width:681px)_and_(max-width:1199.98px)]:gap-[14px] [opacity:1] transform-none"
              style={{ willChange: "transform" }}
            >
              <div className="framer-1494db3 items-start flex-none flex-col flex-nowrap gap-[2px] [place-content:flex-start]">
                <div
                  className="framer-1cdxoql justify-start [outline:none] transform-none"
                  data-framer-component-type="RichTextContainer"
                >
                  <h1
                    className="framer-text framer-styles-preset-1hwdddd"
                    style={
                      { "--framer-text-alignment": "start" } as CSSProperties
                    }
                    dir="auto"
                  >
                    26 cars in the fleet
                  </h1>
                </div>
                <div className="ssr-variant">
                  <div
                    className="framer-1g91o0w justify-start [outline:none] transform-none"
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
                    >
                      From $36 a day · free cancellation on every car
                    </p>
                  </div>
                </div>
              </div>
              <div className="framer-yobrk6 items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start">
                <div
                  className="framer-1jsahr2 items-center content-center justify-between"
                  data-border="true"
                  id="1jsahr2"
                  tabIndex={0}
                >
                  <div className="ssr-variant">
                    <div
                      className="framer-z1ct03 justify-start [outline:none] transform-none"
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1e1duze"
                        style={
                          {
                            "--framer-text-color":
                              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
                          } as CSSProperties
                        }
                        dir="auto"
                      >
                        Recommended
                      </p>
                    </div>
                  </div>
                  <div className="framer-1vcprag-container">
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
                      <path d="M6.5 9.5 12 15l5.5-5.5" />
                    </svg>
                  </div>
                </div>
                <div className="framer-3dlm1s">
                  <div
                    className="framer-u4lz1d items-center flex-none flex-row flex-nowrap place-content-center [gap:0]"
                    style={
                      {
                        "--13gyznc": "#ffffff",
                        "--1rv4okn": "#ffffff",
                      } as CSSProperties
                    }
                    tabIndex={0}
                  >
                    <div className="framer-kz5sct-container">
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
                        <rect x="4" y="4" width="6.5" height="6.5" rx="1.5" />
                        <rect
                          x="13.5"
                          y="4"
                          width="6.5"
                          height="6.5"
                          rx="1.5"
                        />
                        <rect
                          x="4"
                          y="13.5"
                          width="6.5"
                          height="6.5"
                          rx="1.5"
                        />
                        <rect
                          x="13.5"
                          y="13.5"
                          width="6.5"
                          height="6.5"
                          rx="1.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    className="framer-s9u5uf items-center flex-none flex-row flex-nowrap place-content-center [gap:0]"
                    style={
                      {
                        "--1k6gix9": "rgba(255, 255, 255, 0)",
                        "--1s75vsw": "rgba(255, 255, 255, 0)",
                      } as CSSProperties
                    }
                    tabIndex={0}
                  >
                    <div className="framer-19ssf98-container">
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
                        <path d="M9 6.5h11M9 12h11M9 17.5h11M4.5 6.5h.01M4.5 12h.01M4.5 17.5h.01" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-lswiih items-start flex-none flex-row flex-nowrap gap-[10px] [place-content:flex-start]">
              <div className="framer-1bafggq items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start]">
                <div className="framer-de28p6-container flex-none">
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
                className="framer-1828qr4 justify-start [outline:none] [word-break:break-word] transform-none"
                data-framer-component-type="RichTextContainer"
              >
                <p
                  className="framer-text"
                  style={
                    {
                      "--framer-font-family":
                        '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                      "--framer-font-size": "13.6px",
                      "--framer-font-variation-axes": '"opsz" 14, "wght" 400',
                      "--framer-line-height": "1.45em",
                      "--framer-text-color":
                        "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
                    } as CSSProperties
                  }
                  dir="auto"
                >
                  Showing every car in the fleet.{" "}
                  <strong className="framer-text">
                    Choose a pick-up location
                  </strong>{" "}
                  to see what’s available there and the exact total.
                </p>
              </div>
            </div>
            <div className="framer-fqhnoh">
              <div className="framer-17ydk4p">
                <div className="framer-185xtcd will-change-transform [opacity:1] transform-none">
                  <div className="ssr-variant">
                    <div
                      className="framer-1awfs1t-container"
                      data-site-import-desktop-variant=""
                    >
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
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Toyota Corolla Hybrid
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
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
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
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
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                    <div
                      className="framer-1awfs1t-container"
                      style={
                        {
                          "--site-import-responsive-display": "block",
                        } as CSSProperties
                      }
                      data-site-import-mobile-variant=""
                    >
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
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Toyota Corolla Hybrid
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
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
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
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
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                <div className="framer-185xtcd will-change-transform [opacity:1] transform-none">
                  <div className="ssr-variant">
                    <div
                      className="framer-1awfs1t-container"
                      data-site-import-desktop-variant=""
                    >
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
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Tesla Model 3
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
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
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
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
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                    <div
                      className="framer-1awfs1t-container"
                      style={
                        {
                          "--site-import-responsive-display": "block",
                        } as CSSProperties
                      }
                      data-site-import-mobile-variant=""
                    >
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
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Tesla Model 3
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
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
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
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
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                <div className="framer-185xtcd will-change-transform [opacity:1] transform-none">
                  <div className="ssr-variant">
                    <div
                      className="framer-1awfs1t-container"
                      data-site-import-desktop-variant=""
                    >
                      <a
                        className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                        style={{
                          background:
                            "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        href="/cars/modely"
                      >
                        <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                          <div
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Tesla Model Y
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              dir="auto"
                            >
                              Automatic · Electric · 533 km
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
                              srcSet="/site-assets/c816deae36b25bcf.avif 512w, /site-assets/5a21c2d196abe9e5.avif 1000w"
                              src="/site-assets/5a21c2d196abe9e5.avif"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                        <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                          <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-yi7eqs"
                                  dir="auto"
                                >
                                  $92
                                </p>
                              </div>
                              <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                                <div
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                    <div
                      className="framer-1awfs1t-container"
                      style={
                        {
                          "--site-import-responsive-display": "block",
                        } as CSSProperties
                      }
                      data-site-import-mobile-variant=""
                    >
                      <a
                        className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                        style={{
                          background:
                            "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        href="/cars/modely"
                      >
                        <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                          <div
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Tesla Model Y
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              dir="auto"
                            >
                              Automatic · Electric · 533 km
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
                              srcSet="/site-assets/c816deae36b25bcf.avif 512w, /site-assets/5a21c2d196abe9e5.avif 1000w"
                              src="/site-assets/5a21c2d196abe9e5.avif"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                        <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                          <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-yi7eqs"
                                  dir="auto"
                                >
                                  $92
                                </p>
                              </div>
                              <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                                <div
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                <div className="framer-185xtcd will-change-transform [opacity:1] transform-none">
                  <div className="ssr-variant">
                    <div
                      className="framer-1awfs1t-container"
                      data-site-import-desktop-variant=""
                    >
                      <a
                        className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
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
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Volkswagen Polo
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
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
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
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
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                    <div
                      className="framer-1awfs1t-container"
                      style={
                        {
                          "--site-import-responsive-display": "block",
                        } as CSSProperties
                      }
                      data-site-import-mobile-variant=""
                    >
                      <a
                        className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
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
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Volkswagen Polo
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
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
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
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
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                <div className="framer-185xtcd will-change-transform [opacity:1] transform-none">
                  <div className="ssr-variant">
                    <div
                      className="framer-1awfs1t-container"
                      data-site-import-desktop-variant=""
                    >
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
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Volkswagen Tiguan Allspace
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
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
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
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
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                    <div
                      className="framer-1awfs1t-container"
                      style={
                        {
                          "--site-import-responsive-display": "block",
                        } as CSSProperties
                      }
                      data-site-import-mobile-variant=""
                    >
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
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Volkswagen Tiguan Allspace
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
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
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
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
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                <div className="framer-185xtcd will-change-transform [opacity:1] transform-none">
                  <div className="ssr-variant">
                    <div
                      className="framer-1awfs1t-container"
                      data-site-import-desktop-variant=""
                    >
                      <a
                        className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                        style={{
                          background:
                            "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        href="/cars/porsche911"
                      >
                        <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                          <div
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-19m4p2s"
                              dir="auto"
                            >
                              Sport
                            </p>
                          </div>
                          <div
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Porsche 911 Carrera GTS
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
                              srcSet="/site-assets/ddb8af7ff6ccb1c4.avif 512w, /site-assets/cf3c3219bec60f50.avif 1000w"
                              src="/site-assets/cf3c3219bec60f50.avif"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                        <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                          <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-yi7eqs"
                                  dir="auto"
                                >
                                  $340
                                </p>
                              </div>
                              <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                                <div
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                    <div
                      className="framer-1awfs1t-container"
                      style={
                        {
                          "--site-import-responsive-display": "block",
                        } as CSSProperties
                      }
                      data-site-import-mobile-variant=""
                    >
                      <a
                        className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                        style={{
                          background:
                            "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        href="/cars/porsche911"
                      >
                        <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                          <div
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-19m4p2s"
                              dir="auto"
                            >
                              Sport
                            </p>
                          </div>
                          <div
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Porsche 911 Carrera GTS
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
                              srcSet="/site-assets/ddb8af7ff6ccb1c4.avif 512w, /site-assets/cf3c3219bec60f50.avif 1000w"
                              src="/site-assets/cf3c3219bec60f50.avif"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                        <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                          <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-yi7eqs"
                                  dir="auto"
                                >
                                  $340
                                </p>
                              </div>
                              <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                                <div
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                <div className="framer-185xtcd will-change-transform [opacity:1] transform-none">
                  <div className="ssr-variant">
                    <div
                      className="framer-1awfs1t-container"
                      data-site-import-desktop-variant=""
                    >
                      <a
                        className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                        style={{
                          background:
                            "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        href="/cars/bmw2"
                      >
                        <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                          <div
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-19m4p2s"
                              dir="auto"
                            >
                              Sport
                            </p>
                          </div>
                          <div
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              BMW M240i Coupé
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
                              srcSet="/site-assets/9fd36ac8e2485987.avif 512w, /site-assets/bd62e427fed827c6.avif 1000w"
                              src="/site-assets/bd62e427fed827c6.avif"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                        <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                          <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-yi7eqs"
                                  dir="auto"
                                >
                                  $110
                                </p>
                              </div>
                              <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                                <div
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                    <div
                      className="framer-1awfs1t-container"
                      style={
                        {
                          "--site-import-responsive-display": "block",
                        } as CSSProperties
                      }
                      data-site-import-mobile-variant=""
                    >
                      <a
                        className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                        style={{
                          background:
                            "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        href="/cars/bmw2"
                      >
                        <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                          <div
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-19m4p2s"
                              dir="auto"
                            >
                              Sport
                            </p>
                          </div>
                          <div
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              BMW M240i Coupé
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
                              srcSet="/site-assets/9fd36ac8e2485987.avif 512w, /site-assets/bd62e427fed827c6.avif 1000w"
                              src="/site-assets/bd62e427fed827c6.avif"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                        <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                          <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-yi7eqs"
                                  dir="auto"
                                >
                                  $110
                                </p>
                              </div>
                              <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                                <div
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                <div className="framer-185xtcd will-change-transform [opacity:1] transform-none">
                  <div className="ssr-variant">
                    <div
                      className="framer-1awfs1t-container"
                      data-site-import-desktop-variant=""
                    >
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
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Genesis GV80
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
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
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
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
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                    <div
                      className="framer-1awfs1t-container"
                      style={
                        {
                          "--site-import-responsive-display": "block",
                        } as CSSProperties
                      }
                      data-site-import-mobile-variant=""
                    >
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
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Genesis GV80
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
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
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
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
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                <div className="framer-185xtcd will-change-transform [opacity:1] transform-none">
                  <div className="ssr-variant">
                    <div
                      className="framer-1awfs1t-container"
                      data-site-import-desktop-variant=""
                    >
                      <a
                        className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                        style={{
                          background:
                            "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        href="/cars/defender"
                      >
                        <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                          <div
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-19m4p2s"
                              dir="auto"
                            >
                              Off-road
                            </p>
                          </div>
                          <div
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Land Rover Defender 110
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
                              srcSet="/site-assets/312adce61931b624.avif 512w, /site-assets/03847d79278b2ed5.avif 1000w"
                              src="/site-assets/03847d79278b2ed5.avif"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                        <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                          <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-yi7eqs"
                                  dir="auto"
                                >
                                  $175
                                </p>
                              </div>
                              <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                                <div
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                    <div
                      className="framer-1awfs1t-container"
                      style={
                        {
                          "--site-import-responsive-display": "block",
                        } as CSSProperties
                      }
                      data-site-import-mobile-variant=""
                    >
                      <a
                        className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                        style={{
                          background:
                            "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        href="/cars/defender"
                      >
                        <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                          <div
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-19m4p2s"
                              dir="auto"
                            >
                              Off-road
                            </p>
                          </div>
                          <div
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Land Rover Defender 110
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
                              srcSet="/site-assets/312adce61931b624.avif 512w, /site-assets/03847d79278b2ed5.avif 1000w"
                              src="/site-assets/03847d79278b2ed5.avif"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                        <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                          <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-yi7eqs"
                                  dir="auto"
                                >
                                  $175
                                </p>
                              </div>
                              <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                                <div
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                <div className="framer-185xtcd will-change-transform [opacity:1] transform-none">
                  <div className="ssr-variant">
                    <div
                      className="framer-1awfs1t-container"
                      data-site-import-desktop-variant=""
                    >
                      <a
                        className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                        style={{
                          background:
                            "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        href="/cars/bmw5"
                      >
                        <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                          <div
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              BMW M5
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
                              srcSet="/site-assets/7a0ead6a67580f69.avif 512w, /site-assets/53995a589a5815a5.avif 1000w"
                              src="/site-assets/53995a589a5815a5.avif"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                        <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                          <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-yi7eqs"
                                  dir="auto"
                                >
                                  $210
                                </p>
                              </div>
                              <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                                <div
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                    <div
                      className="framer-1awfs1t-container"
                      style={
                        {
                          "--site-import-responsive-display": "block",
                        } as CSSProperties
                      }
                      data-site-import-mobile-variant=""
                    >
                      <a
                        className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                        style={{
                          background:
                            "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        href="/cars/bmw5"
                      >
                        <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                          <div
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              BMW M5
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
                              srcSet="/site-assets/7a0ead6a67580f69.avif 512w, /site-assets/53995a589a5815a5.avif 1000w"
                              src="/site-assets/53995a589a5815a5.avif"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                        <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                          <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-yi7eqs"
                                  dir="auto"
                                >
                                  $210
                                </p>
                              </div>
                              <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                                <div
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                <div className="framer-185xtcd will-change-transform [opacity:1] transform-none">
                  <div className="ssr-variant">
                    <div
                      className="framer-1awfs1t-container"
                      data-site-import-desktop-variant=""
                    >
                      <a
                        className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                        style={{
                          background:
                            "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        href="/cars/rrsport"
                      >
                        <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                          <div
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Land Rover Range Rover Sport
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
                              srcSet="/site-assets/a41a4da841e58445.avif 512w, /site-assets/9ef23d86782b2d38.avif 1000w"
                              src="/site-assets/9ef23d86782b2d38.avif"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                        <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                          <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-yi7eqs"
                                  dir="auto"
                                >
                                  $225
                                </p>
                              </div>
                              <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                                <div
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                    <div
                      className="framer-1awfs1t-container"
                      style={
                        {
                          "--site-import-responsive-display": "block",
                        } as CSSProperties
                      }
                      data-site-import-mobile-variant=""
                    >
                      <a
                        className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                        style={{
                          background:
                            "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        href="/cars/rrsport"
                      >
                        <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                          <div
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Land Rover Range Rover Sport
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
                              srcSet="/site-assets/a41a4da841e58445.avif 512w, /site-assets/9ef23d86782b2d38.avif 1000w"
                              src="/site-assets/9ef23d86782b2d38.avif"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                        <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                          <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-yi7eqs"
                                  dir="auto"
                                >
                                  $225
                                </p>
                              </div>
                              <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                                <div
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                <div className="framer-185xtcd will-change-transform [opacity:1] transform-none">
                  <div className="ssr-variant">
                    <div
                      className="framer-1awfs1t-container"
                      data-site-import-desktop-variant=""
                    >
                      <a
                        className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                        style={{
                          background:
                            "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        href="/cars/audir8"
                      >
                        <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                          <div
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-19m4p2s"
                              dir="auto"
                            >
                              Sport
                            </p>
                          </div>
                          <div
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Audi R8 V10
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
                              srcSet="/site-assets/14a0b7a301232538.avif 512w, /site-assets/561f50de20cf360b.avif 1000w"
                              src="/site-assets/561f50de20cf360b.avif"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                        <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                          <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-yi7eqs"
                                  dir="auto"
                                >
                                  $420
                                </p>
                              </div>
                              <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                                <div
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                    <div
                      className="framer-1awfs1t-container"
                      style={
                        {
                          "--site-import-responsive-display": "block",
                        } as CSSProperties
                      }
                      data-site-import-mobile-variant=""
                    >
                      <a
                        className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                        style={{
                          background:
                            "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        href="/cars/audir8"
                      >
                        <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                          <div
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-19m4p2s"
                              dir="auto"
                            >
                              Sport
                            </p>
                          </div>
                          <div
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Audi R8 V10
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
                              srcSet="/site-assets/14a0b7a301232538.avif 512w, /site-assets/561f50de20cf360b.avif 1000w"
                              src="/site-assets/561f50de20cf360b.avif"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                        <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                          <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-yi7eqs"
                                  dir="auto"
                                >
                                  $420
                                </p>
                              </div>
                              <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                                <div
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                <div className="framer-185xtcd will-change-transform [opacity:1] transform-none">
                  <div className="ssr-variant">
                    <div
                      className="framer-1awfs1t-container"
                      data-site-import-desktop-variant=""
                    >
                      <a
                        className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                        style={{
                          background:
                            "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        href="/cars/mini"
                      >
                        <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                          <div
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              MINI Cooper S
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
                              srcSet="/site-assets/3a07f4914dd90fe5.avif 512w, /site-assets/4ba4d9e1e84344bf.avif 1000w"
                              src="/site-assets/4ba4d9e1e84344bf.avif"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                        <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                          <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-yi7eqs"
                                  dir="auto"
                                >
                                  $58
                                </p>
                              </div>
                              <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                                <div
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                    <div
                      className="framer-1awfs1t-container"
                      style={
                        {
                          "--site-import-responsive-display": "block",
                        } as CSSProperties
                      }
                      data-site-import-mobile-variant=""
                    >
                      <a
                        className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                        style={{
                          background:
                            "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        href="/cars/mini"
                      >
                        <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                          <div
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              MINI Cooper S
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
                              srcSet="/site-assets/3a07f4914dd90fe5.avif 512w, /site-assets/4ba4d9e1e84344bf.avif 1000w"
                              src="/site-assets/4ba4d9e1e84344bf.avif"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                        <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                          <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-yi7eqs"
                                  dir="auto"
                                >
                                  $58
                                </p>
                              </div>
                              <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                                <div
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                <div className="framer-185xtcd will-change-transform [opacity:1] transform-none">
                  <div className="ssr-variant">
                    <div
                      className="framer-1awfs1t-container"
                      data-site-import-desktop-variant=""
                    >
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
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Toyota RAV4 Hybrid
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
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
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
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
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                    <div
                      className="framer-1awfs1t-container"
                      style={
                        {
                          "--site-import-responsive-display": "block",
                        } as CSSProperties
                      }
                      data-site-import-mobile-variant=""
                    >
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
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Toyota RAV4 Hybrid
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
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
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
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
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                <div className="framer-185xtcd will-change-transform [opacity:1] transform-none">
                  <div className="ssr-variant">
                    <div
                      className="framer-1awfs1t-container"
                      data-site-import-desktop-variant=""
                    >
                      <a
                        className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                        style={{
                          background:
                            "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        href="/cars/ev6"
                      >
                        <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                          <div
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Kia EV6
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              dir="auto"
                            >
                              Automatic · Electric · 528 km
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
                              srcSet="/site-assets/77b7dec56e446213.avif 512w, /site-assets/92d1f0b5c444b4a7.avif 1000w"
                              src="/site-assets/92d1f0b5c444b4a7.avif"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                        <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                          <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-yi7eqs"
                                  dir="auto"
                                >
                                  $84
                                </p>
                              </div>
                              <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                                <div
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                    <div
                      className="framer-1awfs1t-container"
                      style={
                        {
                          "--site-import-responsive-display": "block",
                        } as CSSProperties
                      }
                      data-site-import-mobile-variant=""
                    >
                      <a
                        className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                        style={{
                          background:
                            "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        href="/cars/ev6"
                      >
                        <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                          <div
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Kia EV6
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              dir="auto"
                            >
                              Automatic · Electric · 528 km
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
                              srcSet="/site-assets/77b7dec56e446213.avif 512w, /site-assets/92d1f0b5c444b4a7.avif 1000w"
                              src="/site-assets/92d1f0b5c444b4a7.avif"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                        <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                          <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-yi7eqs"
                                  dir="auto"
                                >
                                  $84
                                </p>
                              </div>
                              <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                                <div
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                <div className="framer-185xtcd will-change-transform [opacity:1] transform-none">
                  <div className="ssr-variant">
                    <div className="framer-1awfs1t-container">
                      <a
                        className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                        style={{
                          background:
                            "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        href="/cars/audia5"
                      >
                        <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                          <div
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Audi A5 Sportback
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
                              srcSet="/site-assets/986eb9c77a79a833.avif 512w, /site-assets/f919e3e34a223ef5.avif 1000w"
                              src="/site-assets/f919e3e34a223ef5.avif"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                        <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                          <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-yi7eqs"
                                  dir="auto"
                                >
                                  $96
                                </p>
                              </div>
                              <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                                <div
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                <div className="framer-185xtcd will-change-transform [opacity:1] transform-none">
                  <div className="ssr-variant">
                    <div className="framer-1awfs1t-container">
                      <a
                        className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                        style={{
                          background:
                            "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        href="/cars/xc60"
                      >
                        <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                          <div
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Volvo XC60 Recharge
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
                              srcSet="/site-assets/622fcbc74eddd95b.avif 512w, /site-assets/ff4dfaecefc61e2e.avif 1000w"
                              src="/site-assets/ff4dfaecefc61e2e.avif"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                        <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                          <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-yi7eqs"
                                  dir="auto"
                                >
                                  $98
                                </p>
                              </div>
                              <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                                <div
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                <div className="framer-185xtcd will-change-transform [opacity:1] transform-none">
                  <div className="ssr-variant">
                    <div className="framer-1awfs1t-container">
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
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Volkswagen ID. Buzz LWB
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
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
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
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
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                <div className="framer-185xtcd will-change-transform opacity-[0.989466] transform-none">
                  <div className="ssr-variant">
                    <div className="framer-1awfs1t-container">
                      <a
                        className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                        style={{
                          background:
                            "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        href="/cars/x5"
                      >
                        <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                          <div
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              BMW X5 xDrive
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
                              srcSet="/site-assets/531cdf4686590aea.avif 512w, /site-assets/3454032842070f77.avif 1000w"
                              src="/site-assets/3454032842070f77.avif"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                        <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                          <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-yi7eqs"
                                  dir="auto"
                                >
                                  $138
                                </p>
                              </div>
                              <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                                <div
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                <div className="framer-185xtcd will-change-transform opacity-[0.989466] transform-none">
                  <div className="ssr-variant">
                    <div className="framer-1awfs1t-container">
                      <a
                        className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                        style={{
                          background:
                            "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        href="/cars/id3"
                      >
                        <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                          <div
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Volkswagen ID.3 Pro
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              dir="auto"
                            >
                              Automatic · Electric · 426 km
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
                              srcSet="/site-assets/70d2ec1abae3cd82.webp 512w, /site-assets/2e873767e9d2244f.avif 1000w"
                              src="/site-assets/2e873767e9d2244f.avif"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                        <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                          <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-yi7eqs"
                                  dir="auto"
                                >
                                  $55
                                </p>
                              </div>
                              <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                                <div
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                <div className="framer-185xtcd will-change-transform opacity-[0.989466] transform-none">
                  <div className="ssr-variant">
                    <div className="framer-1awfs1t-container">
                      <a
                        className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                        style={{
                          background:
                            "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        href="/cars/mustang"
                      >
                        <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                          <div
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-19m4p2s"
                              dir="auto"
                            >
                              Convertible
                            </p>
                          </div>
                          <div
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Ford Mustang Convertible
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
                              srcSet="/site-assets/971c772c30ce2cf7.avif 512w, /site-assets/2025b8ad0dce710a.avif 1000w"
                              src="/site-assets/2025b8ad0dce710a.avif"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                        <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                          <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-yi7eqs"
                                  dir="auto"
                                >
                                  $96
                                </p>
                              </div>
                              <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                                <div
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                <div className="framer-185xtcd will-change-transform [opacity:1] transform-none">
                  <div className="ssr-variant">
                    <div className="framer-1awfs1t-container">
                      <a
                        className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                        style={{
                          background:
                            "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        href="/cars/audiq5"
                      >
                        <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                          <div
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Audi Q5
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
                              srcSet="/site-assets/16cebb866c35297e.webp 512w, /site-assets/791490d841411311.avif 1000w"
                              src="/site-assets/791490d841411311.avif"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                        <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                          <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-yi7eqs"
                                  dir="auto"
                                >
                                  $102
                                </p>
                              </div>
                              <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                                <div
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                <div className="framer-185xtcd will-change-transform [opacity:1] transform-none">
                  <div className="ssr-variant">
                    <div className="framer-1awfs1t-container">
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
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Audi A6 Avant
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
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
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
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
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                <div className="framer-185xtcd will-change-transform [opacity:1] transform-none">
                  <div className="ssr-variant">
                    <div className="framer-1awfs1t-container">
                      <a
                        className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                        style={{
                          background:
                            "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        href="/cars/wrangler"
                      >
                        <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                          <div
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-19m4p2s"
                              dir="auto"
                            >
                              Off-road
                            </p>
                          </div>
                          <div
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Jeep Wrangler Unlimited
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
                              srcSet="/site-assets/8c0f3b8c195c9303.avif 512w, /site-assets/68ebe7dadc9aa387.avif 1000w"
                              src="/site-assets/68ebe7dadc9aa387.avif"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                        <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                          <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-yi7eqs"
                                  dir="auto"
                                >
                                  $115
                                </p>
                              </div>
                              <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                                <div
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                <div className="framer-185xtcd will-change-transform [opacity:1] transform-none">
                  <div className="ssr-variant">
                    <div className="framer-1awfs1t-container">
                      <a
                        className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                        style={{
                          background:
                            "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        href="/cars/fiat500"
                      >
                        <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                          <div
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Fiat 500 Dolcevita
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1a6wac2"
                              dir="auto"
                            >
                              Manual · Hybrid
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
                              srcSet="/site-assets/2702710b0ba77ef1.avif 512w, /site-assets/575610368cf91609.avif 1000w"
                              src="/site-assets/575610368cf91609.avif"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                        <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                          <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-yi7eqs"
                                  dir="auto"
                                >
                                  $36
                                </p>
                              </div>
                              <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                                <div
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
                <div className="framer-185xtcd will-change-transform [opacity:1] transform-none">
                  <div className="ssr-variant">
                    <div className="framer-1awfs1t-container">
                      <a
                        className="framer-yN0Fh framer-gv8rH framer-WUKpa framer-oX6dW framer-ryLmx framer-gy9t1h framer-1k6gpzx items-start flex-col flex-nowrap [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [place-content:flex-start] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
                        style={{
                          background:
                            "linear-gradient(rgb(243, 243, 243) 0%, rgb(240, 240, 240) 55%, rgb(235, 235, 235) 100%)",
                          height: "100%",
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        href="/cars/kombi"
                      >
                        <div className="framer-1dj3vbs items-start flex-none flex-col flex-nowrap gap-[5px] min-h-[91.2px] [place-content:flex-start] [opacity:1]">
                          <div
                            className="framer-cqqpi2 justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                            className="framer-x78gtr justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-z4rud8"
                              dir="auto"
                              aria-level={2}
                            >
                              Volkswagen T2 Kombi
                            </h3>
                          </div>
                          <div
                            className="framer-1wwjzzt justify-start [outline:none] [word-break:break-word] transform-none [opacity:1]"
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
                              sizes="max((max(min(100vw, 1360px) - 380px, 1px) - 32px) / 3, 50px)"
                              srcSet="/site-assets/1c4c8049343ee409.avif 512w, /site-assets/9877d9b38f64c2d6.avif 1000w"
                              src="/site-assets/9877d9b38f64c2d6.avif"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="framer-qo67fb flex-[1_0_0] [opacity:1]" />
                        <div className="framer-50888u items-end flex-none flex-row flex-nowrap content-end justify-between [opacity:1]">
                          <div className="framer-5p01p items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                            <div
                              className="framer-1yi39wf justify-start [outline:none] transform-none [opacity:1]"
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
                                className="framer-qvdzni justify-start [outline:none] transform-none [opacity:1]"
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-yi7eqs"
                                  dir="auto"
                                >
                                  $92
                                </p>
                              </div>
                              <div className="framer-1dovgn5 items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                                <div
                                  className="framer-1i83u2f justify-start [outline:none] transform-none [opacity:1]"
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
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedFooterDesktop() {
  return (
    <footer
      className="framer-TopBk framer-MCyNe framer-3tJNm framer-iJjgk framer-AAOB7 framer-oX6dW framer-z1mrk items-center flex-col flex-nowrap content-center justify-start [gap:0] [padding:57.6px_32px_8.64px] [opacity:1]"
      style={
        {
          width: "100%",
          transform: "none",
          transformOrigin: "50% 50% 0px",
        } as CSSProperties
      }
    >
      <div
        className="framer-le7h53 items-start flex-none flex-col flex-nowrap gap-[48px] max-w-[1296px] [place-content:flex-start] [opacity:1]"
        style={
          {
            backgroundColor:
              "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
            borderRadius: "12px",
            transform: "none",
            transformOrigin: "50% 50% 0px",
          } as CSSProperties
        }
      >
        <div
          className="framer-77rohz items-start flex-none flex-row flex-nowrap gap-[48px] [place-content:flex-start] [opacity:1]"
          style={
            {
              transform: "none",
              transformOrigin: "50% 50% 0px",
            } as CSSProperties
          }
        >
          <div
            className="framer-kn31jo items-start flex-[3_0_0] flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1]"
            style={
              {
                transform: "none",
                transformOrigin: "50% 50% 0px",
              } as CSSProperties
            }
          >
            <a
              className="framer-184v0vk framer-tt173u items-center flex-none flex-row flex-nowrap gap-[10px] content-center justify-start [opacity:1]"
              style={
                {
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                } as CSSProperties
              }
              href="/"
            >
              <div
                className="framer-1s68tj1 items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                style={
                  {
                    borderRadius: "6px",
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                  } as CSSProperties
                }
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
                    src="/site-assets/0b23ff83892756a2-bb6738d1933ada9aeb0086889074415c.png"
                    alt=""
                    loading="lazy"
                  />
                </div>
              </div>
              <div
                className="framer-vyhy05 justify-start [outline:none] [opacity:1]"
                style={
                  {
                    "--extracted-a0htzi":
                      "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                    transform: "none",
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
                    } as CSSProperties
                  }
                  dir="auto"
                  aria-level={2}
                >
                  Horizone
                </h3>
              </div>
            </a>
            <div
              className="framer-1sps62b items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
              style={
                {
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                } as CSSProperties
              }
            >
              <div
                className="framer-1t8d2jb justify-start max-w-[298.6px] [outline:none] [word-break:break-word] [opacity:1]"
                style={
                  {
                    "--extracted-r6o4lv":
                      "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
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
                >
                  Car rental in 14 cities, priced without asterisks. The total
                  you see is the total you pay.
                </p>
              </div>
            </div>
            <div
              className="framer-3lgd4l items-start flex-none flex-col flex-nowrap gap-[8px] [place-content:flex-start] [opacity:1]"
              style={
                {
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                } as CSSProperties
              }
            >
              <div
                className="framer-s7ay49 items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                  } as CSSProperties
                }
              >
                <div
                  className="framer-1yfzh10-container flex-none [opacity:1]"
                  style={
                    {
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    } as CSSProperties
                  }
                >
                  <svg
                    className="[color:var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)] fill-none [overflow:visible]"
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
                    <path d="M12 3.2 5 6v5.6c0 4.3 2.9 8 7 9.2 4.1-1.2 7-4.9 7-9.2V6l-7-2.8Z" />
                    <path d="m9.2 12 2 2 3.6-3.9" />
                  </svg>
                </div>
                <div
                  className="framer-nb5z0v justify-start [outline:none] [opacity:1]"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-7e7f526a-85ea-441f-9429-765a41c2534c)",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
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
                  >
                    Free cancellation up to 48 h
                  </p>
                </div>
              </div>
              <div
                className="framer-5wx0eb items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                  } as CSSProperties
                }
              >
                <div
                  className="framer-1k7sg0h-container flex-none [opacity:1]"
                  style={
                    {
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    } as CSSProperties
                  }
                >
                  <svg
                    className="[color:var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)] fill-none [overflow:visible]"
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
                    <path d="M5 14v-2a7 7 0 0 1 14 0v2" />
                    <rect x="3" y="13.5" width="3.6" height="6" rx="1.8" />
                    <rect x="17.4" y="13.5" width="3.6" height="6" rx="1.8" />
                    <path d="M19 19.5v.6a2.4 2.4 0 0 1-2.4 2.4H13" />
                  </svg>
                </div>
                <div
                  className="framer-3xd1uw justify-start [outline:none] [opacity:1]"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-7e7f526a-85ea-441f-9429-765a41c2534c)",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
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
                  >
                    24/7 roadside support
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="framer-12xcplr items-start flex-[7_0_0] flex-row flex-nowrap gap-[37.44px] [place-content:flex-start] will-change-transform [opacity:1]"
            style={
              {
                transform: "none",
                transformOrigin: "50% 50% 0px",
              } as CSSProperties
            }
          >
            <div
              className="framer-1bzlm27 items-start flex-none flex-col flex-nowrap gap-[10px] [place-content:flex-start] [opacity:1]"
              style={
                {
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                } as CSSProperties
              }
            >
              <div
                className="framer-gnavnz items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                  } as CSSProperties
                }
              >
                <div
                  className="framer-162z8u3 justify-start [outline:none] [opacity:1]"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
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
                  >
                    Rent
                  </p>
                </div>
              </div>
              <div
                className="framer-xvjqrk-container flex-none [opacity:1]"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                  } as CSSProperties
                }
              >
                <a
                  className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9 items-center flex-row flex-nowrap content-center justify-start [gap:0] [opacity:1]"
                  style={
                    {
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    } as CSSProperties
                  }
                  data-framer-page-link-current="true"
                  href="#"
                >
                  <div
                    className="framer-1onkx82 justify-start [outline:none] [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
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
                className="framer-1hks5fn-container flex-none [opacity:1]"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                  } as CSSProperties
                }
              >
                <a
                  className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9 items-center flex-row flex-nowrap content-center justify-start [gap:0] [opacity:1]"
                  style={
                    {
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    } as CSSProperties
                  }
                  href="/locations"
                >
                  <div
                    className="framer-1onkx82 justify-start [outline:none] [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
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
                className="framer-z8pfj4-container flex-none [opacity:1]"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                  } as CSSProperties
                }
              >
                <a
                  className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9 items-center flex-row flex-nowrap content-center justify-start [gap:0] [opacity:1]"
                  style={
                    {
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    } as CSSProperties
                  }
                  href="/deals"
                >
                  <div
                    className="framer-1onkx82 justify-start [outline:none] [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
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
                className="framer-1c58195-container flex-none [opacity:1]"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                  } as CSSProperties
                }
              >
                <a
                  className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9 items-center flex-row flex-nowrap content-center justify-start [gap:0] [opacity:1]"
                  style={
                    {
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    } as CSSProperties
                  }
                  href="/locations#routes"
                >
                  <div
                    className="framer-1onkx82 justify-start [outline:none] [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
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
              className="framer-kmyqsh items-start flex-none flex-col flex-nowrap gap-[10px] [place-content:flex-start] [opacity:1]"
              style={
                {
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                } as CSSProperties
              }
            >
              <div
                className="framer-14t2n5c items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                  } as CSSProperties
                }
              >
                <div
                  className="framer-k9wt3x justify-start [outline:none] [opacity:1]"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
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
                  >
                    Company
                  </p>
                </div>
              </div>
              <div
                className="framer-1pkt1sn-container flex-none [opacity:1]"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                  } as CSSProperties
                }
              >
                <a
                  className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9 items-center flex-row flex-nowrap content-center justify-start [gap:0] [opacity:1]"
                  style={
                    {
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    } as CSSProperties
                  }
                  href="/about"
                >
                  <div
                    className="framer-1onkx82 justify-start [outline:none] [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
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
                className="framer-1k2rbk0-container flex-none [opacity:1]"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                  } as CSSProperties
                }
              >
                <a
                  className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9 items-center flex-row flex-nowrap content-center justify-start [gap:0] [opacity:1]"
                  style={
                    {
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    } as CSSProperties
                  }
                  href="/about#careers"
                >
                  <div
                    className="framer-1onkx82 justify-start [outline:none] [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
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
                className="framer-l7t01t-container flex-none [opacity:1]"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                  } as CSSProperties
                }
              >
                <a
                  className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9 items-center flex-row flex-nowrap content-center justify-start [gap:0] [opacity:1]"
                  style={
                    {
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    } as CSSProperties
                  }
                  href="/about#values"
                >
                  <div
                    className="framer-1onkx82 justify-start [outline:none] [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
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
              className="framer-1laknkj items-start flex-none flex-col flex-nowrap gap-[10px] [place-content:flex-start] [opacity:1]"
              style={
                {
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                } as CSSProperties
              }
            >
              <div
                className="framer-9j0mqa items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                  } as CSSProperties
                }
              >
                <div
                  className="framer-1o9sfnm justify-start [outline:none] [opacity:1]"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
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
                  >
                    Support
                  </p>
                </div>
              </div>
              <div
                className="framer-1f0jrx3-container flex-none [opacity:1]"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                  } as CSSProperties
                }
              >
                <a
                  className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9 items-center flex-row flex-nowrap content-center justify-start [gap:0] [opacity:1]"
                  style={
                    {
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    } as CSSProperties
                  }
                  href="/help"
                >
                  <div
                    className="framer-1onkx82 justify-start [outline:none] [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
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
                className="framer-2wam1c-container flex-none [opacity:1]"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                  } as CSSProperties
                }
              >
                <a
                  className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9 items-center flex-row flex-nowrap content-center justify-start [gap:0] [opacity:1]"
                  style={
                    {
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    } as CSSProperties
                  }
                  href="/help#contact"
                >
                  <div
                    className="framer-1onkx82 justify-start [outline:none] [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
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
                className="framer-osxw3n-container flex-none [opacity:1]"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                  } as CSSProperties
                }
              >
                <a
                  className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9 items-center flex-row flex-nowrap content-center justify-start [gap:0] [opacity:1]"
                  style={
                    {
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    } as CSSProperties
                  }
                  href="/help#contact"
                >
                  <div
                    className="framer-1onkx82 justify-start [outline:none] [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
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
                className="framer-1nzi27q-container flex-none [opacity:1]"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                  } as CSSProperties
                }
              >
                <a
                  className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9 items-center flex-row flex-nowrap content-center justify-start [gap:0] [opacity:1]"
                  style={
                    {
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    } as CSSProperties
                  }
                  href="/legal#terms"
                >
                  <div
                    className="framer-1onkx82 justify-start [outline:none] [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
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
              className="framer-m68j7r items-start flex-[1_0_0] flex-col flex-nowrap gap-[10px] min-w-[230px] [place-content:flex-start] [opacity:1]"
              style={
                {
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                } as CSSProperties
              }
            >
              <div
                className="framer-iwkklt items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                  } as CSSProperties
                }
              >
                <div
                  className="framer-1o3x7xw justify-start [outline:none] [opacity:1]"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
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
                  >
                    Get Updates
                  </p>
                </div>
              </div>
              <form
                className="framer-misz7s items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [padding:5px_5px_5px_15px] [opacity:1]"
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
                  } as CSSProperties
                }
                data-border="true"
                method="post"
              >
                <div
                  className="framer-form-text-input framer-form-input-wrapper framer-6hu9v items-center flex-[1_0_0] [overflow:hidden] [opacity:1]"
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
                    } as CSSProperties
                  }
                >
                  <input
                    className={
                      "framer-form-input framer-form-input-empty flex-1 text-ellipsis [letter-spacing:var(--framer-input-font-letter-spacing)] [line-height:var(--framer-input-font-line-height)] [min-width:0] [&:focus-visible]:[outline:none]"
                    }
                    type="email"
                    required
                    name="Email"
                    placeholder="Enter your email"
                    defaultValue=""
                    aria-label="Email"
                  />
                </div>
                <div
                  className="framer-1fbot5m-container flex-none [opacity:1]"
                  style={
                    {
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    } as CSSProperties
                  }
                >
                  <button
                    className="framer-iy0La framer-40PBB framer-1wcq747 items-center flex-row flex-nowrap gap-[8px] place-content-center [padding:8px_15px] [opacity:1]"
                    style={
                      {
                        backgroundColor:
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                        borderRadius: "4px",
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                      } as CSSProperties
                    }
                    type="submit"
                    data-reset="button"
                  >
                    <div
                      className="framer-9payf7 justify-start [outline:none] [opacity:1]"
                      style={
                        {
                          transform: "none",
                          transformOrigin: "50% 50% 0px",
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
                  className="[transform:scale(0)]"
                  style={{ position: "absolute" }}
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="one-time-code"
                  aria-hidden="true"
                  defaultValue=""
                />
                <input
                  className="[transform:scale(0)]"
                  style={{ position: "absolute" }}
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="one-time-code"
                  aria-hidden="true"
                  defaultValue=""
                />
                <input
                  className="[transform:scale(0)]"
                  style={{ position: "absolute" }}
                  type="text"
                  name="message"
                  tabIndex={-1}
                  autoComplete="one-time-code"
                  aria-hidden="true"
                  defaultValue=""
                />
                <input
                  className="[transform:scale(0)]"
                  style={{ position: "absolute" }}
                  type="text"
                  name="subject"
                  tabIndex={-1}
                  autoComplete="one-time-code"
                  aria-hidden="true"
                  defaultValue=""
                />
                <input
                  className="[transform:scale(0)]"
                  style={{ position: "absolute" }}
                  type="text"
                  name="title"
                  tabIndex={-1}
                  autoComplete="one-time-code"
                  aria-hidden="true"
                  defaultValue=""
                />
                <input
                  className="[transform:scale(0)]"
                  style={{ position: "absolute" }}
                  type="text"
                  name="description"
                  tabIndex={-1}
                  autoComplete="one-time-code"
                  aria-hidden="true"
                  defaultValue=""
                />
                <input
                  className="[transform:scale(0)]"
                  style={{ position: "absolute" }}
                  type="text"
                  name="feedback"
                  tabIndex={-1}
                  autoComplete="one-time-code"
                  aria-hidden="true"
                  defaultValue=""
                />
                <input
                  className="[transform:scale(0)]"
                  style={{ position: "absolute" }}
                  type="text"
                  name="notes"
                  tabIndex={-1}
                  autoComplete="one-time-code"
                  aria-hidden="true"
                  defaultValue=""
                />
                <input
                  className="[transform:scale(0)]"
                  style={{ position: "absolute" }}
                  type="text"
                  name="details"
                  tabIndex={-1}
                  autoComplete="one-time-code"
                  aria-hidden="true"
                  defaultValue=""
                />
                <input
                  className="[transform:scale(0)]"
                  style={{ position: "absolute" }}
                  type="text"
                  name="remarks"
                  tabIndex={-1}
                  autoComplete="one-time-code"
                  aria-hidden="true"
                  defaultValue=""
                />
                <input
                  className="[transform:scale(0)]"
                  style={{ position: "absolute" }}
                  type="text"
                  name="comments"
                  tabIndex={-1}
                  autoComplete="one-time-code"
                  aria-hidden="true"
                  defaultValue=""
                />
              </form>
              <div
                className="framer-17dww7x justify-start [outline:none] [word-break:break-word] [opacity:1]"
                style={
                  {
                    "--extracted-r6o4lv":
                      "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
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
                >
                  Route ideas and price drops. Two emails a month, no more.
                </p>
              </div>
              <div
                className="framer-1qiq450 items-center flex-none flex-row flex-nowrap gap-[8px] content-center justify-start [opacity:1]"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                  } as CSSProperties
                }
              >
                <div
                  className="framer-vdjghs items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                  style={
                    {
                      backgroundColor:
                        "var(--token-5d9b0fc5-b296-4760-8c5b-1739145ad88b)",
                      borderRadius: "999px",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    } as CSSProperties
                  }
                >
                  <div
                    className="framer-ju13ui-container flex-none [opacity:1]"
                    style={
                      {
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                      } as CSSProperties
                    }
                  >
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
                  className="framer-1e91db4 items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                  style={
                    {
                      backgroundColor:
                        "var(--token-5d9b0fc5-b296-4760-8c5b-1739145ad88b)",
                      borderRadius: "999px",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    } as CSSProperties
                  }
                >
                  <div
                    className="framer-1dpn10r-container flex-none [opacity:1]"
                    style={
                      {
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                      } as CSSProperties
                    }
                  >
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
                      <path
                        d="M4.5 4.5 19.5 19.5M19.5 4.5 4.5 19.5"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className="framer-t5df3a items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                  style={
                    {
                      backgroundColor:
                        "var(--token-5d9b0fc5-b296-4760-8c5b-1739145ad88b)",
                      borderRadius: "999px",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    } as CSSProperties
                  }
                >
                  <div
                    className="framer-1e76nhy-container flex-none [opacity:1]"
                    style={
                      {
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                      } as CSSProperties
                    }
                  >
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
                      <path
                        d="M14.6 21.5v-8h2.7l.5-3.3h-3.2V8.1c0-.95.33-1.6 1.7-1.6h1.7V3.6c-.3-.04-1.32-.13-2.5-.13-2.48 0-4.2 1.5-4.2 4.3v2.4H8.6v3.3h2.7v8h3.3Z"
                        fill="currentColor"
                        stroke="none"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className="framer-143ac9r items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                  style={
                    {
                      backgroundColor:
                        "var(--token-5d9b0fc5-b296-4760-8c5b-1739145ad88b)",
                      borderRadius: "999px",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    } as CSSProperties
                  }
                >
                  <div
                    className="framer-1c8h20s-container flex-none [opacity:1]"
                    style={
                      {
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                      } as CSSProperties
                    }
                  >
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
                      <rect x="2.8" y="5.6" width="18.4" height="12.8" rx="4" />
                      <path d="m10.4 9.6 4.8 2.4-4.8 2.4V9.6Z" />
                    </svg>
                  </div>
                </div>
                <div
                  className="framer-qy1us2 items-center flex-none flex-row flex-nowrap place-content-center [gap:0] [opacity:1]"
                  style={
                    {
                      backgroundColor:
                        "var(--token-5d9b0fc5-b296-4760-8c5b-1739145ad88b)",
                      borderRadius: "999px",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
                    } as CSSProperties
                  }
                >
                  <div
                    className="framer-w2wle-container flex-none [opacity:1]"
                    style={
                      {
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                      } as CSSProperties
                    }
                  >
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
          className="framer-s39xoi items-center flex-none flex-row flex-nowrap content-center justify-between will-change-transform [opacity:1]"
          style={
            {
              "--border-bottom-width": "0px",
              "--border-color":
                "var(--token-1bc3d94c-6a34-4a4f-bb24-8d830b446610)",
              "--border-left-width": "0px",
              "--border-right-width": "0px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              transform: "none",
              transformOrigin: "50% 50% 0px",
            } as CSSProperties
          }
          data-border="true"
        >
          <div
            className="framer-g2a9zh justify-start [outline:none] [opacity:1]"
            style={
              {
                "--extracted-r6o4lv":
                  "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                transform: "none",
                transformOrigin: "50% 50% 0px",
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
              © 2026 Horizone Car Rental
            </p>
          </div>
          <nav
            className="framer-wwbz35 items-center flex-none flex-row flex-nowrap gap-[20px] content-center justify-start [padding:0] [opacity:1]"
            style={
              {
                transform: "none",
                transformOrigin: "50% 50% 0px",
              } as CSSProperties
            }
          >
            <div
              className="framer-jg223-container flex-none [opacity:1]"
              style={
                {
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                } as CSSProperties
              }
            >
              <a
                className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9 items-center flex-row flex-nowrap content-center justify-start [gap:0] [opacity:1]"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                  } as CSSProperties
                }
                href="/legal#privacy"
              >
                <div
                  className="framer-1onkx82 justify-start [outline:none] [opacity:1]"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
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
              className="framer-18kz641-container flex-none [opacity:1]"
              style={
                {
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                } as CSSProperties
              }
            >
              <a
                className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9 items-center flex-row flex-nowrap content-center justify-start [gap:0] [opacity:1]"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                  } as CSSProperties
                }
                href="/legal#terms"
              >
                <div
                  className="framer-1onkx82 justify-start [outline:none] [opacity:1]"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
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
              className="framer-95gw16-container flex-none [opacity:1]"
              style={
                {
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                } as CSSProperties
              }
            >
              <a
                className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9 items-center flex-row flex-nowrap content-center justify-start [gap:0] [opacity:1]"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                  } as CSSProperties
                }
                href="/legal#cookies"
              >
                <div
                  className="framer-1onkx82 justify-start [outline:none] [opacity:1]"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
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
              className="framer-iaw1ly-container flex-none [opacity:1]"
              style={
                {
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                } as CSSProperties
              }
            >
              <a
                className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9 items-center flex-row flex-nowrap content-center justify-start [gap:0] [opacity:1]"
                style={
                  {
                    transform: "none",
                    transformOrigin: "50% 50% 0px",
                  } as CSSProperties
                }
                href="/legal#cookies"
              >
                <div
                  className="framer-1onkx82 justify-start [outline:none] [opacity:1]"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-4eb845db-d65c-4464-8a4f-61a2cfab656f)",
                      transform: "none",
                      transformOrigin: "50% 50% 0px",
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
