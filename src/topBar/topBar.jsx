import React from "react";
import "./topBar.css";
export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        {" "}
        <i className="topIcon fab fa-facebook-square"></i>{" "}
        <i className="topIcon fab fa-twitter-square"></i>{" "}
        <i className="topIcon fab fa-instagram-square"></i>{" "}
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topCenter">
        <img
          className="topImg"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt=""
        ></img>
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
