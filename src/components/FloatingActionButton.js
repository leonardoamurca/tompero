import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: 20,
    right: 20,
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function FloatingActionButton({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab color="primary" variant="extended">
        {children}
      </Fab>
    </div>
  );
}

export default FloatingActionButton;
