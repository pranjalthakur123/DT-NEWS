import Header from "../components/Header/Header";
import NewsDetail from "../components/NewsDetail/NewsDetail";
import FollowUs from "../components/FollowUs/FollowUs";
import Advertisement from "../components/Advertisement/Advertisement";
import PopularNews from "../components/PopularNews/PopularNews";
import Newsletter from "../components/Newsletter/Newsletter";
import CommentList from "../components/CommentList/CommentList";
import CommentForm from "../components/CommentForm/CommentForm";
import Footer from "../components/Footer/Footer";
import Tags from "../components/Tags/Tags";
import "./Single.css";

function Single() {
  return (
    <>
      <Header />

      <main className="single-page">
        <div className="single-container">

          {/* Left Column */}
          <div className="single-main">
            <NewsDetail />
            <CommentList />
            <CommentForm />
          </div>

          {/* Right Column */}
          <aside className="single-sidebar">
            <FollowUs />
            <Advertisement />
            <PopularNews />
            <Newsletter />
            <Tags />
          </aside>

        </div>
      </main>
      <Footer />
    </>
  );
}

export default Single;