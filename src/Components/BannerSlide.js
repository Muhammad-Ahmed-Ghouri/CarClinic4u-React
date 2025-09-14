export default function BannerSlide(props) {
  return (
    <>
      <div id="slider-container">
        <div className="wrapper-container">
          <div className="home-banner-content">
            <h1 className="banner-white-content banner-first-heading">
              Step In.
            </h1>
            <h1 className="banner-second-heading">Gear Up.</h1>
            <h1 className="banner-white-content banner-third-heading">
              Go Far.
            </h1>
          </div>
          <div className="wrapper">
            <div className="slide slide1"></div>
            <div className="slide slide2"></div>
            <div className="slide slide3"></div>
            <div className="slide slide4"></div>
          </div>
        </div>
      </div>
    </>
  );
}
