import React from 'react';

/* * * * * * * * * * * * * * * * * * * * * * * * * * * 
*   <Faq>: - displays a frequently asked question, 
*            along with its respective answer 
*
*          - gets loaded from <Welcome>
*          
*           
*   @args: {props.content.question} is a question 
*
*          {props.content.answer} is the answer to the 
*          question
*
* @return: 1) a question 
*
*          2) the answer
* * * * * * * * * * * * * * * * * * * * * * * * * * * */
function Faq(props) { 
    return (
        <div>
            <h3>{props.content.question}</h3>
            <p>{props.content.answer}</p>
        </div>
    )
}

export default Faq;