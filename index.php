<!DOCTYPE html>
<html>
        <head>
                <meta charset="utf-8">
                <link rel="stylesheet" href="style/style.css">
                <title>Lexicon</title>
        </head>

        <body>
                <div class="container">
                        <header>
                                <h1>Lexicon</h1>
                        </header>
                        <div class="sub_container">
                                <div class="block" id="B1">
                                        <div class="sub_block" id="SB1">
                                                <h3>Ajouter un mot</h3>
                                                <form id="addWord">
                                                        <label for="word">
                                                        <input type="text" name="word" id="word" placeholder="Votre mot">
                                                        </label>

                                                        <label for="genre">
                                                        <select name="genre" id="genre">
                                                                <option disabled selected>Son genre</option>
                                                                <option value="masculin">Masculin</option>
                                                                <option value="feminin">Féminin</option>
                                                                <option value="neutre">Neutre</option>
                                                        </select>
                                                        </label>

                                                        <label for="function">
                                                        <select name="function" id="function">
                                                                <option disabled selected>Sa fonction</option>
                                                                <option value="adjectif">Adjectif</option>
                                                                <option value="adverbe">Adverbe</option>
                                                                <option value="expression">Expression</option>
                                                                <option value="nom_commun">Nom commun</option>
                                                                <option value="nom_propre">Nom propre</option>
                                                                <option value="verbe">Verbe</option>
                                                        </select>
                                                        </label>

                                                        <label for="definition">
                                                        <textarea name="definition" id="definition" cols="30" rows="1" placeholder="Votre définition..."></textarea>
                                                        </label>

                                                        <input type="submit" value="Envoyer" name="submit">
                                                </form>
                                        </div>
                                </div>
                                <div class="block" id="B2">
                                        <div class="sub_block" id="SB2">
                                        <h3>Tableau des mots</h3>

                                        <p><i>Filtrer par</i></p>

                                        <!-- <button onclick="sortTable()">Trier par ordre alphabétique</button> -->
                                        <button onclick="sortTable()">Ordre alphabétique</button>
                                        
                                        <div class="buttons">
                                                <button id="clearTable">Effacer les données</button>
                                                <button id="clearLineTable">Effacer la dernière ligne</button>
                                        </div>

                                        <table id="addWordTable">
                                                <thead>
                                                <tr>
                                                        <td>Mot</td>
                                                        <td>Genre</td>
                                                        <td>Fonction</td>
                                                        <td>Définition</td>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr></tr>
                                                </tbody>
                                        </table>
                                </div>
                        </div>
                        <div class="sub_container">
                                <div class="block" id="B3">
                                        <div class="sub_block" id="SB3">
                                                <h3>Forum des écrits</h3>

                                                <button id="clearForum">Effacer les données</button>

                                                <table id="forumTable">
                                                        <tbody>
                                                        <tr></tr>
                                                        </tbody>
                                                </table>
                                        </div>
                                </div>
                                <div class="block" id="B4">
                                        <div class="sub_block" id="SB4">
                                        <h3>Génération de mots aléatoires</h3>

                                        <button id="randomThreeTable">Sélectionner 3 mots</button>

                                        <p id="randomThreeTableParagraph"></p>

                                        <form id="addForum">
                                                <p>Nous vous proposons un entraînement, afin de tester votre nouveau vocabulaire fraîchement acquis. Ecrivez un court texte, en utilisant les trois mots sélectionnés. Le résultat sera publié dans le forum ci-dessous.</p>

                                                <label for="pseudo">
                                                <input type="text" name="pseudo" id="pseudo" placeholder="Votre pseudo">
                                                </label>

                                                <label for="ecrit">
                                                <textarea name="ecrit" id="ecrit" cols="30" rows="10" placeholder="Votre récit..."></textarea>
                                                </label>

                                                <input type="submit" value="Envoyer" name="submit">
                                        </form>
                                        </div>
                                </div>
                        </div>
                </div>

                <script src="traitement/addForum.js"></script>
                <script src="traitement/addWord.js"></script>
                <script src="sortTable.js"></script>
                <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
                <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        </body>
</html>