import React from 'react';
import Photo from '../Assets/kalpit.jpeg'
import Email from '../Assets/envelope-solid.svg'
import linkedIn from '../Assets/linkedin-brand.svg'

export default function Header(){
    return(
        <header className="header">
            <img src={Photo} className="header--img"/>
            <h2>Kalpit Jain</h2>
            <p>Frontend-Developer</p>
            <a href='https://kalpit86.github.io/firstcsswebsite/' target="_blank">
             KalpitJain.website
            </a>

        <div className="header--connect">
          <a
          className="header--connect__email"
          href="mailto:karcompany11@gmail.com"
          target="_blank"
          rel="noreferrer"
           >
          <img className="header--connect__email__icon" src={Email} alt="Email" />
          <span>Email</span>
          </a>
          <a
          className="header--connect__linkedin"
          href="https://www.linkedin.com/in/kalpit-jain-54181b240"
          target="_blank"
          rel="noreferrer"
          >
          <img
            className="header--connect__linkedin__icon"
            src={linkedIn}
            alt="Linkedin"
          />
          <span>LinkedIn</span>
          </a>
      </div>

    </header>
    )
}