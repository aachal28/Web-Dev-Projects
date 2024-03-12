let listContainer;
let inputBox;

document.addEventListener('DOMContentLoaded', function() {
    listContainer = document.getElementById('list-container');
    inputBox = document.getElementById('input-box');

    listContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle("checked");
            saveData();
        } else if (e.target.tagName === 'SPAN') {
            e.target.parentElement.remove();
            saveData();
        }
    });

    function saveData() {
        localStorage.setItem("data", listContainer.innerHTML);
    }

    function showTask() {
        listContainer.innerHTML = localStorage.getItem("data");
    }

    showTask();
});

function addTask() {
    if (inputBox.value === '') {
        alert('Please Enter the Text');
    } else {
        const task = document.createElement('li');
        task.textContent = inputBox.value;
        listContainer.appendChild(task);
        let span = document.createElement('span');
        span.textContent = "\u00d7";
        task.appendChild(span);
        span.style.right = '0px';
        inputBox.value = '';
        saveData();
    }
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}