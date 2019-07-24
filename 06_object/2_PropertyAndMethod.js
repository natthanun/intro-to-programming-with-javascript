//property is noun, บอก state
//method is verb

// ดู spec โทรศัพท์

var myPhone = {
  memory: 4, //G
  storage: 32, //G
  bluetooth: '5',
  rearCamera: '12M',
  frontCamera: '8M',
  price: 40000,
  call: function(number) {
    console.log('Calling ' + number);
  },
  recordVideo: function(time) {
    memory -= 0.5;
    storage -= 0.01 * time;
  },
};

myPhone.call('เบอร์ Skooldio');
myPhone.recordVideo(10);

/*
VM51:17 Uncaught ReferenceError: memory is not defined
    at Object.recordVideo (<anonymous>:17:5)
    at <anonymous>:23:9
*/

// ใน function เรายังไม่รู้จัก memory ทั้งๆที่เรา สร้างไว้แล้ว
// อันนี้เป็นเรื่อง Scope ที่จะสอนในอีกคอร์ส แต่ตอนนี้ให้แก้อย่างนี้ครับ

var myPhone = {
  memory: 4, //G
  storage: 32, //G
  bluetooth: '5',
  rearCamera: '12M',
  frontCamera: '8M',
  price: 40000,
  call: function(number) {
    console.log('Calling ' + number);
  },
  recordVideo: function(time) {
    this.memory -= 0.5;
    this.storage -= 0.01 * time;
  },
};

// this เป็น variable ที่ refer ถึงคนที่เรียก method นี้
// this.memory จึงหมายถึง memory ของตัวที่เรียก

myPhone.call('เบอร์ Skooldio');
myPhone.recordVideo(10);

// เพื่อการเข้าใจ this เรามาลองสร้าง function recordVideo แยกออกมา

function recordVideo(time) {
  console.log('this.savingMode=', this.savingMode);
  if (!this.savingMode) {
    this.memory -= 0.5;
  }
  this.storage -= 0.01 * time;
}

var myPhone = {
  memory: 4, //G
  storage: 32, //G
  bluetooth: '5',
  rearCamera: '12M',
  frontCamera: '8M',
  price: 40000,
  call: function(number) {
    console.log('Calling ' + number);
  },
  recordVideo: recordVideo,
};
myPhone.recordVideo;
myPhone.recordVideo(10);
// เป็นการ Map reference ว่าทุกครั้งที่เรียก recordVideo ให้ชี้ไปที่ function recordVideo ข้างบน
// ถ้าเรียก myPhone.recordVideo จะ return มาเป็น content ของ recordVideo เหมือนเรา่เรียก recordVideo เฉยๆ

var robotPhone = {
  memory: 4, //G
  storage: 32, //G
  bluetooth: '5',
  rearCamera: '12M',
  frontCamera: '8M',
  price: 40000,
  savingMode: true,
  call: function(number) {
    console.log('Calling ' + number);
  },
  recordVideo: recordVideo,
};

robotPhone.recordVideo(10);
