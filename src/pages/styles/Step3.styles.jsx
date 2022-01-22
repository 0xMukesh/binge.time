import styled from 'styled-components';
import { primary } from '../../colors/colors';

export const Container = styled.div`
  display: flex;
  margin: 20vh 5vw;
  flex-direction: column;
  align-items: center;
`;

export const HorizontalDiv = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const SentenceDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

export const Button = styled.button`
  border-radius: 5px;
  height: 50px;
  padding: 0px 100px;
  background-color: ${primary};
`;

export const StyledH3 = styled.h3`
  margin: 10px;
`;

export const HighlightResult = styled.span`
  color: ${primary};
  font-size: 30px;
`;

export const ResultsContainer = styled.div`
  width: 50%;
  margin: 30px;
  padding: 30px;
`;
