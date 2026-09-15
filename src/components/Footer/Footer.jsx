import React from "react";
import "./Footer.css";

import news1 from "../../assets/news-110x110-1.jpg";
import news2 from "../../assets/news-110x110-2.jpg";
import news3 from "../../assets/news-110x110-3.jpg";
import news4 from "../../assets/news-110x110-4.jpg";
import news5 from "../../assets/news-110x110-5.jpg";

function Footer() {
  const categories = [
    "Politics",
    "Business",
    "Corporate",
    "Business",
    "Health",
    "Education",
    "Science",
    "Business",
    "Foods",
    "Entertainment",
    "Travel",
    "Lifestyle",
    "Politics",
    "Business",
    "Corporate",
    "Business",
    "Health",
    "Education",
    "Science",
    "Business",
    "Foods",
  ];

  return (
    <>
      {/* Footer Start */}
      <footer className="footer">

        <div className="footer-container">

          {/* Get In Touch */}
          <div className="footer-column">
            <h5>Get In Touch</h5>

            <p>
              <i className="fa fa-map-marker-alt"></i>
              123 Street, New York, USA
            </p>

            <p>
              <i className="fa fa-phone-alt"></i>
              +012 345 67890
            </p>

            <p>
              <i className="fa fa-envelope"></i>
              info@example.com
            </p>

            <h6>Follow Us</h6>

            <div className="footer-social">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>


          {/* Popular News */}
          <div className="footer-column">
            <h5>Popular News</h5>

            {[1, 2, 3].map((item) => (
              <div className="footer-popular-news" key={item}>
                <div className="footer-news-meta">
                  <a href="#" className="footer-badge">
                    Business
                  </a>

                  <a href="#">
                    <small>Jan 01, 2045</small>
                  </a>
                </div>

                <a href="#" className="footer-news-title">
                  Lorem ipsum dolor sit amet elit. Proin vitae porta diam...
                </a>
              </div>
            ))}
          </div>


          {/* Categories */}
          <div className="footer-column">
            <h5>Categories</h5>

            <div className="footer-categories">
              {categories.map((category, index) => (
                <a href="#" key={index}>
                  {category}
                </a>
              ))}
            </div>
          </div>


          {/* Flickr Photos */}
          <div className="footer-column">
            <h5>Flickr Photos</h5>

            <div className="footer-flickr">
              <a href="#"><img src={news1} alt="" /></a>
              <a href="#"><img src={news2} alt="" /></a>
              <a href="#"><img src={news3} alt="" /></a>
              <a href="#"><img src={news4} alt="" /></a>
              <a href="#"><img src={news5} alt="" /></a>
              <a href="#"><img src={news1} alt="" /></a>
            </div>
          </div>

        </div>
      </footer>


      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          © <a href="#">Your Site Name</a>. All Rights Reserved.{" "}
          Design by <a href="#">Parteek</a>
        </p>
      </div>
      {/* Footer End */}
    </>
  );
}

export default Footer;