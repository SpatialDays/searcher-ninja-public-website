import "./Features.scss";

const Features = () => {
  const features = [
    {
      title: "Global Coverage",
      description:
        "We do search engine scraping across the whole world wide web",
      icon: "globe",
    },
    {
      title: "Search Endpoint",
      description:
        "A general search across multiple search engines using a user-provided query",
      icon: "search",
    },
    {
      title: "Places Endpoint",
      description:
        "A location-based search across multiple search engines using a user-provided query",
      icon: "home",
    },
    {
      title: "Multiple Search Engines",
      description:
        "We scrape all search engines that are in common use and we collate the results",
      icon: "layout",
    },
    {
      title: "JSON Requests",
      description:
        "All search results are returned in JSON format for ease-of-use",
      icon: "laptop",
    },
    {
      title: "Proxy Network",
      description:
        "All searches are launched through many unique proxy addresses",
      icon: "server",
    },
  ];

  return (
    <div id="features" className="features">
      <div className="features__container">
        {features.map((feature, index) => {
          return (
            <div key={index} className="feature">
              <div className="feature__icon">
                <img src={`/icons/${feature.icon}.png`} alt={feature.title} />
              </div>
              <div className="feature__title">{feature.title}</div>
              <div className="feature__description clear-font">
                {feature.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
