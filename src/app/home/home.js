import React from "react";
import "../../assets/css/style.css";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textArray: ["Developer", "Marketer", "Graphic Designer"],
      textToShow: "Developer",
      textIndex: 0,
    };
  }

  componentDidMount() {
    document.querySelector("html").classList.add("home-page");
    this.textTimer = setInterval(this.switchText, 8000);
  }

  componentWillUnmount() {
    document.querySelector("html").classList.remove("home-page");
    clearInterval(this.textTimer);
  }
  // this code animates the text at the bottom of the main title
  switchText = () => {
    var slidingText = document.getElementById("sliding-text");
    // keep track of the index
    if (this.state.textIndex >= this.state.textArray.length - 1) {
      this.setState({
        textIndex: 0,
      });
    } else {
      this.setState({
        textIndex: this.state.textIndex + 1,
      });
    }
    // Add class to make it disappear
    slidingText.classList.add("fade-out");
    slidingText.classList.remove("fade-in");

    // Only change index when the
    setTimeout(() => {
      this.setState({
        textToShow: this.state.textArray[this.state.textIndex],
      });
      slidingText.classList.add("fade-in");
      slidingText.classList.remove("fade-out");
    }, 2000);
  };

  render() {
    return (
      <div className="home-slider fade-in-faster">
        <div className="home-slider-text">
          <h1>Chota Mpuku</h1>
          <h3 id="sliding-text" className="fade-in">
            {this.state.textToShow}
          </h3>
        </div>
      </div>
    );
  }
}

export default Home;
