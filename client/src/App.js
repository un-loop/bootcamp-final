import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Time from './components/CurrentTime';
import PalindromeInput from './components/PalindromeInput';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {  
  const [palindromeList, setPalindromList] = useState([]);
  const [data, setData] = useState('');
  // const [resultPalindrome, setResultPalindrome] = useState(False);

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

  useEffect(() => {

  })


  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is the bootcamp final.
        </p>
        
          <Time />
        
          <PalindromeInput /> 

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
