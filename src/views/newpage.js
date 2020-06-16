import React from "react";
import { createUseStyles } from "react-jss";
import * as variables from "../variables";
import Header from "../components/Header";
import Footer from "../components/Footer"

const useStyles = createUseStyles({});

export default function Something() {
  const classes = useStyles();
  return (
      <>
      <Header />
      <Footer />
      </>
  )
}