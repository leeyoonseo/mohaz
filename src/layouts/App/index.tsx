import React from 'react'
import { AppWrap, Header, Container, Footer } from './styles';

const App = () => {
  return (
    <AppWrap>
      <Header>
        <h1 className="header__title">
          {/* TODO: href */}
          <a href="#">Mohaz</a>
        </h1>
      </Header>
      <Container>
        <div className="section">
          <div className="image__wrap org">
           <img className="image" src={`${process.env.PUBLIC_URL}/cat.jpg`} alt="cat"/>
           <img className="image-line" src={`${process.env.PUBLIC_URL}/test-line.png`} alt="cat-line"/>
          </div>
        </div>
        <div className="test__box"></div>
        <div className="test__box"></div>
        <div className="test__box"></div>
      </Container>
      <Footer>&copy; Mohaz</Footer>
    </AppWrap>
  )
}

export default App