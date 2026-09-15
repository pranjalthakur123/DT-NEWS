import "./FeaturedNews.css";

import news1 from "../../assets/news-700x435-1.jpg";
import news2 from "../../assets/news-700x435-2.jpg";
import news3 from "../../assets/news-700x435-3.jpg";
import news4 from "../../assets/news-700x435-4.jpg";

function FeaturedNews() {
  const featuredNews = [
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
      image: news4,
      category: "Politics",
      title: "Vestibulum consequat lorem",
    },
  ];

  return (
    <section className="featured-news">
      <div className="featured-container">

        <div className="section-title">
          <h2>Featured News</h2>
        </div>

        <div className="featured-grid">
          {featuredNews.map((news, index) => (
            <div className="featured-card" key={index}>
              <img src={news.image} alt={news.title} />

              <div className="featured-overlay">
                <span>{news.category}</span>
                <h3>{news.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedNews;