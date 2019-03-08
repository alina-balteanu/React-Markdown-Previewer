import React, { Component } from "react";
import marked from "marked";
import MarkdownEditor from "./components/MdEditor";
import MarkdownViewer from "./components/MdViewer";
import "./App.scss";

const startText = `# Welcome to my React MarkViewer!

## This is a sub-heading...
### And this is a H3...
  
Here's some code, \`<div></div>\` , between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://github.com/alina-balteanu), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![](https://res.cloudinary.com/dshmwg7vw/image/upload/v1552079984/purple2.png)
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: startText
    };
  }
  onChange = e => {
    this.setState({
      text: e.target.value
    });
  };
  clearText = e => {
    this.setState({
      text: ""
    });
  };

  convertToHTML() {
    var options = { sanitize: true };
    return { __html: marked(this.state.text, options) };
  }
  render() {
    return (
      <div className="App">
        <MarkdownEditor
          value={this.state.text}
          onChange={this.onChange}
          clearText={this.clearText}
        />
        <MarkdownViewer displayMarkup={this.convertToHTML()} />
      </div>
    );
  }
}

export default App;
