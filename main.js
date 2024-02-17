const darkToggleBtn = document.getElementById('dark');
const textColor = document.querySelectorAll('.text');
const body = document.querySelector('body');
let isDarkMode = false;

darkToggleBtn.addEventListener('click', () => {
  if (!isDarkMode) {
    // Switch to dark mode
    body.style.background = "#121212";
    body.style.color = "#fff";
    textColor.forEach((text)=>{
      text.style.color = "#fff";
    });
    isDarkMode = true;
  } else {
    body.style.background = ""; // Revert to default background
    body.style.color = ""; // Revert to default text color
    textColor.forEach((text)=>{
      text.style.color = ""; // Revert to default text color for each text element
    });
    isDarkMode = false;
  }
});


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

if(activePage == "/service.html"){
  document.body.style.backgroundColor = "#fff";
  document.body.style.opacity = "0.3";
  setTimeout(()=>{
    document.body.style.opacity = "1";
  },100)
}
else {
  document.body.style.backgroundColor = "";
  document.body.style.opacity = "1";
}


/*
navLinks.forEach((link)=>{
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
  }
  else {
    link.classList.remove('active');
  }
});
*/

//const navLinks = document.querySelectorAll('.nav-link');

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("ul li a");

    links.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        links.forEach(link => link.classList.remove("active"));
        this.classList.add("active");
      });
    });
  
});


const noDataImg = document.getElementById('img');
const heading = document.getElementById('heading');
const text = document.getElementById('text'); 
const projectsContainer = document.querySelector('.projects');

document.getElementById("searchInput").addEventListener("keyup", function() {
  var input, filter, projects, source, title, description, i, txtValue;
  
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  projects = document.getElementsByClassName("source");
  
  let anyMatch = false; // Flag to track if any project matches the search criteria

  for (i = 0; i < projects.length; i++) {
    source = projects[i];
    title = source.querySelector(".title");
    description = source.querySelector(".description");
    txtValue = description.textContent || description.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      source.style.display = "";
      anyMatch = true; // Set flag to true if any project matches
    } else {
      source.style.display = "none";
    }
  }
  
  // Show or hide noDataImg based on the flag
  if (!anyMatch) {
    noDataImg.style.display = "block";
    heading.style.display = "none";
    text.style.display = "none";
    projectsContainer.style.display = "none"; // Hide projects container if no data
  } else {
    noDataImg.style.display = "none";
    heading.style.display = "block";
    text.style.display = "block";
    projectsContainer.style.display = "flex"; // Show projects container if there's data
  }
});


window.onload = function() {
  document.body.style.opacity = "1";
  
};