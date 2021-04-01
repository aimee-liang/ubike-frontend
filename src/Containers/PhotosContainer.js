import React from "react"
import Button from "@material-ui/core/Button"
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const PhotosContainer = (props) => {
    return (
        <div className="photos-container">
            <img alt=""src={props.photos ? props.photos.photos : "/placeholder.jpg" }  className="default-pic"  />
            <br></br>
            <br></br>
            <Button variant="contained" color="primary" component="span"><CloudUploadIcon/> &nbsp; Upload Photos</Button>
        </div>
    )
}

export default PhotosContainer