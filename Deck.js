import Card from "./Card";
import shuffle from "./node_modules/lodash-es/shuffle.js";

class Deck {
  //options du deck
  constructor(options) {
    this.options = options;
    this.createFullDeck();
  }

  //Création des cartes
  //Propriété tableau cards
  #cards = [];
  //Méthode createFullDeck() avec les options, génère une carte par combinaison possible.
  createFullDeck() {
    this.options.values.forEach((value) => {
      this.options.suits.forEach((suit) => {
        const card = new Card(value, suit);
        this.#cards.push(card);
        // console.log(this.#cards)
      });
    });
  }

  //Méthode displayCards() qui avec #cards[]
  displayCard() {
    //affiche chaque carte
    this.#cards.forEach((card) => {
      //en appelant la métjode display()
      card.display();
    });
  }

  shuffleCards() {
    this.#cards = shuffle(this.#cards);
  }
}
export default Deck;
