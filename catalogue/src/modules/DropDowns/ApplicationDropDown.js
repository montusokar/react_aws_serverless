import React, { Component } from "react";
import { connect } from "react-redux";

class ApplicationDropDown extends Component {
  render() {
    return (
      <select onChange={(e) => this.props.onChange("application")(e)}>
        <option value="None">None</option>
        {this.props.applications.map((application) => {
          return <option value={application.id}>{application.name}</option>;
        })}
      </select>
    );
  }
}

const mapStateToProps = (state) => {
  return { applications: state.applications };
};

export default connect(mapStateToProps)(ApplicationDropDown);
