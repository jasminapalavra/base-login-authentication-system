import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import {create} from "./api-user";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Link } from "react-router-dom";

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

const Signup = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    password: "",
    passwordConfirm: "",
    email: "",
    open: false,
    error: "",
  });
  

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const clickSubmit = () => {
    if(!values.password){
    setValues({...values, error: "Please register"})
  
   // if(values.password.length < 6){
    //  setValues({...values, error: "Password must be 6 characters long"})
    } else {
      if(values.password === values.passwordConfirm){
        const user = {
          name: values.name || undefined,
          email: values.email || undefined,
          password: values.password || undefined,
          passwordConfirm: values.passwordConfirm || undefined
        };
       
        create(user).then((data) => {
          if (data.error) {
            setValues({ ...values, error: data.error });
          } else {
           
              setValues({ ...values, error: "", open: true });
            
          }
          
          
        });
        setValues({...values, error: "", open: true})
      } else {
        setValues({...values, error: 'Passwords do NOT match'})
      }
    }
    
  };

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            Register
          </Typography>
          <br/>
          <div>
          <Typography variant="h7">  
            Already have an account? <a href="http://localhost:3000/signin">Log in</a></Typography>
            </div>
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            value={values.name}
            onChange={handleChange("name")}
            margin="normal"
          />
          <br />

          <TextField
            id="email"
            type="email"
            label="Email"
            className={classes.textField}
            value={values.email}
            onChange={handleChange("email")}
            margin="normal"
          />
          <br />

          <TextField
            id="password"
            type="password"
            label="Password"
            className={classes.textField}
            value={values.password}
            onChange={handleChange("password")}
            margin="normal"
          />
          <br />
    <TextField
      id='passwordConfirm'
      type='password'
      label='Password confirm'
      className={classes.textField}
      value={values.passwordConfirm}
      onChange={handleChange("passwordConfirm")}
            margin="normal"
     />
          {values.error && (
            <Typography component="p" color="error">
              <Icon color="error" className={classes.error}>
                error
              </Icon>
              {values.error}
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            onClick={clickSubmit}
            className={classes.submit}
          >
            Submit
          </Button>
          
        </CardActions>
      </Card>

      <Dialog open={values.open}>
        <DialogTitle>New Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            New account successfully created.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/signin">
            <Button color="primary" autoFocus="autoFocus">
              Log In
            </Button>
          </Link>
          
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default Signup;