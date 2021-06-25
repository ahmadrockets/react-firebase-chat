import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import firebase from "./../../helpers/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const auth = firebase.auth();

export default function ButtonAppBar() {
  const classes = useStyles();
  const [user] = useAuthState(auth);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            CHAT FAH
          </Typography>
          {user ? <Button onClick={()=>auth.signOut()} color="inherit">Logout</Button> : '' }
        </Toolbar>
      </AppBar>
    </div>
  );
}