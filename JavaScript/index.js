function updateTime() {
  let veniceElement = document.querySelector("#venice");
  let veniceDateElement = veniceElement.querySelector(".date");
  let veniceTimeElement = veniceElement.querySelector(".time");
  let veniceTime = moment().tz("Europe/Rome");

  veniceDateElement.innerHTML = veniceTime.format("MMMM Do, YYYY");
  veniceTimeElement.innerHTML = veniceTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let dallasElement = document.querySelector("#dallas");
  let dallasDateElement = dallasElement.querySelector(".date");
  let dallasTimeElement = dallasElement.querySelector(".time");
  let dallasTime = moment().tz("America/Matamoros");

  dallasDateElement.innerHTML = dallasTime.format("MMMM Do, YYYY");
  dallasTimeElement.innerHTML = dallasTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
