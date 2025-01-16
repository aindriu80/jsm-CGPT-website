import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt__possibility section__padding" id="possibility">
      <div className="gpt__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Unlock the infinite potential of human creativity and innovation. With
          our cutting-edge chat AI technology, we invite you to explore the
          uncharted territories of possibility, where imagination knows no
          bounds and the future is yours to shape.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
