import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 data-test="app-title">Counter App</h1>
        <p data-test="display-counter">{this.state.count}</p>
        <div>
          <button
            data-test="btn-decrement"
            onClick={() => {
              if (this.state.count < 1) return;
              this.setState({ count: this.state.count - 1 });
            }}
          >
            -
          </button>
          &nbsp;
          <button
            data-test="btn-increment"
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default App;
