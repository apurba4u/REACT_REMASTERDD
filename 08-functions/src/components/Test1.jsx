import React from "react";

const Test1 = () => {
  const click = () => {
    console.log("Button is Clicked");
  };
  const dblclick = () => {
    console.log("Button is Double Click");
  };
  const mouseEnter = () => {
    console.log("Mouse Enter");
  };

  const inpClick = () => {
    console.log("User Is Typing");
  };
  return (
    <div>
      <div id="test">
        <button onClick={click} onDoubleClick={dblclick}>
          Button
        </button>
        <button
          onMouseEnter={mouseEnter}
          onMouseLeave={() => {
            console.log("Mouse Leave");
          }}
        >
          explore this
        </button>
      </div>
      <div id="test1">
        <input
          type="text"
          onClick={inpClick}
          onChange={(elem) => {
            console.log(elem.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Test1;
