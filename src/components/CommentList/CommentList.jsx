import "./CommentList.css";

function CommentList() {
  const comments = [
    {
      name: "John Doe",
      date: "Jan 01, 2045",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
      name: "John Doe",
      date: "Jan 01, 2045",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    }
  ];

  return (
    <section className="comment-list">
      <div className="section-title">
        <h2>Comments</h2>
      </div>

      {comments.map((comment, index) => (
        <div className="comment" key={index}>
          <div className="comment-header">
            <strong>{comment.name}</strong>
            <span>{comment.date}</span>
          </div>

          <p>{comment.text}</p>

          <button type="button">Reply</button>
        </div>
      ))}
    </section>
  );
}

export default CommentList;