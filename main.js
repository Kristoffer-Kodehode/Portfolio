"use strict";

const navBar = document.querySelector("nav");
const homeBtn = document.getElementById("home-btn");
const projectsBtn = document.getElementById("projects-btn");
const contactBtn = document.getElementById("contact-btn");
const projectContainer = document.getElementById("project-container");

const main = document.querySelector("main");
const landingSection = document.getElementById("landing");
const projectSection = document.getElementById("projects");
const contactSection = document.getElementById("contact");
const footer = document.querySelector("footer");

homeBtn.addEventListener("click", () => navTo(landingSection));
projectsBtn.addEventListener("click", () => navTo(projectSection));
contactBtn.addEventListener("click", () => navTo(contactSection));
