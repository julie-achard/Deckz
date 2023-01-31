import Card from "./Card.js";
import shuffle from "./node_modules/lodash-es/shuffle.js";

class Deck {
  constructor(options) {
    this.options = options;
    this.createFullDeck();
  }
  #cards = [];
  createFullDeck() {
    this.options.values.forEach((value) => {
      this.options.suits.forEach((suit) => {
        const card = new Card(value, suit);
        this.#cards.push(card);
        // console.log(this.#cards)
      });
    });
  }
  displayCards() {
    this.#cards.forEach((card) => {
      card.display();
    });
  }

  shuffleCards() {
    this.#cards = shuffle(this.#cards);
  }
}

export default Deck;
