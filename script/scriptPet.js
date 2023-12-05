class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  petCheck(otherPet) {
    return otherPet.ownerName === this.ownerName ? true : false;
  }
}

let pets = [];

const createPet = function (pName, oName, s, b) {
  let listCards = document.getElementById("listCards");
  let card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("me-2");

  let cardContent = `                
    <div class="card-body">
    <h5 class="card-title">${pName}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary mt-1">${oName}</h6>
    <h6 class="card-subtitle mb-2 text-body-secondary mt-1">${s}</h6>
    <h6 class="card-subtitle mb-2 text-body-secondary mt-1">${b}</h6>

  </div>`;

  card.innerHTML = cardContent;
  listCards.appendChild(card);

  pName = new Pet(pName, oName, s, b);
  pets.push(pName);
  console.log(pName);
};

// prova

window.onload = () => {
  let dogForm = document.getElementsByTagName("form");
  dogForm[0].addEventListener("submit", (e) => {
    e.preventDefault();

    let petName = document.getElementById("name").value;
    let ownerName = document.getElementById("ownerName").value;
    let species = document.getElementById("species").value;
    let breed = document.getElementById("breed").value;

    createPet(petName, ownerName, species, breed);
  });
};

let pet1 = new Pet("Julius", "Marco", "Cane", "Lab");
let pet2 = new Pet("Conrad", "Marco", "Cane", "Corg");
console.log(pet1);
console.log(pet2);

console.log(pet1.petCheck(pet2));
