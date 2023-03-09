import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "@mui/material";
import { NotificationContainer } from "react-notifications";

import { AppLayout } from "./components/layout/layout/app-layout";

import { UserProvider } from "./context/user-context";
import { getProfile } from "./store/actions";
import { useDispatch } from "react-redux";
// import use

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log("appuseEffect");
    dispatch(getProfile());
  }, []);
  return (
    // <UserProvider>
    <Suspense fallback={null}>
      <Container className="page-container">
        <Router>
          <AppLayout />
          <NotificationContainer />
        </Router>
      </Container>
    </Suspense>
    // </UserProvider>
  );
};
