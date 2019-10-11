import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import axios from "axios"
class App1 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            letters: [],
            StartWith:'',
            include:'',
            endsWith:'',
            WordMaxLength: '',
            WordMinLength: ''
         }
    }

    changeHandler = (e) =>{
        this.setState({[e.target.name] : e.target.value})
    }
    submitHandler = (e) =>{
        e.preventDefault();
        console.log(this.state);
        axios.post('https://wordfind.azurewebsites.net/api/English?code=8IZqWCIZi3kVDCXhQnmyvh0EKHvaQsVWN5kJjLnqR4ss4og5HzTL3Q==', this.state)
        .then( response =>{
            console.log(response)
            this.setState({letters: response.data})
        })

        .then( error =>{
            console.log(error)
        })
    }

    render() { 
        const { letters , StartWith , endsWith , include , WordMaxLength , WordMinLength } = this.state
        return ( 
            <div>
                <div className="App1">
                <form onSubmit={this.submitHandler}>
                    <div>
                         <label htmlFor="StartWith">StartWith</label>
                        <input type="text" name="StartWith" value={StartWith}
                        onChange={this.changeHandler}
                      placeholder="C"
                        />
                    </div>
                    <label htmlFor="endsWith">endsWith</label>
                    <div>
                    <input type="" name="endsWith" value={endsWith}
                     onChange={this.changeHandler}
                     placeholder="er"
                    />
                    </div>
                    <label htmlFor="includes">includes</label>
                    <div>
                    <input type="text" name="include" 
                     onChange={this.changeHandler}
                    value={include}
                    placeholder="mpu"
                    />
                    </div>
                    <label htmlFor="WordMaxLength">WordMaxLength</label>
                    <div>
                    <input type="text" name="WordMaxLength" value={WordMaxLength}
                     onChange={this.changeHandler}
                     placeholder="9"
                    />
                    </div>
                    <label htmlFor="WordMinLength">WordMinLength</label>
                    <div>
                    <input type="text" name="WordMinLength" 
                    onChange={this.changeHandler}
                    value={WordMinLength}
                    placeholder="3"
                    />
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
                </div>
                <Slide left>
                <ul className="letter-list">
                {letters.length ?
                letters.map( letter => <li  key={letter.id}>{letter}</li>) : null
                }
                </ul>
                </Slide>
            </div>
         );
    }
}
 
export default App1;