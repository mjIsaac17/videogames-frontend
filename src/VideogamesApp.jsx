import React from "react";
import AppRouter from "./routers/AppRouter";

import { Provider } from "react-redux";
import store from "./store";

const VideogamesApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default VideogamesApp;
