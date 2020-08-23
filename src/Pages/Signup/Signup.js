import React from "react";
import { Button, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { useStateValue } from "./../../StateProvider";
import { auth } from "./../../fireauth";
import "./Signup.css";

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
  const [{ user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
    function cor(){
    let np = [];
    for(let i of user.email){
      if(i === "@")
        break;
      np.push(i);
    }
    return (np);
  }

  return (
    <div className="signup">
      <Link to={!user && "/login"} className="signup_link">
        {!user ? (
          <FormControl className={`signup ${classes.root}`}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<LockOpenIcon />}
            >
              Signup
            </Button>
          </FormControl>
        ) : (
          <div onClick={login} className="signup_option">
            <span className="signup_optionLineOne">{cor()} </span>
            <span className="signup_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        )}
      </Link>
    </div>
  );
}

export default Signup;
