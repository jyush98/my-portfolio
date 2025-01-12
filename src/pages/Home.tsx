import React from "react";
import HeroSection from "../components/home/hero/HeroSection";

const Home: React.FC = () => {
  return (
    <section>
        <HeroSection/>
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
