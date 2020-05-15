import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./redux/index";
import Home from "./modules/Home/HomeScreen";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
