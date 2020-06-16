import React from "react";
import { createUseStyles } from "react-jss";
import * as variables from "../variables";
import Header from "../components/Header";
import Footer from "../components/Footer";

const useStyles = createUseStyles({});

export default function Landing() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <p>
        Ipsum sint ad dolore dolor commodo elit officia. Elit ullamco
        adipisicing elit aute mollit reprehenderit est id. Laboris culpa
        proident sint minim aute sint do. Proident labore quis laborum elit.
      </p>
      <Footer />
    </>
  );
}
