import basicCard from "./basicCard.js";

const getCharacters = async(page) =>{
    let url = `https://rickandmortyapi.com/api/character/?page=${page}`
    const response = await fetch(url);
    const data = await response.json();
    let character = data.results;
    basicCard(character);
    console.log(url)
}
getCharacters();



export default getCharacters;