import "./FollowUs.css";

function FollowUs() {
  const socialLinks = [
    {
      icon: "fab fa-facebook-f",
      text: "12,345 Fans",
      className: "facebook",
    },
    {
      icon: "fab fa-twitter",
      text: "12,345 Followers",
      className: "twitter",
    },
    {
      icon: "fab fa-linkedin-in",
      text: "12,345 Connects",
      className: "linkedin",
    },
    {
      icon: "fab fa-instagram",
      text: "12,345 Followers",
      className: "instagram",
    },
    {
      icon: "fab fa-youtube",
      text: "12,345 Subscribers",
      className: "youtube",
    },
  ];

  return (
    <section className="follow-us">
      <div className="section-title">
        <h2>Follow Us</h2>
      </div>

      <div className="social-list">
        {socialLinks.map((social, index) => (
          <a
            href="#"
            className={`social-item ${social.className}`}
            key={index}
          >
            <i className={social.icon}></i>
            <span>{social.text}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default FollowUs;