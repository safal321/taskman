import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';

class App extends Component{
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                </div>
            </BrowserRouter>
        );
    }

}

ReactDom.render(<App/>, document.getElementById('app'));