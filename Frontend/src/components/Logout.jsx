/* eslint-disable no-unused-vars */
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";
// import { Navigate } from "react-router-dom";

export const Logout = () => {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({ ...authUser, users: null });
      toast.success("Logged out successfully");
      setTimeout(() => {
        window.location.reload();
        localStorage.removeItem("users");
      }, 1500);
    } catch (error) {
      toast.error("error:", error.message);
    }
  };
  return (
    <div>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};
