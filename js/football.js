fetch('/data/spelers.json')
    .then(myData => myData.json())
    .then(spelers => showInConsole(spelers));

const resultPlayers = document.querySelector(".cards") 

function showInConsole(spelers) {
    console.log(spelers)
    for (let i = 0; i < spelers.length; i++) {
        const element = spelers[i];
        resultPlayers.innerHTML += `
        <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
        <img class="card-img-top h-75" src="${element.img}">
          <div class="card-body">
            <h5 class="card-title">${element.naam}</h5>
            <p class="card-text">Leeftijd: ${element.leeftijd}</p>
            <ul class="list-group">
              <li class="list-group-item">Positie: ${element.positie}</li>
              <li class="list-group-item">Club: ${element.club}</li>
              <li class="list-group-item">Nationaliteit: ${element.nationaliteit}</li>
              <a class="list-group-item bg-primary" href="${element.bekers}">Bekijk Trofeeën</a>
              </ul>
          </div>
        </div>
      </div>`
    }
}

const searchBar = document.querySelector('.searchbar');
searchBar.addEventListener('keydown', function(event) {
  if(event.keyCode === 13) {
    event.preventDefault();
    let googleSearch = searchBar.value
    window.location.href = `https://www.transfermarkt.nl/schnellsuche/ergebnis/schnellsuche?query=${googleSearch}`
  }
})


// const cards = document.querySelector('.cards');

// fetch('/data/leagues.json')
//     .then(myData => myData.json())
//     .then(leagues => showInConsole(leagues));

// // function showInConsole(leagues) {
// //     console.log(leagues)
// //     for (let i = 0; i < leagues.length; i++) {
// //         const element = leagues[i];
// //         cards.innerHTML += 
// //     }
// // }

// fetch('/data/retired.json')
//     .then(myData => myData.json())
//     .then(retired => showInConsoleTwo(retired));

//     const resultRetired = document.querySelector(".retired")


// function showInConsoleTwo(retired) {
//     console.log(retired)
//     for (let i = 0; i < retired.length; i++) {
//         const element = retired[i];
//         // resultRetired.innerHTML += `<li>Naam: ${element.naam} | Leeftijd: ${element.leeftijd} | Positie: ${element.positie} |  Club: ${element.laatsteClub} | Nationaliteit: ${element.nationaliteit}</li>`;
//     }
// }