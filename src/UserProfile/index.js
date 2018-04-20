import React, {Component} from "react";
import Typography from "material-ui/Typography";
import {Page, User} from "firetower";

export default class UserProfile extends Component {
  render() {
    return (
      <Page>
        <Typography variant="display1" gutterBottom>
          User profile
        </Typography>
        <Typography variant="body1" gutterBottom>
          <User>{user => <span>{user.email}</span>}</User>
        </Typography>
      </Page>
    );
  }
}
