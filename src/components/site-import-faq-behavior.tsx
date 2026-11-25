import { useEffect } from "react";

const answers: Record<string, string> = {
  "Is the price I see the price I pay?":
    "Yes. Taxes, airport surcharges, young-driver fees and one-way fees are added before you reach checkout, and the total on the confirmation is the total on your card. The only thing we hold separately is the refundable security deposit.",
  "When is my card charged?":
    "Nothing is charged online. You pay at pick-up with a credit card in the main driver’s name, once our team has confirmed the booking.",
  "What is the security deposit?":
    "A refundable hold placed on the main driver’s credit card at pick-up. The amount depends on the car and is shown on every listing. It is released within 7–10 working days of returning the car undamaged.",
  "Can I use a debit card?":
    "You can pay for the rental with a debit card, but the security deposit needs a credit card in the main driver’s name at most locations.",
  "What do I need to pick up a car?":
    "A full driving licence held for at least twelve months, the payment card used for the booking, and a passport or national ID. Some countries also need an International Driving Permit, and we flag it on the city page and your confirmation.",
  "Can I pick up outside opening hours?":
    "Airport desks are open 24 hours. City and station offices open 07:00–21:00; outside those hours we can arrange a key-box handover for a $35 after-hours fee, added automatically when you choose the time.",
  "Can I return the car to a different location?":
    "Yes, within the same country on drivable routes. Munich–Berlin and Glasgow–Birmingham are free; New York–Los Angeles carries a $149 fee. Routes that are not possible (like Seoul to Jeju Island) are blocked when you search.",
  "What is the fuel policy?":
    "Full-to-full. You get the car with a full tank and return it full. Electric cars are handed over at a minimum of 80% charge and can come back at 10% or more without a fee.",
  "Is insurance included in the price?":
    "Every rate includes a collision damage waiver, theft protection and third-party liability, with an excess of $1,200. Standard protection lowers that to $300; Full protection removes it entirely.",
  "What is an excess?":
    "The most you would pay towards repairs if the car is damaged or stolen. With Full protection your excess is $0, so you pay nothing for covered damage.",
  "Does my credit card insurance cover me?":
    "Many premium cards include rental cover. Check whether yours covers the country and car type. If it does, Basic protection plus your card cover is often enough.",
  "How late can I cancel?":
    "Cancel up to 48 hours before pick-up for a full refund, processed to the original card within five working days. Cancellations inside 48 hours keep a one-day charge.",
  "How do I change my dates or car?":
    "Reply to your confirmation email or call +44 20 3000 0100 with your booking reference, and we’ll update the booking. Changes and cancellations are free until 48 hours before pick-up.",
  "What if my flight is delayed?":
    "Add your flight number at checkout and we track it. Airport desks hold your car for up to 12 hours after your scheduled arrival at no extra cost.",
  "How old do I need to be?":
    "Most cars need drivers aged 21 or over; performance and luxury cars need 25 or 27. Drivers under 25 pay a young-driver fee of $15 a day. The minimum age is shown on every car.",
  "Can I add a second driver?":
    "Yes, as an extra at $6 a day (capped at $60 per driver). Every additional driver must show their licence at pick-up.",
  "What does “With Driver” include?":
    "A licensed local driver for up to ten hours a day at $45 a day, fuel on the agreed route, and tolls. Overtime is charged hourly and shown before you confirm.",
  "Do I need an International Driving Permit?":
    "In Indonesia, South Korea, Japan and the UAE, yes, alongside your home licence. Elsewhere we accept licences printed in the Latin alphabet on their own.",
};

export function SiteImportFaqBehavior() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("#faqs");
    if (!root) return;

    const rows = Array.from(
      root.querySelectorAll<HTMLElement>(".framer-1izvn91"),
    );
    const closeOpenAnswers = () => {
      root
        .querySelectorAll(".site-import-faq-answer")
        .forEach((answer) => answer.remove());
      root
        .querySelectorAll<HTMLElement>('.framer-1izvn91[aria-expanded="true"]')
        .forEach((row) => {
          row.setAttribute("aria-expanded", "false");
          row.removeAttribute("aria-controls");
        });
    };

    const handleClick = (event: MouseEvent) => {
      const current = event.currentTarget;
      if (!(current instanceof HTMLElement)) return;

      const question = current.querySelector("p")?.textContent?.trim();
      const answerText = question ? answers[question] : undefined;
      const container = current.closest(".framer-1q3jnc9");
      if (!question || !answerText || !(container instanceof HTMLElement))
        return;

      if (container.querySelector(".site-import-faq-answer")) {
        closeOpenAnswers();
        return;
      }

      closeOpenAnswers();
      const answer = document.createElement("div");
      answer.className = "site-import-faq-answer";
      answer.id = `site-import-faq-answer-${Object.keys(answers).indexOf(question)}`;
      answer.setAttribute("role", "region");
      answer.setAttribute("aria-label", `${question} answer`);
      answer.textContent = answerText;
      container.appendChild(answer);
      current.setAttribute("aria-expanded", "true");
      current.setAttribute("aria-controls", answer.id);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      const current = event.currentTarget;
      if (current instanceof HTMLElement) current.click();
    };

    rows.forEach((row) => {
      row.setAttribute("role", "button");
      row.setAttribute("aria-expanded", "false");
      row.addEventListener("click", handleClick);
      row.addEventListener("keydown", handleKeyDown);
    });

    return () => {
      closeOpenAnswers();
      rows.forEach((row) => {
        row.removeEventListener("click", handleClick);
        row.removeEventListener("keydown", handleKeyDown);
        row.removeAttribute("role");
        row.removeAttribute("aria-expanded");
        row.removeAttribute("aria-controls");
      });
    };
  }, []);

  return null;
}
