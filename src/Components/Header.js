import React from "react";
import {
  Button,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import logo from "./logo.jpg";
import "./Header.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "150px",
      height: "60px",
    },
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" className="LOGO" />
      </div>
      <div className="header__inputs">
        {/* Search */}

        <FormControl className={`search ${classes.root}`} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
          <OutlinedInput
            id="outlined-adornment-search"
            // value={inputSearch}
            // onChange={fetchRestaurant}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            labelWidth={60}
          />
        </FormControl>

        {/* Offers */}
        <FormControl className={`offers ${classes.root}`}>
          <Button
            variant="contained"
            color="default"
            startIcon={<LocalOfferIcon />}
          >
            Offers
          </Button>
        </FormControl>

        {/* Signup */}
        <FormControl className={`signup ${classes.root}`}>
          <Button
            variant="contained"
            color="default"
            startIcon={<LockOpenIcon />}
          >
            Signup
          </Button>
        </FormControl>

        {/* Cart */}
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
    </div>
  );
}

export default Header;
