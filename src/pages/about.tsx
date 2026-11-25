import type { CSSProperties } from "react";
import { useEffect } from "react";
import { useSyncExternalStore } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/about.css?raw";
import { SiteImportMobileNav } from "../components/site-import-mobile.nav";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Horizone" },
      {
        name: "description",
        content:
          "Learn about Horizone’s car rental network, service standards, and the people behind the journey.",
      },
      { property: "og:title", content: "About Horizone" },
      {
        property: "og:description",
        content:
          "Learn about Horizone’s car rental network, service standards, and the people behind the journey.",
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
            className="framer-Mluj3 framer-qO70Z framer-71sfr framer-1385qz7 items-center flex-col flex-nowrap content-center justify-start [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [min-height:100vh]"
            style={{ width: "auto", display: "contents" }}
          >
            <div className="ssr-variant">
              <div className="framer-p7o0ow-container flex-none">
                <div className="ssr-variant">
                  <ImportedSectionTall />
                </div>
              </div>
            </div>
            <section className="framer-ygx6cp items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0]">
              <div className="framer-1agcsi9 items-start flex-none flex-col flex-nowrap gap-[28px] max-w-[1360px] [place-content:flex-start]">
                <div className="framer-17aewzp">
                  <div className="ssr-variant">
                    <div
                      className="framer-1ipd2gt [word-break:break-word] will-change-transform [opacity:1] transform-none"
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
                              '"opsz" 14, "wght" 400',
                            "--framer-letter-spacing": "-0.02em",
                            "--framer-line-height": "1.45em",
                            "--framer-text-color":
                              "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)",
                          } as CSSProperties
                        }
                        dir="auto"
                        data-site-import-responsive="87"
                      >
                        Renting a car used to mean a cheap headline price, then
                        an hour at a desk while it doubled. We thought
                        travellers deserved the opposite: every fee in the first
                        number you see, cover you can actually understand, and a
                        car that’s ready when you land.
                      </p>
                    </div>
                  </div>
                  <div
                    className="framer-b6zdm1 grid-cols-[repeat(2,minmax(50px,1fr))] justify-center [gap:1px] [grid-auto-rows:minmax(0,1fr)] [grid-template-rows:repeat(1,minmax(0,1fr))] [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)]"
                    data-border="true"
                  >
                    <div className="ssr-variant">
                      <div
                        className="framer-1h0g08y-container flex-none [place-self:start] will-change-transform [opacity:1] transform-none"
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
                          data-site-import-responsive="90"
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
                              2016
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
                              Founded in Lisbon
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="framer-1h0g08y-container flex-none [place-self:start] will-change-transform [opacity:1] transform-none"
                        style={
                          {
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
                            className="framer-aqkdkv transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-4hgl77"
                              dir="auto"
                            >
                              2016
                            </p>
                          </div>
                          <div
                            className="framer-1tuannn transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              dir="auto"
                            >
                              Founded in Lisbon
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ssr-variant">
                      <div
                        className="framer-1gtv1ku-container flex-none [place-self:start] will-change-transform [opacity:1] transform-none"
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
                          data-site-import-responsive="96"
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
                              14
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
                              Cities, 28 desks
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="framer-1gtv1ku-container flex-none [place-self:start] will-change-transform [opacity:1] transform-none"
                        style={
                          {
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
                            className="framer-aqkdkv transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-4hgl77"
                              dir="auto"
                            >
                              14
                            </p>
                          </div>
                          <div
                            className="framer-1tuannn transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              dir="auto"
                            >
                              Cities, 28 desks
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ssr-variant">
                      <div
                        className="framer-hn4ev9-container flex-none [place-self:start] will-change-transform [opacity:1] transform-none"
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
                          data-site-import-responsive="102"
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
                              1,400
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
                              Vetted local suppliers
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="framer-hn4ev9-container flex-none [place-self:start] will-change-transform [opacity:1] transform-none"
                        style={
                          {
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
                            className="framer-aqkdkv transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-4hgl77"
                              dir="auto"
                            >
                              1,400
                            </p>
                          </div>
                          <div
                            className="framer-1tuannn transform-none [opacity:1]"
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1dmlb93"
                              dir="auto"
                            >
                              Vetted local suppliers
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ssr-variant">
                      <div
                        className="framer-7t8lhn-container flex-none [place-self:start] will-change-transform [opacity:1] transform-none"
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
                          data-site-import-responsive="108"
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
                      <div
                        className="framer-7t8lhn-container flex-none [place-self:start] will-change-transform [opacity:1] transform-none"
                        style={
                          {
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
                            className="framer-aqkdkv transform-none [opacity:1]"
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
                            className="framer-1tuannn transform-none [opacity:1]"
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
              </div>
            </section>
            <ImportedSectionHowWeGotHere />
            <ImportedSectionHowWeWork />
            <ImportedSectionSupplierVetting />
            <ImportedSectionCareers />
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
  return (
    <header
      className="framer-rQnLE framer-MCyNe framer-3tJNm framer-eHiTe framer-ccphy framer-iJjgk framer-GvPaN framer-AAOB7 framer-BdrqZ framer-KgJtC framer-EhiDw framer-ANzsm framer-71sfr framer-7tu3jo"
      style={{ width: "100%", opacity: "1" }}
      data-site-import-scroll-header={
        '{"desktop":{"added":["framer-v-i7duu0"],"removed":["framer-v-7tu3jo"],"threshold":648},"mobile":{"added":["framer-v-1jhoykp"],"removed":["framer-v-x08t8a"],"threshold":633}}'
      }
    >
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
    </header>
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

function ImportedSectionTall() {
  return (
    <section
      className="framer-xlPD9 framer-iJjgk framer-u6uwY framer-bAeq6 framer-2n7hjf framer-v-1fkhuac items-center flex-col flex-nowrap content-center justify-end [gap:0] [overflow:var(--overflow-clip-fallback,clip)] [padding:86.64px_0_44.64px] [opacity:1]"
      style={{ height: "100%", width: "100%" }}
      data-site-import-responsive="53"
    >
      <div
        className="framer-1xu0yxk flex-none [overflow:var(--overflow-clip-fallback,clip)] [will-change:var(--framer-will-change-override,transform)] [z-index:0] [opacity:1]"
        style={{
          backgroundColor: "var(--token-01b85732-ed82-44ab-a877-1134ad52b5dd)",
          borderRadius: "12px",
        }}
      >
        <div className="framer-1fcadc8 flex-none will-change-transform [opacity:1] transform-none">
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
              width="2560"
              height="1707"
              sizes="calc(100vw - 17.28px)"
              srcSet="/site-assets/a072f34fd37091cb.avif 512w, /site-assets/dc5d289c07a4ed52.avif 1024w, /site-assets/52740bbde6f3b516.avif 2048w, /site-assets/d084d18ccccfa771.avif 2560w"
              src="/site-assets/d084d18ccccfa771.avif"
              alt=""
            />
          </div>
        </div>
        <div
          className="framer-1mml552 flex-none [opacity:1]"
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.15) 30%, rgba(0, 0, 0, 0.25) 60%, rgba(0, 0, 0, 0.62) 100%)",
          }}
        />
      </div>
      <div
        className="framer-1nr9quv items-start flex-none flex-col flex-nowrap max-w-[1360px] [gap:0] [place-content:flex-start] [z-index:1] [opacity:1]"
        style={{ "--1c7qvq9": "0px 32px 0px 32px" } as CSSProperties}
      >
        <div className="framer-1dohcrm items-center flex-none flex-row flex-nowrap gap-[6px] content-center justify-start will-change-transform [opacity:1] transform-none">
          <a
            className="framer-jntdgi framer-1jpi062 items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
            href="/"
          >
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
          <div className="framer-gfku4l-container flex-none [opacity:1]">
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
                  "--framer-text-alignment": "start",
                  "--framer-text-color":
                    "var(--extracted-r6o4lv, var(--token-7e7f526a-85ea-441f-9429-765a41c2534c))",
                } as CSSProperties
              }
              dir="auto"
            >
              About
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
            <span style={{ display: "inline-block" }}>The</span>{" "}
            <span style={{ display: "inline-block" }}>price</span>{" "}
            <span style={{ display: "inline-block" }}>you</span>{" "}
            <span style={{ display: "inline-block" }}>see</span>{" "}
            <span style={{ display: "inline-block" }}>is</span>{" "}
            <span style={{ display: "inline-block" }}>the</span>{" "}
            <span style={{ display: "inline-block" }}>price</span>{" "}
            <span style={{ display: "inline-block" }}>you</span>{" "}
            <span style={{ display: "inline-block" }}>pay.</span>
          </h1>
        </div>
        <div className="framer-eps5vo items-start flex-none flex-row flex-nowrap max-w-[676px] [gap:0] [place-content:flex-start] will-change-transform [opacity:1] transform-none">
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
              Horizone started in Lisbon in 2016 with twelve cars and one rule.
              Ten years on, it still decides everything we build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionHowWeGotHere() {
  return (
    <section className="framer-7av4hp items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0]">
      <div className="framer-1ujtyq9 items-start flex-none flex-col flex-nowrap gap-[28px] max-w-[1360px] [place-content:flex-start]">
        <div className="framer-1w75txx items-start flex-none flex-col flex-nowrap gap-[8px] max-w-[520px] [place-content:flex-start]">
          <div
            className="framer-65mqga [word-break:break-word] transform-none"
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
                How
              </span>{" "}
              <span
                className="[opacity:1] transform-none"
                style={{ display: "inline-block" }}
              >
                we
              </span>{" "}
              <span
                className="[opacity:1] transform-none"
                style={{ display: "inline-block" }}
              >
                got
              </span>{" "}
              <span
                className="[opacity:1] transform-none"
                style={{ display: "inline-block" }}
              >
                here
              </span>
            </h2>
          </div>
          <div
            className="framer-g2h05w [word-break:break-word] will-change-transform opacity-[0.970126] transform-none"
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
              A decade, one city at a time.
            </p>
          </div>
        </div>
        <div className="framer-dcyaot [@media(max-width:680.98px)]:items-start">
          <div className="ssr-variant">
            <div
              className="framer-ixikue-container flex-none will-change-transform opacity-[0.987017] transform-none"
              data-site-import-desktop-variant=""
            >
              <div
                className="framer-ajnzb framer-iJjgk framer-1y9jsi7 items-start flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
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
                data-site-import-responsive="126"
              >
                <div
                  className="framer-19jn3g3 flex-none [opacity:1]"
                  style={{
                    backgroundColor:
                      "var(--token-1d64286a-cd5c-4838-a5ba-0041771ea97f)",
                    borderRadius: "999px",
                  }}
                />
                <div
                  className="framer-6yzcfc [word-break:break-word] transform-none [opacity:1]"
                  style={
                    {
                      "--extracted-2gg91v": '"opsz" 14, "wght" 600',
                      "--extracted-r6o4lv":
                        "var(--token-10b1086b-12a3-40be-8d8f-101093091fe8)",
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
                        "--framer-font-size": "12px",
                        "--framer-font-variation-axes":
                          'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                        "--framer-letter-spacing": "0.04em",
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-10b1086b-12a3-40be-8d8f-101093091fe8))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    2016
                  </p>
                </div>
                <div className="framer-38vny1 flex-none [opacity:1]" />
                <div
                  className="framer-eolj5f [word-break:break-word] transform-none [opacity:1]"
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
                        "--framer-font-size": "15px",
                        "--framer-font-variation-axes":
                          'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                        "--framer-letter-spacing": "-0.02em",
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    Twelve cars in Lisbon
                  </p>
                </div>
                <div className="framer-1nfsdnh flex-none [opacity:1]" />
                <div
                  className="framer-1g5em8c [word-break:break-word] transform-none [opacity:1]"
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
                    Two founders, one desk at Cais do Sodré and a price list
                    with nothing added at the counter.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="framer-ixikue-container flex-none will-change-transform [opacity:1] transform-none"
              style={
                { "--site-import-responsive-display": "block" } as CSSProperties
              }
              data-site-import-mobile-variant=""
            >
              <div
                className="framer-ajnzb framer-iJjgk framer-1y9jsi7 framer-v-6epk93 items-start flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                style={
                  {
                    "--border-bottom-width": "0px",
                    "--border-color":
                      "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                    "--border-left-width": "1px",
                    "--border-right-width": "0px",
                    "--border-style": "solid",
                    "--border-top-width": "0px",
                    width: "100%",
                  } as CSSProperties
                }
                data-border="true"
              >
                <div
                  className="framer-19jn3g3 flex-none [opacity:1]"
                  style={{
                    backgroundColor:
                      "var(--token-1d64286a-cd5c-4838-a5ba-0041771ea97f)",
                    borderRadius: "999px",
                  }}
                />
                <div
                  className="framer-6yzcfc [word-break:break-word] transform-none [opacity:1]"
                  style={
                    {
                      "--extracted-2gg91v": '"opsz" 14, "wght" 600',
                      "--extracted-r6o4lv":
                        "var(--token-10b1086b-12a3-40be-8d8f-101093091fe8)",
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
                        "--framer-font-size": "12px",
                        "--framer-font-variation-axes":
                          'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                        "--framer-letter-spacing": "0.04em",
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-10b1086b-12a3-40be-8d8f-101093091fe8))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    2016
                  </p>
                </div>
                <div className="framer-38vny1 flex-none [opacity:1]" />
                <div
                  className="framer-eolj5f [word-break:break-word] transform-none [opacity:1]"
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
                        "--framer-font-size": "15px",
                        "--framer-font-variation-axes":
                          'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                        "--framer-letter-spacing": "-0.02em",
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    Twelve cars in Lisbon
                  </p>
                </div>
                <div className="framer-1nfsdnh flex-none [opacity:1]" />
                <div
                  className="framer-1g5em8c [word-break:break-word] transform-none [opacity:1]"
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
                    Two founders, one desk at Cais do Sodré and a price list
                    with nothing added at the counter.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div
              className="framer-b0wp28-container flex-none will-change-transform opacity-[0.975273] transform-none"
              data-site-import-desktop-variant=""
            >
              <div
                className="framer-ajnzb framer-iJjgk framer-1y9jsi7 items-start flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
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
                data-site-import-responsive="137"
              >
                <div
                  className="framer-19jn3g3 flex-none [opacity:1]"
                  style={{
                    backgroundColor:
                      "var(--token-1d64286a-cd5c-4838-a5ba-0041771ea97f)",
                    borderRadius: "999px",
                  }}
                />
                <div
                  className="framer-6yzcfc [word-break:break-word] transform-none [opacity:1]"
                  style={
                    {
                      "--extracted-2gg91v": '"opsz" 14, "wght" 600',
                      "--extracted-r6o4lv":
                        "var(--token-10b1086b-12a3-40be-8d8f-101093091fe8)",
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
                        "--framer-font-size": "12px",
                        "--framer-font-variation-axes":
                          'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                        "--framer-letter-spacing": "0.04em",
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-10b1086b-12a3-40be-8d8f-101093091fe8))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    2018
                  </p>
                </div>
                <div className="framer-38vny1 flex-none [opacity:1]" />
                <div
                  className="framer-eolj5f [word-break:break-word] transform-none [opacity:1]"
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
                        "--framer-font-size": "15px",
                        "--framer-font-variation-axes":
                          'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                        "--framer-letter-spacing": "-0.02em",
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    Berlin, Munich and one-way
                  </p>
                </div>
                <div className="framer-1nfsdnh flex-none [opacity:1]" />
                <div
                  className="framer-1g5em8c [word-break:break-word] transform-none [opacity:1]"
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
                    The first free one-way route, because nobody drives the
                    autobahn twice on purpose.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="framer-b0wp28-container flex-none will-change-transform [opacity:1] transform-none"
              style={
                { "--site-import-responsive-display": "block" } as CSSProperties
              }
              data-site-import-mobile-variant=""
            >
              <div
                className="framer-ajnzb framer-iJjgk framer-1y9jsi7 framer-v-6epk93 items-start flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                style={
                  {
                    "--border-bottom-width": "0px",
                    "--border-color":
                      "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                    "--border-left-width": "1px",
                    "--border-right-width": "0px",
                    "--border-style": "solid",
                    "--border-top-width": "0px",
                    width: "100%",
                  } as CSSProperties
                }
                data-border="true"
              >
                <div
                  className="framer-19jn3g3 flex-none [opacity:1]"
                  style={{
                    backgroundColor:
                      "var(--token-1d64286a-cd5c-4838-a5ba-0041771ea97f)",
                    borderRadius: "999px",
                  }}
                />
                <div
                  className="framer-6yzcfc [word-break:break-word] transform-none [opacity:1]"
                  style={
                    {
                      "--extracted-2gg91v": '"opsz" 14, "wght" 600',
                      "--extracted-r6o4lv":
                        "var(--token-10b1086b-12a3-40be-8d8f-101093091fe8)",
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
                        "--framer-font-size": "12px",
                        "--framer-font-variation-axes":
                          'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                        "--framer-letter-spacing": "0.04em",
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-10b1086b-12a3-40be-8d8f-101093091fe8))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    2018
                  </p>
                </div>
                <div className="framer-38vny1 flex-none [opacity:1]" />
                <div
                  className="framer-eolj5f [word-break:break-word] transform-none [opacity:1]"
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
                        "--framer-font-size": "15px",
                        "--framer-font-variation-axes":
                          'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                        "--framer-letter-spacing": "-0.02em",
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    Berlin, Munich and one-way
                  </p>
                </div>
                <div className="framer-1nfsdnh flex-none [opacity:1]" />
                <div
                  className="framer-1g5em8c [word-break:break-word] transform-none [opacity:1]"
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
                    The first free one-way route, because nobody drives the
                    autobahn twice on purpose.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div
              className="framer-dacmub-container flex-none will-change-transform opacity-[0.957514] transform-none"
              data-site-import-desktop-variant=""
            >
              <div
                className="framer-ajnzb framer-iJjgk framer-1y9jsi7 items-start flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
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
                data-site-import-responsive="148"
              >
                <div
                  className="framer-19jn3g3 flex-none [opacity:1]"
                  style={{
                    backgroundColor:
                      "var(--token-1d64286a-cd5c-4838-a5ba-0041771ea97f)",
                    borderRadius: "999px",
                  }}
                />
                <div
                  className="framer-6yzcfc [word-break:break-word] transform-none [opacity:1]"
                  style={
                    {
                      "--extracted-2gg91v": '"opsz" 14, "wght" 600',
                      "--extracted-r6o4lv":
                        "var(--token-10b1086b-12a3-40be-8d8f-101093091fe8)",
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
                        "--framer-font-size": "12px",
                        "--framer-font-variation-axes":
                          'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                        "--framer-letter-spacing": "0.04em",
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-10b1086b-12a3-40be-8d8f-101093091fe8))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    2020
                  </p>
                </div>
                <div className="framer-38vny1 flex-none [opacity:1]" />
                <div
                  className="framer-eolj5f [word-break:break-word] transform-none [opacity:1]"
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
                        "--framer-font-size": "15px",
                        "--framer-font-variation-axes":
                          'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                        "--framer-letter-spacing": "-0.02em",
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    Desks go digital
                  </p>
                </div>
                <div className="framer-1nfsdnh flex-none [opacity:1]" />
                <div
                  className="framer-1g5em8c [word-break:break-word] transform-none [opacity:1]"
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
                    Check-in from your phone and a key handover in under five
                    minutes, at every location.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="framer-dacmub-container flex-none will-change-transform [opacity:1] transform-none"
              style={
                { "--site-import-responsive-display": "block" } as CSSProperties
              }
              data-site-import-mobile-variant=""
            >
              <div
                className="framer-ajnzb framer-iJjgk framer-1y9jsi7 framer-v-6epk93 items-start flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                style={
                  {
                    "--border-bottom-width": "0px",
                    "--border-color":
                      "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                    "--border-left-width": "1px",
                    "--border-right-width": "0px",
                    "--border-style": "solid",
                    "--border-top-width": "0px",
                    width: "100%",
                  } as CSSProperties
                }
                data-border="true"
              >
                <div
                  className="framer-19jn3g3 flex-none [opacity:1]"
                  style={{
                    backgroundColor:
                      "var(--token-1d64286a-cd5c-4838-a5ba-0041771ea97f)",
                    borderRadius: "999px",
                  }}
                />
                <div
                  className="framer-6yzcfc [word-break:break-word] transform-none [opacity:1]"
                  style={
                    {
                      "--extracted-2gg91v": '"opsz" 14, "wght" 600',
                      "--extracted-r6o4lv":
                        "var(--token-10b1086b-12a3-40be-8d8f-101093091fe8)",
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
                        "--framer-font-size": "12px",
                        "--framer-font-variation-axes":
                          'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                        "--framer-letter-spacing": "0.04em",
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-10b1086b-12a3-40be-8d8f-101093091fe8))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    2020
                  </p>
                </div>
                <div className="framer-38vny1 flex-none [opacity:1]" />
                <div
                  className="framer-eolj5f [word-break:break-word] transform-none [opacity:1]"
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
                        "--framer-font-size": "15px",
                        "--framer-font-variation-axes":
                          'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                        "--framer-letter-spacing": "-0.02em",
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    Desks go digital
                  </p>
                </div>
                <div className="framer-1nfsdnh flex-none [opacity:1]" />
                <div
                  className="framer-1g5em8c [word-break:break-word] transform-none [opacity:1]"
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
                    Check-in from your phone and a key handover in under five
                    minutes, at every location.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div
              className="framer-6rp8jo-container flex-none will-change-transform [opacity:1] transform-none"
              data-site-import-desktop-variant=""
            >
              <div
                className="framer-ajnzb framer-iJjgk framer-1y9jsi7 items-start flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
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
                data-site-import-responsive="159"
              >
                <div
                  className="framer-19jn3g3 flex-none [opacity:1]"
                  style={{
                    backgroundColor:
                      "var(--token-1d64286a-cd5c-4838-a5ba-0041771ea97f)",
                    borderRadius: "999px",
                  }}
                />
                <div
                  className="framer-6yzcfc [word-break:break-word] transform-none [opacity:1]"
                  style={
                    {
                      "--extracted-2gg91v": '"opsz" 14, "wght" 600',
                      "--extracted-r6o4lv":
                        "var(--token-10b1086b-12a3-40be-8d8f-101093091fe8)",
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
                        "--framer-font-size": "12px",
                        "--framer-font-variation-axes":
                          'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                        "--framer-letter-spacing": "0.04em",
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-10b1086b-12a3-40be-8d8f-101093091fe8))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    2022
                  </p>
                </div>
                <div className="framer-38vny1 flex-none [opacity:1]" />
                <div
                  className="framer-eolj5f [word-break:break-word] transform-none [opacity:1]"
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
                        "--framer-font-size": "15px",
                        "--framer-font-variation-axes":
                          'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                        "--framer-letter-spacing": "-0.02em",
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    An electric fleet
                  </p>
                </div>
                <div className="framer-1nfsdnh flex-none [opacity:1]" />
                <div
                  className="framer-1g5em8c [word-break:break-word] transform-none [opacity:1]"
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
                    Tesla, Kia and Volkswagen EVs join, handed over charged,
                    with a charging card in the glovebox.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="framer-6rp8jo-container flex-none will-change-transform [opacity:1] transform-none"
              style={
                { "--site-import-responsive-display": "block" } as CSSProperties
              }
              data-site-import-mobile-variant=""
            >
              <div
                className="framer-ajnzb framer-iJjgk framer-1y9jsi7 framer-v-6epk93 items-start flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                style={
                  {
                    "--border-bottom-width": "0px",
                    "--border-color":
                      "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                    "--border-left-width": "1px",
                    "--border-right-width": "0px",
                    "--border-style": "solid",
                    "--border-top-width": "0px",
                    width: "100%",
                  } as CSSProperties
                }
                data-border="true"
              >
                <div
                  className="framer-19jn3g3 flex-none [opacity:1]"
                  style={{
                    backgroundColor:
                      "var(--token-1d64286a-cd5c-4838-a5ba-0041771ea97f)",
                    borderRadius: "999px",
                  }}
                />
                <div
                  className="framer-6yzcfc [word-break:break-word] transform-none [opacity:1]"
                  style={
                    {
                      "--extracted-2gg91v": '"opsz" 14, "wght" 600',
                      "--extracted-r6o4lv":
                        "var(--token-10b1086b-12a3-40be-8d8f-101093091fe8)",
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
                        "--framer-font-size": "12px",
                        "--framer-font-variation-axes":
                          'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                        "--framer-letter-spacing": "0.04em",
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-10b1086b-12a3-40be-8d8f-101093091fe8))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    2022
                  </p>
                </div>
                <div className="framer-38vny1 flex-none [opacity:1]" />
                <div
                  className="framer-eolj5f [word-break:break-word] transform-none [opacity:1]"
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
                        "--framer-font-size": "15px",
                        "--framer-font-variation-axes":
                          'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                        "--framer-letter-spacing": "-0.02em",
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    An electric fleet
                  </p>
                </div>
                <div className="framer-1nfsdnh flex-none [opacity:1]" />
                <div
                  className="framer-1g5em8c [word-break:break-word] transform-none [opacity:1]"
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
                    Tesla, Kia and Volkswagen EVs join, handed over charged,
                    with a charging card in the glovebox.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div
              className="framer-qfm7z2-container flex-none will-change-transform [opacity:1] transform-none"
              data-site-import-desktop-variant=""
            >
              <div
                className="framer-ajnzb framer-iJjgk framer-1y9jsi7 items-start flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
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
                data-site-import-responsive="170"
              >
                <div
                  className="framer-19jn3g3 flex-none [opacity:1]"
                  style={{
                    backgroundColor:
                      "var(--token-1d64286a-cd5c-4838-a5ba-0041771ea97f)",
                    borderRadius: "999px",
                  }}
                />
                <div
                  className="framer-6yzcfc [word-break:break-word] transform-none [opacity:1]"
                  style={
                    {
                      "--extracted-2gg91v": '"opsz" 14, "wght" 600',
                      "--extracted-r6o4lv":
                        "var(--token-10b1086b-12a3-40be-8d8f-101093091fe8)",
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
                        "--framer-font-size": "12px",
                        "--framer-font-variation-axes":
                          'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                        "--framer-letter-spacing": "0.04em",
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-10b1086b-12a3-40be-8d8f-101093091fe8))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    2024
                  </p>
                </div>
                <div className="framer-38vny1 flex-none [opacity:1]" />
                <div
                  className="framer-eolj5f [word-break:break-word] transform-none [opacity:1]"
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
                        "--framer-font-size": "15px",
                        "--framer-font-variation-axes":
                          'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                        "--framer-letter-spacing": "-0.02em",
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    Asia-Pacific
                  </p>
                </div>
                <div className="framer-1nfsdnh flex-none [opacity:1]" />
                <div
                  className="framer-1g5em8c [word-break:break-word] transform-none [opacity:1]"
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
                    Bali, Sydney, Seoul, Jeju Island and Tokyo, with drivers on
                    request for the busiest cities.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="framer-qfm7z2-container flex-none will-change-transform [opacity:1] transform-none"
              style={
                { "--site-import-responsive-display": "block" } as CSSProperties
              }
              data-site-import-mobile-variant=""
            >
              <div
                className="framer-ajnzb framer-iJjgk framer-1y9jsi7 framer-v-6epk93 items-start flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                style={
                  {
                    "--border-bottom-width": "0px",
                    "--border-color":
                      "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                    "--border-left-width": "1px",
                    "--border-right-width": "0px",
                    "--border-style": "solid",
                    "--border-top-width": "0px",
                    width: "100%",
                  } as CSSProperties
                }
                data-border="true"
              >
                <div
                  className="framer-19jn3g3 flex-none [opacity:1]"
                  style={{
                    backgroundColor:
                      "var(--token-1d64286a-cd5c-4838-a5ba-0041771ea97f)",
                    borderRadius: "999px",
                  }}
                />
                <div
                  className="framer-6yzcfc [word-break:break-word] transform-none [opacity:1]"
                  style={
                    {
                      "--extracted-2gg91v": '"opsz" 14, "wght" 600',
                      "--extracted-r6o4lv":
                        "var(--token-10b1086b-12a3-40be-8d8f-101093091fe8)",
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
                        "--framer-font-size": "12px",
                        "--framer-font-variation-axes":
                          'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                        "--framer-letter-spacing": "0.04em",
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-10b1086b-12a3-40be-8d8f-101093091fe8))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    2024
                  </p>
                </div>
                <div className="framer-38vny1 flex-none [opacity:1]" />
                <div
                  className="framer-eolj5f [word-break:break-word] transform-none [opacity:1]"
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
                        "--framer-font-size": "15px",
                        "--framer-font-variation-axes":
                          'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                        "--framer-letter-spacing": "-0.02em",
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    Asia-Pacific
                  </p>
                </div>
                <div className="framer-1nfsdnh flex-none [opacity:1]" />
                <div
                  className="framer-1g5em8c [word-break:break-word] transform-none [opacity:1]"
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
                    Bali, Sydney, Seoul, Jeju Island and Tokyo, with drivers on
                    request for the busiest cities.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div
              className="framer-n383wa-container flex-none will-change-transform [opacity:1] transform-none"
              data-site-import-desktop-variant=""
            >
              <div
                className="framer-ajnzb framer-iJjgk framer-1y9jsi7 items-start flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
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
                data-site-import-responsive="181"
              >
                <div
                  className="framer-19jn3g3 flex-none [opacity:1]"
                  style={{
                    backgroundColor:
                      "var(--token-1d64286a-cd5c-4838-a5ba-0041771ea97f)",
                    borderRadius: "999px",
                  }}
                />
                <div
                  className="framer-6yzcfc [word-break:break-word] transform-none [opacity:1]"
                  style={
                    {
                      "--extracted-2gg91v": '"opsz" 14, "wght" 600',
                      "--extracted-r6o4lv":
                        "var(--token-10b1086b-12a3-40be-8d8f-101093091fe8)",
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
                        "--framer-font-size": "12px",
                        "--framer-font-variation-axes":
                          'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                        "--framer-letter-spacing": "0.04em",
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-10b1086b-12a3-40be-8d8f-101093091fe8))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    2026
                  </p>
                </div>
                <div className="framer-38vny1 flex-none [opacity:1]" />
                <div
                  className="framer-eolj5f [word-break:break-word] transform-none [opacity:1]"
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
                        "--framer-font-size": "15px",
                        "--framer-font-variation-axes":
                          'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                        "--framer-letter-spacing": "-0.02em",
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    26 models, 14 cities
                  </p>
                </div>
                <div className="framer-1nfsdnh flex-none [opacity:1]" />
                <div
                  className="framer-1g5em8c [word-break:break-word] transform-none [opacity:1]"
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
                    From a Fiat 500 to a Defender 110, and a fifth of the fleet
                    is now electric.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="framer-n383wa-container flex-none will-change-transform [opacity:1] transform-none"
              style={
                { "--site-import-responsive-display": "block" } as CSSProperties
              }
              data-site-import-mobile-variant=""
            >
              <div
                className="framer-ajnzb framer-iJjgk framer-1y9jsi7 framer-v-6epk93 items-start flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                style={
                  {
                    "--border-bottom-width": "0px",
                    "--border-color":
                      "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)",
                    "--border-left-width": "1px",
                    "--border-right-width": "0px",
                    "--border-style": "solid",
                    "--border-top-width": "0px",
                    width: "100%",
                  } as CSSProperties
                }
                data-border="true"
              >
                <div
                  className="framer-19jn3g3 flex-none [opacity:1]"
                  style={{
                    backgroundColor:
                      "var(--token-1d64286a-cd5c-4838-a5ba-0041771ea97f)",
                    borderRadius: "999px",
                  }}
                />
                <div
                  className="framer-6yzcfc [word-break:break-word] transform-none [opacity:1]"
                  style={
                    {
                      "--extracted-2gg91v": '"opsz" 14, "wght" 600',
                      "--extracted-r6o4lv":
                        "var(--token-10b1086b-12a3-40be-8d8f-101093091fe8)",
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
                        "--framer-font-size": "12px",
                        "--framer-font-variation-axes":
                          'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                        "--framer-letter-spacing": "0.04em",
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-10b1086b-12a3-40be-8d8f-101093091fe8))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    2026
                  </p>
                </div>
                <div className="framer-38vny1 flex-none [opacity:1]" />
                <div
                  className="framer-eolj5f [word-break:break-word] transform-none [opacity:1]"
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
                        "--framer-font-size": "15px",
                        "--framer-font-variation-axes":
                          'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                        "--framer-letter-spacing": "-0.02em",
                        "--framer-line-height": "1.55em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    26 models, 14 cities
                  </p>
                </div>
                <div className="framer-1nfsdnh flex-none [opacity:1]" />
                <div
                  className="framer-1g5em8c [word-break:break-word] transform-none [opacity:1]"
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
                    From a Fiat 500 to a Defender 110, and a fifth of the fleet
                    is now electric.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionHowWeWork() {
  return (
    <section
      className="framer-nrxesq items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0]"
      id="values"
    >
      <div className="framer-njpjil items-start flex-none flex-col flex-nowrap gap-[28px] max-w-[1360px] [place-content:flex-start]">
        <div className="framer-8n60jg items-start flex-none flex-col flex-nowrap gap-[8px] max-w-[520px] [place-content:flex-start]">
          <div
            className="framer-159xouv [word-break:break-word] transform-none"
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
                How
              </span>{" "}
              <span
                className="[opacity:1] transform-none"
                style={{ display: "inline-block" }}
              >
                we
              </span>{" "}
              <span
                className="[opacity:1] transform-none"
                style={{ display: "inline-block" }}
              >
                work
              </span>
            </h2>
          </div>
          <div
            className="framer-61eaup [word-break:break-word] will-change-transform [opacity:1] transform-none"
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
              Four promises that don’t change by city or season.
            </p>
          </div>
        </div>
        <div className="framer-mdmxjr flex-none justify-center [gap:28px_34.56px]">
          <div className="ssr-variant">
            <div className="framer-11inhlc-container flex-none will-change-transform opacity-[0.989357] transform-none">
              <div
                className="framer-gjEsy framer-MCyNe framer-3tJNm framer-1kn8a5x items-start flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]"
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
                  className="framer-1ph374o [word-break:break-word] transform-none [opacity:1]"
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
                        "--framer-text-color":
                          "var(--extracted-a0htzi, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    One price, up front
                  </h3>
                </div>
                <div
                  className="framer-11nuoiw [word-break:break-word] transform-none [opacity:1]"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                    Taxes, surcharges and fees are in the first total you see.
                    If something changes it before you pay, we show you why.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div className="framer-3rclxs-container flex-none will-change-transform opacity-[0.978912] transform-none">
              <div
                className="framer-gjEsy framer-MCyNe framer-3tJNm framer-1kn8a5x items-start flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]"
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
                  className="framer-1ph374o [word-break:break-word] transform-none [opacity:1]"
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
                        "--framer-text-color":
                          "var(--extracted-a0htzi, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    Cover in plain words
                  </h3>
                </div>
                <div
                  className="framer-11nuoiw [word-break:break-word] transform-none [opacity:1]"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                    Three protection plans, one sentence each, with the excess
                    in bold. No brochure required.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div className="framer-1mbjmqh-container flex-none will-change-transform opacity-[0.962704] transform-none">
              <div
                className="framer-gjEsy framer-MCyNe framer-3tJNm framer-1kn8a5x items-start flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]"
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
                  className="framer-1ph374o [word-break:break-word] transform-none [opacity:1]"
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
                        "--framer-text-color":
                          "var(--extracted-a0htzi, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    The car you booked
                  </h3>
                </div>
                <div
                  className="framer-11nuoiw [word-break:break-word] transform-none [opacity:1]"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                    Every supplier is audited twice a year. If the class you
                    booked isn’t there, the next class up is free.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ssr-variant">
            <div className="framer-1fyhutp-container flex-none will-change-transform [opacity:1] transform-none">
              <div
                className="framer-gjEsy framer-MCyNe framer-3tJNm framer-1kn8a5x items-start flex-col flex-nowrap gap-[6px] [place-content:flex-start] [opacity:1]"
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
                  className="framer-1ph374o [word-break:break-word] transform-none [opacity:1]"
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
                        "--framer-text-color":
                          "var(--extracted-a0htzi, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                      } as CSSProperties
                    }
                    dir="auto"
                  >
                    A person, any hour
                  </h3>
                </div>
                <div
                  className="framer-11nuoiw [word-break:break-word] transform-none [opacity:1]"
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                    Support answers in eleven languages, around the clock, from
                    people who can actually fix things.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionSupplierVetting() {
  return (
    <section className="framer-43l3nm items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0]">
      <div className="framer-16utjvp items-start flex-none flex-col flex-nowrap gap-[28px] max-w-[1360px] [place-content:flex-start]">
        <div className="framer-fz2bfd items-center content-center justify-start">
          <div className="ssr-variant">
            <div
              className="framer-1j6z1yz [overflow:var(--overflow-clip-fallback,clip)] [@media(max-width:680.98px)]:items-start [@media(max-width:680.98px)]:[gap:0] [@media(max-width:680.98px)]:[place-content:flex-start] [@media(min-width:681px)_and_(max-width:1199.98px)]:items-start [@media(min-width:681px)_and_(max-width:1199.98px)]:[gap:0] [@media(min-width:681px)_and_(max-width:1199.98px)]:[place-content:flex-start] [opacity:1] transform-none"
              style={{ willChange: "transform" }}
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
                  loading="lazy"
                  width="1600"
                  height="1067"
                  sizes="max((min(100vw, 1360px) - 107.2px) / 2, 1px)"
                  srcSet="/site-assets/b067b8dd487071d8.avif 512w, /site-assets/ab1b0c7293054d57.avif 1024w, /site-assets/ce512ef8b4d8be75.avif 1600w"
                  src="/site-assets/ce512ef8b4d8be75.avif"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="framer-inkgx5 items-start gap-[22px] [place-content:flex-start]">
            <div
              className="framer-12ycdjh [word-break:break-word] transform-none"
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
                  How
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
                  supplier
                </span>{" "}
                <span
                  className="[opacity:1] transform-none"
                  style={{ display: "inline-block" }}
                >
                  joins
                </span>{" "}
                <span
                  className="[opacity:1] transform-none"
                  style={{ display: "inline-block" }}
                >
                  Horizone
                </span>
              </h2>
            </div>
            <div
              className="framer-1k7pvgs items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start]"
              data-border="true"
            >
              <div className="ssr-variant">
                <div className="framer-hhhqtb-container flex-none will-change-transform opacity-[0.989357] transform-none">
                  <div
                    className="framer-j5MC3 framer-AAOB7 framer-3tJNm framer-1or2ynv items-start flex-row flex-nowrap gap-[18px] [place-content:flex-start] [opacity:1]"
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
                    <div className="framer-psgker items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-1qlkmeq [word-break:break-word] transform-none [opacity:1]"
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
                          01
                        </p>
                      </div>
                    </div>
                    <div className="framer-he5ddh items-start flex-[1_0_0] flex-col flex-nowrap gap-[3px] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-1pmpuun [word-break:break-word] transform-none [opacity:1]"
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
                              "--framer-font-size": "15px",
                              "--framer-font-variation-axes":
                                'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                              "--framer-line-height": "1.55em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Fleet inspection
                        </p>
                      </div>
                      <div
                        className="framer-voz9ka [word-break:break-word] transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          We check age, servicing records and a sample of cars
                          in person. Nothing older than four years, except our
                          restored classics.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div className="framer-wjmap4-container flex-none will-change-transform [opacity:1] transform-none">
                  <div
                    className="framer-j5MC3 framer-AAOB7 framer-3tJNm framer-1or2ynv items-start flex-row flex-nowrap gap-[18px] [place-content:flex-start] [opacity:1]"
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
                    <div className="framer-psgker items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-1qlkmeq [word-break:break-word] transform-none [opacity:1]"
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
                          02
                        </p>
                      </div>
                    </div>
                    <div className="framer-he5ddh items-start flex-[1_0_0] flex-col flex-nowrap gap-[3px] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-1pmpuun [word-break:break-word] transform-none [opacity:1]"
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
                              "--framer-font-size": "15px",
                              "--framer-font-variation-axes":
                                'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                              "--framer-line-height": "1.55em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Mystery rentals
                        </p>
                      </div>
                      <div
                        className="framer-voz9ka [word-break:break-word] transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          Our team rents anonymously. Pick-up time, cleanliness
                          and the final invoice are all scored.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant">
                <div className="framer-k4kcrn-container flex-none will-change-transform [opacity:1] transform-none">
                  <div
                    className="framer-j5MC3 framer-AAOB7 framer-3tJNm framer-1or2ynv items-start flex-row flex-nowrap gap-[18px] [place-content:flex-start] [opacity:1]"
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
                    <div className="framer-psgker items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-1qlkmeq [word-break:break-word] transform-none [opacity:1]"
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
                          03
                        </p>
                      </div>
                    </div>
                    <div className="framer-he5ddh items-start flex-[1_0_0] flex-col flex-nowrap gap-[3px] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-1pmpuun [word-break:break-word] transform-none [opacity:1]"
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
                              "--framer-font-size": "15px",
                              "--framer-font-variation-axes":
                                'var(--extracted-2gg91v, "opsz" 14, "wght" 600)',
                              "--framer-line-height": "1.55em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-df755ad1-ea9e-4505-a051-33b272779231))",
                            } as CSSProperties
                          }
                          dir="auto"
                        >
                          Ongoing reviews
                        </p>
                      </div>
                      <div
                        className="framer-voz9ka [word-break:break-word] transform-none [opacity:1]"
                        style={
                          {
                            "--extracted-r6o4lv":
                              "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)",
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
                          Every trip is rated. Suppliers below 4.5 get a plan;
                          below 4.2 they leave the platform.
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

function ImportedSectionCareers() {
  return (
    <section
      className="framer-j8nmj3 items-center flex-none flex-col flex-nowrap content-center justify-start [gap:0]"
      id="careers"
    >
      <div className="framer-1mxfdgu items-start flex-none flex-col flex-nowrap gap-[28px] max-w-[1360px] [place-content:flex-start]">
        <div className="framer-7rr4vz items-start flex-none flex-col flex-nowrap gap-[8px] max-w-[520px] [place-content:flex-start]">
          <div
            className="framer-diok5f [word-break:break-word] transform-none"
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
                Careers
              </span>
            </h2>
          </div>
          <div
            className="framer-ztvu01 [word-break:break-word] will-change-transform opacity-[0.970345] transform-none"
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
              We’re 180 people across Lisbon, Berlin and Seoul, plus remote.
              Here’s who we’re looking for.
            </p>
          </div>
        </div>
        <div className="framer-1xqsrh3 items-start flex-none flex-col flex-nowrap gap-[10px] [place-content:flex-start]">
          <div className="framer-1ni853l items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1] transform-none">
            <div className="ssr-variant">
              <div className="framer-x5u226-container flex-none">
                <div
                  className="framer-RduYv framer-5n135 framer-iJjgk framer-3tJNm framer-ip2yS framer-1wx1ltf items-start flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
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
                  <div className="framer-1jjtn1w items-center flex-none flex-row flex-wrap content-center justify-between [opacity:1]">
                    <div className="framer-yyvyhb items-start flex-none flex-col flex-nowrap gap-[2px] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-kgsh42 transform-none [opacity:1]"
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
                          Senior Frontend Engineer
                        </p>
                      </div>
                      <div
                        className="framer-1b4kys2 transform-none [opacity:1]"
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
                          Product · Lisbon or remote (EU) · Full-time
                        </p>
                      </div>
                    </div>
                    <div
                      className="framer-1ipycxt items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                      tabIndex={0}
                    >
                      <div className="framer-18fod82-container [opacity:1]">
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
                              View role
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
                </div>
              </div>
            </div>
          </div>
          <div className="framer-1ni853l items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1] transform-none">
            <div className="ssr-variant">
              <div className="framer-x5u226-container flex-none">
                <div
                  className="framer-RduYv framer-5n135 framer-iJjgk framer-3tJNm framer-ip2yS framer-1wx1ltf items-start flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
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
                  <div className="framer-1jjtn1w items-center flex-none flex-row flex-wrap content-center justify-between [opacity:1]">
                    <div className="framer-yyvyhb items-start flex-none flex-col flex-nowrap gap-[2px] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-kgsh42 transform-none [opacity:1]"
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
                          Supplier Quality Lead
                        </p>
                      </div>
                      <div
                        className="framer-1b4kys2 transform-none [opacity:1]"
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
                          Operations · Seoul · Full-time
                        </p>
                      </div>
                    </div>
                    <div
                      className="framer-1ipycxt items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                      tabIndex={0}
                    >
                      <div className="framer-18fod82-container [opacity:1]">
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
                              View role
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
                </div>
              </div>
            </div>
          </div>
          <div className="framer-1ni853l items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1] transform-none">
            <div className="ssr-variant">
              <div className="framer-x5u226-container flex-none">
                <div
                  className="framer-RduYv framer-5n135 framer-iJjgk framer-3tJNm framer-ip2yS framer-1wx1ltf items-start flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
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
                  <div className="framer-1jjtn1w items-center flex-none flex-row flex-wrap content-center justify-between [opacity:1]">
                    <div className="framer-yyvyhb items-start flex-none flex-col flex-nowrap gap-[2px] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-kgsh42 transform-none [opacity:1]"
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
                          Customer Support Specialist (German)
                        </p>
                      </div>
                      <div
                        className="framer-1b4kys2 transform-none [opacity:1]"
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
                          Support · Berlin · Full-time, shifts
                        </p>
                      </div>
                    </div>
                    <div
                      className="framer-1ipycxt items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                      tabIndex={0}
                    >
                      <div className="framer-18fod82-container [opacity:1]">
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
                              View role
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
                </div>
              </div>
            </div>
          </div>
          <div className="framer-1ni853l items-start flex-none flex-col flex-nowrap [gap:0] [place-content:flex-start] will-change-transform [opacity:1] transform-none">
            <div className="ssr-variant">
              <div className="framer-x5u226-container flex-none">
                <div
                  className="framer-RduYv framer-5n135 framer-iJjgk framer-3tJNm framer-ip2yS framer-1wx1ltf items-start flex-col flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
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
                  <div className="framer-1jjtn1w items-center flex-none flex-row flex-wrap content-center justify-between [opacity:1]">
                    <div className="framer-yyvyhb items-start flex-none flex-col flex-nowrap gap-[2px] [place-content:flex-start] [opacity:1]">
                      <div
                        className="framer-kgsh42 transform-none [opacity:1]"
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
                          Data Analyst, Pricing
                        </p>
                      </div>
                      <div
                        className="framer-1b4kys2 transform-none [opacity:1]"
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
                          Commercial · Remote (UTC±3) · Full-time
                        </p>
                      </div>
                    </div>
                    <div
                      className="framer-1ipycxt items-start flex-none flex-row flex-nowrap [gap:0] [place-content:flex-start] [opacity:1]"
                      tabIndex={0}
                    >
                      <div className="framer-18fod82-container [opacity:1]">
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
                              View role
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
      style={{ width: "100%", opacity: "1" }}
    >
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
                  data-site-import-responsive="360"
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
                  data-site-import-responsive="363"
                >
                  Car rental in 14 cities, priced without asterisks. The total
                  you see is the total you pay.
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
                    data-site-import-responsive="371"
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
                    data-site-import-responsive="380"
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
                    data-site-import-responsive="385"
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
              <div
                className="framer-1hks5fn-container"
                style={{ opacity: "1" }}
              >
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
              <div
                className="framer-1c58195-container"
                style={{ opacity: "1" }}
              >
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
                    data-site-import-responsive="405"
                  >
                    Company
                  </p>
                </div>
              </div>
              <div
                className="framer-1pkt1sn-container"
                style={{ opacity: "1" }}
              >
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
                      About us
                    </p>
                  </div>
                </a>
              </div>
              <div
                className="framer-1k2rbk0-container"
                style={{ opacity: "1" }}
              >
                <a
                  className="framer-L4XQl framer-3tJNm framer-iJjgk framer-1gx9327 framer-cs4lh9"
                  style={{ opacity: "1" }}
                  href="#careers"
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
                  href="#values"
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
                    data-site-import-responsive="421"
                  >
                    Support
                  </p>
                </div>
              </div>
              <div
                className="framer-1f0jrx3-container"
                style={{ opacity: "1" }}
              >
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
              <div
                className="framer-1nzi27q-container"
                style={{ opacity: "1" }}
              >
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
                    data-site-import-responsive="441"
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
                  data-site-import-responsive="461"
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
              data-site-import-responsive="489"
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
