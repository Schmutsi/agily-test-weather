# Test technique fullstack - _Front-A-exercice 1_

_Pierre Schmutz - PFE Agily - 04/11/2022_

## Etape 1 : Choisir les technos et initialisation du projet - 1h

J'ai choisi le framework React, framework que j'ai déjà utilisé auparavant sur des projets personnels.

J'ai initialisé mon projet avec un template TypeScript qui est simplement un sur-ensemble typé de JavaScript et qui a pour but d'améliorer et de sécuriser la production du code de JavaScript.

Après avoir lu l'énoncé de l'exercice 1, je me suis rapidement penché sur la partie qui m'a parru la moins instinctive : rendre le background-image dynamique en fonction de la ville choisie.

J'ai passé la majorité du temps de cette étape à chercher comment récupérer une image d'une certaine ville. Je n'ai pas trouvé de telle fonctionalité sur les 2 API openweathermap ou weatherstack. J'ai cependant trouvé l'API Places de Google qui permettrai de trouver une photo d'un lieu assez facilement.

Comme j'ai trouvé rapidement toutes les fonctionnalitées demandées concernant les informations métérologique (jour J et les 7 jours suivants) sur l'API openweathermap, c'est donc celle ci que j'utiliserai.

Après avoir créé mon projet sur mon IDE Visual Studio Code je l'ai rapidement relié à un repo github (que je maîtrise mieux que gitlab).

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
