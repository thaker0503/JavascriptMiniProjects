import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Editor from "./components/Editor";
// import './App.css'

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const srcDoc = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
  `;

  return (
    <div className="pane">
      <div className="top-pane">
        <Editor extension="html" onChange={setHtml} />
        <Editor extension="css" onChange={setCss} />
        <Editor extension="js" onChange={setJs} />
      </div>
      <div style={{
        height: "100%",
      }}>
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;
