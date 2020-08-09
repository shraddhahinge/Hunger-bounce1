import React from "react";
import {
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "150px",
      height: "60px",
    },
  },
}));

function Search() {
  const classes = useStyles();
  return (
    <div>
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
    </div>
  );
}

export default Search;
