import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">
      <div className="section-title">
        <h2>News Letter</h2>
      </div>

      <div className="newsletter-content">
        <p>
          Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero
          kasd
        </p>

        <div className="newsletter-form">
          <input type="email" placeholder="Your Email" />

          <button type="button">
            Sign Up
          </button>
        </div>

        <small>Lorem ipsum dolor sit amet elit</small>
      </div>
    </section>
  );
}

export default Newsletter;