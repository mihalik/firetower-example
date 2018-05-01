import React, {Component} from "react";
import Composer from "react-composer";
import Typography from "material-ui/Typography";
import List from "material-ui/List";
import Button from "material-ui/Button";
import {Firestore, Page, Collection, User} from "firetower";

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
        <Composer components={[<Firestore />, <User />]}>
          {([firestore, user]) => (
            <div>
              <NewNote
                user={user}
                firestore={firestore}
                open={newNoteOpen}
                onClose={this.handleNewClose}
              />
              <Typography variant="display1" gutterBottom>
                Notes
              </Typography>
              <Button
                variant="raised"
                color="primary"
                onClick={this.handleNewOpen}
              >
                New note
              </Button>
              <Collection path={`/users/${user.uid}/notes`}>
                {data => (
                  <List>
                    {data.map(note => <Note key={note.id} note={note} />)}
                  </List>
                )}
              </Collection>
            </div>
          )}
        </Composer>
      </Page>
    );
  }
}
