import { useState, type CSSProperties, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";

const MUTED = "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)";
const ICON = "var(--token-7d4bdedd-c01b-4bc4-af80-207fe4639ba5)";
const DARK = "var(--token-df755ad1-ea9e-4505-a051-33b272779231)";
const LIGHT = "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)";
const LINE = "var(--token-1882fcd3-3ab8-42e8-b3b2-37ecf2cb26f5)";

const LOCATIONS = [
  ["bali", "Bali"],
  ["sydney", "Sydney"],
  ["new-york", "New York"],
  ["seoul", "Seoul"],
  ["jeju", "Jeju Island"],
  ["los-angeles", "Los Angeles"],
  ["berlin", "Berlin"],
  ["munich", "Munich"],
  ["glasgow", "Glasgow"],
  ["birmingham", "Birmingham"],
  ["tokyo", "Tokyo"],
  ["lisbon", "Lisbon"],
  ["dubai", "Dubai"],
  ["cape-town", "Cape Town"],
] as const;

const TIMES = Array.from({ length: 48 }, (_, i) => {
  const h = Math.floor(i / 2);
  const m = i % 2 ? "30" : "00";
  const label = `${String(h % 12 || 12).padStart(2, "0")}:${m} ${h < 12 ? "AM" : "PM"}`;
  return { value: `${String(h).padStart(2, "0")}:${m}`, label };
});

const toISO = (d: Date) => d.toISOString().slice(0, 10);
const addDays = (d: Date, n: number) => new Date(d.getTime() + n * 86_400_000);

// Forces native controls visible over Framer CSS. 16px font stops iOS zooming on focus.
const controlStyle: CSSProperties = {
  position: "static",
  opacity: 1,
  pointerEvents: "auto",
  background: "transparent",
  border: "none",
  outline: "none",
  font: "inherit",
  fontSize: 16,
  color: "inherit",
  cursor: "pointer",
  minWidth: 0,
};

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      className="h-5 w-5 flex-none fill-none"
      style={{
        color: ICON,
        stroke: "currentcolor",
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function Field({
  label,
  className = "",
  children,
}: {
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`flex min-w-0 flex-col gap-1 ${className}`}>
      <p
        className="framer-text framer-styles-preset-fvk63j"
        style={{ "--framer-text-color": MUTED } as CSSProperties}
      >
        {label}
      </p>
      <div
        className="flex min-w-0 items-center gap-2 rounded-lg border px-3 py-2.5"
        style={{ borderColor: LINE, backgroundColor: LIGHT }}
      >
        {children}
      </div>
    </div>
  );
}

function TimeSelect({
  value,
  onChange,
  label,
}: {
  value: string;
  onChange: (v: string) => void;
  label: string;
}) {
  return (
    <select
      aria-label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="flex-none"
      style={controlStyle}
    >
      {TIMES.map((t) => (
        <option key={t.value} value={t.value}>
          {t.label}
        </option>
      ))}
    </select>
  );
}

export function SearchForm() {
  const navigate = useNavigate();
  const today = new Date();

  const [location, setLocation] = useState("");
  const [pickupDate, setPickupDate] = useState(toISO(addDays(today, 1)));
  const [pickupTime, setPickupTime] = useState("10:00");
  const [returnDate, setReturnDate] = useState(toISO(addDays(today, 6)));
  const [returnTime, setReturnTime] = useState("10:00");
  const [error, setError] = useState("");

  function handlePickupDate(v: string) {
    setPickupDate(v);
    if (returnDate < v) setReturnDate(v);
  }

  function handleSearch() {
    if (!location) {
      setError("Please choose a pick-up location.");
      return;
    }
    setError("");
    const params = new URLSearchParams({
      location,
      pickupDate,
      pickupTime,
      returnDate,
      returnTime,
    });
    navigate(`/cars?${params.toString()}`);
  }

  return (
    <div className="flex w-full flex-col gap-3 lg:flex-row lg:items-end">
      {/* 1 column on phones, 2 on tablets, 3 on desktop */}
      <div className="w-full min-w-0 flex-1 space-y-2">
        <div className="grid w-full min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_auto] lg:items-end">
          <Field
            label="Pick-up location"
            className="sm:col-span-2 lg:col-span-1"
          >
            <Icon>
              <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
              <circle cx="12" cy="10" r="2.6" />
            </Icon>
            <select
              aria-label="Pick-up location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full min-w-0 flex-1"
              style={controlStyle}
            >
              <option value="">City, airport or station</option>
              {LOCATIONS.map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Pick-up">
            <Icon>
              <rect x="3.5" y="5" width="17" height="15.5" rx="3" />
              <path d="M3.5 10h17M8 3.2v3.4M16 3.2v3.4" />
            </Icon>
            <input
              type="date"
              aria-label="Pick up date"
              value={pickupDate}
              min={toISO(today)}
              onChange={(e) => handlePickupDate(e.target.value)}
              className="min-w-0 flex-1"
              style={controlStyle}
            />
            <TimeSelect
              label="Pick up time"
              value={pickupTime}
              onChange={setPickupTime}
            />
          </Field>

          <Field label="Return">
            <Icon>
              <rect x="3.5" y="5" width="17" height="15.5" rx="3" />
              <path d="M3.5 10h17M8 3.2v3.4M16 3.2v3.4" />
            </Icon>
            <input
              type="date"
              aria-label="Return date"
              value={returnDate}
              min={pickupDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="min-w-0 flex-1"
              style={controlStyle}
            />
            <TimeSelect
              label="Return time"
              value={returnTime}
              onChange={setReturnTime}
            />
          </Field>

          <button
            type="button"
            onClick={handleSearch}
            className="flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-md px-6 sm:col-span-2 lg:col-span-1 lg:w-auto"
            style={{ backgroundColor: DARK, cursor: "pointer", border: "none" }}
          >
            <svg
              className="h-[18px] w-[18px] fill-none"
              style={{
                color: LIGHT,
                stroke: "currentcolor",
                strokeWidth: 1.6,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="6.6" />
              <path d="M16 16l4.4 4.4" />
            </svg>
            <span
              className="framer-text framer-styles-preset-18ulsum"
              style={{ "--framer-text-color": LIGHT } as CSSProperties}
            >
              Search
            </span>
          </button>
        </div>

        {error && (
          <div
            role="alert"
            className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm"
            style={{
              color: "#fca5a5",
              backgroundColor: "rgba(220, 38, 38, 0.12)",
              borderColor: "rgba(248, 113, 113, 0.35)",
            }}
          >
            <span aria-hidden="true">!</span>
            <span>{error}</span>
          </div>
        )}
      </div>
    </div>
  );
}
