
const ShinyButton = ({ children, className = "", ...props }) => {
  return (
    <button className={`shiny-cta ${className}`} {...props}>
      <span>{children}</span>
    </button>
  );
};

export default ShinyButton;
