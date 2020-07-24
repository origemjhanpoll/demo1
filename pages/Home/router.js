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

import Home from "./index";

const HomeRouter = () => {
  return (
    <Scene key="home" component={Home} title="Home" initial />
  );
};

export default HomeRouter;
