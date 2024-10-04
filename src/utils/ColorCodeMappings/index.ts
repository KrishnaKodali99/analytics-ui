export const getColorCodeFromPercentage = (percent: number): string => {
  if (percent >= 0 && percent <= 20) return "#7CFC00";
  if (percent > 20 && percent <= 40) return "#9ACD32";
  if (percent > 40 && percent <= 60) return "#FFD700";
  if (percent > 60 && percent <= 80) return "#FFA500";
  if (percent > 80 && percent <= 100) return "#F32013";
  return "black";
};
