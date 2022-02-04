import './Skills.css';
import SkillsItem from './SkillsItem';

export default function Skills () {

  const state = {
    title: 'My Skills',
    skillsInfo: [
      {name: '3ds-Max', imgPath: '/images/skills/3ds.png'},
      {name: 'Archicad', imgPath: '/images/skills/archicad.png'},
      {name: 'Autocad', imgPath: '/images/skills/autocad.png'},
      {name: 'Corona Render', imgPath: '/images/skills/corona.png'},
      {name: 'Lumion', imgPath: '/images/skills/lumion.png'},
      {name: 'Photoshop', imgPath: '/images/skills/photoshop.jpg'},
      {name: 'Revit', imgPath: '/images/skills/revit.png'},
      {name: 'Unreal Engine', imgPath: '/images/skills/unreal.png'},
    ]
  };

  let SkillsItems = state.skillsInfo.map((el) => <SkillsItem name={el.name} path={el.imgPath} />);

  return (
    <section className="skills__container">
      <h3 className="skills__title">{state.title}</h3>
      <div className="skills__wrapper">
        {SkillsItems}
      </div>
    </section>
  );
}
