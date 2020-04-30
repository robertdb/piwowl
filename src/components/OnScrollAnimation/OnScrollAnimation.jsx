import React, { Component } from "react";
import PropTypes from "prop-types";
import anime from "animejs";
import ScrollTrigger from "react-scroll-trigger";

class OnScrollAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationPlayed: false,
    };

    this.nodeRef = null;
  }

  onEnterViewport() {
    if (this.state.animationPlayed) return;

    this.playAnimation();

    if (typeof this.props.onEnterExec === "function") this.props.onEnterExec();
  }

  playAnimation() {
    this.setState({ animationPlayed: true });

    anime({
      targets: this.nodeRef.childNodes,
      translateY: this.props.translateY,
      opacity: [0, 1],
      easing: "easeOutCubic",
      duration: this.props.duration,
      delay: this.props.delay,
    });
  }

  render() {
    return (
      <ScrollTrigger onEnter={this.onEnterViewport.bind(this)}>
        <div
          ref={(node) => {
            this.nodeRef = node;
          }}
          disablePointerEvents={this.props.disablePointerEvents}
        >
          {this.props.children}
        </div>
      </ScrollTrigger>
    );
  }
}

OnScrollAnimation.defaultProps = {
  disablePointerEvents: false,
  translateY: [20, 0],
  duration: 3000,
  delay: (e, i) => i * 300,
};

OnScrollAnimation.propTypes = {
  disablePointerEvents: PropTypes.bool.isRequired,
  translateY: PropTypes.array.isRequired,
  duration: PropTypes.number.isRequired,
  delay: PropTypes.any,
  onEnterExec: PropTypes.func,
};

export { OnScrollAnimation };
