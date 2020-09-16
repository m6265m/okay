import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";



function FurtherDetails(props) {

    const search = props.location.search; // returns the URL query String
    const params = new URLSearchParams(search);
    const [selectedName, setSelectedName] = useState(
        params.get("name")
    );

    const headers = {
        "select": selectedName
    };

    const [ID,setID] = useState('')

    useEffect( () => {
        axios.get('/getNameAndId', {params: {select: selectedName}})
            .then( res => {
                console.log(res.data)
                setID(res.data)
            })
            .catch(err => console.error(err))
    },[selectedName])

    return(
        <div>
            <p>Name: {selectedName} </p>
            <p>ID: {ID}</p>

        </div>



    )

}

export default (FurtherDetails)
