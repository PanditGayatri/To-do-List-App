function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskList = document.getElementById("task-list");
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";

  const span = document.createElement("span");
  span.textContent = taskText;
  span.className = "task-text";

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "delete-btn";

  // Event: Checkbox checked or unchecked
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      li.classList.add("completed");
      showMessage("You completed your one task ✅");
    } else {
      li.classList.remove("completed");
      clearMessage();
    }
    checkAllCompleted();
  });

  // Event: Delete button
  delBtn.addEventListener("click", () => {
    taskList.removeChild(li);
    checkAllCompleted();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);

  taskList.appendChild(li);
  taskInput.value = "";

  clearMessage(); // clear message when new task is added
}

function showMessage(msg) {
  const message = document.getElementById("message");
  message.textContent = msg;
}

function clearMessage() {
  document.getElementById("message").textContent = "";
}

function checkAllCompleted() {
  const allTasks = document.querySelectorAll("#task-list li");
  const completedTasks = document.querySelectorAll("#task-list li.completed");

  if (allTasks.length > 0 && allTasks.length === completedTasks.length) {
    showMessage("🎉 You successfully completed all tasks!");
  }
}
