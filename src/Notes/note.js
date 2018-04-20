import React, {Component} from "react";
import Typography from "material-ui/Typography";
import {ListItem, ListItemText} from "material-ui/List";

import {DateFormat} from "firetower";

export default class Note extends Component {
  render() {
    const {note} = this.props;
    return (
      <ListItem>
        <ListItemText
          primary={note.id}
          secondary={<DateFormat date={note.created} />}
        />
      </ListItem>
    );
  }
}
