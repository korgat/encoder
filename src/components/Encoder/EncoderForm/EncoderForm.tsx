import { Button, Input, TextArea } from '../../UI';

import { isValidRange, isValidText } from '../../../helpers/formValidation';
import encoder from '../../../helpers/encoderHelpers';
import useInput from '../../../hook/useInput';

import './EncoderForm.scss';

type TProps = {
  tabIndex: number;
  setResult: React.Dispatch<React.SetStateAction<string>>;
};

const EncoderForm: React.FC<TProps> = ({ tabIndex, setResult }) => {
  const {
    value: shiftValue,
    hasError: shiftHasError,
    isValid: isShiftValid,
    changeHandler: shiftChangeHandler,
    setTouchedStatus: setShiftTouchStatus,
  } = useInput(isValidRange(0, 9));
  const {
    value: repeatValue,
    hasError: repeatHasError,
    isValid: isRepeatValid,
    changeHandler: repeatChangeHandler,
    setTouchedStatus: setRepeatTouchStatus,
  } = useInput(isValidRange(0, 5));
  const {
    value: textValue,
    hasError: textHasError,
    isValid: isTextValid,
    changeHandler: textChangeHandler,
    setTouchedStatus: setTextTouchStatus,
  } = useInput(isValidText);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShiftTouchStatus();
    setRepeatTouchStatus();
    setTextTouchStatus();

    if (isShiftValid && isRepeatValid && isTextValid) {
      const transformedText = encoder(textValue, +shiftValue, +repeatValue, !!tabIndex);

      setResult(transformedText);
    }
  };

  return (
    <form onSubmit={submitHandler} className="window__main-encoder">
      <TextArea
        value={textValue}
        onChange={textChangeHandler}
        onBlur={setTextTouchStatus}
        className="main-encoder__text"
        maxLength={256}
        hasError={textHasError}
        errorMsg="Please enter less then 256 characters(A-Z and _)"
        placeholder="Text"
      />
      <div className="main-encoder__configurations">
        <Input
          value={shiftValue}
          onChange={shiftChangeHandler}
          onBlur={setShiftTouchStatus}
          className="main-encoder__configurations-shift"
          min="0"
          max="9"
          hasError={shiftHasError}
          errorMsg="Enter number (0 to 9)"
          type="number"
          placeholder="Shift"
        />
        <Input
          value={repeatValue}
          onChange={repeatChangeHandler}
          onBlur={setRepeatTouchStatus}
          className="main-encoder__configurations-repeats"
          min="0"
          max="5"
          hasError={repeatHasError}
          errorMsg="Enter number (0 to 5)"
          type="number"
          placeholder="Number of repeats"
        />
      </div>
      <Button className="main-encoder__submit-btn">
        {tabIndex ? 'Decode' : 'Encode'} this text
      </Button>
    </form>
  );
};

export default EncoderForm;
