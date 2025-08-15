const todoInput = document.getElementById("todoInput");
const todoDescInput = document.getElementById("todoDescInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoMainContainer =
  document.getElementsByClassName("todoMainContainer")[0];

let todoList = [];

const showTodo = () => {
  const stringTodos = localStorage.getItem("todos");
  if (stringTodos) {
    todoList = JSON.parse(stringTodos);
  }
};

showTodo();

// Adding todo in array and then in localStorage
addTodoBtn.addEventListener("click", () => {
  console.log(todoInput.value);
  const todo = {
    todoName: todoInput.value,
    todoDescInput: todoDescInput.value,
    date: Date.now(),
    status: false,
  };
  todoList.push(todo);
  const strigifiedTodoList = JSON.stringify(todoList);
  localStorage.setItem("todos", strigifiedTodoList);
  todoInput.value = null;
  todoDescInput.value = null;
  window.location.reload();
});

//showing Todos in DOM
todoMainContainer.innerHTML = todoList.map((todo) => {
  return `<div  id='${todo.date}' class="todos">
            <div class="todoDetails">
              <h3>${todo.todoName}</h3>
              <p>${todo.todoDescInput}</p>
              <p>${todo.date}</p>
            </div>
            <div class="todoActions">
              <label class="switch">
                <input class='checkBtn' type="checkbox">
                <span class="slider round"></span>
              </label>
              <button  class='deleteBtn' ><img src="/public/icons8-delete.svg" alt=""></button>
            </div>
          </div>  `;
});

//changeStatus of todo

const checkBtn = document.getElementsByClassName("checkBtn");

Array.from(checkBtn).map((element) => {
  element.addEventListener("change", (e) => {
    // console.log(e.target.parentElement.parentElement.parentElement.getAttribute("id"));
    console.log(e.target.value);

    const filteredTodo = todoList.map((todo, index) => {
      if (
        todo.date ===
        Number(
          e.target.parentElement.parentElement.parentElement.getAttribute("id")
        )
      ) {
        return todo;
      }
    });
    filteredTodo[0].status = e.target.value;
    console.log("todo", filteredTodo[0]);
  });
});


//Delete todo
const deleteBtn = document.getElementsByClassName("deleteBtn");

Array.from(deleteBtn).map((element) => {
  element.addEventListener("click", (e) => {
    const filteredTodo = todoList.findIndex((todo, index) => {
      return (
        todo.date ===
        Number(
          e.target.parentElement.parentElement.parentElement.getAttribute("id")
        )
      );
    });
    console.log("todo", filteredTodo);
    todoList.splice(filteredTodo, 1);
    const strigifiedTodoList = JSON.stringify(todoList);
    localStorage.setItem("todos", strigifiedTodoList);
    window.location.reload();
  });
});
