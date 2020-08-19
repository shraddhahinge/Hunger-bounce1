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
import { Link } from "react-router-dom";

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
      <Link to="/search" style={{ textDecoration: "none" }}>
        <FormControl className={`search ${classes.root}`}>
          <Button
            color="default"
            variant="contained"
            startIcon={<SearchIcon />}
            style={{ color: "var(--app-color)" }}
          >
            Search
          </Button>
        </FormControl>
      </Link>
    </div>
  );
}

export default Search;
