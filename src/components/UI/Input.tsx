import './Input.scss';

type TProps = {
  className?: string;
  type: string;
  placeholder: string;
  errorMsg: string;
  hasError: boolean;
  min?: string;
  max?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
};

const Input: React.FC<TProps> = ({
  className,
  type,
  placeholder,
  errorMsg,
  hasError,
  min,
  max,
  value,
  onChange,
  onBlur,
}) => {
  const baseClass = 'input-wrapper ' + className;
  const inputClass = hasError ? 'input-main error' : 'input-main';

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };

  return (
    <div className={baseClass}>
      <input
        className={inputClass}
        min={min}
        max={max}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={changeHandler}
        onBlur={onBlur}
      />
      {hasError && <div className="input-error">{errorMsg}</div>}
    </div>
  );
};

export default Input;
