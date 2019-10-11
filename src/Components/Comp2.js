import React, { Component } from 'react';
import axios from "axios"
class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            letters : [],
            StartWith:'',
            include:'',
            endsWith:'',
            WordMaxLength: '',
            WordMinLength: ''
         }
    }

    componentDidMount(){
        axios.get('https://wordfind.azurewebsites.net/api/English?code=8IZqWCIZi3kVDCXhQnmyvh0EKHvaQsVWN5kJjLnqR4ss4og5HzTL3Q==')
        .then( response =>{
            console.log(response)
            .cath( error =>{
                console.log(error)
            })
        })
    }
    
    render() { 
        return ( 
            <div>
                hello letters
            </div>
         );
    }
}
 
export default App2;
