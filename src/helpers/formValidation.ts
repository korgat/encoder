export const isValidText = (text: string) => {
  return /^[A-Z_]{1,256}$/.test(text);
};

export const isValidRange = (from: number, to: number) => {
  const regExp = RegExp(`^[${from}-${to}]$`);

  return (value: string) => {
    return regExp.test(value);
  };
};
