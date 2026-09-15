import { useEffect, useState } from "react";
import "./Hero.css";

import hills from "../../assets/hills.jpg";
import mountains from "../../assets/mountains.jpg";
import stadium from "../../assets/stadium.jpg";

import news1 from "../../assets/news-700x435-1.jpg";
import news2 from "../../assets/news-700x435-2.jpg";
import news3 from "../../assets/news-700x435-3.jpg";
import news4 from "../../assets/news-700x435-4.jpg";

function Hero() {
  const slides = [
    {
      image: hills,
      title: "Lorem ipsum dolor sit amet elit",
    },
    {
      image: mountains,
      title: "Proin vitae porta diam",
    },
    {
      image: stadium,
      title: "Aenean consectetur adipiscing",
    },
  ];

  const newsCards = [
    {
      image: news1,
      title: "Lorem ipsum dolor sit amet elit",
    },
    {
      image: news2,
      title: "Proin vitae porta diam",
    },
    {
      image: news3,
      title: "Aenean consectetur adipiscing",
    },
    {
      image: news4,
      title: "Vestibulum consequat lorem",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        (prevSlide + 1) % slides.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const breakingNews = [
  "Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt.",
  "Breaking news: Latest updates from Dharamshala and Himachal Pradesh.",
  "New developments bring important changes across the region.",
];

const [breakingIndex, setBreakingIndex] = useState(0);

  return (
    <>
    <section className="hero">

      {/* LEFT - Main Carousel */}
      <div className="hero-main">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${
              index === currentSlide ? "active" : ""
            }`}
          >
            <img src={slide.image} alt={slide.title} />

            <div className="hero-overlay">
              <div className="hero-meta">
                <span className="hero-category">Business</span>
                <span>Jan 01, 2045</span>
              </div>

              <h1>{slide.title}</h1>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT - Small News Cards */}
      <div className="hero-news">
        {newsCards.map((news, index) => (
          <div className="hero-news-card" key={index}>
            <img src={news.image} alt={news.title} />

            <div className="hero-news-overlay">
              <span>Business</span>
              <h2>{news.title}</h2>
            </div>
          </div>
        ))}
      </div>

    </section>
    {/* Breaking News */}
<div className="breaking-news">
  <div className="breaking-container">

    <div className="breaking-title">
      Breaking News
    </div>

    <div className="breaking-content">
      <button
        onClick={() =>
          setBreakingIndex(
            (breakingIndex - 1 + breakingNews.length) %
              breakingNews.length
          )
        }
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      <a href="#">
        {breakingNews[breakingIndex]}
      </a>

      <button
        onClick={() =>
          setBreakingIndex(
            (breakingIndex + 1) % breakingNews.length
          )
        }
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>

  </div>
</div>
    </>
  );
}

export default Hero;