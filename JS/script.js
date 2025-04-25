// declaring variables
const studentRegister = [
    { name: 'Tom Cruise', class: 'web 1', score: 30 },
    {name: 'Jerry Yatch', class: 'web 2', score: 45},
    {name: 'Sonia Cold', class: 'web 3', score: 59},
    {name: 'Lammy Lawd', class: 'web 1', score: 68},
    {name: 'Johnny Walker', class: 'web 2', score: 90},
    {name: 'Ashley Old', class: 'web 3', score: 90},
    {name: 'Tinchang Fang', class: 'web 1', score: 90},
    {name: 'Elon Musty', class: 'web 2', score: 50},
    {name: 'Rodrigo Comeback', class: 'web 3', score: 60},
    {name: 'Jin Sun', class: 'web 1', score: 89},
    {name: 'Cardoso Pyam', class: 'web 2', score: 87},
    {name: 'Meta Mask', class: 'web 3', score: 49},
    {name: 'Edward Piajok', class: 'web 1', score: 60},
    {name: 'Jennifer Raka', class: 'web 2', score: 90},
    {name: 'Block Fuselabs', class: 'web 3', score: 95},
    {name: 'Tantrum Lorem', class: 'web 1', score: 90},
    {name: 'Nzem Berom', class: 'web 2', score: 90},
    {name: 'Plateau Jos', class: 'web 3', score: 90},
    {name: 'Jonah Fish', class: 'web 1', score: 90},
    {name: 'Shark Dolphin', class: 'web 2', score: 90},
    {name: 'King David', class: 'web 3', score: 90},
    
];

const body = document.getElementsByTagName('body');
const outerWrapper = document.querySelector('.outerWrapper');

// creating the header
const header = document.createElement('header');
const nav = document.createElement('nav');
nav.classList.add('bg-gray-300');
const navUl = document.createElement('ul');

// creating contents in the nav
const allStudents = document.createElement('li');
allStudents.innerHTML = '<a href="#">All Students</a>';
const studentsByClass = document.createElement('li');
studentsByClass.innerHTML = '<a href="#">Students By Class</a>';
const studentsByGrade = document.createElement('li');
studentsByGrade.innerHTML = '<a href="#">Students By Grade</a>';

navUl.classList.add('flex', 'justify-between', 'items-center', 'w-full', 'gap-4', 'py-4', 'px-20'); //styling the ul before pushing the contents

// pushing all header elements into their containers
navUl.appendChild(allStudents);
navUl.appendChild(studentsByClass);
navUl.appendChild(studentsByGrade);


nav.appendChild(navUl);
header.appendChild(nav);
outerWrapper.appendChild(header);

// Now the main contents of the page
const main = document.createElement('main');
main.classList.add('bg-blue-200');


outerWrapper.appendChild(main);
const footer = document.createElement('footer');





