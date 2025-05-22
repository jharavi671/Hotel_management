import React from 'react';
import { roomsDummyData } from '../assets/assets';
import HotelCard from './HotelCard';
import Title from './Title';
import { useNavigate } from 'react-router-dom';

const FeaturedDestination = () => {
const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
      <Title
        title="Featured Destination & Hotels"
        subTitle="Find your perfect stay from our selection of premium hotels, offering exceptional service, beautiful locations, and experiences that go beyond just a room"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {roomsDummyData.slice(0, 4).map((rooms, index) => (
          <HotelCard key={rooms._id || index} rooms={rooms} index={index} />
        ))}
      </div>

      {/* Button to view all destinations */}
      <button onClick={()=>{navigate("/rooms ");scrollTo(0, 0)}}
       className="my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer">
        View all Destinations
      </button>
    </div>
  );
};

export default FeaturedDestination;
