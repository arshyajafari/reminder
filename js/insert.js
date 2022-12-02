// get reminder
const add = document.querySelector(".add-elements"),
  remind = document.querySelector(".remind-input"),
  list = document.querySelector(".list"),
  modeBtn = document.querySelector(".switch-btn");

// added reminder item with addEventListener
add.addEventListener("click", () => {
  if (remind.value.length === 0) return;

  const taskContainer = list.appendChild(document.createElement("li")),
    task = taskContainer.appendChild(document.createElement("span")),
    done = taskContainer.appendChild(document.createElement("i")),
    del = taskContainer.appendChild(document.createElement("i")),
    labelDate = taskContainer.appendChild(document.createElement("label")),
    dateInput = labelDate.appendChild(document.createElement("input")),
    slider = labelDate.appendChild(document.createElement("span"));

  taskContainer.className = "taskContainer";

  modeBtn.checked
    ? (taskContainer.style.color = "rgb(255, 255, 255)")
    : (taskContainer.style.color = "black");

  task.className = "task";
  del.className = "fa fa-trash";
  done.className = "fa fa-check";
  task.innerHTML = remind.value;
  remind.value = "";

  del.addEventListener("click", (e) => {
    e.target.parentElement.remove();
    document.querySelector(".datepicker").style.display = "none";
  });

  done.addEventListener("click", (e) => {
    e.target.previousSibling.style.textDecoration = "line-through";
  });

  labelDate.className = "date-box mt-4 mb-4";
  dateInput.type = "checkbox";
  dateInput.className = "date-input";
  slider.className = "toggle-date round";

  const dateBtn = document.querySelectorAll(".date-input");
  const date = task.appendChild(document.createElement("p"));

  date.className = "dateText";

  for (let i = 0; i < dateBtn.length; i++) {
    dateBtn[i].addEventListener("click", () => {
      dateBtn[i].checked
        ? (document.querySelector(".datepicker").style.display = "block")
        : (document.querySelector(".datepicker").style.display = "none");
    });
  }
});
