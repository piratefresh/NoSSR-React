import React, {useState, useRef} from "react";
import {Editor} from "slate-react";
import {Value} from "slate";
import {Button, Icon, Toolbar} from "./Components";

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: "block",
        type: "paragraph",
        nodes: [
          {
            object: "text",
            text: "A line of text in a paragraph."
          }
        ]
      }
    ]
  }
});

// Define our app...
const TextEditor = () => {
  // Set the initial value when the app is first constructed.
  const [value, setValue] = useState(initialValue);
  const editor = useRef(null);
  return (
    <div>
      <Editor
        value={value}
        ref={editor}
        onChange={opts => setValue(opts.value)}
        spellCheck
        autoFocus
      />
    </div>
  );
};

export default TextEditor;
