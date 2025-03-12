document.getElementById("finance-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const date = document.getElementById("date").value;
    const income = parseFloat(document.getElementById("income").value);
    const expenditure = parseFloat(document.getElementById("expenditure").value);

    if (!date || isNaN(income) || isNaN(expenditure)) {
        alert("Please enter all fields correctly.");
        return;
    }

    const balance = income - expenditure;

    const table = document.getElementById("history");
    const newRow = table.insertRow();
    newRow.innerHTML = `<td>${date}</td><td>${income}</td><td>${expenditure}</td><td>${balance}</td>`;

    document.getElementById("finance-form").reset();
});
