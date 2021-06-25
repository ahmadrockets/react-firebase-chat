import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BodyChat from "../../components/BodyChat";
import FooterChat from "../../components/FooterChat";


const useStyles = makeStyles((theme) => ({
  bodyChat: {
    height: '79vh',
    paddingLeft: '0px !important',
    paddingRight: '0px !important'
  },
  bottomChat: {
    height: '10vh',
    backgroundColor: '#fff'
  },
}));

export default function ChatBox() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.bodyChat} >
        <div className={classes.divChat}>
          <BodyChat />
        </div>
      </div>
      <div className={classes.bottomChat}>
        <FooterChat />
      </div>
    </>
  );
}