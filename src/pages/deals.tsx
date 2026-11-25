import type { CSSProperties } from "react";
import { useEffect } from "react";
import { useSyncExternalStore } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/deals.css?raw";
import { SiteImportMobileNav } from "../components/site-import-mobile.nav";

export const Route = createFileRoute("/deals")({
  head: () => ({
    meta: [
      { title: "Deals & promo codes · Horizone" },
      {
        name: "description",
        content:
          "See current Horizone car rental offers, seasonal savings, and promo codes for your next trip.",
      },
      { property: "og:title", content: "Deals & promo codes · Horizone" },
      {
        property: "og:description",
        content:
          "See current Horizone car rental offers, seasonal savings, and promo codes for your next trip.",
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
          className="framer-PWl0o framer-pdvr4y [overflow:var(--overflow-clip-fallback,clip)] [min-height:100vh]"
          style={{ width: "auto" }}
          data-layout-template="true"
        >
          <div
            className="framer-1a6bpj8 [order:-1000] [right:0] [z-index:10]"
            data-site-import-desktop-header=""
          >
            <div className="framer-1cywj9w-container">
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
                        ? "framer-rQnLE framer-MCyNe framer-3tJNm framer-eHiTe framer-ccphy framer-iJjgk framer-GvPaN framer-AAOB7 framer-BdrqZ framer-KgJtC framer-EhiDw framer-ANzsm framer-71sfr framer-7tu3jo framer-v-x08t8a"
                        : "framer-rQnLE framer-MCyNe framer-3tJNm framer-eHiTe framer-ccphy framer-iJjgk framer-GvPaN framer-AAOB7 framer-BdrqZ framer-KgJtC framer-EhiDw framer-ANzsm framer-71sfr framer-7tu3jo"
                    }
                    data-site-import-scroll-header={
                      '{"desktop":{"added":["framer-v-i7duu0"],"removed":["framer-v-7tu3jo"],"threshold":648},"mobile":{"added":["framer-v-1jhoykp"],"removed":["framer-v-x08t8a"],"threshold":633}}'
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
            className="framer-1DDL1 framer-1zOQh framer-qO70Z framer-71sfr framer-iJjgk framer-oX6dW framer-ANzsm framer-1piizdt [overflow:var(--overflow-clip-fallback,clip)] [min-height:100vh]"
            style={{ width: "auto", display: "contents" }}
          >
            <div className="framer-1a04b4e-container">
              <div className="ssr-variant">
                <ImportedSectionDefault />
              </div>
            </div>
            <ImportedSectionPromoCodes />
            <ImportedSectionAutomaticSavings />
            <ImportedSectionDealAlerts />
            <ImportedSectionOfferTerms />
          </div>
          <div id="overlay" />
          <div className="framer-z6kdd7" />
          <div className="framer-176qjoj-container [order:1002]">
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
          <div className="framer-1xlz05r [opacity:0] [order:1003] [overflow:var(--overflow-clip-fallback,clip)]">
            <div className="framer-cwq8pc">
              <div className="framer-gtih2l-container">
                <span style={{ display: "none" }} />
              </div>
              <div className="framer-11zp4ho">
                <div className="framer-27cle4">
                  <div className="framer-1ropa8b-container">
                    <span style={{ display: "none" }} />
                  </div>
                </div>
                <div className="framer-27cle4">
                  <div className="framer-1ropa8b-container">
                    <span style={{ display: "none" }} />
                  </div>
                </div>
                <div className="framer-27cle4">
                  <div className="framer-1ropa8b-container">
                    <span style={{ display: "none" }} />
                  </div>
                </div>
                <div className="framer-27cle4">
                  <div className="framer-1ropa8b-container">
                    <span style={{ display: "none" }} />
                  </div>
                </div>
              </div>
              <div className="framer-erc7tj">
                <div className="framer-1jhn804">
                  <div className="framer-18enzvt-container">
                    <span style={{ display: "none" }} />
                  </div>
                </div>
                <div className="framer-1jhn804">
                  <div className="framer-18enzvt-container">
                    <span style={{ display: "none" }} />
                  </div>
                </div>
                <div className="framer-1jhn804">
                  <div className="framer-18enzvt-container">
                    <span style={{ display: "none" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="template-overlay" />
      </div>
      <div
        className="[bottom:0] [z-index:calc(var(--infinity,2147480000))]"
        id="__framer-badge-container"
      >
        <a
          className="framer-6jWyo framer-n0ccwk framer-bmpgw8 [overflow:visible] will-change-transform [opacity:1] transform-none"
          style={{ pointerEvents: "auto" }}
          href="https://www.framer.com"
          rel="noopener"
          title="Create a free website with Framer, the website builder loved by startups, designers and agencies."
        >
          <div
            className="framer-13yxzio [overflow:hidden] [will-change:var(--framer-will-change-override,transform)] [box-shadow:rgba(0,_0,_0,_0.17)_0px_0.602187px_1.56569px_-1.5px,_rgba(0,_0,_0,_0.14)_0px_2.28853px_5.95019px_-3px,_rgba(0,_0,_0,_0.02)_0px_10px_26px_-4.5px] [opacity:1]"
            style={{
              backgroundColor: "rgb(255, 255, 255)",
              borderRadius: "10px",
            }}
          />
          <div className="framer-19yaanm [overflow:visible] [transform:translate(-50%,_-50%)] [opacity:1]">
            <div className="framer-1kflzx5 [overflow:visible] [opacity:1]">
              <div
                className="framer-hcsc7 framer-e50co aspect-[0.6/1] [transform:translateX(-50%)] [opacity:1]"
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
              className="framer-g7oZR framer-1um7t9d aspect-[9.7/1] [opacity:1]"
              style={{ "--1bd4d3i": "rgb(0, 0, 0)" } as CSSProperties}
            />
          </div>
          <div
            className="framer-j4ugry [overflow:visible] [mask:linear-gradient(rgba(0,_0,_0,_0)_65%,_rgb(0,_0,_0)_100%)] [box-shadow:rgb(0,_0,_0)_0px_0px_0px_1px_inset] [opacity:0.06]"
            style={{ borderRadius: "11px" }}
          />
          <div
            className="framer-jnuwbw [overflow:visible] [box-shadow:rgb(0,_0,_0)_0px_0px_0px_1px_inset] [opacity:0.04]"
            style={{ borderRadius: "11px" }}
          />
        </a>
      </div>
      <div
        className="[overflow:hidden] [bottom:0px] [z-index:0] [contain:strict]"
        style={{
          position: "absolute",
          left: "0px",
          width: "0px",
          height: "0px",
        }}
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
          backdropFilter: "none",
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderRadius: "8px",
          opacity: "1",
          willChange: "auto",
        } as CSSProperties
      }
    >
      <div
        className="framer-16wo98v"
        style={{ willChange: "transform", opacity: "1", transform: "none" }}
        data-site-import-responsive="8"
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
                opacity: "1",
                willChange: "auto",
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
              data-site-import-responsive="14"
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
            "--border-color":
              "var(--token-483c565b-fb9d-461c-8f3c-18302e2d0b73)",
            "--border-left-width": "1px",
            "--border-right-width": "1px",
            "--border-style": "solid",
            "--border-top-width": "1px",
            backdropFilter: "blur(14px)",
            backgroundColor:
              "var(--token-095c31d1-50cc-46db-81fb-3576d106af0e)",
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
                  "--framer-text-color":
                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                } as CSSProperties
              }
              dir="auto"
            >
              <a
                className="framer-text framer-styles-preset-111b7xp"
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
                  "--framer-text-color":
                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                } as CSSProperties
              }
              dir="auto"
            >
              <a
                className="framer-text framer-styles-preset-111b7xp"
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
                  "--framer-text-color":
                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                } as CSSProperties
              }
              dir="auto"
            >
              <a
                className="framer-text framer-styles-preset-111b7xp"
                data-framer-page-link-current="true"
                href="#"
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
                  "--framer-text-color":
                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                } as CSSProperties
              }
              dir="auto"
            >
              <a
                className="framer-text framer-styles-preset-111b7xp"
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
                  "--framer-text-color":
                    "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                } as CSSProperties
              }
              dir="auto"
            >
              <a
                className="framer-text framer-styles-preset-111b7xp"
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
        data-site-import-responsive="36"
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
              opacity: "1",
              willChange: "auto",
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
                  color: "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
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
                "var(--token-483c565b-fb9d-461c-8f3c-18302e2d0b73)",
              "--border-left-width": "1px",
              "--border-right-width": "1px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backdropFilter: "blur(14px)",
              backgroundColor:
                "var(--token-5d9b0fc5-b296-4760-8c5b-1739145ad88b)",
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
                  color: "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
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
                  "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
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
                    "var(--extracted-r6o4lv, var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca))",
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
                  color: "var(--token-7e7f526a-85ea-441f-9429-765a41c2534c)",
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
      className="framer-1a6bpj8 [order:-1000] [right:0] [z-index:10]"
      style={{ "--site-import-header-display": "flex" } as CSSProperties}
      data-site-import-mobile-header=""
    >
      <div className="framer-1cywj9w-container">
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
                        opacity: "1",
                      } as CSSProperties
                    }
                    data-border="true"
                    tabIndex={0}
                  >
                    <div
                      className="framer-4ijlad-container"
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

