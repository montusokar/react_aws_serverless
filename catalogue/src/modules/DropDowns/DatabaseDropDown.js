import React, { Component } from "react";
import { connect } from "react-redux";

class DatabaseDropDown extends Component {
  render() {
    return (
      <select onChange={(e) => this.props.onChange("database")(e)}>
        <option value="None">None</option>
        {this.props.databases.map((database) => {
          return <option value={database.id}>{database.name}</option>;
        })}
      </select>
    );
  }
}

const mapStateToProps = (state) => {
  return { databases: state.databases };
};

export default connect(mapStateToProps)(DatabaseDropDown);
