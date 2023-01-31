import Card from "./Card";
import shuffle from "./node_modules/lodash-es/shuffle.js";

class Deck {
  //options du deck
  constructor(options) {
    //Deux propriétés values et suits
    this.values = options.values;
    this.suit = options.suits;
    this.createFullDeck();
  }

  //Création des cartes
  //Propriété tableau cards
  #cards = [];
  //Méthode createFullDeck() avec les options, génère une carte par combinaison possible.
  createFullDeck() {
    this.options.values.forEach((value) => {
      this.options.suits.forEach((suit) => {
        this.#cards.push(new Card(value, suit));
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

  cardshuffle() {
    _.shuffle(this.#cards);
  }
}
export default Deck;
