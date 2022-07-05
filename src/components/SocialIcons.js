import React from 'react'
import {FaTwitter, FaFacebook, FaLinkedin} from 'react-icons/fa'
import { SocialIconsStyled } from './styles/SocialIconsStyled'

const SocialIcons = () => {
  return (
    <SocialIconsStyled>
        <li>
            <a href="https://twitter.com">
                <FaTwitter />
            </a>
            </li>
        <li>
            <a href="https://linkdedin.com">
                <FaLinkedin />
            </a>
            </li>
        <li>
            <a href="https://facebook.com">
                <FaFacebook />
            </a>
        </li>
    </SocialIconsStyled>
        
  )
}

export default SocialIcons