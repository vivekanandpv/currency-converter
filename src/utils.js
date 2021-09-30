const data = {
  inr: [
    {
      currency: 'usd',
      factor: 0.01347345,
    },
    {
      currency: 'eur',
      factor: 0.012,
    },
  ],
  usd: [
    {
      currency: 'inr',
      factor: 74.22,
    },
    {
      currency: 'eur',
      factor: 0.86,
    },
  ],
  eur: [
    {
      currency: 'inr',
      factor: 86.16,
    },
    {
      currency: 'usd',
      factor: 1.16,
    },
  ],
};

export const convert = (from, to, amount) => {
  if (from === to) {
    return amount;
  }

  const factor = data[from]?.find((c) => c.currency === to)?.factor;

  if (factor) {
    return amount * factor;
  } else {
    return NaN;
  }
};
