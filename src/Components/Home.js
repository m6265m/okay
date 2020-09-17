import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, Route, Switch, Redirect} from "react-router-dom";
import FurtherDetails from "./FurtherDetails";


function Home({match}) {

    const [usernames, setUsernames] = useState([])
    const [paragraph, setParagraph] = useState('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n' +
        '                industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n' +
        '                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap\n' +
        '                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the\n' +
        '                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing\n' +
        '                software like Aldus PageMaker including versions of Lorem Ipsum.')


    useEffect(() => {

        axios.get("/getParagraph")
            .then(res => {
                console.log(res.data)
                setParagraph(res.data[0].paragraph)
            })
            .catch(err => console.error(err))


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

    const editParagraph = () => {

        // setSelectedName(name)
        // window.location = `/furtherDetails?name=${name}`

    }

    return (
        <div>

            <h3>Welcome</h3>
            <p>{paragraph}</p>

            <Link to={{pathname: "/editParagraph", data: paragraph}}>
                Edit
            </Link>
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
