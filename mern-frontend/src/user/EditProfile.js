// import React, { useState, useEffect } from "react";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import Typography from "@material-ui/core/Typography";
// import Icon from "@material-ui/core/Icon";
// import { makeStyles } from "@material-ui/core/styles";
// import auth from "./../auth/auth-helper";
// import  {read}  from "./api-user.js";
// import { Redirect } from "react-router-dom";
// import {update} from "./api-user.js";


// const useStyles = makeStyles((theme) => ({
//   card: {
//     maxWidth: 600,
//     margin: "auto",
//     textAlign: "center",
//     marginTop: theme.spacing(5),
//     paddingBottom: theme.spacing(2),
//   },
//   title: {
//     marginTop: theme.spacing(2),
//     color: theme.palette.openTitle,
//   },
//   error: {
//     verticalAlign: "middle",
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 300,
//   },
//   submit: {
//     margin: "auto",
//     marginBottom: theme.spacing(2),
//   },
// }));

// const EditProfile = ({ match }) => {
//   const classes = useStyles();
//   const [values, setValues] = useState({
//     name: "",
//     password: "",
//     email: "",
//     open: false,
//     error: "",
//     redirectToProfile: false,
//   });
//   const jwt = auth.isAuthenticated();

//   useEffect(() => {
//     const abortController = new AbortController();
//     const signal = abortController.signal;
//     read({ userId: match.params.userId }, { t: jwt.token }, signal).then(
//       (data) => {
//         if (data && data.error) {
//           setValues({ ...values, error: data.error });
//         } else {
//           setValues({ ...values, name: data.name, email: data.email });
//         }
//       }
//     );
//     return function cleanup() {
//       abortController.abort();
//     };
//   }, [match.params.userId]);

//   const clickSubmit = () => {
//     const user = {
//       name: values.name || undefined,
//       email: values.email || undefined,
//       password: values.password || undefined,
//     };
//     update({ userId: match.params.userId },  jwt.token, user)
//     .then((data) => {
//         if (data && data.error) {
//           setValues({ ...values, error: data.error });
//         } else {
//           setValues({ ...values, userId: data._id, redirectToProfile: true });
//         }
//       }
//     );
//   };
//   const handleChange = (name) => (event) => {
//     setValues({ ...values, [name]: event.target.value });
//   };
//   if (values.redirectToProfile)
//     return (<Redirect to={"/user/" + values.userId} />);
//   return (
//     <Card className={classes.card}>
//       <CardContent>
//         <Typography variant="h6" className={classes.title}>
//           Edit Profile
//         </Typography>
//         <TextField
//           id="name"
//           label="Name"
//           className={classes.textField}
//           value={values.name}
//           onChange={handleChange("name")}
//         />
//         <br />
//         <TextField
//           id="email"
//           label="email"
//           className={classes.textField}
//           value={values.email}
//           onChange={handleChange("email")}
//         />
//         <br />
//         <TextField
//           id="password"
//           type="password"
//           label="password"
//           className={classes.textField}
//           value={values.password}
//           onChange={handleChange("password")}
//         />
//         <br />
//         {values.error && (
//           <Typography component="p" color="error">
//             <Icon color="error" className={classes.error}>
//               error
//             </Icon>
//             {values.error}
//           </Typography>
//         )}
//       </CardContent>
//       <CardActions>
//         <Button
//           color="primary"
//           variant="contained"
//           onClick={clickSubmit}
//           className={classes.submit}
//         >
//           Submit
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };
// export default EditProfile;
