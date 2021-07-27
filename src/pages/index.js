import * as React from "react";
import { Component } from "react";
import Lotto from "./Lotto";

// styles
// markup

class IndexPage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { score: 0 };
  //   this.tripleKill = this.tripleKill.bind(this);
  // }

  // incrementScore(state) {
  //   return { score: state.score + 1 };
  // }

  // tripleKill() {
  //   this.setState(this.incrementScore);
  //   this.setState(this.incrementScore);
  //   this.setState(this.incrementScore);
  // }
  render() {
    return (
      <div>
        <Lotto title='Mini' numBalls={4} maxNum={10} />
      </div>
    );
  }
}

export default IndexPage;
