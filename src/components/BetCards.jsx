function BetCards({ image, answerVisible, answer }) {
  return (
    <div
      className="relative max-w-xl mx-auto rounded-2xl bg-gradient-to-b from-[#145A32] to-[#0A2E1C]
      border border-[#D4AF37] shadow-[inset_0_0_0_1px_rgba(214,169,55,0.35)] p-2"
    >
      <img
        src={image}
        alt="Bet"
        className="w-full h-auto rounded-lg object-cover shadow-[0_8px_20px_rgba(0,0,0,0.6)]"
        draggable={false}
      />

      {answerVisible && (
        <div className="absolute inset-0 rounded-2xl grid place-items-center bg-black/55 backdrop-blur-[1px]">
          <div className="px-6 py-3 rounded-xl border border-[#D4AF37] bg-gradient-to-b from-[#145A32] to-[#0D3B24] shadow-[0_0_20px_rgba(230,201,110,0.35)]">
            <div className="text-[#E6C96E]  font-extrabold text-5xl sm:text-6xl tracking-wide">
              {answer}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BetCards;
