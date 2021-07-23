import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function buildDataStructure(rows, columns) {
    const x = new Array(rows);

    for (let i = 0; i < x.length; i++) {
        x[i] = new Array(columns);
        x[i].fill(0);
    }
    return x;
}

// console.log(data);
// randomly place a mine
// select a random number [0-2] to select the row
// select a random number [0-4] to select the column

function selectNum(mini, maxi) {
    const min = Math.ceil(mini);
    const max = Math.floor(maxi);
    return Math.floor(Math.random() * (max - min) + min);
}

// place the mine

const data = buildDataStructure(3, 3);
const firstMineRow = selectNum(0, 2);
const firstMineCol = selectNum(0, 2);
data[firstMineRow][firstMineCol] = 9;

// let other elements know mine's position
if (data[firstMineRow][firstMineCol - 1] === 0) {
    data[firstMineRow][firstMineCol - 1] = 1;
}

if (data[firstMineRow][firstMineCol + 1] === 0) {
    data[firstMineRow][firstMineCol + 1] = 1;
}

if (data[firstMineRow + 1]?.[firstMineCol + 1] === 0) {
    data[firstMineRow + 1][firstMineCol + 1] = 1;
}

if (data[firstMineRow + 1]?.[firstMineCol - 1] === 0) {
    data[firstMineRow + 1][firstMineCol - 1] = 1;
}

// if element in the same position in the above || below  row hgas mine detect it
if (data[firstMineRow + 1][firstMineCol] === 0) {
    data[firstMineRow + 1][firstMineCol] = 1;
}

console.log(data);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
