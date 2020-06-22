import React from "react";
import { createUseStyles, withTheme } from "react-jss";
import * as variables from "../variables";

const useStyles = createUseStyles({
  footer: {
    fontSize: 17,
    fontWeight: 800,
    letterSpacing: 1.2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "linear-gradient(94deg, #06ff92 -15%, #02caf6 114%)",
    color: "white",
    position: "absolute",
    left: 0,
    width: "100vw",
    paddingBottom: "15px",
    "& > a": {
      textDecoration: "none",
      color: "#FFFFFF",
      marginBottom: "10px",
    },
    "& > a:hover": {
      textDecoration: "underline",
    },
  },
  social: {
    "& > a": {
      textDecoration: "none",
      color: "#FFFFFF",
    },
    "& > a:hover": {
      textDecoration: "underline",
    },
  },
});

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <p>© Copyright Loki 2020 — Tous droits réservés</p>
      <a href="#">hello@loki.io</a>
      <div className={classes.social}>
        <a href="#">Twitter</a>
        <span> — </span>
        <a href="#">LinkedIn</a>
        <span> — </span>
        <a href="#">Instagram</a>
      </div>
    </div>
  );
}
