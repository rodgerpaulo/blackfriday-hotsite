export const formatCurrencyBRL = (price, showLeadingCurrency = true) => {
  price = Math.round(price * 100) / 100;

  const options = {
    style: showLeadingCurrency ? 'currency' : 'decimal',
    currency: 'BRL',
    minimumFractionDigits: 2
  };

  return price.toLocaleString('pt-Br', options);
};
