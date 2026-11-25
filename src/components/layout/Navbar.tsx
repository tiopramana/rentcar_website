import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type RefObject,
} from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import logo from "../../assets/1ad00884977ba9cf.avif";

const CURRENCIES = [
  { code: "USD", name: "US Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
  { code: "IDR", name: "Indonesian Rupiah" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "KRW", name: "South Korean Won" },
  { code: "AED", name: "UAE Dirham" },
  { code: "ZAR", name: "South African Rand" },
];

/* ---------- tokens ---------- */
const DARK = "var(--token-df755ad1-ea9e-4505-a051-33b272779231)";
const LIGHT = "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)";
const PILL_BG = "var(--token-5d9b0fc5-b296-4760-8c5b-1739145ad88b)";
const PILL_BORDER = "var(--token-483c565b-fb9d-461c-8f3c-18302e2d0b73)";

const panelStyle: CSSProperties = {
  position: "absolute",
  top: "calc(100% + 8px)",
  right: 0,
  zIndex: 50,
  minWidth: 240,
  maxHeight: 320,
  overflowY: "auto",
  padding: 8,
  borderRadius: 16,
  backgroundColor: DARK,
  color: LIGHT,
  boxShadow: "0 12px 32px rgba(0,0,0,0.25)",
};

/* ---------- scroll blur: --scroll-p goes 0 → 1 over `range` px ---------- */
function useScrollBlur(ref: RefObject<HTMLElement | null>, range = 120) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      el.style.setProperty(
        "--scroll-p",
        Math.min(window.scrollY / range, 1).toFixed(3),
      );
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref, range]);
}

const BLUR = "blur(calc(14px + var(--scroll-p, 0) * 12px))";
const DARKEN =
  "linear-gradient(rgba(0, 0, 0, calc(var(--scroll-p, 0) * 0.45)), rgba(0, 0, 0, calc(var(--scroll-p, 0) * 0.45)))";

const scrollGlass: CSSProperties = {
  backdropFilter: BLUR,
  WebkitBackdropFilter: BLUR,
  backgroundImage: DARKEN,
};

/* ---------- menu data ---------- */
const navLinks = [
  { to: "/cars", label: "Cars", wrap: "framer-ybw96t", text: "framer-xz7gek" },
  {
    to: "/locations",
    label: "Locations",
    wrap: "framer-y9hjjg",
    text: "framer-19u7ksj",
  },
  {
    to: "/deals",
    label: "Deals",
    wrap: "framer-l2kyev",
    text: "framer-zuohpb",
  },
  {
    to: "/about",
    label: "About",
    wrap: "framer-be67eb",
    text: "framer-mczy6o",
  },
  {
    to: "/help",
    label: "Help",
    wrap: "framer-11jschf",
    text: "framer-12udemg",
  },
];

/* ---------- shared pill style ---------- */
const pillStyle = {
  "--border-bottom-width": "1px",
  "--border-color": PILL_BORDER,
  "--border-left-width": "1px",
  "--border-right-width": "1px",
  "--border-style": "solid",
  "--border-top-width": "1px",
  backgroundColor: PILL_BG,
  borderRadius: "999px",
  opacity: "1",
  cursor: "pointer",
  ...scrollGlass,
} as CSSProperties;

const iconStyle = (color: string): CSSProperties => ({
  height: "100%",
  width: "100%",
  display: "block",
  position: "relative",
  color,
  fill: "none",
  stroke: "currentcolor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  overflow: "visible",
});

/* ---------- logo ---------- */
function NavbarLogo() {
  return (
    <div
      className="framer-16wo98v"
      style={{ willChange: "transform", opacity: "1", transform: "none" }}
      data-site-import-responsive="8"
    >
      <Link
        to="/"
        className="framer-9v0yg3 framer-trb62s"
        style={{ opacity: "1" }}
        data-site-import-responsive="9"
      >
        <div
          className="framer-1xqfc3z"
          style={{ borderRadius: "6px", opacity: "1" }}
          data-site-import-responsive="10"
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
              src={logo}
              alt="BestRent"
            />
          </div>
        </div>
        <div
          className="framer-e4k9vn"
          style={
            {
              "--extracted-a0htzi": LIGHT,
              transform: "none",
              opacity: "1",
              willChange: "auto",
            } as CSSProperties
          }
          data-framer-component-type="RichTextContainer"
          data-site-import-responsive="13"
        >
          <h3
            className="framer-text framer-styles-preset-tlxqj font-bold "
            style={
              {
                "--framer-text-color": `color-mix(in srgb, #333 calc(var(--scroll-p, 0) * 100%), ${LIGHT})`,
              } as CSSProperties
            }
            dir="auto"
            data-site-import-responsive="20"
          >
            <span className="font-bold text-xl">Tiorent</span>
          </h3>
        </div>
      </Link>
    </div>
  );
}

/* ---------- center menu ---------- */
function NavbarMenu() {
  return (
    <nav
      className="framer-1i3tgd2"
      style={
        {
          "--border-bottom-width": "1px",
          "--border-color": PILL_BORDER,
          "--border-left-width": "1px",
          "--border-right-width": "1px",
          "--border-style": "solid",
          "--border-top-width": "1px",
          backgroundColor: "var(--token-095c31d1-50cc-46db-81fb-3576d106af0e)",
          willChange: "transform",
          borderRadius: "999px",
          opacity: "1",
          transform: "none",
          ...scrollGlass,
        } as CSSProperties
      }
      aria-label="Primary"
      data-border="true"
    >
      {navLinks.map((item) => (
        <div key={item.to} className={item.wrap} style={{ opacity: "1" }}>
          <div
            className={item.text}
            style={
              {
                "--extracted-r6o4lv": DARK,
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
                  "--framer-text-color": `var(--extracted-r6o4lv, ${DARK})`,
                } as CSSProperties
              }
              dir="auto"
            >
              <Link
                className="framer-text framer-styles-preset-111b7xp"
                to={item.to}
              >
                {item.label}
              </Link>
            </p>
          </div>
        </div>
      ))}
    </nav>
  );
}

