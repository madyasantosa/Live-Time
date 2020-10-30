function renderTime() {
  var days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  var months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  day = new Date().getDay();
  date = new Date().getDate();
  month = new Date().getMonth();
  year = new Date().getFullYear();
  hour = new Date().getHours();
  minute = new Date().getMinutes();
  second = new Date().getSeconds();

  dayNow = days[day] + ", " + date + " " + months[month] + " " + year;

  dayNowId = document.getElementById("dayNow");
  hourId = document.getElementById("hour");
  minuteId = document.getElementById("minute");
  secondId = document.getElementById("second");

  dayNowId.innerText = dayNow;
  hourId.innerText = hour + "j";
  minuteId.innerText = minute + "m";
  secondId.innerText = second + "d";
}
setInterval(renderTime, 500);
