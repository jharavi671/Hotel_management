import React from 'react';
import { Link } from 'react-router-dom';
import starIconFilled from '../assets/starIconFilled.svg';
import locationIcon from '../assets/locationIcon.svg'; // Make sure this path is correct

const HotelCard = ({ rooms, index }) => {
  return (
   <Link
  to={`/rooms/${rooms._id}`}
  onClick={() => scrollTo(0, 0)}
  className="relative w-full rounded-xl overflow-hidden bg-white text-gray-700 shadow-md hover:shadow-lg transition-shadow">
      {/* Hotel Image */}
      <div className="relative">
        <img
          src={rooms.images[0]}
          alt="hotel"
          className="w-full h-60 object-cover rounded-t-xl"
        />
        {index % 2 === 0 && (
          <p className="absolute top-3 left-3 px-3 py-1 text-xs bg-white text-gray-800 font-medium rounded-full">
            Best Seller
          </p>
        )}
      </div>

      {/* Hotel Info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <p className="font-playfair text-xl font-medium text-gray-800">
            {rooms.hotel.name}
          </p>
          <div className="flex items-center gap-1">
            <img src={starIconFilled} alt="starIcon" className="w-4 h-4" />
            <span>4.5</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <img src={locationIcon} alt="locationIcon" className="w-4 h-4" />
          <span>{rooms.hotel.address}</span>
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="text-xl text-gray-800">${rooms.pricePerNight}</span>
          <span className="text-sm text-gray-500 ml-1">/ night</span>
          <button className="ml-auto px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
