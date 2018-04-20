import React, {Component} from "react";
import Typography from "material-ui/Typography";
import {Page, Login} from "firetower";

import {routes} from "../index";

export default class LoginPage extends Component {
  render() {
    return (
      <Page>
        <Login loggedInRedirect={routes.notes.path} />
      </Page>
    );
  }
}
