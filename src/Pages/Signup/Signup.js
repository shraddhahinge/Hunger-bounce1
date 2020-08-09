import React from "react";
import { Button, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import LockOpenIcon from "@material-ui/icons/LockOpen";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "150px",
      height: "60px",
    },
  },
}));

function Signup() {
  const classes = useStyles();
  return (
    <div>
      <FormControl className={`signup ${classes.root}`}>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<LockOpenIcon />}
        >
          Signup
        </Button>
      </FormControl>
    </div>
  );
}

export default Signup;
