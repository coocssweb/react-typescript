const formatUnits = (units, to) => {
  return units.map(unit => to(unit)).join(' ');
};

export default formatUnits;
