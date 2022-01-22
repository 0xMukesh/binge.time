import './App.css';
import { useEffect, useState } from 'react';
import { Step1 } from './pages/Step1';
import { Step2 } from './pages/Step2';
import { Step3 } from './pages/Step3';

function App() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showId, setShowId] = useState("");
  const [showEpisodes, setShowEpisodes] = useState([]);
  const [show, setShow] = useState([]);
  const [step, setStep] = useState(1);
  const [startEp, setStartEp] = useState('');
  const [startSeason, setStartSeason] = useState('');
  const [endEp, setEndEp] = useState('');
  const [endSeason, setEndSeason] = useState('');
  const [endDate, setEndDate] = useState();
  const [isFinishByDate, setIsFinishByDate] = useState();
  const [rate, setRate] = useState();
  const [canCalculate, setCanCalculate] = useState(false);
  const [display, setDisplay] = useState('');

  useEffect(() => {
    setCanCalculate((startSeason && startEp && endEp && endSeason) && ((rate && !isFinishByDate) || (endDate && isFinishByDate)))
  });

  return (
    <div className="App">
      <header className="App-header">
        {
          step === 1 &&
          <Step1
            results={searchResults}
            query={query}
            setQuery={setQuery}
            setSearchResults={setSearchResults}
            setShowId={setShowId}
            showId={showId}
            setStep={setStep}
            setShowEpisodes={setShowEpisodes}
            setShow={setShow} />
        }
        {
          step === 2 &&
          <Step2
            show={show}
            startEp={startEp}
            setStartEp={setStartEp}
            startSeason={startSeason}
            setStartSeason={setStartSeason}
            endEp={endEp}
            setEndEp={setEndEp}
            setStep={setStep}
            endSeason={endSeason}
            setEndSeason={setEndSeason}
            showEpisodes={showEpisodes}
            endDate={endDate}
            setEndDate={setEndDate}
            isFinishByDate={isFinishByDate}
            setIsFinishByDate={setIsFinishByDate}
            rate={rate}
            setRate={setRate}
            canCalculate={canCalculate}
            setDisplay={setDisplay}
          />
        }
        {
          step === 3 &&
          <Step3
            startEp={startEp}
            isFinishByDate={isFinishByDate}
            startSeason={startSeason}
            endEp={endEp}
            endSeason={endSeason}
            rate={rate}
            endDate={endDate}
            show={show}
          />
        }

      </header>
    </div>
  );
}

export default App;