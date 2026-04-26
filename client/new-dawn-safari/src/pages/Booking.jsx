import { useState } from 'react';
import { Calendar, Users, MapPin, Phone, Mail, User, CheckCircle, ChevronDown, Wallet } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    package: '',
    travelDate: '',
    travelers: '2',
    accommodation: 'double',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const packages = [
    { value: '', label: 'Select a Safari Package', price: '' },
    { value: 'masai-mara-green', label: 'Masai Mara Adventure - Green Season (Apr-Jun 2026)', price: 'From Kes.26,460/person' },
    { value: 'masai-mara-peak', label: 'Masai Mara Adventure - Peak Season (Jul-Oct 2026)', price: 'From Kes.37,260/person' },
    { value: 'masai-mara-regular', label: 'Masai Mara Adventure - Regular Season (Nov-Dec 2026)', price: 'From Kes.32,400/person' },
    { value: 'coastal-north', label: 'Coastal Beach Getaway - North Coast', price: 'From Kes.51,300/person' },
    { value: 'coastal-south', label: 'Coastal Beach Getaway - South Coast', price: 'From Kes.81,140/person' },
    { value: 'big-five', label: 'Big Five Safari Experience - 5 Days', price: 'From Kes.75,000/person' },
    { value: 'custom', label: 'Custom Safari Package', price: 'Contact for quote' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  
  const WEB3FORMS_KEY = '35353c35-6196-44bd-ac2d-c6ffc6d654bb';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Prepare form data for Web3Forms
      const formDataObj = new FormData();
      formDataObj.append('access_key', WEB3FORMS_KEY);
      formDataObj.append('subject', `New Safari Booking from ${formData.fullName}`);
      formDataObj.append('from_name', 'newdawnafrica');
      formDataObj.append('replyto', formData.email);
      formDataObj.append('name', formData.fullName);
      formDataObj.append('email', formData.email);
      formDataObj.append('phone', formData.phone);
      formDataObj.append('package', packages.find(p => p.value === formData.package)?.label || formData.package);
      formDataObj.append('travel_date', formData.travelDate);
      formDataObj.append('travelers', formData.travelers);
      formDataObj.append('accommodation', formData.accommodation);
      formDataObj.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataObj
      });

      const data = await response.json();

      if (data.success) {
        setSubmitSuccess(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          package: '',
          travelDate: '',
          travelers: '2',
          accommodation: 'double',
          message: ''
        });
      } else {
        throw new Error(data.message || 'Failed to submit booking');
      }
    } catch (error) {
      setSubmitError('Failed to submit booking. Please try again or contact us directly.');
      console.error('Booking error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Booking Received!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your booking request. Our team will contact you within 24 hours to confirm your safari adventure.
            </p>
            <div className="bg-primary-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-primary-800">
                <strong>Need immediate assistance?</strong><br />
                Call us: 0712695186, 0712981009, or 0708400078
              </p>
            </div>
            <button
              onClick={() => setSubmitSuccess(false)}
              className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors"
            >
              Make Another Booking
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
            Book Your <span className="text-primary-600">Safari Adventure</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill out the form below to reserve your spot. Our team will get back to you within 24 hours to confirm your booking.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              {submitError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  {submitError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <User className="h-5 w-5 mr-2 text-primary-500" />
                    Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                        placeholder="0712345678"
                      />
                    </div>
                  </div>
                </div>

                {/* Safari Details */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary-500" />
                    Safari Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Select Package *
                      </label>
                      <div className="relative">
                        <select
                          name="package"
                          value={formData.package}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
                        >
                          {packages.map((pkg) => (
                            <option key={pkg.value} value={pkg.value}>
                              {pkg.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                      </div>
                      {formData.package && (
                        <p className="mt-2 text-sm text-primary-600 font-medium">
                          {packages.find(p => p.value === formData.package)?.price}
                        </p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Travel Date *
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="date"
                            name="travelDate"
                            value={formData.travelDate}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Number of Travelers *
                        </label>
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <select
                            name="travelers"
                            value={formData.travelers}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
                          >
                            {[1, 2, 3, 4, 5, 6, '7+'].map(num => (
                              <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Accommodation Preference *
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { value: 'double', label: 'Double Room (Sharing)', icon: Users },
                          { value: 'single', label: 'Single Room', icon: User }
                        ].map((option) => (
                          <label
                            key={option.value}
                            className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                              formData.accommodation === option.value
                                ? 'border-primary-500 bg-primary-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name="accommodation"
                              value={option.value}
                              checked={formData.accommodation === option.value}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <option.icon className={`h-5 w-5 mr-3 ${
                              formData.accommodation === option.value ? 'text-primary-500' : 'text-gray-400'
                            }`} />
                            <span className={`text-sm font-medium ${
                              formData.accommodation === option.value ? 'text-primary-700' : 'text-gray-600'
                            }`}>
                              {option.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Message */}
                <div className="pt-6 border-t border-gray-200">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Special Requests or Questions
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about any dietary requirements, special occasions, or questions you may have..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    'Submit Booking Request'
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to our terms and conditions. We'll contact you within 24 hours.
                </p>
              </form>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Our safari experts are ready to assist you with any questions.
              </p>
              <div className="space-y-3">
                <a href="tel:0712695186" className="flex items-center p-3 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
                  <Phone className="h-5 w-5 text-primary-600 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Drusilah</p>
                    <p className="text-sm text-primary-600">0712695186</p>
                  </div>
                </a>
                <a href="tel:0712981009" className="flex items-center p-3 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
                  <Phone className="h-5 w-5 text-primary-600 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Milka</p>
                    <p className="text-sm text-primary-600">0712981009</p>
                  </div>
                </a>
                <a href="tel:0708400078" className="flex items-center p-3 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
                  <Phone className="h-5 w-5 text-primary-600 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Maingi</p>
                    <p className="text-sm text-primary-600">0708400078</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Payment Info Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Wallet className="h-5 w-5 mr-2 text-green-600" />
                Payment Details
              </h3>
              <div className="space-y-4 text-sm">
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-2">Equity Bank - M-Pesa Paybill</p>
                  <div className="space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Paybill Number:</span>
                      <span className="font-semibold text-gray-900">247247</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Account Number:</span>
                      <span className="font-semibold text-gray-900">1040187255525</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Account Name:</span>
                      <span className="font-semibold text-gray-900">David Maingi</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  After booking, you'll receive a confirmation email with full payment instructions. A deposit may be required to secure your reservation.
                </p>
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">Why Book With Us?</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  Expert local guides with 10+ years experience
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  Flexible booking & cancellation policies
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  24/7 support during your safari
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  Best price guarantee
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
