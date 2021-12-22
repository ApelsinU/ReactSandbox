import React from "react";

export default function Image(props) {
    return (
        <div className='image'>
            <picture>
                <source srcSet={props.src}/>
                <img src={props.src} alt=""/>
            </picture>
        </div>
    )
}