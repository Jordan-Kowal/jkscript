const round = (value, decimals = 0) => {
  const multiplier = 10 ** decimals;
  return Math.round(value * multiplier) / multiplier;
};

export default round;
