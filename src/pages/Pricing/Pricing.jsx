import Ninja from "../../components/Ninja/Ninja";
import JapText from "../../components/JapText/JapText";
import "./Pricing.scss";

const Pricing = () => {
  const pricePlans = [
    {
      title: "Basic",
      description: "Get started with our Basic plan",
      icon: "basic",
      price: "Free",
      features: ["Limited to 100 requests per month", "Free"],
      avatar: "hanbok",
    },
    {
      title: "Pro",
      description: "Move to our Pro plan",
      icon: "pro",
      price: "Free",
      features: ["< 5000 requests per month", "$ 39.99 / month"],
      avatar: "ninja",
    },
    {
      title: "Ultra",
      description: "Move to our Ultra plan",
      icon: "ultra",
      price: "Free",
      features: ["< 15 000 requests per month", "$ 99.99 / month"],
      avatar: "firefighter",
    },

    {
      title: "Mega",
      description: "Move to our Mega plan",
      icon: "enterprise",
      price: "Free",
      features: ["< 50 000 requests per month", "$ 249.99 / month"],
      avatar: "emperor",
    },
  ];

  return (
    <div className="wrapper" id="pricing">
      <div className="container-pricing">
        <div className="ninja-container">
          <JapText text="Pricing" fontSize="70px" />

          <Ninja type="main" size="small" />
        </div>

        <div className="pricing-container">
          <div className="prices">
            {pricePlans.map((plan, index) => {
              return (
                <div
                  key={index}
                  className="price"
                  onClick={() => {
                    window.open("http://pricing.searcher.ninja", "_blank");
                  }}
                >
                  <div className="price__avatar">
                    <img src={`/ninjas/${plan.avatar}.png`} alt={plan.avatar} />
                  </div>
                  <div className="price__title ">{plan.title}</div>
                  <div className="price__description clear-font">
                    {plan.description}
                  </div>
                  <div className="price__features">
                    {plan.features.map((feature, index) => {
                      return (
                        <div key={index} className="price__feature">
                          <p className="clear-font">{feature}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="prices__footer">
            <p className="clear-font">
              If your needs exceed those of our Mega plan, contact us for{" "}
              <a href="mailto:support@spatialdays.com" className="cool-font">
                Enterprise
              </a>{" "}
              pricing
              <br /> ( at rates of less than $ 0.005 per request )
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
