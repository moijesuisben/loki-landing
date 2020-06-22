import React from "react";
import { createUseStyles } from "react-jss";
import * as variables from "../variables";
import background from "../media/background.png";
import mobile from "../media/mobile.png";
import logo from "../media/logo.png";
import ios from "../media/ios.png";
import android from "../media/android.png";

const useStyles = createUseStyles({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  download: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "calc(50px + (150 - 50) * ((100vw - 320px) / (1920 - 320)))",
    "& > img": {
      maxWidth: "calc(50px + (332 - 50) * ((100vw - 320px) / (1920 - 320)))",
    },
    "& > img:hover": {
      cursor: "pointer",
    },
    "& > p": {
      fontSize: "23px",
      fontWeight: 800,
    },
  },
  mobile: {
    maxHeight: "calc(100px + (714 - 100) * ((100vw - 320px) / (1920 - 320)))",
  },
  logo: {
    maxWidth: "calc(50px + (287 - 50) * ((100vw - 320px) / (1920 - 320)))",
  },
  text: {
    fontSize: 17,
    maxWidth: "calc(50px + (466 - 50) * ((100vw - 320px) / (1920 - 320)))",
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: "0.2px",
  },
  background: {
    position: "absolute",
    top: "-310px",
    left: 0,
    width: "1920px",
    height: "auto",
    zIndex: -1,
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.download}>
        <img src={ios} alt="ios" />
        <p>ou</p>
        <img src={android} alt="android" />
      </div>
      <img src={mobile} alt="phone" className={classes.mobile} />
      <div className={classes.presentation}>
        <img src={logo} alt="logo" className={classes.logo} />
        <p className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris
          rhoncus aenean vel elit scelerisque mauris. Integer enim neque
          volutpat ac tincidunt. Pretium viverra suspendisse potenti nullam ac.
          Accumsan tortor posuere ac ut consequat.
        </p>
      </div>
      <img src={background} alt="background" className={classes.background} />
    </div>
  );
}
