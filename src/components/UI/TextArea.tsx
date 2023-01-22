import './Input.scss';

type TProps = {
  className?: string;
  placeholder: string;
  children?: React.ReactNode;
  errorMsg: string;
  hasError: boolean;
  maxLength: number;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
};

const TextArea: React.FC<TProps> = ({
  children,
  className,
  placeholder,
  errorMsg,
  hasError,
  maxLength,
  value,
  onChange,
  onBlur,
}) => {
  const baseClass = 'input-wrapper ' + className;
  const inputClass = hasError ? 'input-main error' : 'input-main';

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;

    onChange(value.replace(/[!-/:-@[-`{-~]/g, '_'));
  };

  return (
    <div className={baseClass}>
      <textarea
        value={value}
        className={inputClass}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={changeHandler}
        onBlur={onBlur}>
        {children}
      </textarea>
      {hasError && <div className="input-error">{errorMsg}</div>}
    </div>
  );
};

export default TextArea;
