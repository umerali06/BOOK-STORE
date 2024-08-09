import { Navbar } from "../components/Navbar";
import { SignUp } from "../components/SignUp";

export const SignUpMe = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <div className="h-[100vh] w-[100vw] absolute bg-[rgba(0,0,0,0.7)] top-0 left-0 z-[500]"></div>
      <div className="mx-auto"></div>
      <SignUp />
    </div>
  );
};
