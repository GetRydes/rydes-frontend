import { DefaultLayout } from "../../common/layouts";
import { Hero } from "../../common/sections";
import styles from "./home.module.scss";

const Home = () => {
   return (
      <DefaultLayout classNames={{ container: styles["layout-container"] }}>
         <Hero />
      </DefaultLayout>
   );
};

export default Home;
