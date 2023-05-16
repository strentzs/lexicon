function sortTable() {
    // Récupération de la table et des lignes
    var table = document.getElementById("addWordTable");
    const rows = table.querySelectorAll("tbody tr");

    // Initialisation de l'array de données
    let data = [];

    // Boucle sur chaque ligne pour récupérer les valeurs de colonnes
    rows.forEach((row) => {
        const columns = row.querySelectorAll("td");
        const rowData = [];

        // Boucle sur les 3 premières colonnes pour récupérer la valeur de texte
        for (let i = 0; i < 4; i++) {
            rowData.push(columns[i].textContent.trim());
        }

        // Ajout de la ligne à l'array de données
        data.push(rowData);
        });

        // Tri des données en ordre alphabétique en fonction de la première lettre de la première colonne
        data.sort((a, b) => a[0].localeCompare(b[0]));

        // Remplacement du texte des cellules avec les données triées
        data.forEach((rowData, rowIndex) => {
        const columns = rows[rowIndex].querySelectorAll("td");

        // Mise à jour de chaque cellule avec la nouvelle valeur triée
        rowData.forEach((cellData, columnIndex) => {
            columns[columnIndex].textContent = cellData;
        });
    });
}