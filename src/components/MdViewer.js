import React, { Component } from "react";

class MarkdownViewer extends Component {
  render() {
    return (
      <div className="viewer-container">
        <h1 className="container-header">viewer</h1>
        <div id="preview" dangerouslySetInnerHTML={this.props.displayMarkup} />
      </div>
    );
  }
}

export default MarkdownViewer;
