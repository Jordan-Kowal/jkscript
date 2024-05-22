const round = (value: number, decimals = 0): number => {
  const multiplier = 10 ** decimals;
  return Math.round(value * multiplier) / multiplier;
};

export default round;
