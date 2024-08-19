import React from "react";
import SidebarComponent from "../components/SidebarComponent";
import SideAreaComponent from "../components/SideAreaComponent";

export default function () {
  return (
    <div>
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
