import "../home.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>The fast, affordable way to ride.</h1>
        <h3>
          One of the greatest pleasures you can have in a ride, your new
          experience of reaching destinations. Like always, Like Never before.
        </h3>
        <div className="store-icons">
          <img
            src="/static/images/google-play-badge.png"
            alt="google play icon"
          />
          <img src="/static/images/app-store.svg" alt="google play icon" />
        </div>
      </div>
      <div className="hero-right">
        <img src="/static/images/alloy-mockup.png" alt="app mockup" />
      </div>
    </div>
  );
};

export default Hero;
