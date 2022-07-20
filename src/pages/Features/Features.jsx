import "./Features.scss";

const Features = () => {
  const features = [
    {
      title: "Global Coverage",
      description: "We cover all of the worlds languages and cultures.",
      icon: "globe",
    },
    {
      title: "Search Endpoint",
      description: "Search for any word in any language.",
      icon: "search",
    },
    {
      title: "Places Endpoint",
      description: "Search for any place in any language.",
      icon: "home",
    },
    {
      title: "Proxy Network",
      description:
        "We use a proxy network to make sure that our services are always up and running.",
      icon: "server",
    },
    {
      title: "JSON Requests",
      description:
        "We use JSON requests to make sure that our services are always up and running.",
      icon: "laptop",
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
              <div className="feature__description clear-font">{feature.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
