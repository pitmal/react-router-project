import React, { useState, useEffect } from "react";
import Footer from "../common/Footer";
import imgContact from "../../images/kontakt-page.jpg";
import "../../styles/ContactLayout.css";
import Pentagon from "../../components/Pentagon";
import Recaptcha from "react-google-invisible-recaptcha";

const ContactLayout = () => {
  let recaptcha = React.createRef();
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const [activeContact, setActiveContact] = useState("");
  const handleActiveContact = () => {
    setActiveContact("active");
  };

  useEffect(() => {
    handleActiveContact();
  });

  const handleValue = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const validate = (formValues) => {
    if (!formValues.name) {
      return "Podaj proszę swoje imię";
    } else if (formValues.name.length < 2) {
      return "Imię jest za krótkie";
    }
    if (!formValues.email) {
      return "Wpisz proszę swój e-mail";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)
    ) {
      return "Podany e-mail nie jest poprawny";
    }
    if (!formValues.msg) {
      return "Wpisz proszę treść wiadmości";
    } else if (formValues.msg.length < 2) {
      return "Wiadmość jest za krótka";
    }

    return null;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formError = validate(formValues);
    if (formError) {
      setError(formError);
      return;
    }
    recaptcha.execute();
    setError(null);

    await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/prudentCodeMailServices`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formValues }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setFormValues({
            name: "",
            email: "",
            msg: "",
          });
          setMessage(data.message);
        } else if (data.status === "fail") {
          setError(`Wiadomość nie została wysłana - ${data.error}`);
        }
      });
  };

  const onResolved = () => {};
  return (
    <>
      <div
        className="contact-page"
        style={{ backgroundImage: `url(${imgContact})` }}
      >
        <div className="contact-description">
          <Pentagon
            key="darkGrey-realizations"
            color="45,46,45,0.8"
            name={`darkGrey-realizations ${activeContact}`}
          />
          <Pentagon
            key="dirtBlue-realizations"
            color="60,74,110,0.8"
            name={`dirtBlue-realizations ${activeContact}`}
          />
          <Pentagon
            key="green-realizations"
            color="87,94,32,0.8"
            name={`green-realizations ${activeContact}`}
          />
          <h3>Masz pytania, jesteś zainteresowany współpracą ?</h3>
          <p>Napisz, to nic nie kosztuje !</p>
        </div>
        <div className="contact-form">
          <p
            className={`allert ${error ? "active" : ""} ${
              message ? "active-msg" : ""
            }`}
          >
            <i className="fas fa-exclamation-circle"></i>
            {error}
            {message}
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              onChange={handleValue}
              placeholder="wpisz imię"
              value={formValues.name}
            />

            <input
              type="e-mail"
              name="email"
              onChange={handleValue}
              placeholder="podaj swój e-mail"
              value={formValues.email}
            />
            <textarea
              id="text-area"
              name="msg"
              onChange={handleValue}
              placeholder="wpisz treść wiadomości"
              value={formValues.msg}
            ></textarea>
            <input type="submit" value="Wyślij" />
          </form>
        </div>
        <Recaptcha
          ref={(ref) => (recaptcha = ref)}
          sitekey={"6LdQwNkUAAAAAOEamBTym0o_v5beMwB84uMH1NrF"}
          onResolved={onResolved}
        />
      </div>
      <Footer />
    </>
  );
};
export default ContactLayout;
