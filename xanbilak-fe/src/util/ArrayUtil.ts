const DEFAULT_SIZE = 1;

// eslint-disable-next-line max-len
export const decreaseArraySize = (arr: any, amount: number = DEFAULT_SIZE): any[] => {

  const arr2: any = [];
  for (let index: number = 0; index < arr.length - amount; index++) {

    arr2.push(arr[index]);

  }
  return arr2;

};

export const convertToKeyValue = (arr: any[]): any[] => (
  arr.map((item: any, index: number) => ({
    key: index,
    value: item,
  }))
);
