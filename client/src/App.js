import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import CurrentTime from "./currentTime";
import { isPalindrome } from "./isPalindrome.js";

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'applicatin/json';

// const btn = document.getElementById("btn");
// if (btn.addEventListener === true)  {
//     alert("yes is a palindrome");
//   } else  {
//     alert("not a palindrome");
// }

// btn.addEventListener("click", isPalindrome, false);
//  if(isPalindrome() === true){
//         alert("is a palindorme")

//       } else {
//         alert("not a palindrome")
//       }
    
const Inbox = () => {
  return <div>
      <input type="text" onKeyDown={() => isPalindrome()}></input>
      <span>is a palindrome</span>
      <input id="btn" type="submit" value="add" ></input>
  </div>

}

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
        <div>
          <CurrentTime></CurrentTime>
          <Inbox></Inbox>
          </div>
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
