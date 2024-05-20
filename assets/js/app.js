const formEl = document.querySelector(".form");
const usernameEl = document.querySelector(".username");
const passwordEl = document.querySelector(".password");
 const ochiq = document.querySelector(".bi-eye");
 const yopiq = document.querySelector(".bi-eye-slash");


let adminName = "temur";
let adminParol = "20080808";

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  if (adminName == usernameEl.value && adminParol == passwordEl.value) {
    alert("Success");
    usernameEl.value = "";
    passwordEl.value = "";
    document.body.style.background = "green";

    document.getElementById("container").innerHTML = "";
  }else if (adminName !== usernameEl.value) {
    alert("Invalid name!");
    usernameEl.value = "";
    passwordEl.value = "";
    document.body.style.background = "red";
  } else if (adminParol !== passwordEl.value) {
    alert("Password error!");
    // document.body.style.background = "red";
    usernameEl.value = "";
    passwordEl.value = "";
    // document.body.style.display = "none";
    document.body.style.background = "red";
  }

  
});
yopiq.addEventListener("click", () => {
    passwordEl.setAttribute("type", "text")
    yopiq.style.display = "none"
    ochiq.style.display = "block"
})

ochiq.addEventListener("click", () => {
    passwordEl.setAttribute("type", "password")
    yopiq.style.display = "block"
    ochiq.style.display = "none"
})



