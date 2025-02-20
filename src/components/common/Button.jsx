/* eslint-disable react/prop-types */
// This is a reference for the common button styles to use across components

const buttonStyles = {
  base: "px-6 py-3 rounded-lg font-medium transition-all duration-300 transform",
  primary: "bg-white text-black hover:scale-105 hover:shadow-lg",
  secondary: "border-2 border-gray-400 text-gray-300 hover:bg-white hover:text-black"
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
