import React, { Component } from 'react';
import "./About.css";
import profile_pic_Richard_Wang from "../assets/profile_pic_Richard_Wang.jpeg";

export default class About extends Component {
  render() {
    return (
      // <div>
      //   <div>
      //   <h1> Richard Wang </h1>
      //   <br />
      //   <br />
      //   <p> 
      //      </p>
      //   <div className="text-left">
      //     <div className="name_title"></div>
      //       <div className="brief_description">
      //     </div>
      //   </div>
      //   </div>
      // </div>
        <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            src={profile_pic_Richard_Wang}
            alt="Profile Pic"
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Richard Wang</div>
          <div className="brief_description">
          Hello! I'm Richard, a rising sophomore studying Computer Science and Statistics at UC Berkeley. 
          Some of my hobbies include basketball, badminton, fantasy sports, and chess. Feel free to reach out to me on <a 
          href="https://www.linkedin.com/in/richardrwang23/">LinkedIn</a> or at <a href="mailto:richardrwang@berkeley.edu">richardrwang@berkeley.edu</a>.
          </div>
        </div>
      </div>
    </div>
    )
  }
}