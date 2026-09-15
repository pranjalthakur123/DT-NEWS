import "./ContactForm.css";

function ContactForm() {
  return (
    <section className="contact-form">
      <div className="section-title">
        <h2>Contact Us</h2>
      </div>

      <div className="contact-form-content">
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
          <label>Subject *</label>
          <input type="text" placeholder="Subject" />
        </div>

        <div className="form-group">
          <label>Message *</label>
          <textarea placeholder="Your Message"></textarea>
        </div>

        <button type="button">Send Message</button>
      </div>
    </section>
  );
}

export default ContactForm;