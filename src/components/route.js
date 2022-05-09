import React, {  Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';




export class Button extends Component {
 render(){
     return(
        <Router>
            <button className='btn btn-primary'><NavLink to='quiz'>Start</NavLink></button>
            <hr/>

            {/* <Route path='/quiz'  /> */}
            
        </Router>
     );
 }
    
}

export default Button;