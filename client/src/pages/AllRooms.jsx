import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets, facilityIcons, roomsDummyData } from '../assets/assets';
import StarRating from '../components/StarRating';

const CheckBox = ({ label, selected = false, onChange = () => {} }) => (
  <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
    <input
      type="checkbox"
      checked={selected}
      onChange={(e) => onChange(e.target.checked, label)}
    />
    <span className="font-light select-none">{label}</span>
  </label>
);

const RadioButton = ({ label, selected = false, onChange = () => {} }) => (
  <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
    <input
      type="radio"
      name="sortOptions"
      checked={selected}
      onChange={() => onChange(label)}
    />
    <span className="font-light select-none">{label}</span>
  </label>
);

const AllRooms = () => {
  const navigate = useNavigate();
  const [openFilters, setOpenFilters] = useState(false);
  const [selectedRoomTypes, setSelectedRoomTypes] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState('');

  const roomTypes = ['Single Bed', 'Double Bed', 'Luxury Room', 'Family Suite'];
  const priceRanges = ['0 to 500', '500 to 1000', '1000 to 2000', '2000 to 5000'];
  const sortOptions = [
    'Price: Low to High',
    'Price: High to Low',
    'Rating: Low to High',
    'Rating: High to Low',
  ];

  const handleRoomTypeChange = (checked, label) => {
    if (checked) {
      setSelectedRoomTypes((prev) => [...prev, label]);
    } else {
      setSelectedRoomTypes((prev) => prev.filter((item) => item !== label));
    }
  };

  const handlePriceRangeChange = (checked, label) => {
    if (checked) {
      setSelectedPriceRanges((prev) => [...prev, label]);
    } else {
      setSelectedPriceRanges((prev) => prev.filter((item) => item !== label));
    }
  };

  const handleSortChange = (label) => {
    setSelectedSortOption(label);
  };

  const clearAllFilters = () => {
    setSelectedRoomTypes([]);
    setSelectedPriceRanges([]);
    setSelectedSortOption('');
  };

  return (
    <div className="flex flex-col pt-28 md:pt-35 px-4 md:px-16 lg:px-24 gap-12">
      {/* Heading */}
      <div className="flex flex-col items-start text-left">
        <h1 className="font-playfair text-4xl md:text-[40px]">Hotel Rooms</h1>
        <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-xl">
          Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
        </p>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Filters first on mobile (order-1), second on desktop (order-2) */}
        <div className="bg-white w-full lg:w-80 border border-gray-300 rounded-md text-gray-600 self-start shadow-sm order-1 lg:order-2">
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-300">
            <p className="text-base font-medium text-gray-800">FILTERS</p>
            <div className="text-xs cursor-pointer">
              <span onClick={() => setOpenFilters(!openFilters)} className="lg:hidden">
                {openFilters ? 'HIDE' : 'SHOW'}
              </span>
              <span className="hidden lg:block" onClick={clearAllFilters}>
                CLEAR ALL
              </span>
            </div>
          </div>

          <div className={`${openFilters ? 'h-auto' : 'h-0'} lg:h-auto overflow-hidden transition-all duration-700`}>
            <div className="px-5 pt-5">
              <p className="font-medium text-gray-600 pb-2">Popular Filters</p>
              {roomTypes.map((item, index) => (
                <CheckBox
                  key={index}
                  label={item}
                  selected={selectedRoomTypes.includes(item)}
                  onChange={handleRoomTypeChange}
                />
              ))}
            </div>

            <div className="px-5 pt-5">
              <p className="font-medium text-gray-600 pb-2">Price Range</p>
              {priceRanges.map((item, index) => (
                <CheckBox
                  key={index}
                  label={`$${item}`}
                  selected={selectedPriceRanges.includes(`$${item}`)}
                  onChange={handlePriceRangeChange}
                />
              ))}
            </div>

            <div className="px-5 pt-5 pb-5">
              <p className="font-medium text-gray-600 pb-2">Sort By</p>
              {sortOptions.map((option, index) => (
                <RadioButton
                  key={index}
                  label={option}
                  selected={selectedSortOption === option}
                  onChange={handleSortChange}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Room Cards */}
        <div className="flex flex-col flex-1 gap-12 order-2 lg:order-1">
          {roomsDummyData.map((room) => (
            <div
              key={room._id}
              className="flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0"
            >
              <img
                src={room.images[0]}
                alt="hotel-room"
                title="View Room Details"
                className="h-64 w-64 rounded-xl shadow-lg object-cover cursor-pointer"
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  scrollTo(0, 0);
                }}
              />

              <div
                className="flex flex-col gap-2 cursor-pointer"
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  scrollTo(0, 0);
                }}
              >
                <p className="text-gray-500">{room.hotel.city}</p>
                <p className="font-playfair text-3xl text-gray-800">{room.hotel.name}</p>
                <div className="flex items-center">
                  <StarRating />
                  <p className="ml-2">200+ reviews</p>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <img src={assets.locationFilledIcon} alt="location icon" />
                  <span>{room.hotel.address}</span>
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-3 mb-6">
                  {room.amenities.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5F5]/70">
                      <img src={facilityIcons[item]} alt={item} className="w-5 h-5" />
                      <p className="text-xs">{item}</p>
                    </div>
                  ))}
                </div>

                <p className="text-xl font-medium text-gray-800">${room.pricePerNight}/night</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
