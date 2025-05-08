export const formatNumber = (num:string) => {
  if (!num) return "-";
  return Intl.NumberFormat("en-US", { notation: "compact" }).format(num);
};

export const formatCurrency = (num:string) => {
  if (!num) return "-";
  return `$${parseFloat(num).toLocaleString("en-US", {
    maximumFractionDigits: 2,
  })}`;
};
