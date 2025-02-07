"use client"

import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import Image from "next/image";

const YesNoComponent = () => {
  const images = [
    "https://media1.tenor.com/m/_fDDoYmlNC4AAAAC/tkthao219-bubududu.gif",
    "https://media.tenor.com/vHrITzhzd0YAAAAi/bear-panda.gif",
    "https://media.tenor.com/TIu1S3U4oWEAAAAi/no.gif",
    "https://media.tenor.com/RJgIui1E_2QAAAAi/teddy-bear.gif",
    "https://media1.tenor.com/m/JSkGo2B3op8AAAAC/dirt-alone.gif",
    "https://media1.tenor.com/m/8RftKRe9hOEAAAAC/milk-mocha.gif",
    "https://media1.tenor.com/m/ugRcShtbtOgAAAAC/nopparat.gif",
    "https://media1.tenor.com/m/alttCLlThHAAAAAC/sad-bunny.gif",
    "https://media1.tenor.com/m/vAHlOsfhWEcAAAAd/grizzly-we-bare-bears.gif",
    "https://media1.tenor.com/m/22hwAGkxTDEAAAAC/we-bare-bears-sad.gif",
  ];

  const phrases = [
    "Naa too?",
    "Sure too?",
    "Tui aram korte parli?",
    "1.3 yrs sob ses?",
    "Haa bol biriyani khabo",
    "Aram korchis to DEBO",
    "Haa bol Madhyamik e 90% ;(",
    "Tor kach e ata asa chilo na",
    "Chiii NONI chiii",
    "Tui dhon chinli, mon noi",
  ];

  const [noCount, setNoCount] = useState(0);
  const [confettiActive, setConfettiActive] = useState(false);
  const [image, setImage] = useState(
    "https://media.tenor.com/Du9VVJYDPDkAAAAi/tkthao219-bubududu.gif"
  );
  const [noPosition, setNoPosition] = useState({
    top: Math.floor(Math.random() * 80) + "vh",
    left: Math.floor(Math.random() * 80) + "vw",
  });
  const [phrase, setPhrase] = useState(phrases[0]);

  useEffect(() => {
    if (confettiActive) {
      const timer = setTimeout(() => setConfettiActive(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [confettiActive]);

  const handleNoClick = () => {
    setConfettiActive(false);
    setNoCount(noCount + 1);
    setPhrase(getNoButtonText());
    setNoPosition({
      top: Math.floor(Math.random() * 80) + "vh",
      left: Math.floor(Math.random() * 80) + "vw",
    });
    setImage(images[noCount]);
  };

  const handleYesClick = () => {
    setImage(
      "https://media1.tenor.com/m/Ln8IqVQSpZMAAAAC/lele-iyi.gif"
    );
    setPhrase("Yayyyy");
    setConfettiActive(true);
  };

  const getNoButtonText = () => {
    if (phrases.length - 1 === noCount) {
      setNoCount(0);
    }
    return phrases[noCount === phrases.length - 1 ? 0 : noCount];
  };

  const yesButtonSize = noCount * 20 + 16;

  return (
    <>
      {confettiActive && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}

      <div className="flex flex-col items-center justify-center h-screen bg-rose-200 gap-5">
        <div className="flex flex-col gap-2 justify-center items-center">
          <Image
            width={250}
            height={250}
            className=""
            src={image}
            alt=""
          />
          <h1 className="text-2xl">Will you be my Valentine? </h1>
        </div>
        <div>
          <button
            onClick={handleYesClick}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded -ml-10 m-5"
            style={{ fontSize: yesButtonSize }}
          >
            Yes
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded absolute m-5"
            style={{
              top: noCount ? noPosition.top : "auto",
              left: noCount ? noPosition.left : "auto",
            }}
            onClick={handleNoClick}
          >
            {phrase}
          </button>
        </div>
      </div>
    </>
  );
};

export default YesNoComponent;
