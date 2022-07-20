const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const months = String(date.getMonth()).padStart(2, "0");
  const today_date = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${months}월 ${today_date}일 ${hours}시 ${minutes}분 ${seconds}초 `;
}

getClock();
setInterval(getClock, 1000);
