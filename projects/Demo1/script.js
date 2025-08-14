const username = document.getElementById("username");
const password = document.getElementById("password");
const form1 = document.getElementById("loginFrom1");

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  if (username.value === "s@123" && password.value === "s@123456") {
    alert("Login Successful");
    e.AT_TARGET
  }
  else{
    alert("Invalid Credentials");
  }
});
