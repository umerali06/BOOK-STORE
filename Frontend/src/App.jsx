/* eslint-disable no-unused-vars */
import { About } from "./About/About";
import { Courses } from "./Courses/Courses";
import { Home } from "./Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import { SignUpMe } from "./LoginSignUp/SignUpMe";
import { LoginMe } from "./LoginSignUp/LoginMe";
// import { Contact } from "./components/Contact";
import { ContactMe } from "./Contact/ContactMe";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Courses"
            element={authUser ? <Courses /> : <Navigate to="/signUp" />}
          />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<ContactMe />} />
          <Route path="/SignUp" element={<SignUpMe />} />
          <Route path="/Login" element={<LoginMe />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
