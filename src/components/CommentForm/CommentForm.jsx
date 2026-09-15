import "./CommentForm.css";

function CommentForm() {
  return (
    <section className="comment-form">
      <div className="section-title">
        <h2>Leave a Comment</h2>
      </div>

      <div className="comment-form-content">
        <div className="form-row">
          <div className="form-group">
            <label>Name *</label>
            <input type="text" placeholder="Your Name" />
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input type="email" placeholder="Your Email" />
          </div>
        </div>

        <div className="form-group">
          <label>Website</label>
          <input type="text" placeholder="Your Website" />
        </div>

        <div className="form-group">
          <label>Message *</label>
          <textarea placeholder="Your Message"></textarea>
        </div>

        <button type="button">Leave a Comment</button>
      </div>
    </section>
  );
}

export default CommentForm;