import Ninja from "../../components/Ninja/Ninja";
import JapText from "../../components/JapText/JapText";
import SearchBox from "../../components/SearchBox/SearchBox";
import "./Landing.scss";

const Home = () => {
  return (
    <div className="wrapper paper-background">
      <div className="container-paper">
        <div className="ninja-container ninja-landing">
          <SearchBox />
          <Ninja type="magnifying_glass_crop" size="large" />
        </div>

        <div className="home-container">
          <JapText text="Sear-cha !" fontSize="80px" top_to_bottom={true} />

          <p className="clear-font">
            Scrape Google and other search engines using our{" "}
            <span className="cool-font">better, faster, cheaper</span> API.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
