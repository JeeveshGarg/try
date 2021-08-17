import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Strip from "./Components/Strip";
import Card from "./Components/Card";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
// import { useState} from "react";
import Footer from "./Components/Footer";
// import {createGlobalStyle, ThemeProvider} from 'styled-components'
// const GlobalStyle=createGlobalStyle`
// body{
//   color:${props=>props.theme.mode=='dark'? '#fff' : '#000'}
//   background-color:${props=>props.theme.mode=='dark'? '#3F3D56' : '#fff'}
// }`

function App() {
// const[theme , setTheme]=useState({mode:'dark'})

  return (
    // <ThemeProvider theme={theme}>/
    <>
    {/* <GlobalStyle></GlobalStyle> */}
      <Navbar></Navbar>
      <br />
      <br />
      <br />
      <Header></Header>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Strip></Strip>
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
    // </ThemeProvider>
  );
}

export default App;
