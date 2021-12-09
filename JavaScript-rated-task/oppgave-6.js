let cards = [];
let yourHand = [];
let robotHand = [];
let winner = "";
// fill card deck
const suits = ["♥", "♣", "♦", "♠"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
for (const suit of suits) {
  for (const value of values) {
    cards.push({ suit, value });
  }
}

for (let i = 0; i < 3; i++) {
  let indexNumber = Math.floor(Math.random() * cards.length);
  let pickedNumber = cards[indexNumber];
  const index = cards.indexOf(pickedNumber);
  yourHand.push(pickedNumber);
  if (index > -1) {
    cards.splice(index, 1);
  }
}
for (let i = 0; i < 3; i++) {
  let indexNumber = Math.floor(Math.random() * cards.length);
  let pickedNumber = cards[indexNumber];
  const index = cards.indexOf(pickedNumber);
  robotHand.push(pickedNumber);
  if (index > -1) {
    cards.splice(index, 1);
  }
}
function fight() {
  let yourScore = 0;
  let robotScore = 0;
  for (let i = 0; i < yourHand.length; i++) {
    if (
      yourHand[i].value === "J" ||
      yourHand[i].value === "Q" ||
      yourHand[i].value === "K"
    ) {
      yourScore += 10;
    } else if (yourHand[i].value === "A") {
      yourScore += 11;
    } else {
      yourScore += Number(yourHand[i].value);
    }
  }
  for (let i = 0; i < robotHand.length; i++) {
    if (
      robotHand[i].value === "J" ||
      robotHand[i].value === "Q" ||
      robotHand[i].value === "K"
    ) {
      robotScore += 10;
    } else if (robotHand[i].value === "A") {
      robotScore += 11;
    } else {
      robotScore += Number(robotHand[i].value);
    }
  }
  if (yourScore > robotScore) {
    winner = "You";
  } else if (yourScore < robotScore) {
    winner = "Robot";
  } else {
    winner = "Draw";
  }
}
fight();
console.log(winner);

// while
// fortsetter så lenge statementen er true
while (true) {
  console.log("hello");
}
