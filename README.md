# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and built to do my homework for Generasi Gigih 2.0 - Frontend Engineering Track

## **Update**

### **Homework - Module 5 - Session 1 - CSS Grid & Flexbox**

Modify the existing components, to use Flexbox and Grid.

* At minimum there should be one components that use Flexbox, and a different component that use Grid.
* You can freely choose which components that will be changed.
* Example:
  * Grid used for Track Tables
  * Flex used for song info (title, artist, etc)

### **Homework - Module 4 - Session 3 - Clean Code & ESLint**

Fix any impure functions / mutable codes, and also fix the eslint problems (if any).

### **Homework - Module 4 - Session 2 - React Router**

* Move the create playlist page URL to /create-playlist
* The Create Playlist page only accessible when user already login. If user haven't logged in, redirect to root URL (/)
* For the root URL (/)
  * If user haven't logged in, show the Login link
  * If user already logged in,redirect to Create Playlist page

### **Homework - Module 4 - Session 1 - Redux**

Move the access token state to redux store. The app should still behaves like it is before.

### **Homework - Module 3 - Session 3 - Forms & Lifting State Up**

* Create a "create playlist" form with the following fields
  * Title, minimum 10 characters
  * Description
  * A button to submit

* When the button is clicked, create a new playlist with those title and description, with songs that were selected previously
  * Use Get Current User's Profile, Create a Playlist, and Add Items to a Playlist API to achieve this. Read more in the API Docs.
  * Playlist should be private and collaborative should be false

### **Homework - Module 3 - Session 2 - Hooks**

Add feature to select and deselect songs

* Use the uri as the key indentifier for looping
* Build this feature using Hooks
* When a song is selected, the button label should be "Deselect". When the song isn't selected, the button label should be "Select"
* When user searcher for another song, the selected songs should still be maintained in the list

### **Homework - Module 3 - Session 1 - State & Event Handling**

* Have a link that when clicked, it redirects to Spotify Auth API.
  * Read it more [here](https://developer.spotify.com/documentation/general/guides/authorization/implicit-grant/) in the **Implicit Grand Flow** section
  * For the scope, use playlist-modify-private
  * Set up the callback URL as localhost:3000 in the Spotify Dashboard
  * The callback will contains the Access Token, which you'll need for next request. Store that in a state

* Create a search song functionalities
  * Have a Search textbox button, when the button is clicked, it calls [Spotify Search API](https://developer.spotify.com/documentation/web-api/reference/#category-search). Later on, show the results on the Tracks Table created before.

### **Homework - Module 2 - Session 3 - List & Looping, Conditional Rendering**

Now, we will create a table of tracks

* Download the data [here](https://gist.githubusercontent.com/aryapradipta9/4085f18a47101f10f685a6140385b2bf/raw/e32426bc2d954274e984b03c601f14c08eb47a0b/all-sample.js). This contains array of tracks.
* Loop the data and create track components for each track listed.

### **Homework - Module 2 - Session 2 - Components and Props**

From previous homework, convert the track elements (which contains song title, image, album, etc) into components. Move it outside main component.

### **Homework - Module 2 - Session 1 - Adding React to Web Project, JSX & Element**

* Create a page in Reach which contains the following data. The layout will be similar to the previous exercise, **without the form part only**.
  * Images of the album
  * Song title
  * Song Artist
  * A button that says (Select)

* Create all of them in App.js in one component
* Download the data [here](https://gist.githubusercontent.com/aryapradipta9/0b8d0a1a113e3594d34c68c72ec32daf/raw/cb5d20b494bd2cb259d31596b9e8eea02e0f6d1e/single-sample.js) and put that in your react app

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
