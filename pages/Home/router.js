import React from "react";
import {
  Scene,
  Stack,
  Router,
} from "react-native-router-flux";

import Home from "./index";
import Animation1 from "../Animations/animation1"

const HomeRouter = () => {
  return (
    <Stack key="stackRoot" initial hideNavBar>
      <Scene key="home" component={Home} title="Home" />
      <Scene key="animation1" component={Animation1} title="Animation1" back hideNavBar={false} />
    </Stack>
  );
};

export default HomeRouter;
