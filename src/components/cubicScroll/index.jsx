import { useRef, useEffect } from "react";
import { Icon } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import styles from "./cubic.module.css";

function CubicScroll() {
  function scrollToSection(sectionId, duration = 800) {
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      const targetPosition =
        targetSection.getBoundingClientRect().top + window.scrollY;

      const start = window.scrollY;
      const end = targetPosition;
      const distance = end - start;
      const startTime = performance.now();

      function scroll(timestamp) {
        const currentTime = timestamp - startTime;
        const progress = Math.min(currentTime / duration, 1);
        window.scrollTo(0, start + distance * progress);

        if (currentTime < duration) {
          requestAnimationFrame(scroll);
        }
      }

      requestAnimationFrame(scroll);
    }
  }

  useEffect(() => {
    const linkToQuote = document.getElementById("linkToQuote");

    if (linkToQuote) {
      linkToQuote.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToSection("quote");
      });
    }
  }, []);

  return (
    <div className={`${styles["cubic"]} absolute bottom-0`} id="linkToQuote">
      <a href="#quote">
        <Icon as={ChevronDownIcon} w={60} h={60} color="white" />
      </a>
    </div>
  );
}

export default CubicScroll;
