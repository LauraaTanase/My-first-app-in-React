import React from "react";
import SidebarComponent from "../components/SidebarComponent";
import SideAreaComponent from "../components/SideAreaComponent";
import { Link } from 'react-router-dom'; // Adaugă acest import

export default function () {
  return (
    <div className>
       <Link
        to="/FavoritesPage"
        className="btn bg-white text-start border-bottom text-dark fw-bold px-0 rounded-0"
      >
        ♡ Favorites
      </Link>
      <SidebarComponent />
      <SideAreaComponent />
    </div>
  );
}

// export const SidebarContainer = (props) => {
//   console.log(props.data);
//   return (
//     <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
//       {props.data
//         ? props.data.map((meal) => (
//             <SidebarComponent
//               strCategory={meal.strCategory}
//             />
//           ))
//         : "NO DATA AVAILABLE"}
//     </div>
//   );
// };
