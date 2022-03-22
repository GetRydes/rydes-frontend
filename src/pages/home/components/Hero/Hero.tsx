import "./Hero.scss";
import TabHeader from "./TabHeader";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__inner-bg">
          <div className="hero__inner-bg--inner">
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1407,h_667/v1613521435/assets/bc/0529b6-c37a-416b-9907-2cb44c4c2888/original/Earner_Home_bg_desktop2x.png"
              alt=""
            />
          </div>
        </div>
        <div className="hero__inner-content">
          <div className="hero__inner-content--container">
            <div style={{ width: "100%" }}>
              <div className="hero__inner-content--container__tabs">
                <TabHeader />
              </div>
              <div className="hero__inner-content--container__tabs--content">
                <div className="tab__item">
                  <div className="tab__item--container">
                    <div className="tab__item--container__grid">
                      <div className="tab__item--container__inner">
                        <div className="tab__item--container__content">
                          <div className="title">
                            <h2>Request a ride now</h2>
                          </div>
                          <div className="location__fields">
                            <div className="location__fields--combobox">
                              <input placeholder="Enter pickup location" />
                            </div>
                            <div className="location__fields--combobox destination">
                              <input placeholder="Enter destination" />
                            </div>
                            <div className="location__fields--icons"></div>
                          </div>
                          <div className="action__buttons">
                            <div className="action__buttons--request">
                              <div>Request now</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
