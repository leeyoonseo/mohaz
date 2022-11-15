import styled from 'styled-components';

export const AppWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Header = styled.header`
  background: red;
  height: 48px;
  padding: 0 2%;
  display: flex;
  align-items: center;

  .header__title {
    font-size: 24px;

    a { 
      text-decoration: none;
      color: #333;
    }
  }
`;

export const Container = styled.div`
  background: blue;
  padding-top: 48px;
  height: 100%;
  box-sizing: border-box;

  .section {
    /* background: green; */
    /* background: #fff; */
    height: 100%;

    .image__wrap {
      position: relative;

      
      .image {

      }

      .image-line {
        clip-path: inset(70% 0 0 0);

      }
    }
  }

  .test__box {
    height: 500px;
    background: yellow;
    margin-bottom: 10px;
  }
`;

export const Footer = styled.footer`
  background: green;
  display: none;
`;