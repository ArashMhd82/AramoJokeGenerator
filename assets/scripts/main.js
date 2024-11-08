const jokeContainer = document.getElementById('Joke')
const JokeGeneratorBtn = document.getElementById('generateJokeBtn')
let JokeAPIUrl = `https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky,Christmas?type=single`

let getJoke = () => {
    fetch(JokeAPIUrl)
    .then(data => data.json())
    .then(item =>{
        jokeContainer.textContent = `${item.joke}`
    })
}

getJoke()


JokeGeneratorBtn.addEventListener('click', function() {
    
    const checkboxes = document.querySelectorAll('#settingContainer input[type="checkbox"]');
    const checkedValues = Array.from(checkboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);
    JokeAPIUrl = `https://v2.jokeapi.dev/joke/${checkedValues}?type=single`
    
    getJoke()
})