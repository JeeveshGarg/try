import "./App.css";
import Navbar from "./Components/Navbar";
import NavbarNew from "./Components/NavbarNew";
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
import { Date } from "./Components/Date";
import Flowers from "./Components/Flowers";
import CallToActionModal from "./Components/modals/CallToActionModal";
import SignUpModal from "./Components/modals/SignUpModal";
import SignInModal from "./Components/modals/SignInModal";
import SendFlowersModal from "./Components/modals/SendFlowersModal";
import SendFlowersSuccessModal from "./Components/modals/SendFlowersSuccessModal";
import { useAuth } from "./hooks/use-auth";
import Community from'./Components/Community/Community';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Check from "./Components/Check";
import HeaderNew from "./Components/HeaderNew";
function App() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showCallToAction, setShowCallToAction] = useState(false);
  const [showFlowersModal, setShowFlowersModal] = useState(false);
  const [showFlowersSuccessModal, setShowFlowersSuccessModal] = useState(false);
  const [currentFlower, setCurrentFlower] = useState({})

  const [dark, setDark] = useState(false);
  const auth = useAuth();
  function darkon() {
    setDark(!dark);
  }
  console.log("auth", auth.LoginError);
  return (
    <div className="App">
      {showSignUpModal && (
        <SignUpModal
          setShowSignUpModal={setShowSignUpModal}
          setShowCallToAction={setShowCallToAction}
        />
      )}
      {showSignInModal && (
        <SignInModal
          setShowSignInModal={setShowSignInModal}
          setShowCallToAction={setShowCallToAction}
          setShowSignUpModal={setShowSignUpModal}
        />
      )}
      {showCallToAction && (
        <CallToActionModal setShowCallToAction={setShowCallToAction} />
      )}
      {showFlowersModal && (
        <SendFlowersModal setShowFlowersModal={setShowFlowersModal} currentFlower = {currentFlower} />
      )}
      {showFlowersSuccessModal && (
        <SendFlowersSuccessModal
          setShowFlowersSuccessModal={setShowFlowersSuccessModal}
        />
      )}

      <Router>
        {/* <SignInModal/> */}

        <div
          style={dark ? { background: "#19191B" } : { background: "#FFFFFF" }}
        >
          {/* <CallToActionModal/> */}

          <Switch>
            <Route exact path="/">
              <div className="navbar__top">
                {/* <Navbar check={darkon}></Navbar> */}
                <NavbarNew check={darkon} dark={dark} />
                {/* <Check/> */}
              </div>
              <div className="header__main">
                {/* <Header setShowSignInModal = {setShowSignInModal} dark={dark}></Header> */}
                <HeaderNew
                  setShowFlowersSuccessModal={setShowFlowersSuccessModal}
                  setShowFlowersModal={setShowFlowersModal}
                  setShowSignInModal={setShowSignInModal}
                  dark={dark}
                ></HeaderNew>
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
            <Route exact path="/test">
              <div className="navbar__top">
                {/* <Navbar check={darkon}></Navbar> */}
                <NavbarNew check={darkon} dark={dark} />
              </div>
              <Start></Start>
              <div className="footer__main">
                <Footer></Footer>
              </div>
            </Route>
            <Route path="/Date">
              <div className="navbar__top">
                {/* <Navbar check={darkon}></Navbar> */}
                <NavbarNew check={darkon} dark={dark} />
              </div>
              <Date></Date>
              <div className="footer__main">
                <Footer></Footer>
              </div>
            </Route>
            <Route path="/Community">
              <Community/>
              {/* <Date></Date> */}
              {/* <Footer></Footer> */}
            </Route>
            {/* Flowers route */}
            <Route path="/Flowers">
              <Flowers setShowFlowersModal = {setShowFlowersModal} setCurrentFlower = {setCurrentFlower}/>
              <div className="footer__main">
                <Footer></Footer>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
