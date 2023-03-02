import React, { Component } from "react";
import { ThemeContext } from "./App";

export default class Counter extends Component {
  // Pass in props and useState
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount,
    };
  }

  render() {
    console.log("Render Counter");
    return (
      <ThemeContext.Consumer>
        {(style) => (
          <div>
            <button style={style} onClick={() => this.changeCount(-1)}>
              -
            </button>
            <span>{this.state.count}</span>
            <button style={style} onClick={() => this.changeCount(+1)}>
              +
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }

  // Methods
  // If you change state then this component
  changeCount(amount) {
    this.setState((prevState) => {
      return { count: prevState.count + amount };
    });
  }
}
