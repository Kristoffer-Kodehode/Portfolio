const navBar = document.querySelector("nav")
const homeBtn = document.getElementById("home-btn")
const projectsBtn = document.getElementById("projects-btn")
const contactBtn = document.getElementById("contact-btn")
const contentContainer = document.getElementById("project-container")


const main = document.querySelector("main")
const section1 = document.getElementById("section1")
const section2 = document.getElementById("section2")
const section3 = document.getElementById("section3")
const footer = document.querySelector("footer")

homeBtn.addEventListener("click", () => onLinkClick(section1))
projectsBtn.addEventListener("click", () => onLinkClick(section2))
contactBtn.addEventListener("click", () => onLinkClick(section3))

// const navHome = () => onLinkClick(section1)
// const navProjects = () => onLinkClick(section2)
// const navContact = () => onLinkClick(section3)

const projects = [
  {
    name: 
    
  }
]

function onLinkClick(location) {
    document.querySelector(`${location}`).scrollIntoView({behavior: "smooth"});
  }

function projectCard () {

}