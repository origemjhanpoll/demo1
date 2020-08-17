import React from "react";
import {
  Scene,
  Stack,
  Router,
} from "react-native-router-flux";

import Home from "./index";
import Screen1 from "../Animations/screen1"
import Screen2 from "../Animations/screen2"
import Screen3 from "../Animations/screen3"
import Screen4 from "../Animations/screen4"

const HomeRouter = () => {
  return (
    <Stack key="stackRoot" initial hideNavBar>
      <Scene key="home" component={Home} title="Home" />
      <Scene key="screen1" component={Screen1} title="Screen1" back hideNavBar={false} />
      <Scene key="screen2" component={Screen2} title="Screen2" back hideNavBar={false} />
      <Scene key="screen3" component={Screen3} title="Screen3" back hideNavBar={false} />
      <Scene key="screen4" component={Screen4} title="Screen4" back hideNavBar={false} />
    </Stack>
  );
};

export default HomeRouter;
