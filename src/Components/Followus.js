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

const Followus = () => {
  return (
    <div className="main">
      <h1 className="followh">Follow@Candid.Connection</h1>
      <ReactBootStrap.Container>
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
        <ReactBootStrap.Row style={{marginTop:"50px"}}>
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
    </div>
  );
};

export default Followus;
