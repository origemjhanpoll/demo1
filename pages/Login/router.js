import React from "react";
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

import Login from "./index";

const LoginRouter = () => {
  return (
    <Scene key="login" component={Login} title="Login" />
  );
};

export default LoginRouter;
