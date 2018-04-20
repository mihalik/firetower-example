import React, {Component} from "react";
import Typography from "material-ui/Typography";
import {Page} from "firetower";

export default class NotFound extends Component {
  render() {
    return (
      <Page>
        <Typography variant="display1" gutterBottom>
          Custom four oh four page
        </Typography>
        <Typography variant="body1" gutterBottom>
          Oops.
        </Typography>
      </Page>
    );
  }
}
