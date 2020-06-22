import React from "react";
import { createUseStyles } from "react-jss";
import mobileDots from "../media/mobileDots.png";
import Product from "./Product";

const useStyles = createUseStyles({
  container: {
    // border: '1px dotted lightblue',
    marginTop: "calc(100px + (235 - 100) * ((100vw - 320px) / (1920 - 320)))",
  },
  title: {
    fontSize: "calc(18px + (40 - 18) * ((100vw - 320px) / (1920 - 320)))",
    fontWeight: 800,
    letterSpacing: 0.4,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default function HowItWork() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {/* Something */}
      <h2 className={classes.title}>Comment ça marche</h2>
      <Product
        direction="peer"
        number="1"
        title="Lorem Ipsum"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris
            rhoncus aenean vel elit scelerisque mauris. Integer enim neque
            volutpat ac tincidunt. Pretium viverra suspendisse potenti nullam
            ac. Accumsan tortor posuere ac ut consequat."
      />
      <Product
        number="2"
        title="Lorem Ipsum"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris
            rhoncus aenean vel elit scelerisque mauris. Integer enim neque
            volutpat ac tincidunt. Pretium viverra suspendisse potenti nullam
            ac. Accumsan tortor posuere ac ut consequat."
      />
      <Product
        direction="peer"
        number="3"
        title="Lorem Ipsum"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris
            rhoncus aenean vel elit scelerisque mauris. Integer enim neque
            volutpat ac tincidunt. Pretium viverra suspendisse potenti nullam
            ac. Accumsan tortor posuere ac ut consequat."
      />
    </div>
  );
}
