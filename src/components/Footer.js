import React from 'react'
import SocialIcons from './SocialIcons'
import { Container } from './styles/ContainerStyled'
import { Flex } from './styles/FlexStyled'
import { FooterStyled } from './styles/FooterStyled'

const Footer = () => {
  return (
    <FooterStyled>
<Container>
    <img  src='./images/logo.svg' alt="" />
    <Flex>
    <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons />
    </Flex>
    <p>&copy; 2022 Hudlle. All rigths reserved</p>
</Container>
    </FooterStyled>
  )
}

export default Footer

