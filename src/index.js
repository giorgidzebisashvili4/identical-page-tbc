import "./style.css";
// import Icon from './icon.png';

const containerSelect = document.querySelector(".site-container");

// making main divs
let header = document.createElement("div");
header.classList.add("header");

let title = document.createElement("div");
title.classList.add("title-section");

let paragraph = document.createElement("div");
paragraph.classList.add("paragraph-section");

let courses = document.createElement("div");
courses.classList.add("courses-section");

let partners = document.createElement("div");
partners.classList.add("partners-section");

let questions = document.createElement("div");
questions.classList.add("questions-section");

let footer = document.createElement("div");
footer.classList.add("footer");

containerSelect.appendChild(header);
containerSelect.appendChild(title);
containerSelect.appendChild(paragraph);
containerSelect.appendChild(courses);
containerSelect.appendChild(partners);
containerSelect.appendChild(questions);
containerSelect.appendChild(footer);

// dom header content
let logo = document.createElement("h1");
logo.textContent = "tbc x აკადემია";

let headerLinks = document.createElement("div");
headerLinks.classList.add("header-links");

header.appendChild(logo);
header.appendChild(headerLinks);

let main = document.createElement("a");
main.textContent = "მთავარი";

let tbcIt = document.createElement("a");
tbcIt.textContent = "TBC IT";

let tbcXusaid = document.createElement("a");
tbcXusaid.textContent = "TBC x USAID";

let risk = document.createElement("a");
risk.textContent = "რისკები";

headerLinks.appendChild(main);
headerLinks.appendChild(tbcIt);
headerLinks.appendChild(tbcXusaid);
headerLinks.appendChild(risk);
