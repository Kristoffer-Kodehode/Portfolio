"use strict";

const homeBtn = document.getElementById("home-btn");
const projectsBtn = document.getElementById("projects-btn");

const landingSection = document.getElementById("landing");
const projectSection = document.getElementById("projects");
const contactSection = document.getElementById("contact");

homeBtn.addEventListener("click", () => navTo(landingSection));
projectsBtn.addEventListener("click", () => navTo(projectSection));
