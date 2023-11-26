const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("thought");
const author = document.getElementById("author");
const newQuoteBtn = document.querySelector(".new-quote");
const tweetBtn = document.querySelector(".tweet");

async function getquote(url) {
  const response = await fetch(url);
  let data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

getquote(api_url);

function tweet() {
  window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML,"tweet window","width=600px,heigth=200px");
}

newQuoteBtn.addEventListener("click", () => {
  getquote(api_url);
});

tweetBtn.addEventListener("click", () => {
  tweet();
});
