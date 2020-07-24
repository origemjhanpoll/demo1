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

import LoginRouter from "../pages/Login/router";
import HomeRouter from "../pages/Home/router";

const Routers = () => {
  return (
    <Router>
      <Stack key="root">
        {LoginRouter()}
        {HomeRouter()}
      </Stack>
    </Router>
  );
};

export default Routers;
