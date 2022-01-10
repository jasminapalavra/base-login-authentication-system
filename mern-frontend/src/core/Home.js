import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import auth from "./../auth/auth-helper";
import { Link, withRouter } from "react-router-dom";
import { CardActions } from "@material-ui/core";

const isActive = (history, path) =>
  history.location.pathname == path
    ? { color: "#ff4081" }
    : { color: "#ffffff" };

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    flexWrap: "wrap",
    textAlign: "center",
  },
  card: {
    maxWidth: 700,
    maxHeight: 700,
    margin: "auto",
    textAlign: "center",
    marginTop: 150,
  },
  title: {
    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px 
        ${theme.spacing(2)}px`,
    color: theme.palette.openTitle,
    textAlign: "center",
  },
  name: {
    color: "blue",
  },
  media: {
    minHeight: 400,
  },
  submit: {
    marginLeft: 20,
    marginBottom: 30,
  },
}));

const Home = ({ history }) => {
  const classes = useStyles();

  setTimeout(() => {
    auth.clearToken(() => history.push("/signin"));
  }, 1200000);

  const myInfo = JSON.parse(sessionStorage.getItem("token"));

  return (
    <Card className={classes.card}>
      <CardActions style={{ width: "100%" }}>
        <CardContent style={{ width: "100%", marginTop: 20 }}>
          <CardMedia>
            {!auth.isAuthenticated() && (
              <div>
                <Typography
                  variant="h4"
                  align="center"
                  style={{ width: "100%" }}
                  className={classes.title}
                >
                  Welcome to Base Login Page
                </Typography>
                <br />
                <br />
                <Link to="/signin">
                  <Button
                    color="primary"
                    variant="contained"
                    // onClick={clickSubmit}
                    //onClick={() => signin()}
                    className={classes.submit}
                  >
                    Log In
                  </Button>
                </Link>

                <Link to="/signup">
                  <Button
                    color="secondary"
                    variant="contained"
                    // onClick={clickSubmit}
                    className={classes.submit}
                    style={isActive(history, "/signup")}
                  >
                    Register
                  </Button>
                </Link>
              </div>
            )}
            {auth.isAuthenticated() && (
              <div>
                <Typography variant="h4" className={classes.title}>
                  Welcome {myInfo.user.name} !{" "}
                  <p style={{ fontSize: "18px" }}> You are logged in!</p>
                </Typography>
                <Link to="/">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      auth.clearToken(() => history.push("/"));
                    }}
                  >
                    Sign out
                  </Button>
                </Link>
              </div>
            )}
          </CardMedia>
        </CardContent>
      </CardActions>
    </Card>
  );
};

export default withRouter(Home);
