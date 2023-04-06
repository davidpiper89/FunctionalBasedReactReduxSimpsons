#**Functional-Based React-Redux Simpsons**

This project is a React-Redux web application that displays information about characters from the animated TV show "The Simpsons". The application is built using functional-based components and makes use of the Redux library for state management.

##**Installation**

To install the project, first clone the repository from GitHub:

_git clone https://github.com/davidpiper89/FunctionalBasedReactReduxSimpsons.git_

Then, navigate to the project directory and install the dependencies:

_cd FunctionalBasedReactReduxSimpsons
npm install_

##**Usage**

To run the application, use the following command:

_npm start_

This will start a development server and open the application in your default web browser.

##**Components**

The following are the main components of the application:

**App**: The top-level component that renders the other components and provides access to the Redux store.
**CharacterList**: A component that displays a list of Simpsons characters, with options to filter the list by name or occupation.
**CharacterCard**: A component that displays detailed information about a single Simpsons character, including their name, occupation, and image.

##**Redux**

The application uses the Redux library for state management. The Redux store contains three main slices of state: _characters_, _filters_, _user inputs_. The _characters_ slice contains an array of all the Simpsons characters, the _filters_ slice contains the current filter settings for the character list, while the _user inputs_ contains the user inputs to add a character and quote.

The Redux store is connected to the React components using the useSelector and useDispatch hooks provided by the react-redux library. The useSelector hook is used to select specific slices of state from the Redux store, while the useDispatch hook is used to dispatch actions to update the state in the store.

##**API**

The application makes use of the Simpsons API to retrieve information about the characters. The API is accessed using the axios library, and the results are stored in the Redux store.

##**Credits**

This project was created by David Piper, based on the "React Redux with Hooks" course by Maximilian Schwarzmüller on Udemy. The Simpsons characters and related content are the property of 20th Century Fox Television.
