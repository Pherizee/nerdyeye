import ReactOwlCarousel from "react-owl-carousel";
import divider from "../../../img/divider.png";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "./successSection.css";

const SuccessSection = () => {
  const sliderOptions = {
    center: true,
    loop: true,
    dots: true,
    responsive: {
      0: { items: 1, margin: 20 },
      850: { items: 3, margin: 90 },
      1700: { items: 3, margin: 120 },
    },
  };

  return (
    <section className="success" aria-labelledby="successTitle">
      <img src={divider} alt="" />
      <div className="wrapper">
        <h2 id="successTitle">SUCCESS STORIES</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
          officiis mollitia eos voluptatibus, magni repellendus.
        </p>
        <ReactOwlCarousel className="success__slider" {...sliderOptions}>
          <div className="success__slide">
            <div className="slide__image"></div>
            <h3 className="special">John Doe</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse
              id enim auctor ultricies vulputate nisl sit lacus proin. Viverra
              nisl morbi c
            </p>
          </div>
          <div className="success__slide">
            <div className="slide__image"></div>
            <h3 className="special">John Doe</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse
              id enim auctor ultricies vulputate nisl sit lacus proin. Viverra
              nisl morbi c
            </p>
          </div>
          <div className="success__slide">
            <div className="slide__image"></div>
            <h3 className="special">John Doe</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse
              id enim auctor ultricies vulputate nisl sit lacus proin. Viverra
              nisl morbi c
            </p>
          </div>
          <div className="success__slide">
            <div className="slide__image"></div>
            <h3 className="special">John Doe</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse
              id enim auctor ultricies vulputate nisl sit lacus proin. Viverra
              nisl morbi c
            </p>
          </div>
        </ReactOwlCarousel>
      </div>
    </section>
  );
};

export default SuccessSection;
