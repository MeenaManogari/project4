import React from "react";

const Colors = () => {
  const [onColorChange, setColor] = React.useState(false);
  const backcolor = (
    <button
      className="backcolor"
      onClick={(e) => {
        e.preventDefault();
        setColor(true);
      }}
    >
      Change
    </button>
  );

  const reset = (
    <button
      className="reset"
      onClick={(e) => {
        e.preventDefault();
        setColor(false);
      }}
    >
      Reset
    </button>
  );
  return (
    <div
      className="App"
      style={{ backgroundColor: onColorChange ? "red" : "grey" }}
    >
      {" "}
      {backcolor}
      {reset}
    </div>
  );
};
export default Colors;
