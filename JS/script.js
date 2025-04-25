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

// creating tables and their contents
const t1 = document.createElement('table'); //the first table containing all students
const t1Head = document.createElement('thead'); //its header
const t1Body = document.createElement('tbody');

const t1HeadRow = document.createElement('tr');  //row for the table head
// this loop creates an array of values to get the head titles
['Name', 'Class', 'Score'].forEach(text => {
    const th = document.createElement('th'); // the heading 
    th.textContent = text; // this tells the loop to use the value of each item in the array as its innerText
    th.classList.add('border', 'px-4', 'py-2', 'text-center');
    t1HeadRow.appendChild(th);
    t1Head.appendChild(t1HeadRow);

});


// creating the t1 body
studentRegister.forEach(student => {
    const tr = document.createElement('tr');

    Object.values(student).forEach((value, index) => { //this Object.value is an object method that returns all the value of an object as an array. I used two parameters because I want to style the values at index 0
        const td = document.createElement('td');
        td.textContent = value;
        td.classList.add('border', 'px-4', 'py-2', 'text-center');

        if (index === 0) {
            td.classList.add('font-bold');
        };
        tr.appendChild(td);
    });

    t1Body.appendChild(tr);
});



t1.appendChild(t1Head);
t1.appendChild(t1Body);
main.appendChild(t1);


outerWrapper.appendChild(main);



const footer = document.createElement('footer');

const footerLink = document.createElement('a');
footerLink.href = 'https://github.com/ch3f-dev';
footerLink.textContent = 'Click here to visit my Github';
footerLink.target = '_blank';

footer.appendChild(footerLink);
outerWrapper.appendChild(footer);





