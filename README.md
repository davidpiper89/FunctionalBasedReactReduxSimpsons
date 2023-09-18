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

The App uses redux for state management and is connected to the components using the react redux library hooks, useSelector and useDispatch.
Its maybe a bit overkill for a small app like this as it is quite heavy duty and more suited for much bigger apps. But in the bootcamp we initially prop drilled the state but evolved it into redux to prep us for our next big project.

## **API**

The application makes use of a Simpsons API to retrieve information about the characters. The API is accessed using the axios library, and the results are stored in the Redux store.

