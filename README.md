# Rendu du projet React (Valentin VIGUIER)
Ce fut mon premier projet en react et j'ai eu pas mal de complications pour commencer ...

## Installation :
### `git pull`

### `npm install`

### `npm start` ou `PORT=WantedPortNumber npm start`

## Fonctionnalités :
- [x] : Loading
- [x] : Error
- [x] : Routing (depuis la liste vers page single)
- [x] : Routing  (Single vers homepage)
- [x] : Error (Différencier les types d'erreurs) => Merci à Alexandre Duviviers pour m'avoir montré
- [x] : Search => Fonctionnelle mais je pense que le setstate se fait après le fetch ... je ne vois pas comment y remédier ! (sachant que je ne peux pas faire un .then après un if)
### Pour le search il faut update la date deux fois pour que le setState se fasse : Exemple je choisi la première date puis la seconde et j'incremente la date TO de 1 jour.
- [x] : Routing (Prev / next sur la single)
- [x] : Error: Afficher une page 404 si une ID est invalide
- [X] : Search (gérer le cas ou on envoie des dates invalides)
- [ ] : Refactoring

##CSS
J'ai vraiment mis l'accent sur le fonctionnel ... mais j'ai fait un petit peu de CSS histoire que ce soit un peu moins triste mais ça reste très léger.

Pour le css j'ai utilisé materialize
