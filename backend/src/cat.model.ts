export enum PouchSize {
  A = 55.5,
  B = 59.5,
  C = 62.75,
  D = 66,
  E = 69,
  F = 71.25,
}

export type Cat = {
  name: string;
  subscriptionActive: boolean;
  breed: string;
  pouchSize: string;
};

export const formatCatNames = (
  cats: Cat[],
  possessive: boolean = false,
): string => {
  let catNamesArr = cats.map((cat) => cat.name);
  let lastName = catNamesArr.pop();
  if (!lastName) {
    throw new Error('No cats found.');
  }
  if (possessive) {
    catNamesArr = catNamesArr.map((name) => `${name}'s`);
    lastName = `${lastName}'s`;
  }
  if (catNamesArr.length > 0) {
    return `${catNamesArr.join(', ')} and ${lastName}`;
  } else {
    return lastName;
  }
};

export const calculatePrice = (cats: Cat[]): number =>
  cats.reduce((sum, cat) => {
    const value = PouchSize[cat.pouchSize as keyof typeof PouchSize];
    if (!value) {
      throw new Error('Invalid Pouch Size');
    }
    return sum + value;
  }, 0);
