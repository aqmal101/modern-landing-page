import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./heroCarousel.module.css";
import Landscape1 from "../../assets/landscape1.png";
import Landscape2 from "../../assets/landscape2.png";
import Landscape3 from "../../assets/landscape3.png";
import Landscape4 from "../../assets/landscape4.png";

function HeroCarousel() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  function plusSlides(n) {
    setSlideIndex((prevIndex) => prevIndex + n);
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlide");
    let dots = document.getElementsByClassName("dot");

    if (!slides || !dots) {
      // Pastikan elemen-elemen ditemukan sebelum melanjutkan
      return;
    }

    if (n > slides.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(slides.length);
    }
    for (i = 0; i < slides.length; i++) {
      if (slides[i]) {
        slides[i].style.display = "none";
      }
    }
    for (i = 0; i < dots.length; i++) {
      if (dots[i]) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
    }
    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].style.display = "block";
    }
    if (dots[slideIndex - 1]) {
      dots[slideIndex - 1].className += " active";
    }
  }

  return (
    <>
      <div className={`${styles["slideshow-container"]}`}>
        <div className={`${styles["mySlide"]} ${styles["fade"]}`}>
          <Image src={Landscape1} width="100%" />
        </div>

        <div className={`${styles["mySlide"]} ${styles["fade"]}`}>
          <Image src={Landscape2} width="100%" />
        </div>

        <div className={`${styles["mySlide"]} ${styles["fade"]}`}>
          <Image src={Landscape3} width="100%" />
        </div>

        <div className={`${styles["mySlide"]} ${styles["fade"]}`}>
          <Image src={Landscape4} width="100%" />
        </div>

        <a className={`${styles["prev"]}`} onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a className={`${styles["next"]}`} onClick={() => plusSlides(1)}>
          &#10095;
        </a>
        <br />

        {/* <!-- The dots/circles --> */}
        <div className="align-center">
          <span
            className={`${styles["dot"]}`}
            onClick={() => currentSlide(1)}
          ></span>
          <span
            className={`${styles["dot"]}`}
            onClick={() => currentSlide(2)}
          ></span>
          <span
            className={`${styles["dot"]}`}
            onClick={() => currentSlide(3)}
          ></span>
          <span
            className={`${styles["dot"]}`}
            onClick={() => currentSlide(4)}
          ></span>
        </div>
      </div>
    </>
  );
}

export default HeroCarousel;
