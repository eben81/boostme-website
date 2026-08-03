/**
 * Boostme global JavaScript entry point.
 *
 * Prefer native HTML and CSS. Add progressive enhancement only when a feature
 * cannot be implemented accessibly without JavaScript.
 */

"use strict";

const problemsCarousel = document.querySelector("[data-problems-carousel]");

if (problemsCarousel) {
  const viewport = problemsCarousel.querySelector("[data-carousel-viewport]");
  const cards = Array.from(problemsCarousel.querySelectorAll("[data-carousel-card]"));
  const previousButton = problemsCarousel.querySelector("[data-carousel-prev]");
  const nextButton = problemsCarousel.querySelector("[data-carousel-next]");
  const currentLabel = problemsCarousel.querySelector("[data-carousel-current]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let activeIndex = 1;
  let pointerStartX = 0;
  let scrollStartX = 0;
  let draggedDistance = 0;

  const updateControls = () => {
    previousButton.disabled = activeIndex === 0;
    nextButton.disabled = activeIndex === cards.length - 1;
    currentLabel.textContent = String(activeIndex + 1).padStart(2, "0");
  };

  const revealCard = (card) => {
    const cardLeft = card.offsetLeft;
    const cardRight = cardLeft + card.offsetWidth;
    const viewportLeft = viewport.scrollLeft;
    const viewportRight = viewportLeft + viewport.clientWidth;
    let target = viewportLeft;

    if (cardLeft < viewportLeft) {
      target = cardLeft;
    } else if (cardRight > viewportRight) {
      target = cardRight - viewport.clientWidth + 24;
    }

    viewport.scrollTo({
      left: Math.max(0, target),
      behavior: reducedMotion.matches ? "auto" : "smooth"
    });
  };

  const activateCard = (index, shouldReveal = false) => {
    if (index < 0 || index >= cards.length || index === activeIndex) {
      return;
    }

    activeIndex = index;

    cards.forEach((card, cardIndex) => {
      const isActive = cardIndex === activeIndex;
      card.classList.toggle("is-active", isActive);
      card.setAttribute("aria-expanded", String(isActive));
    });

    updateControls();

    if (shouldReveal) {
      window.requestAnimationFrame(() => revealCard(cards[activeIndex]));
      window.setTimeout(() => revealCard(cards[activeIndex]), reducedMotion.matches ? 0 : 500);
    }
  };

  cards.forEach((card, index) => {
    card.addEventListener("mouseenter", () => activateCard(index));
    card.addEventListener("focus", () => activateCard(index, true));
    card.addEventListener("click", () => {
      if (draggedDistance < 8) {
        activateCard(index, true);
      }
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        activateCard(Math.max(0, index - 1), true);
        cards[Math.max(0, index - 1)].focus();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        activateCard(Math.min(cards.length - 1, index + 1), true);
        cards[Math.min(cards.length - 1, index + 1)].focus();
      }
    });
  });

  previousButton.addEventListener("click", () => activateCard(activeIndex - 1, true));
  nextButton.addEventListener("click", () => activateCard(activeIndex + 1, true));

  viewport.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    pointerStartX = event.clientX;
    scrollStartX = viewport.scrollLeft;
    draggedDistance = 0;
    viewport.classList.add("is-dragging");
    viewport.setPointerCapture(event.pointerId);
  });

  viewport.addEventListener("pointermove", (event) => {
    if (!viewport.hasPointerCapture(event.pointerId)) {
      return;
    }

    draggedDistance = Math.abs(event.clientX - pointerStartX);
    viewport.scrollLeft = scrollStartX - (event.clientX - pointerStartX);
  });

  const finishDrag = (event) => {
    if (!viewport.hasPointerCapture(event.pointerId)) {
      return;
    }

    viewport.releasePointerCapture(event.pointerId);
    viewport.classList.remove("is-dragging");

    if (draggedDistance > 48) {
      const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;
      const nearestIndex = cards.reduce((closestIndex, card, index) => {
        const closestCard = cards[closestIndex];
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const closestCenter = closestCard.offsetLeft + closestCard.offsetWidth / 2;
        return Math.abs(cardCenter - viewportCenter) < Math.abs(closestCenter - viewportCenter)
          ? index
          : closestIndex;
      }, activeIndex);

      activateCard(nearestIndex, true);
    }
  };

  viewport.addEventListener("pointerup", finishDrag);
  viewport.addEventListener("pointercancel", finishDrag);
  updateControls();
}
