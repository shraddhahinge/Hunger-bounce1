import React from "react";
import { Button, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "150px",
      height: "60px",
    },
  },
}));

function Cart() {
  const classes = useStyles();
  return (
    <div>
      <FormControl className={`cart ${classes.root}`}>
        <Button
          variant="contained"
          color="default"
          startIcon={<ShoppingCartIcon />}
        >
          Cart
        </Button>
      </FormControl>
    </div>
  );
}

export default Cart;
