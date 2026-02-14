import { useState } from 'react'
import yesAudio from './assets/yes.ogg';
import noAudio from './assets/no2.ogg';
import './App.css'

type DecisionProps = {
  sheSaidYesHandler: () => void;
};

export const Decision = ({ sheSaidYesHandler }: DecisionProps) => {
  const no = new Audio(noAudio);
  const yes = new Audio(yesAudio);

  const [yesFontSize, setYesFontSize] = useState(2);
  const [noFontSize, setNoFontSize] = useState(2);
  const [noBtnStyle, setNoBtnStyle] = useState<React.CSSProperties>({ position: 'relative', transition: 'left 0.3s, top 0.3s', zIndex: 1000 });

  const badDecisionHandler = () => {
    const newNoFontSize = noFontSize - 0.1;
    const { x, y } = genereteRandomPosition();
    setNoBtnStyle(prev => ({ ...prev, position: 'fixed', left: `${x}px`, top: `${y}px`, fontSize: `${newNoFontSize}em`   }));
    setNoFontSize(newNoFontSize);
    setYesFontSize(prev => prev + 0.2);

    no.play();
  };
  
  const goodDecisionHandler = () => {
    yes.play();
  }
  
  const genereteRandomPosition = () => {
    // Random position within viewport
    const btnWidth = 180; // approximate button width
    const btnHeight = 80; // approximate button height
    const maxX = window.innerWidth - btnWidth;
    const maxY = window.innerHeight - btnHeight;
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    return { x, y };
  }

  return (
    <>
      <h1>Будеш моєю валентинкою?</h1>
      <div className="decide">
        <button id="yesButton" style={{ fontSize: `${yesFontSize}em` }} onMouseEnter={goodDecisionHandler} onClick={sheSaidYesHandler}>
          Так 😍
        </button>
      <button
        id="noButton"
        onMouseEnter={badDecisionHandler}
        style={noBtnStyle}
        >
        Ні 😞
      </button>
        </div>
    </>
  )
}