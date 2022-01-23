import {
  Container,
  SearchBarDiv,
  SearchBar,
  Button,
  ResultsDiv,
} from './styles/Step1.styles';

import { ResultRow } from '../components/ResultRow';
import { searchShow, showInfo, to_episodes_map } from '../tvService';
export const Step1 = (props) => {
  return (
    <>
      <Container>
        <h1 className='text-white text-3xl text-center sm:text-5xl' style={{marginBottom:'10px'}}>
          Search and select your show to begin:
        </h1>
        <SearchBarDiv>
          <SearchBar
            className='SearchBar'
            size='40'
            onChange={(event) => props.setQuery(event.target.value)}
            value={props.query}
            placeholder='Type the name of a show'></SearchBar>
          <Button
            onClick={() =>
              searchShow(props.query).then((data) =>
                props.setSearchResults(data)
              )
            }>
            Search
          </Button>
        </SearchBarDiv>
        <ResultsDiv className='text-white'>
          {props.results.length === 0 && ''}
          {props.results.map((result) => (
            <ResultRow
              key={result.show.id}
              show={result.show}
              selectedShowId={props.showId}
              setShowId={props.setShowId}
              setShow={props.setShow}
            />
          ))}
        </ResultsDiv>
        <Button
          onClick={() => {
            props.setStep(2);
            showInfo(props.showId).then((data) =>
              props.setShowEpisodes(to_episodes_map(data))
            );
          }}
          hidden={!props.showId && props.results !== []}
          disabled={!props.showId}>
          Next
        </Button>
      </Container>
    </>
  );
};
