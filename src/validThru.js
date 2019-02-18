import React, { Component } from "react";
import ReactDOM from "react-dom";
import InputMask from "react-input-mask";

class ValidThru extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <label className="valid">validThru</label>
        <InputMask
          mask="99/99"
          maskChar={"*"}
          type="text"
          maxlength={this.props.number}
          onChange={this.props.writeValidThru}
        />
      </div>
    );
  }
}

export default ValidThru;
