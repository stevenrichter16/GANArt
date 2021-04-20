import React from 'react'

// props: source, caption
function Image(props) {
    return (
            <div className="col">
                <img src={props.content.source} alt="fractal" className="gallery-item"/>
                <p className="caption">{props.content.caption}</p>
            </div> 
    )
}

export default Image