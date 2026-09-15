
import "./NewsDetail.css";

function NewsDetail() {
  return (
    <>
    <article className="news-detail">
      <img
        src="/src/assets/news-700x435-1.jpg"
        alt="News"
        className="news-detail-image"
      />

      <div className="news-detail-content">
        <div className="news-detail-meta">
          <span>Business</span>
          <span>September 14, 2026</span>
        </div>

        <h1>
          Lorem ipsum dolor sit amet elit. Proin vitae porta diam.
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          malesuada velit sit amet augue tincidunt, vitae consectetur massa
          tincidunt.
        </p>

        <p>
          Proin vitae porta diam. Nullam euismod, nisl eget consectetur
          consequat, nisl nunc consequat nisl, eget tincidunt nisl nunc eget
          nisl.
        </p>

        <h2>Latest News and Updates</h2>

        <p>
          Aliquam erat volutpat. Integer vel lorem vitae justo tincidunt
          consequat. Donec consectetur, libero at tincidunt malesuada, nisl
          nunc consequat.
        </p>

        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae.
        </p>
      </div>
    </article>
    <div className="news-detail-footer">
  <div className="author">
    <img src="/src/assets/user.jpg" alt="John Doe" />
    <span>John Doe</span>
  </div>

  <div className="news-stats">
    <span>
      <i className="far fa-eye"></i>
      12345
    </span>

    <span>
      <i className="far fa-comment"></i>
      123
    </span>
  </div>
</div>
</>
  );
}

export default NewsDetail;
