const title = document.querySelector("#title");

console.dir(title);
title.innerText = "Got you!";

function handleTitleClick() {
  // const currentColor = this.style.color;
  // let newColor;
  // if (currentColor === "blue") {
  //   newColor = "tomato";
  // } else newColor = "blue";

  // this.style.color = newColor;
  const clickedClass = "active";

  // if (this.classList.contains(clickedClass)) {
  //   // this 객체가 "active"라는 클래스 이름을 가지고 있는지 확인
  //   this.classList.remove(clickedClass);
  // } else this.classList.add(clickedClass);

  this.classList.toggle(clickedClass);
  // classList에 인자가 있는지 확인, 있다면 해당 class를 지움, 없다면 class를 추가
  // class="sexy-font active" => class="sexy-font" => class="sexy-font active" [Again and again]
}

title.addEventListener("click", handleTitleClick);

// let handleMouseEnter = () => {
//   console.log("mouse is here!");
// };

// let handleMouseLeave = () => {
//   console.log("mouse is gone!!");
// };

// function handleWindowResize() {
//   document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
//   alert("copy!");
// }

// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);

/*
JavaScript의 이벤트를 알아보는 방법
1. Search on google = mdn - Web APIs 
2. console.dir("element") 입력 후 console 창에서 object의 속성들을 확인.

이벤트 실행 처리 방법
1. Element.addEventListener
2. Element.event


ㆍ HTML의 body, head, title과 같은 중요한 고유의 속성들은 document.body 처럼 접근 가능
ㆍ 나머지 element는 querySelector 사용.

ㆍ window객체를 통해 resize, copy와 같은 동작에 대해 이벤트 처리 가능.
*/
