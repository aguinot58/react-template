# Template projet React avec packages react-router-dom / react-redux / @reduxjs/toolkit
  
Arborescence en partie déjà créée dans src avec les sous-dossiers suivants :

- components
    + Component.js
- pages
    + Home.js
    + PageNotFound.js
    + index.js
- store
    + store.js
    + cartSlice.js
- routes
    + AllRoutes.js
- layout
    + Header.js
    + Footer.js
    + Layout.css

Les routes vers Home et PageNotFound sont déjà mises en places.
Contient également un hook personnalisé pour mettre à jour le titre 
de la page en fonction de la route.

Le header, le footer ainsi que le rooter sont déjà intégrés à App.js

Un store est mis en place avec un premier Slice en commentaire pour exemple. 
Le fichier index.js contient une définition du root avec (mise en commentaire) 
ou sans Provider pour le store - à choisir suivant le besoin

Une fois le dépôt cloné, aller dans le dossier du projet dans le terminal et faire 
la commande : npm i





