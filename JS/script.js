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
    {name: 'Shark Dolphin', class: 'web 2', score: 44},
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
main.classList.add('bg-blue-200', 'gap-y-5');

// creating tables and their contents

// const t1HeadRow = document.createElement('tr');  //row for the table head
// // this loop creates an array of values to get the head titles
// ['S/N','Name', 'Class', 'Score', 'Grade'].forEach(text => {
//     const th = document.createElement('th'); // the heading 
//     th.textContent = text; // this tells the loop to use the value of each item in the array as its innerText
//     th.classList.add('border', 'px-4', 'py-2', 'text-center');
//     t1HeadRow.appendChild(th);
//     t1Head.appendChild(t1HeadRow);
// });

// this function creates the headers for each tables without having to rewrite the code again
function tableHeaders(headers) {
    const tHead = document.createElement('thead');
    const tHeadRow = document.createElement('tr');

    headers.forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        th.classList.add('border', 'px-4', 'py-2', 'text-center');
        tHeadRow.appendChild(th);
    });
    tHead.appendChild(tHeadRow);
    return tHead;
};


const t1 = document.createElement('table'); //the first table containing all students
t1.classList.add('mb-10');
const t1Head = tableHeaders(['S/N', 'Name', 'Class', 'Score', 'Grade']); //its header
const t1Body = document.createElement('tbody');




let serialNo = 1;
// creating the t1 body
studentRegister.forEach(student => {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.textContent = serialNo++;
    td.classList.add('border', 'px-4', 'py-2', 'text-center', 'font-bold');
    tr.appendChild(td);

    Object.values(student).forEach((value, index) => { //this Object.value is an object method that returns all the value of an object as an array. I used two parameters because I want to style the values at index 0
        const td = document.createElement('td');
        td.textContent = value;
        td.classList.add('border', 'px-4', 'py-2', 'text-center');


        if (index === 0) {
            td.classList.add('font-bold');
        };
        tr.appendChild(td);
    });



    let grade = '';
    let gradeColour = '';

    if (student.score <= 39) {
        grade = 'F';
        gradeColour = 'text-red-500';
    } else if
        (student.score >= 40 && student.score <= 44) {
        grade = 'E';
        gradeColour = 'text-orange-500';
    } else if
        (student.score >= 45 && student.score <= 49) {
        grade = 'D';
        gradeColour = 'text-yellow-500';
    } else if
        (student.score >= 50 && student.score <= 59) {
        grade = 'C';
        gradeColour = 'text-green-500';
    } else if
        (student.score >= 60 && student.score <= 69) {
        grade = 'B';
        gradeColour = 'text-blue-500';
    } else if
        (student.score >= 70) {
        grade = 'A';
        gradeColour = 'text-black';
    };

    if (grade) {
        const td = document.createElement('td');
        td.textContent = grade;
        td.classList.add('border', 'px-4', 'py-2', 'text-center', gradeColour, 'font-bold');
        tr.appendChild(td);
    }

    t1Body.appendChild(tr);
});





t1.appendChild(t1Head);
t1.appendChild(t1Body);
main.appendChild(t1);


const t2 = document.createElement('table'); //the second table containing all students
const t2Head = tableHeaders(['S/N', 'Name', 'Class', 'Score']); //its header
const t2Body = document.createElement('tbody') //its body


const t3 = document.createElement('table'); //the third table containing all students
const t3Head = tableHeaders(['S/N', 'Name', 'Class', 'Score']); //its header
const t3Body = document.createElement('tbody') //its body

const t4 = document.createElement('table'); //the fourth table containing all students
const t4Head = tableHeaders(['S/N', 'Name', 'Class', 'Score']); //its header
const t4Body = document.createElement('tbody') //its body

const t5 = document.createElement('table'); //the fifth table containing all students
const t5Head = tableHeaders(['S/N', 'Name', 'Class', 'Score']); //its header
const t5Body = document.createElement('tbody') //its body

const t6 = document.createElement('table'); //the sixth table containing all students
const t6Head = tableHeaders(['S/N', 'Name', 'Class', 'Score']); //its header
const t6Body = document.createElement('tbody') //its body


// this function generates table bodies for different categories of grades
function tableBodies(tableBody, condition) {
    let serialNo = 1;
    studentRegister.forEach(student => {
        if (condition(student)) {
            const tr = document.createElement('tr');
            const td = document.createElement('td');
            td.textContent = serialNo++;
            td.classList.add('border', 'px-4', 'py-2', 'text-center', 'font-bold');
            tr.appendChild(td);

            Object.values(student).forEach(value => {
                const td = document.createElement('td');
                td.textContent = value;
                td.classList.add('border', 'px-10', 'py-2', 'text-center');
                tr.appendChild(td);
            });
            tableBody.appendChild(tr);
        }
    });
};

tableBodies(t2Body, student => student.score <= 39);
tableBodies(t3Body, student => student.score >= 40 && student.score <= 44);
tableBodies(t4Body, student => student.score >= 45 && student.score <= 49);
tableBodies(t5Body, student => student.score >= 50 && student.score <= 59);
tableBodies(t6Body, student => student.score >= 60 && student.score <= 69);


 
t2.appendChild(t2Head);
t2.appendChild(t2Body);
t3.appendChild(t3Head);
t3.appendChild(t3Body);
t4.appendChild(t4Head);
t4.appendChild(t4Body);
t5.appendChild(t5Head);
t5.appendChild(t5Body);
t6.appendChild(t6Head);
t6.appendChild(t6Body);

main.appendChild(t2);
main.appendChild(t3);
main.appendChild(t4);
main.appendChild(t5);
main.appendChild(t6);


outerWrapper.appendChild(main);






const footer = document.createElement('footer');

const footerLink = document.createElement('a');
footerLink.href = 'https://github.com/ch3f-dev';
footerLink.textContent = 'Click here to visit my Github';
footerLink.target = '_blank';

footer.appendChild(footerLink);
outerWrapper.appendChild(footer);





