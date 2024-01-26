import Link from "next/link";

interface ButtonProps {
  link: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ link, text }) => {
  return (
    <div className="w-full flex justify-center bg-button hover:bg-button-hover transition duration-300 cursor-pointer font-bold text-base text-white rounded px-8 py-3 shadow-lg">
      <Link href={link}>{text}</Link>
    </div>
  );
};

export default Button;
