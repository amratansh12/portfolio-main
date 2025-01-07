import { LucideIcon } from "lucide-react";

interface ButtonProps {
  text: string;
  icon?: LucideIcon;
  onClick?: () => void;
}

export const Button = ({ text, icon: Icon, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="text-white bg-gradient-to-r from-[#4DA8DA] to-blue-500 hover:bg-gradient-to-bl focus:outline-none font-semibold text-sm px-5 py-2.5 text-center rounded-full flex items-center drop-shadow-sm"
    >
      {Icon && <Icon className="size-4 mr-2" />}
      {text}
    </button>
  );
};
