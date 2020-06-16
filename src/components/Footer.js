import React from "react";
import { createUseStyles } from "react-jss";
import * as variables from "../variables";

const useStyles = createUseStyles({
    footer: {
        border: '1px dotted coral'
    }
});

export default function Footer() {
  const classes = useStyles();
  return (
      <div className={classes.footer}>
          <h2>footer</h2>
      </div>
  );
}
