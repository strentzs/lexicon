    // Charger les données du fichier JSON existant (s'il y en a)
    window.addEventListener("DOMContentLoaded", function() {
        var tableData2 = localStorage.getItem("tableData2");
    
        if (tableData2) {
            var parsedData = JSON.parse(tableData2);
            renderTable2(parsedData);
        }
    });
    
    
        // Ajouter un nouvel écrit au forum
    document.getElementById("addForum").addEventListener("submit", function(event) {
        event.preventDefault();
    
        var pseudo = document.getElementById("pseudo").value;
        var ecrit = document.getElementById("ecrit").value;
    
        var tableData2 = localStorage.getItem("tableData2");
        var parsedData = tableData2 ? JSON.parse(tableData2) : [];
    
        parsedData.push({
        pseudo: pseudo,
        ecrit: ecrit
    });
    
    localStorage.setItem("tableData2", JSON.stringify(parsedData));
    
    renderTable2(parsedData);
    
    document.getElementById("addForum").reset();
    });
    
        // Bouton de nettoyage du tableau
    document.getElementById("clearForum").addEventListener("click", function() {
        localStorage.removeItem("tableData2");
        renderTable2([]);
    });
    
    document.getElementById("clearLineTable").addEventListener("click", function() {
        deleteLastRow();
    });
    
        // Affichage des résultats dans le tableau
    function renderTable2(data) {
        var table = document.getElementById("forumTable").getElementsByTagName("tbody")[0];
        table.innerHTML = "";

        var currentDate = new Date();

        var options = { day: 'numeric', month: 'long', year: 'numeric' };
        var formattedDate = currentDate.toLocaleDateString('fr-FR', options);
        var formattedTime = currentDate.toLocaleTimeString('fr-FR', { hour: 'numeric', minute: 'numeric' });
        var formattedDateTime = "Le " + formattedDate + " à " + formattedTime;

    
        for (var i = 0; i < data.length; i++) {
            var newRow = table.insertRow(table.rows.length);
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            var cell5 = newRow.insertCell(4);
    
            cell1.innerHTML = data[i].ecrit;
            cell2.innerHTML = '・';
            cell3.innerHTML = data[i].pseudo;
            cell4.innerHTML = '・';
            cell5.innerHTML = formattedDateTime;
        }
    }