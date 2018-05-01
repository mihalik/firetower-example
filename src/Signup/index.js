import React, {Component} from "react";
import Typography from "material-ui/Typography";
import {Page, Signup, Link} from "firetower";

import {routes} from "../";

export default class SignupPage extends Component {
  render() {
    return (
      <Page>
        <Signup
          nextPage={routes.notes.path}
          renderTerms={
            <Typography variant="caption">
              By signing up you agree to the Firetower Test App{" "}
              <Link as="a" href="https://example.com/terms" target="_blank">
                terms of service.
              </Link>
            </Typography>
          }
        />
      </Page>
    );
  }
}
