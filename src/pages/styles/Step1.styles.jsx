import styled from 'styled-components';
import { primary } from '../../colors/colors';

export const Container = styled.div`
  display: flex;
  margin: 20vh 0;
  flex-direction: column;
  align-items: center;
`;

export const SearchBarDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  margin-top:20px;
  @media screen and (max-width: 700px){
    width: 80%;
    display:block;
    text-align:center;
  }
`;

export const SearchBar = styled.input`
  border-radius: 5px;
  width: 80%;
  padding: 0px 15px;

  @media screen and (max-width: 700px){
    padding:15px 5%;
    margin-bottom:20px;
  }

  @media screen and (max-width: 480px){
    width:95%;
    outline:none;
  }
`;

export const Button = styled.button`
  border-radius: 5px;
  height: 50px;
  width: 100px;
  background-color: ${primary};


  @media screen and (max-width: 700px, min-width:480px){
  }
  @media screen and (max-width: 480px){
  }
`;

export const ResultsDiv = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  max-height: auto;
  width: 100%;
  margin: 5vh auto;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  scrollbar-width: 480px;

  @media screen and (max-width: 650px){
    width:80%
    display:block;
    text-align:center
  }



`;
