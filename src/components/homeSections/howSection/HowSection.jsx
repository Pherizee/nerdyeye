import "./howSection.css";

const HowSection = () => {
  return (
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
  );
};

export default HowSection;
