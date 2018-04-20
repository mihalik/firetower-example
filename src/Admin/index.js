import React, {Component} from "react";
import Typography from "material-ui/Typography";
import {Page} from "firetower";

export default class Admin extends Component {
  render() {
    return (
      <Page>
        <Typography variant="display1" gutterBottom>
          Admin
        </Typography>
        <Typography variant="body1" gutterBottom>
          Some admin stuff here
        </Typography>
      </Page>
    );
  }
}
