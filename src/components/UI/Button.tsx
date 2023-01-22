import './Button.scss';

type TButton = {
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<TButton> = ({ children, className, onClick }) => {
  const baseClass = 'btn-main ' + className;
  return (
    <button onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
};

export default Button;
