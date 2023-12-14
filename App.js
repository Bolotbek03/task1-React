import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [text, setText] = useState("Hello");
  const [style, setStyle] = useState("true");
  return (
    <div>
      <h1>{text}</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      {style ? (
        <p className="style_true">Это true</p>
      ) : (
        <p className="style_false">Это false</p>
      )}
      <button onClick={() => setStyle(!style)}>Переключить стили </button>
    </div>
  );
};

export default App;
