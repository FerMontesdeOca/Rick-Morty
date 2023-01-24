const url = new URLSearchParams(window.location.search);
  const CharacterId = url.get('id');
  const newCharacter = `https://rickandmortyapi.com/api/character/${CharacterId}`;


  const getCharacter = async() => {
    const response = await fetch(newCharacter);
    const result = await response.json();
    details(result)
};

const details = (element) => {

  const section = document.createElement("section");
  section.classList.add("container", "my-5");
  document.body.appendChild(section);

  const container = document.createElement("div");
  container.classList.add("row", "justify-content-around");
  section.appendChild(container);

  const detail = document.createElement("h1");
  detail.textContent = "Character";
  detail.classList.add("justify-content-center", "align-middle","text-white", "title__characters");
  container.appendChild(detail);

  const card = document.createElement("div");
  card.id = element.id;
  card.classList.add(
    "card",
    "m-3",
    "col-5",
    "bg-secondary",
    "d-flex",
    "flex-row"
  );
  card.style = "width: 90%";
  container.appendChild(card);
  //  image
  const cardImage = document.createElement("img");
  cardImage.src = element.image;
  cardImage.style= "width:30%"
  cardImage.classList.add("card-img-top", "mt-1", "m-2", "rounded");
  card.appendChild(cardImage);
  //card Body
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);
  //title
  const title = document.createElement("h5");
  title.textContent = `Name: ${element.name}`;
  title.classList.add("card-title");
  cardBody.appendChild(title);
  //status
  const status = document.createElement("p");
  status.textContent = `Status: ${element.status}`;
  status.classList.add("card-text");
  cardBody.appendChild(status);
  //species
  const species = document.createElement("p");
  species.classList.add("my-2")
  species.textContent = `Species: ${element.species}`;
  species.classList.add("card-text");
  cardBody.appendChild(species);
  //type
  const characterType = document.createElement("p");
  characterType.classList.add("my-2")
  characterType.textContent = `Type: ${element.type}`;
  characterType.classList.add("card-text");
  cardBody.appendChild(characterType);
  //gender
  const gender = document.createElement("p");
  gender.textContent = `Gender: ${element.gender}`;
  gender.classList.add("card-text");
  characterType.appendChild(gender);
  //Origen
  const origin = document.createElement("p");
  origin.classList.add("my-2")
  origin.textContent = `Origin: ${element.origin.name}`;
  origin.classList.add("card-text");
  gender.appendChild(origin);
  //location
  const location = document.createElement("p");
  location.classList.add("my-2")
  location.textContent = `Location: ${element.location.name}`;
  location.classList.add("card-text");
  origin.appendChild(location);
  //btn regresar
  const regresar = document.createElement("Button");
    regresar.textContent = "Return"
    regresar.classList.add("btn", "btn-primary", "my-4", "d-block", "verMasButton")
    regresar.addEventListener('click', () => {
      window.location.href = "../index.html";
    });
    location.appendChild(regresar);
};


  


getCharacter()
