import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Powerful Natural Language Understanding",
    text: "GPT understands context and generates human-like text with ease. It adapts seamlessly to various tones and styles for versatile applications.",
  },
  {
    title: "Personalized Interactions",
    text: "Tailor GPT responses to suit your needs. It can simulate personalities, follow instructions, and provide customized solutions effectively.",
  },
  {
    title: "Advanced Problem-Solving",
    text: "Solve complex problems through detailed and logical explanations. GPT excels in reasoning and generating insightful, structured answers.",
  },
  {
    title: "Creative Content Generation",
    text: "From stories to code, GPT unleashes creativity. Generate compelling ideas, drafts, or solutions effortlessly across various domains.",
  },
];

const Features = () => {
  return (
    <div className="gpt__features section__padding" id="features">
      <div className="gpt__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize it. Step into Future
          Today & Make it Happen
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
