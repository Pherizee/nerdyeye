import team from "../../../img/team.jpg";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero" aria-labelledby="headline">
      <div className="wrapper">
        <div className="hero__text">
          <h1 id="headline">Get matched & let your job find you</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
            in elementum justo quam. Auctor metus vitae suspendisse vitae etiam
            id vulputate condimentum in. In massa, augue etiam libero.
          </p>
          <a href="#" className="btn primary" role="button">
            Join Talents Pipeline
          </a>
          <div className="hero_number-container">
            <h4 className="hero__number">
              120<span className="special">+</span>
              <span>Recruiters</span>
            </h4>
            <h4 className="hero__number">
              200<span className="special">+</span>
              <span>Talents</span>
            </h4>
          </div>
        </div>
        <div className="hero__image-container">
          <div className="hero__image">
            <img src={team} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
