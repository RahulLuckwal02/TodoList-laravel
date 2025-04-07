const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const showAllBtn = document.getElementById('showAllBtn');
let showingAll = false; 

function addTask() {
    if (inputBox.value === '') {
        alert("You must add something!");
    } else {
        // Check for duplicate tasks
        const tasks = listContainer.getElementsByTagName("li");
        for (let task of tasks) {
            if (task.textContent.replace("Delete", "").trim() === inputBox.value.trim()) {
                alert("This task already exists!");
                inputBox.value = "";
                return; 
            }
        }

        // Create a new task if no duplicates are found
        let li = document.createElement("li");
        li.textContent = inputBox.value; 
        listContainer.appendChild(li);

        // Adding a delete button
        let span = document.createElement("span");
        span.textContent = "Delete"; 
        span.style.color = "white"; 
        span.style.cursor = "pointer"; 
        span.style.borderRadius = "20px";
        li.appendChild(span); 
    }
    inputBox.value = ""; 
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        if (e.target.classList.contains("checked")) {
            e.target.style.display = "none"; 
        }
        saveData(); 
    } else if (e.target.tagName === "SPAN") {
        const confirmDelete = confirm("Are you sure you want to delete this task?");
        if (confirmDelete) {
            e.target.parentElement.remove();
            saveData();
        }
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        listContainer.innerHTML = savedData;

        // Show or hide tasks
        const tasks = listContainer.getElementsByTagName("li");
        for (let task of tasks) {
            if (!showingAll && task.classList.contains("checked")) {
                task.style.display = "none"; 
            } else {
                task.style.display = "";
            }
        }
    }
}

showAllBtn.addEventListener('click', () => {
    showingAll = !showingAll; 
    showTask();
});

showTask(); 