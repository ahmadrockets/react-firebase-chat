import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import firebase from './../../helpers/Firebase';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10
  },
  chatRight: {
    padding: 20,
    backgroundColor: '#3f51b5',
    display: 'inline-block',
    color: '#fff',
    borderRadius: '20px',
    textAlign: 'right'
  },
  chatLeft: {
    padding: 20,
    backgroundColor: '#9e9e9e',
    display: 'inline-block',
    color: '#fff',
    borderRadius: '20px',
    textAlign: 'left'
  }
}));


export default function Chat(props) {
  const classes = useStyles();
  const auth = firebase.auth();
  const {text, uid, photoURL} = props.message

  const messageClass = uid === auth.currentUser.uid ? classes.chatRight : classes.chatLeft;
  return (
    <ListItem>
      <ListItemAvatar>
        <center>
          <Avatar
            alt={`Avatar n°1`}
            src={photoURL}
          />
        </center>
      </ListItemAvatar>
      <ListItemText className={messageClass} primary={text} />
    </ListItem>
  )
}