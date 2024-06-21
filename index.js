// API 1: "http://www.omdbapi.com/?apikey=3a666101&s=fast"

async function main() {
  const movies = await fetch("http://www.omdbapi.com/?apikey=3a666101&s=fast");
  const moviesData = await movies.json();
  console.log(moviesData);
  // const moviesList = document.querySelector();

  // moviesList.innerHTML = moviesData
}

main();
