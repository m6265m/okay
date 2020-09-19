import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import TextField from "@material-ui/core/TextField";



function EditParagraphPage(props) {

const data = props.location
console.log(data.data)

    const [newParagraph,setNewParagraph] = useState('')

    const handleParagraphChange= (event) =>{
    // event.preventDefault()
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
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    defaultValue={data.data}
                    rows="4"
                    fullWidth={true}
                    variant="outlined"
                    onChange={handleParagraphChange}
                />
                {/*<textarea onChange={handleParagraphChange}/>*/}
                <button onClick={saveParagraph}>Save</button>
            </form>

        </div>



    )

}

export default (EditParagraphPage)
