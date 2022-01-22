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
  width: 41%;
`;

export const SearchBar = styled.input`
  border-radius: 5px;
  width: 80%;
  padding: 0px 15px;
`;

export const Button = styled.button`
  border-radius: 5px;
  height: 50px;
  width: 20%;
  background-color: ${primary};
`;

export const ResultsDiv = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  max-height: 310px;
  width: 100%;
  margin: 5vh auto;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
