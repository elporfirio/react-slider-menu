import React from "react";
import "./withSlider.css";

const withSliderHoc = WrappedComponent => {
  class Movable extends React.Component {
    render() {
      return (
        <div className={"slider-container"}>
          <button className={"slider-container__left-button"} onClick={this.props.slideLeft}>
            Left
          </button>
          <div className={"slider-container__visible-area"}>
            <WrappedComponent {...this.props} style={{transform: `translate(${this.props.translate}px)`}}/>
          </div>
          <button className={"slider-container__right-button"} onClick={this.props.slideRight}>
            Right
          </button>
        </div>
      );
    }
  }

  return Movable;
};

export default withSliderHoc;
