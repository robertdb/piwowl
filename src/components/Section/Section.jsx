import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { OnScrollAnimation } from "../OnScrollAnimation";
import "./section.scss";

const Section = ({ reverse, backgroundImage, children }) => {
  const childs = React.Children.map(children, (child) =>
    React.cloneElement(child)
  );

  let componentToRender =
    childs.length > 1 ? (
      <Fragment>
        <div className={`content-left`}>{childs[0]}</div>
        <div className={`content-right`}>{childs[1]}</div>
      </Fragment>
    ) : (
      childs[0]
    );

  const withBgImage = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <OnScrollAnimation>
      <div
        className={`container ${reverse ? "reverse-childs" : ""}`}
        style={withBgImage}
      >
        {componentToRender}
      </div>
    </OnScrollAnimation>
  );
};

Section.defaultProps = {
  reverse: false,
  backgroundImage: "",
};

Section.propsTypes = {
  reverse: PropTypes.boolean,
};

export { Section };
