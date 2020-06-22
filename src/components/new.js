import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    something :{
        border: '1px dotted lightblue',
    }
});

export default function Something() {
  const classes = useStyles();
  return (
      <div className={classes.something}>
          {/* Something */}
      </div>
  );
}
