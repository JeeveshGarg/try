import "./App.css";
import { useState} from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Strip from "./Components/Strip";
import Card from "./Components/Card";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
function App() {

const [ change , setChange] = useState(false);

  return (
    <>
      <Navbar popup={setChange}></Navbar>
      <br />
      <br />
      <br />
      <Header popup={setChange}></Header>
      <br />
      <br />
      {change && <Form popup={setChange}></Form>}
      <br />
      <br />
      <br />
      <Strip popup={setChange}></Strip>
      <br />
      <br />
      <br />
      <br />
      <Card ></Card>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Testimonial></Testimonial>
      <br />
      <br />
      <br />
      <br />
      <Contact></Contact>

      <Footer></Footer>
    </>
  );
}

export default App;
