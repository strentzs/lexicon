    // Charger les données du fichier JSON existant (s'il y en a)
    window.addEventListener("DOMContentLoaded", function() {
        var tableData = localStorage.getItem("tableData");
    
        if (tableData) {
            var parsedData = JSON.parse(tableData);
            renderTable(parsedData);
        }
    });
    
        // Ajouter un nouveau mot
    document.getElementById("addWord").addEventListener("submit", function(event) {
        event.preventDefault();
        
        var word = document.getElementById("word").value;
        var genre = document.getElementById("genre").value;
        var func = document.getElementById("function").value;
        var definition = document.getElementById("definition").value;
        
        var tableData = localStorage.getItem("tableData");
        var parsedData = tableData ? JSON.parse(tableData) : [];
        
        parsedData.push({
            word: word,
            genre: genre,
            func: func,
            definition: definition
        });
    
    localStorage.setItem("tableData", JSON.stringify(parsedData));
    
    renderTable(parsedData);
    
    document.getElementById("addWord").reset();
    });
    
    // Bouton de nettoyage du tableau
    document.getElementById("clearTable").addEventListener("click", function() {
        localStorage.removeItem("tableData");
        renderTable([]);
    });
    
    // Bouton de suppression de la dernière ligne ajoutée
    function deleteLastRow() {
        var table = document.getElementById("addWordTable");
        var rowCount = table.rows.length;
    
        // Vérifier s'il y a au moins une ligne à supprimer
        if (rowCount > 1) {
            table.deleteRow(rowCount - 1);
    
            // Mettre à jour les données dans le localStorage
            var tableData = [];
            for (var i = 1; i < rowCount - 1; i++) {
                var row = table.rows[i];
                var word = row.cells[0].innerHTML;
                var genre = row.cells[1].innerHTML;
                var func = row.cells[2].innerHTML;
                var definition = row.cells[3].innerHTML;
    
            tableData.push({
                word: word,
                genre: genre,
                func: func,
                definition: definition
            });
        }
    
        localStorage.setItem("tableData", JSON.stringify(tableData));
        }
    }
    
    document.getElementById("clearLineTable").addEventListener("click", function() {
        deleteLastRow();
    });
    
    
    // Bouton de génération aléatoire de trois mots 
    document.getElementById("randomThreeTable").addEventListener("click", function() {
        var table = document.getElementById("addWordTable");
        var rowCount = table.rows.length - 1; // Exclure la ligne d'en-tête
        var result = document.getElementById("randomThreeTableParagraph");
        var form = document.getElementById("addForum");
    
        if (rowCount < 3) {
            result.innerHTML = "Il n'y a pas suffisamment de mots dans la première colonne.";
            return;
        }

        form.style.visibility = 'visible';
    
        var randomIndices = generateRandomIndices(rowCount, 3);
        var selectedWords = [];
    
        for (var i = 0; i < randomIndices.length; i++) {
            var cell = table.rows[randomIndices[i]].cells[0];
            selectedWords.push(cell.innerHTML);
        }
    
        result.innerHTML = 'Mots sélectionnés : ' + selectedWords.join(", ");
        });
    
        function generateRandomIndices(maxRange, count) {
            var indices = [];
    
        while (indices.length < count) {
        var randomIndex = Math.floor(Math.random() * maxRange) + 1;
    
            if (!indices.includes(randomIndex)) {
                indices.push(randomIndex);
            }
        }
    
        return indices;
    }
    
    // Affichage des résultats dans le tableau
    function renderTable(data) {
        var table = document.getElementById("addWordTable").getElementsByTagName("tbody")[0];
        table.innerHTML = "";
    
        for (var i = 0; i < data.length; i++) {
            var newRow = table.insertRow(table.rows.length);
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
    
            cell1.innerHTML = data[i].word;
            cell2.innerHTML = data[i].genre;
            cell3.innerHTML = data[i].func;
            cell4.innerHTML = data[i].definition;
        }
    }