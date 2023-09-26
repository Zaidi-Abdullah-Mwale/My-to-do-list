function addTask() {
    const inputBox = document.querySelector(".field");
    const listContainer = document.querySelector(".listContainer");
    
    if (inputBox.value === '') {
        alert("It cannot be empty");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = ''; // Clear the input field after adding the task
    }
}
