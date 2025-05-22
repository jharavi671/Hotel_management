import React from 'react'
import { assets } from '../assets/assets'

const HotelReg = () => {
  const cities = ['New York', 'Los Angeles', 'Chicago', 'Miami', 'San Francisco'] // example cities

  return (
    <div>
      <div className="fixed top-0 bottom-0 right-0 left-0 z-100 flex items-center justify-center bg-black/70">
        <form className="flex bg-white rounded-xl max-w-4xl max-md:mx-2">
          <img
            src={assets.regImage}
            alt="reg-image"
            className="w-1/2 rounded-xl hidden md:block"
          />
          <div className="relative flex flex-col items-center md:w-1/2 p-8 md:p-10">
            <img
              src={assets.closeIcon}
              alt="Close-icon"
              className="absolute top-4 right-4 h-4 w-4 cursor-pointer"
            />
            <p className="text-2xl font-bold text-center mb-6">Register Your Hotel</p>
            <p>Register your hotel</p>

            {/* Hotel Name */}
            <div className="w-full mt-4">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Hotel Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Type Here"
                className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
                required
              />
            </div>

            {/* Phone */}
            <div className="w-full mt-4">
              <label htmlFor="contact" className="text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                id="contact"
                type="text"
                placeholder="Type Here"
                className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
                required
              />
            </div>

            {/* Address */}
            <div className="w-full mt-4">
              <label htmlFor="address" className="text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                id="address"
                type="text"
                placeholder="Type Here"
                className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
                required
              />
            </div>

            {/* Select City Dropdown */}
            <div className="w-full mt-4 max-w-60 mr-auto">
              <label htmlFor="city" className="font-medium text-gray-500">
                City
              </label>
              <select
                id="city"
                defaultValue=""
                className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
                required
              >
                <option value="" disabled>
                  Select City
                </option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <button className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white mr-auto px-6 py-2 rounded cursor-pointer mt-6">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default HotelReg
