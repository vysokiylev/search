import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import MainPage from "./main-page";

class Root extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={MainPage} />
      </Switch>
    );
  }
}

export default withRouter(Root);