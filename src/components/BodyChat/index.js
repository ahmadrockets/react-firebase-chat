import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Chat from "../Chat";

import firebase from './../../helpers/Firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const useStyles = makeStyles((theme) => ({
  root: {
    padding:10
  },
  chatRight:{
    padding:20,
    backgroundColor:'#3f51b5',
    display: 'inline-block',
    color:'#fff',
    borderRadius:'20px',
    textAlign:'right'
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

const firestore = firebase.firestore();

export default function BodyChat() {
  const classes = useStyles();

  const messageRef = firestore.collection('messages');
  const query = messageRef.orderBy('createdAt').limit(25);
  
  const [messages] = useCollectionData(query, {idField:'id'});
  
  return(
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {
          messages && messages.map(msg=>
            <Chat key={msg.id} message={msg} />
          )
        }
      </List>
    </div>
  )
}