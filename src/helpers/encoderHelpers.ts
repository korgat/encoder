const encode = (start: number, count: number): number => {
  if (start + count < 91) {
    return start + count;
  }
  let next = start + count - 90;

  return encode(64, next);
};

const decode = (start: number, count: number): number => {
  if (start - count > 64) {
    return start - count;
  }
  let next = 65 + count - start;

  return decode(91, next);
};

const encoder = (
  initText: string,
  shiftValue: number,
  repeatValue: number,
  isDecoding: boolean,
) => {
  let newText = '';

  for (let i = 0; i < initText.length; i++) {
    const code = initText.charCodeAt(i);

    if (code === 95) {
      newText = newText + '_';
    } else {
      let totalShift = repeatValue * shiftValue;
      let processedAscii = isDecoding ? decode(code, totalShift) : encode(code, totalShift);

      newText = newText + String.fromCharCode(processedAscii);
    }
  }

  return newText;
};

export default encoder;
