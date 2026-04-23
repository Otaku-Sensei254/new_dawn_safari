import { useState, useEffect } from 'react';
import { 
  Users, Calendar, Phone, Mail, Search, Filter, 
  ChevronDown, ChevronUp, CheckCircle, Clock, AlertCircle,
  RefreshCw, Download, Trash2
} from 'lucide-react';

const Admin = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [expandedBooking, setExpandedBooking] = useState(null);

  // Mock data for demonstration - in production this would come from the API
  const mockBookings = [
    {
      _id: '1',
      fullName: 'John Kamau',
      email: 'john.kamau@email.com',
      phone: '0722123456',
      package: 'masai-mara-peak',
      packageLabel: 'Masai Mara Adventure - Peak Season',
      travelDate: '2026-08-15',
      travelers: '4',
      accommodation: 'double',
      message: 'Celebrating our anniversary, looking for a special experience.',
      status: 'pending',
      createdAt: '2026-04-20T10:30:00Z'
    },
    {
      _id: '2',
      fullName: 'Sarah Ochieng',
      email: 'sarah.o@email.com',
      phone: '0711987654',
      package: 'coastal-south',
      packageLabel: 'Coastal Beach Getaway - South Coast',
      travelDate: '2026-06-10',
      travelers: '2',
      accommodation: 'single',
      message: 'Honeymoon trip, prefer quiet resort with ocean view.',
      status: 'confirmed',
      createdAt: '2026-04-19T14:22:00Z'
    },
    {
      _id: '3',
      fullName: 'Michael Njoroge',
      email: 'm.njoroge@email.com',
      phone: '0733456789',
      package: 'big-five',
      packageLabel: 'Big Five Safari Experience - 5 Days',
      travelDate: '2026-07-20',
      travelers: '6',
      accommodation: 'double',
      message: 'Family reunion trip. Need vegetarian meal options.',
      status: 'pending',
      createdAt: '2026-04-18T09:15:00Z'
    },
    {
      _id: '4',
      fullName: 'Grace Wanjiku',
      email: 'grace.w@email.com',
      phone: '0708567890',
      package: 'masai-mara-green',
      packageLabel: 'Masai Mara Adventure - Green Season',
      travelDate: '2026-05-12',
      travelers: '3',
      accommodation: 'double',
      message: 'Photography enthusiast, need early morning game drives.',
      status: 'confirmed',
      createdAt: '2026-04-17T16:45:00Z'
    },
    {
      _id: '5',
      fullName: 'David Mutua',
      email: 'd.mutua@email.com',
      phone: '0712233445',
      package: 'custom',
      packageLabel: 'Custom Safari Package',
      travelDate: '2026-09-05',
      travelers: '2',
      accommodation: 'single',
      message: 'Interested in combining Masai Mara with Amboseli. 7 days total.',
      status: 'pending',
      createdAt: '2026-04-15T11:20:00Z'
    }
  ];

  useEffect(() => {
    // In production, fetch from API:
    // fetch('http://localhost:5000/api/bookings').then(res => res.json()).then(data => setBookings(data))
    
    // Using mock data for now
    setTimeout(() => {
      setBookings(mockBookings);
      setLoading(false);
    }, 1000);
  }, []);

  const handleStatusChange = async (bookingId, newStatus) => {
    // In production, call API to update status
    setBookings(bookings.map(booking => 
      booking._id === bookingId ? { ...booking, status: newStatus } : booking
    ));
  };

  const handleDelete = async (bookingId) => {
    if (!confirm('Are you sure you want to delete this booking?')) return;
    
    // In production, call API to delete
    setBookings(bookings.filter(booking => booking._id !== bookingId));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed': return <CheckCircle className="h-4 w-4" />;
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'cancelled': return <AlertCircle className="h-4 w-4" />;
      default: return null;
    }
  };

  const filteredBookings = bookings
    .filter(booking => {
      const matchesSearch = 
        booking.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.phone.includes(searchTerm);
      const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      let comparison = 0;
      if (sortBy === 'date') {
        comparison = new Date(a.createdAt) - new Date(b.createdAt);
      } else if (sortBy === 'name') {
        comparison = a.fullName.localeCompare(b.fullName);
      } else if (sortBy === 'travelDate') {
        comparison = new Date(a.travelDate) - new Date(b.travelDate);
      }
      return sortOrder === 'desc' ? -comparison : comparison;
    });

  const stats = {
    total: bookings.length,
    pending: bookings.filter(b => b.status === 'pending').length,
    confirmed: bookings.filter(b => b.status === 'confirmed').length,
    totalTravelers: bookings.reduce((sum, b) => sum + parseInt(b.travelers), 0)
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="h-12 w-12 text-primary-500 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading bookings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 font-serif">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Manage safari bookings and track reservations
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Bookings</p>
                <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
              </div>
              <div className="bg-primary-100 p-3 rounded-lg">
                <Calendar className="h-6 w-6 text-primary-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Pending</p>
                <p className="text-3xl font-bold text-yellow-600">{stats.pending}</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Confirmed</p>
                <p className="text-3xl font-bold text-green-600">{stats.confirmed}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Travelers</p>
                <p className="text-3xl font-bold text-primary-600">{stats.totalTravelers}</p>
              </div>
              <div className="bg-primary-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none appearance-none bg-white"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
              <div className="relative">
                <select
                  value={`${sortBy}-${sortOrder}`}
                  onChange={(e) => {
                    const [field, order] = e.target.value.split('-');
                    setSortBy(field);
                    setSortOrder(order);
                  }}
                  className="px-4 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none appearance-none bg-white"
                >
                  <option value="date-desc">Newest First</option>
                  <option value="date-asc">Oldest First</option>
                  <option value="name-asc">Name A-Z</option>
                  <option value="name-desc">Name Z-A</option>
                  <option value="travelDate-asc">Travel Date (Soonest)</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {filteredBookings.length === 0 ? (
            <div className="p-12 text-center">
              <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No bookings found</p>
              <p className="text-sm text-gray-400 mt-1">Try adjusting your filters</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Client
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Package
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Travel Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Travelers
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredBookings.map((booking) => (
                    <>
                      <tr 
                        key={booking._id}
                        className="hover:bg-gray-50 transition-colors cursor-pointer"
                        onClick={() => setExpandedBooking(expandedBooking === booking._id ? null : booking._id)}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                              <span className="text-primary-700 font-semibold">
                                {booking.fullName.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{booking.fullName}</p>
                              <p className="text-sm text-gray-500">{booking.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm text-gray-900">{booking.packageLabel}</p>
                          <p className="text-xs text-gray-500 capitalize">{booking.accommodation} room</p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm text-gray-900">
                            {new Date(booking.travelDate).toLocaleDateString('en-GB', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric'
                            })}
                          </p>
                          <p className="text-xs text-gray-500">
                            Booked {new Date(booking.createdAt).toLocaleDateString('en-GB', {
                              day: 'numeric',
                              month: 'short'
                            })}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-900">{booking.travelers}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(booking.status)}`}>
                            {getStatusIcon(booking.status)}
                            <span className="ml-1 capitalize">{booking.status}</span>
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedBooking(expandedBooking === booking._id ? null : booking._id);
                            }}
                            className="text-primary-600 hover:text-primary-800"
                          >
                            {expandedBooking === booking._id ? (
                              <ChevronUp className="h-5 w-5" />
                            ) : (
                              <ChevronDown className="h-5 w-5" />
                            )}
                          </button>
                        </td>
                      </tr>
                      
                      {/* Expanded Details */}
                      {expandedBooking === booking._id && (
                        <tr>
                          <td colSpan={6} className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
                                <div className="space-y-2 text-sm">
                                  <p className="flex items-center text-gray-600">
                                    <Mail className="h-4 w-4 mr-2 text-gray-400" />
                                    {booking.email}
                                  </p>
                                  <p className="flex items-center text-gray-600">
                                    <Phone className="h-4 w-4 mr-2 text-gray-400" />
                                    {booking.phone}
                                  </p>
                                </div>
                                
                                {booking.message && (
                                  <div className="mt-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Special Requests</h4>
                                    <p className="text-sm text-gray-600 bg-white p-3 rounded-lg border border-gray-200">
                                      {booking.message}
                                    </p>
                                  </div>
                                )}
                              </div>
                              
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-3">Actions</h4>
                                <div className="space-y-2">
                                  <div className="flex gap-2">
                                    <button
                                      onClick={() => handleStatusChange(booking._id, 'confirmed')}
                                      disabled={booking.status === 'confirmed'}
                                      className="px-4 py-2 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white text-sm font-medium rounded-lg transition-colors"
                                    >
                                      Confirm
                                    </button>
                                    <button
                                      onClick={() => handleStatusChange(booking._id, 'pending')}
                                      disabled={booking.status === 'pending'}
                                      className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-300 text-white text-sm font-medium rounded-lg transition-colors"
                                    >
                                      Mark Pending
                                    </button>
                                    <button
                                      onClick={() => handleStatusChange(booking._id, 'cancelled')}
                                      disabled={booking.status === 'cancelled'}
                                      className="px-4 py-2 bg-red-500 hover:bg-red-600 disabled:bg-gray-300 text-white text-sm font-medium rounded-lg transition-colors"
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                  <button
                                    onClick={() => handleDelete(booking._id)}
                                    className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50 text-sm font-medium rounded-lg transition-colors"
                                  >
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Delete Booking
                                  </button>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer Note */}
        <p className="text-sm text-gray-500 mt-4 text-center">
          Showing {filteredBookings.length} of {bookings.length} bookings
        </p>
      </div>
    </div>
  );
};

export default Admin;
