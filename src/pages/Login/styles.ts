import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding-left: 60px;
  padding-top: 25px;

  & section {
    display: flex;
    justify-content: center;
    margin-right: 220px;
  }

  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 360px;
    margin-top: 220px;
    margin-right: 220px;
    padding-bottom: 10px;
    border: 1px solid #dddddd;
    border-radius: 14px;
    background: #fff;
    box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.5);
  }

  & form > section > a {
    color: #c1c1c1;
    font-size: 17px;
    font-weight: 400;
    position: relative;
    left: 180px;
  }

  & div > form > div {
    position: absolute;
    top: 180px;
    font-size: 35px;
    font-weight: bold;
    color: #707070;
  }
`
