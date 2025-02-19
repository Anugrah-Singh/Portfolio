// This is a reference for the common card styles to use across components

const cardStyles = {
  base: "bg-black/20 backdrop-blur-xl border-2 border-gray-600 rounded-2xl p-6", // Changed border radius to rounded-2xl and added padding
  hover: "hover:shadow-2xl hover:scale-105",
  animation: "transition-all duration-500",
  shadow: "shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(123,0,255,0.15)]",
  glow: "before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/10 before:to-blue-500/10 before:opacity-0 before:transition-opacity hover:before:opacity-100 before:rounded-xl",
  glass: "backdrop-saturate-150 backdrop-filter",
  gradient: "bg-gradient-to-r from-blue-500/5 to-purple-500/5"
};

// Combined class string
const combinedCardStyles = `relative ${cardStyles.base} ${cardStyles.hover} ${cardStyles.animation} ${cardStyles.shadow} ${cardStyles.glow} ${cardStyles.glass}`;

// Example usage of combinedCardStyles
const CardContainer = ({ children }) => {
  return (
    <div className={combinedCardStyles}>
      {children}
    </div>
  );
};

export default CardContainer;
