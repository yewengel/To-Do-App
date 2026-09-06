const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const taskList = document.querySelector("#taskList");
const countText = document.querySelector("#count");

let count = 0;

function addTask() {

    const taskText = taskInput.value;

    if (taskText === "") {
        return;
    }

    const task = document.createElement("li");
    task.classList.add("task");

    const text = document.createElement("span");
    text.textContent = taskText;
    text.classList.add("task-text");

    const completedButton = document.createElement("button");
    completedButton.textContent = "Completed";
    completedButton.classList.add("completed-button");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");

    task.appendChild(text);
    task.appendChild(completedButton);
    task.appendChild(deleteButton);

    taskList.appendChild(task);

    count = count + 1;
    countText.textContent = count;

    taskInput.value = "";

    completedButton.addEventListener("click", function () {
        text.classList.toggle("completed");
    });

    deleteButton.addEventListener("click", function () {

        task.remove();

        count = count - 1;
        countText.textContent = count;
    });
}


// Add button
addButton.addEventListener("click", function () {
    addTask();
});


// Enter key
taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        addTask();
    }

});