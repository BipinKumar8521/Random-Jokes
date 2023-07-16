const joke = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const generateJoke = async () => {
  const setHeader = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch(url, setHeader);
  const data = await res.json();
  joke.innerHTML = data.joke;
};

jokeBtn.addEventListener("click", generateJoke);
generateJoke();
