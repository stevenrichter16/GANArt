import React, { useState, useEffect } from 'react'
import RequestItem from './RequestItem'

function Request() {
    const [phrase, setPhrase] = useState("")
    const [phrases, setPhrases] = useState([])

    const handleInput = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        setPhrase(event.target.value)
    }

    const addRequest = (event) => {
        event.preventDefault()
        console.log("HII")
        setPhrases([... phrases, {phrase}])
    }

    // useEffect hook for updating the phrases array
    useEffect( () => {
        console.log(phrases)
    }, [phrases])

    return (
        <div className="request-container">
            <div className="row">
                <div className="col-xs-6">
                    <form onSubmit={addRequest}>
                        <label>Request an image:</label>
                        <input type="text" placeholder="Enter a phrase or description..." onChange={handleInput} />
                        <button type="submit">Submit</button>
                    </form>
                </div>

                <div className="col-xs-6 request-col">
                    <h4 id="request-title">Requests</h4>
                    <ul>
                        <li>{phrase}</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Request