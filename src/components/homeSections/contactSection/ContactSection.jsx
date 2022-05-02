import divider from "../../../img/divider.png";
import "./contactSection.css";

const ContactSection = () => {
  return (
    <section className="contact" aria-labelledby="contactTitle">
      <img src={divider} alt="" />
      <div className="wrapper">
        <div className="contact__image"></div>
        <div className="contact__form">
          <h2 id="contactTitle">
            JOIN THE NERDYEYE <span className="special">NETWORK</span>
          </h2>
          <p>
            Thank you for showing interest in the Nerdy Eye's Recruitment
            program. Please fill the form below and we will connect you with
            your ideal employers as soon as possible.
          </p>
          <form>
            <div className="input-group">
              <label htmlFor="role">Role</label>
              <input type="text" id="role" />
            </div>
            <div className="input-group">
              <label htmlFor="yoe">Years of Experience</label>
              <input type="number" id="yoe" />
            </div>
            <div className="input-group">
              <label htmlFor="work-type">Work Type</label>
              <input type="number" id="work-type" />
            </div>
            <button className="btn primary">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