/* ---------- right side: search + currency ---------- */

type ActionsProps = {
  currency?: string;
  onCurrencyChange?: (code: string) => void;
};

function NavbarActions({
  currency: currencyProp = "USD",
  onCurrencyChange,
}: ActionsProps) {
  const navigate = useNavigate();
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [open, setOpen] = useState<"search" | "currency" | null>(null);
  const [currency, setCurrency] = useState(currencyProp);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setCurrency(currencyProp);
  }, [currencyProp]);

  // close on outside click or Escape
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) {
        setOpen(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // focus search input cleanly after mount
  useEffect(() => {
    if (open !== "search") return;
    const rafId = requestAnimationFrame(() => {
      inputRef.current?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(rafId);
  }, [open]);

  const toggle = (name: "search" | "currency") =>
    setOpen((cur) => (cur === name ? null : name));

  function submitSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (!q) {
      inputRef.current?.focus();
      return;
    }
    setOpen(null);
    navigate({
      to: "/cars",
      search: { q },
    });
  }

  function pickCurrency(code: string) {
    setCurrency(code);
    onCurrencyChange?.(code);
    setOpen(null);
  }

  return (
    <div
      ref={wrapRef}
      className="framer-l53zpz"
      style={{
        willChange: "transform",
        opacity: "1",
        transform: "none",
        position: "relative",
      }}
      data-site-import-responsive="36"
    >
      {/* Currency button */}
      <button
        type="button"
        className="framer-r1zzh"
        style={pillStyle}
        aria-label="Currency"
        aria-haspopup="listbox"
        aria-expanded={open === "currency"}
        onClick={() => toggle("currency")}
        data-border="true"
      >
        <div className="framer-1d4ql0i-container" style={{ opacity: "1" }}>
          <svg style={iconStyle(LIGHT)} viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="8.6" />
            <path d="M3.4 12h17.2M12 3.4c2.3 2.4 3.4 5.4 3.4 8.6S14.3 18.2 12 20.6C9.7 18.2 8.6 15.2 8.6 12S9.7 5.8 12 3.4Z" />
          </svg>
        </div>
        <div
          className="framer-1wlxx3k"
          style={
            {
              "--extracted-r6o4lv": LIGHT,
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
                "--framer-text-color": `var(--extracted-r6o4lv, ${LIGHT})`,
              } as CSSProperties
            }
            dir="auto"
          >
            {currency}
          </p>
        </div>
        <div className="framer-1ba9aot-container" style={{ opacity: "1" }}>
          <svg
            style={{
              ...iconStyle("var(--token-7e7f526a-85ea-441f-9429-765a41c2534c)"),
              transform: open === "currency" ? "rotate(180deg)" : "none",
              transition: "transform .2s",
            }}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M6.5 9.5 12 15l5.5-5.5" />
          </svg>
        </div>
      </button>

      {/* Search panel */}
      {open === "search" && (
        <form
          onSubmit={submitSearch}
          style={{ ...panelStyle, width: 320 }}
          role="search"
        >
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search cars, e.g. Tesla, SUV…"
            aria-label="Search cars"
            style={{
              width: "100%",
              padding: "10px 12px",
              fontSize: 16,
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.25)",
              background: "transparent",
              color: LIGHT,
              outline: "none",
            }}
          />
        </form>
      )}

      {/* Currency list */}
      {open === "currency" && (
        <ul
          role="listbox"
          aria-label="Currency"
          style={{ ...panelStyle, listStyle: "none", margin: 0 }}
        >
          {CURRENCIES.map((c) => {
            const selected = c.code === currency;
            return (
              <li key={c.code} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => pickCurrency(c.code)}
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    gap: 12,
                    padding: "10px 12px",
                    borderRadius: 10,
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    color: selected ? DARK : LIGHT,
                    backgroundColor: selected ? LIGHT : "transparent",
                    font: "inherit",
                  }}
                >
                  <span style={{ fontWeight: 600 }}>{c.code}</span>
                  <span style={{ opacity: 0.7 }}>{c.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

/* ---------- the only export ---------- */
export function Navbar(props: ActionsProps) {
  const headerRef = useRef<HTMLElement>(null);
  useScrollBlur(headerRef);

  return (
    <header
      ref={headerRef}
      className="framer-rQnLE framer-MCyNe framer-3tJNm framer-eHiTe framer-ccphy framer-iJjgk framer-GvPaN framer-AAOB7 framer-BdrqZ framer-KgJtC framer-EhiDw framer-ANzsm framer-71sfr framer-7tu3jo"
      style={
        {
          width: "100%",
          transform: "none",
          transformOrigin: "50% 50% 0px",
          opacity: "1",
        } as CSSProperties
      }
      data-site-import-scroll-header={
        '{"desktop":{"added":["framer-v-i7duu0"],"removed":["framer-v-7tu3jo"],"threshold":648},"mobile":{"added":["framer-v-1jhoykp"],"removed":["framer-v-x08t8a"],"threshold":633}}'
      }
    >
      <div
        className="framer-xub7c0"
        style={
          {
            backgroundColor: "rgba(0, 0, 0, 0)",
            borderRadius: "8px",
            willChange: "auto",
            transform: "none",
            transformOrigin: "50% 50% 0px",
            opacity: "1",
          } as CSSProperties
        }
      >
        <NavbarLogo />
        <NavbarMenu />
        <NavbarActions {...props} />
      </div>
    </header>
  );
}
