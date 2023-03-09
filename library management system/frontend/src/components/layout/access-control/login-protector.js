import { NotificationManager } from "react-notifications";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { useUser } from "../../../context/user-context";

export const WithLoginProtector = ({ children }) => {
  const { user } = useSelector((state) => state.userReducer);
  if (user) {
    return children;
  } else {
    NotificationManager.error("Please login to proceed!");
  }
  return <Navigate to="/" replace />;
};

// export const WithLoginProtector = ({ children }) => {
//   const { user } = useUser();
//   if (user) {
//     return children;
//   } else {
//     NotificationManager.error("Please login to proceed!");
//   }
//   return <Navigate to="/" replace />;
// };
