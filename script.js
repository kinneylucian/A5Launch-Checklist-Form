// Write your JavaScript code here!
window.addEventListener("load", function () {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
         let randomIndex = Math.floor(Math.random() * json.length)
         let planet = json[randomIndex]
         addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
      })
   })
   function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
      let div = document.getElementById("missionTarget");
      div.innerHTML = `
      <h2>Mission Destination</h2>
      <ul>
         <li>Name: ${name}</li>
         <li>Diameter: ${diameter}</li>
         <li>Star: ${star}</li>
         <li>Distance from Earth: ${distance}</li>
         <li>Number of Moons: ${moons}</li>
      </ul>
      <img src="${imageUrl}">`;
   }

function validation(input){
   let numberInput = Number(input);
   if(input === ""){
      return ""
   }else if (isNaN(numberInput)){
      return "Not a Number";
   }else if (isNaN(numberInput)=== false){
      return "Is a Number"
   }

}
   let form = this.document.getElementById('launchForm');
   form.addEventListener('submit', function (event) {
      event.preventDefault();

      let pilot = document.getElementById("pilotInfo")
      let copilot = document.getElementById("copilotInfo")
      let fuel = document.getElementById("fuelInfo")
      let cargo = document.getElementById("cargoInfo")
      let itemStatus = document.getElementById("itemStatus")
      let pilotStatus = document.getElementById("pilotStatus")

      if (pilot.value === "" || copilot.value === "" || fuel.value === "" || cargo.value === "") {
         window.alert("All Fields are required!")
      } else if (validation(pilot.value) === "Is a Number" || validation(copilot.value) === "Is a Number" || validation(fuel.value) === "Not a Number" || validation(cargo.value) === "Not a Number" ) {
         window.alert("Please enter valid information for each field!");
      } else {
         itemStatus.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
         let launchStatus = document.getElementById("launchStatus");
         if (fuel.value < 10000 && cargo.value <= 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
        } else if (fuel.value >= 10000 && cargo.value > 10000) {
            fuelStatus.innerHTML = "Fuel level high enough for launch"
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
        } else if (fuel.value < 10000 && cargo.value > 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
        } else {
            fuelStatus.innerHTML = "Fuel level high enough for launch"
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = "green";
        }
      }
   })
})

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/