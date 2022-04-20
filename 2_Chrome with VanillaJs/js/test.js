const clockTitle = document.querySelector(".js-clock");

const christmasDay = new Date("2022-12-25");
const chrisMilli = christmasDay.getTime();

function getTimeUntilChris() {
  let nowDate = new Date();
  let nowMilli = nowDate.getTime();

  let milliSecond = chrisMilli - nowMilli;
  const date = Math.round(milliSecond / (1000 * 3600 * 24));
  const date_v = milliSecond % (1000 * 3600 * 24);

  let hour = String(Math.round(date_v / (1000 * 3600)));
  const hour_v = date_v % (1000 * 3600);
  hour = hour.padStart(2, "0");

  let min = String(Math.round(hour_v / (1000 * 60)));
  const min_v = hour_v % (1000 * 60);
  min = min.padStart(2, "0");

  const sec = String(Math.round(min_v / 1000)).padStart(2, "0");
  clockTitle.innerHTML = `${date}d ${hour}h ${min}m ${sec}s`;
}

setInterval(getTimeUntilChris, 1000);
