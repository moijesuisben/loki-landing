import React from "react";
import { createUseStyles } from "react-jss";
import background from "../media/backgroundAbout.png";

const useStyles = createUseStyles({
  container: {
    // border: "1px dotted lightblue",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > h2": {
      fontSize: "calc(18px + (40 - 18) * ((100vw - 320px) / (1920 - 320)))",
      fontWeight: 800,
      letterSpacing: 1.4,
      textAlign: "center",
      textTransform: "uppercase",
      marginBottom:
        "calc(50px + (135 - 50) * ((100vw - 320px) / (1920 - 320)))",
    },
    "& > p": {
      maxWidth: "calc(219px + (660 - 219) * ((100vw - 320px) / (1920 - 320)))",
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1.67,
      letterSpacing: 1.4,
    },
  },
  background: {
    position: "absolute",
    left: 0,
    zIndex: -1,
    marginTop: '-170px',
  },
});

export default function About() {
  const classes = useStyles();
  return (
    <>
      <img src={background} alt="background" className={classes.background} />
      <div className={classes.container}>
        <h2 className={classes.title}>À propos de nous</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper
          dignissim orci sed varius. Nam aliquam tortor neque, in commodo ante
          pulvinar in. Maecenas blandit vulputate tortor, in venenatis urna
          interdum a. In hac habitasse platea dictumst. Pellentesque at justo
          sollicitudin, sodales tellus in, maximus ligula. Suspendisse at justo
          imperdiet, ullamcorper dolor eget, tincidunt orci. Phasellus ultrices
          vel velit id tempor. Curabitur tempus odio non est tincidunt,
          ullamcorper porta dui feugiat. Donec quis tincidunt nibh. Aenean at
          nulla bibendum, dignissim est egestas, consequat mauris. Aliquam
          imperdiet libero et sapien venenatis porttitor. Vivamus purus urna,
          fringilla vel pretium id, tristique ac elit. Vivamus sit amet volutpat
          lorem. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Ut quis erat porta nibh fermentum
          egestas. Nulla rutrum lobortis sem a egestas.
        </p>
      </div>
    </>
  );
}
