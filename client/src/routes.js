import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import DetailsPage from "./pages/details";
import MapPage from "./pages/map";
import DashboardPage from "./pages/dashboard";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Routes = () => (
  <Switch>
    <Route exact path="/" component={LoginPage} />
    <Route path="/details" component={DetailsPage} />
    <Route path="/map" component={MapPage} />
    <Route path="/dashboard" component={DashboardPage} />
  </Switch>
);

export default Routes;
