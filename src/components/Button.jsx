function Button({ children, href = "#", variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-300";

  const styles =
    variant === "primary"
      ? "bg-yellow-400 text-black hover:bg-yellow-300 hover:scale-105 shadow-lg"
      : "border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

export default Button;