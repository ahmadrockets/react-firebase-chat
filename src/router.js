import React from "react";
import MainLayout from "./layouts/MainLayout";
import ChatBox from "./containers/ChatBox";
import Login from "./containers/Login";
import firebase from './helpers/Firebase';
import { useAuthState } from "react-firebase-hooks/auth";


const auth = firebase.auth();

function Router(props) {
  const [user] = useAuthState(auth);
  
  return(
    <>
      <MainLayout>
        {user ? <ChatBox /> : <Login />}
      </MainLayout>
    </>
  )
}
export default Router;