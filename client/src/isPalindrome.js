import React from 'react';
import { render } from 'react-dom';

// the state from textInput.js needs to be passed with props to this functionality
Class IsPalindrome extends React.Component {
  render(){<div> () => (str) {
    let re = /[^A-Za-z0-9]/g;
  let str = str.toLowerCase().replace(re, '');
  let len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
  </div>
  }
  
}