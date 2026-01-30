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
