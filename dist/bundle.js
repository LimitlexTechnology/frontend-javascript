/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/

const student1 = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 21,
    location: 'Accra',
};
const student2 = {
    firstName: 'John',
    lastName: 'Smith',
    age: 23,
    location: 'Kumasi',
};
const studentsList = [student1, student2];
const table = document.createElement('table');
const tbody = document.createElement('tbody');
studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);

/******/ })()
;
//# sourceMappingURL=bundle.js.map