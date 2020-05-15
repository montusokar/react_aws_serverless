import React, { Component } from "react";
import "./AddApplicationStyle.css";
import { connect } from "react-redux";
import store from "../../redux/index";
import { addApplication } from "../../redux/actions/index";
import DatabaseDropDown from "../DropDowns/DatabaseDropDown";
import ServerDropDown from "../DropDowns/ServerDropDown";

class AddApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      application: {
        id: "",
        name: "",
        type: "",
        stack: "",
        version: "",
        server: "",
        database: "",
      },
      id: 0,
    };
    this.handle_input = this.handle_input_fields.bind(this);
  }
  state = {};

  add_application(application) {
    let count = this.state.id;
    count++;
    this.setState({
      ...this.state,
      id: count,
    });
    application = { ...application, id: count };
    store.dispatch(addApplication({ application }));
  }

  handle_input_fields(field) {
    return (event) => {
      console.log("changing input " + field);
      this.setState({
        ...this.state,
        application: {
          ...this.state.application,
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
            name="Id"
            placeholder="Id"
            value={this.state.id + 1}
            disabled={true}
          />
        </td>
        <td>
          <input
            type="text"
            name="Application Name"
            placeholder="Application Name"
            onChange={(e) => this.handle_input_fields("name")(e)}
          />
        </td>
        <td>
          <input
            type="text"
            name="Application Type"
            placeholder="Application Type"
            onChange={(e) => this.handle_input_fields("type")(e)}
          />
        </td>
        <td>
          <input
            type="text"
            name="Stack"
            placeholder="Stack"
            onChange={(e) => this.handle_input_fields("stack")(e)}
          />
        </td>
        <td>
          <input
            type="text"
            name="Version"
            placeholder="Version"
            onChange={(e) => this.handle_input_fields("version")(e)}
          />
        </td>
        <td>
          <ServerDropDown onChange={this.handle_input} />
        </td>
        <td>
          <DatabaseDropDown onChange={this.handle_input} />
        </td>
        <td>
          <button onClick={() => this.add_application(this.state.application)}>
            Add Application
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    servers: state.servers,
    applications: state.applications,
    databases: state.databases,
  };
};

export default connect(mapStateToProps)(AddApplication);
