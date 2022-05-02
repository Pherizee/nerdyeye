import Hero from "../../components/hero/Hero";
import ReactOwlCarousel from "react-owl-carousel";
import { nanoid } from "nanoid";
import divider from "../../img/divider.png";
import team from "../../img/team.jpg";
import person1 from "../../img/person-1-min.jpg";
import person2 from "../../img/person-2-min.jpg";
import person3 from "../../img/person-3-min.jpg";
import marker from "../../img/icons/map-pin.png";
import "./home.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    viewportWidth > 990 ? setIsMobile(false) : setIsMobile(true);
    isMobile ? setShowAll(false) : setShowAll(true);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [viewportWidth]);

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

  const offerCardContents = [
    {
      category: "Design",
      title: "UI/UX Designer",
      location: "Lagos",
      role: "Full time",
      offerAge: "3 days ago",
      company: "Logitech",
    },
    {
      category: "Design",
      title: "UI/UX Designer",
      location: "Lagos",
      role: "Full time",
      offerAge: "3 days ago",
      company: "Logitech",
    },
    {
      category: "Design",
      title: "UI/UX Designer",
      location: "Lagos",
      role: "Full time",
      offerAge: "3 days ago",
      company: "Logitech",
    },
    {
      category: "Design",
      title: "UI/UX Designer",
      location: "Lagos",
      role: "Full time",
      offerAge: "3 days ago",
      company: "Logitech",
    },
    {
      category: "Design",
      title: "UI/UX Designer",
      location: "Lagos",
      role: "Full time",
      offerAge: "3 days ago",
      company: "Logitech",
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

  const offerCardTemplate = offerCardContents.map((cardContent) => {
    return (
      <div
        className={`card ${showAll ? `show-all` : `hide-some`}`}
        key={nanoid()}
      >
        <div className="card__top">
          <div className="card__info">
            <div className="card__tag-image"></div>
            <span>{cardContent.category}</span>
          </div>
          <h4>{cardContent.title}</h4>
          <div className="card__description">
            <div className="location">
              <img src={marker} alt="location marker icon" />
              <span>{cardContent.location}</span>
            </div>
            <span className="role">{cardContent.role}</span>
          </div>
        </div>
        <div className="card__bottom">
          <div className="card__meta">
            <span className="age">{cardContent.offerAge}</span>
            <span className="company">{cardContent.company}</span>
          </div>
          <div className="bottom__image"></div>
        </div>
      </div>
    );
  });

  function handleResize() {
    setViewportWidth(window.innerWidth);
  }

  function seeMore() {
    setShowAll((prev) => !prev);
  }

  return (
    <main>
      <Hero />
      {/* how it works section */}
      <section className="how" aria-labelledby="howTitle">
        <div className="wrapper">
          <h2 id="_howTitle">HOW IT WORKS</h2>
          <div className="how__wrapper">
            <div className="how__steps">
              <div>1</div>
              <h3>Title goes here</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
                sed.
              </p>
            </div>
            <div className="how__steps">
              <div>2</div>
              <h3>Title goes here</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
                sed.
              </p>
            </div>
            <div className="how__steps">
              <div>3</div>
              <h3>Title goes here</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
                sed.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* end of how it works section */}

      {/* who can join section */}
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
      {/* end of who can join section */}

      {/* offers section */}
      <section className="offers" aria-labelledby="jobOffers">
        <div className="wrapper">
          <img src={divider} alt="" />
          <h2 id="jobOffers">JOB OFFERS</h2>
          <div className="offers__content">
            <div className="offers__content-left">
              <h4 className="offers__number">
                500<span className="special">+</span>
                <span>Job Offers</span>
              </h4>
              <h4 className="offers__number">
                100<span className="special">+</span>
                <span>Startups</span>
              </h4>
            </div>
            <div className="offers__image">
              <img src={team} alt="team of people" />
            </div>
            <div className="offers__cards">{offerCardTemplate}</div>
          </div>
          {isMobile && (
            <button className="btn secondary" onClick={seeMore}>
              {showAll ? `See less` : `See More`}
            </button>
          )}
        </div>
      </section>
      {/* end of offers section */}
    </main>
  );
};

export default Home;
