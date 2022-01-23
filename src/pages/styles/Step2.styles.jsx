import styled from 'styled-components';
import { border, tertiary, primary } from '../../colors/colors';

export const Container = styled.div`
  display: flex;
  margin: 10vh 5vw;
  flex-direction: column;
  align-items: center;
`;

export const HorizontalDiv = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin: 30px 0px;
  text-align:center;

  @media screen and (max-width: 600px){
    display:inline-block;
  }

`;

export const SentenceDiv = styled.div`
  display: flex;
  align-items: baseline;
`;

export const TVImage = styled.img`
  height: 70%;
  width: auto;
  position: relative;
  bottom: 10%;
`;

export const InputBox = styled.input`
  border-radius: 5px;
  width: 50%;
`;

export const InputNum = styled.input`
  border-radius: 5px;
  width: 3.5rem;
  height: 1em;
  padding: 5px;
  font-size: 30px;
  background-color: transparent;
  color: white;
  border: 2px solid ${border};
`;

export const Button = styled.button`
  border-radius: 5px;
  height: 50px;
  padding: 0px 100px;
  background-color: ${primary};
`;

export const StyledH2 = styled.h2`
  justify-self: start;
  //align-self: start;
  margin-top:20px;
`;

export const SquareSelect = styled.div`
  border-radius: 5px;
  padding: 10px;
  width: 45%;
  cursor: pointer;
  border: 2px solid ${border};
  &:disabled {
    opacity: 0.5;
  }
  &:hover {
    border: 2px solid ${tertiary};
  }
  background-color: ${(props) =>
    props.highlighted ? '#7d4e57ff' : 'transparent'};
  margin-top:20px;

  @media screen and (max-width: 600px){
    width:100%
  }
`;
