const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const loginButton = document.querySelector(".login-form button");
const textInput = document.querySelector("#greeting");
const HIDEN_CLASSNAME = "hidden";

greetingUser = () => {
  const userName = localStorage.getItem("username");

  loginForm.classList.add(HIDEN_CLASSNAME);
  textInput.innerHTML = `Hello ${userName}`;
  textInput.classList.remove(HIDEN_CLASSNAME);
};

onsubmit = (toto) => {
  toto.preventDefault();
  // submit의 기본 동작을 막음

  const userName = loginInput.value;

  localStorage.setItem("username", userName);
  // 로컬 저장소에 username 저장

  greetingUser();
};

if (localStorage.getItem("username") !== null) {
  greetingUser();
}

loginForm.addEventListener("submit", onsubmit);
