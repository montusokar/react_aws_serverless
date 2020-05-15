import React, { Component } from "react";
import "./HomeScreen.css";
import { connect } from "react-redux";
import store from "../../redux/index";
import { addServer } from "../../redux/actions/index";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Servers from "../Servers/ServersScreen";
import Applications from "../Applications/ApplicationsScreen";
import Databases from "../Databases/DatabasesScreen";

class Home extends Component {
  addServerFromHome() {
    store.dispatch(addServer({ id: 1, name: "server1" }));
  }

  render() {
    return (
      <>
        <h1>Enterprise Catalogue</h1>
        <Tabs>
          <TabList>
            <Tab>Servers</Tab>
            <Tab>Applications</Tab>
            <Tab>Databases</Tab>
          </TabList>

          <TabPanel>
            <h2>
              <Servers />
            </h2>
          </TabPanel>
          <TabPanel>
            <h2>
              <Applications />
            </h2>
          </TabPanel>
          <TabPanel>
            <h2>
              <Databases />
            </h2>
          </TabPanel>
        </Tabs>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { servers: state.servers };
};

export default connect(mapStateToProps)(Home);
