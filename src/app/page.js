"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [name, setName] = useState("Nihal");

  const apple = () => {
    setName("Aslam");
  };
  return (
    <main className={styles.main}>
      <h1>Hello World - {name}</h1>
      <button onClick={() => apple()}>Click ME</button>

      {/* 
        This is JSX extension
      1) creating new instance of User component and rendering it as child
      element of Home Component
      2. User is functional component and when you use{" "}
      <User /> it will be executed only once,when Home component rendered.
       3. User component will have its own lifecycle and any state changes within
      User will not affect Home Component 
      */}
      <User username="Nihal" />

      {/* 
         1. This is JavaScript extension which calls the "User" function and return its result
         2. When u use {User()} you are invoking User function and rendering its return value as String or jsx element
         3. User is still function but when you use {User()} it will be executed every time the "Home" component
         is rendered.
      */}
      {/* {User({ username: "Shahin" })} */}
    </main>
  );
}

const User = (props) => {
  return (
    <div>
      <h2>Inner Component {props.username} </h2>
    </div>
  );
};
