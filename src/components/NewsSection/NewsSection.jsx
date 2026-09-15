import "./NewsSection.css";

import news1 from "../../assets/news-700x435-1.jpg";
import news2 from "../../assets/news-700x435-2.jpg";
import news3 from "../../assets/news-700x435-3.jpg";

function NewsSection() {
  const news = [
    {
      image: news1,
      category: "Business",
      title: "Lorem ipsum dolor sit amet elit",
    },
    {
      image: news2,
      category: "Technology",
      title: "Proin vitae porta diam",
    },
    {
      image: news3,
      category: "Sports",
      title: "Aenean consectetur adipiscing",
    },
     {
      image: news1,
      category: "Business",
      title: "Lorem ipsum dolor sit amet elit",
    },
    {
      image: news2,
      category: "Technology",
      title: "Proin vitae porta diam",
    },
    {
      image: news3,
      category: "Sports",
      title: "Aenean consectetur adipiscing",
    },
  ];

  return (
    <section className="news-section">
      <div className="news-container">

        <div className="section-title">
          <h2>Latest News</h2>
        </div>

        <div className="news-grid">
          {news.map((item, index) => (
            <article className="news-card" key={index}>
              <img src={item.image} alt={item.title} />

              <div className="news-card-content">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p>
                  Jan 01, 2045
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>

  );
}

export default NewsSection;