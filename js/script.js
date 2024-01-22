let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}












// function addTimetableEntry() {
//     const day = document.getElementById('day').value;
//     const time = document.getElementById('time').value;
//     const className = document.getElementById('class').value;

//     if (day && time && className) {
//         const timetableTable = document.getElementById('timetable');
//         const newRow = timetableTable.insertRow(-1);

//         const cellDay = newRow.insertCell(0);
//         const cellTime = newRow.insertCell(1);
//         const cellClass = newRow.insertCell(2);

//         cellDay.textContent = day.charAt(0).toUpperCase() + day.slice(1); // Capitalize the first letter
//         cellTime.textContent = time;
//         cellClass.textContent = className;
//     }
// }
