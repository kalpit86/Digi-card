import React from 'react'
import facebook from '../Assets/facebook.svg'
import github from '../Assets/github.svg'
import instagram from '../Assets/instagram.svg'
import twitter from '../Assets/twitter.svg'

export default function Footer(){
    return(
        <footer className="footer">
              <a href="https://www.facebook.com/kalpit.jain.3150/" target="_blank">
                <img src={facebook} className="Footer-Icon"/>
              </a> 
              <a href="https://github.com/kalpit86" target="_blank">
                <img src={github} className="Footer-Icon"/>
              </a>
              <a href="https://instagram.com/kalpit86" target="_blank">
                <img src={instagram} className="Footer-Icon"/>
              </a>
              <a href="https://twitter.com/kalpitJ86" target="_blank">
                <img src={twitter} className="Footer-Icon"/>
              </a>
        </footer>
    )
}