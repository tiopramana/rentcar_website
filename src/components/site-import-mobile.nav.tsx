import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  CarFront,
  ChevronRight,
  Headphones,
  MapPin,
  Tag,
  Users,
} from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "../components/ui/dialog";

const menuTriggerSelector = "[data-site-import-mobile-header] .framer-eqtme5";

export function SiteImportMobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const triggers = Array.from(
      document.querySelectorAll<HTMLElement>(menuTriggerSelector),
    );
    const toggleMenu = () => setOpen((current) => !current);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleMenu();
      }
    };

    triggers.forEach((trigger) => {
      trigger.setAttribute("role", "button");
      trigger.setAttribute("aria-label", "Open navigation menu");
      trigger.setAttribute("aria-expanded", "false");
      trigger.addEventListener("click", toggleMenu);
      trigger.addEventListener("keydown", handleKeyDown);
    });

    return () => {
      triggers.forEach((trigger) => {
        trigger.removeEventListener("click", toggleMenu);
        trigger.removeEventListener("keydown", handleKeyDown);
        trigger.removeAttribute("role");
        trigger.removeAttribute("aria-label");
        trigger.removeAttribute("aria-expanded");
      });
    };
  }, []);

  useEffect(() => {
    document
      .querySelectorAll<HTMLElement>(menuTriggerSelector)
      .forEach((trigger) => {
        trigger.setAttribute(
          "aria-label",
          open ? "Close navigation menu" : "Open navigation menu",
        );
        trigger.setAttribute("aria-expanded", String(open));
      });
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {open ? (
        <DialogContent className="fixed inset-0 z-[100] !left-0 !top-0 flex !h-dvh max-h-dvh w-full max-w-none !translate-x-0 !translate-y-0 flex-col gap-0 overflow-y-auto !rounded-none !border-0 !bg-background !p-4 !shadow-none sm:!rounded-none">
          <DialogTitle className="flex h-10 items-center text-base font-semibold text-foreground">
            BestRent
          </DialogTitle>
          <nav aria-label="Primary" className="mt-7 flex flex-col">
            <DialogClose asChild>
              <Link
                to="/cars"
                className="flex min-h-[76px] items-center gap-4 border-b border-border py-3 text-foreground no-underline"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-muted text-foreground">
                  <CarFront aria-hidden="true" className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-medium">Cars</span>
                  <span className="block text-sm text-muted-foreground">
                    26 models from $36 a day
                  </span>
                </span>
                <ChevronRight
                  aria-hidden="true"
                  className="size-4 text-muted-foreground"
                />
              </Link>
            </DialogClose>
            <DialogClose asChild>
              <Link
                to="/locations"
                className="flex min-h-[76px] items-center gap-4 border-b border-border py-3 text-foreground no-underline"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-muted text-foreground">
                  <MapPin aria-hidden="true" className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-medium">Locations</span>
                  <span className="block text-sm text-muted-foreground">
                    14 cities, 28 pick-up points
                  </span>
                </span>
                <ChevronRight
                  aria-hidden="true"
                  className="size-4 text-muted-foreground"
                />
              </Link>
            </DialogClose>
            <DialogClose asChild>
              <Link
                to="/deals"
                className="flex min-h-[76px] items-center gap-4 border-b border-border py-3 text-foreground no-underline"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-muted text-foreground">
                  <Tag aria-hidden="true" className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-medium">Deals</span>
                  <span className="block text-sm text-muted-foreground">
                    Codes that work at checkout
                  </span>
                </span>
                <ChevronRight
                  aria-hidden="true"
                  className="size-4 text-muted-foreground"
                />
              </Link>
            </DialogClose>
            <DialogClose asChild>
              <Link
                to="/about"
                className="flex min-h-[76px] items-center gap-4 border-b border-border py-3 text-foreground no-underline"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-muted text-foreground">
                  <Users aria-hidden="true" className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-medium">About</span>
                  <span className="block text-sm text-muted-foreground">
                    How Horizone works
                  </span>
                </span>
                <ChevronRight
                  aria-hidden="true"
                  className="size-4 text-muted-foreground"
                />
              </Link>
            </DialogClose>
            <DialogClose asChild>
              <Link
                to="/help"
                className="flex min-h-[76px] items-center gap-4 border-b border-border py-3 text-foreground no-underline"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-muted text-foreground">
                  <Headphones aria-hidden="true" className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-medium">Help</span>
                  <span className="block text-sm text-muted-foreground">
                    FAQs, booking changes, contact
                  </span>
                </span>
                <ChevronRight
                  aria-hidden="true"
                  className="size-4 text-muted-foreground"
                />
              </Link>
            </DialogClose>
            <DialogClose asChild>
              <Link
                to="/legal"
                className="flex min-h-[76px] items-center gap-4 border-b border-border py-3 text-foreground no-underline"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-muted text-foreground">
                  <ChevronRight aria-hidden="true" className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-medium">Legal</span>
                  <span className="block text-sm text-muted-foreground">
                    Rental terms, privacy, and cookies
                  </span>
                </span>
                <ChevronRight
                  aria-hidden="true"
                  className="size-4 text-muted-foreground"
                />
              </Link>
            </DialogClose>
          </nav>
        </DialogContent>
      ) : null}
    </Dialog>
  );
}
