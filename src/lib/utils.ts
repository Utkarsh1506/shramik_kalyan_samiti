export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(" ");
};

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
};

export const formatNumber = (value: number) => {
  return new Intl.NumberFormat("en-IN").format(value);
};
