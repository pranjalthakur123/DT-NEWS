import "./NewsVideos.css";

function NewsVideos() {
  const videos = [
    {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "Latest News Update",
      category: "News",
    },
    {
      url: "https://www.youtube.com/embed/ScMzIvxBSi4",
      title: "Top News Headlines",
      category: "Politics",
    },
    {
      url: "https://www.youtube.com/embed/jNQXAC9IVRw",
      title: "Latest News Report",
      category: "Sports",
    },
    {
      url: "https://www.youtube.com/embed/M7lc1UVf-VE",
      title: "Today's News Updates",
      category: "Technology",
    },
  ];

  return (
    <section className="news-videos">
      <div className="news-videos-container">

        <div className="section-title">
          <h2>News Videos</h2>
        </div>

        <div className="videos-grid">
          {videos.map((video, index) => (
            <article className="video-card" key={index}>

              <div className="video-thumbnail">
                <iframe
                  src={video.url}
                  title={video.title}
                  allowFullScreen
                ></iframe>
              </div>

              <div className="video-content">
                <span>{video.category}</span>
                <h3>{video.title}</h3>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default NewsVideos;