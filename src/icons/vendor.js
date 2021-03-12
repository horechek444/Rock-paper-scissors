import Rock from "./Rock";
import Paper from "./Paper";
import Scissors from "./Scissors";

const choices = [
  {id: 1, name: "rock", component: Rock, losesTo: 2},
  {id: 2, name: "paper", component: Paper, losesTo: 3},
  {id: 3, name: "scissors", component: Scissors, losesTo: 1},
];

export default choices;