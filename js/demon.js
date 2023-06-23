// JSON-gegevens ophalen met fetch
fetch("/data/aot.json")
  .then(response => response.json())
  .then(json => showOnWeb(json))
    // Hier worden twee lege arrays seizoenen en aantalAfleveringen gemaakt waarin
     // de seizoenen en het aantal afleveringen uit de JSON-gegevens zullen opslaan.
    
    function showOnWeb(json) {
      let seizoenen = [];
      let aantalAfleveringen = [];
  
      // Deze loop doorloopt de seizoenen array in de JSON-gegevens en voegt elk seizoen toe aan de seizoenen array
      // en het bijbehorende aantal afleveringen aan de aantalAfleveringen array.
      for (let i = 0; i < json.seizoenen.length; i++) {
        let seizoen = json.seizoenen[i];
        seizoenen.push(seizoen.seizoen);
        aantalAfleveringen.push(seizoen.afleveringen);
      }
  
      // De chart.js grafiek
      let ctx = document.querySelector(".myChart").getContext("2d");
      let myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: seizoenen,
          datasets: [{
            label: "Aantal afleveringen",
            data: aantalAfleveringen,
            backgroundColor: "rgba(0, 123, 255, 0.5)",
            borderColor: "rgba(0, 123, 255, 1)",
            borderWidth: 1,
  
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              stepSize: 5
            }
          }
        }
      })
    };