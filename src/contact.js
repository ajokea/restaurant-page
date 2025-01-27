export function displayContact() {
    const contentDiv = document.getElementById('content');

    const h1 = document.createElement('h1');
    h1.textContent = "Contact Us";
    contentDiv.appendChild(h1);

    const contactDiv = document.createElement('div');
    const contactNumber = document.createElement('p');
    contactNumber.textContent = "678) 123-4509";
    const contactEmail = document.createElement('p');
    contactEmail.textContent = "mommareesashouse@gmail.com";
    contactDiv.append(contactNumber, contactEmail);
    contentDiv.appendChild(contactDiv);
}