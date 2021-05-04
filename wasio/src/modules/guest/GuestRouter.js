import React from "react";
import { Route, Switch } from "react-router-dom";
import GuestHeader from "./components/GuestHeader";
import HomePageScreen from "./pages/HomePage/HomePageScreen";


const GuestRouter = () => {
  return (
    <>
      <GuestHeader />
      <Switch>
        <Route path="/">
          <HomePageScreen />
        </Route>
      </Switch>
    </>
  );
};

export default GuestRouter;
