import React from 'react'
import { Container } from './styles/ContainerStyled';
import { HeaderStyled, Nav, Logo, Image } from './styles/HeaderStyled';
import { Button } from './styles/ButtonsStyled';
import { Flex } from './styles/FlexStyled';

const Header = () => (
  <HeaderStyled >
      <Container>
        <Nav>
          <Logo src='./images/logo.svg' alt=''/>
          <Button>
            Try it Free
          </Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
            Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button bg='#ff0099' color='#fff'>
              Started For Free
            </Button>
          </div>
          <Image src='./images/illustration-mockups.svg' alt='' />
        </Flex>
      </Container>
  </HeaderStyled>
    
);

export default Header