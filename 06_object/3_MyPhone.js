function recordVideo(time) {
  console.log('this.savingMode=', this.savingMode);
  if (!this.savingMode) {
    this.memory -= 0.5;
    this.battery -= 0.2 * time;
  } else {
    this.battery -= 0.1 * time;
  }
  this.storage -= 0.01 * time;
}

var myPhone = {
  battery: 100, //%
  memory: 4, //G
  storage: 32, //G
  bluetooth: '5',
  rearCamera: '12M',
  frontCamera: '8M',
  price: 40000,
  savingMode: false,
  call: function(number, time) {
    console.log('Calling ' + number);
    if (!this.savingMode) {
      this.battery -= 0.2 * time;
    } else {
      this.battery -= 0.1 * time;
    }
  },
  recordVideo: recordVideo,
  toggleSavingMode: function() {
    this.savingMode = !this.savingMode;
  },
  charge: function(time) {
    this.battery += time;
    if (this.battery > 100) {
      this.battery = 100;
    }
  },
};

myPhone.recordVideo(10);
myPhone.call('022222222', 10);
