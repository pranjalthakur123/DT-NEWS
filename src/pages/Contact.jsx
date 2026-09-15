import "./Contact.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactInfo from "../components/ContactInfo/ContactInfo";

function Contact() {
  return (
    <>
      <Header />

      <main className="contact-page">
        <div className="contact-container">

          <ContactForm />
        <ContactInfo />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Contact;