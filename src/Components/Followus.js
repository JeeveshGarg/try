import React from "react";
import "./followus.css";
import l1 from "./M1.png";
import l2 from "./M2.jpg";
import l3 from "./M3.png";
import l4 from "./M4.png";
import l5 from "./M5.png";
import l6 from "./M6.png";
import * as ReactBootStrap from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const delay = 2500;
const images = [
  {
    src: l1,
    href: "https://www.instagram.com/p/CThdn9osnPt/?utm_medium=copy_link",
  },
  {
    src: l2,
    href: "https://www.instagram.com/p/CUU9x7JMtif/?utm_medium=copy_link",
  },
  {
    src: l3,
    href: "https://www.instagram.com/p/CTtno87MpcV/?utm_medium=copy_link",
  },
  {
    src: l4,
    href: "https://www.instagram.com/p/CTbl25dMp7e/?utm_medium=copy_link",
  },
  {
    src: l5,
    href: "https://www.instagram.com/p/CTZFyFChPOX/?utm_medium=copy_link",
  },
  {
    src: l6,
    href: "https://www.instagram.com/p/CS9zZP6MCoc/?utm_medium=copy_link",
  },
];

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow w-90%   block md:hidden">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <a href = {image.href}>
          <img
            className="slide h-75 mobile_l:h-74 sm:h-86 w-full"
            key={index}
            src={image.src}
          ></img>
          </a>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

const Followus = ({ dark }) => {
  return (
    <div className="main px-12 md:px-0">
      <h1
        className={`followh text-5xl md:text-6xl text-${
          dark ? "white" : "black"
        }`}
      >
        Follow@candid.connection
      </h1>

      <ReactBootStrap.Container className="hidden md:block">
        <ReactBootStrap.Row>
          <ReactBootStrap.Col>
            <a href="https://www.instagram.com/p/CThdn9osnPt/?utm_medium=copy_link">
              <img src={l1} width="325rem" />
            </a>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col>
            <a href="https://www.instagram.com/p/CUU9x7JMtif/?utm_medium=copy_link">
              <img src={l2} width="325rem" />
            </a>
          </ReactBootStrap.Col>

          <ReactBootStrap.Col>
            <a href="https://www.instagram.com/p/CTtno87MpcV/?utm_medium=copy_link">
              <img src={l3} width="325rem" />
            </a>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>
        <ReactBootStrap.Row style={{ marginTop: "50px" }}>
          <ReactBootStrap.Col>
            {" "}
            <a href="https://www.instagram.com/p/CTbl25dMp7e/?utm_medium=copy_link">
              <img src={l4} width="325rem" />
            </a>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col>
            {" "}
            <a href="https://www.instagram.com/p/CTZFyFChPOX/?utm_medium=copy_link">
              <img src={l5} width="325rem" />
            </a>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col>
            {" "}
            <a href="https://www.instagram.com/p/CS9zZP6MCoc/?utm_medium=copy_link">
              <img src={l6} width="325rem" />
            </a>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>
      </ReactBootStrap.Container>
      <Slideshow />
    </div>
  );
};

export default Followus;
