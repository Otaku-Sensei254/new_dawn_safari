import { createContext, useContext, useState, useCallback } from 'react';

// Exchange rate (1 USD = ~129 KES - you may want to update this periodically)
const EXCHANGE_RATE = 129;

const CurrencyContext = createContext({
  currency: 'KES',
  setCurrency: () => {},
  formatPrice: () => '',
  convertPrice: () => 0
});

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrencyState] = useState(() => {
    // Load from localStorage if available
    if (typeof window !== 'undefined') {
      return localStorage.getItem('preferredCurrency') || 'KES';
    }
    return 'KES';
  });

  const setCurrency = useCallback((newCurrency) => {
    setCurrencyState(newCurrency);
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredCurrency', newCurrency);
    }
  }, []);

  const convertPrice = useCallback((kesAmount) => {
    if (currency === 'USD') {
      return Math.round(kesAmount / EXCHANGE_RATE);
    }
    return kesAmount;
  }, [currency]);

  const formatPrice = useCallback((kesAmount, prefix = true) => {
    const converted = convertPrice(kesAmount);
    if (currency === 'USD') {
      return prefix ? `$${converted.toLocaleString()}` : `${converted.toLocaleString()}`;
    }
    return prefix ? `Kes.${converted.toLocaleString()}` : `${converted.toLocaleString()}`;
  }, [currency, convertPrice]);

  const value = {
    currency,
    setCurrency,
    formatPrice,
    convertPrice,
    exchangeRate: EXCHANGE_RATE
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContext;
