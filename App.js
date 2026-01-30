function login() {window.onload = () => {
  if (localStorage.getItem("loggedIn") === "true") {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("appPage").classList.remove("hidden");
  }
};

  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("appPage").classList.remove("hidden");
  function login() {
  const username = document.querySelector('#loginPage input[type="text"]').value;
  const password = document.querySelector('#loginPage input[type="password"]').value;

  // demo credentials
  const validUser = "student";
  const validPass = "unido123";

  if (username === validUser && password === validPass) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("user", username);

    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("appPage").classList.remove("hidden");
  } else {
    alert("Invalid credentials");
  }
}

}function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("user");
  location.reload();
}


function addTask() {
  const text = taskInput.value.trim();
  const pr = priority.value;
  if (!text) return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${text} (${pr})</span>
    <button onclick="this.parentElement.remove()">✕</button>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
}

function toggleDark() {
  document.body.classList.toggle("dark");
}
