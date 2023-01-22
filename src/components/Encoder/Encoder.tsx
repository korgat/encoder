import EncoderForm from './EncoderForm/EncoderForm';
import EncoderResult from './EncoderResult/EncoderResult';

import { useState } from 'react';

import './Encoder.scss';

type TProps = {
  tabIndex: number;
};

const Encoder: React.FC<TProps> = ({ tabIndex }) => {
  const [result, setResult] = useState('Encode some text to get result');

  return (
    <div className="window__main">
      <EncoderForm setResult={setResult} tabIndex={tabIndex} />
      <EncoderResult title="Result" content={result} isDecoding={!!tabIndex} />
    </div>
  );
};

export default Encoder;
