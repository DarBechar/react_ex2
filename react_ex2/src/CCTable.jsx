import React, { Component } from "react";

export default class CCTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "100%",
    };
  }
  handleClick = () => {
    this.setState({ width: "50%" });
  };

  handleDoubleClick = () => {
    this.setState({ width: "100%" });
  };
  render() {
    return (
      <div className="p-4">
        <table
          style={{
            width: this.state.width,
            border: "1px solid black",
            borderCollapse: "collapse",
          }}
          onClick={this.handleClick}
          onDoubleClick={this.handleDoubleClick}
        >
          <tbody>
            <tr>
              <td style={{ border: "1px solid black", padding: "10px" }}>1</td>
              <td style={{ border: "1px solid black", padding: "10px" }}>2</td>
              <td style={{ border: "1px solid black", padding: "10px" }}>3</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "10px" }}>4</td>
              <td style={{ border: "1px solid black", padding: "10px" }}>5</td>
              <td style={{ border: "1px solid black", padding: "10px" }}>6</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
