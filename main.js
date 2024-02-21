/*
const darkToggleBtn = document.getElementById('dark');
const textColor = document.querySelectorAll('.text');
const body = document.querySelector('body');
const navBar = document.querySelector('nav');
const ourGoalsH3 = document.querySelector('.our-goals h3'); 
const colors = document.querySelectorAll('.color');


let isDarkMode = false;

darkToggleBtn.addEventListener('click', () => {
  if (!isDarkMode) {
    // Switch to dark mode
    body.style.background = "#121212";
    body.style.color = "#fff";
    ourGoalsH3.style.color = "#fff";
    navBar.classList.add('nav-toggle');
    textColor.forEach((text) => {
      text.style.color = "#fff";
    });
        isDarkMode = true;
  } else {
    body.style.background = "";
    body.style.color = "";
    ourGoalsH3.style.color = "";
    navBar.classList.remove('nav-toggle');
    textColor.forEach((text) => {
      text.style.color = ""; 
    });
    isDarkMode = false;
  }
});

*/

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav ul li a');



//const inputArea = document.querySelector('.input-area'); 

/*
if(activePage == "/project.html" ){
  inputArea.style.display = 'flex';
}
else {
  inputArea.style.display = 'none';
}
*/

if (activePage == "/service.html") {
  document.body.style.backgroundColor = "#fff";
  document.body.style.opacity = "0.3";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100)
}
else {
  document.body.style.backgroundColor = "";
  document.body.style.opacity = "1";
}

/*

navLinks.forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add('active');
  }
  else {
    link.classList.remove('active');
  }
});
*/
/*
const allPages = document.querySelectorAll('.nav-links li a');

const windowPathName = window.location.pathname;

allPages.forEach(page => {
  const pagePathName = new URL(page.href).pathname;
  page.addEventListener('click',(e) =>{
    page.classList.remove('active');
  })
  if ((windowPathName === pagePathName) || (windowPathName === './index.html' && pagePathName === './')) {
    page.classList.add('active');
  }
});
*/




const noDataImg = document.getElementById('img');
const heading = document.getElementById('heading');
const text = document.getElementById('text');
const projectsContainer = document.querySelector('.projects');
const loadBtns = document.getElementById('load-btn'); 

document.getElementById("searchInput").addEventListener("keyup", function() {
  var input, filter, projects, source, title, description, i, txtValue;

  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  projects = document.getElementsByClassName("source");

  let anyMatch = false;

  for (i = 0; i < projects.length; i++) {
    source = projects[i];
    title = source.querySelector(".title");
    description = source.querySelector(".description");
    txtValue = description.textContent || description.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      source.style.display = "";
      anyMatch = true; 
    } else {
      source.style.display = "none";
    }
  }

  if (!anyMatch) {
    noDataImg.style.display = "block";
    heading.style.display = "none";
    text.style.display = "none";
    loadBtns.style.display = "none";
    projectsContainer.style.display = "none";
  } else {
    noDataImg.style.display = "none";
    heading.style.display = "block";
    text.style.display = "block";
    loadBtns.style.display = "flex";
    projectsContainer.style.display = "flex"; 
  }
});



window.onload = function() {
  document.body.style.opacity = "1";
};



// Show limited items

const loadBtn = document.getElementById('load-btn');
const projectItems = document.getElementsByClassName('source');

let currentItems = 10;

for (let i = currentItems; i < projectItems.length; i++) {
  projectItems[i].style.display = 'none';
}

loadBtn.addEventListener('click', showNextItems);

function showNextItems() {
  const nextItemsIndex = currentItems + 5;

  for (let i = currentItems; i < nextItemsIndex && i < projectItems.length; i++) {
    projectItems[i].style.display = 'inline-block';
  }

  currentItems = nextItemsIndex;

  if (currentItems >= projectItems.length) {
    loadBtn.style.display = 'none';
  }
}


const allSkeleton = document.querySelectorAll('.skeleton')

window.addEventListener('load', function() {
  allSkeleton.forEach(item=> {
    item.classList.remove('skeleton')
  })
})


