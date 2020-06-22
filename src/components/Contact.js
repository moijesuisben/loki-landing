import React from "react";
import { createUseStyles } from "react-jss";
import background from "../media/BackgroundContact.png";

const useStyles = createUseStyles({
  background: {
    position: "absolute",
    left: 0,
    zIndex: -1,
    marginTop: "-70px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "calc(50px + (150 - 50) * ((100vw - 320px) / (1920 - 320)))",
  },
  title: {
    fontSize: "calc(18px + (40 - 18) * ((100vw - 320px) / (1920 - 320)))",
    fontWeight: 800,
    letterSpacing: 1.4,
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "calc(25px + (50 - 25) * ((100vw - 320px) / (1920 - 320)))",
  },
  text: {
    fontSize: 17,
    fontWeight: 600,
    lineHeight: 1.76,
    letterSpacing: 1.4,
    maxWidth: "calc(220px + (466 - 220) * ((100vw - 320px) / (1920 - 320)))",
    marginBottom: "calc(25px + (50 - 25) * ((100vw - 320px) / (1920 - 320)))",
  },
  mail: {
    // border: "1px solid red",
    padding: "20px 84px",
    borderRadius: "45px",
    background: "linear-gradient(101deg, #06ff92 -16%, #02caf6 114%)",
    color: "#ffffff",
    textDecoration: "none",
    fontSize: 20,
    fontWeight: 800,
    letterSpacing: 1.2,
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export default function Contact() {
  const classes = useStyles();
  return (
    <>
      <img src={background} alt="background" className={classes.background} />
      <div className={classes.container}>
        <h2 className={classes.title}>Contact</h2>
        <p className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua..
        </p>
        <a href="#" className={classes.mail}>
          hello@loki.io
        </a>
      </div>
    </>
  );
}
