import React, { Component } from "react";
import "./DatabasesStyle.css";
import { connect } from "react-redux";
import AddDatabase from "./AddDatabaseScreen";
import Select from "react-select";

class Databases extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <div id="Table">
            <table className="table">
              <thead>
                <tr className="td">
                  <th className="th">server id</th>
                  <th className="th">name</th>
                  <th className="th">instance</th>
                  <th className="th">application</th>
                  <th className="th">server</th>
                  <th className="th">action</th>
                </tr>
              </thead>

              <tbody>
                <AddDatabase />
                {this.props.databases.map((database) => (
                  <tr key={database.id}>
                    <td>{database.id}</td>
                    <td>{database.name}</td>
                    <td>{database.instance_name}</td>
                    <td>{database.application}</td>
                    <td>{database.server}</td>
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
  return { databases: state.databases };
};

export default connect(mapStateToProps)(Databases);
