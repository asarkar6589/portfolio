import React from "react";
import data from "../Assets/data.json";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Work = () => {
  return (
    <div id="work">
      <h1>Work</h1>

      <div className="container">
        <Carousel
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          interval={2000}
          infiniteLoop={true}
          autoPlay={true}
        >
          {data.projects.map((i) => (
            <div className="box" key={i}>
              <img src={i.imgSrc} alt={i.title} />

              <div className="smallBox">
                <p>{i.description}</p>
                <a href={i.url} target="blank">
                  <button>View Demo</button>
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Work;
