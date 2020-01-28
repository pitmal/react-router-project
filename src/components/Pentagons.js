import React from "react";
import Pentagon from "./Pentagon";
// green:rgb(87,94,32);
// greey-blue:rgb(60,74,86);
// dark-grey:rgb(45,46,45)
// light-grey:rgb(203,208,213)
const Pentagons = () => {
  const bgc = [
    {
      name: "green",
      rgba: "87,94,32,0.8"
    },
    {
      name: "dirtBlue",
      rgba: "60,74,86,0.8"
    },
    {
      name: "darkGrey",
      rgba: "45,46,45,0.8"
    },
    {
      name: "lightGrey",
      rgba: "203,208,213,0.8"
    }
  ];

  function pickThreRandomColor(array) {
    let colorsIndex = [];
    let randomColorIndex = [];
    let index = 0;
    for (let i = 0; i < array.length; i++) {
      colorsIndex = [...colorsIndex, index];
      index++;
    }

    for (let i = 0; i < array.length - 1; i++) {
      let counter = Math.floor(Math.random() * colorsIndex.length);

      let randomColor = randomColorIndex.indexOf(colorsIndex[counter]);

      if (randomColor === -1) {
        let index = colorsIndex[counter];
        randomColorIndex = [...randomColorIndex, index];
        colorsIndex.splice(counter, 1);
      } else if (randomColor !== -1) {
        colorsIndex.splice(randomColor, 1);
        counter = Math.floor(Math.random() * colorsIndex.length);
        index = colorsIndex[counter];
        randomColorIndex = [...randomColorIndex, index];
      }
    }

    return randomColorIndex;
  }

  const colors = pickThreRandomColor(bgc);

  const pentagon = colors.map(color => (
    <Pentagon
      key={bgc[color].name}
      color={bgc[color].rgba}
      name={bgc[color].name}
    />
  ));

  return (
    <>
      <div className="pentagon-wrapper">{pentagon}</div>
    </>
  );
};
export default Pentagons;
