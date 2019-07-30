function waveHotDog() {
  console.log('Put Hotdog in Microwave');
  console.log('Set Heat to 200');
  console.log('Set Time to 2 minute');
  console.log('Set Heat to 800');
  console.log('Set Time to 5 minute');
  console.log('Time’s up, Take HotDog from Wave');
}

waveHotDog();
waveHotDog();

function wave(heat, time) {
  console.log('Set Heat to ' + heat);
  console.log('Set Time to ' + time + ' minute');
}

function waveHotDog() {
  console.log('Put Hotdog in Microwave');
  wave(200, 2);
  wave(800, 5);
  console.log('Time’s up, Take HotDog from Wave');
}
