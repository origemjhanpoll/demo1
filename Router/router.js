import React from "react";
import { Platform, StyleSheet, Text } from "react-native";
import {
  Scene,
  Router,
  Actions,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from "react-native-router-flux";

import Login from "../pages/Login";
import Home from "../pages/Home";

const Routers = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="login" component={Login} title="Login" />
        <Scene key="home" component={Home} title="Home" />
      </Stack>
    </Router>
  );
};

export default Routers;
