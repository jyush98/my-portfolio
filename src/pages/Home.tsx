import React from "react";
import HeroSection from "../components/home/hero/HeroSection";
import HomeExperience from "../components/home/HomeExperience";

const Home: React.FC = () => {

  return (
    <section className="home-container">
        <HeroSection/>
        <HomeExperience/>
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
