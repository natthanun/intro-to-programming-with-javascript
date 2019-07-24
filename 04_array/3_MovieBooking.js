// จองตั๋วหนัง

var movie = [];

var movieFixSeat = Array(100);

console.log(movie);
console.log(movieFixSeat);
var seatCount = 2;
var movieFixSeat = Array(seatCount).fill(false);
console.log(movieFixSeat);

var seatNo0 = movieFixSeat[0];
console.log(seatNo0);
console.log(movieFixSeat.length);
console.log(movieFixSeat[seatCount + 1]);
movieFixSeat[0] = true;
console.log(movieFixSeat[0]);
//loop 1 time show not update array value

do {
  var seat = prompt('What seat do you want to book');
  if (movieFixSeat[seat] === true) {
    alert('This seat is already booked');
  } else {
    alert('Seat no.' + seat + ' is yours now');
    movieFixSeat[seat] = true;
    seatCount--;
  }
} while (seatCount > 0);
