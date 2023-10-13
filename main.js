"use strict";

const homeBtn = document.getElementById("home-btn");
const projectsBtn = document.getElementById("projects-btn");
const downBtn = document.getElementById("down");
const upBtn = document.getElementById("up");

const landingSection = document.getElementById("landing");
const projectSection = document.getElementById("projects");
const projectSection2 = document.getElementById("projects2");

const contactSection = document.getElementById("contact");

homeBtn.addEventListener("click", () => navTo(landingSection));
projectsBtn.addEventListener("click", () => navTo(projectSection));
downBtn.addEventListener("click", () => navTo(projectSection2));
upBtn.addEventListener("click", () => navTo(projectSection));
