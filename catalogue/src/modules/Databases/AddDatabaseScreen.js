import React, { Component } from "react";
import "./AddDatabaseStyle.css";
import { connect } from "react-redux";
import store from "../../redux/index";
import { addDatabase } from "../../redux/actions/index";
import ApplicationDropDown from "../DropDowns/ApplicationDropDown";
import ServerDropDown from "../DropDowns/ServerDropDown";

class AddDatabase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      database: {
        id: "",
        name: "",
        instance_name: "",
        application: "",
        server: "",
      },
      id: 0,
    };
    this.handle_input = this.__handle_input_fields.bind(this);
  }

  add_database(database) {
    let count = this.state.id;
    count++;
    this.setState({
      ...this.state,
      id: count,
    });
    database = { ...database, id: count };
    store.dispatch(addDatabase({ database }));
  }

  __handle_input_fields(field) {
    return (event) => {
      console.log("changing input " + field);
      this.setState({
        ...this.state,
        database: {
          ...this.state.database,
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
            name="Database Name"
            placeholder="Database Name"
            onChange={(e) => this.__handle_input_fields("name")(e)}
          />
        </td>
        <td>
          <input
            type="text"
            name="Instance name"
            placeholder="Instance name"
            onChange={(e) => this.__handle_input_fields("instance_name")(e)}
          />
        </td>
        <td>
          <ApplicationDropDown onChange={this.handle_input} />
        </td>
        <td>
          <ServerDropDown onChange={this.handle_input} />
        </td>
        <td>
          <button onClick={() => this.add_database(this.state.database)}>
            Add Database
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

export default connect(mapStateToProps)(AddDatabase);
