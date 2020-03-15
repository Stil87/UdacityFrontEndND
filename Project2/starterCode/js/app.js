/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/






/**
 * Define Global Variables
 * 
*/
const body = document.querySelector('body');
const header = document.querySelector('header');
let sections = document.querySelectorAll('section');
const navBar = document.getElementById('navbar__list');



/**
 * End Global Variables
 * 
*/


// build the nav

//style the nav bar 
header.style.display = 'flex';
header.style.justifyContent = 'center';
header.style.height = '30px';
header.style.backgroundColor = 'blue'

// add buttons to the navBar depending of the sections nodelist length
sections.forEach(el => {
    //create button for each li element
    let button = document.createElement('BUTTON');
    button.innerHTML = el.id;
    button.className = el.id;

    //create li element and stick an button to it
    let li = document.createElement('li');
    li. appendChild(button);

    navBar.appendChild(li);

});

//get the buttons style them and put an eventlistener to each of them 
let buttons = document.querySelectorAll('button');
buttons.forEach(btn => {

    btn.style.height = 'auto'
    btn.style.margin = '5px'
    btn.style.fontWeight = 'bold'
    btn.style.fontSize = '0.9em'


    btn.addEventListener('click', function (e) {
        scrollToSection(e)
    });
}

)

// Scroll to anchor ID using scrollTO event using click event

function scrollToSection(e) {
    //button class name == sections id 
    //get scrollto section id with button clicked class name
    let currentSection = document.getElementById(e.target.className);

    currentSection.scrollIntoView();
    //set the section actvie and change buttons color
    setSectionActive(currentSection);
}

//function to set the sections classNames to active
function setSectionActive(el) {
    //reset the class names

    //set all to inactive
    sections.forEach(sec => {
        sec.className = 'inactive';
    });


    //set all buttons inactive

    buttons.forEach(btn => {
        btn.style.backgroundColor = 'white';

    });

    //set active section active 
    el.className = 'active';

    // get active button 


    let button = document.getElementsByClassName(el.id);

    //set active button with differnt color
    button.item(0).style.backgroundColor = 'lightblue';


}




//iterate through each section and set eventlistener 
sections.forEach(sec => {
    //add event listerner to each section
    sec.addEventListener('mouseover', (evt) => {
        //get current section 
        let el = document.getElementById(evt.currentTarget.id);
        //set section active 
        setSectionActive(el);
    })
});





