import { reveal as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom"
import Contacts from "../About/Contacts/Contacts"
import './Toolbar.css';

export default function Toolbar () {
  function _clickHandler() {
    document.getElementById('react-burger-cross-btn').click();
  }

  return (
    <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
      <Link to="/home" id="home" className="menu-item" onClick={_clickHandler}>Home</Link>
      <Link to="/about" id="about" className="menu-item" onClick={_clickHandler}>About me</Link>
      <Link to="/portfolio" id="portfolio" className="menu-item" onClick={_clickHandler}>Portfolio</Link>
      <div className="contacts__container_small"><Contacts /></div>
    </Menu>
  );
}