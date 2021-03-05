import React from "react";



const TextInput = props => {
  return (
    <div>
      <input
        type="text"
        value={props.value}
        // use isPalindrome functionality to check if input is palindrome
        // state of string in text box is owned by this app and passed to isPalindrome 
        // All functionality outside of determining if string is palindrome will be done in or 
        // through this component
        onChange={event => console.log("is a palidrome")} /*palidrome spelling in instructions*/
      />
    </div>
  );
};

export default TextInput;