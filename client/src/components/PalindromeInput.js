import axios from 'axios';
import React from 'react';
import { isPalindrome } from '../helpers/isPalindrome';
import App from '../App';

export default class PalindromeInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };

        this.props = props;
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        let value = e.target.value;
        let name = e.target.name;
        isPalindrome(value);
        this.setState(prevState => {
            return {
                [name]: value
            }
        }, () => console.log(this.state)
        )
        isPalindrome(value);
    }

    onSubmit(e) {
        e.preventDefault();
        let checkName = this.props.value;
        if(!this.checkIfExists(checkName)) {
          axios.post('/api/palindromes', { name: this.props.name })
            .then(this.setState.loadList())
            .then(this.setState(this.name = ''))
        } else {
            this.setState(this.name = '');
          // () => loadList();
        }

    }

    checkIfExists(checkName) {
        let length = this.palindromeList.length;
        for (var i = 0; i < length; i++) {
          if (this.palindromeList[i].key === checkName.toUpperCase()) {
            alert('Palindrome already exists in database!');
            return true;
          }
        }
        return false;
      }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type='text'
                    name={'name'}
                    value={this.props.name}
                    onChange={this.onChange}
                />{' '} 
                is a palidrome 
                <input type='submit' value='Add' /> 
            </form>
            
        )
    }
};