let hourSmart = document.querySelector("#hourSmart");
let minutesSmart = document.querySelector("#minutesSmart");
let secondsSmart = document.querySelector("#secondsSmart");

let dateHour = new Date();

function moveWatch() {
  let nowadays = new Date();

  let hour = nowadays.getHours();
  let minutes = nowadays.getMinutes();
  let seconds = nowadays.getSeconds();

  let stringHour = new String(hour);
  let stringMinutes = new String(minutes);
  let stringSeconds = new String(seconds);

  if (stringHour.length == 1) hour = "0" + hour;
  if (stringMinutes.length == 1) minutes = "0" + minutes;
  if (stringSeconds.length == 1) seconds = "0" + seconds;

  hourSmart.textContent = hour;
  minutesSmart.textContent = minutes;
  secondsSmart.textContent = seconds;

  setTimeout("moveWatch()", 1000);
}
moveWatch();

function pickUpTime() {
  let dayWeek = dateHour.getDay();
  let day = dateHour.getDate();
  let month = dateHour.getMonth() + 1;
  let year = dateHour.getFullYear();

  let stringDay = new String(day);
  let stringMonth = new String(month);

  if (stringDay.length == 1) day = "0" + day;
  if (stringMonth.length == 1) month = "0" + month;

  switch (dayWeek) {
    case 0:
      dayWeek = "DOM";
      break;
    case 1:
      dayWeek = "SEG";
      break;
    case 2:
      dayWeek = "TER";
      break;
    case 3:
      dayWeek = "QUA";
      break;
    case 4:
      dayWeek = "QUI";
      break;
    case 5:
      dayWeek = "SEX";
      break;
    case 6:
      dayWeek = "SAB";
      break;
  }
  let currentDate = day + "/" + month + "/" + year;

  week.textContent = dayWeek;
  date.textContent = currentDate;
}
pickUpTime();
