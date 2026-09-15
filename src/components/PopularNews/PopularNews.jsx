import "./PopularNews.css";

import news1 from "../../assets/news-700x435-1.jpg";
import news2 from "../../assets/news-700x435-2.jpg";
import news3 from "../../assets/news-700x435-3.jpg";
import news4 from "../../assets/news-700x435-4.jpg";

function PopularNews() {
  const popularNews = [
    {
      image: news1,
      category: "Business",
      title: "Lorem ipsum dolor sit amet elit",
      date: "Jan 01, 2045",
    },
    {
      image: news2,
      category: "Technology",
      title: "Proin vitae porta diam",
      date: "Jan 01, 2045",
    },
    {
      image: news3,
      category: "Sports",
      title: "Aenean consectetur adipiscing",
      date: "Jan 01, 2045",
    },
    {
      image: news4,
      category: "Politics",
      title: "Vestibulum consequat lorem",
      date: "Jan 01, 2045",
    },
  ];

  return (
    <section className="popular-news">
      <div className="section-title">
        <h2>Popular News</h2>
      </div>

      <div className="popular-news-list">
        {popularNews.map((news, index) => (
          <article className="popular-news-item" key={index}>
            <img src={news.image} alt={news.title} />

            <div className="popular-news-content">
              <span>{news.category}</span>

              <h3>{news.title}</h3>

              <p>{news.date}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PopularNews;