let currentRow;

function addTask() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let date = document.getElementById("date").value;
    let options = document.getElementById("options").value;
    if (!title || !description || !date || !options) {
        alert("Veuillez remplir tous les champs");
    } else {
        let TBody = document.getElementById("taskslist");
        let newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${title}</td>
            <td>${description}</td>
            <td>${date}</td>
            <td>${options}</td>
            <td>
                <button type="button" onclick="editTask(event)" class="btn btn-warning">Edit</button>
                <button type="button" onclick="deleteTask(event)" class="btn btn-danger">Delete</button>
            </td>`;
        if (options == "A faire") {     
            newRow.classList.add("table-success");
        } else if (options == "En cours") {
            newRow.classList.add("table-warning");
        } else {
            newRow.classList.add("table-danger");
        }
        TBody.appendChild(newRow);
        document.getElementById("addtaskform").reset();
    }
}
function editTask(event) {
    currentRow = event.currentTarget.closest("tr");
    document.getElementById("title").value = currentRow.cells[0].textContent;
    document.getElementById("description").value = currentRow.cells[1].textContent;
    document.getElementById("date").value = currentRow.cells[2].textContent;
    document.getElementById("options").value = currentRow.cells[3].textContent;
    document.getElementById("ajouter").style.display = "none";
    document.getElementById("editButton").style.display = "inline-block";
}

function saveTask() {
    if (!currentRow) return;
    currentRow.cells[0].textContent = document.getElementById("title").value;
    currentRow.cells[1].textContent = document.getElementById("description").value;
    currentRow.cells[2].textContent = document.getElementById("date").value;
    currentRow.cells[3].textContent = document.getElementById("options").value;
    document.getElementById("addtaskform").reset();
    document.getElementById("editButton").style.display = "none";
    document.getElementById("ajouter").style.display = "flex";
    currentRow = null;
}

function deleteTask(event) {
    let row = event.currentTarget.closest("tr");
    row.remove();
}