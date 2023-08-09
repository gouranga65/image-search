let accesKey = "QZWTtEfICj5E6_7z5UqOdXOZik6cjRNTGrRFh6uFhvA";
const formEl = document
  .querySelector("form")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
  });
let inputEl = document.getElementById("inputText").value;
let searchResults = document.querySelector(".search-results");
let showMore = document
  .querySelector(".show-more-button")
  .addEventListener("click", () => {
    searchImages();
  });
let inputData = "";
let page = 1;
async function searchImages(params) {
  inputData = inputEl;
  const url = `https://api.unsplash.com/s/photos?page=${page}&query=${inputData}&client_id=${accesKey}`;
  const resopnse = await fetch(url);
  const data = await resopnse.json();
  const results = data.results;
  if (page === 1) {
    searchResults.innerHTML = "";
  }
  results.map((result) => {
    const imageRaper = document.createElement("div");
    imageRaper.classList.add("search-result");
    const image = document.createElement("img");
    image.src = results.urls.small;
    image.alt = results.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = results.link.html;
    imageLink.target = "_blank";
    imageLink.textContent = results.alt_description;

    imageRaper.appendChild(image);
    imageRaper.appendChild(imageLink);
    imageRaper.appendChild(imageRaper);
  });

  page++;
  if (page > 1) {
    showMore.style.display = "block";
  }
}
