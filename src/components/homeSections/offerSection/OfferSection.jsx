import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import divider from "../../../img/divider.png";
import team from "../../../img/team.jpg";
import marker from "../../../img/icons/map-pin.png";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "./offerSection.css";

const OfferSection = () => {
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
  }, [viewportWidth, isMobile]);

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
  );
};

export default OfferSection;
