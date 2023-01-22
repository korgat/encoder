import { Button } from '../../UI';
import CopyIcon from '../../UI/CommonIcons/CopyIcon';

import './EncoderResult.scss';

type TProps = {
  title: string;
  content: string;
  isDecoding: boolean;
};

const EncoderResult: React.FC<TProps> = ({ title, content, isDecoding }) => {
  const baseClass = isDecoding ? 'window__main-result decoding' : 'window__main-result';

  const copyClickHandler = () => {
    navigator.clipboard.writeText(content);
  };

  return (
    <div className={baseClass}>
      <h3 className="main-result__title title-main">{title}</h3>
      <div className="main-result__content">{content}</div>
      <Button className="main-result__btn" onClick={copyClickHandler}>
        <CopyIcon />
        <span>Copy to clipboard</span>
      </Button>
    </div>
  );
};

export default EncoderResult;
