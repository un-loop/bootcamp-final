# Welcome to the the final exam for the Sparkling Seahorses bootcamp

This is a bootstrap project that we will use to conduct your final examination. Please clone this project via:

```git clone https://github.com/un-loop/bootcamp-final.git```

Once you have the project downloaded, you need to run `npm i` in both the root and client/ directories of the project. Once you have finished, `npm start` from the root will launch the project. Two servers will be started. One port 5000, there will be a backend API, served by `/server.js`. On port 3000, will be your familiar frontend create-react-app project, which will serve the front end code.

Please be sure that you are in a running state before you begin. You should see the below when navigating to `http://localhost:3000`:
![Initial State](https://github.com/un-loop/bootcamp-final/raw/main/doc-images/initial-state.PNG).

Make the changes in a branch whose name contains your name (for example, `michael-final`). Submit your work as a pull request to the `main` branch.

It is highly encouraged that you create commits after each problem is finished to save your progress. You can always revert your code by running `git checkout .` from the root directory of your project to revert to your last commit if you get into a bad state.

When finished, you app will appear something like:
![Final State](https://github.com/un-loop/bootcamp-final/raw/main/doc-images/final-state.PNG)

## Problem 1
### Create a component to display the current time
The component should be in its own file. Import this component into `/client/src/App.js`. It should:
* use the [momentjs](https://momentjs.com/) package to display the time (you need to install this to the project in `/client`
* display the current time in the format: Feb 22, 2021 3:50 PM
* Update the clock display every second (if you don't know this, don't get stuck here and please move on).
* Be placed underneath "This is the bootcamp final."
* you may use the built-in <input> react element, or use a component library such as Material-ui, as it suits you best.

## Problem 2
### Write a function to return whether or not a string is a palindrome
This code should be in its own file (isPalindrome.js). Return a boolean value (true/false) to indicate whether the string passed to the function  is a palindrome. 

## Problem 3
### Create a component to show whether entered text is a palindrome
Add an input box after the current time component. Display the text "is a palidrome" whenever the current value of the text box is a palindrome.
* Make this a separate component
* Call the function you wrote in isPalindrome.js
* Display the text "is a palidrome" next to the input box whenever the current value of the text box is a palindrome, but when the value is not a palindrome, do not add additional text.

## Problem 4
### Submit new palindromes to list
Hook up the input created in Problem 3 to be able to submit to the list of palindromes.
* Add a button to the right of the input (can be after the "is a palindrome" text). The button should be disabled when the current text is not a palindrome
* extend the API in `/server.js` to allow for new palidromes to be added
* Use axios on the front end to submit the new palindrome to the API
* clear the text box after submitting the palindrome
* refresh the palidrome list after the palindrome is added

## Problem 5
### Add a created date to palindromes
Start tracking the date that palindromes are added.
* Display this date alongside the palindrome in the list
* If there is no date (like, say, for the pre-populated data), display nothing

## Problem 6
### Add error checking
In the API in `/server.js`, add code to check whether the palindrome already exists in the list.
* If the palindrome exists, return a (BAD_REQUEST)[https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400] respose, with body text saying `The palindrome "what_you_entered" already exists.`
* Check for this response in the front end and display a message with window.alert() showing the error returned from the server.
* If any other error occurs when hitting the API, show that error message. For instance, if the server is not running, an alert saying "Network Error" should be displayed.

For example:
![Palindrome Exists](https://github.com/un-loop/bootcamp-final/raw/main/doc-images/palindrome-exists.PNG)
