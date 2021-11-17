
export const numberWithCommas = (x: any) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const toFloatingPrecision = (floatNumber: number, precision: number) => {
  const integerPart: number = Math.floor(floatNumber);
  const floatingPart: number = floatNumber - integerPart;

  return integerPart + parseFloat( floatingPart.toPrecision(precision) );
}
