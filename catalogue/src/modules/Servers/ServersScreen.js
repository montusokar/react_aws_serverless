import React, { Component } from "react";
import "./ServersScreen.css";
import { connect } from "react-redux";
import store from "../../redux/index";
import { addServer } from "../../redux/actions/index";
import AddServer from "./AddServerScreen";
import Select from "react-select";

class Servers extends Component {
  state = {
    id: 1,
  };

  addServerFromHome(server) {
    let count = this.state.id;
    count++;
    this.setState({
      id: count,
    });
    store.dispatch(addServer({ server }));
  }

  render() {
    this.props.servers.map((server) => {
      console.log(server);
    });
    return (
      <div className="Home">
        <header className="Home-header">
          <div id="Table">
            <table className="table">
              <thead>
                <tr className="td">
                  <th className="th">server id</th>
                  <th className="th">name</th>
                  <th className="th">domain</th>
                  <th className="th">host</th>
                  <th className="th">model</th>
                  <th className="th">os</th>
                  <th className="th">memory</th>
                  <th className="th">disk</th>
                  <th className="th">action</th>
                </tr>
              </thead>

              <tbody>
                <AddServer />
                {this.props.servers.map((server) => (
                  <tr key={server.id}>
                    <td>{server.id}</td>
                    <td>{server.name}</td>
                    <td>{server.domain_name}</td>
                    <td>{server.host_name}</td>
                    <td>{server.model}</td>
                    <td>{server.os}</td>
                    <td>{server.memory}</td>
                    <td>{server.disk}</td>
                    <td>
                      <Select options={options} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </header>
      </div>
    );
  }
}

const options = [
  { value: "edit", label: "Edit" },
  { value: "delete", label: "Delete" },
];

const mapStateToProps = (state) => {
  return { servers: state.servers };
};

export default connect(mapStateToProps)(Servers);
