import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <SubTitle>to continue to mamouth tube</SubTitle>
            <Input placeholder="username" />
            <Input type="password" placeholder="password"/>
            <Button>Sign in</Button>

            <Title>Or</Title>

            <Input placeholder="username" />
            <Input placeholder="email" />
            <Input type="password" placeholder="password"/>
            <Button>Sign up</Button>

        </Wrapper>

        <More>
            English (USA)
            <Links>
                <Link>Help</Link>
                <Link>Privacy</Link>
                <Link>Terms</Link>
            </Links>
        </More>
    </Container>
  )
}

export default Login;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 56px);
    color: ${({theme}) =>theme.text};
    flex-direction: column;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${({theme}) =>theme.bgLighter};
    padding: 20px 50px;
    border: 1px solid ${({theme}) => theme.soft};
    gap: 10px;
    border-radius: 10px;
`;

const Title = styled.h1`
    font-size: 24px;
`;

const SubTitle = styled.h2`
    font-size: 20px;
    font-weight: 300;
`;

const Input = styled.input`
    border: none;
    outline: none;
    border-radius: 3px;
    padding: 10px;
    background-color: transparent;
    border-bottom: 1px solid ${({theme}) =>theme.soft};
    color: ${({theme}) => theme.text};
    width: 100%;
`;

const Button = styled.button`
    border-radius: 3px;
    border:  none;
    padding: 10px 20px;
    font-weight: 500;
    cursor: pointer;
    background-color: ${({theme}) => theme.soft};
    color: ${({theme}) => theme.textSoft};
    margin-top: 12px;
`;

const More = styled.div`
    display: flex;
    margin-top: 10px;
    font-size: 12px;
    color: ${({theme}) => theme.textSoft};
`;

const Links = styled.div`
    margin-left: 50px;
`;

const Link = styled.span`
    margin-left: 30px;
`;