import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt__header section__padding " id="home">
      <div className="gpt__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with OpenAI GPT
        </h1>
        <p>
          Welcome to OpenAI, your premier destination for insights and
          innovations in Artificial Intelligence. We're excited to share our
          knowledge and expertise with you, bridging the gap between
          cutting-edge technology and real-world applications. Explore our
          platform to discover the latest trends, research, and applications of
          AI, from machine learning and natural language processing to computer
          vision and more. Our goal is to empower individuals and organizations
          to harness the power of AI, driving innovation and transformation in
          an ever-evolving world. Stay tuned for updates, articles, and
          resources on the fascinating world of Artificial Intelligence – we're
          just getting started!
        </p>

        <div className="gpt__header-context__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt__header-content__people">
          <img src={people} alt="people" />
          <p>1,650 people requested access</p>
        </div>
      </div>
      <div className="gpt__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
