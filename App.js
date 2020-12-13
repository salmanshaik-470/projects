/*import React ,{useState,useEffect}from 'react';
import './App.css';
import Post from './Post';
import {db , auth,}  from './firebase';
import {makeStyles}from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button ,Input} from '@material-ui/core';
import ImageUpload from './ImageUpload';
import InstagramEmbed from 'react-instagram-embed';
 

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function App() {
  const classes=useStyles();
  const [modalStyle]=useState(getModalStyle);
  const [posts, setPosts] = useState([]);
  const [open, setOpen]=useState(false);
  const [openSignIn,setOpenSignIn]=useState('false');
  const [username, setUsername]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [user,setUser]=useState(null);

  useEffect(()=>{
   const  unsubscribe= auth.onAuthStateChanged((authUser) =>{
      if(authUser){
        //user has looged in 
        console.log(authUser);
        setUser(authUser);

        line no 53 to 59 put in comment if(authUser.displayName){
          //dont update username
        }else{
          //if we just created someone
          return authUser.updateProfile({
            displayName:username,
          });
        }
      }else{
        //user looged out..
        setUser(null);
      }

    })
    return()=>{
      //perform some clean actions
      unsubscribe();
    }
  }, [user,username]);

/*database authentication
//use Effect ->use a piece of code based on specific condition  
  useEffect(()=> {
    db.collection('posts').orderBy('timesstamp','desc').onSnapshot(snapshot => {
     //every ime  a new post add this code will fires upp...
      setPosts(snapshot.docs.map(doc =>({
        id:doc.id,
        post:doc.data()
      })));

    })
  },[]);  
  
  const signup=(event)=>{
    event.preventDefault();

    auth.createUserWithEmailAndPassword(email,password)
   .then((authUser)=>{
     return  authUser.user.updateProfile({
        displayName:username
      })
    })
    .catch((error)=>alert(error.message));
    setOpen(false);
  }
  const signIn=(event)=>{
    event.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .catch((error)=>alert(error.message))
    setOpenSignIn(false);
  }

  //<Button onClick={()=> setOpen(true)}>sign up</Button>
  
  return (
    <div className="App">
   


    <Modal
    open={open}
    onClose={() =>setOpen(false)}>

     <div style={modalStyle} className={classes.paper}>
     <form className="app-signup">
     <centre>
     <div className="app-header">
           <img 
              className="app-headerimage"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVUcUZBJg-hqmY3vvwbnjvEM3VONrmt3DpWw&usqp=CAU"
                   alt=""
          />
          </div>
          </centre> 
     
          <Input
           placeholder="usename"
            type="text"
             value={username}
              onChange={(e)=>setUsername(e.target.value)} />

          <Input 
          placeholder="email" 
          type="text"
           value={email}
            onChange={(e)=>setEmail(e.target.value)} />

          <Input
           placeholder="password"
            type="password"
             value={password} 
             onChange={(e)=>setPassword(e.target.value)}/>
             
             
          <Button onClick={signup}>signup</Button>
          
          </form>
          </div>
        </Modal>

        <Modal
        open={openSignIn}
        onClose={() =>setOpenSignIn(false)}>
    
         <div style={modalStyle} className={classes.paper}>
         <form className="app-signup">
         <centre>
         <div className="app-header">
               <img 
                  className="app-headerimage"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVUcUZBJg-hqmY3vvwbnjvEM3VONrmt3DpWw&usqp=CAU"
                       alt=""
              />
              </div>
              </centre> 
              <Input 
              placeholder="email" 
              type="text"
               value={email}
                onChange={(e)=>setEmail(e.target.value)} />
    
              <Input
               placeholder="password"
                type="password"
                 value={password} 
                 onChange={(e)=>setPassword(e.target.value)}/>
                 
                 
              <Button onClick={signIn}>LOG IN</Button>
              
              </form>
              </div>
            </Modal>
        
         
          {user ? (
            <Button onClick={()=>auth.signOut()}>LOGOUT</Button>
          ):(
             <div className="app-loginContainer">
          <Button onClick={()=> setOpenSignIn(true)}>LOG In</Button>
          <Button onClick={()=> setOpen(true)}>sign Up</Button>
          </div> 
          //start at -1:39:24 sec
          )}
          <div className="app-posts">
           <div className="app-postLeft">
           
          
          {
            posts.map(({id,post}) =>(
              <Post  key={id}postId={id} user={user}username={post.username} caption={post.caption} imageurl={post.imageurl} />
            ))
          }

          </div>
          <div className="app-postRight">
          <InstagramEmbed
          url="https://www.instagram.com/p/B_uf9dmAGPw/"
          clientAccessToken='123|456'
          maxWidth={320}
          hideCaption={false}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
            />
          </div>
          </div>
         

         
          {user?.displayName ?(
            <ImageUpload  username={user.displayName}/>
            
          ):(
            <h3>sorry u need to log in to upload</h3>
          
          )}
      

   
    </div>
      
  );
}

export default App;*/
import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";
import ImageUpload from "./ImageUpload";
import { db, auth } from "./firebase";
import { Button, Avatar, makeStyles, Modal, Input } from "@material-ui/core";
//import FlipMove from "react-flip-move";
import InstagramEmbed from "react-instagram-embed";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    height: "300px",
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    height: 200,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in...
        console.log(authUser);
        setUser(authUser);

        if (authUser.displayName) {
          // dont update username
        } else {
          return authUser.updateProfile({
            displayName: username,
          });
        }
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user, username]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })))
      );
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));

    setOpen(false);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));

    setRegisterOpen(false);
  };

  return (
    <div className="app">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app__login">
            <center>
              <img
                className="app__headerImage"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt=""
              />
            </center>

            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin}>Login</Button>
          </form>
        </div>
      </Modal>

      <Modal open={registerOpen} onClose={() => setRegisterOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app__login">
            <center>
              <img
                className="app__headerImage"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt=""
              />
            </center>
            <Input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleRegister}>Register</Button>
          </form>
        </div>
      </Modal>
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
        {user?.displayName ? (
          <div className="app__headerRight">
            <Button onClick={() => auth.signOut()}>Logout</Button>
            <Avatar
              className="app__headerAvatar"
              alt={user.displayName}
              src="/static/images/avatar/1.jpg"
            />
          </div>
        ) : (
          <form className="app__loginHome">
            <Button onClick={() => setOpen(true)}>Login</Button>
            <Button onClick={() => setRegisterOpen(true)}>Sign Up</Button>
          </form>
        )}
      </div>

      <div className="app__posts">
        <div className="app__postsLeft">
          
            {posts.map(({ id, post }) => (
              <Post
                user={user}
                key={id}
                postId={id}
                username={post.username}
                caption={post.caption}
                imageUrl={post.imageUrl}
              />
            ))}
         
        </div>
        <div className="app__postsRight">
          <InstagramEmbed
            url="https://www.instagram.com/p/CDQvbhzADSxdMEezMdkii3MoNv25OuvFBNpAGE0/?igshid=13trspwp13eqf"
            maxWidth={320}
            hideCaption={false}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        </div>
      </div>

      {user?.displayName ? (
        <div className="app__upload">
          <ImageUpload username={user.displayName} />
        </div>
      ) : (
        <center>
          <h3>Login to upload</h3>
        </center>
      )}
    </div>
  );
}

export default App;
