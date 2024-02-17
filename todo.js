var todoCounter = 0;

function returnCurrentDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var day = day < 10 ? "0" + day : day;
  var month = currentDate.getMonth();
  var month = month < 10 ? "0" + month : month;
  var todoDate = day + "." + month + "." + currentDate.getFullYear();
  var minutes = currentDate.getMinutes();
  var hours = currentDate.getHours();
  var todoTime = `${(hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes)} Uhr`;
  return [todoDate, todoTime]
}

function createNewTodoElement() {
  var initialHeadlineForTodo = document.getElementById("initialTodoHeadLine");
  if (initialHeadlineForTodo) {
    initialHeadlineForTodo.remove();
  }

  todoCounter += 1;

  //input todo
  var todoInput = document.getElementById("todoInput").value;

  //create a tag
  var outerTodoContainer = document.createElement("a");
  outerTodoContainer.href = "#";
  outerTodoContainer.classList.add("x");
  outerTodoContainer.className = "list-group-item list-group-item-action";
  outerTodoContainer.setAttribute("aria-current", "true");

  //create div
  var divForDate = document.createElement("div");
  divForDate.classList.add("d-flex", "w-100", "justify-content-between");

  //create h5 for date
  var date = document.createElement("h5");
  date.classList.add("mb-1");
  date.innerHTML = returnCurrentDate()[0];

  //create small time
  var time = document.createElement("small");
  time.innerHTML = returnCurrentDate()[1];

  //create p todo headline
  var todo = document.createElement("p");
  todo.classList.add("mb-1");
  todo.innerHTML = todoInput;

  //create small headline subtasks
  // var headlineSubtasks = document.createElement("small");
  // headlineSubtasks.innerHTML = "Subtasks";

  //create small for subtasks
  var subtaskContainer = document.createElement("small");

  //create ul
  var subtaskList = document.createElement("ul");
  subtaskList.classList.add("list-group");
  subtaskList.style = "margin-top: 5px;";

  //create subtask
  var subtask = document.createElement("li");
  subtask.classList.add("list-group-item");

  //create input
  // var subtaskCounter = 0;
  // var subtaskCheckbox = document.createElement("input");
  // subtaskCheckbox.classList.add("form-check-input", "me-1");
  // subtaskCheckbox.type = "checkbox";
  // subtaskCheckbox.value = "";
  // subtaskCheckbox.id = "todo" + todoCounter + "_CheckboxStretched";

  //create label
  // var subtaskLabel = document.createElement("label");
  // subtaskLabel.classList.add("form-check-label", "stretched-link");
  // subtaskLabel.htmlFor = "todo" + todoCounter + "_labelStretched";
  // subtaskLabel.innerHTML = "Milch";

  // append elements
  outerTodoContainer.appendChild(divForDate);
  divForDate.appendChild(date);
  divForDate.appendChild(time);
  outerTodoContainer.appendChild(todo);
  //outerTodoContainer.appendChild(headlineSubtasks);
  outerTodoContainer.appendChild(subtaskContainer);
  //subtaskContainer.appendChild(subtaskList);
  // subtaskList.appendChild(subtask);
  // subtask.appendChild(subtaskCheckbox);
  // subtask.appendChild(subtaskLabel);

  // add to list
  var todoList = document
    .getElementById("todoList")
    .getElementsByTagName("ul")[0];
  todoList.appendChild(outerTodoContainer);

  // clear input
  document.getElementById("todoInput").value = "";
}

/**
 * Registers all events
 */
function registerEvents() {
  document
    .getElementById("addTodoBtn")
    .addEventListener("click", createNewTodoElement);
}
registerEvents();
