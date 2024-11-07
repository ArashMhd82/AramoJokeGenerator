const jokeContainer = document.getElementById('Joke')
const JokeGeneratorBtn = document.getElementById('generateJokeBtn')
const JokeAPIUrl = 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?type=single'

let getJoke = () => {
    fetch(JokeAPIUrl)
    .then(data => data.json())
    .then(item =>{
        jokeContainer.textContent = `${item.joke}`
    })
}

getJoke()


JokeGeneratorBtn.addEventListener('click',getJoke)