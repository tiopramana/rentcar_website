import type { CSSProperties, KeyboardEvent } from "react";

const DARK = "var(--token-df755ad1-ea9e-4505-a051-33b272779231)";
const LIGHT = "var(--token-d6384dfc-4d7b-4447-ba7a-ad95211631ca)";
const MUTED = "var(--token-4fcd0750-c375-4b45-8a6d-79fa4d257119)";
const LABEL = "var(--token-4bf528b2-7194-4469-9017-55b17c8de7d2)";

export type DriveMode = "self" | "driver";

type Props = {
  differentReturn: boolean;
  onDifferentReturnChange: (v: boolean) => void;
  mode: DriveMode;
  onModeChange: (v: DriveMode) => void;
};

// Enter / Space act like a click on non-button elements
const onKey = (fn: () => void) => (e: KeyboardEvent) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    fn();
  }
};

type PillProps = {
  label: string;
  selected: boolean;
  onSelect: () => void;
  mobile?: boolean;
  responsiveId?: string;
};

// Same markup as your original pill, now clickable and driven by `selected`
function Pill({ label, selected, onSelect, mobile, responsiveId }: PillProps) {
  const color = selected ? DARK : MUTED;
  return (
    <div
      className="framer-sfMm3 framer-AAOB7 framer-ilwoio items-center flex-row flex-nowrap gap-[6px] place-content-center [opacity:1]"
      style={{
        backgroundColor: selected ? LIGHT : "rgba(0, 0, 0, 0)",
        borderRadius: "4px",
        cursor: "pointer",
        ...(mobile ? { width: "100%" } : {}),
      }}
      role="radio"
      aria-checked={selected}
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={onKey(onSelect)}
      {...(responsiveId ? { "data-site-import-responsive": responsiveId } : {})}
    >
      <div
        className="framer-wi9d5a [opacity:1]"
        style={
          { "--extracted-r6o4lv": color, transform: "none" } as CSSProperties
        }
        data-framer-component-type="RichTextContainer"
      >
        <p
          className="framer-text framer-styles-preset-1bwd7xw"
          style={
            {
              "--framer-text-color": `var(--extracted-r6o4lv, ${color})`,
            } as CSSProperties
          }
          dir="auto"
        >
          {label}
        </p>
      </div>
    </div>
  );
}

// Keeps the desktop + mobile variant wrappers from your original
function PillVariants(
  props: Omit<PillProps, "mobile" | "responsiveId"> & {
    containerClass: string;
    responsiveId: string;
  },
) {
  const { containerClass, responsiveId, ...pill } = props;
  return (
    <div className="ssr-variant">
      <div className={containerClass} data-site-import-desktop-variant="">
        <Pill {...pill} responsiveId={responsiveId} />
      </div>
      <div
        className={containerClass}
        style={{ "--site-import-responsive-display": "block" } as CSSProperties}
        data-site-import-mobile-variant=""
      >
        <Pill {...pill} mobile />
      </div>
    </div>
  );
}

export function SearchOptions({
  differentReturn,
  onDifferentReturnChange,
  mode,
  onModeChange,
}: Props) {
  const toggle = () => onDifferentReturnChange(!differentReturn);

  return (
    <div
      className="framer-2rp7j7 items-center flex-none flex-row flex-wrap content-center justify-between"
      data-border="true"
    >
      {/* Checkbox */}
      <div
        className="framer-1ueilmi items-center flex-none flex-row flex-nowrap gap-[9px] content-center justify-start"
        style={{ cursor: "pointer" }}
        role="checkbox"
        aria-checked={differentReturn}
        tabIndex={0}
        onClick={toggle}
        onKeyDown={onKey(toggle)}
      >
        <div className="framer-tgpit5 items-center flex-none flex-row flex-nowrap content-center justify-start [gap:0]">
          <div
            className="framer-ldmd5a"
            style={
              differentReturn
                ? {
                    backgroundColor: DARK,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }
                : undefined
            }
          >
            {differentReturn && (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                style={{
                  width: "70%",
                  height: "70%",
                  fill: "none",
                  color: LIGHT,
                  stroke: "currentcolor",
                  strokeWidth: 3,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              >
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
            )}
          </div>
        </div>
        <div
          className="framer-1w7xu7e"
          style={{ transform: "none" }}
          data-framer-component-type="RichTextContainer"
        >
          <p
            className="framer-text framer-styles-preset-1dmlb93"
            style={
              {
                "--framer-text-alignment": "start",
                "--framer-text-color": LABEL,
              } as CSSProperties
            }
            dir="auto"
          >
            Return to a different location
          </p>
        </div>
      </div>

      {/* Self-drive / With driver */}
      <div
        className="framer-s72epp items-start flex-none flex-row flex-nowrap gap-[2px] [place-content:flex-start]"
        role="radiogroup"
        aria-label="Drive option"
      >
        <PillVariants
          containerClass="framer-i7zzgg-container"
          responsiveId="139"
          label="Self-drive"
          selected={mode === "self"}
          onSelect={() => onModeChange("self")}
        />
        <PillVariants
          containerClass="framer-n4ylze-container"
          responsiveId="143"
          label="With driver · $45/day"
          selected={mode === "driver"}
          onSelect={() => onModeChange("driver")}
        />
      </div>
    </div>
  );
}
