import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import firebase from './../../helpers/Firebase';

const useStyles = makeStyles((theme) => ({
  buttonLogin: {
    marginTop: 50
  }
}));

const auth = firebase.auth();
const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
}

export default function Login() {
  const classes = useStyles();
  return (
    <center>
      <Button onClick={signInWithGoogle} className={classes.buttonLogin} variant="contained" size="large" color="primary">Login</Button>
    </center>
  );
}