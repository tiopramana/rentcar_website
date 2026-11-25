import { useEffect, type RefObject } from "react";

// Sets --scroll-p (0 → 1) on the element while the page scrolls
export function useScrollBlur(ref: RefObject<HTMLElement | null>, range = 120) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const p = Math.min(window.scrollY / range, 1);
      el.style.setProperty("--scroll-p", p.toFixed(3));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update(); // correct value on load / refresh mid-page
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref, range]);
}
