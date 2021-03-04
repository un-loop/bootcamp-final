import { Box, TextField } from '@material-ui/core';
import {useState,React} from 'react';






let Palindrome = (props) => {
    const [string, setString] = useState( "" );

    let isPalindrome = (str) => {
         str = string
        const arrayValues = str.split('');
        const reverseArrayValues = arrayValues.reverse();
        const reverseString = reverseArrayValues.join('');
        if(str === reverseString) {
            return "I am a palindrome"
        }
        else {
            return "I am not a palindrome"
        }
    }

    return (
        <Box>
        <TextField id="input" variant="outlined"
        value={string}
        onChange={(e) => setString( e.currentTarget.value )}
        ></TextField>

       <Box> {isPalindrome(string)}</Box>



        </Box>
    )
}
export default Palindrome