import React from "react";
import { createUseStyles } from "react-jss";
import Header from "../components/Header";
import HowItWork from "../components/HowItWork";
import About from "../components/About";
import Sponsors from "../components/Sponsors";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const useStyles = createUseStyles({
  container: {
    paddingTop: "calc(50px + (150 - 50) * ((100vw - 320px) / (1920 - 320)))",
    marginLeft: "calc(20px + (180 - 20) * ((100vw - 320px) / (1920 - 320)))",
    marginRight: "calc(20px + (180 - 20) * ((100vw - 320px) / (1920 - 320)))",
  },
});

export default function Landing() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header />
      <HowItWork />
      <About />
      <Sponsors />
      <Contact />
      <Footer />
    </div>
  );
}
