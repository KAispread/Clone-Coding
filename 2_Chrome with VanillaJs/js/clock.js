const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
setInterval(getClock, 1000); //sayHello 라는 함수를 5초마다 실행

// setTimeout(sayHello, 5000); // sayHello 라는 함수를 5초후에 실행

const date = new Date(22 - 12 - 25);

console.log(date.getDate());
// date.getFullYear();
// date.getDay();
// date.getHours();
// date.getMinutes();
// date.getSeconds();
