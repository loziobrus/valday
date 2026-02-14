import { useEffect, useRef, useState } from 'react'
import { Decision } from './Decision';
import otakAudio from './assets/otak.ogg';
import applauseAudio from './assets/applause.mp3';
import yesyesAudio from './assets/yesyes.ogg';
import uraAudio from './assets/ura.ogg';
import hahaAudio from './assets/haha.ogg';
import yeahAudio from './assets/yeah.ogg';
import wohooAudio from './assets/wohoo.ogg';
import fireworksVideo from './assets/fireworks.mp4';
import './App.css'

function App() {
  const [decided, setDecided] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const otak = new Audio(otakAudio);
  const applause = new Audio(applauseAudio);
  const yesyes = new Audio(yesyesAudio);
  const ura = new Audio(uraAudio);
  const haha = new Audio(hahaAudio);
  const yeah = new Audio(yeahAudio);
  const wohoo = new Audio(wohooAudio);

  useEffect(() => {
    if (decided && videoRef.current) {
      videoRef.current.play();
    }
  }, [decided]);

  const sheSaidYesHandler = () => {
    setDecided(true);
    applause.play();
    ura.play();
    haha.play();
    wohoo.play();
    setTimeout(() => {
      otak.play();
      yesyes.play();
      haha.play();
      wohoo.play();
      yeah.play();
    }, 2000);
    setTimeout(() => {
      haha.play();
      wohoo.play();
      yeah.play();
    }, 4500);
  }
  
  return (
    <>
    {decided ? (
      <>
        <h1>Вона сказала тааак!!!🕺</h1>
        <video ref={videoRef}>
          <source src={fireworksVideo} type="video/mp4" />
        </video>
      </>
    ) : (
      <Decision sheSaidYesHandler={sheSaidYesHandler} />
    )}
    </>
  )
}

export default App
