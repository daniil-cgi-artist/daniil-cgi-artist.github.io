import "./Contacts.css";

import artstation from "./images/artstation.svg";
import behance from "./images/behance.svg";
import instagram from "./images/instagram.svg";
import pinterest from "./images/pinterest.svg";

const state = {
  eng: {
    title: "My Contacts",
    subtitle: `Want to know more or just chat? You are welcome!`,
    messageLink: "Send message",
  },
};

export default function Contacts() {
  return (
    <section className="contacts__container">
      <h3 className="contacts__title">{state.eng.title}</h3>
      <div className="contacts__wrapper">
        <h3 className="contacts__subtitle">{state.eng.subtitle}</h3>
        <a
          href="mailto:daniil.yaryshev@gmail.com"
          className="contacts__message-link"
        >
          {state.eng.messageLink}
        </a>
        <div className="contacts__social-block">
          <a
            href="https://www.artstation.com/daniil_tselishchev"
            target="_blank"
          >
            <img
              src={artstation}
              alt="artstation"
              className="contacts__social-icon"
            />
          </a>
          <a href="https://www.behance.net/daniilyary2bac" target="_blank">
            <img
              src={behance}
              alt="behance"
              className="contacts__social-icon"
            />
          </a>
          <a
            href="https://www.instagram.com/daniil.cgi.artist/"
            target="_blank"
          >
            <img
              src={instagram}
              alt="instagram"
              className="contacts__social-icon"
            />
          </a>
          <a
            href="https://www.pinterest.ru/Daniil_Tselishchev/"
            target="_blank"
          >
            <img
              src={pinterest}
              alt="pinterest"
              className="contacts__social-icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
