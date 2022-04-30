import "./mainContent.css";
import divider from "../../img/divider.png";

const MainContent = () => {
  return (
    <main>
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
      </section>
      {/* end of who can join section */}
    </main>
  );
};

export default MainContent;
