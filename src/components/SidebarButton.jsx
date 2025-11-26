const SidebarButton = ({ children, variant }) => {
  const getClassNames = () => {
    if (variant === "unselected") {
      return "text-[#35383E]";
    }
    if (variant === "selected") {
      return "rounded-xl bg-[#E6F7F8] text-[#00ADB5]";
    }
  };
  return (
    <a href="#" className={`px-6 py-3 ${getClassNames()}`}>
      {children}
    </a>
  );
};

export default SidebarButton;
