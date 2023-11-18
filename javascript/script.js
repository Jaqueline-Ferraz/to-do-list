function addHabit() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  const alertContainer = document.getElementById("alertContainer");

  if (taskText === "") {
    showAlert("Adicione uma tarefa!", "error");
    return;
  }

  const daysCheckBoxes = document.querySelectorAll(".checkbox-btn");
  const selectedDays = Array.from(daysCheckBoxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.id);

  if (selectedDays.length === 0) {
    showAlert("Selecione pelo menos um dia!", "error");
    return;
  }

  const habitContainer = document.getElementById("habitContainer");

  const newHabitContainer = document.createElement("div");
  newHabitContainer.classList.add("habit", "animate-fade");

  const habitContainerCopy = document.querySelector(".habit-container").cloneNode(true);
  habitContainerCopy.querySelector("p").textContent = taskText;

  selectedDays.forEach((day) => {
    const checkbox = habitContainerCopy.querySelector(`#${day}`);
    checkbox.checked = true;
  });

  habitContainer.appendChild(newHabitContainer);

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteButton.classList.add("delete-button");

  deleteButton.addEventListener("click", function () {
    habitContainer.removeChild(newHabitContainer);
  });

  newHabitContainer.appendChild(deleteButton);
  newHabitContainer.appendChild(habitContainerCopy);

  taskInput.value = "";

  function showAlert(message, type) {
    const alertBox = document.createElement("div");
    alertBox.classList.add("alert-box", type);
    alertBox.textContent = message;
    alertContainer.appendChild(alertBox);

    alertContainer.style.display = "block";

    setTimeout(function () {
      alertContainer.removeChild(alertBox);
      alertContainer.style.display = "none";
    }, 4000);
  }
}
