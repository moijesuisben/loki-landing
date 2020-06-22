import React from "react";
import { createUseStyles } from "react-jss";
import bicloo from "../media/bicloo.png";
import tan from "../media/tan.png";
import uber from "../media/uber.png";
import frenchTech from "../media/frenchTech.png";
import ministere from "../media/ministere.png";
import jcdecaux from "../media/jcdecaux.png";
import star from "../media/star.png";
import sncf from "../media/sncf.png";
import lime from "../media/lime.png";
import heetch from "../media/heetch.png";
import marguerite from "../media/marguerite.png";
import aleop from "../media/aleop.png";

const useStyles = createUseStyles({
  container: {
    marginTop: "110px",
    border: "1px dotted lightblue",
  },
  title: {
    fontSize: "calc(18px + (40 - 18) * ((100vw - 320px) / (1920 - 320)))",
    fontWeight: 800,
    letterSpacing: 1.4,
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "calc(50px + (135 - 50) * ((100vw - 320px) / (1920 - 320)))",
  },
  line: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "calc(25px + (100 - 25) * ((100vw - 320px) / (1920 - 320)))",
    "& > img": {
      heigth: "auto",
      width: "calc(80px + (200 - 80) * ((100vw - 320px) / (1920 - 320)))",
    },
  },
});

export default function Sponsors() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>ils nous soutiennent</h2>
      <div className={classes.line}>
        <img src={bicloo} alt="bicloo" />
        <img src={tan} alt="tan" />
        <img src={uber} alt="uber" />
        <img src={frenchTech} alt="frenchTech" />
      </div>
      <div className={classes.line}>
        <img src={ministere} alt="ministere" />
        <img src={jcdecaux} alt="jcdecaux" />
        <img src={star} alt="star" />
        <img src={sncf} alt="sncf" />
      </div>
      <div className={classes.line}>
        <img src={lime} alt="lime" />
        <img src={heetch} alt="heetch" />
        <img src={marguerite} alt="marguerite" />
        <img src={aleop} alt="aleop" />
      </div>
    </div>
  );
}
