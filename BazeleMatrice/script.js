const matrix = [];
let getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};
const createMatrix = (inputValue) => {
  for (let i = 0; i < inputValue; i++) {
    matrix.push([]);
    for (let k = 0; k < inputValue; k++) {
      matrix[i][k] = getRandomInt(9);
    }
  }
};

let matrixHtml = document.getElementById("matrix");
const outputUpdateMatrix = () => {
  matrix.forEach(
    (element) =>
      (matrixHtml.innerHTML += `<div class = "matrix-row"> ${element.reduce(
        (row, number) =>
          (row += `<button class ="matrix-number" value = "${number}"></button>`)
      )}`)
  );
};

document.getElementById("input-size-button").onclick = () => {
  const inputValue = document.getElementById("input-size").value;
  createMatrix(inputValue);
  outputUpdateMatrix();
};

