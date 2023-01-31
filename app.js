import Card from "./Card.js";
import Deck from "./Deck.js";
//Créer un objet littéral
const options = {
  values: ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"],
  suits: ["Hearts", "Diamonds", "Spades", "Clubs"],
};

const deck = new Deck(options);
deck.shuffleCards();
deck.displayCards();
