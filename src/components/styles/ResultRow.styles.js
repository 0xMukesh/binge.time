import styled from 'styled-components';
import { primary } from '../../colors/colors';

export const ResultContainer = styled.div`
  display: flex;
  border: 1px solid white;
  height: 50px;
  padding: 5px;
  display: flex;
  width: 40%;
  justify-content: space-between;
  border-radius: 5px;
  cursor: pointer;
  scrollbar-width: 480px;
  &:hover {
    background-color: ${primary};
    transition: 0.3s background-color;
  }
  background-color: ${(props) => (props.selected ? props.selected : 'none')};
  transition: 0.3s background-color;

  @media screen and (max-width: 650px){
    width:70%
  }
  @media screen and (max-width: 480px){
    width:90%
  }
`;

export const ResultImage = styled.img`
  height: 100%;
  width: auto;
`;
