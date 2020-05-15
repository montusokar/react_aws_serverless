import React, { Component } from "react";
import "./ApplicationsStyle.css";
import { connect } from "react-redux";
import AddApplication from "./AddApplicationScreen";
import Select from "react-select";

class Applications extends Component {
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
                  <th className="th">type</th>
                  <th className="th">stack</th>
                  <th className="th">version</th>
                  <th className="th">server</th>
                  <th className="th">database</th>
                  <th className="th">action</th>
                </tr>
              </thead>

              <tbody>
                <AddApplication />
                {this.props.applications.map((application) => (
                  <tr key={application.id}>
                    <td>{application.id}</td>
                    <td>{application.name}</td>
                    <td>{application.type}</td>
                    <td>{application.stack}</td>
                    <td>{application.version}</td>
                    <td>{application.server}</td>
                    <td>{application.database}</td>

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
  return {
    applications: state.applications,
  };
};

export default connect(mapStateToProps)(Applications);
