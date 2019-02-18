import React, { Component } from "react";
import ReactDOM from "react-dom";
import InputMask from "react-input-mask";

class Holder extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <label className="holder">Holder</label>
        <InputMask
          mask="9999 9999 9999 9999"
          maskChar={"*"}
          onChange={this.props.write}
        />
      </div>
    );
  }
}

export default Holder;
