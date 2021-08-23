import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Strip from "./Components/Strip";
import Card from "./Components/Card";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div>
        <div className="navbar__top">
          <Navbar></Navbar>
        </div>
        <div className="header__main">
          <Header></Header>
        </div>
        <div className="strip__main">
          <Strip></Strip>
        </div>
        <div className="card__main">
          <Card></Card>
        </div>
        <div className="test__main">
          <Testimonial></Testimonial>
        </div>
        <div className="contact__main">
          <Contact></Contact>
        </div>
        <div className="footer__main">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
