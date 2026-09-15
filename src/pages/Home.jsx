import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import FeaturedNews from "../components/FeaturedNews/FeaturedNews";
import NewsLayout from "../components/NewsLayout/NewsLayout";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedNews />
      <NewsLayout />
      <Footer />
    </>
  );
}

export default Home;