import React from "react";
import CSS from "!style!css!sass!./stylesheets/base.scss";

class BaseComponent extends React.Component {
  render() {
    return (
      <div className="greeting">
        Hello, World!
      </div>
    );
  }
}

export default BaseComponent;
