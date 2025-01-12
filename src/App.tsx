import Footer from "./containers/footer/Footer";
import Blog from "./containers/blog/Blog";
import Possibility from "./containers/possibility/Possibility";
import Features from "./containers/features/Features";
import WhatGPT from "./containers/whatGPT5/WhatGPT5";
import Header from "./containers/header/Header";
import CTA from "./components/cta/CTA";
import Brand from "./components/brand/Brand";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
