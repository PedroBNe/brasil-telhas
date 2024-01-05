import Link from "next/link";

interface ButtonProps {
  link: string;
  text: string; 
}

const Button: React.FC<ButtonProps> = ({ link, text }) => {
  return (
    <Link
      href={link}
      className="w-full bg-button text-base rounded px-8 py-2"
    >{text}</Link>
  );
}

export default Button;
