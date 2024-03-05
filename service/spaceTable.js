const createSpaceTable = (total, stuf, license, fix, goods, income) => {
  return { total, stuf, license, fix, goods, income };
};

export const spaceTable = [
  createSpaceTable(48, 7, 10, 5, 26, 2500),
  createSpaceTable(99, 15, 10, 12, 62, 3500),
  createSpaceTable(210, 45, 10, 30, 125, 3500),
  createSpaceTable(310, 60, 10, 45, 185, 9500),
  createSpaceTable(400, 80, 10, 60, 250, 13000),
];
