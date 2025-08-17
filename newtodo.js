const taskForm = document.querySelector("#todo-form");
const taskInput = document.querySelector("#todo-input");
const display = document.querySelector("#todo-list");

let todos = [];

function displayTodos() {
  display.innerHTML = "";

  // if (todos.length === 0) {
  //   const emptyMessage = document.createElement("p");
  //   emptyMessage.innerText = "No tasks available.";
  //   display.appendChild(emptyMessage);
  //   return;
  // }

  todos.forEach((todo, index) => {
    const eachItem = document.createElement("li");

    if (!todo.isEditing) {
      eachItem.innerText = todo.text;

      const editButton = document.createElement("button");
      editButton.innerText = "Edit";
      eachItem.appendChild(editButton);
      editButton.addEventListener("click", () => {
        todos[index].isEditing = true;
        displayTodos();
      });

      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      eachItem.appendChild(deleteButton);
      deleteButton.addEventListener("click", () => {
        todos.splice(index, 1);
        displayTodos();
      });
    } else {
      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = todo.text;
      eachItem.appendChild(editInput);

      const saveButton = document.createElement("button");
      saveButton.innerText = "Save";
      eachItem.appendChild(saveButton);

      saveButton.addEventListener("click", () => {
        todos[index].text = editInput.value.trim();
        todos[index].isEditing = false;
        displayTodos();
      });
    }

    display.appendChild(eachItem);
  });
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskText = taskInput.value;
  if (!taskText) return;

  todos.push({ text: taskText, completed: false, isEditing: false });
  taskInput.value = "";
  displayTodos();
});
