function updateTime() {
  let veniceElement = document.querySelector("#venice");
  if (veniceElement) {
    let veniceDateElement = veniceElement.querySelector(".date");
    let veniceTimeElement = veniceElement.querySelector(".time");
    let veniceTime = moment().tz("Europe/Rome");

    veniceDateElement.innerHTML = veniceTime.format("MMMM Do, YYYY");
    veniceTimeElement.innerHTML = veniceTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let dallasElement = document.querySelector("#dallas");
  if (dallasElement) {
    let dallasDateElement = dallasElement.querySelector(".date");
    let dallasTimeElement = dallasElement.querySelector(".time");
    let dallasTime = moment().tz("America/Matamoros");

    dallasDateElement.innerHTML = dallasTime.format("MMMM Do, YYYY");
    dallasTimeElement.innerHTML = dallasTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
<div class="city">
 <div>
 <h2>${cityName}</h2>
<div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
</div>
<div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}<small>
  </div>
</div>
<a href="index.html"> All cities</a>
`;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
