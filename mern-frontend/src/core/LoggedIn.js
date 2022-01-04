// import React from "react";
// import Card from "@material-ui/core/Card";
// import Button from "@material-ui/core/Button";
// import auth from "./../auth/auth-helper";
// import { Link, withRouter } from "react-router-dom";
// import Typography from "@material-ui/core/Typography";

// console.log("loggedin is ok");

// const LoggedIn = ({ history }) => {

//     return (
//     <Card>
//       {auth.isAuthenticated() && (
//         <span>
//           <h1>Welcome!</h1>
//           <Typography variant="h6" color="inherit">
//             You are now logged in
//           </Typography>
//           <Button
//             color="secondary"
//             variant="contained"
//             onClick={() => {
//               auth.clearToken(() => history.push("/"));
//             }}
//           >
//             Logout
//           </Button>
//         </span>
//       )}
//     </Card>
//     );
// };
// export default LoggedIn;
{/*
 import React from "react";
 import Card from "@material-ui/core/Card";
 import CardActions from "@material-ui/core/CardActions";
 import CardContent from "@material-ui/core/CardContent";
 import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
 import auth from "./../auth/auth-helper";

 const isActive = (history, path) =>
 history.location.pathname == path
    ? { color: "#ff4081" }
     : { color: "#ffffff" };

 const useStyles = makeStyles((theme) => ({
   card: {
     maxWidth: 600,
     margin: "auto",
    textAlign: "center",
     marginTop: theme.spacing(5),
     paddingBottom: theme.spacing(2),
   },
   error: {
     verticalAlign: "middle",
  },
   title: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle,
   },
   textField: {
     marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
     width: 300,
   },
  submit: {
    margin: "auto",
    marginBottom: theme.spacing(2),
  },
 }));

 const LoggedIn = ({history}) => {
  const classes = useStyles();
  
   

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    read({ userId: match.params.userId }, { t: jwt.token }, signal)
    .then((data) => {
        if (data && data.error) {
          setRedirectToSignin(true);
        } else {
          setUser(data);
         console.log(data);
        }
      }
     );
    return function cleanup() {
      abortController.abort();
     };
   }, [match.params.userId]);

if (redirectToSignin) return <Redirect to="/signin" />;

   return (
     <Card className={classes.card}>
       <CardActions>
       <CardContent>
         <Typography variant="h4" className={classes.title}>
          Welcome! You are logged in!
         </Typography>
         <Link to="/loggedin">
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
        </CardContent>
      </CardActions>
    </Card>
  );
};
 export default LoggedIn;*/}
