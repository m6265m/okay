import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, Route, Switch,Redirect} from "react-router-dom";
import FurtherDetails from "./FurtherDetails";


function Home({match}) {

    const [usernames, setUsernames] = useState([])
    const [selectedName, setSelectedName] = useState('')


    useEffect(() => {
        axios.get("/getUserNames")
            .then(res => {
                console.log(res.data)
                let array = []
                for (let i in res.data) {
                    array[i] = res.data[i].name
                }
                setUsernames(array)
            })
            .catch(err => console.error(err))

    }, [])


    // console.log("wohoo",usernames)

    const handleLinkClick = (event, name) => {
        event.preventDefault();

        // setSelectedName(name)
        window.location = `/furtherDetails?name=${name}`

    }

    return (
        <div>
            <p>UserNames</p>


            {usernames.map((obj) => {
                return (


                    <div>

                        <li onClick={(e) =>
                            handleLinkClick(
                                e,
                                obj
                            )
                        }>{obj}
                        </li>


                    </div>
                )
            })}


            {/*<Switch>*/}

            {/*    <Route*/}
            {/*    path={`${match.path}/`}*/}
            {/*    exact*/}
            {/*    render={() => <Redirect to="/home" />}*/}
            {/*/>*/}
            {/*    <Route path={`${match.path}/furtherDetails`}*/}
            {/*           render={(props) => (*/}
            {/*               <FurtherDetails {...props} name={selectedName}/>*/}
            {/*           )}*/}
            {/*    />*/}
            {/*</Switch>*/}


        </div>


    )

}

export default (Home)
