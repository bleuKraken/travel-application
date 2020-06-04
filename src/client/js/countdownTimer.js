/*
  Create a countdown timer to count the number of days left until the departure date is reached
*/
function StartCountdownTimer() {
  let departureDate = document.getElementById('departure-date').value;
  // Grab Year, Month, and Day
  let departureYear = departureDate.slice(0, departureDate.indexOf("-"))
  let departureMonth = departureDate.slice(departureDate.indexOf("-") + 1, departureDate.indexOf("-") + 3)
  let departureDay = departureDate.slice(8)
  // Removes the 0 from day
  if (departureDay.charAt(0) === "0") departureDay = departureDay.slice(1)
  // Day to count down to
  var countDownDate = new Date(departureMonth + " " + departureDay + ", " + departureYear + " 00:00:01").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Display the result in the element with id="demo"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    // Date is reached!!
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "Time to Travel!";
    }
  }, 1000);
}

export {
  StartCountdownTimer
}
