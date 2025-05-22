// import React from 'react';
// import { assets } from '../../assets/assets';
// import { Link } from 'react-router-dom';
// import { UserButton } from '@clerk/clerk-react';
// import { userDummyData } from '../../assets/assets'; // Simulate logged-in user (replace with real auth data)

// const Navbar = () => {
//   const user = userDummyData; // In real app, get this from Clerk or auth context

//   return (
//     <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white">
//       <Link to="/">
//         <img src={assets.logo} alt="QuickStay Logo" className="h-9 opacity-80" />
//       </Link>

//       {/* Role-based nav */}
//       {user.role === 'hotelOwner' && (
//         <div className="hidden md:flex items-center gap-6">
//           <Link to="/dashboard" className="flex items-center gap-1 text-gray-700 hover:text-black transition">
//             <img src={assets.dashboardIcon} alt="Dashboard" className="h-4" />
//             <span>Dashboard</span>
//           </Link>
//           <Link to="/add-room" className="flex items-center gap-1 text-gray-700 hover:text-black transition">
//             <img src={assets.addIcon} alt="Add Room" className="h-4" />
//             <span>Add Room</span>
//           </Link>
//           <Link to="/list-room" className="flex items-center gap-1 text-gray-700 hover:text-black transition">
//             <img src={assets.listIcon} alt="List Room" className="h-4" />
//             <span>List Room</span>
//           </Link>
//         </div>
//       )}

//       {/* User */}
//       <UserButton />
//     </div>
//   );
// };

// export default Navbar;
