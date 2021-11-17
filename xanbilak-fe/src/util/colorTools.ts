/* eslint-disable no-bitwise */
const limitNumber = (num: number) => {

  let result: number = num;
  const MAX_NUMBER = 255;
  const MIN_NUMBER = 0;
  if (num > MAX_NUMBER) {

    result = MAX_NUMBER;

  } else if (num < MIN_NUMBER) {

    result = MIN_NUMBER;

  }
  return result;

};

const getColorNumber = (color: string): string => {

  // eslint-disable-next-line no-magic-numbers
  if (color[0] === "#") {

    // eslint-disable-next-line no-magic-numbers
    return color.slice(1);

  }

  return color;

};

const HEX_BASE = 16;
const OCT_BASE = 8;
const BLUE_MASK = 0x00FF;
const GREEN_MASK = 0x0000FF;

export const lightenDarkenColor = (color: string, amount: number): string => {

  // eslint-disable-next-line no-magic-numbers
  const usePound: boolean = color[0] === "#";
  const colorNumber = getColorNumber(color);

  const num = parseInt(colorNumber, 16);

  let colorRed = (num >> HEX_BASE) + amount;
  colorRed = limitNumber(colorRed);

  let colorBlue = ((num >> OCT_BASE) & BLUE_MASK) + amount;
  colorBlue = limitNumber(colorBlue);

  let colorGreen = (num & GREEN_MASK) + amount;
  colorGreen = limitNumber(colorGreen);

  return (usePound
    ? "#"
    : "") + (colorGreen | (colorBlue << OCT_BASE) | (colorRed << HEX_BASE))
    .toString(HEX_BASE);

};
