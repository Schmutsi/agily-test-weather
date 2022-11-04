# Test technique fullstack - _Front-A-exercice 1_

_Pierre Schmutz - PFE Agily - 04/11/2022_

## Etape 1 : Choisir les technos et initialisation du projet - 1h

J'ai choisi le framework React, framework que j'ai déjà utilisé auparavant sur des projets personnels.

J'ai initialisé mon projet avec un template TypeScript qui est simplement un sur-ensemble typé de JavaScript et qui a pour but d'améliorer et de sécuriser la production du code de JavaScript.

Après avoir lu l'énoncé de l'exercice 1, je me suis rapidement penché sur la partie qui m'a paru la moins instinctive : rendre le background-image dynamique en fonction de la ville choisie.

J'ai passé la majorité du temps de cette étape à chercher comment récupérer une image d'une certaine ville. Je n'ai pas trouvé de telle fonctionnalité sur les 2 API openweathermap ou weatherstack. J'ai cependant trouvé l'API Places de Google qui permettrai de trouver une photo d'un lieu assez facilement.

Comme j'ai trouvé rapidement toutes les fonctionnalités demandées concernant les informations météorologique (jour J et les 7 jours suivants) sur l'API openweathermap, c'est donc celle ci que j'utiliserai.

Après avoir créé mon projet sur mon IDE Visual Studio Code je l'ai rapidement relié à un repo github (que je maîtrise mieux que gitlab).

## Etape 2 : Architecture du projet

Mon fichier _index.tsx_ fait appel à _App.tsx_, objet dans lequel je gère les states les plus globaux de l'application et dans lequel je fais appel à mes 2 pages qui sont dans le dossier _Screens_.

J'ai décidé de créer les 2 pages avec le même URL. C'est à dire que mes 2 pages sont sur la même route mais la première sera affichée si l'on souhaite rechercher la météo d'une ville et la seconde sera affichée pour consulter la météo de cette ville valide.

Les fichiers ts des services qui font appel à une api seront dans un dossier _Services_.

Je créerai mes propres modèles d'interfaces afin de manipuler uniquement les informations météo qui m'intéresse dans mon application, je les mettrai dans un fichier dans un dossier _Models_.

Mes composants, comme les cards pour afficher les informations seront placés dans un dossier _Components_.

Afin de rendre l'app responsive je vais adopter une approche mobile first, et adapter le style de certains composants en fonction de la taille de l'écran de l'utilisateur.

Les feuilles de styles css seront au plus proche des fichiers tsx correspondant dans le même dossier.

## Etape 3 : Page recherche de ville reliée au web server

Je gère les variables générale (useState) dans le fichier _App.tsx_ ce qui me permet d'accéder aux données intéressantes dans chaque page. Aussi, pour mes pages _SearchPage.tsx_ et _DetailsPage.tsx_ j'ai mis en argument des fonctions pour modifier les variables du state, je suis ainsi libre de faire mes modifications sur les variables du state dans les fichiers des pages.

Par choix, je n'ai pas vraiment fait d'état globaux puisque mes variables ne sont pas accessibles depuis toutes les pages (_redux_ le permettrai). Mais comme l'architecture du projet est assez basique, je ne voulais pas complexifier la tâche.

Pour effectuer la recherche dela méthéo de la ville, il faut valider le contenu de l'input en appuyant sur entrée. Je fais appel à une fonction de service dans laquelle j'utilise _axio_ pour appeler à l'api _openweathermap_. Avec la clef api donnée et le nom de la ville je peux avoir des informations intéressantes depuis ce server web. Dès lors je récupe les données qui m'intéressent et les stocks dans le state de mon app. Si la ville n'est pas trouvée je l'indique en message d'erreur.
