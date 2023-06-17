import lawnMowerImage from "./images/lawn-mower.png";
import dogFoodImage from "./images/dog-food.png";
import eggImage from "./images/egg.png";
import nmdImage from "./images/nmd.png";
import velarImage from "./images/velar.png";
import couchImage from "./images/couch.png";
import ps5Image from "./images/ps5.png";
import droneImage from "./images/drone.png";
import headsetImage from "./images/headset.png";
import computerImage from "./images/computer.png";

const Questions = [
  {
    image: lawnMowerImage,
    question: "what is the correct price of this lawn mower?",
    answers: [
      { text: "$349" },
      { text: "$659" },
      { text: "$739" },
      { text: "$459", correct: true },
    ],
  },
  {
    image: dogFoodImage,
    question: "what is the correct price of this bag of dog food?",
    answers: [
      { text: "$3.86" },
      { text: "$13.58" },
      { text: "$7.89" },
      { text: "$17.99", correct: true },
    ],
  },
  {
    image: eggImage,
    question: "what is the correct price of these eggs?",
    answers: [
      { text: "$4.79" },
      { text: "$12.00" },
      { text: "$9.89", correct: true },
      { text: "$6.79" },
    ],
  },
  {
    image: nmdImage,
    question: "what is the correct price of this pair of addidas sneakers?",
    answers: [
      { text: "$80" },
      { text: "$99" },
      { text: "$220" },
      { text: "$120", correct: true },
    ],
  },
  {
    image: velarImage,
    question: "what is the correct price of this range rover velar?",
    answers: [
      { text: "$89,000" },
      { text: "$35,000" },
      { text: "$65,000", correct: true },
      { text: "$120,000" },
    ],
  },
  {
    image: couchImage,
    question: "what is the correct price of this couch?",
    answers: [
      { text: "$6,500" },
      { text: "$2,500" },
      { text: "$7,999", correct: true },
      { text: "$12,999" },
    ],
  },
  {
    image: ps5Image,
    question: "what is the correct price of this PlayStation 5 controller?",
    answers: [
      { text: "$69.99", correct: true },
      { text: "$59.99" },
      { text: "$39.99" },
      { text: "$79.99" },
    ],
  },
  {
    image: droneImage,
    question: "what is the correct price of this drone?",
    answers: [
      { text: "$350" },
      { text: "$369" },
      { text: "$249", correct: true },
      { text: "$450" },
    ],
  },
  {
    image: headsetImage,
    question: "what is the correct price of these JBL gaming headset?",
    answers: [
      { text: "$150", correct: true },
      { text: "$129" },
      { text: "$249" },
      { text: "$329" },
    ],
  },
  {
    image: computerImage,
    question: "what is the correct price of this computer?",
    answers: [
      { text: "$1,199", correct: true },
      { text: "$889" },
      { text: "$1,399" },
      { text: "$1,669" },
    ],
  },
];

export default Questions;
