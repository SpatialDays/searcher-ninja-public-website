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
              <JapText text="About Our API" fontSize="70px" />
            </div>

            <div className="about__bottom">
              <p className="clear-font">
                <span className=" ">Searcher Ninja</span> is a brand
                name created by{" "}
                <a target="_blank" className="cool-font " href="https://spatialdays.com">
                  Spatial Days Ltd
                </a>
                , a mapping, consulting and software development company,
                registered in England and Wales with Company Number 07376182.
                <br />
                <br />
                We needed a search engine scraper for one of our projects that
                could simultaneously scrape multiple different search engines,
                collate the results and return them in simple JSON format with
                fast response times.
                <br />
                <br />
                Many search engine scraper services were assessed but they all
                fell short, either in terms of functionality (e.g. only scraping
                one search engine), response times (advertised latency figures
                are clearly fictional) or cost (some services were deemed to be
                expensive).
                <br />
                <br />
                So, we developed Searcher Ninja internally and used it ourselves
                before deciding to make it widely available through{" "}
                <a target="_blank" className="cool-font " href="http://service.searcher.ninja">
                  RapidAPI
                </a>
                .
                <br />
                <br />
                Our design philosophy was:
                <br />
                <i>
                  “If you're entering anything where there's an existing
                  marketplace, against large, entrenched competitors, then your
                  product or service needs to be much better than theirs. It
                  can't be a little bit better, because then you put yourself in
                  the shoes of the consumer... you're always going to buy the
                  trusted brand unless there's a big difference.
                </i>
                ” - Elon Musk
                <br />
                <br />
                For Searcher Ninja API support, please contact {' '}
                <a className="cool-font " href="mailto:support@rapidapi.com">
                  support@rapidapi.com
                </a>{" "}
                first, and failing that, contact us at {' '}
                <a className="cool-font " href="mailto:support@spatialdays.com">
                  support@spatialdays.com
                </a>
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
