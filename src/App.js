import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Strip from "./Components/Strip";
import Card from "./Components/Card";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Candid from "./Components/Candid";
import { useState } from "react";
import Followus from "./Components/Followus";
import Start from "./Components/Start";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
function App() {
  const [dark, setDark] = useState(false);
  function darkon() {
    setDark(!dark);
  }
  return (
    <>
      <Router>
        <div
          style={dark ? { background: "#19191B" } : { background: "#FFFFFF" }}
        >
          <Switch>
            <Route exact path="/">
              <div className="navbar__top">
                <Navbar check={darkon}></Navbar>
              </div>
              <div className="header__main">
                <Header dark={dark}></Header>
              </div>
              <div className="strip__main">
                <Strip dark={dark}></Strip>
              </div>
              <div className="card__main">
                <Card dark={dark}></Card>
              </div>
              <div className="candid_strip">
                <Followus dark={dark}></Followus>
              </div>
              <div className="candid_strip">
                <Candid dark={dark}></Candid>
              </div>
              <div className="test__main">
                <Testimonial dark={dark}></Testimonial>
              </div>
              <div className="test__main"></div>
              <div className="contact__main">
                <Contact></Contact>
              </div>
              <div className="footer__main">
                <Footer></Footer>
              </div>
            </Route>
            <Route path="/test">
            <div className="navbar__top">
                <Navbar check={darkon}></Navbar>
              </div>
              <Start></Start>
              <div className="footer__main">
                <Footer></Footer>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
