import React from "react";

export default function Image(props) {
    return (
        <div className='image'>
            <img src={props.src} alt=""/>
        </div>
    )
}