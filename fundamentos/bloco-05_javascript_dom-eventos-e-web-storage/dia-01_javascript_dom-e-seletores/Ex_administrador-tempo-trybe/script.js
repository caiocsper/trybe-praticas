const emergencyTasks        = document.querySelector('.emergency-tasks');
const emergencyTasksTitle   = document.querySelectorAll('.emergency-tasks h3');
const noEmergencyTasks      = document.querySelector('.no-emergency-tasks');
const noEmergencyTasksTitle = document.querySelectorAll('.no-emergency-tasks h3');
const headerContainer       = document.getElementById('header-container');
const footerContainer       = document.getElementById('footer-container');
const body                  = document.getElementById('container');

body.style.backgroundColor              = 'rgb(243, 243, 243)'
emergencyTasks.style.backgroundColor    = 'rgb(255, 159, 132)';
noEmergencyTasks.style.backgroundColor  = 'rgb(249, 219, 94)';
headerContainer.style.backgroundColor   = 'rgb(0, 176, 105)';
footerContainer.style.backgroundColor   = 'rgb(0, 53, 51)';

for (let index = 0; index < emergencyTasksTitle.length; index += 1) {
  emergencyTasksTitle[index].style.backgroundColor = 'rgb(165, 0, 243)';
}

for (let index = 0; index < noEmergencyTasksTitle.length; index += 1) {
  noEmergencyTasksTitle[index].style.backgroundColor = 'rgb(35, 37, 37)';
}