import React, {Component} from "react";
import Typography from "material-ui/Typography";
import {Page} from "firetower";

export default class Home extends Component {
  render() {
    return (
      <Page>
        <Typography variant="display1" gutterBottom>
          Firetower example application
        </Typography>
        <Typography variant="body1" gutterBottom>
          This is an example application build using Firetower.
        </Typography>
      </Page>
    );
  }
}
