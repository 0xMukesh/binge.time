import { ResultContainer, ResultImage } from './styles/ResultRow.styles';

import defaultMovie from '../images/default-movie.png';

export const ResultRow = ({ show, selectedShowId, setShowId, setShow }) => {
  let imageUrl = defaultMovie;
  if (show.image) {
    imageUrl = show.image.medium;
  }
  let year = '';
  if (show.premiered) {
    year = `(` + show.premiered.substring(0, 4) + `)`;
  }
  return (
    <>
      <ResultContainer
        selected={selectedShowId === show.id ? '#7d4e57ff' : 'none'}
        onClick={() => {
          setShowId(show.id);
          setShow(show);
        }}>
        <ResultImage src={imageUrl}></ResultImage>
        <p>{show.name}</p>
        <p>{year}</p>
      </ResultContainer>
    </>
  );
};
