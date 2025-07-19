let input = document.getElementById("inputbox");
let addButton = document.querySelector(".buttonbox");
let listcontainer = document.querySelector(".list-container");
let clearAll = document.querySelector(".clear");


addButton.addEventListener('click', () => {
    addList(input.value);
    input.value = "";
    input.focus();
});

function addList() {
    if (input.value === "") {
        alert("Please write your task! it can't be empty");
    }
    else {
        let li = document.createElement("li");
        let taskSpan = document.createElement("span");
        taskSpan.className = "task-text";
        taskSpan.textContent = input.value;
        li.textContent = input.value;
        let span = document.createElement("span");
        span.innerHTML = "❌";
        span.className = "delete";

        span.addEventListener('click', (e) => {
            e.stopPropagation();
            li.remove();
            saveData();

        })
        li.addEventListener('click', () => {
            li.classList.toggle('checked')
            saveData();

        });
        li.appendChild(span);
        listcontainer.appendChild(li);
    }
}

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showData() {
    listcontainer.innerHTML = localStorage.getItem("data") || "";
}


clearAll.addEventListener('click', () => {
    let userConfirmed = confirm("Are you sure you want to clear all tasks?\nNote: if it's cleared, data won't be stored.");
    if (userConfirmed) {
        localStorage.removeItem("data") || "";
        listcontainer.innerHTML = "";
    }
})
document.addEventListener("DOMContentLoaded", showData);


