var flight = [
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
  [false, false, false],
];
console.log(flight);
console.log(flight[10]);
//ถามว่า index สูงสุดที่ไปถึงได้คืออะไร
// console.log(flight[8]);
console.log(flight[8][2]);

flight[8][2] = true;
flight[0][0] = true;
flight[4][1] = true;
flight[4][3] = true;
var countPassenger = 0;
for (var row = 0; row < flight.length; row++) {
  // for(var seat = 0; seat< 3; seat++){
  for (var seat = 0; seat < flight[row].length; seat++) {
    // console.log(flight[row][seat])
    if (flight[row][seat]) {
      countPassenger++;
    }
  }
}

console.log('passengers Count is ' + countPassenger);
