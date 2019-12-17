import React, { Component } from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom'
import WatchPage from './watchPage/watchPage'
import HomePage from './homePage/homePage' 
import './css/module.css'

class App extends Component {

    render() {

        return (
           
                <BrowserRouter>
                 <div className="App">
                     <Route exact  path="/" component={HomePage}/>
                     <Route path="/watch/:id" component={WatchPage}/>
               
                 </div> 
                 </BrowserRouter>

          
         
        );
    }
}

export default App;