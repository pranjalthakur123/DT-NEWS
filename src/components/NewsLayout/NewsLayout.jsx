import "./NewsLayout.css";
import FollowUs from "../FollowUs/FollowUs";
import Advertisement from "../Advertisement/Advertisement";

import NewsSection from "../NewsSection/NewsSection";
import PopularNews from "../PopularNews/PopularNews";
import NewsVideos from "../NewsVideos/NewsVideos";
import Newsletter from "../Newsletter/Newsletter";

function NewsLayout() {
  return (
    <section className="news-layout">
      <div className="news-layout-container">
        <div className="latest-news-column">
          <NewsSection />
          <NewsVideos />
        </div>

        <aside className="popular-news-column">
  <FollowUs />
  <Advertisement />
    <PopularNews />
     <Newsletter />
</aside>
      </div>
    </section>
  );
}

export default NewsLayout;