import "./App.css";
import bg from "./background.webp";
import { useEffect, useState } from "react";
import BetCards from "./components/BetCards";
import Button from "./components/Button";
import FlashCard from "./components/FlashCard";
import { getBets } from "./services/bets.service";
import { shuffleArray } from "./services/shuffle";

function App() {
  const [deck, setDeck] = useState([]);
  const [cursor, setCursor] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await getBets();
      const list = data?.bets ?? [];
      setDeck(shuffleArray(list));
      setCursor(0);
      setShowAnswer(false);
    })();
  }, []);

  const current = deck[cursor];

  const handleToggleAnswer = () => {
    if (!current) return;
    setShowAnswer((p) => !p);
  };

  const handleNextBet = () => {
    if (!deck.length) return;

    setShowAnswer(false);

    setCursor((prev) => {
      const next = prev + 1;

      if (next >= deck.length) {
        setDeck(shuffleArray(deck));
        return 0;
      }

      return next;
    });
  };

  return (
    <div
      className="relative min-h-[100dvh] w-screen overflow-x-hidden overflow-y-auto flex flex-col items-center justify-center gap-4 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      {/* content */}
      <div className="relative z-10 w-full min-h-[100dvh] flex items-center justify-center py-6">
        <div className="w-full max-w-[900px] flex flex-col items-center gap-4 px-3 sm:px-4">
          {/* Title */}
          <h1
            className="
    w-fit max-w-[calc(100vw-32px)]
    text-center
    px-8 sm:px-10 py-3
    font-semibold font-['Playfair_Display']
    tracking-[0.02em] text-[#E6C96E]
    bg-gradient-to-b from-[#166534] via-[#145A32] to-[#0D3B24]
    rounded-xl border border-[#D4AF37]
    shadow-[0_4px_12px_rgba(9,40,21,0.5)]
    shadow-[0_0_18px_rgba(214,169,55,0.45)]
    whitespace-nowrap
    [@media(orientation:landscape)_and_(max-height:434px)]:hidden
  "
            style={{ fontSize: "clamp(13px, 4vw, 26px)" }}
          >
            ♠︎ Calculate Dealer Bets ♦︎
          </h1>

          {/* Bet Card */}
          {current ? (
            <BetCards
              image={current.image}
              answerVisible={showAnswer}
              answer={current.answer}
            />
          ) : (
            <div className="text-[#E6C96E]">Loading...</div>
          )}

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-1 w-full">
            <FlashCard onClick={handleToggleAnswer} isOpen={showAnswer} />
            <Button onClick={handleNextBet} />
          </div>
          {/* Footer */}
          <p
            className="
        mt-3
        text-xs sm:text-sm
        text-[#E6C96E]/70
        tracking-wide
        font-['Playfair_Display']
        text-center
      "
          >
            Created by{" "}
            <a
              href="https://github.com/mariamo101"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E6C96E] hover:underline"
            >
              Mariami Makhniashvili
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
