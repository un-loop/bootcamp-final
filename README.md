# Welcome to the the final exam for the Sparkling Seahorses bootcamp

This is a bootstrap project that we will use to conduct your final examination. Please clone this project via:

```git clone https://github.com/un-loop/bootcamp-final.git```

Once you have the project downloaded, you need to run `npm i` in both the root and client/ directories of the project. Once you have finished, `npm start` from the root will launch the project. Two servers will be started. One port 5000, there will be a backend API, served by `/server.js`. On port 3000, will be your familiar frontend create-react-app project, which will serve the front end code.

Please be sure that you are in a running state before you begin. You should see the below when navigating to `http://localhost:3000`:
![Initial State](https://github.com/un-loop/bootcamp-final/raw/main/doc-images/initial-state.PNG)


## Problem 1
### Create a component to display the current time
The component should be in its own file. Import this component into `/client/src/App.js`. It should:
* use the [momentjs](https://momentjs.com/) package to display the time (you need to install this to the project in `/client`
* display the current time in the format: Feb 22, 2021 3:50 PM
* Update the clock display every second
* Be placed underneath "This is the bootcamp final."



