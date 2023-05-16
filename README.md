# Lexicono : note d'intention

Ce projet est un projet annexe que j'ai développé pendant mon temps libre. Il s'agit d'un lexique itératif de vieux français, de français littéraire, voire désué. Ce lexique a pour but de souligner la beauté et la richesse lexicale de la langue française, et d'inviter ceux qui le désir à s'essayer à son maniement.

## Version originale

Cette version n'est guère la version originale, et a subi de légers changements afin de convenir à GitHub.

### Usage de PHP / MySQL

A l'origine, j'ai développé ce site en local, à l'aide de PHP et MySQL. Ainsi, toutes les fonctions que j'y ai créées ont été conçues pour s'imbriquer dans une structure en base de données. Les mots présents dans les deux tableaux étaient requêtés dans une table "word" de la BDD, et les écrits du forum dans une seconde table "text". La force de ce fonctionnement était de permettre à l'utilisateur de s'essayer à ajouter des textes sans nul besoin de se connecter, pour partager ses essais.

### Fonctions admin

Il y a également un certain nombre de fonctions que j'ai supprimées pour des raisons de sécurité. Notamment en ce qui concerne les boutons de suppression de dernière ligne du tableau, et de suppression de l'intégralité des données du tableau. Bien que je les ai gardés durant la phase de développement. 
