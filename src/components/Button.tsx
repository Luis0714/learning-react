interface ButtonProps {
  text: string;
  type: ButtonType;
  onClick: () => void;
}

type ButtonType = 'primary' | 'secondary';

const Button: React.FC<ButtonProps> = ({ text, type, onClick }) => {
  return (
    <button
      className={`py-2 px-4 w-full hover:bg-blue-700 cursor-pointer rounded-md text-white ${
        type === 'primary' ? 'bg-blue-500' : 'bg-gray-500'
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
