import { useCurrency } from '../contexts/CurrencyContext';

const CurrencyToggle = ({ className = '' }) => {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className={`inline-flex items-center bg-gray-100 rounded-lg p-1 ${className}`}>
      <button
        onClick={() => setCurrency('KES')}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
          currency === 'KES'
            ? 'bg-white text-primary-600 shadow-sm'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        KES
      </button>
      <button
        onClick={() => setCurrency('USD')}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
          currency === 'USD'
            ? 'bg-white text-primary-600 shadow-sm'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        USD
      </button>
    </div>
  );
};

export default CurrencyToggle;
