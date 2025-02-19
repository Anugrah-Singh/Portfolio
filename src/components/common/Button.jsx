/* eslint-disable react/prop-types */
// This is a reference for the common button styles to use across components

const buttonStyles = {
  base: "px-6 py-3 rounded-lg font-medium transition-all duration-300 transform",
  primary: "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30",
  secondary: "border-2 border-purple-500/30 text-gray-300 hover:border-purple-400 hover:text-white bg-black/50 backdrop-blur-sm hover:scale-105 hover:shadow-lg hover:shadow-purple-900/20"
};

const Button = ({ children, variant = "primary", onClick }) => {
  const combinedButtonStyles = `${buttonStyles.base} ${buttonStyles[variant]}`;
  return (
    <button className={combinedButtonStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
