function generateQuote(event) {
  event.preventDefault();
  new Typewriter("#quote", {
    strings: "testing",
    autoStart: true,
    delay: 1,
    cursor: " ",
  });
}

let quoteForm = document.querySelector("#quote-generator-form");
quoteForm.addEventListener("submit", generateQuote);
