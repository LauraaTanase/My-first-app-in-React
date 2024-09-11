// import React from "react";

// const SideAreaComponent = () => {
//   const meals = [
//     { strArea: "American", count: 12 },
//     { strArea: "British", count: 8 },
//     { strArea: "Canadian", count: 6 },
//     { strArea: "Chinese", count: 15 },
//     { strArea: "Croatian", count: 4 },
//     { strArea: "Dutch", count: 3 },
//     { strArea: "Egyptian", count: 7 },
//     { strArea: "Filipino", count: 5 },
//     { strArea: "French", count: 10 },
//     { strArea: "Greek", count: 9 },
//     { strArea: "Indian", count: 13 },
//     { strArea: "Irish", count: 6 },
//     { strArea: "Italian", count: 14 },
//     { strArea: "Jamaican", count: 4 },
//     { strArea: "Japanese", count: 11 },
//     { strArea: "Kenyan", count: 2 },
//     { strArea: "Malaysian", count: 8 },
//     { strArea: "Mexican", count: 10 },
//     { strArea: "Moroccan", count: 3 },
//     { strArea: "Polish", count: 5 },
//     { strArea: "Portuguese", count: 7 },
//     { strArea: "Russian", count: 6 },
//     { strArea: "Spanish", count: 9 },
//     { strArea: "Thai", count: 12 },
//     { strArea: "Tunisian", count: 2 },
//     { strArea: "Turkish", count: 10 },
//     { strArea: "Ukrainian", count: 4 },
//     { strArea: "Unknown", count: 1 },
//     { strArea: "Vietnamese", count: 7 },
//   ];

//   return (
//     <div
//     className="d-flex flex-column flex-shrink-0 p-3 bg-light overflow-auto"
//     style={{ width: "250px", height: "100vh" }}
//   >
//     <div className="dropdown">
//       <a
//         className="dropdown-toggle btn btn-light"
//         href="#"
//         id="dropdownMenuButton"
//         data-bs-toggle="dropdown"
//         aria-expanded="false"
//       >
//         Areas
//       </a>
//       <ul
//         className="dropdown-menu w-100"
//         aria-labelledby="dropdownMenuButton"
//       >
//         {meals.map((meal, index) => (
//           <li key={index}>
//             <a
//               className="dropdown-item d-flex justify-content-between align-items-center"
//               href="#"
//             >
//               {meal.strArea}
//               <span className="badge bg-secondary">{meal.count}</span>
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
//   );
// };

// export default SideAreaComponent;
