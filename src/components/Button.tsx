import Link from "next/link";

interface ButtonProps {
  link: string;
  text: string; 
}

const Button: React.FC<ButtonProps> = ({ link, text }) => {
  return (
    <Link
      href={link}
      className="w-full bg-button font-bold text-base rounded px-10 py-3 shadow-lg"
    >{text}</Link>
  );
}

export default Button;
