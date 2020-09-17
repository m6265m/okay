import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";



function EditParagraphPage(props) {

const data = props.location
console.log(data.data)

    const [newParagraph,setNewParagraph] = useState('')

    const handleParagraphChange= (event) =>{
    event.preventDefault()
        setNewParagraph(event.target.value)

    }

    const saveParagraph =  () => {
        axios.post('/postParagraph', {paragraph : newParagraph} )
            .then(res => {
                console.log(res.data)
                window.location="/home"
            })
            .catch(err => console.error(err))
    }

    return(
        <div>

            <form>
                <textarea value={data.data} onChange={handleParagraphChange}/>
                <button onClick={saveParagraph}>Save</button>
            </form>

        </div>



    )

}

export default (EditParagraphPage)
