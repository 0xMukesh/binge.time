import {
  Container,
  HorizontalDiv,
  SentenceDiv,
  InputNum,
  StyledH2,
  SquareSelect,
  InputBox,
  Button,
} from './styles/Step2.styles';

import { episodesPerDay } from '../utils/episodesPerDay';
import { findEndDate } from '../utils/findEndDate';

export const Step2 = (props) => {
  return (
    <>
      <Container>
        <HorizontalDiv>
          <h1 className='text-white'>{props.show.name}</h1>
        </HorizontalDiv>
        <SentenceDiv className='text-white'>
          <h3 className='fillUps'>I am about to start Season&nbsp;</h3>
          <InputNum
            value={props.startSeason}
            onChange={(event) =>
              props.setStartSeason(event.target.value)
            }></InputNum>
          <h3>&nbsp;Episode&nbsp;</h3>
          <InputNum
            value={props.startEp}
            onChange={(event) =>
              props.setStartEp(event.target.value)
            }></InputNum>
        </SentenceDiv>
        <SentenceDiv>
          <h3 className='text-white fillUps'>
            I want to watch through Season&nbsp;
          </h3>
          <InputNum
            value={props.endSeason}
            onChange={(event) =>
              props.setEndSeason(event.target.value)
            }></InputNum>
          <h3 className='text-white'>&nbsp;Episode&nbsp;</h3>
          <InputNum
            value={props.endEp}
            onChange={(event) => props.setEndEp(event.target.value)}></InputNum>
        </SentenceDiv>
        <StyledH2 className='text-white'>Select an option:</StyledH2>
        <HorizontalDiv>
          <SquareSelect
            highlighted={props.isFinishByDate}
            onClick={() => props.setIsFinishByDate(true)}>
            <h3 className='text-white'>I want to finish on this date:</h3>
            <InputBox
              type='date'
              id='Watch By'
              onChange={(event) =>
                props.setEndDate(event.target.value)
              }></InputBox>
          </SquareSelect>
          <SquareSelect
            highlighted={!props.isFinishByDate}
            onClick={() => props.setIsFinishByDate(false)}>
            <h3 className='text-white'>
              I want to watch this many episodes per day:
            </h3>
            <InputBox
              type='Number'
              min='1'
              onChange={(event) =>
                props.setRate(event.target.value)
              }></InputBox>
          </SquareSelect>
        </HorizontalDiv>
        <HorizontalDiv>
          <Button
            disabled={!props.canCalculate}
            onClick={() => {
              if (props.isFinishByDate) {
                props.setRate(
                  episodesPerDay(
                    props.startSeason,
                    props.startEp,
                    props.endSeason,
                    props.endEp,
                    props.endDate,
                    props.showEpisodes
                  )
                );
              } else if (!props.isFinishByDate) {
                props.setEndDate(
                  findEndDate(
                    props.startSeason,
                    props.startEp,
                    props.endSeason,
                    props.endEp,
                    props.rate,
                    props.showEpisodes
                  )
                );
              }
              props.setStep(3);
            }}>
            Calculate!
          </Button>
        </HorizontalDiv>
      </Container>
    </>
  );
};
