import {
  Container,
  HorizontalDiv,
  SentenceDiv,
  Button,
  StyledH3,
  HighlightResult,
  ResultsContainer,
} from './styles/Step3.styles';

export const Step3 = (props) => {
  return (
    <>
      <Container>
        <HorizontalDiv>
          <h1 className='text-white'>Results</h1>
        </HorizontalDiv>
        <SentenceDiv>
          <StyledH3 className='text-white'>
            Based on your current position at Season {props.startSeason} Episode{' '}
            {props.startEp}{' '}
          </StyledH3>
          <StyledH3 className='text-white'>
            and your goal of watching through Season {props.endSeason} Episode{' '}
            {props.endEp}
          </StyledH3>
        </SentenceDiv>
        {props.isFinishByDate && (
          <ResultsContainer>
            <SentenceDiv className='text-white'>
              <StyledH3 className='text-white'>
                You should watch approximately{' '}
                <HighlightResult className='text-white'>
                  {props.rate} episodes per day{' '}
                </HighlightResult>{' '}
                in order reach your goal in watching these episodes of{' '}
                {props.show.name} by {props.endDate.toString()}.
              </StyledH3>
            </SentenceDiv>
          </ResultsContainer>
        )}
        {!props.isFinishByDate && (
          <ResultsContainer>
            <SentenceDiv>
              <StyledH3 className='text-white'>
                You will reach your goal on{' '}
                <HighlightResult className='text-white'>
                  {props.endDate.toString()}
                </HighlightResult>{' '}
                if you continue your current pace of watching {props.rate}{' '}
                episodes per day of {props.show.name}
              </StyledH3>
            </SentenceDiv>
          </ResultsContainer>
        )}
        <div>
          <a href='https://bingewatchcalculator.netlify.app/'>
            <Button>Search again!</Button>
          </a>
        </div>
      </Container>
    </>
  );
};
