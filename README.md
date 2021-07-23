# Minesweeper

## Background

Minesweeper is a game where the objective is correctly identify the location of all mines in a given grid. You are given a uniform grid of gray squares in the beginning of the game. Each square contains either a mine (indicated by a value of 9), or an empty square. Empty squares have a number indicating the count of mines in the adjacent squares. Empty squares can have counts from zero (no adjacent mines) up to 8 (all adjacent squares are mines).

If you were to take a complete grid, for example, you can see which squares have mines and which squares are empty:

0 0 0 0 0
0 0 0 0 0
1 1 1 0 0
1 9 1 0 0
1 2 2 1 0
0 1 9 1 0
0 1 1 1 0

The squares with "2" indicate that there 2 mines adjacent to that particular square.

Gameplay starts with a user un-hiding a square at random. If the square contains a mine, the game ends. If it is a blank, the number of adjacent mines is revealed.

Exposing a zero means that there are no adjacent mines, so exposing all adjacent squares is guaranteed safe. As a convenience to the player, the game continues to expose adjacent squares until a non-zero square is reached.

For example, if you click on the top right corner you get this ('-' means hidden):

0 0 0 0 0
0 0 0 0 0
1 1 1 0 0

- - 1 0 0
- - 2 1 0
- - - 1 0
- - - 1 0

## Challenge

The challenge is divided into two parts:
In the first half of the exercise, you will be looking at the logical part of the minesweeper. Your goal is to be able to generate a data representation of a minesweeper grid, with mine randomly generated. This grid should already have the number of each cell precalculated. This should only be consoled.log at this point.

In the second half of the exercise, you will be tasked with rendering that data in a react application. You will want to generate a visual grid, and then, try to get as closed to the real minesweeper as possible. Add interactivity (revealing mines) if you have time.

Feel free to use whatever methodology you are more confortable with (class or function components, styled-components or CSS and so on).
Feel free to ask us or google anything you need, except maybe how to code a minesweeper :upside_down_face:. You do not need to complete both exercise to pass, it is more of an exercise to see how you think, problem solve and ideally do something outside of your confort zone.

Given the time constraints, we don't expect TDD or unit tests, however try to imagine how you could implement such things. If you can, explain as you code why you programmed it in such a way, what other alternative you could have used instead.



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

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
