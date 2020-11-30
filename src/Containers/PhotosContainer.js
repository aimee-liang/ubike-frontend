import React from "react"

const PhotosContainer = (props) => {
    return (
        <div>
            <img alt=""src={props.photos ? props.photos.photos : "/placeholder.jpg" }  className="default-pic"  />
            <br></br>
            <button>Upload Photos</button>
        </div>
    )
}

export default PhotosContainer