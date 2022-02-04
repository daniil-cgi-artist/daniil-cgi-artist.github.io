import './Home.css';
import HomeSlider from '../HomeSlider/HomeSlider';


function Home () {
  return (
    <section className="home__container">
      <div className="home__descr">
        <h1>Architect <br /> Designer <br /> 3D-Artist</h1>
      </div>
      <HomeSlider/> 
    </section>
  );
}

export default Home