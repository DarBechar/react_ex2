import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Score: "",
      ShowFirstNameMessage: false,
      ShowLastNameMessage: false,
      ShowScoreMessage: false,
      scoreValidationMessage: "",
    };
  }

  handleFocus = (field) => {
    if (field === "FirstName") {
      this.setState({ ShowFirstNameMessage: true });
    } else if (field == "LastName") {
      this.setState({ ShowLastNameMessage: true });
    } else if (field == "Score") {
      this.setState({ ShowScoreMessage: true });
    }
  };

  handleBlur = (field) => {
    if (field === "FirstName") {
      this.setState({ ShowFirstNameMessage: false });
    } else if (field == "LastName") {
      this.setState({ ShowLastNameMessage: false });
    } else if (field == "Score") {
      this.setState({ ShowScoreMessage: false });
    }

    if (this.state.Score >= 555) {
      this.setState({
        scoreValidationMessage: "You can be accepted to studies!",
      });
    } else {
      this.setState({ scoreValidationMessage: "Please try again next year." });
    }
  };

  handleScoreChange = (e) => {
    this.setState({ Score: e.target.value });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.ShowFirstNameMessage && (
            <p style={{ color: "red" }}>Please Enter First Name</p>
          )}
          <input
            placeholder="First Name"
            id="FirstName"
            type="text"
            onFocus={() => this.handleFocus("FirstName")}
            onBlur={() => this.handleBlur("FirstName")}
          />
        </div>
        <br />
        <div>
          {this.state.ShowLastNameMessage && (
            <p style={{ color: "red" }}>Please Enter Last Name</p>
          )}
          <input
            placeholder="Last Name"
            id="LastName"
            type="text"
            onFocus={() => this.handleFocus("LastName")}
            onBlur={() => this.handleBlur("LastName")}
          />
        </div>
        <br />
        <div>
          {this.state.ShowScoreMessage && (
            <p style={{ color: "red" }}>Please Enter Score</p>
          )}
          <input
            placeholder="Score"
            id="Score"
            type="number"
            onFocus={() => this.handleFocus("Score")}
            onBlur={() => this.handleBlur("Score")}
            onChange={() => this.handleScoreChange}
          />
          {this.state.scoreValidationMessage && ( // Added score validation message
            <p style={{ color: this.state.score >= 555 ? "green" : "red" }}>
              {this.state.scoreValidationMessage}
            </p>
          )}
        </div>
      </div>
    );
  }
}
