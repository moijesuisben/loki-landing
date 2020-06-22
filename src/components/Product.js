import React from "react";
import { createUseStyles } from "react-jss";
import mobileDots from "../media/mobileDots.png";

const useStyles = createUseStyles({
  product: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    // border: "1px solid red",
    maxHeight: 500,
    marginBottom: "200px",
  },
  number: {
    position: "relative",
    fontFamily: "Cunia",
    fontSize: 500,
    opacity: 0.36,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    background:
      "linear-gradient(149deg, rgba(6,255,146,1) -18%, rgba(2,202,246,1) 103%)",
  },
  text: {
    top: "-420px",
    left: "150px",
    position: "relative",
    maxWidth: "calc(140px + (466 - 140) * ((100vw - 320px) / (1920 - 320)))",
    "& > h3": {
      fontSize: "calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)))",
      fontWeight: 700,
      letterSpacing: 0.2,
    },
    "& > p": {
      fontSize: "calc(11px + (18 - 11) * ((100vw - 320px) / (1920 - 320)))",
      fontWeight: 300,
      lineHeight: 1.5,
      letterSpacing: "0.2px",
    },
  },
  image: {
    marginTop: "50px",
    maxWidth: "calc(218px + (267 - 218) * ((100vw - 320px) / (1920 - 320)))",
  },
});

export default function Product({ number, title, text, direction }) {
  const classes = useStyles();
  return (
    <>
      {direction === "peer" ? (
        <div className={classes.product}>
          <div>
            <div className={classes.number}>{number}</div>
            <div className={classes.text}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
          <div className={classes.image}>
            <img src={mobileDots} alt="mobileDots" />
          </div>
        </div>
      ) : (
        <div className={classes.product}>
          <div className={classes.image}>
            <img src={mobileDots} alt="mobileDots" />
          </div>
          <div>
            <div className={classes.number}>{number}</div>
            <div className={classes.text} style={{ left: 0 }}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
