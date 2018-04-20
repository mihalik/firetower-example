import React, {Component} from "react";
import Typography from "material-ui/Typography";
import List from "material-ui/List";
import Button from "material-ui/Button";
import {Page, Collection, User} from "firetower";

import Note from "./note";
import NewNote from "./newNote";

export default class Notes extends Component {
  state = {newNoteOpen: false};
  handleNewOpen = () => {
    this.setState({newNoteOpen: true});
  };
  handleNewClose = () => {
    this.setState({newNoteOpen: false});
  };
  render() {
    const {newNoteOpen} = this.state;
    return (
      <Page>
        <NewNote open={newNoteOpen} onClose={this.handleNewClose} />
        <Typography variant="display1" gutterBottom>
          Notes
        </Typography>
        <Button variant="raised" color="primary" onClick={this.handleNewOpen}>
          New note
        </Button>
        <User>
          {user => (
            <Collection path={`/users/${user.uid}/notes`}>
              {data => (
                <List>
                  {data.map(note => <Note key={note.id} note={note} />)}
                </List>
              )}
            </Collection>
          )}
        </User>
      </Page>
    );
  }
}
