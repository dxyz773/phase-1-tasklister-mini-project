document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const imputField = e.target.new_task_description.value;
    createTaskEl(imputField);
    form.reset();
  });
});

function createTaskEl(input) {
  const p = document.createElement("p");
  p.textContent = `${input}  `;
  const btn = document.createElement("button");
  btn.textContent = "x";
  btn.addEventListener("click", removeTaskEl);
  const check = document.createElement("input");
  check.type = "checkbox";
  p.style.display = "flex";
  p.style.gap = "2px";
  p.style.alignItems = "center";
  p.appendChild(btn);
  p.appendChild(check);
  document.getElementById("tasks").appendChild(p);
}

function removeTaskEl(e) {
  e.target.parentNode.remove();
}
