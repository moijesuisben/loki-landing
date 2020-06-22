import React from "react";
import { createUseStyles } from "react-jss";
import * as variables from "../variables";
import Header from "../components/Header";
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
      {/* <p>
        Ipsum sint ad dolore dolor commodo elit officia. Elit ullamco
        adipisicing elit aute mollit reprehenderit est id. Laboris culpa
        proident sint minim aute sint do. Proident labore quis laborum elit.
      </p>
      <Footer /> */}
    </div>
  );
}
