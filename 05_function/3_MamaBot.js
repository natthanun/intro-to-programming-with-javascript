//boil
function boilWater() {
  console.log('เทน้ำใส่กา');
  console.log('เริ่มต้ม');
  var isBoiled = false;
  var second = 0;
  var temperature = 0.0;
  var boiledTemperature = 100;
  while (!isBoiled) {
    second++;
    temperature += Math.random();
    isBoiled = temperature > boiledTemperature;
    if (second % 60 === 0)
      console.log('เปิดกาดู เอ๊ะ!! ' + Math.round(second / 60) + ' นาทีแล้ว น้ำยังไม่เดือด');
  }

  var minute = Math.round(second / 60);
  console.log('เย่ น้ำเดือดในเวลา ' + minute + ' นาที');
}
//rip
//songType ["มาม่า","น้ำมันเจียว","ผงมาม่า","พริก"]
function rip(songType, isHalf = false) {
  var isHalfText = isHalf ? 'ครึ่งนึง' : 'ทั้งหมด';
  console.log('ฉีกซอง' + songType + 'เทใส่ชาม' + isHalfText);
}

var gradient = ['มาม่า', 'น้ำมันเจียว', 'ผงมาม่า', 'พริก'];

// cook
function boilMama(time) {
  for (var minute = 0; minute < time; minute++) {
    console.log(
      Array(minute + 1)
        .fill('~')
        .join('')
    );
  }
}

// noodleLevel = ['นิ่ม','กรุบกรอบ', 'อืด', 'ดิบ']
function cook(noodleLevel) {
  switch (noodleLevel) {
    case 'นิ่ม':
      boilMama(5);
    case 'อืด':
      boilMama(10);
    case 'ดิบ':
      boilMama(1);
    case 'กรุบกรอบ':
      boilMama(2);
    default:
      boilMama(3);
  }

  //for (var minute = 0; minute< )
  return 'มาม่าเส้น' + noodleLevel + ' 1 ชาม';
}

function mamaBot(noodleLevel, isDiet) {
  boilWater();
  for (var i = 0; i < gradient.length; i++) {
    rip(gradient[i], isDiet);
  }
  var mama = cook(noodleLevel);
  console.log(mama + (isDiet ? ' สูตรไดเอท' : ''));
}

mamaBot('นิม', true);
