import React from 'react'
import {  FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
       <h2> made by <a href="https://twitter.com/nuthan_2x">nuthan_2x  </a>  <a href="https://twitter.com/nuthan_2x" className='icon'><FaTwitterSquare />  </a><a href="https://github.com/nuthan2x/Sign-Verify-digital-signatures" className='icon'><FaGithubSquare /></a>&nbsp; &nbsp; inspired from <a href="https://www.youtube.com/c/ArturChmaro">ArturChmaro</a></h2>
    </footer>
  )
}

export default Footer