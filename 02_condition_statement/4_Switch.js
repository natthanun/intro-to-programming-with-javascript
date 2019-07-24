var channel = 4;
/// ตอนแรกสอนแบบไม่มี default
switch (channel) {
  case 3:
    console.log('บุพเพสันนิวาส');
    break;
  case 7:
    console.log('ดาวพระศุกร์');
    break;
  case 9:
    console.log('ช่องเก้าการ์ตูน');
    break;
}

//------------------------------------------------------
switch (channel) {
  case 3:
    console.log('บุพเพสันนิวาส');
    break;
  case 7:
    console.log('ดาวพระศุกร์');
    break;
  case 9:
    console.log('ช่องเก้าการ์ตูน');
    break;
  default:
    console.log('ไม่พบช่อง โปรดขยับเสาอากาศ');
}
// ไม่สอนเคสที่ไม่ break
// ช้อง 29 ฉายดาวพระศุกร์

//------------------------------------------------------
switch (channel) {
  case 3:
    console.log('บุพเพสันนิวาส');
    break;
  case 7:
  case 29:
    console.log('ดาวพระศุกร์');
    break;
  case 9:
    console.log('ช่องเก้าการ์ตูน');
    break;
  default:
    console.log('ไม่พบช่อง โปรดขยับเสาอากาศ');
}
