This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Deuces

A recreation of the card game Deuces, in a React/Redux web application with a Rails API backend.

This repository is the React/Redux frontend, and is deployed on Heroku at [Deuces](https://deuces-card-game.herokuapp.com/)

The backend is available at [Heroku](https://deuces-backend.herokuapp.com/) [Github](https://github.com/jk-me/deuces-back)

An older version of this application in a single repository is available on [Github](https://github.com/jk-me/deuces)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

This app is built on the npm packages listed in client/package.json

### Installing

To start this application on a local server, run the following commands in your terminal after cloning this repository to your local environment and navigating to its root directory.

```
$ npm i
$ npm start -p 3000
```

Then navigate to localhost:3000 in your web browser.

A locally run version of this frontend will use the deployed backend for data. To use a local backend, change the `apiurl` variable in `src/actions/gameActions.js` to the local server url.

## Author

* **Jenny Kam**
 [jk-me](https://github.com/jk-me)
 * **Blog:** [deuces](https://jk-me.github.io/react_redux_final_project)

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
