// get clock elements
const hour = document.querySelector(".hour"),
  min = document.querySelector(".minute"),
  sec = document.querySelector(".second"),
  date = document.querySelector(".date");

// translate persian, arabic numbers to english numbers method
const fixNumbers = (convert) => {
  var persianNumbers = [
    /۰/g,
    /۱/g,
    /۲/g,
    /۳/g,
    /۴/g,
    /۵/g,
    /۶/g,
    /۷/g,
    /۸/g,
    /۹/g,
  ];
  var englishNumbers = [
    /0/g,
    /1/g,
    /2/g,
    /3/g,
    /4/g,
    /5/g,
    /6/g,
    /7/g,
    /8/g,
    /9/g,
  ];
  if (typeof convert === "string") {
    for (var i = 0; i < 10; i++) {
      convert = convert
        .replace(persianNumbers[i], i)
        .replace(englishNumbers[i], i);
    }
  }
  return convert;
};

// clock handler method
const updateClock = () => {
  var now = new Date();

  var s = now.getSeconds() * 6;
  var m = now.getMinutes() * 6 + s / 60;
  var h = ((now.getHours() % 12) / 12) * 360 + m / 12;

  var options = { day: "numeric" };
  var localDate = new Date().toLocaleDateString("fa-IR", options);
  let englishDate = fixNumbers(localDate);
  date.innerHTML = englishDate;
  hour.style.transform = `rotate(${h + m / 12}deg)`;
  min.style.transform = `rotate(${m}deg)`;
  sec.style.transform = `rotate(${s}deg)`;
};

setInterval(updateClock, 500);
