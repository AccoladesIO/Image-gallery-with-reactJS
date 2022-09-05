import React, { useState } from "react";
import "./App.css";
import Images from "./images";

function App() {
  const [selectedImg, setSelectedImg] = useState(
    Images[Math.trunc(Math.random() * 9)]
  );
  return (
    <div className="App">
      <div className="container">
        <img src={selectedImg} alt="" className="selected" />
        <div className="imgContainer">
          {Images.map((img, i) => (
            <img
              src={img}
              key={i}
              alt=""
              onClick={() =>setSelectedImg(img)}
              style={{ border: selectedImg === img ? "3px solid white" : "" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
