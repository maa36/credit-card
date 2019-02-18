import React, { Component } from "react";
import ReactDOM from "react-dom";
import InputMask from "react-input-mask";

class Name extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <label className="name">Name</label>
        <input
          type="text"
          title="16 or less characters"
          onChange={this.props.writename}
        />
      </div>
    );
  }
}

export default Name;
