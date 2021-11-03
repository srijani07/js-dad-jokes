const btnGenerate = document.querySelector("#btn-generate-joke");

const jokeArea = document.querySelector("#div-joke-display");

function generateJoke() {
    fetch(`https://icanhazdadjoke.com`, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
    
      })
      .then(response => response.json())
      .then(response =>  {
          jokeArea.innerHTML = response.joke;
      })
    
}

generateJoke();

btnGenerate.addEventListener("click", generateJoke)


