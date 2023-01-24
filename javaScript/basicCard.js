import getCharacters from "./ejercicioAPI.js"

let numero = 1
const siguiente =()=>{
   numero++
  getCharacters(numero)
}

const restar =()=>{
  if(numero > 1){
    numero--
  }
 getCharacters(numero)
}

const botones =() =>{
  const buttons = document.createElement("div");
  buttons.classList.add("d-flex","flex-row", "justify-content-around");
  document.body.appendChild(buttons);

  const anterior = document.createElement("Button");
    anterior.textContent = "Anterior"
    anterior.classList.add("btn", "btn-primary", "my-2", "d-flex", "align-item-end", "justify-content-end", "btn__cards")
    anterior.addEventListener('click',()=> restar())
   buttons.appendChild(anterior);

  const siguienteBtn = document.createElement("Button");
    siguienteBtn.textContent = "Siguiente"
    siguienteBtn.classList.add("btn", "btn-primary", "my-2", "d-flex", "align-item-end", "justify-content-end", "btn__cards")
    siguienteBtn.addEventListener('click',()=> siguiente())
   buttons.appendChild(siguienteBtn);
}
botones()


const basicCard = (array) => {
  cleanList()
  const section = document.createElement("section");
  section.classList.add("container", "my-5");
  document.body.appendChild(section);
  
  const container = document.createElement("div");
  container.classList.add("row", "justify-content-around", "basicCards");
  section.appendChild(container);
  
  const title = document.createElement("h1");
  title.textContent = "Characters";
  container.classList.add("justify-content-center", "align-middle","text-white", "title__characters");
  container.appendChild(title);
  
  card(array, container); 
  
  
};

const card =(array, container) =>{
  
  array.forEach((element) => {
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
    card.style = "width: 28rem;";
    container.appendChild(card);
    // // image
    const cardImage = document.createElement("img");
    cardImage.src = element.image;
    cardImage.classList.add("card-img-top", "mt-1", "m-2", "rounded");
    card.appendChild(cardImage);
    // //card Body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);
    // //title
    const title = document.createElement("h5");
    title.textContent = `Name: ${element.name}`;
    title.classList.add("card-title", "d-block", "my-3", "text-white");
    cardBody.appendChild(title);
    
    const verMas = document.createElement("Button");
    verMas.textContent = "Ver mas"
    verMas.classList.add("btn", "btn-primary", "my-2", "d-block", "verMasButton")
    verMas.id = element.id
    verMas.addEventListener('click', () => {
      window.location.href = `../details.html?id=${element.id}`;
  });
    title.appendChild(verMas);
  });
}



const cleanList = () => {
  const toRemove = document.querySelectorAll('.card');
  toRemove.forEach((element) => {
      element.remove();
  });
  const title = document.querySelectorAll('.title__characters')
  title.forEach((element) => {
    element.remove();
});
};

export default basicCard;