console.log('File Loaded');

const resultAnime = document.querySelector(".anime");

fetch('/data/anime.json')
  .then(myData => myData.json())
  .then(anime => showOnWeb(anime));

function showOnWeb(anime) {
  console.log(anime);
  const random = document.createElement("div");
  random.classList.add("row");

  for (let i = 0; i < anime.length; i++) {
    const element = anime[i];
    random.innerHTML += `
      <div class="col-md-4">
        <div class="card">
          <img class="card-img-top img-fluid" src="${element.image}">
          <div class="card-body">
            <h4 class="card-title">${element.title}</h4>
            <p class="card-text">Afleveringen: ${element.episodes}</p>
            <p class="card-text">Seizoenen: ${element.seasons}</p>
            <p class="card-text">Publicatie datum: ${element.release_date}</p>
            <p class="card-text">Genre: ${element.genre}</p>
            <a href="${element.page}" class="btn anime-btn">Klik hier </a>
          </div>
        </div>
      </div>`;
    resultAnime.append(random);
  }
}