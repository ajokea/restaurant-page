import lambImg from './lamb.png';
import shrimpNGritsImg from './shrimpngrits.png';

export function displayHome() {
    const contentDiv = document.getElementById('content');

    const h1 = document.createElement('h1');
    h1.textContent = "Momma Reesa's";
    contentDiv.appendChild(h1);

    const aboutDiv = document.createElement('div');
    aboutDiv.id = "about";
    const aboutParagraph = document.createElement('p');
    aboutParagraph.textContent = "At Momma Reesa's, we bring the heart and soul of American comfort food and the rich flavors of Senegal together under one roof. From crispy fried chicken and savory mac and cheese to flavorful chicken yassa and spicy thieboudienne, each dish is crafted with love, tradition, and a dash of boldness. Whether you're craving classic soul food or the vibrant tastes of West Africa, Momma Reesa's is here to make every meal feel like home.";
    const imgDiv = document.createElement('div');
    const aboutImg1 = document.createElement('img');
    aboutImg1.src = lambImg;
    aboutImg1.alt = "Roast lamb on a bed of couscous and onion sauce."
    const aboutImg2 = document.createElement('img');
    aboutImg2.src = shrimpNGritsImg;
    aboutImg2.alt = "Shrimp and salmon and grits, with scrambled eggs, and a biscuit."
    aboutDiv.appendChild(aboutParagraph);
    imgDiv.append(aboutImg1, aboutImg2)
    contentDiv.append(aboutDiv, imgDiv);

    const hoursDiv = document.createElement('div');
    hoursDiv.id = "hours";
    const h3Hours = document.createElement('h3');
    h3Hours.textContent = "Hours";
    const sunday = document.createElement('p');
    sunday.textContent = "Sunday: 12pm - 7pm";
    const monday = document.createElement('p');
    monday.textContent = "Monday: 1pm - 8pm";
    const tuesday = document.createElement('p');
    tuesday.textContent = "Tuesday: 1pm - 8pm";
    const wednesday = document.createElement('p');
    wednesday.textContent = "Wednesday: 1pm - 8pm";
    const thursday = document.createElement('p');
    thursday.textContent = "Thursday: 1pm - 8pm";
    const friday = document.createElement('p');
    friday.textContent = "Friday: 1pm - 9pm";
    const saturday = document.createElement('p');
    saturday.textContent = "Saturday: 1pm - 9pm";
    hoursDiv.append(h3Hours, sunday, monday, tuesday, wednesday, thursday, friday, saturday);
    contentDiv.appendChild(hoursDiv);

    const locationDiv = document.createElement('div');
    locationDiv.id = "location";
    const h3Location = document.createElement('h3');
    h3Location.textContent = "Location";
    const addressLine1 = document.createElement('p');
    addressLine1.textContent = "1234 Peachtree Street NE";
    const addressLine2 = document.createElement('p');
    addressLine2.textContent = "Atlanta, GA, 30309";
    locationDiv.append(h3Location, addressLine1, addressLine2);
    contentDiv.appendChild(locationDiv);
}