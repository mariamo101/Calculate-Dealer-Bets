function FlashCard({ onClick, isOpen }) {
  return (
    <button
      onClick={onClick}
      className="
        min-w-[180px] sm:min-w-[200px] h-[48px]
        flex items-center justify-center text-center
        text-sm sm:text-base font-semibold font-['Playfair_Display'] text-[#E6C96E]
        bg-gradient-to-b from-[#145A32] to-[#0D3B24] rounded-lg
        border border-[#D4AF37]
        shadow-[0_4px_12px_rgba(9,40,21,0.5)]
        hover:shadow-[0_0_20px_rgba(230,201,110,0.7)]
        transition-all duration-300 ease-in-out
      "
      type="button"
    >
      {isOpen ? "Hide Answer" : "Show Me Answer"}
    </button>
  );
}

export default FlashCard;
