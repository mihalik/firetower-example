import React, {Component} from "react";
import Typography from "material-ui/Typography";
import {ListItem, ListItemText} from "material-ui/List";
import {DateFormat, Link} from "firetower";

import {routes} from "../";

export default class Note extends Component {
  render() {
    const {note} = this.props;
    return (
      <ListItem>
        <ListItemText
          primary={note.title}
          secondary={<DateFormat date={note.created} />}
        />
        <Link to={routes.noteDetail.path.replace(":noteId", note.id)}>
          More...
        </Link>
      </ListItem>
    );
  }
}
