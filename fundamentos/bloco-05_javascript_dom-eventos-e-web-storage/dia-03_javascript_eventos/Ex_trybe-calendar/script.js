function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const appointmentInput = document.querySelector('#task-input');
const btnAppointment = document.querySelector('#btn-add');

function appendDaysOfTheMonth(dayslist) {
  const daysList = document.querySelector('#days');

  for (let index = 0; index < dayslist.length; index += 1) {
    let dayListItem = document.createElement('li');
    dayListItem.innerText = dayslist[index];
    dayListItem.classList.add('day');

    if (index % 7 === 5) {
      dayListItem.classList.add('friday');
    }

    if (dayslist[index] === 24 || dayslist[index] === 25 || dayslist[index] === 31) {
      dayListItem.classList.add('holiday');
    }
    daysList.appendChild(dayListItem);
  }

}

function addBtn(btnText) {
  const parent = document.querySelector('.buttons-container');
  let btn = document.createElement('button');

  switch(btnText) {
    case 'Feriados':
      btn.id = 'btn-holiday';
      break;

    case 'Sexta-feira':
      btn.id = 'btn-friday';
      break;
  }

  btn.innerText = btnText;
  parent.appendChild(btn);
}

function toggleHolidays() {
  const holidayDays = document.querySelectorAll('.holiday');

  for (let index = 0; index < holidayDays.length; index += 1) {
    if (holidayDays[index].style.backgroundColor === 'rgb(160, 255, 211)') {
      holidayDays[index].style.backgroundColor = 'rgb(238, 238, 238)';
    } else {
      holidayDays[index].style.backgroundColor = 'rgb(160, 255, 211)';
    }
  }
}

function toggleFridays() {
  const fridayDays = document.querySelectorAll('.friday');

  for (let index = 0; index < fridayDays.length; index += 1) {
    if (fridayDays[index].style.color === 'rgb(51, 51, 51)') {
      fridayDays[index].style.color = 'rgb(119, 119, 119)';
    } else {
      fridayDays[index].style.color = 'rgb(51, 51, 51)';
    }
  }
}

function dayZoomIn(e) {
  e.target.style.transform = "scale(1.25)";
}

function dayZoomOut(e) {
  e.target.style.transform = "scale(1)";
}

function addTaskSpan(task) {
  const tasksContainer = document.querySelector('.my-tasks');
  const taskName = document.createElement('span');

  taskName.innerText = task;
  tasksContainer.appendChild(taskName);
};

function addTaskDiv(color) {
  const tasksContainer = document.querySelector('.my-tasks');
  const taskCaption = document.createElement('div');

  taskCaption.className = 'task';
  taskCaption.style.backgroundColor = color;
  tasksContainer.appendChild(taskCaption);
};

function toggleSelectedTask(e) {
  const selectedTasks = document.querySelectorAll('.my-tasks div.selected');

  for (let index = 0; index < selectedTasks.length; index += 1) {
    if (selectedTasks[index].classList.contains('selected') && selectedTasks[index] !== e.target) {
      selectedTasks[index].classList.remove('selected');
    } else {
      e.target.classList.add('selected');
    }
  }


  if (e.target.classList.contains('selected')) {
    e.target.classList.remove('selected');
  } else {
    e.target.classList.add('selected');
  }
}

function changeColorToSelected(e) {
  const selectedDiv = document.querySelector('.my-tasks div.selected');

  if (selectedDiv !== null) {
    e.target.style.color = selectedDiv.style.backgroundColor;
  } else {
    e.target.style.color = 'rgb(119,119,119)';
  }
}

function addAppointment(e) {
  if (e.key === 'Enter' || e.target === btnAppointment) {
    const parent = document.querySelector('.task-list-container .task-list');
    const taskDescription = document.querySelector("#task-input").value;
    const taskBody = document.createElement('div');
    const taskCount = document.querySelectorAll("ul.task-list div");

    if(taskDescription === '') {
      alert('ERRO!!!');
      return false;
    }
    
    taskBody.innerText = `#${taskCount.length + 1} Compromisso: ${taskDescription}`;
    parent.appendChild(taskBody);
  }
}


createDaysOfTheWeek();
appendDaysOfTheMonth(dezDaysList);
addBtn('Feriados');
addBtn('Sexta-feira');
addTaskSpan('Projeto:');
addTaskDiv('green');
addTaskSpan('Folga:');
addTaskDiv('red');

const btnFeriados = document.querySelector('#btn-holiday');
const btnSextas = document.querySelector('#btn-friday');
const daysOfTheMonth = document.querySelectorAll('.day');
const tasksCaption = document.querySelectorAll('.my-tasks .task');

btnFeriados.addEventListener('click', toggleHolidays);
btnSextas.addEventListener('click', toggleFridays);
btnAppointment.addEventListener('click', addAppointment)
appointmentInput.addEventListener('keypress', addAppointment);

for(let index = 0; index < tasksCaption.length; index += 1) {
  tasksCaption[index].addEventListener('click', toggleSelectedTask);
}

for(let index = 0; index < daysOfTheMonth.length; index += 1) {
  daysOfTheMonth[index].addEventListener('mouseover', dayZoomIn);
  daysOfTheMonth[index].addEventListener('mouseout', dayZoomOut);
  daysOfTheMonth[index].addEventListener('click', changeColorToSelected);
}

/* Implemente uma função que adiciona uma tarefa personalizada ao calendário.
A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks". */
