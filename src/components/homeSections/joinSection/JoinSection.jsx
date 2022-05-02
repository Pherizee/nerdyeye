import ReactOwlCarousel from "react-owl-carousel";
import { nanoid } from "nanoid";
import person1 from "../../../img/person-1-min.jpg";
import person2 from "../../../img/person-2-min.jpg";
import person3 from "../../../img/person-3-min.jpg";
import divider from "../../../img/divider.png";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "./joinSection.css";

const JoinSection = () => {
  const sliderOneSettings = {
    loop: true,
    margin: 15,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },
      768: {
        items: 2,
      },
      1100: {
        items: 3,
        nav: true,
        dots: false,
      },
      1920: {
        items: 4,
        nav: true,
      },
    },
  };

  const joinCardContents = [
    {
      title: "UI/UX DESIGN",
      description: "new 120 jobs posted",
      image: person1,
    },
    {
      title: "UI/UX DESIGN",
      description: "new 120 jobs posted",
      image: person2,
    },
    {
      title: "UI/UX DESIGN",
      description: "new 120 jobs posted",
      image: person3,
    },
    {
      title: "UI/UX DESIGN",
      description: "new 120 jobs posted",
      image: person2,
    },
  ];

  const joinCardTemplate = joinCardContents.map((cardContent) => {
    return (
      <div className="join__card" key={nanoid()}>
        <div className="join__card-image">
          <img src={cardContent.image} alt="" />
        </div>
        <h3 className="join__card-title">{cardContent.title}</h3>
        <p className="special">{cardContent.description}</p>
      </div>
    );
  });

  return (
    <>
      <section className="join" aria-labelledby="joinTitle">
        <img src={divider} alt="" />
        <div className="wrapper">
          <h2 id="joinTitle">
            WHO SHOULD JOIN THE{" "}
            <span className="special">NERDYEYE PIPELINE</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet
            in lacus, duis sagittis. Eget elementum duis
          </p>
        </div>
        <div className="join__slider-container">
          <ReactOwlCarousel
            className="join__slider owl-theme"
            {...sliderOneSettings}
          >
            {joinCardTemplate}
          </ReactOwlCarousel>
        </div>
      </section>
    </>
  );
};

export default JoinSection;
