import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Decision } from './Decision';

function App() {
  const [decided, setDecided] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [otak,] = useState(new Audio('./src/assets/otak.ogg'));
  const [applause,] = useState(new Audio('./src/assets/applause.mp3'));
  const [yesyes,] = useState(new Audio('./src/assets/yesyes.ogg'));
  const [ura,] = useState(new Audio('./src/assets/ura.ogg'));
  const [haha,] = useState(new Audio('./src/assets/haha.ogg'));
  const [yeah,] = useState(new Audio('./src/assets/yeah.ogg'));
  const [wohoo,] = useState(new Audio('./src/assets/wohoo.ogg'));

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
          <source src="./src/assets/fireworks.mp4" type="video/mp4" />
        </video>
      </>
    ) : (
      <Decision sheSaidYesHandler={sheSaidYesHandler} />
    )}
    </>
  )
}

export default App
