/*import React,{useState,useEffect} from 'react'
import './Post.css';
import Avatar from "@material-ui/core/Avatar";
import { db } from './firebase';
import firebase from 'firebase';

function post({postId,user,username,caption,imageurl}) {
    const [comments,setComments]=useState([]);
    const [comment,setComment]=useState('');


    useEffect(()=>{
        let unsubscribe;
        if (postId){
            unsubscribe=db
            .collection("posts")
            .doc(postId)
            .collection("comments")
            .orderBy('timestamp','desc')
            .onSnapshot((snapshot)=>{
                setComments(snapshot.docs.map((doc)=>doc.data()));
            });
        }
    
    return() => {
        unsubscribe();
     };
   }, [postId]);

       const postComment=(event)=>{
           event.preventDefault();
           db.collection("posts").doc(postId).collection("comments").add({
               text:comment,
               username:user.displayName,
               timestamp:firebase.firestore.FieldValue.serverTimestamp()
           });
           setComment('');

       }   
    return (
        <div className="post">
        
        <div className="post_header"></div>
        
        <Avatar
         className="post_avatar"
         alt='shaik salman'
          src="/static/images/avatar/1.jpg" 
          />
           <h3>{username}</h3>

        <img  className="post_image" src={imageurl}
           alt="" />
           <h4 className="post_text"><strong>{caption}</strong>:learning react</h4>

           <div className="post-comments">
           {comments.map((comment)=>(
               <p>
               <strong>{comment.username}</strong>{comment.text}
               </p>
           ))}
           </div>

           <form className="post-commentBox">
           <input
                 className="posts-input"  type="text" placeholder="add a comment"
                 value={comment}
                 onChange={(e) => setComments(e.target.value)}>
           </input>
           <button className="post-button"
           disabled={!comment}
           type="submit"
           onClick={postComment}
           >
           post
           </button>
           </form>
        </div>
        
    )
           }

export default post*/
import React, { useState, useEffect, forwardRef } from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import { db } from "./firebase";
import firebase from "firebase";

const Post = forwardRef(
  ({ user, username, postId, imageUrl, caption }, ref) => {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");

    useEffect(() => {
      let unsubscribe;
      if (postId) {
        unsubscribe = db
          .collection("posts")
          .doc(postId)
          .collection("comments")
          .onSnapshot((snapshot) => {
            setComments(snapshot.docs.map((doc) => doc.data()));
          });
      }

      return () => {
        unsubscribe();
      };
    }, [postId]);

    const postComment = (e) => {
      e.preventDefault();

      db.collection("posts").doc(postId).collection("comments").add({
        text: comment,
        username: user.displayName,
      });
      setComment("");
    };

    return (
      <div className="post" ref={ref}>
        <div className="post__header">
          <Avatar
            className="post__avatar"
            alt={username}
            src="/static/images/avatar/1.jpg"
          />
          <h3>{username}</h3>
        </div>

        <img className="post__image" src={imageUrl} alt="post" />
        <h4 className="post__text">
          {username} <span className="post__caption">{caption}</span>
        </h4>

        <div className="post__comments">
          {comments.map((comment) => (
            <p>
              <b>{comment.username}</b> {comment.text}
            </p>
          ))}
        </div>

        {user && (
          <form className="post__commentBox">
            <input
              className="post__input"
              type="text"
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              disabled={!comment}
              className="post__button"
              type="submit"
              onClick={postComment}
            >
              Post
            </button>
          </form>
        )}
      </div>
    );
  }
);

export default Post;
