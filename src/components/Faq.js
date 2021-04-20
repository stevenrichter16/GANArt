import React from 'react';

function Faq(props) {
    return (
        <div>
            <h3>{props.content.question}</h3>
            <p>{props.content.answer}</p>
        </div>
    )
}

export default Faq;