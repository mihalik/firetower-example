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
import {Formik} from "formik";

import {DateFormat} from "firetower";

export default class Note extends Component {
  handleSubmit = (values, {props, setSubmitting}) => {
    const {onClose, firestore, user} = this.props;
    firestore.collection(`users/${user.uid}/notes`).add({
      title: values.title,
      body: values.body,
      created: new Date().toISOString(),
    });
    onClose();
  };
  render() {
    const {open, onClose} = this.props;
    const initialValues = {title: "", body: ""};
    return (
      <Formik initialValues={initialValues} onSubmit={this.handleSubmit}>
        {({values, handleSubmit, handleChange}) => (
          <Dialog open={open} onClose={onClose}>
            <form onSubmit={handleSubmit}>
              <DialogContent>
                <DialogContentText>Create new note</DialogContentText>
                <TextField
                  required
                  name="title"
                  label="Title"
                  fullWidth
                  value={values.title}
                  onChange={handleChange}
                />
                <TextField
                  required
                  multiline
                  name="body"
                  label="Body"
                  fullWidth
                  value={values.body}
                  onChange={handleChange}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button type="submit" variant="raised" color="primary">
                  Save
                </Button>
              </DialogActions>
            </form>
          </Dialog>
        )}
      </Formik>
    );
  }
}
