import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";

const extensions = {
  js: {
    extension: javascript({ jsx: true }),
    value: "console.log('hello world!');",
  },
  css: {
    extension: css(),
    value: "body { margin: 0; }",
  },
  html: {
    extension: html(),
    value: "<h1>Hello World!</h1>",
  },
};

function Editor({ extension, onChange }) {
  const handleChange = React.useCallback((value, viewUpdate) => {
    onChange(value);
  }, []);
  return (
    <CodeMirror
      value={extensions[extension]["value"]}
      height="200px"
      extensions={[extensions[extension]["extension"]]}
      onChange={handleChange}
    />
  );
}
export default Editor;
