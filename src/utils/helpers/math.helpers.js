export const getAngle = (diffX, diffY) => {
  return (Math.atan2(diffY, diffX) * 180) / Math.PI;
};

export const getSqueeze = (diffX, diffY) => {
  const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
  const maxSqueeze = 0.15;
  const accelerator = 1500;
  
  return Math.min(distance / accelerator, maxSqueeze);
};
