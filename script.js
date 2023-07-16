const joke = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");
const copy = document.querySelector("#copy");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const generateJoke = async () => {
  joke.classList.remove("fade");
  const setHeader = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch(url, setHeader);
  const data = await res.json();
  joke.innerHTML = data.joke;
  joke.classList.add("fade");
};

jokeBtn.addEventListener("click", generateJoke);
generateJoke();
copy.addEventListener("click", () => {
  const text = joke.innerText;
  navigator.clipboard.writeText(text);
  copy.innerText = " Copied!";
  setTimeout(() => {
    copy.innerText = " Copy";
  }, 1000);
});
