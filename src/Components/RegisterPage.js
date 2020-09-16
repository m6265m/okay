import React, {useState} from "react";
import axios from "axios";

function RegisterPage() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cnic, setCnic] = useState(0)


    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleCnic = (e) => {
        setCnic(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()


        axios.post('/register', {name: name, email: email, cnic: cnic.toString()})
            .then(res => {
                console.log(res.data)
                window.location = "/home";

            })
            .catch(err => console.error(err))


    }

    return (
        <form>
            <br/>
            <br/>
            <input type="text" placeholder="name" onChange={handleName}/>
            <br/>
            <br/>
            <input type="email" placeholder="email" onChange={handleEmail}/>
            <br/>
            <br/>
            <input type="number" placeholder="cnic" onChange={handleCnic}/>
            <br/>
            <br/>

            <button type="submit" onClick={handleClick}>Register</button>
        </form>
    )
}

export default (RegisterPage)
