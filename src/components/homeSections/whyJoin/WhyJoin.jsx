import divider from "../../../img/divider.png";
import check from "../../../img/icons/check.png";
import "./whyJoin.css";

const WhyJoin = () => {
  return (
    <section className="why-join" aria-labelledby="whyJoinTitle">
      <img src={divider} alt="" />
      <div className="wrapper">
        <div className="why-join__image"></div>
        <div className="why-join__text">
          <h2 id="whyJoinTitle">
            WHY YOU SHOULD JOIN THE{" "}
            <span className="special">NERDYEYE TALENT PIPELINE</span>
          </h2>
          <ul className="why-join__reasons">
            <li className="reason">
              <img src={check} alt="" />
              Long-term placements
            </li>
            <li className="reason">
              <img src={check} alt="" />
              Long-term placements
            </li>
            <li className="reason">
              <img src={check} alt="" />
              Long-term placements
            </li>
            <li className="reason">
              <img src={check} alt="" />
              Long-term placements
            </li>
            <li className="reason">
              <img src={check} alt="" />
              Long-term placements
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
