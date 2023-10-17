import React from 'react'
import "./Footer.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer_cont'>
            <div className='company'>
                <h1>Company</h1>
                <p>Lorem</p>
                <p>ipsom</p>
                <p>rpso</p>
                <p>psrol</p>
            </div>
            <div className='about'>
                <h1>About</h1>
                <p>Lorem</p>
                <p>ipsom</p>
                <p>rpso</p>
                <p>psrol</p>
            </div>
            <div className='job'>
                <h1>Job</h1>
                <p>Lorem</p>
                <p>ipsom</p>
                <p>rpso</p>
                <p>psrol</p>
            </div>
            <div className='partners'>
                <h1>partners</h1>
                <p>Lorem</p>
                <p>ipsom</p>
                <p>rpso</p>
                <p>psrol</p>
            </div>
        </div>
        <div className='copyright'>
            <h2>All rights reserved. clone of hacker news</h2>
            <h3>Made by ©Sahil Kumar 2023.</h3>
        </div>
        <div className='social'>
            <a href='https://github.com/sahilsagar01'><GitHubIcon /> Github</a> ||
            <a href='https://www.linkedin.com/in/sahil-sagar-7aa429262/'><LinkedInIcon /> Linkedin</a>
        </div>
    </div>
  )
}

export default Footer;