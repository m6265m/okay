import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Home from "./Components/Home"
import RegisterPage from "./Components/RegisterPage";
import FurtherDetails from "./Components/FurtherDetails";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import EditParagraph from "./Components/EditParagraphPage";


function App() {


    // const [string, setString] = useState('')
    // const [find, setFind] = useState('')
    //
    // const handleInput = (e) => {
    //     setString(e.target.value)
    // }
    //
    // const handleClick = (e) => {
    //
    //     e.preventDefault()
    //
    //
    //     console.log(string)
    //
    //     axios.post('/send', {value: string})
    //         .then(r => console.log(r))
    //         .catch(err => console.error(err))
    // }
    //
    // const handleInputFind = (e) => {
    //     setFind(e.target.value)
    // }
    //
    // const handleClickFind = (e) => {
    //
    //     e.preventDefault()
    //
    //
    //     console.log(find)
    //
    //     axios.post('/find', {value: find})
    //         .then(r => console.log(r.data))
    //         .catch(err => console.error(err))
    // }

    return (


        <div className="App">

            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/" exact component={RegisterPage}/>
                        <Route path="/home" exact component={Home} />
                        <Route path="/furtherDetails" exact component={FurtherDetails} />
                        <Route path="/editParagraph" exact component={EditParagraph} />


                    </Switch>
                </div>
            </Router>



            {/*<Home/>*/}


            {/*practice*/}
            {/*<form>*/}
            {/*    /!*save*!/*/}
            {/*    <input type="text" onChange={handleInput}/>*/}
            {/*    <button type="submit" onClick={handleClick}>Submit</button>*/}
            {/*    <br/>*/}
            {/*    <br/>*/}

            {/*    /!*find*!/*/}
            {/*    <input type="text" onChange={handleInputFind}/>*/}
            {/*    <button type="submit" onClick={handleClickFind}>Submit</button>*/}
            {/*</form>*/}
        </div>
    );
}

export default App;
