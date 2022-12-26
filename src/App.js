import React from "react";
import "./App.css";
import Timer from "./Component/Timer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "Nasreddine Mrabet",
      Bio: "I am a Full Stack JS Student",
      imgSrc:
        "https://www.zdnet.com/a/img/resize/adcb2eb2cc3f5562f7e80931308e2a08b01947ce/2019/08/19/4a663776-f4a9-4f89-9bee-2d07ee052f5b/istock-1147195672-11.jpg?auto=webp&fit=crop&height=900&width=1200",
      profession: "web developer",
      show: false,
    };
  }
  ToggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="App">
        {this.state.show && (
          <>
            <h1>My name is {this.state.fullName}</h1>
            <h2>{this.state.Bio}</h2>
            <img
              src={this.state.imgSrc}
              style={{ width: "23rem" }}
              alt="react"
            />
            <p>{this.state.profession}</p>
            <h2>MY PROFILE</h2>
          </>
        )}

        {this.state.show && <Timer />}
        <button onClick={this.ToggleShow}>Show profile</button>
      </div>
    );
  }
}
export default App;
