//Cette classe représente une et une seule carte
//On peut influer sur une carte que par le constructor et display
class Card {
  //Propriétés
  constructor(value, suit) {
    //Propriété value soit "A", 1, 2, 3, 4, 5, 6, 7, 8, 9 , 10, J, Q, K
    this.value = value;
    //Propriété suit soit "Hearts", "Diamonds", "Clubs", "Spades"
    this.suit = suit;
    //Propriété élément qui contient l'élément HTML de la carte
    this.element = this.#generateCardElement();
  }
  //Méthodes
  //Display insère la propriété élément dans <div = class="deck"> de index.html
  display() {
    document.querySelector(".deck").appendChild(this.element);
    this.element.addEventListener("click", this.#toggleHidden.bind(this));
    return this;
  }
  //GenerateCardElement génère le html de la carte. Appelée dans constructor
  //pour assigner un élément à la propriété élément
  #generateCardElement() {
    const card = document.createElement("div");
    card.dataset.value = this.value;
    card.dataset.suit = this.suit;

    card.classList.add("card");
    card.classList.add("hidden");
    card.classList.add(`v${this.value}`);
    card.classList.add(this.suit.toLowerCase());

    const interior = document.createElement("div");
    interior.classList.add("interior");
    interior.insertAdjacentHTML("afterbegin", this.#generateCardInterior());
    card.appendChild(interior);
    return card;
  }
  //GenerateCardInterior génère le html de l'intérieur de la carte. Appelée dans generateCardElement.
  #generateCardInterior() {
    if (!isNaN(this.value)) {
      let html = "";
      for (let i = 1; i <= this.value; i++) {
        html += `<div class="symbol"></div>`;
      }
      return html;
    } else {
      return `<div class="title">${this.value}</div>`;
    }
  }
  //ToggleHidden ajoute ou enlève la classe hidden à la propriété élément selon l'état d'avant.
  #toggleHidden() {
    this.element.classList.toggle("hidden");
  }
}

export default Card;
