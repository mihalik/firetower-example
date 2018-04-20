import React, {Component} from "react";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import {ListItem, ListItemText} from "material-ui/List";
import Dialog, {
  DialogContent,
  DialogContentText,
  DialogActions,
} from "material-ui/Dialog";

import {DateFormat} from "firetower";

export default class Note extends Component {
  render() {
    const {open, onClose} = this.props;
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogContent>
          <DialogContentText>Create new note</DialogContentText>
          <TextField />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    );
  }
}
