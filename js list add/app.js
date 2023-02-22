const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const ClearBtn = document.querySelector(".clear-tasks");
const Filter = document.querySelector("#filter");
const TaskInput = document.querySelector("#task");

loadEventListeners();
function loadEventListeners() {
  document.addEventListener("DOMContentLoaded", getTasks);
  form.addEventListener("submit", addTask);
  taskList.addEventListener("click", removeTask);
  ClearBtn.addEventListener("click", clearTask);
  Filter.addEventListener("keyup", filterTask);
}

function addTask(e) {
  e.preventDefault();
  if (TaskInput.value === "") {
    alert("add a task");
  }
  const li = document.createElement("li");
  li.className = "collection-item";
  li.append(document.createTextNode(TaskInput.value));
  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  link.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  li.appendChild(link);
  taskList.appendChild(li);
  //StoreTASKINLOCALSTORAGE
  storeTaskInLocalStorage(TaskInput.value);
  TaskInput.value = "";

  console.log(li);
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("are you sure?")) {
      e.target.parentElement.parentElement.remove();
      removeTaskFromLocaltrorage(e.target.parentElement.parentElement);
    }
  }
}
function clearTask() {
  taskList.innerHTML = "";
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  clearTaskFromLocalStorage()
}
function filterTask(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach((element) => {
    const item = element.firstChild.textContent;

    if (item.toLowerCase().indexOf(text) != -1) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}
function storeTaskInLocalStorage(task) {
  let tasks;

  if (localStorage.getItem("tasks") == null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") == null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach((element) => {
    const li = document.createElement("li");
    li.className = "collection-item";
    li.append(document.createTextNode(element));
    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
  });
}
function removeTaskFromLocaltrorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") == null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach((element) => {
    if (taskItem.textContent === element) tasks.splice(index, 1);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function clearTaskFromLocalStorage(){
    localStorage.clear()
}