import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo.png'

function Menu() {
  return (
    <Container>
        <Wrapper>
            <Logo>
                <Img src={logo} />
                YouClone2.0
            </Logo>

            <Item>
                Menu
            </Item>
        </Wrapper>
    </Container>
  )
}

export default Menu

const Container = styled.div`
    flex: 1;
    background-color: #202020;
    color: #fff;
    height: 100vh ;
    font-size: 14px;
`;

const Wrapper = styled.div`
    padding: 18px 26px;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 25px;
    
`;

const Img = styled.img`
    height: 25px ;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
`;
