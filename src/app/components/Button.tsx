"use client";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  bgColor?: string;
  textColor?: string;
  className?: string;
};

export default function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
      type={type}
    >
      {children}
    </button>
  );
}
