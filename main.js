
var todoCounter = 0

function createNewTodoElement() {
  todoCounter += 1;
}

/**
 * addTodo Function
 */
function addTodo() {
  //input
  var todoInput = document.getElementById("todoInput").value;
  console.log(todoInput);
  
  //list
  var newTodoListElement = document.createElement("li");
  newTodoListElement.classList.add("list-group-item");
  
  //checkbox in todo
  var newCheckboxInTodo = document.createElement("input");
  newCheckboxInTodo.type = "checkbox";
  newCheckboxInTodo.classList.add("x");
  newCheckboxInTodo.className = "form-check-input me-1";
  newCheckboxInTodo.innerHTML = "";
  
  //label in todo
  var newLabelInTodo = document.createElement("label");
  newLabelInTodo.classList.add("form-check-label");
  
  //add todo to todolist
  var todoList = document.getElementById("todoList").getElementsByTagName("ul")[0];
  todoList.appendChild(newTodoListElement);
  newTodoListElement.appendChild(newCheckboxInTodo);
  newTodoListElement.appendChild(newLabelInTodo);
  
  //change 
  newLabelInTodo.innerHTML = todoInput;
}

/**
 * Registers all events
 */
function registerEvents() {
  document.getElementById("addTodoBtn").addEventListener("click", addTodo);
}
registerEvents();