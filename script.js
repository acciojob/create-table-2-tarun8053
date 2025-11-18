function createTable() {
    const rows = parseInt(prompt("Input number of rows"));
    const cols = parseInt(prompt("Input number of columns"));

    // Validation
    if (isNaN(rows) || isNaN(cols)) {
        alert("Enter valid numbers!");
        return;
    }
    if (rows <= 0 || cols <= 0) {
        alert("Rows and columns must be positive!");
        return;
    }

    const table = document.getElementById("myTable");

    // Clear previous content
    table.innerHTML = "";

    // Create rows & columns
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement("tr");

        for (let j = 0; j < cols; j++) {
            const td = document.createElement("td");
            td.textContent = `Row-${i} Column-${j}`;
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
}
