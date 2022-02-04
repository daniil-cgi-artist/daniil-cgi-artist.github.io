import "./About.css";
import Skills from "./Skills/Skills";
import Contacts from "./Contacts/Contacts";

export default function About() {
  const state = {
    imageSrc: "/images/author.jpg",
    eng: {
      title: "Hi, I`m Daniil! Let me introduce myself",
      description:
        "I`m 23 years old. I have been working as a 3D artist and designer for almost 2 years. Аt the moment I live and work in Russia, more specifically, in Ekaterinburg where I completed my education as an architect and designer. I`d love to take on every project. My main preference is working with interior details. I like to combine different compositions and colors, structures and lines. On this site I present some works which I have done from the beginning until today.",
    },
  };

  return (
    <>
      <section className="about__container">
        <div className="about__text">
          <h3 className="about__title">{state.eng.title}</h3>
          <p className="about__description">{state.eng.description}</p>
        </div>
        <div className="about__portrait">
          <img className="about__image" src={state.imageSrc} alt="portrait" />
        </div>
      </section>
      <Skills />
      <Contacts />
    </>
  );
}
