import React, { Component } from "react";

export default class ColorChanger extends Component {
  constructor(props) {
    super(props);
    this.state = { backgroundColor: "white" };
  }

  handleColorChange = (color) => {
    this.setState({ backgroundColor: color });
  };

  render() {
    const colors = [
      { name: "Red", value: "#ff0000" },
      { name: "Blue", value: "#0000ff" },
      { name: "Green", value: "#00ff00" },
      { name: "Yellow", value: "#ffff00" },
      { name: "Purple", value: "#800080" },
      { name: "Orange", value: "#ffa500" },
      { name: "Pink", value: "#ffc0cb" },
      { name: "Brown", value: "#a52a2a" },
    ];

    console.log("Current background color:", this.state.backgroundColor); // Debug log

    return (
      <div>
        {colors.map((color) => (
          <button
            key={color.name}
            className="px-4 py-2 text-white rounded"
            onClick={() => this.handleColorChange(color.value)}
            style={{ backgroundColor: color.value }}
          >
            {color.name}
          </button>
        ))}
        <div
          className="w-full h-32 border rounded"
          style={{ height: 100, backgroundColor: this.state.backgroundColor }}
        ></div>
      </div>
    );
  }
}
