import React, {Component} from "react";
import Composer from "react-composer";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {Link, Page, User, Document, DateFormat} from "firetower";

import {routes} from "../index";

export default class NoteDetails extends Component {
  render() {
    const noteid = 1;
    return (
      <Composer components={[<Page />, <User />]}>
        {([pageDetails, user]) => (
          <Document
            path={`/users/${user.uid}/notes/${pageDetails.match.params.noteId}`}
          >
            {document => (
              <div>
                <Button component={Link} to={routes.notes.path}>
                  <ArrowBackIcon />&nbsp; Back
                </Button>
                <Typography noWrap variant="display1">
                  {document.title}
                </Typography>
                <Typography variant="caption" gutterBottom>
                  <DateFormat date={document.created} />
                </Typography>
                <Typography variant="body1">{document.body}</Typography>
              </div>
            )}
          </Document>
        )}
      </Composer>
    );
  }
}
