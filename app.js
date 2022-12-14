//API

const wtfUrl = "https://yesno.wtf/api";

// DOM
const form = document.querySelector("form");
const imageArticle = document.querySelector("#img-article");
const ansText = document.querySelector("#answer-text");
const thinkingArticle = document.querySelector("#thinking");

// Helper Functions
function showThinking() {
  thinkingArticle.classList.remove("hide");
}

function hideThinking() {
  thinkingArticle.classList.add("hide");
}

function decide(event) {
  event.preventDefault();
  imageArticle.innerHTML = "";
  ansText.innerHTML = "";

  // before api call
  showThinking();
  fetch(wtfUrl, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  }).then(async (res) => {
    const result = await res.json();
    console.log(result);

    // render image
    const img = document.createElement("img");
    img.setAttribute("src", result.image);

    imageArticle.appendChild(img);
    ansText.textContent = result.answer;
    //after api call
    hideThinking();
  });
}

// Listeners
form.addEventListener("submit", decide);
