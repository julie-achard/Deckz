import Card from "./Card.js";
import Deck from "./Deck.js";
//Créer un objet littéral
const options = {
  values: ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"],
  suits: ["Hearts", "Diamonds", "Spades", "Clubs"],
};

const deck1 = new Deck(options);
deck1.cardshuffle();
deck1.displayCard();
