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

  //create a tag
  var outerTodoContainer = document.createElement("a");
  outerTodoContainer.href = "#";
  outerTodoContainer.classList.add("x");
  outerTodoContainer.className = "list-group-item list-group-item-action";
  outerTodoContainer.setAttribute("aria-current", "true");

  //create div for date
  var divForDate = document.createElement("div");
  divForDate.classList.add("d-flex", "w-100", "justify-content-between");
  outerTodoContainer.appendChild(divForDate);

  //create date
  var date = document.createElement("h5");
  date.classList.add("mb-1");
  date.innerHTML = returnCurrentDate()[0];
  divForDate.appendChild(date);

  //create time
  var time = document.createElement("small");
  time.innerHTML = returnCurrentDate()[1];
  divForDate.appendChild(time);

  //create p todo headline
  var todo = document.createElement("p");
  todo.classList.add("mb-1");
  todo.innerHTML = document.getElementById("todoInput").value;
  outerTodoContainer.appendChild(todo);

  //create div for description
  var divForDescription = document.createElement("div");
  divForDescription.classList.add("mb-3");
  divForDescription.style = "margin-top:10px!important;";
  outerTodoContainer.appendChild(divForDescription);

  //create description
  var description = document.createElement("textarea");
  description.id = "todo_" + todoCounter + "_description";
  description.classList.add("form-control");
  description.style = "background-color: #212529;";
  description.disabled = true;
  description.innerHTML = document.getElementById("todoDescription").value;
  divForDescription.appendChild(description);

  //create close button
  var closeTodoBtn = document.createElement("button");
  closeTodoBtn.type = "button";
  closeTodoBtn.classList.add("btn", "btn-primary");
  closeTodoBtn.style = "--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; margin-top: 10px!important;";
  closeTodoBtn.innerHTML = "Close Todo";

  closeTodoBtn.addEventListener("click", () => {
    outerTodoContainer.remove()
  });

  outerTodoContainer.appendChild(closeTodoBtn);

  // add to list
  var todoList = document
    .getElementById("todoList")
    .getElementsByTagName("ul")[0];
  todoList.appendChild(outerTodoContainer);

  // clear input
  document.getElementById("todoInput").value = "";
  document.getElementById("todoDescription").value = "";
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
