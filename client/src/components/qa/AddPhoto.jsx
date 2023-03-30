import React, { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { v4 } from "uuid";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMymx09a7uvfQttSx6wpteAaXB7w36bRA",
  authDomain: "aerio-54e8f.firebaseapp.com",
  projectId: "aerio-54e8f",
  storageBucket: "aerio-54e8f.appspot.com",
  messagingSenderId: "15690987961",
  appId: "1:15690987961:web:b2cc489b2a4e45236ede68",
  measurementId: "G-SME8XBPXFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

function AddPhoto(props) {
  const [imageUpload, setImageUpload] = useState(null);
  const [showUploadButton, setShowUploadButton] = useState(true);

  const imagesListRef = ref(storage, "images/");

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      props.setImageTypes((prev) => [...prev, snapshot.metadata.contentType]);
      getDownloadURL(snapshot.ref).then((url) => {
        props.setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  const photoUploadHandler = (event) => {
    setImageUpload(event.target.files[0]);
  };

  return (
    <div>
      <input type="file" onChange={photoUploadHandler} accept="image/*" multiple/>
      {props.imageUrls.length <= 4? <button onClick={uploadFile}> Upload Image</button>: null}
      {props.imageUrls.map((url) => {
        return <img key={v4()} src={url}/>;
      })}
    </div>
  );
}

export default AddPhoto;