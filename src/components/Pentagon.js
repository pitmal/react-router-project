import React from "react";
import "../styles/Pentagon.css";
const Pentagon = ({ color, name }) => {
  const style = {
    // backgroundColor: `rgba(${color})`,
    width: "160px",
    height: "0px",
    borderTop: `160px solid rgba(${color})`,
    borderLeft: "80px solid transparent",
    borderRight: "80px solid transparent"
  };

  console.log(name);
  return (
    <>
      <div className={`pentagon ${name}`} style={style}>
        <div className="before"></div>
      </div>
    </>
  );
};
export default Pentagon;
