const todoList = [
  {id: 1, task: 'Learn HTML', completed: true},
  {id: 2, task: 'Learn CSS', completed: true},
  {id: 3, task: 'Learn JS', completed: false},
  {id: 4, task: 'Learn TypeScript', completed: false},
  {id: 5, task: 'Learn React', completed: false},
];

function renderTodoList() {
  const ul = document.getElementById('todo-list');
  ul.innerHTML = '';

  todoList.forEach(item => {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.completed;
    checkbox.addEventListener('change', () =>
      updateCompletion(item.id, checkbox.checked)
    );

    const label = document.createElement('label');
    label.textContent = item.task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', () => deleteTodoItem(item.id));

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);
    ul.appendChild(li);
  });
  console.log(todoList);
}

function updateCompletion(id, completed) {
  const todo = todoList.find(item => item.id === id);
  if (todo) {
    todo.completed = completed;
  }
  renderTodoList();
}

function deleteTodoItem(id) {
  const index = todoList.findIndex(item => item.id === id);
  if (index !== -1) {
    todoList.splice(index, 1);
  }
  renderTodoList();
}

function addTodoItem(task) {
  const newItem = {
    id: Date.now(),
    task,
    completed: false,
  };
  todoList.push(newItem);
  renderTodoList();
}

document.getElementById('open-dialog').addEventListener('click', () => {
  const dialog = document.getElementById('add-dialog');
  dialog.showModal();
});

document.getElementById('add-form').addEventListener('submit', e => {
  e.preventDefault();
  const newItemInput = document.getElementById('new-item');
  const task = newItemInput.value;
  addTodoItem(task);
  newItemInput.value = '';
  document.getElementById('add-dialog').close();
});

renderTodoList();
