function BetCards({ image, answerVisible, answer }) {
  return (
    <div
      className="
        relative w-full max-w-[640px] mx-auto
        rounded-2xl
        bg-gradient-to-b from-[#145A32] to-[#0A2E1C]
        border border-[#D4AF37]
        shadow-[inset_0_0_0_1px_rgba(214,169,55,0.35)]
        p-2
      "
    >
      {/* aspect wrapper */}
      <div className="relative w-full aspect-[16/9] max-h-[60dvh] overflow-hidden rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.6)]">
        <img
          src={image}
          alt="Bet"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
      </div>

      {/* answer overlay */}
      {answerVisible && (
        <div className="absolute inset-0 rounded-2xl grid place-items-center bg-black/55 backdrop-blur-[1px]">
          <div
            className="
              min-w-[120px] sm:min-w-[140px]
              h-[64px] sm:h-[72px]
              grid place-items-center
              px-6
              rounded-xl
              border border-[#D4AF37]
              bg-gradient-to-b from-[#145A32] to-[#0D3B24]
              shadow-[0_0_20px_rgba(230,201,110,0.35)]
            "
          >
            <div className="text-[#E6C96E] font-extrabold text-5xl sm:text-6xl tracking-wide leading-none">
              {answer}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BetCards;
