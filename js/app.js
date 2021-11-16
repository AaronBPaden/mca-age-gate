"use strict";

const getAge = (dob) => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let birthYear = dob.getFullYear();
    let birthMonth = dob.getMonth();
    let age = year - birthYear;
    if (birthMonth > month) {
        age--
    } else if (birthMonth === month) {
        let birthDay = dob.getDate();
        let currentDay = date.getDate();
        if (birthDay > currentDay) {
            age--;
        }
    }
    return age;
}

document.getElementById('ageForm').addEventListener('submit', (event) => {
    event.preventDefault();
    let elements = document.getElementById('ageForm').elements;
    let age = getAge(new Date(elements.ageInput.value));
    let confirmChecked = elements.confirmationInput.checked;
    let messageBox = document.getElementById('messageBox');
    if (age >= 18 && confirmChecked) {
        messageBox.innerHTML = '<p class="success">Access granted</p>';
    } else {
        messageBox.innerHTML = '<p class="failure">Access denied</p>';
    }
});
