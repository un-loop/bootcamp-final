import { useCallback, useEffect, useState, onSubmit } from "react";
import axios from "axios";
import Time from "./currentTime";
import PalindromeInput from "./palindromeInput";
import React from 'react';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {  
  const [palindromeList, setPalindromeList] = useState([]);

  const loadList = useCallback(async (abortToken) => {
    const result = await axios.get('/api/palindromes');

    if (!abortToken || !abortToken.aborted) {
      setPalindromeList(result.data);
    }
  }, [setPalindromeList]);

  useEffect(
    () => {
      const abortToken = {
        aborted: false,
      };

      loadList(abortToken);

      return () => abortToken.aborted = true;
    }, [loadList]
  );

  class moment extends React.Component {

  }

  class SimpleForm extends React.Component {
    constructor(props) {
      super(props);
      this.nameEl = React.createRef();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(e) {
      e.preventDefault();
      alert(this.nameEl.current.value);
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" ref={this.nameEl} />
            is a palindrome
          </label>
          <input type="submit" name="Submit" />
        </form>
      )
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is the bootcamp final.
        </p>

          <Time /> 

          <PalindromeInput onSubmit={onSubmit}/>
          
          <SimpleForm/>
        {
          <ul>
            {
              palindromeList.map(
                (palindrome, index) => <li key={index}>
                  {palindrome.item} {palindrome.date}
                </li>
              )
            }
          </ul>
        }
      </header>
    </div>
  );
}

export default App;
