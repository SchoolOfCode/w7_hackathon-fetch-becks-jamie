console.log ("jokes aplenty");

async function getJoke (){
    const response = await fetch ("https://icanhazdadjoke.com/", {
  headers: { accept: "application/json" },});
  let joke = await response.json();
  console.log (joke);
}