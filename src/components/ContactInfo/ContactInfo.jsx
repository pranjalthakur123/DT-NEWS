import "./ContactInfo.css";

function ContactInfo() {
  return (
    <section className="contact-info">
      <div className="section-title">
        <h2>Get In Touch</h2>
      </div>

      <div className="contact-info-content">
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <div>
            <h4>Address</h4>
            <p>Dharamshala, Himachal Pradesh, India</p>
          </div>
        </div>

        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <div>
            <h4>Email</h4>
            <p>info@example.com</p>
          </div>
        </div>

        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <div>
            <h4>Phone</h4>
            <p>+91 12345 67890</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;