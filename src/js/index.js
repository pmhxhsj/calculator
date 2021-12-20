import { OPERATOR } from './operator.js';

const NUMBER_CALCULATOR = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

const extractionNumberButton = (num) => {
  document
    .querySelector(`#calculator-${num}-btn`)
    .addEventListener('click', () => {
      console.log(NUMBER_CALCULATOR.indexOf(num));
    });
};

const App = () => {
  NUMBER_CALCULATOR.filter((value) => {
    extractionNumberButton(value);
  });
};

App();
