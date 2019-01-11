import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import indexRoutes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "assets/css/animate.min.css";
import "assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "assets/css/demo.css";
import "assets/css/pe-icon-7-stroke.css";

export default class Dashboard extends React.Component<any, any> {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          {indexRoutes.map((prop:any, key) => {
            return <Route to={prop.path} component={prop.component} key={key} />;
          })}
        </Switch>
      </BrowserRouter >
    )
  }
}