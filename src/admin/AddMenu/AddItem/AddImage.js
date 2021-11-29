import React, { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { connect } from 'react-redux';
import { addImage } from '../../../redux/adminActionCreators';


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const mapDispatchToProps = dispatch => {
    return {
        addImage: (imageUrl) => dispatch(addImage(imageUrl))
    }
}


const storage = getStorage();
// Create the file metadata
/** @type {any} */

const metadata = {
    contentType: 'image/jpeg'
};

const Input = styled('input')({
    display: 'none',
});


const AddImage = props => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
   



    const handleChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleUpload = () => {
        // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = ref(storage, 'images/' + image.name);
        const uploadTask = uploadBytesResumable(storageRef, image, metadata);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                //console.log('Upload is ' + progress + '% done');
                setProgress(progress);
                setLoading(true);


            }, (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    // ...

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    setUrl(downloadURL);
                    setLoading(false);
                    setSuccess(true)
                    props.addImage(downloadURL);
                });
            }
        );
    }
    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ m: 1, position: 'relative' }}>
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" type="file" onChange={handleChange} />
                        <Fab
                            size="small"
                            aria-label="upload picture"
                            variant="extended"
                            component="span"
                            sx={{ fontSize: '12px', textTransform: 'capitalize' }}
                        >

                            <PhotoCamera sx={{ mx: 1, }} />
                            {image ? image.name : 'No file Chosen'}
                        </Fab>
                    </label>
                </Box>
                <Box sx={{ m: 1, position: 'relative' }}>
                    <Button
                        variant="outlined"
                        component="span"
                        disabled={loading}
                        onClick={handleUpload}
                        endIcon={success? <CheckIcon/> : <SendIcon  />}
                       
                    >
                        {loading ? (<CircularProgress size='15px' sx={{ color: "#007FFF", mr: 1, }} />) : (null)}
                        {success ? 'Completed' : 'Upload'}
                    </Button>
                </Box>
            </Box>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(AddImage)
