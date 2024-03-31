function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: " ",
  });
}

function generateQuote(event) {
  event.preventDefault();
  let userInput = document.querySelector("#user-input");
  let apiKey = "89045e8b02ffo7bc061tb52f38ead08c";
  let prompt = `Generate famous movies quotes from ${userInput.value} `;
  let context =
    "You are a movie nerd that knows all the famous quotes from all movies and actors and actresses ever made. Please provide only 4 examples and the movies they are from, short one sentance quotes in basic HTML and separate each line with a <br />. Do not include search title.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayQuote);
}

let quoteForm = document.querySelector("#quote-generator-form");
quoteForm.addEventListener("submit", generateQuote);