function ImportedSectionDefault() {
  return (
    <section
      className="framer-xlPD9 framer-iJjgk framer-u6uwY framer-bAeq6 framer-2n7hjf [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]"
      style={{ height: "100%", width: "100%" }}
    >
      <div
        className="framer-1xu0yxk [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [z-index:0] [opacity:1]"
        style={{
          backgroundColor: "var(--token-01b85732-ed82-44ab-a877-1134ad52b5dd)",
          borderRadius: "12px",
        }}
      >
        <div className="framer-1fcadc8 will-change-transform [opacity:1] transform-none">
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
              className="[object-position:center_center] object-cover"
              style={
                {
                  display: "block",
                  width: "100%",
                  height: "100%",
                  borderRadius: "inherit",
                  cornerShape: "inherit",
                } as CSSProperties
              }
              decoding="auto"
              width="2560"
              height="1707"
              sizes="(min-width: 1200px) calc(100vw - 17.28px), (max-width: 680.98px) calc(100vw - 17.28px), (min-width: 681px) and (max-width: 1199.98px) calc(100vw - 17.28px)"
              srcSet="/site-assets/906c4652256a9a99.avif 512w, /site-assets/f9535575f312cef8.avif 1024w, /site-assets/3a58c86a08aa5be1.avif 2048w, /site-assets/bf96ff54698a08f3.webp 2560w"
              src="/site-assets/bf96ff54698a08f3.webp"
              alt=""
            />
          </div>
        </div>
        <div
          className="framer-1mml552 [opacity:1]"
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.15) 30%, rgba(0, 0, 0, 0.25) 60%, rgba(0, 0, 0, 0.62) 100%)",
          }}
        />
      </div>
      <div
        className="framer-1nr9quv max-w-[1360px] [z-index:1] [opacity:1]"
        style={{ "--1c7qvq9": "0px 32px 0px 32px" } as CSSProperties}
      >
        <div className="framer-1dohcrm will-change-transform [opacity:1] transform-none">
          <a className="framer-jntdgi framer-1jpi062 [opacity:1]" href="/">
            <div
              className="framer-gaemvh transform-none [opacity:1]"
              style={
                {
                  "--extracted-r6o4lv":
                    "var(--token-7e7f526a-85ea-441f-9429-765a41c2534c)",
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
                Home
              </p>
            </div>
          </a>
          <div className="framer-gfku4l-container [opacity:1]">
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
              <path d="M9.5 6.5 15 12l-5.5 5.5" />
            </svg>
          </div>
          <div
            className="framer-p96nkx transform-none [opacity:1]"
            style={
              {
                "--extracted-r6o4lv":
                  "var(--token-7e7f526a-85ea-441f-9429-765a41c2534c)",
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
              Deals
            </p>
          </div>
        </div>
        <div
          className="framer-11f7kie max-w-[612px] [word-break:break-word] transform-none [opacity:1]"
          style={
            {
              "--extracted-gdpscs":
                "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
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
            <span
              className="[opacity:1] transform-none"
              style={{ display: "inline-block" }}
            >
              Deals
            </span>{" "}
            <span
              className="[opacity:1] transform-none"
              style={{ display: "inline-block" }}
            >
              worth
            </span>{" "}
            <span
              className="[opacity:1] transform-none"
              style={{ display: "inline-block" }}
            >
              the
            </span>{" "}
            <span
              className="[opacity:1] transform-none"
              style={{ display: "inline-block" }}
            >
              detour
            </span>
          </h1>
        </div>
        <div className="framer-eps5vo max-w-[676px] will-change-transform [opacity:1] transform-none">
          <div
            className="framer-ee5ezq [word-break:break-word] transform-none [opacity:1]"
            style={
              {
                "--extracted-r6o4lv":
                  "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
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
              Every code here works at checkout. Copy it, or tap “Use this deal”
              and we’ll apply it for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionPromoCodes() {
  return (
    <section className="framer-9gg7gw">
      <div className="framer-pq1tc8 max-w-[1360px]">
        <div className="framer-8w1w5o">
          <div
            className="framer-1vdowop [overflow:var(--overflow-clip-fallback,clip)] [opacity:1] transform-none"
            style={{ willChange: "transform" }}
            id="horizon65-featured"
          >
            <div className="framer-jw2342">
              <div className="framer-6ge69q">
                <div className="framer-1rlm421" />
                <div className="ssr-variant">
                  <div
                    className="framer-12yqdzw transform-none"
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-fvk63j"
                      style={
                        {
                          "--framer-text-color":
                            "var(--token-755a70e9-e7e1-4119-9ef4-745f58f87cab)",
                        } as CSSProperties
                      }
                      dir="auto"
                      data-site-import-responsive="86"
                    >
                      <time dateTime="2027-06-30T00:00:00.000Z">
                        Valid until 30 Jun 2027
                      </time>
                    </p>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div
                  className="framer-d2l9al will-change-transform [opacity:1] transform-none"
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text"
                    style={
                      {
                        "--framer-font-family":
                          '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                        "--framer-font-size": "83px",
                        "--framer-font-variation-axes": '"opsz" 14, "wght" 600',
                        "--framer-letter-spacing": "-0.05em",
                        "--framer-line-height": "0.95em",
                        "--framer-text-color":
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                      } as CSSProperties
                    }
                    dir="auto"
                    data-site-import-responsive="89"
                  >
                    <span
                      className="[opacity:1] transform-none"
                      style={{ display: "inline-block" }}
                    >
                      65%
                    </span>
                  </p>
                </div>
              </div>
              <div
                className="framer-oiqpi2 [word-break:break-word] will-change-transform [opacity:1] transform-none"
                data-framer-component-type="RichTextContainer"
              >
                <h2
                  className="framer-text framer-styles-preset-1hwdddd"
                  style={
                    {
                      "--framer-text-color":
                        "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                    } as CSSProperties
                  }
                  dir="auto"
                >
                  <span
                    className="[opacity:1] transform-none"
                    style={{ display: "inline-block" }}
                  >
                    Unlock
                  </span>{" "}
                  <span
                    className="[opacity:1] transform-none"
                    style={{ display: "inline-block" }}
                  >
                    our
                  </span>{" "}
                  <span
                    className="[opacity:1] transform-none"
                    style={{ display: "inline-block" }}
                  >
                    biggest
                  </span>{" "}
                  <span
                    className="[opacity:1] transform-none"
                    style={{ display: "inline-block" }}
                  >
                    discount
                  </span>{" "}
                  <span
                    className="[opacity:1] transform-none"
                    style={{ display: "inline-block" }}
                  >
                    for
                  </span>{" "}
                  <span
                    className="[opacity:1] transform-none"
                    style={{ display: "inline-block" }}
                  >
                    a
                  </span>{" "}
                  <span
                    className="[opacity:1] transform-none"
                    style={{ display: "inline-block" }}
                  >
                    seamless
                  </span>{" "}
                  <span
                    className="[opacity:1] transform-none"
                    style={{ display: "inline-block" }}
                  >
                    booking
                  </span>{" "}
                  <span
                    className="[opacity:1] transform-none"
                    style={{ display: "inline-block" }}
                  >
                    experience
                  </span>
                </h2>
              </div>
              <div className="ssr-variant">
                <div
                  className="framer-16fqwwd [word-break:break-word] will-change-transform [opacity:1] transform-none"
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-nsw7a4"
                    style={
                      {
                        "--framer-text-color":
                          "var(--token-7e7f526a-85ea-441f-9429-765a41c2534c)",
                      } as CSSProperties
                    }
                    dir="auto"
                    data-site-import-responsive="103"
                  >
                    65% off the base rental price, up to $150 per booking.
                  </p>
                </div>
              </div>
              <div className="framer-1dj3oh3">
                <div className="framer-g0iwv9">
                  <div className="framer-eruy6h-container">
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
                      <path d="m5.5 12.6 4.2 4.2 8.8-9.6" />
                    </svg>
                  </div>
                  <div className="ssr-variant">
                    <div
                      className="framer-1xosbnu transform-none"
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1dmlb93"
                        style={
                          {
                            "--framer-text-color":
                              "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                          } as CSSProperties
                        }
                        dir="auto"
                        data-site-import-responsive="110"
                      >
                        2+ day rentals
                      </p>
                    </div>
                  </div>
                </div>
                <div className="framer-g0iwv9">
                  <div className="framer-eruy6h-container">
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
                      <path d="m5.5 12.6 4.2 4.2 8.8-9.6" />
                    </svg>
                  </div>
                  <div className="ssr-variant">
                    <div
                      className="framer-1xosbnu transform-none"
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1dmlb93"
                        style={
                          {
                            "--framer-text-color":
                              "var(--token-a696a085-89d7-4b67-9db0-f18a17d10f0f)",
                          } as CSSProperties
                        }
                        dir="auto"
                        data-site-import-responsive="116"
                      >
                        Up to $150 off
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="framer-o6bntm" data-border="true">
              <div className="ssr-variant">
                <div
                  className="framer-1hx138x transform-none"
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-1a6wac2"
                    style={
                      {
                        "--framer-text-color":
                          "var(--token-7e7f526a-85ea-441f-9429-765a41c2534c)",
                      } as CSSProperties
                    }
                    dir="auto"
                    data-site-import-responsive="119"
                  >
                    Promo code
                  </p>
                </div>
              </div>
              <div
                className="framer-cygb25"
                style={{ cursor: "pointer" }}
                data-border="true"
                tabIndex={0}
              >
                <div className="framer-12ltuj8-container">
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
                    <rect x="8.5" y="8.5" width="12" height="12" rx="2" />
                    <path d="M15.5 8.5V5a1.5 1.5 0 0 0-1.5-1.5H5A1.5 1.5 0 0 0 3.5 5v9A1.5 1.5 0 0 0 5 15.5h3.5" />
                  </svg>
                </div>
                <div
                  className="framer-11k50w9 transform-none"
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text"
                    style={
                      {
                        "--framer-font-family":
                          '"Inter Variable", "Inter Variable Placeholder", sans-serif',
                        "--framer-font-size": "17px",
                        "--framer-font-variation-axes": '"opsz" 14, "wght" 600',
                        "--framer-letter-spacing": "0.1em",
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    HORIZON65
                  </p>
                </div>
              </div>
              <div className="ssr-variant">
                <div className="framer-1w64afi-container">
                  <div style={{ display: "contents" }}>
                    <a
                      className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-1c9kbig [opacity:1]"
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
                          width: "100%",
                          borderRadius: "6px",
                        } as CSSProperties
                      }
                      data-border="true"
                      href="/cars"
                      tabIndex={0}
                    >
                      <div
                        className="framer-bisomo transform-none [opacity:1]"
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-p3aiuu"
                          style={
                            {
                              "--framer-text-alignment": "center",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Use this deal
                        </p>
                      </div>
                      <div
                        className="framer-156tqkg-container [opacity:1]"
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
              <div className="ssr-variant">
                <div
                  className="framer-uf9fui [word-break:break-word] transform-none"
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-1kvb9ey"
                    style={
                      {
                        "--framer-text-color":
                          "var(--token-7e7f526a-85ea-441f-9429-765a41c2534c)",
                      } as CSSProperties
                    }
                    dir="auto"
                    data-site-import-responsive="135"
                  >
                    Tap the code to copy it, or use the deal and we’ll add it at
                    checkout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="framer-19l7gk9" />
        <div className="framer-xzmic0 max-w-[520px]">
          <div
            className="framer-1gflvxm [word-break:break-word] transform-none"
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
                Promo
              </span>{" "}
              <span
                className="[opacity:1] transform-none"
                style={{ display: "inline-block" }}
              >
                codes
              </span>
            </h2>
          </div>
          <div
            className="framer-m8braf [word-break:break-word] will-change-transform opacity-[0.971638] transform-none"
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
              One code per booking. Codes stack with the automatic savings
              below.
            </p>
          </div>
        </div>
        <div className="framer-19a4wcc" />
        <div className="framer-1w5is02">
          <div className="framer-m0a5fd [place-self:start] will-change-transform [opacity:1] transform-none">
            <div className="ssr-variant">
              <div className="framer-lmdmtd-container">
                <div
                  className="framer-v0idq framer-QxRxm framer-1zOQh framer-5n135 framer-iJjgk framer-oX6dW framer-kzsg4w [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
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
                  <div className="framer-3jnizs aspect-[1.6] [opacity:1]">
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
                        className="[object-position:center_center] object-cover"
                        style={
                          {
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                          } as CSSProperties
                        }
                        decoding="auto"
                        width="1600"
                        height="1067"
                        sizes="max((min(100vw, 1360px) - 112px) / 4, 50px)"
                        srcSet="/site-assets/7e37c8cc7952e49c.avif 512w, /site-assets/29e71eaae825a2b5.avif 1024w, /site-assets/05455dd82d6e19db.avif 1600w"
                        src="/site-assets/05455dd82d6e19db.avif"
                        alt=""
                      />
                    </div>
                    <div
                      className="framer-1kjhu7u [box-shadow:rgba(0,_0,_0,_0.07)_0px_1px_4px_0px] [opacity:1]"
                      style={{
                        backgroundColor:
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                        borderRadius: "999px",
                      }}
                    >
                      <div
                        className="framer-xod6o9 transform-none [opacity:1]"
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
                          Weekend escape
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-bavjbw [opacity:1]">
                    <div
                      className="framer-108lgin [opacity:1]"
                      style={{
                        backgroundColor:
                          "var(--token-664750a5-e279-4bc1-afc7-31d4806e0739)",
                        borderRadius: "999px",
                      }}
                    >
                      <div
                        className="framer-1ape38k [opacity:1]"
                        style={{
                          backgroundColor:
                            "var(--token-9b036bbc-d183-4d65-8024-20a308f60642)",
                          borderRadius: "999px",
                        }}
                      />
                      <div
                        className="framer-gk3jk transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-9b036bbc-d183-4d65-8024-20a308f60642)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-fvk63j"
                          style={
                            {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-9b036bbc-d183-4d65-8024-20a308f60642))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Valid until 31 Dec 2027
                        </p>
                      </div>
                    </div>
                    <div
                      className="framer-va8p2v [word-break:break-word] transform-none [opacity:1]"
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
                        Save 25% on rentals of three days or longer
                      </p>
                    </div>
                    <div
                      className="framer-ydvjmj [word-break:break-word] transform-none [opacity:1]"
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
                        25% off the base rental price on bookings of three days
                        or more.
                      </p>
                    </div>
                    <div className="framer-bcrhep [opacity:1]">
                      <div
                        className="framer-vg3vg6 [opacity:1]"
                        style={{
                          backgroundColor:
                            "var(--token-0a4bf73e-d9bf-4797-a11c-ce5ea8039a5e)",
                          borderRadius: "999px",
                        }}
                      >
                        <div
                          className="framer-yidu41 transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            3+ day rentals
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-1b69553 [opacity:1]" />
                  <div className="framer-1u6gnnn [opacity:1]">
                    <div
                      className="framer-b3fyl4 [opacity:1]"
                      style={
                        {
                          "--border-bottom-width": "1.5px",
                          "--border-color":
                            "var(--token-ddb8babd-ddb9-4424-a937-f09decef16a0)",
                          "--border-left-width": "1.5px",
                          "--border-right-width": "1.5px",
                          "--border-style": "dashed",
                          "--border-top-width": "1.5px",
                          cursor: "pointer",
                          borderRadius: "4px",
                        } as CSSProperties
                      }
                      data-border="true"
                      tabIndex={0}
                    >
                      <div className="framer-1ca47h7-container [opacity:1]">
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
                        className="framer-ucaee1 transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-2gg91v": '"opsz" 14, "wght" 600',
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
                                'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                              "--framer-letter-spacing": "0.06em",
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
                    <div className="framer-rd1mjr-container [opacity:1]">
                      <div style={{ display: "contents" }}>
                        <a
                          className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-1e3iabj framer-1c9kbig [opacity:1]"
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
                          href="/cars"
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
                              Use this deal
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
          <div className="framer-m0a5fd [place-self:start] will-change-transform [opacity:1] transform-none">
            <div className="ssr-variant">
              <div className="framer-lmdmtd-container">
                <div
                  className="framer-v0idq framer-QxRxm framer-1zOQh framer-5n135 framer-iJjgk framer-oX6dW framer-kzsg4w [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
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
                  <div className="framer-3jnizs aspect-[1.6] [opacity:1]">
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
                        className="[object-position:center_center] object-cover"
                        style={
                          {
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                          } as CSSProperties
                        }
                        decoding="auto"
                        width="1600"
                        height="1067"
                        sizes="max((min(100vw, 1360px) - 112px) / 4, 50px)"
                        srcSet="/site-assets/effc502dfde200e9.avif 512w, /site-assets/66f690f579543c85.avif 1024w, /site-assets/0fee11f52ae56744.avif 1600w"
                        src="/site-assets/0fee11f52ae56744.avif"
                        alt=""
                      />
                    </div>
                    <div
                      className="framer-1kjhu7u [box-shadow:rgba(0,_0,_0,_0.07)_0px_1px_4px_0px] [opacity:1]"
                      style={{
                        backgroundColor:
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                        borderRadius: "999px",
                      }}
                    >
                      <div
                        className="framer-xod6o9 transform-none [opacity:1]"
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
                          Free airport pick-up
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-bavjbw [opacity:1]">
                    <div
                      className="framer-108lgin [opacity:1]"
                      style={{
                        backgroundColor:
                          "var(--token-664750a5-e279-4bc1-afc7-31d4806e0739)",
                        borderRadius: "999px",
                      }}
                    >
                      <div
                        className="framer-1ape38k [opacity:1]"
                        style={{
                          backgroundColor:
                            "var(--token-9b036bbc-d183-4d65-8024-20a308f60642)",
                          borderRadius: "999px",
                        }}
                      />
                      <div
                        className="framer-gk3jk transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-9b036bbc-d183-4d65-8024-20a308f60642)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-fvk63j"
                          style={
                            {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-9b036bbc-d183-4d65-8024-20a308f60642))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Valid until 31 Dec 2027
                        </p>
                      </div>
                    </div>
                    <div
                      className="framer-va8p2v [word-break:break-word] transform-none [opacity:1]"
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
                        Free terminal pick-up at every airport we serve
                      </p>
                    </div>
                    <div
                      className="framer-ydvjmj [word-break:break-word] transform-none [opacity:1]"
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
                        Waives the airport location surcharge on pick-up.
                      </p>
                    </div>
                    <div className="framer-bcrhep [opacity:1]">
                      <div
                        className="framer-vg3vg6 [opacity:1]"
                        style={{
                          backgroundColor:
                            "var(--token-0a4bf73e-d9bf-4797-a11c-ce5ea8039a5e)",
                          borderRadius: "999px",
                        }}
                      >
                        <div
                          className="framer-yidu41 transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Airport pick-ups
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-1b69553 [opacity:1]" />
                  <div className="framer-1u6gnnn [opacity:1]">
                    <div
                      className="framer-b3fyl4 [opacity:1]"
                      style={
                        {
                          "--border-bottom-width": "1.5px",
                          "--border-color":
                            "var(--token-ddb8babd-ddb9-4424-a937-f09decef16a0)",
                          "--border-left-width": "1.5px",
                          "--border-right-width": "1.5px",
                          "--border-style": "dashed",
                          "--border-top-width": "1.5px",
                          cursor: "pointer",
                          borderRadius: "4px",
                        } as CSSProperties
                      }
                      data-border="true"
                      tabIndex={0}
                    >
                      <div className="framer-1ca47h7-container [opacity:1]">
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
                        className="framer-ucaee1 transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-2gg91v": '"opsz" 14, "wght" 600',
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
                                'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                              "--framer-letter-spacing": "0.06em",
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
                    <div className="framer-rd1mjr-container [opacity:1]">
                      <div style={{ display: "contents" }}>
                        <a
                          className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-1e3iabj framer-1c9kbig [opacity:1]"
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
                              Use this deal
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
          <div className="framer-m0a5fd [place-self:start] will-change-transform [opacity:1] transform-none">
            <div className="ssr-variant">
              <div className="framer-lmdmtd-container">
                <div
                  className="framer-v0idq framer-QxRxm framer-1zOQh framer-5n135 framer-iJjgk framer-oX6dW framer-kzsg4w [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
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
                  <div className="framer-3jnizs aspect-[1.6] [opacity:1]">
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
                        className="[object-position:center_center] object-cover"
                        style={
                          {
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                          } as CSSProperties
                        }
                        decoding="auto"
                        width="1600"
                        height="1067"
                        sizes="max((min(100vw, 1360px) - 112px) / 4, 50px)"
                        srcSet="/site-assets/6323ea9dde0e2c54.avif 512w, /site-assets/55a295105fdb6f9a.avif 1024w, /site-assets/08bd0b5d66a366c9.avif 1600w"
                        src="/site-assets/08bd0b5d66a366c9.avif"
                        alt=""
                      />
                    </div>
                    <div
                      className="framer-1kjhu7u [box-shadow:rgba(0,_0,_0,_0.07)_0px_1px_4px_0px] [opacity:1]"
                      style={{
                        backgroundColor:
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                        borderRadius: "999px",
                      }}
                    >
                      <div
                        className="framer-xod6o9 transform-none [opacity:1]"
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
                          Go electric
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-bavjbw [opacity:1]">
                    <div
                      className="framer-108lgin [opacity:1]"
                      style={{
                        backgroundColor:
                          "var(--token-664750a5-e279-4bc1-afc7-31d4806e0739)",
                        borderRadius: "999px",
                      }}
                    >
                      <div
                        className="framer-1ape38k [opacity:1]"
                        style={{
                          backgroundColor:
                            "var(--token-9b036bbc-d183-4d65-8024-20a308f60642)",
                          borderRadius: "999px",
                        }}
                      />
                      <div
                        className="framer-gk3jk transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-9b036bbc-d183-4d65-8024-20a308f60642)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-fvk63j"
                          style={
                            {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-9b036bbc-d183-4d65-8024-20a308f60642))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Valid until 31 Dec 2027
                        </p>
                      </div>
                    </div>
                    <div
                      className="framer-va8p2v [word-break:break-word] transform-none [opacity:1]"
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
                        15% off your first electric rental
                      </p>
                    </div>
                    <div
                      className="framer-ydvjmj [word-break:break-word] transform-none [opacity:1]"
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
                        15% off the base rental price on any electric vehicle.
                      </p>
                    </div>
                    <div className="framer-bcrhep [opacity:1]">
                      <div
                        className="framer-vg3vg6 [opacity:1]"
                        style={{
                          backgroundColor:
                            "var(--token-0a4bf73e-d9bf-4797-a11c-ce5ea8039a5e)",
                          borderRadius: "999px",
                        }}
                      >
                        <div
                          className="framer-yidu41 transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            Electric cars only
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-1b69553 [opacity:1]" />
                  <div className="framer-1u6gnnn [opacity:1]">
                    <div
                      className="framer-b3fyl4 [opacity:1]"
                      style={
                        {
                          "--border-bottom-width": "1.5px",
                          "--border-color":
                            "var(--token-ddb8babd-ddb9-4424-a937-f09decef16a0)",
                          "--border-left-width": "1.5px",
                          "--border-right-width": "1.5px",
                          "--border-style": "dashed",
                          "--border-top-width": "1.5px",
                          cursor: "pointer",
                          borderRadius: "4px",
                        } as CSSProperties
                      }
                      data-border="true"
                      tabIndex={0}
                    >
                      <div className="framer-1ca47h7-container [opacity:1]">
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
                        className="framer-ucaee1 transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-2gg91v": '"opsz" 14, "wght" 600',
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
                                'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                              "--framer-letter-spacing": "0.06em",
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
                    <div className="framer-rd1mjr-container [opacity:1]">
                      <div style={{ display: "contents" }}>
                        <a
                          className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-1e3iabj framer-1c9kbig [opacity:1]"
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
                          href="/cars?fuel=%7CElectric%7C"
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
                              Use this deal
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
          <div className="framer-m0a5fd [place-self:start] will-change-transform [opacity:1] transform-none">
            <div className="ssr-variant">
              <div className="framer-lmdmtd-container">
                <div
                  className="framer-v0idq framer-QxRxm framer-1zOQh framer-5n135 framer-iJjgk framer-oX6dW framer-kzsg4w [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [opacity:1]"
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
                  <div className="framer-3jnizs aspect-[1.6] [opacity:1]">
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
                        className="[object-position:center_center] object-cover"
                        style={
                          {
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            cornerShape: "inherit",
                          } as CSSProperties
                        }
                        decoding="auto"
                        width="1600"
                        height="1067"
                        sizes="max((min(100vw, 1360px) - 112px) / 4, 50px)"
                        srcSet="/site-assets/e17c83eb8f4e3473.avif 512w, /site-assets/db80039209a95160.avif 1024w, /site-assets/39c66f94b7ca3d5f.avif 1600w"
                        src="/site-assets/39c66f94b7ca3d5f.avif"
                        alt=""
                      />
                    </div>
                    <div
                      className="framer-1kjhu7u [box-shadow:rgba(0,_0,_0,_0.07)_0px_1px_4px_0px] [opacity:1]"
                      style={{
                        backgroundColor:
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
                        borderRadius: "999px",
                      }}
                    >
                      <div
                        className="framer-xod6o9 transform-none [opacity:1]"
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
                          Refer a friend
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-bavjbw [opacity:1]">
                    <div
                      className="framer-108lgin [opacity:1]"
                      style={{
                        backgroundColor:
                          "var(--token-664750a5-e279-4bc1-afc7-31d4806e0739)",
                        borderRadius: "999px",
                      }}
                    >
                      <div
                        className="framer-1ape38k [opacity:1]"
                        style={{
                          backgroundColor:
                            "var(--token-9b036bbc-d183-4d65-8024-20a308f60642)",
                          borderRadius: "999px",
                        }}
                      />
                      <div
                        className="framer-gk3jk transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-9b036bbc-d183-4d65-8024-20a308f60642)",
                          } as CSSProperties
                        }
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          className="framer-text framer-styles-preset-fvk63j"
                          style={
                            {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-9b036bbc-d183-4d65-8024-20a308f60642))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Valid until 31 Dec 2027
                        </p>
                      </div>
                    </div>
                    <div
                      className="framer-va8p2v [word-break:break-word] transform-none [opacity:1]"
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
                        You both get $30 of driving credit
                      </p>
                    </div>
                    <div
                      className="framer-ydvjmj [word-break:break-word] transform-none [opacity:1]"
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
                        $30 off the total on bookings of two days or more.
                      </p>
                    </div>
                    <div className="framer-bcrhep [opacity:1]">
                      <div
                        className="framer-vg3vg6 [opacity:1]"
                        style={{
                          backgroundColor:
                            "var(--token-0a4bf73e-d9bf-4797-a11c-ce5ea8039a5e)",
                          borderRadius: "999px",
                        }}
                      >
                        <div
                          className="framer-yidu41 transform-none [opacity:1]"
                          style={
                            {
                              "--extracted-r6o4lv":
                                "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
                            } as CSSProperties
                          }
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            className="framer-text framer-styles-preset-1a6wac2"
                            style={
                              {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2))",
                              } as CSSProperties
                            }
                            dir="auto"
                          >
                            2+ day rentals
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="framer-1b69553 [opacity:1]" />
                  <div className="framer-1u6gnnn [opacity:1]">
                    <div
                      className="framer-b3fyl4 [opacity:1]"
                      style={
                        {
                          "--border-bottom-width": "1.5px",
                          "--border-color":
                            "var(--token-ddb8babd-ddb9-4424-a937-f09decef16a0)",
                          "--border-left-width": "1.5px",
                          "--border-right-width": "1.5px",
                          "--border-style": "dashed",
                          "--border-top-width": "1.5px",
                          cursor: "pointer",
                          borderRadius: "4px",
                        } as CSSProperties
                      }
                      data-border="true"
                      tabIndex={0}
                    >
                      <div className="framer-1ca47h7-container [opacity:1]">
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
                        className="framer-ucaee1 transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-2gg91v": '"opsz" 14, "wght" 600',
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
                                'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                              "--framer-letter-spacing": "0.06em",
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
                    <div className="framer-rd1mjr-container [opacity:1]">
                      <div style={{ display: "contents" }}>
                        <a
                          className="framer-HYcfX framer-b6OkM framer-40PBB framer-1qk7v20 framer-v-1e3iabj framer-1c9kbig [opacity:1]"
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
                          href="/cars"
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
                              Use this deal
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

function ImportedSectionAutomaticSavings() {
  return (
    <section className="framer-1cvgxni">
      <div className="framer-pr8vgs max-w-[1360px]">
        <div className="framer-1r68bnb max-w-[520px]">
          <div
            className="framer-2l5qtb [word-break:break-word] transform-none"
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
                Savings
              </span>{" "}
              <span
                className="[opacity:1] transform-none"
                style={{ display: "inline-block" }}
              >
                that
              </span>{" "}
              <span
                className="[opacity:1] transform-none"
                style={{ display: "inline-block" }}
              >
                apply
              </span>{" "}
              <span
                className="[opacity:1] transform-none"
                style={{ display: "inline-block" }}
              >
                on
              </span>{" "}
              <span
                className="[opacity:1] transform-none"
                style={{ display: "inline-block" }}
              >
                their
              </span>{" "}
              <span
                className="[opacity:1] transform-none"
                style={{ display: "inline-block" }}
              >
                own
              </span>
            </h2>
          </div>
          <div
            className="framer-kk52dp [word-break:break-word] will-change-transform opacity-[0.976221] transform-none"
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
              No code needed. They show up in the price the moment they apply.
            </p>
          </div>
        </div>
        <div className="framer-y37rnf">
          <div className="ssr-variant">
            <div className="framer-1d4t73t-container [place-self:start] will-change-transform opacity-[0.990315] transform-none">
              <div
                className="framer-SpeeY framer-ip2yS framer-iJjgk framer-1wd661c [opacity:1]"
                style={{
                  backgroundColor:
                    "var(--token-0a4bf73e-d9bf-4797-a11c-ce5ea8039a5e)",
                  height: "100%",
                  width: "100%",
                  borderRadius: "8px",
                }}
              >
                <div
                  className="framer-ymqu3p [word-break:break-word] transform-none [opacity:1]"
                  style={
                    {
                      "--extracted-2gg91v": '"opsz" 14, "wght" 600',
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
                        "--framer-font-size": "24px",
                        "--framer-font-variation-axes":
                          'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                        "--framer-letter-spacing": "-0.04em",
                        "--framer-line-height": "1em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    10%
                  </p>
                </div>
                <div className="framer-1fx56wm [opacity:1]">
                  <div
                    className="framer-18bu9jo [word-break:break-word] transform-none [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
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
                      Weekly rate
                    </p>
                  </div>
                  <div
                    className="framer-1omwbkj [word-break:break-word] transform-none [opacity:1]"
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
                          "--framer-text-alignment": "start",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Book 7 days or more and the base rate drops by a tenth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div className="framer-1pnbsy7-container [place-self:start] will-change-transform opacity-[0.980585] transform-none">
              <div
                className="framer-SpeeY framer-ip2yS framer-iJjgk framer-1wd661c [opacity:1]"
                style={{
                  backgroundColor:
                    "var(--token-0a4bf73e-d9bf-4797-a11c-ce5ea8039a5e)",
                  height: "100%",
                  width: "100%",
                  borderRadius: "8px",
                }}
              >
                <div
                  className="framer-ymqu3p [word-break:break-word] transform-none [opacity:1]"
                  style={
                    {
                      "--extracted-2gg91v": '"opsz" 14, "wght" 600',
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
                        "--framer-font-size": "24px",
                        "--framer-font-variation-axes":
                          'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                        "--framer-letter-spacing": "-0.04em",
                        "--framer-line-height": "1em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    20%
                  </p>
                </div>
                <div className="framer-1fx56wm [opacity:1]">
                  <div
                    className="framer-18bu9jo [word-break:break-word] transform-none [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
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
                      Monthly rate
                    </p>
                  </div>
                  <div
                    className="framer-1omwbkj [word-break:break-word] transform-none [opacity:1]"
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
                          "--framer-text-alignment": "start",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      28 days or more, the cheapest way to keep a car for a
                      season.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div className="framer-1n2d0xs-container [place-self:start] [@media(min-width:681px)_and_(max-width:1199.98px)]:[grid-column:1/-1] will-change-transform [opacity:1] transform-none">
              <div
                className="framer-SpeeY framer-ip2yS framer-iJjgk framer-1wd661c [opacity:1]"
                style={{
                  backgroundColor:
                    "var(--token-0a4bf73e-d9bf-4797-a11c-ce5ea8039a5e)",
                  height: "100%",
                  width: "100%",
                  borderRadius: "8px",
                }}
              >
                <div
                  className="framer-ymqu3p [word-break:break-word] transform-none [opacity:1]"
                  style={
                    {
                      "--extracted-2gg91v": '"opsz" 14, "wght" 600',
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
                        "--framer-font-size": "24px",
                        "--framer-font-variation-axes":
                          'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                        "--framer-letter-spacing": "-0.04em",
                        "--framer-line-height": "1em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    $0
                  </p>
                </div>
                <div className="framer-1fx56wm [opacity:1]">
                  <div
                    className="framer-18bu9jo [word-break:break-word] transform-none [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
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
                      One-way on select routes
                    </p>
                  </div>
                  <div
                    className="framer-1omwbkj [word-break:break-word] transform-none [opacity:1]"
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
                          "--framer-text-alignment": "start",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119))",
                        } as CSSProperties
                      }
                      dir="auto"
                    >
                      Munich ↔ Berlin and Glasgow ↔ Birmingham carry no drop
                      fee.
                    </p>
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

function ImportedSectionDealAlerts() {
  return (
    <section className="framer-k6wipv">
      <div className="framer-1d3g1ni max-w-[1360px]">
        <div className="framer-g8cpwr will-change-transform [opacity:1] transform-none">
          <div className="framer-x4i0w8 max-w-[520px]">
            <div
              className="framer-1048ukc [word-break:break-word] transform-none"
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
                  Get
                </span>{" "}
                <span
                  className="[opacity:1] transform-none"
                  style={{ display: "inline-block" }}
                >
                  deal
                </span>{" "}
                <span
                  className="[opacity:1] transform-none"
                  style={{ display: "inline-block" }}
                >
                  alerts
                </span>
              </h2>
            </div>
            <div
              className="framer-116n2sz [word-break:break-word] will-change-transform [opacity:1] transform-none"
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
                New codes land in your inbox before they’re announced anywhere
                else. Two emails a month.
              </p>
            </div>
          </div>
          <form className="framer-1m2j7yl" method="post">
            <div className="framer-form-text-input framer-form-input-wrapper framer-rx1lup">
              <input
                className="framer-form-input framer-form-input-empty"
                type="email"
                required
                name="Email"
                placeholder="you@example.com"
                defaultValue=""
                aria-label="Email"
              />
            </div>
            <input type="hidden" name="Form" defaultValue="Deal alerts" />
            <div className="ssr-variant">
              <div className="framer-1nfrscr-container">
                <button
                  className="framer-Nx5Oc framer-FiAfW framer-13a32u7 [opacity:1]"
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
                    className="framer-h0ub8i transform-none [opacity:1]"
                    style={
                      {
                        "--extracted-r6o4lv":
                          "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)",
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
                      Notify me
                    </p>
                  </div>
                </button>
              </div>
            </div>
            <input type="hidden" name="Site" defaultValue="Horizone" />
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
        </div>
      </div>
    </section>
  );
}

function ImportedSectionOfferTerms() {
  return (
    <section className="framer-hptp3p">
      <div className="framer-1qp4avc max-w-[880px]">
        <div
          className="framer-126bk24 [word-break:break-word] transform-none"
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
              Offer
            </span>{" "}
            <span
              className="[opacity:1] transform-none"
              style={{ display: "inline-block" }}
            >
              terms
            </span>
          </h2>
        </div>
        <div className="framer-asijim" data-border="true">
          <div className="ssr-variant">
            <div className="framer-ysj2k8-container will-change-transform [opacity:1] transform-none">
              <div
                className="framer-zwvpI framer-FiAfW framer-oX6dW framer-3tJNm framer-1n1ko4n [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]"
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
                <div className="framer-1izvn91 [opacity:1]" tabIndex={0}>
                  <div className="framer-maqplf [opacity:1]">
                    <div
                      className="framer-1okcbnu transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
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
                        How promo codes work
                      </p>
                    </div>
                  </div>
                  <div
                    className="framer-g34mf transform-none [opacity:1]"
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
                  >
                    <div className="framer-1fhab3f-container [opacity:1]">
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
          <div className="ssr-variant">
            <div className="framer-pfmogk-container will-change-transform [opacity:1] transform-none">
              <div
                className="framer-zwvpI framer-FiAfW framer-oX6dW framer-3tJNm framer-1n1ko4n [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]"
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
                <div className="framer-1izvn91 [opacity:1]" tabIndex={0}>
                  <div className="framer-maqplf [opacity:1]">
                    <div
                      className="framer-1okcbnu transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
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
                        What if my code isn’t accepted?
                      </p>
                    </div>
                  </div>
                  <div
                    className="framer-g34mf transform-none [opacity:1]"
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
                  >
                    <div className="framer-1fhab3f-container [opacity:1]">
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
          <div className="ssr-variant">
            <div className="framer-18mat75-container will-change-transform [opacity:1] transform-none">
              <div
                className="framer-zwvpI framer-FiAfW framer-oX6dW framer-3tJNm framer-1n1ko4n [overflow:var(--overflow-clip-fallback,clip)] [opacity:1]"
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
                <div className="framer-1izvn91 [opacity:1]" tabIndex={0}>
                  <div className="framer-maqplf [opacity:1]">
                    <div
                      className="framer-1okcbnu transform-none [opacity:1]"
                      style={
                        {
                          "--extracted-r6o4lv":
                            "var(--token-df755ad1-ea9e-4505-a051-33b272779231)",
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
                        Do cancelled bookings keep the discount?
                      </p>
                    </div>
                  </div>
                  <div
                    className="framer-g34mf transform-none [opacity:1]"
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
                  >
                    <div className="framer-1fhab3f-container [opacity:1]">
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
                data-site-import-responsive="405"
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
                data-site-import-responsive="408"
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
                  data-site-import-responsive="416"
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
                  data-site-import-responsive="425"
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
                  data-site-import-responsive="430"
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
                  data-site-import-responsive="450"
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
                  data-site-import-responsive="466"
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
                  data-site-import-responsive="486"
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
                  data-site-import-responsive="491"
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
                data-site-import-responsive="506"
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
            data-site-import-responsive="534"
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
