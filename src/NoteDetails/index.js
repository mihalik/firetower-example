import React, {Component} from "react";
import Typography from "material-ui/Typography";
import {Page} from "firetower";

export default class NoteDetails extends Component {
  render() {
    return (
      <Page>
        <Typography variant="display1" gutterBottom>
          Notes
        </Typography>
        <Typography variant="body1" gutterBottom>
          Notes page goes here.
        </Typography>
      </Page>
    );
  }
}
