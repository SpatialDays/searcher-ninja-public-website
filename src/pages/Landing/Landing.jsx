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
          <JapText text="SERP Sear-cha!" fontSize="90px" top_to_bottom={true} />

          <p className="clear-font">
            Use <h1>Searcher Ninja</h1> to Scrape Google and other search engines using our{" "}
            <a target="_blank" href="http://service.searcher.ninja" className="cool-font">better, faster, cheaper</a> API.
            <br/>
            Visit us on <a className="cool-font" target="_blank" href="http://service.searcher.ninja">Rapid API</a> and let's get started!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
