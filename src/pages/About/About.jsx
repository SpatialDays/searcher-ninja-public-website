import Ninja from "../../components/Ninja/Ninja";
import JapText from "../../components/JapText/JapText";
import "./About.scss";

const About = () => {
  return (
    <>
      <div className="wing"></div>

      <div className="about" id="about">
        <div className="wrapper">
          <div className="container-about">
            <div className="about__top">
              <JapText text="About" fontSize="70px" />
            </div>

            <div className="about__bottom">
              <p className="clear-font">
                <span className="cool-font ">Searcher Ninja</span> is a brand name created by Spatial Days Ltd, a
                mapping, consulting and software development company, registered
                in England and Wales with Company Number 07376182.
                <br />
                <br />
                Searcher Ninja came about as a result of a need identified on
                one of our projects for a search engine scraper that could
                simultaneously scrape multiple different search engines, collate
                the results and return them in simple JSON format with
                fastresponse times.
                <br />
                <br />A number of search engine scraper services were assessed
                but they fell short, either in terms of functionality (only
                scraping one search engine, for example), response times(many of
                the advertised latency figures are clearly fictional) or cost
                (someof the services we deemed to be expensive).
                <br />
                <br />
                So, we developed Searcher Ninja internally and used it ourselves
                before deciding to make it widely available to help others
                through RapidAPI. <br /><br/>
                Our design philosophy was: “If you're entering anything where
                there'san existing marketplace, against large, entrenched
                competitors, then your product or service needs to be much
                betterthan theirs. It can't be a little bit better, because then
                you put yourself in the shoes of the consumer... you're always
                going to buy the trusted brand unless there's a big
                difference.”-Elon Musk

              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="wing"></div>
    </>
  );
};

export default About;
