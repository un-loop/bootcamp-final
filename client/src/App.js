import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Time from "./Time";
import PalForm from "./PalForm";

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

  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is the bootcamp final.
        </p>
        <Time />
        <PalForm updateList={() => loadList()}/>
        {
          <ul>
            {
              palindromeList.map(
                (palindrome, index) => <li key={index}>
                  {(typeof palindrome === 'string') ? palindrome : palindrome.val + ' ' + palindrome.time}
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
