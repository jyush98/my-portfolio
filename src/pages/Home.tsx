import React from "react";
import HeroSection from "../components/home/hero/HeroSection";
import ExperienceSection from "../components/home/experience/ExperienceSection";

const Home: React.FC = () => {
  return (
    <section>
        <HeroSection/>
        <ExperienceSection/>
    </section>
  );
};

export default Home;

// import React from "react";

// interface HomeProps {
//   message?: string;
// }

// const Home: React.FC<HomeProps> = ({ message }) => {
//   return <div>{message || "Welcome to Home"}</div>;
// };

// export default Home;
