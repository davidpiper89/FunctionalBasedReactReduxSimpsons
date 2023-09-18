# **Functional-Based React-Redux Simpsons**

This project is a React-Redux web application that displays quotes from characters from the animated TV show "The Simpsons". The application is built using functional-based components and makes use of the Redux library for state management.

## **Installation**

To install the project, first clone the repository from GitHub:

_git clone https://github.com/davidpiper89/FunctionalBasedReactReduxSimpsons.git_

Then, navigate to the project directory and install the dependencies:

_cd FunctionalBasedReactReduxSimpsons
npm install_

## **Usage**

To run the application, use the following command:

_npm start_

This will start a development server and open the application in your default web browser.

## **Components**

The following are the main components of the application:

- **App**: The top-level component that renders the other components and provides access to the Redux store.
- **Characters**: A component that displays a list of Simpsons characters, with options to filter the list by name or occupation.
- **Character**: A component that displays detailed information about a single Simpsons character, including their name, quote and image.

## **Redux**

The App leverages Redux for state management, utilizing useSelector and useDispatch hooks from the react-redux library.

_Action_
- SET_SIMPSONS_API: Sets simpsons data from an API.
- REMOVE_CHARACTER: Deletes a character using their quote.
- SET_LIKED_CHARACTER: Toggles the 'liked' status of a character by quote.
- SET_SEARCH_INPUT/SET_USER_INPUT: Updates input values.
- ADD_CHARACTER: Adds a new character, prevents duplicates.
- SET_SCREEN_MODE: Modifies the screen mode.
- SORT_INPUT: Adjusts sorting input values.

_Reducer_
The reducer computes the new state depending on the received action type. It uses the findIndex method for array operations to ensure immutability.


## **API**

The application makes use of a Simpsons API to retrieve information about the characters. The API is accessed using the axios library, and the results are stored in the Redux store.

