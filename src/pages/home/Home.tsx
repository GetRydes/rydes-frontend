import Header from "./components/Header";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <div className="home">
      <div className="background">
        <div className="gradient" />
        <div className="black" />
      </div>
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
