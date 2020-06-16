import React from "react";
import { createUseStyles } from "react-jss";
import * as variables from "../variables";

const useStyles = createUseStyles({
    header :{
        border: '1px dotted lightblue',
    }
});

export default function Header() {
  const classes = useStyles();
  return (
      <div className={classes.header}>
          <h1>Header</h1>
      </div>
  );
}
