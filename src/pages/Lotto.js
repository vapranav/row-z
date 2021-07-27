import React, { Component } from "react";
import LottoBall from "./LottoBall";

class Lotto extends Component {
  static defaultProps = {
    title: "Mini",
    length: 6,
    maxNum: 40,
  };
  constructor(props) {
    super(props);
    this.state = { ballNums: Array.from({ length: this.props.length }) };
    this.randomizer = this.randomizer.bind(this);
  }

  randomizer() {
    // let newArr = [4, 3, 5, 6];
    //this.setState({ ballNums: newArr });
    this.setState((curState) => ({
      ballNums: curState.ballNums.map(
        (n) => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.state.ballNums.map((i) => {
          return <LottoBall num={i} />;
        })}
        <button onClick={this.randomizer}>Hello</button>
      </div>
    );
  }
}

export default Lotto;
