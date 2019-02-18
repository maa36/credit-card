import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import puce from "./puce.jpg";
import master from "./master.jpg";
import Holder from "./holder";
import Name from "./name";
import ValidThru from "./validThru";
import InputMask from "react-input-mask";

var alpha = /^[A-Za-z- ]+$/;

class Card extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
      name: "",
      thru: "",
    };
  }

  writeData(event) {
    this.setState({
      data: event.target.value
    });
  }
  writeValid(event) {
    this.setState({
      thru: event.target.value
    });
  }

  writeName(event) {
    if (event.target.value.match(alpha) && event.target.value.length <= 19) {
      this.setState({
        name: event.target.value.toUpperCase()
      });
    }
  }
  render() {
    return (
      <div>
        <div className="App">
          <div className="Nom">
            <h1>CREDIT CARD</h1>
          </div>
          <div className="ImagePuce">
            <img src={puce} width="70px" height="70px" alt="puce " />>
          </div>
          <label className="Number" id="identity">
            {this.state.data}
          </label>
          <div className="Information">
            <div className="firstInformation">
              <p>{this.state.name} </p>
            </div>
            <div className="validation">
              <div className="blocValidation">
                <div className="month"> MONTH/YEAR </div>
                <div className="valid">
                  <p>
                    VALID
                    <br />
                    THRU
                  </p>
                  <p className="date">{this.state.thru}</p>
                </div>
              </div>
              <img src={master} width="50px" height="70px" alt="master" />
            </div>
          </div>
        </div>
        <form>
          <Holder write={this.writeData.bind(this)} />
          <Name writename={this.writeName.bind(this)} />
          <ValidThru writeValidThru={this.writeValid.bind(this)} />
        </form>
      </div>
    );
  }
}

export default Card;
