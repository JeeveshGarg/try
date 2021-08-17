import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import logo from "./m.png";
import Form from "../Components/Form";
import "../App.css";
import { useState } from "react";
import Button from "../Components/Button";
function Header() {
  const [popup, setpopup] = useState(false);
  // const [ change , setChange] = useState(false);

  return (
    <div >
      <ReactBootStrap.Container >
        <ReactBootStrap.Row>
          <ReactBootStrap.Col xs={5}>
            <h1 style={{ fontWeight: "700" }} className="headh">
              Lit up your
            </h1>
            <h1 style={{ fontWeight: "700" }} className="headh">
              {" "}
              online <span style={{ color: "#EB0090" }}>date.</span>
            </h1>
            <p className="headp" style={{ paddingTop: "15px" }}>
              Turn your online couple meeting into a playful date. Free of
              boredom, & awkward pauses with intriguing converations & fun
              engagement.
            </p>
            {/* <ReactBootStrap.Button
              variant="primary"
              className="navbtn"
              onClick={() => setpopup(true)}
            >
              MAKE IT HAPPEN!{" "}
            </ReactBootStrap.Button> */}
            {/* <button data-tf-popup="AdHfxkOD" className="navbtn" >MAKE IT HAPPEN!</button> */}
            <Button ></Button>
          </ReactBootStrap.Col>

          <ReactBootStrap.Col xs={7}>
            <img src={logo} alt="Logo" />
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>
        <Form trigger={popup} setTrigger={setpopup}>
          <iframe
            style={{ width: "600px", height: "500px" }}
            src="https://cdn.forms-content.sg-form.com/8ab332a3-fab5-11eb-bf25-863f55bc68b6"
          />
        </Form>
      </ReactBootStrap.Container>
    </div>
  );
}

export default Header;
