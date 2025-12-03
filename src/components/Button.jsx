const Button = ({ children, variant = "ghost" }) => {
  const getVariantClasses = () => {
    if (variant === "primary") {
      return "bg-[#00ADB5] text-white rounded-lg";
    }
    if (variant === "ghost") {
      return "bg-transparent text-[#818181] ";
    }
  };

  return (
    <button
      className={`flex items-center gap-1 px-4 py-2 text-xs font-semibold transition hover:opacity-80 ${getVariantClasses()}`}
    >
      {children}
    </button>
  );
};

export default Button;
