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

function createOuterTodoContainer() {
  var outerTodoContainer = document.createElement("a");
  outerTodoContainer.id = "todo_" + todoCounter;
  outerTodoContainer.href = "#";
  outerTodoContainer.classList.add("x");
  outerTodoContainer.className = "list-group-item list-group-item-action";
  outerTodoContainer.setAttribute("aria-current", "true");
  // outerTodoContainer.addEventListener("click", () => {
  //   alert("This is a test");
  // });
  return outerTodoContainer;
}

function createDateContainer() {
  var divForDate = document.createElement("div");
  divForDate.classList.add("d-flex", "w-100", "justify-content-between");
  return divForDate;
}

function createDate() {
  var date = document.createElement("h5");
  date.classList.add("mb-1");
  date.innerHTML = returnCurrentDate()[0];
  return date;
}

function createTime() {
  var time = document.createElement("small");
  time.innerHTML = returnCurrentDate()[1];
  return time;
}

function createTodo() {
  var todo = document.createElement("p");
  todo.classList.add("mb-1");
  todo.innerHTML = document.getElementById("todoInput").value;
  return todo;
}

function createDescriptionContainer() {
  var divForDescription = document.createElement("div");
  divForDescription.classList.add("mb-3");
  divForDescription.style = "margin-top:10px!important;";
  return divForDescription;
}

function createDescription() {
  var description = document.createElement("textarea");
  description.id = "todo_" + todoCounter + "_description";
  description.classList.add("form-control");
  description.style = "background-color: #212529;";
  description.disabled = true;
  description.innerHTML = document.getElementById("todoDescription").value;
  return description;
}

function createCloseButton() {
  var closeTodoBtn = document.createElement("button");
  closeTodoBtn.type = "button";
  closeTodoBtn.classList.add("btn", "btn-primary");
  closeTodoBtn.style = "--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;";
  closeTodoBtn.innerHTML = "Close Todo";
  return closeTodoBtn;
}

function createNewTodoElement() {
  var initialHeadlineForTodo = document.getElementById("initialTodoHeadLine");
  if (initialHeadlineForTodo) initialHeadlineForTodo.remove();

  todoCounter += 1;

  var outerTodoContainer = createOuterTodoContainer();

  var dateTimeContainer = createDateContainer();
  var date = createDate();
  var time = createTime();
  dateTimeContainer.appendChild(date);
  dateTimeContainer.appendChild(time);
  outerTodoContainer.appendChild(dateTimeContainer);

  var todo = createTodo();
  outerTodoContainer.appendChild(todo);

  var descriptionContainer = createDescriptionContainer();
  var description = createDescription();
  descriptionContainer.appendChild(description);
  outerTodoContainer.appendChild(descriptionContainer);

  var closeButton = createCloseButton();
  closeButton.addEventListener("click", () => {
    outerTodoContainer.remove();
    var x = document.getElementById("list-group").childNodes.length;
    if (x == 2) {
      var initialTodoHeadLine = document.createElement("div");
      initialTodoHeadLine.id = "initialTodoHeadLine";

      var todoHeadline = document.createElement("h4");
      todoHeadline.innerHTML = "Add Todos to be displayed!";

      initialTodoHeadLine.appendChild(todoHeadline);
      document.getElementById("list-group").appendChild(initialTodoHeadLine);
    }
  });
  outerTodoContainer.appendChild(closeButton);
  
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
