import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Components/HomePages/HomePage.js';
import LoginPage from './Components/LoginPages/LoginPage.js';
import Navbar from './Components/Navbar/Navbar';
import { useContext } from 'react';
import { myContext } from './Context';

function App() {
    const userObject = useContext(myContext);
    console.log(userObject);
    return (
        <>
        <Navbar/>
            <Switch>
                <Route path={'/'} component={HomePage} exact></Route>
                <Route path={'/login'} component={LoginPage}></Route>
            </Switch>
        </>
    );
}

export default App;
