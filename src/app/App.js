import React, {Component} from 'react';
import { hot } from 'react-hot-loader'
// import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
//import '../scss/app.scss';
import MainRouter from './Router';
import HomePage from "../components/HomePage";

class App extends Component {
    render() {
        return (
            // <MainRouter/>
            <HomePage/>
        )
    }
}

export default hot(module)(App)
