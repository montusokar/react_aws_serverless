import React, { Component } from "react";
import { connect } from "react-redux";

class ServerDropDown extends Component {
  render() {
    return (
      <select onChange={(e) => this.props.onChange("server")(e)}>
        <option value="None">None</option>
        {this.props.servers.map((server) => {
          return <option value={server.id}>{server.name}</option>;
        })}
      </select>
    );
  }
}

const mapStateToProps = (state) => {
  return { servers: state.servers };
};

export default connect(mapStateToProps)(ServerDropDown);
