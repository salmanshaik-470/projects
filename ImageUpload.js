/*import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import firebase from "firebase";
import {storage,db} from "./firebase";
import './ImageUpload.css';


function ImageUpload({username}) {
    const [image,setImage]=useState('null');
   // const [url,setUrl]=useState("");
    const [progress,setProgress]=useState(0);
    const [caption,setCaption,]=useState('');


    const handleChange=(e)=>{
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    };
       const handleUpload =()=>{
           const uploadTask=storage.ref('images/${images.name}').put(image);
           
           uploadTask.on(
               "statechange",
               (snapshot) =>{
                   //progess function..
                   const progress=Math.round(
                   (snapshot.bytesTransferred/snapshot.totalBytes)*100
                   );
                   setProgress(progress);
               },
               (error)=>{
                   console.log(error);
                   alert(error.message);

               },
               ()=>{
                   //complete function..
                   storage
                   .ref('images')
                   .child(image.name)
                   .getDownloadURL()
                   .then(url=>{
                       //post  image inside db
                       db.colllection("posts").add({
                          timestamp: firebase.firestore.FieldValue.serveTimestamp(),
                           caption:caption,
                           imageUrl:url,
                           username:username
                       });
                       setProgress(0);
                       setCaption("");
                       setImage(null);
                   });
               }
           )

       }

    return (
        <div className="imageupload">
            <progress className="imageupload-progress" value={progress} max="100"/>
            <input type="text"  placeholder ="type a caption....." onChage={event=>setCaption(event.target.value)} value={caption}/>
            <i
            
            nput type="file"onChange={handleChange}/>
            <Button onClick={handleUpload}>Upload</Button>
            

        </div>
    )
}

export default ImageUpload*/
import React, { useState } from "react";
import firebase from "firebase";
import { storage, db } from "./firebase";
import "./ImageUpload.css";
import { Input, Button } from "@material-ui/core";

const ImageUpload = ({ username }) => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);

            // post image inside db
            db.collection("posts").add({
              imageUrl: url,
              caption: caption,
              username: username,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });

            setProgress(0);
            setCaption("");
            setImage(null);
          });
      }
    );
  };

  return (
    <div className="imageupload">
      <progress className="imageupload__progress" value={progress} max="100" />
      <Input
        placeholder="Enter a caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <div>
        <input type="file" onChange={handleChange} />
        <Button className="imageupload__button" onClick={handleUpload}>
          Upload
        </Button>
      </div>

      <br />
    </div>
  );
};

export default ImageUpload;
 
