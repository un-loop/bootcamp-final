import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import currDate from "./currentTime";
import isPalindrome from "./isPalindrome";
import React from "react";

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'applicatin/json';

function App() {  
  const [palindromeList, setPalindromList] = useState([]);

  const loadList = useCallback(async (abortToken) => {
    const result = await axios.get('/api/palindromes');

    if (!abortToken || !abortToken.aborted) {
      setPalindromList(result.data);
    }
  }, [setPalindromList]);

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
        <currDate> 
          {moment}
        </currDate>
        <SimpleForm/>
        {
          <ul>
            {
              palindromeList.map(
                (palindrome, index) => <li key={index}>
                  {palindrome}
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
