import React from "react";
import ReactDOM from "react-dom";
import {registerServiceWorker, Firetower} from "firetower";
import AssignmentIcon from "@material-ui/icons/Assignment";
import HomeIcon from "@material-ui/icons/Home";
import LockIcon from "@material-ui/icons/Lock";
import HelpIcon from "@material-ui/icons/Help";
import Typography from "material-ui/Typography";

import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Notes from "./Notes";
import NoteDetails from "./NoteDetails";
import Admin from "./Admin";
import UserProfile from "./UserProfile";
import NotFound from "./NotFound";

const renderPageTitle = () => {
  return <Typography color="inherit">Firetower Example</Typography>;
};

export const routes = {
  home: {
    path: "/",
    display: "Home",
    exact: true,
    component: Home,
    icon: HomeIcon,
  },
  login: {
    path: "/login",
    component: Login,
    hideFromMenu: true,
  },
  signup: {
    path: "/signup",
    component: Signup,
    hidePageChrome: true,
    hideFromMenu: true,
  },
  notes: {
    path: "/notes",
    display: "Notes",
    icon: AssignmentIcon,
    component: Notes,
    requiresAuth: true,
  },
  noteDetail: {
    path: "/notes/:noteId",
    component: NoteDetails,
    hideFromMenu: true,
    requiresAuth: true,
  },
  admin: {
    path: "/admin",
    display: "Admin",
    icon: LockIcon,
    component: Admin,
    requiresAdmin: true,
  },
  userProfile: {
    path: "/profile",
    display: "Profile",
    component: UserProfile,
    isUserMenu: true,
    requiresAuth: true,
  },
  docs: {
    display: "Documentation",
    icon: HelpIcon,
    externalLink: "https://github.com/mihalik/firetower",
  },
};

ReactDOM.render(
  <Firetower
    routes={routes}
    renderPageTitle={renderPageTitle}
    pageNotFound={NotFound}
    defaultPage="home"
  />,
  document.getElementById("root")
);
registerServiceWorker();
