<div align="center">
    <h1>STI2D Projet Final</h1>
    <p>Présentation de notre projet final de STI2D réalisé par Enzo (@xBibouu) et Yanis (@Yanissska)</p>
</div>

## Présentation
1. Notre projet final de STI2D consiste à créer une machine afin de déplacer une bille en altitude sur un fil avec une distance variable pour la lâcher sur une cible (en utilisant un ESP32 obligatoirement).
2. Ce projet sera présenté sous deux parties : La partie de l'explication du projet et de la conception et la partie de l'explication du code.

# Partie 1 : Conception du projet

### Nos choix pour la conception
Nous allons maintenant vous expliquer les choix que nous avons dû faire pour mener ce projet à bien :

- Tout d'abord, nous avons opté pour l'utilisation d'un moteur à pas à pas afin de décider de la distance à parcourir de la machine et de faire avancer la machine.
- Ensuite, nous avons décidé d'utiliser un servo-moteur afin d'ouvrir et de refermer la trappe afin de lâcher la bille.
- Toute la machine sera construite sur le logiciel SolidWorks.


# Partie 2 : Codage du projet

## Codes :
| **Type**         | **Chemin d'accès**                      | **Informations**                                                                                                               |
|------------------|-----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| Front            | `front\index.html` & `front\style.css`  | Vous retrouverez le HTML et CSS de notre site web qui constitue le site web avec lequel nous communiquons avec le serveur.    |
| Back             | `back\client.js` & `back\server.js`     | Vous retrouverez notre serveur JavaScript ainsi que les événements des boutons afin de communiquer avec le serveur.           |
| Micropython      | `python\micropython.py`                 | Vous retrouverez le code qui dirige nos moteurs à l'aide de nos variables définies dans notre serveur JavaScript.             |

### Nos choix pour le codage 
Nous allons vous expliquer ce que nous avons fait et comment nous avons procédé pour le codage du projet :

- Tout d'abord, nous avons opté pour un serveur JavaScript avec lequel nous communiquerons les variables afin de commander le moteur.
- Ensuite, nous avons réalisé un site web avec lequel nous enverrons les variables à l'aide des différents boutons et des bibliothèques JavaScript Axios et Express.
- Pour finir, pour faire fonctionner nos moteurs, nous utiliserons un ESP32 pour récupérer les variables du serveur JavaScript afin de faire fonctionner les différents moteurs.

### Le serveur
Comme dit précédemment, nous utilisons un serveur JavaScript qui nous permettra de stocker les variables dans le serveur afin de les utiliser pour la suite.

(Voir `back\server.js`)

### Le site
Je vais maintenant vous présenter le site. Le site s'apparente à une sorte d'interface graphique avec un champ de saisie (placeholder) et deux boutons :
- Le champ de saisie permet d'entrer le nombre de centimètres à parcourir, qui fera un calcul du nombre de pas et l'enregistrera dans le serveur JavaScript sous la variable `moteurpas`.
- Le premier bouton permet de démarrer le moteur en enregistrant la valeur 1 dans le serveur JavaScript.
- Le deuxième bouton permet d'arrêter le moteur en remettant toutes les autres valeurs à 0 dans le serveur JavaScript. 

(Voir `front\index.html` & `front\style.css` & `back\client.js`)

### Le Micropython
Une fois nos variables enregistrées dans le serveur, nous allons les récupérer avec une requête pour les utiliser afin de faire fonctionner nos moteurs.

(Voir `python\micropython.py`)
