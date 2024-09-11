// API 1: "http://www.omdbapi.com/?apikey=3a666101&s=fast"

const movieListEl = document.querySelector(".movie-list");

async function main() {
  const movies = await fetch("http://www.omdbapi.com/?apikey=3a666101&s=fast");
  const moviesData = await movies.json();

  movieListEl.innerHTML = moviesData.Search.map((movie) =>
    movieHTML(movie)
  ).join("");
}
const filter = document.getElementById("filter");
const resultsContainer = document.getElementById("results");


main();

function movieHTML(movie) {
  return `<div class="movie-card">
  <div class="movie-card__container">
    <div class="movie__img">
      <img src="${movie.Poster}" />
    </div>
    <h3>${movie.Title}</h3>
    <p>
      <b>${movie.Year}</b>
    </p>
    <p>
      <b>${movie.imdbID}</b>
    </p>
  </div>
</div>`;
}

function filterResults(query) {
  resultsContainer.innerHTML = "";

  const filteredData = moviesData.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  filteredData.forEach((item) => {
    const div = document.createElement("div");
    div.className = "result-item";
    div.textContent = item;
    resultsContainer.appendChild(div);
  });
}

filter.addEventListener("input", () => {
  const query = filter.value;
  filterResults(query);
});