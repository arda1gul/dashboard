const resultCars = document.querySelector(".cars");

fetch('/data/cars.json')
    .then(myData => myData.json())
    .then(cars => showOnWeb(cars))

function showOnWeb(cars) {
    console.log(cars)
    for (let i = 0; i < cars.length; i++) {
        const element = cars[i];
        resultCars.innerHTML += `
        <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
        <img class="card-img-top rounded-4 h-75" src="${element.img}">
          <div class="card-body">
            <h5 class="card-title">${element.merk}</h5>
            <p class="card-text">Model: ${element.model}</p>
            <ul class="list-group">
            <li class="list-group-item">Bouwjaar: ${element.bouwjaar}</li>
            <li class="list-group-item">Prijs: ${element.prijs}</li>
            <li class="list-group-item">Motor: ${element.motor}</li>
            </ul>
          </div>
        </div>
      </div>`
    }
}