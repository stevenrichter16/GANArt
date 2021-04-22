import React from 'react'

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
* <Image>: - creates the code for each image respective  
*            caption, and displays them for the user 
*
*          - gets loaded from <Fractal>, <Impressionist>,
*            <Surreal>
*           
* @args:   {props.content.source} holds the source path
*          for the image
*
*          {props.content.caption} holds the caption
*          for the image
*
* @return: 1) code which displays the image and caption
* * * * * * * * * * * * * * * * * * * * * * * * * * * * */

function Image(props) {
    return (
            <div className="col">
                <img src={props.content.source} alt="fractal" className="gallery-item"/>
                <p className="caption">{props.content.caption}</p>
            </div> 
    )
}

export default Image