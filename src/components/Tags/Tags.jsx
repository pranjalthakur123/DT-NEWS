import "./Tags.css";

function Tags() {
  const tags = [
    "Politics",
    "Business",
    "Sports",
    "Technology",
    "Entertainment",
    "Education",
    "Health",
    "Travel",
  ];

  return (
    <section className="tags">
      <div className="section-title">
        <h2>Tags</h2>
      </div>

      <div className="tags-content">
        {tags.map((tag, index) => (
          <a href="#" key={index}>
            {tag}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Tags;