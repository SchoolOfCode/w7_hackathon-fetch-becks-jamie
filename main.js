console.log ("jokes aplenty");


// create button
// on click 
// - fetch request
// - play drum roll
// Display Text
// - set timeOut for length of drumroll
// - set section text to be joke (transform over 1.5 seconds)
// play sound (eg laughter)
// display then hide image (setInterval)


// var x = document.getElementById("myAudio");

// function playAudio() {
//   x.play();
// }

// function pauseAudio() {
//   x.pause();
// }

async function getJoke (){
    const response = await fetch ("https://icanhazdadjoke.com/", {
  headers: { accept: "application/json" },});
  let joke = await response.json();
  console.log (joke);
}

