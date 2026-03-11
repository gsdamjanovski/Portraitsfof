import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 font-sans text-sm font-medium rounded-sm transition-colors";
  const variants = {
    primary: "bg-copper text-white hover:bg-copper/85",
    secondary: "border border-muted text-muted hover:border-white hover:text-white",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
