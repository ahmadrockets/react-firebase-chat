import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import firebase from './../../helpers/Firebase';


const useStyles = makeStyles((theme) => ({
  root:{
    marginTop:5
  },
  sendButton: {
    margin: theme.spacing(1),
    float: 'right',
    height:'100%',
    marginTop:0,
    width:'100%'
  },
  gridChatBox:{
    paddingLeft:10,
    paddingRight:10
  },
  textField:{
    borderRadius:'50px'
  }
}));


export default function FooterChat() {
  const classes = useStyles();
  const [formValue, setFormValue] = React.useState("");
  
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const messageRef = firestore.collection('messages');
  
  const sendMessage = async(e)=>{
    const {uid, photoURL} = auth.currentUser;
    setFormValue('');
    await messageRef.add({
      text:formValue,
      createdAt:firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })
  }

  return(
    <div>
      <Grid container className={classes.root}>
        <Grid item xs={10} className={classes.gridChatBox}>
          <TextField value={formValue} onChange={(e)=>setFormValue(e.target.value)} placeholder="Type a message" className={classes.textField} variant="outlined" fullWidth={true} />
        </Grid>
        <Grid item xs={2}>
          <Button
            onClick={sendMessage}
            variant="contained"
            color="primary"
            size="large"
            className={classes.sendButton}
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}