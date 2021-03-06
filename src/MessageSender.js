import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase/compat/app";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [{user}, dispatch] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      message:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageURL,
    })
    setInput("");
    setImageURL("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`what is on your mind, ${user.displayName}?`}
          />
          <input
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            placeholder="image URL (optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
