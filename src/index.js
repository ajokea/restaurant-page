import "./style.css";
import { displayHome } from "./home";
import { displayMenu } from "./menu";
import { displayContact } from "./contact";

displayHome();

const contentDiv = document.getElementById('content');

const homeTab = document.getElementById('home');
const menuTab = document.getElementById('menu');
const contactTab = document.getElementById('contact');

homeTab.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    displayHome();
});

menuTab.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    displayMenu();
});

contactTab.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    displayContact();
});