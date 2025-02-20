/* eslint-disable react/prop-types */
// This is a reference for the common card styles to use across components

const cardStyles = {
  base: "bg-black/20 backdrop-blur-xl border-2 border-gray-700 rounded-xl p-6",
  hover: "hover:shadow-lg hover:scale-105",
  animation: "transition-all duration-300",
  shadow: "shadow-md hover:shadow-lg",
  glass: "backdrop-saturate-150 backdrop-filter",
  path: "ml-4 md:ml-8 p-4 md:p-6 bg-black/30 backdrop-blur-md border-2 border-gray-800/50 rounded-lg transition-all duration-300 hover:border-white/50 hover:shadow-lg hover:shadow-gray-700/50"
};

const combinedCardStyles = `relative ${cardStyles.base} ${cardStyles.hover} ${cardStyles.animation} ${cardStyles.shadow} ${cardStyles.glass}`;

const CardContainer = ({ children, variant = 'default', className = '' }) => {
  const styles = variant === 'path' ? cardStyles.path : combinedCardStyles;
  return (
    <div className={`${styles} ${className}`}>
      {children}
    </div>
  );
};

export default CardContainer;
