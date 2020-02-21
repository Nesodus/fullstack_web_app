import React, { Component } from 'react';
import Navbar from "./components/navbar/Navbar";
import styled from 'styled-components';
import GlobalStyle from './styles/Global';

class App extends Component {
  state = {
    navbarOpen: false
  };

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  render() {

    return (
        <>
          <Navbar
              navbarState={this.state.navbarOpen}
              handleNavbar={this.handleNavbar}
          />
          <TextContainer>
              <h2>
                 Enter your e-mail address to subscribe to this blog and receive notifications of new posts by e-mail.

                  Join 1,108 other followers
              </h2>
          </TextContainer>
          <GlobalStyle />
        </>
    )
  }
}

export default App

const TextContainer = styled.div`
    margin: 0 auto;
    width: 69%;
    display: flex;
    text-align: justify;
    line-height: 1.6;
    word-spacing: 3px;
`;
