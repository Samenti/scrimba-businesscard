import React from "react";

class VersionNav extends React.Component {
  constructor(props) {
    super(props);
    this.changeVersion = this.changeVersion.bind(this);
  }
  
  changeVersion(ver) {
    console.log(ver);
    let linkelem = document.getElementById("extra-styles");
    linkelem.setAttribute(
      "href", process.env.PUBLIC_URL + "/v" + ver + ".css"
    );
  }

  render() {
    return (
      <nav className="version-nav">
        <a href="#" onClick={this.changeVersion.bind(this, 1)}>version #1</a>
        <a href="#" onClick={this.changeVersion.bind(this, 2)}>version #2</a>
        <a href="#" onClick={this.changeVersion.bind(this, 3)}>version #3</a>
        <a href="#" onClick={this.changeVersion.bind(this, 4)}>version #4</a>
      </nav>
    );
  };
};

export default VersionNav;