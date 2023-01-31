import Deck from "./module/Deck.js";
//Créer un objet littéral
const options = {
  values: ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
  suits: ["Hearts", "Diamonds", "Spades", "Clubs"],
};

const deck1 = new Deck(values, suits);
deck1.cardshuffle();
deck1.displayCard();
