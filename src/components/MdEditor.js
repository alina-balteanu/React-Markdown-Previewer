import React, { Component } from "react";

class MarkdownEditor extends Component {
  render() {
    return (
      <div className="editor-container">
        <h1 className="container-header">editor</h1>
        <h1 className="container-header clear" onClick={this.props.clearText}>
          clear
        </h1>
        <textarea
          name="editor"
          id="editor"
          value={this.props.value}
          onChange={this.props.onChange}
          spellCheck="false"
        />
      </div>
    );
  }
}

export default MarkdownEditor;
