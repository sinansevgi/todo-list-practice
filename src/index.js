import './style.css';

const tasks = [
  {
    description: 'Wake up',
    completed: true,
    index: 1,
  },
  {
    description: 'Walk my dog',
    completed: true,
    index: 2,
  },
  {
    description: 'Do the dishes',
    completed: false,
    index: 3,
  },
  {
    description: 'Take trash out',
    completed: false,
    index: 4,
  },
];

function simpleTasks(tasks) {
  while (tasks.length) {
    const current = tasks.shift();

    const task = document.createElement('LI');

    const checkbox = document.createElement('input');

    checkbox.type = 'checkbox';
    checkbox.name = current.index;
    checkbox.value = current.completed;
    checkbox.checked = current.completed;
    checkbox.id = current.index;

    const label = document.createElement('label');

    label.htmlFor = current.index;

    label.appendChild(document.createTextNode(current.description));
    label.classList.add('task-label');

    const btn = document.createElement('BUTTON');

    btn.classList.add('actions');

    task.appendChild(checkbox);
    task.appendChild(label);
    task.appendChild(btn);

    task.classList.add('task');

    document.getElementsByClassName('todo-list')[0].appendChild(task);
  }
}

simpleTasks(tasks);