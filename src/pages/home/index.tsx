import DefaultLayout from "../../common/layouts/default";
import Hero from "../../common/sections/home/Hero/Hero";
import styles from "./home.module.scss";

const Home = () => {
   return (
      <DefaultLayout classNames={{ container: styles["layout-container"] }}>
         <Hero />
      </DefaultLayout>
   );
};

export default Home;
