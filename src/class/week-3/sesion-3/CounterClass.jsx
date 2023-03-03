import React, { Component } from "react";

class CounterClass extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     counterValue: this.props.value
  //   }
  // }
  state = {
    counterValue: this.props.value
  };

  operation = (param) => {
    if (param === "minus") {
      //this.setState({ counterValue: this.state.counterValue - 1 });
      this.setState(prevState => ({ counterValue: prevState.counterValue - 1 }));
    } else {
      //this.setState({ counterValue: this.state.counterValue + 1 });
      this.setState(prevValue => ({ counterValue: prevValue.counterValue + 1 }))
    }
  }

  render() {
    return (
      <div>
        <h1>Class Counter is:
          {this.props.value} || {this.state.counterValue}
        </h1>
        <button onClick={() => this.operation("minus")}>Subtract</button>
        <button onClick={() => this.operation("plus")}>Add</button>
      </div>
    )
  };
};

export default CounterClass;