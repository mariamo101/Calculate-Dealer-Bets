import "./App.css";
import bg from "./background.png";
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
      const data = await getBets(); // { bets: [...] }
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

    setShowAnswer(false); // ყოველთვის დაიხუროს

    setCursor((prev) => {
      const next = prev + 1;

      // deck დასრულდა -> თავიდან shuffle და 0-ზე დაბრუნება
      if (next >= deck.length) {
        setDeck(shuffleArray(deck));
        return 0;
      }

      return next;
    });
  };

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center gap-6 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-[720px] flex flex-col items-center gap-6 px-4">
          <h1
            className="
              min-w-[320px] sm:min-w-[380px] text-center
              px-8 py-3 text-xl sm:text-2xl font-semibold font-['Playfair_Display'] tracking-wide text-[#E6C96E]
              bg-gradient-to-b from-[#145A32] to-[#0D3B24]
              rounded-lg border border-[#D4AF37]
              shadow-[0_4px_12px_rgba(9,40,21,0.5)]
              shadow-[0_0_15px_rgba(214,169,55,0.6)]
            "
          >
            ♠︎ Calculate Dealer Bets ♦︎
          </h1>

          {current ? (
            <BetCards
              image={current.image}
              answerVisible={showAnswer}
              answer={current.answer}
            />
          ) : (
            <div className="text-[#E6C96E]">Loading...</div>
          )}

          <div className="flex justify-center gap-6 mt-1">
            <FlashCard onClick={handleToggleAnswer} isOpen={showAnswer} />
            <Button onClick={handleNextBet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
