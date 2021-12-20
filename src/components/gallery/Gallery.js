import React, { Suspense } from "react"

import workplace from "../../images/workplace.jpg";
import workplace_2 from "../../images/workplace-2.jpg";
import meeting_room from "../../images/meeting-room.jpg";
import meeting_room_2 from "../../images/meeting-room-2.jpg";

import Image from './image/Image'

import './gallery.sass'

export default class Gallery extends React.Component {
    render() {

        const images = [
            { id: 1, src: workplace },
            { id: 2, src: workplace_2 },
            { id: 3, src: meeting_room },
            { id: 4, src: meeting_room_2 }
        ]

        return (
            <div className='images-container'>
                {images.map(image => (
                    <Image key={image.id} src={image.src}/>
                ))}
            </div>
        )
    }
}

