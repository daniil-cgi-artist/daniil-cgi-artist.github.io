import './Skills.css';

export default function SkillsItem (props) {

  return (
    <div className="slills__item">
      <img src={props.path} alt={props.name} className="skills__img" />
      <h3 className="skills__name">{props.name}</h3>
    </div>
  );
}
