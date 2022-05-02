import { nanoid } from "nanoid";
import "./industriesSection.css";

const IndustriesSection = () => {
  const cardContents = [
    {
      title: ["Logistics &", <br />, "Transportation"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis",
    },
    {
      title: "Fintech",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis",
    },
    {
      title: "E-commerce",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis",
    },
    {
      title: "Hospitality",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis",
    },
    {
      title: "Media",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis",
    },
    {
      title: "Healthcare",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet in lacus, duis sagittis. Eget elementum duis",
    },
  ];

  const cardTemplate = cardContents.map((content) => {
    return (
      <div className="card" key={nanoid()}>
        <div className="card__text">
          <h3>{content.title}</h3>
          <p>{content.description}</p>
        </div>
      </div>
    );
  });

  return (
    <section className="industries" aria-labelledby="industriesTitle">
      <div className="wrapper">
        <h2 id="industriesTitle">
          INDUSTRIES WE <span className="special">HIRE</span> FOR
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non aliquet
          in lacus, duis sagittis. Eget elementum duis
        </p>
        <div className="industries__cards">{cardTemplate}</div>
      </div>
    </section>
  );
};

export default IndustriesSection;
