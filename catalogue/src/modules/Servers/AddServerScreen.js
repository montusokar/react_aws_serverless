import React, { Component } from "react";
import "./AddServerStyle.css";
import { connect } from "react-redux";
import store from "../../redux/index";
import { addServer } from "../../redux/actions/index";

class AddServer extends Component {
  state = {
    server: {
      id: "",
      name: "",
      domain_name: "",
      host_name: "",
      model: "",
      os: "",
      memory: "",
      disk: "",
    },
    id: 0,
  };

  add_server(server) {
    let count = this.state.id;
    count++;
    this.setState({
      ...this.state,
      id: count,
    });
    server = { ...server, id: count };
    store.dispatch(addServer({ server }));
  }

  handle_input_fields(field) {
    return (event) => {
      console.log("changing input " + field);
      this.setState({
        ...this.state,
        server: {
          ...this.state.server,
          [field]: event.target.value,
        },
      });
    };
  }

  render() {
    return (
      <tr key={this.state.id}>
        <td>
          <input
            type="text"
            name="Server Name"
            placeholder="Server Name"
            value={this.state.id + 1}
            disabled={true}
          />
        </td>
        <td>
          <input
            type="text"
            name="Server Name"
            placeholder="Server Name"
            value={this.state.task}
            onChange={(e) => this.handle_input_fields("name")(e)}
          />
        </td>
        <td>
          <input
            type="text"
            name="Domain Name"
            placeholder="Domain Name"
            value={this.state.task}
            onChange={(e) => this.handle_input_fields("domain_name")(e)}
          />
        </td>
        <td>
          <input
            type="text"
            name="Host Name"
            placeholder="Host Name"
            value={this.state.task}
            onChange={(e) => this.handle_input_fields("host_name")(e)}
          />
        </td>
        <td>
          <input
            type="text"
            name="Model"
            placeholder="Model"
            value={this.state.task}
            onChange={(e) => this.handle_input_fields("model")(e)}
          />
        </td>
        <td>
          <input
            type="text"
            name="OS"
            placeholder="OS"
            value={this.state.task}
            onChange={(e) => this.handle_input_fields("os")(e)}
          />
        </td>
        <td>
          <input
            type="text"
            name="Memory"
            placeholder="Memory"
            value={this.state.task}
            onChange={(e) => this.handle_input_fields("memory")(e)}
          />
        </td>
        <td>
          <input
            type="text"
            name="Disk"
            placeholder="Disk"
            value={this.state.task}
            onChange={(e) => this.handle_input_fields("disk")(e)}
          />
        </td>
        <td>
          <button onClick={() => this.add_server(this.state.server)}>
            Add Server
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => {
  return { servers: state.servers };
};

export default connect(mapStateToProps)(AddServer);
