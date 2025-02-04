const GradientBorderButton = ({  className, href, onClick, children, px, white}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center px-6 py-2 text-white font-semibold 
      transition-all duration-300 ease-in-out ${className}`}
    >
      <span className="relative z-10 hidden lg:flex">{children}</span>
      <svg
        className="absolute hidden lg:flex inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 50"
        preserveAspectRatio="none"
      >
        <rect
          x="1"
          y="1"
          width="198"
          height="48"
          rx="8"
          fill="transparent"
          stroke="url(#gradient)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#9F53FF" />
            <stop offset="50%" stopColor="#AC6AFF" />
            <stop offset="100%" stopColor="#FFC876" />
          </linearGradient>
        </defs>
      </svg>
    </a>
  );
};

export default GradientBorderButton;
